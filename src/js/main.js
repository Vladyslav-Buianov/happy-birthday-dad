import { spotPescaItalia, regioniNomi } from "./fishingSpots";
import { fetchFishInfo } from "./fishService";
import cardTemplate from "../markups/card.hbs";
import { alert, Stack } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

const container = document.getElementById("spots-container");
const regionSelect = document.getElementById("region-select");
const buttons = document.querySelectorAll(".filter-buttons button");

let regioneAttuale = "lazio";
let tipoAttuale = "all";
let userCoords = null;

const topCenterStack = new Stack({
  dir1: "down",
  dir2: "right",
  firstpos1: 25,
  spacing1: 15,
  push: "top",
  modal: false,
  context: document.body,
});

function inizializzaMenuRegioni() {
  let selectHtml = "";
  for (const [key, value] of Object.entries(regioniNomi)) {
    selectHtml += `<option value="${key}">${value}</option>`;
  }
  regionSelect.innerHTML = selectHtml;
  regionSelect.value = regioneAttuale;
}

function calcolaDistanzaKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(0);
}

function aggiornaDistanzeInterfaccia() {
  if (!userCoords) return;
  const kmElements = document.querySelectorAll(".km-value");
  kmElements.forEach((el) => {
    const destLat = parseFloat(el.getAttribute("data-lat"));
    const destLon = parseFloat(el.getAttribute("data-lon"));
    const dist = calcolaDistanzaKm(
      userCoords.lat,
      userCoords.lon,
      destLat,
      destLon
    );
    el.innerText = `~${dist} км (твоя геопозиція)`;
  });
}

function caricaPosizioneSalvata() {
  const cachedCoords = localStorage.getItem("user_fishing_coords");
  if (cachedCoords) {
    try {
      userCoords = JSON.parse(cachedCoords);
      aggiornaDistanzeInterfaccia();
    } catch (e) {
      console.error("Errore nel parsing del localStorage", e);
    }
  }
}

function richiediPosizioneReale() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        userCoords = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        localStorage.setItem("user_fishing_coords", JSON.stringify(userCoords));
        aggiornaDistanzeInterfaccia();
      },
      (error) => {
        console.warn("Geolocalizzazione non disponibile.");
      },
      { enableHighAccuracy: true, timeout: 5000 }
    );
  }
}

async function renderCards() {
  container.innerHTML = '<div class="loader">Оновлення погоди...</div>';
  
  let filteredSpots = spotPescaItalia.filter(
    (spot) => spot.regione === regioneAttuale
  );
  if (tipoAttuale !== "all") {
    filteredSpots = filteredSpots.filter((spot) => spot.tipo === tipoAttuale);
  }
  if (filteredSpots.length === 0) {
    container.innerHTML =
      '<p class="no-data">У цьому регіоні поки немає обраного типу водойм 🎣</p>';
    return;
  }
  
  const oraAttualeISO = new Date().toISOString().substring(0, 13) + ":00";
  
  try {
    const cardPromises = filteredSpots.map(async (spot) => {
      let meteoInfo = "Немає даних";
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${spot.lat}&longitude=${spot.lon}&hourly=temperature_2m&timezone=Europe%2FBerlin`
        );
        const data = await res.json();
        if (data.hourly && data.hourly.time) {
          const indiceOra = data.hourly.time.findIndex((t) =>
            t.startsWith(oraAttualeISO.substring(0, 13))
          );
          const indexFinal = indiceOra !== -1 ? indiceOra : 0;
          meteoInfo = `${data.hourly.temperature_2m[indexFinal]}°C`;
        }
      } catch (e) {
        console.error("Errore Fetch Meteo:", e);
      }
      
      return cardTemplate({
        ...spot,
        meteoInfo,
      });
    });

    const htmlCardsArray = await Promise.all(cardPromises);
    container.innerHTML = htmlCardsArray.join("");
    aggiornaDistanzeInterfaccia();

  } catch (error) {
    console.error("Errore durante il rendering:", error);
    container.innerHTML = '<p class="no-data">Сталася помилка при завантаженні даних.</p>';
  }
}

container.addEventListener("click", async (e) => {
  const targetLink = e.target.closest(".btn-navigatore");
  if (targetLink) {
    const nomePosto = targetLink.getAttribute("data-nome");
    const destLat = targetLink.getAttribute("data-lat");
    const destLon = targetLink.getAttribute("data-lon");
    if (userCoords) {
      targetLink.href = `https://www.google.com/maps/dir/?api=1&origin=${userCoords.lat},${userCoords.lon}&destination=${destLat},${destLon}`;
    }
    alert({
      title: "Чудовий вибір! 🌟",
      text: `Маршрут до місця "${nomePosto}" відкрито в новій вкладці. Гарної риболовлі!`,
      type: "info",
      stack: topCenterStack,
      delay: 3500,
    });
    return;
  }
  const fishBadge = e.target.closest(".badge-fish");
  if (fishBadge) {
    const fishName = fishBadge.getAttribute("data-fish");
    const cardId = fishBadge.getAttribute("data-card-id");
    const detailsContainer = document.getElementById(`details-${cardId}`);

    if (!detailsContainer) return;
    if (
      detailsContainer.style.display === "block" &&
      detailsContainer.dataset.currentFish === fishName
    ) {
      detailsContainer.style.display = "none";
      return;
    }
    detailsContainer.dataset.currentFish = fishName;
    detailsContainer.innerHTML = `<div class="fish-loading">Завантаження інформації про "${fishName}"...</div>`;
    detailsContainer.style.display = "block";

    const fishInfo = await fetchFishInfo(fishName);
    detailsContainer.innerHTML = `
      <div class="fish-info-box">
        <h3>${fishInfo.name}</h3>
        <div class="fish-img-wrapper">
        </div>
        <div class="fish-details-list">
          <p><strong>🛡️ Статус загрози:</strong> ${fishInfo.status}</p>
          <p><strong>🪱 Найкраща наживка:</strong> ${fishInfo.bait}</p>
          <p><strong>ℹ Загальна інформація:</strong> ${fishInfo.description}</p>
          <p><strong>💡 Цікавий факт:</strong> ${fishInfo.fact}</p>
        </div>
        <button type="button" class="btn-close-fish" onclick="this.closest('.fish-details-modal').style.display='none'">
          Закрити
        </button>
      </div>
    `;
  }
});

regionSelect.addEventListener("change", (e) => {
  regioneAttuale = e.target.value;
  renderCards();
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttons.forEach((btn) => btn.classList.remove('active'));
    e.target.classList.add("active");
    tipoAttuale = e.target.id.replace("btn-", "");
    renderCards();
  });
});

inizializzaMenuRegioni();
renderCards();
caricaPosizioneSalvata();
richiediPosizioneReale();