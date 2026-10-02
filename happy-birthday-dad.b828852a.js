// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"93v64":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "f3e508fdb828852a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"lhpGb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _fishingSpots = require("./fishingSpots");
var _cardHbs = require("../markups/card.hbs");
var _cardHbsDefault = parcelHelpers.interopDefault(_cardHbs);
var _core = require("@pnotify/core");
var _pnotifyCss = require("@pnotify/core/dist/PNotify.css");
var _brightThemeCss = require("@pnotify/core/dist/BrightTheme.css");
const container = document.getElementById("spots-container");
const regionSelect = document.getElementById("region-select");
const buttons = document.querySelectorAll(".filter-buttons button");
let regioneAttuale = "lazio";
let tipoAttuale = "all";
let userCoords = null;
const topCenterStack = new (0, _core.Stack)({
    dir1: "down",
    dir2: "right",
    firstpos1: 25,
    spacing1: 15,
    push: "top",
    modal: false,
    context: document.body
});
function inizializzaMenuRegioni() {
    let selectHtml = "";
    for (const [key, value] of Object.entries((0, _fishingSpots.regioniNomi)))selectHtml += `<option value="${key}">${value}</option>`;
    regionSelect.innerHTML = selectHtml;
    regionSelect.value = regioneAttuale;
}
function calcolaDistanzaKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(0);
}
function aggiornaDistanzeInterfaccia() {
    if (!userCoords) return;
    const kmElements = document.querySelectorAll(".km-value");
    kmElements.forEach((el)=>{
        const destLat = parseFloat(el.getAttribute("data-lat"));
        const destLon = parseFloat(el.getAttribute("data-lon"));
        const dist = calcolaDistanzaKm(userCoords.lat, userCoords.lon, destLat, destLon);
        el.innerText = `~${dist} \u{43A}\u{43C} (\u{442}\u{432}\u{43E}\u{44F} \u{433}\u{435}\u{43E}\u{43F}\u{43E}\u{437}\u{438}\u{446}\u{456}\u{44F})`;
    });
}
function caricaPosizioneSalvata() {
    const cachedCoords = localStorage.getItem("user_fishing_coords");
    if (cachedCoords) try {
        userCoords = JSON.parse(cachedCoords);
        aggiornaDistanzeInterfaccia();
    } catch (e) {
        console.error("Errore nel parsing del localStorage", e);
    }
}
function richiediPosizioneReale() {
    if (navigator.geolocation) navigator.geolocation.getCurrentPosition((position)=>{
        userCoords = {
            lat: position.coords.latitude,
            lon: position.coords.longitude
        };
        localStorage.setItem("user_fishing_coords", JSON.stringify(userCoords));
        aggiornaDistanzeInterfaccia();
    }, (error)=>{
        console.warn("Geolocalizzazione non disponibile.");
    }, {
        enableHighAccuracy: true,
        timeout: 5000
    });
}
async function renderCards() {
    container.innerHTML = '<div class="loader">\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u043E\u0433\u043E\u0434\u0438...</div>';
    let filteredSpots = (0, _fishingSpots.spotPescaItalia).filter((spot)=>spot.regione === regioneAttuale);
    if (tipoAttuale !== "all") filteredSpots = filteredSpots.filter((spot)=>spot.tipo === tipoAttuale);
    if (filteredSpots.length === 0) {
        container.innerHTML = '<p class="no-data">\u0423 \u0446\u044C\u043E\u043C\u0443 \u0440\u0435\u0433\u0456\u043E\u043D\u0456 \u043F\u043E\u043A\u0438 \u043D\u0435\u043C\u0430\u0454 \u043E\u0431\u0440\u0430\u043D\u043E\u0433\u043E \u0442\u0438\u043F\u0443 \u0432\u043E\u0434\u043E\u0439\u043C \uD83C\uDFA3</p>';
        return;
    }
    const oraAttualeISO = new Date().toISOString().substring(0, 13) + ":00";
    try {
        const cardPromises = filteredSpots.map(async (spot)=>{
            let meteoInfo = "\u041D\u0435\u043C\u0430\u0454 \u0434\u0430\u043D\u0438\u0445";
            try {
                const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${spot.lat}&longitude=${spot.lon}&hourly=temperature_2m&timezone=Europe%2FBerlin`);
                const data = await res.json();
                if (data.hourly && data.hourly.time) {
                    const indiceOra = data.hourly.time.findIndex((t)=>t.startsWith(oraAttualeISO.substring(0, 13)));
                    const indexFinal = indiceOra !== -1 ? indiceOra : 0;
                    meteoInfo = `${data.hourly.temperature_2m[indexFinal]}\xb0C`;
                }
            } catch (e) {
                console.error("Errore Fetch Meteo:", e);
            }
            return (0, _cardHbsDefault.default)({
                ...spot,
                meteoInfo
            });
        });
        const htmlCardsArray = await Promise.all(cardPromises);
        container.innerHTML = htmlCardsArray.join("");
        aggiornaDistanzeInterfaccia();
    } catch (error) {
        console.error("Errore durante il rendering:", error);
        container.innerHTML = '<p class="no-data">\u0421\u0442\u0430\u043B\u0430\u0441\u044F \u043F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u0456 \u0434\u0430\u043D\u0438\u0445.</p>';
    }
}
container.addEventListener("click", (e)=>{
    const targetLink = e.target.closest(".btn-navigatore");
    if (targetLink) {
        const nomePosto = targetLink.getAttribute("data-nome");
        const destLat = targetLink.getAttribute("data-lat");
        const destLon = targetLink.getAttribute("data-lon");
        if (userCoords) targetLink.href = `https://google.com?api=1origin=${userCoords.lat},${userCoords.lon}&destination=${destLat},${destLon}`;
        (0, _core.alert)({
            title: "\u0427\u0443\u0434\u043E\u0432\u0438\u0439 \u0432\u0438\u0431\u0456\u0440! \uD83C\uDF1F",
            text: `\u{41C}\u{430}\u{440}\u{448}\u{440}\u{443}\u{442} \u{434}\u{43E} \u{43C}\u{456}\u{441}\u{446}\u{44F} "${nomePosto}" \u{432}\u{456}\u{434}\u{43A}\u{440}\u{438}\u{442}\u{43E} \u{432} \u{43D}\u{43E}\u{432}\u{456}\u{439} \u{432}\u{43A}\u{43B}\u{430}\u{434}\u{446}\u{456}. \u{413}\u{430}\u{440}\u{43D}\u{43E}\u{457} \u{440}\u{438}\u{431}\u{43E}\u{43B}\u{43E}\u{432}\u{43B}\u{456}!`,
            type: "info",
            stack: topCenterStack,
            delay: 3500
        });
    }
});
regionSelect.addEventListener("change", (e)=>{
    regioneAttuale = e.target.value;
    renderCards();
});
buttons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        buttons.forEach((btn)=>btn.classList.remove('active'));
        e.target.classList.add("active");
        tipoAttuale = e.target.id.replace("btn-", "");
        renderCards();
    });
});
inizializzaMenuRegioni();
renderCards();
caricaPosizioneSalvata();
richiediPosizioneReale();

},{"@pnotify/core":"fay4s","@pnotify/core/dist/PNotify.css":"c4y47","@pnotify/core/dist/BrightTheme.css":"grIyt","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","../markups/card.hbs":"juCeJ","./fishingSpots":"6wxm9"}],"fay4s":[function(require,module,exports,__globalThis) {
var global = arguments[3];
!function(t, e) {
    e(exports);
}(this, function(t) {
    "use strict";
    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        })(t);
    }
    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
        for(var n = 0; n < e.length; n++){
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }
    function o(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t;
    }
    function r(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t;
    }
    function s(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })), n.push.apply(n, i);
        }
        return n;
    }
    function a(t) {
        for(var e = 1; e < arguments.length; e++){
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? s(Object(n), !0).forEach(function(e) {
                r(t, e, n[e]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
        }
        return t;
    }
    function c(t) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
    }
    function l(t, e) {
        return (l = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t;
        })(t, e);
    }
    function u() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
        } catch (t) {
            return !1;
        }
    }
    function f(t, e, n) {
        return (f = u() ? Reflect.construct : function(t, e, n) {
            var i = [
                null
            ];
            i.push.apply(i, e);
            var o = new (Function.bind.apply(t, i));
            return n && l(o, n.prototype), o;
        }).apply(null, arguments);
    }
    function d(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    function h(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? d(t) : e;
    }
    function p(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t;
        }(t) || function(t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
            var n = [], i = !0, o = !1, r = void 0;
            try {
                for(var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
            } catch (t) {
                o = !0, r = t;
            } finally{
                try {
                    i || null == a.return || a.return();
                } finally{
                    if (o) throw r;
                }
            }
            return n;
        }(t, e) || v(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function m(t) {
        return function(t) {
            if (Array.isArray(t)) return y(t);
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
        }(t) || v(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function v(t, e) {
        if (t) {
            if ("string" == typeof t) return y(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(t, e) : void 0;
        }
    }
    function y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for(var n = 0, i = new Array(e); n < e; n++)i[n] = t[n];
        return i;
    }
    function g() {}
    function $(t, e) {
        for(var n in e)t[n] = e[n];
        return t;
    }
    function _(t) {
        return t();
    }
    function k() {
        return Object.create(null);
    }
    function x(t) {
        t.forEach(_);
    }
    function b(t) {
        return "function" == typeof t;
    }
    function w(t, n) {
        return t != t ? n == n : t !== n || t && "object" === e(t) || "function" == typeof t;
    }
    function O(t, e) {
        t.appendChild(e);
    }
    function C(t, e, n) {
        t.insertBefore(e, n || null);
    }
    function M(t) {
        t.parentNode.removeChild(t);
    }
    function T(t) {
        return document.createElement(t);
    }
    function H(t) {
        return document.createTextNode(t);
    }
    function E() {
        return H(" ");
    }
    function S() {
        return H("");
    }
    function N(t, e, n, i) {
        return t.addEventListener(e, n, i), function() {
            return t.removeEventListener(e, n, i);
        };
    }
    function P(t, e, n) {
        null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
    }
    function A(t) {
        return Array.from(t.childNodes);
    }
    function L(t, e) {
        e = "" + e, t.wholeText !== e && (t.data = e);
    }
    var j, R = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            n(this, t), this.a = e, this.e = this.n = null;
        }
        return o(t, [
            {
                key: "m",
                value: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    this.e || (this.e = T(e.nodeName), this.t = e, this.h(t)), this.i(n);
                }
            },
            {
                key: "h",
                value: function(t) {
                    this.e.innerHTML = t, this.n = Array.from(this.e.childNodes);
                }
            },
            {
                key: "i",
                value: function(t) {
                    for(var e = 0; e < this.n.length; e += 1)C(this.t, this.n[e], t);
                }
            },
            {
                key: "p",
                value: function(t) {
                    this.d(), this.h(t), this.i(this.a);
                }
            },
            {
                key: "d",
                value: function() {
                    this.n.forEach(M);
                }
            }
        ]), t;
    }();
    function W(t) {
        j = t;
    }
    function I() {
        if (!j) throw new Error("Function called outside component initialization");
        return j;
    }
    function D() {
        var t = I();
        return function(e, n) {
            var i = t.$$.callbacks[e];
            if (i) {
                var o = function(t, e) {
                    var n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(t, !1, !1, e), n;
                }(e, n);
                i.slice().forEach(function(e) {
                    e.call(t, o);
                });
            }
        };
    }
    function F(t, e) {
        var n = t.$$.callbacks[e.type];
        n && n.slice().forEach(function(t) {
            return t(e);
        });
    }
    var q = [], B = [], z = [], U = [], G = Promise.resolve(), J = !1;
    function K() {
        J || (J = !0, G.then(Z));
    }
    function Q() {
        return K(), G;
    }
    function V(t) {
        z.push(t);
    }
    var X = !1, Y = new Set;
    function Z() {
        if (!X) {
            X = !0;
            do {
                for(var t = 0; t < q.length; t += 1){
                    var e = q[t];
                    W(e), tt(e.$$);
                }
                for(W(null), q.length = 0; B.length;)B.pop()();
                for(var n = 0; n < z.length; n += 1){
                    var i = z[n];
                    Y.has(i) || (Y.add(i), i());
                }
                z.length = 0;
            }while (q.length);
            for(; U.length;)U.pop()();
            J = !1, X = !1, Y.clear();
        }
    }
    function tt(t) {
        if (null !== t.fragment) {
            t.update(), x(t.before_update);
            var e = t.dirty;
            t.dirty = [
                -1
            ], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(V);
        }
    }
    var et, nt = new Set;
    function it() {
        et = {
            r: 0,
            c: [],
            p: et
        };
    }
    function ot() {
        et.r || x(et.c), et = et.p;
    }
    function rt(t, e) {
        t && t.i && (nt.delete(t), t.i(e));
    }
    function st(t, e, n, i) {
        if (t && t.o) {
            if (nt.has(t)) return;
            nt.add(t), et.c.push(function() {
                nt.delete(t), i && (n && t.d(1), i());
            }), t.o(e);
        }
    }
    var at = "undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : global;
    function ct(t, e) {
        st(t, 1, 1, function() {
            e.delete(t.key);
        });
    }
    function lt(t, e, n, i, o, r, s, a, c, l, u, f) {
        for(var d = t.length, h = r.length, p = d, m = {}; p--;)m[t[p].key] = p;
        var v = [], y = new Map, g = new Map;
        for(p = h; p--;){
            var $ = f(o, r, p), _ = n($), k = s.get(_);
            k ? i && k.p($, e) : (k = l(_, $)).c(), y.set(_, v[p] = k), _ in m && g.set(_, Math.abs(p - m[_]));
        }
        var x = new Set, b = new Set;
        function w(t) {
            rt(t, 1), t.m(a, u), s.set(t.key, t), u = t.first, h--;
        }
        for(; d && h;){
            var O = v[h - 1], C = t[d - 1], M = O.key, T = C.key;
            O === C ? (u = O.first, d--, h--) : y.has(T) ? !s.has(M) || x.has(M) ? w(O) : b.has(T) ? d-- : g.get(M) > g.get(T) ? (b.add(M), w(O)) : (x.add(T), d--) : (c(C, s), d--);
        }
        for(; d--;){
            var H = t[d];
            y.has(H.key) || c(H, s);
        }
        for(; h;)w(v[h - 1]);
        return v;
    }
    function ut(t, e) {
        for(var n = {}, i = {}, o = {
            $$scope: 1
        }, r = t.length; r--;){
            var s = t[r], a = e[r];
            if (a) {
                for(var c in s)c in a || (i[c] = 1);
                for(var l in a)o[l] || (n[l] = a[l], o[l] = 1);
                t[r] = a;
            } else for(var u in s)o[u] = 1;
        }
        for(var f in i)f in n || (n[f] = void 0);
        return n;
    }
    function ft(t) {
        return "object" === e(t) && null !== t ? t : {};
    }
    function dt(t) {
        t && t.c();
    }
    function ht(t, e, n) {
        var i = t.$$, o = i.fragment, r = i.on_mount, s = i.on_destroy, a = i.after_update;
        o && o.m(e, n), V(function() {
            var e = r.map(_).filter(b);
            s ? s.push.apply(s, m(e)) : x(e), t.$$.on_mount = [];
        }), a.forEach(V);
    }
    function pt(t, e) {
        var n = t.$$;
        null !== n.fragment && (x(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
    }
    function mt(t, e) {
        -1 === t.$$.dirty[0] && (q.push(t), K(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
    }
    var vt = function() {
        function t() {
            n(this, t);
        }
        return o(t, [
            {
                key: "$destroy",
                value: function() {
                    pt(this, 1), this.$destroy = g;
                }
            },
            {
                key: "$on",
                value: function(t, e) {
                    var n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
                    return n.push(e), function() {
                        var t = n.indexOf(e);
                        -1 !== t && n.splice(t, 1);
                    };
                }
            },
            {
                key: "$set",
                value: function(t) {
                    var e;
                    this.$$set && (e = t, 0 !== Object.keys(e).length) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
                }
            }
        ]), t;
    }(), yt = function() {
        function t(e) {
            if (n(this, t), Object.assign(this, {
                dir1: null,
                dir2: null,
                firstpos1: null,
                firstpos2: null,
                spacing1: 25,
                spacing2: 25,
                push: "bottom",
                maxOpen: 1,
                maxStrategy: "wait",
                maxClosureCausesWait: !0,
                modal: "ish",
                modalishFlash: !0,
                overlayClose: !0,
                overlayClosesPinned: !1,
                positioned: !0,
                context: window && document.body || null
            }, e), "ish" === this.modal && 1 !== this.maxOpen) throw new Error("A modalish stack must have a maxOpen value of 1.");
            if ("ish" === this.modal && !this.dir1) throw new Error("A modalish stack must have a direction.");
            if ("top" === this.push && "ish" === this.modal && "close" !== this.maxStrategy) throw new Error("A modalish stack that pushes to the top must use the close maxStrategy.");
            this._noticeHead = {
                notice: null,
                prev: null,
                next: null
            }, this._noticeTail = {
                notice: null,
                prev: this._noticeHead,
                next: null
            }, this._noticeHead.next = this._noticeTail, this._noticeMap = new WeakMap, this._length = 0, this._addpos2 = 0, this._animation = !0, this._posTimer = null, this._openNotices = 0, this._listener = null, this._overlayOpen = !1, this._overlayInserted = !1, this._collapsingModalState = !1, this._leader = null, this._leaderOff = null, this._masking = null, this._maskingOff = null, this._swapping = !1, this._callbacks = {};
        }
        return o(t, [
            {
                key: "forEach",
                value: function(t) {
                    var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = n.start, o = void 0 === i ? "oldest" : i, r = n.dir, s = void 0 === r ? "newer" : r, a = n.skipModuleHandled, c = void 0 !== a && a;
                    if ("head" === o || "newest" === o && "top" === this.push || "oldest" === o && "bottom" === this.push) e = this._noticeHead.next;
                    else if ("tail" === o || "newest" === o && "bottom" === this.push || "oldest" === o && "top" === this.push) e = this._noticeTail.prev;
                    else {
                        if (!this._noticeMap.has(o)) throw new Error("Invalid start param.");
                        e = this._noticeMap.get(o);
                    }
                    for(; e.notice;){
                        var l = e.notice;
                        if ("prev" === s || "top" === this.push && "newer" === s || "bottom" === this.push && "older" === s) e = e.prev;
                        else {
                            if (!("next" === s || "top" === this.push && "older" === s || "bottom" === this.push && "newer" === s)) throw new Error("Invalid dir param.");
                            e = e.next;
                        }
                        if (!(c && l.getModuleHandled() || !1 !== t(l))) break;
                    }
                }
            },
            {
                key: "close",
                value: function(t) {
                    this.forEach(function(e) {
                        return e.close(t, !1, !1);
                    });
                }
            },
            {
                key: "open",
                value: function(t) {
                    this.forEach(function(e) {
                        return e.open(t);
                    });
                }
            },
            {
                key: "openLast",
                value: function() {
                    this.forEach(function(t) {
                        if (-1 === [
                            "opening",
                            "open",
                            "waiting"
                        ].indexOf(t.getState())) return t.open(), !1;
                    }, {
                        start: "newest",
                        dir: "older"
                    });
                }
            },
            {
                key: "swap",
                value: function(t, e) {
                    var n = this, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    return -1 === [
                        "open",
                        "opening",
                        "closing"
                    ].indexOf(t.getState()) ? Promise.reject() : (this._swapping = e, t.close(i, !1, o).then(function() {
                        return e.open(i);
                    }).finally(function() {
                        n._swapping = !1;
                    }));
                }
            },
            {
                key: "on",
                value: function(t, e) {
                    var n = this;
                    return t in this._callbacks || (this._callbacks[t] = []), this._callbacks[t].push(e), function() {
                        n._callbacks[t].splice(n._callbacks[t].indexOf(e), 1);
                    };
                }
            },
            {
                key: "fire",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    e.stack = this, t in this._callbacks && this._callbacks[t].forEach(function(t) {
                        return t(e);
                    });
                }
            },
            {
                key: "position",
                value: function() {
                    var t = this;
                    this.positioned && this._length > 0 ? (this.fire("beforePosition"), this._resetPositionData(), this.forEach(function(e) {
                        t._positionNotice(e);
                    }, {
                        start: "head",
                        dir: "next",
                        skipModuleHandled: !0
                    }), this.fire("afterPosition")) : (delete this._nextpos1, delete this._nextpos2);
                }
            },
            {
                key: "queuePosition",
                value: function() {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
                    this._posTimer && clearTimeout(this._posTimer), this._posTimer = setTimeout(function() {
                        return t.position();
                    }, e);
                }
            },
            {
                key: "_resetPositionData",
                value: function() {
                    this._nextpos1 = this.firstpos1, this._nextpos2 = this.firstpos2, this._addpos2 = 0;
                }
            },
            {
                key: "_positionNotice",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t === this._masking;
                    if (this.positioned) {
                        var n = t.refs.elem;
                        if (n && (n.classList.contains("pnotify-in") || n.classList.contains("pnotify-initial") || e)) {
                            var i = [
                                this.firstpos1,
                                this.firstpos2,
                                this._nextpos1,
                                this._nextpos2,
                                this._addpos2
                            ], o = i[0], r = i[1], s = i[2], a = i[3], c = i[4];
                            n.getBoundingClientRect(), !this._animation || e || this._collapsingModalState ? t._setMoveClass("") : t._setMoveClass("pnotify-move");
                            var l, u = this.context === document.body ? window.innerHeight : this.context.scrollHeight, f = this.context === document.body ? window.innerWidth : this.context.scrollWidth;
                            if (this.dir1) {
                                var d;
                                switch(l = ({
                                    down: "top",
                                    up: "bottom",
                                    left: "right",
                                    right: "left"
                                })[this.dir1], this.dir1){
                                    case "down":
                                        d = n.offsetTop;
                                        break;
                                    case "up":
                                        d = u - n.scrollHeight - n.offsetTop;
                                        break;
                                    case "left":
                                        d = f - n.scrollWidth - n.offsetLeft;
                                        break;
                                    case "right":
                                        d = n.offsetLeft;
                                }
                                null == o && (s = o = d);
                            }
                            if (this.dir1 && this.dir2) {
                                var h, p = {
                                    down: "top",
                                    up: "bottom",
                                    left: "right",
                                    right: "left"
                                }[this.dir2];
                                switch(this.dir2){
                                    case "down":
                                        h = n.offsetTop;
                                        break;
                                    case "up":
                                        h = u - n.scrollHeight - n.offsetTop;
                                        break;
                                    case "left":
                                        h = f - n.scrollWidth - n.offsetLeft;
                                        break;
                                    case "right":
                                        h = n.offsetLeft;
                                }
                                if (null == r && (a = r = h), !e) {
                                    var m = s + n.offsetHeight + this.spacing1, v = s + n.offsetWidth + this.spacing1;
                                    (("down" === this.dir1 || "up" === this.dir1) && m > u || ("left" === this.dir1 || "right" === this.dir1) && v > f) && (s = o, a += c + this.spacing2, c = 0);
                                }
                                switch(null != a && (n.style[p] = "".concat(a, "px"), this._animation || n.style[p]), this.dir2){
                                    case "down":
                                    case "up":
                                        n.offsetHeight + (parseFloat(n.style.marginTop, 10) || 0) + (parseFloat(n.style.marginBottom, 10) || 0) > c && (c = n.offsetHeight);
                                        break;
                                    case "left":
                                    case "right":
                                        n.offsetWidth + (parseFloat(n.style.marginLeft, 10) || 0) + (parseFloat(n.style.marginRight, 10) || 0) > c && (c = n.offsetWidth);
                                }
                            } else if (this.dir1) {
                                var y, g;
                                switch(this.dir1){
                                    case "down":
                                    case "up":
                                        g = [
                                            "left",
                                            "right"
                                        ], y = this.context.scrollWidth / 2 - n.offsetWidth / 2;
                                        break;
                                    case "left":
                                    case "right":
                                        g = [
                                            "top",
                                            "bottom"
                                        ], y = u / 2 - n.offsetHeight / 2;
                                }
                                n.style[g[0]] = "".concat(y, "px"), n.style[g[1]] = "auto", this._animation || n.style[g[0]];
                            }
                            if (this.dir1) switch(null != s && (n.style[l] = "".concat(s, "px"), this._animation || n.style[l]), this.dir1){
                                case "down":
                                case "up":
                                    s += n.offsetHeight + this.spacing1;
                                    break;
                                case "left":
                                case "right":
                                    s += n.offsetWidth + this.spacing1;
                            }
                            else {
                                var $ = f / 2 - n.offsetWidth / 2, _ = u / 2 - n.offsetHeight / 2;
                                n.style.left = "".concat($, "px"), n.style.top = "".concat(_, "px"), this._animation || n.style.left;
                            }
                            e || (this.firstpos1 = o, this.firstpos2 = r, this._nextpos1 = s, this._nextpos2 = a, this._addpos2 = c);
                        }
                    }
                }
            },
            {
                key: "_addNotice",
                value: function(t) {
                    var e = this;
                    this.fire("beforeAddNotice", {
                        notice: t
                    });
                    var n = function() {
                        if (e.fire("beforeOpenNotice", {
                            notice: t
                        }), t.getModuleHandled()) e.fire("afterOpenNotice", {
                            notice: t
                        });
                        else {
                            if (e._openNotices++, ("ish" !== e.modal || !e._overlayOpen) && e.maxOpen !== 1 / 0 && e._openNotices > e.maxOpen && "close" === e.maxStrategy) {
                                var n = e._openNotices - e.maxOpen;
                                e.forEach(function(t) {
                                    if (-1 !== [
                                        "opening",
                                        "open"
                                    ].indexOf(t.getState())) return t.close(!1, !1, e.maxClosureCausesWait), t === e._leader && e._setLeader(null), !!--n;
                                });
                            }
                            !0 === e.modal && e._insertOverlay(), "ish" !== e.modal || e._leader && -1 !== [
                                "opening",
                                "open",
                                "closing"
                            ].indexOf(e._leader.getState()) || e._setLeader(t), "ish" === e.modal && e._overlayOpen && t._preventTimerClose(!0), e.fire("afterOpenNotice", {
                                notice: t
                            });
                        }
                    }, i = {
                        notice: t,
                        prev: null,
                        next: null,
                        beforeOpenOff: t.on("pnotify:beforeOpen", n),
                        afterCloseOff: t.on("pnotify:afterClose", function() {
                            if (e.fire("beforeCloseNotice", {
                                notice: t
                            }), t.getModuleHandled()) e.fire("afterCloseNotice", {
                                notice: t
                            });
                            else {
                                if (e._openNotices--, "ish" === e.modal && t === e._leader && (e._setLeader(null), e._masking && e._setMasking(null)), !e._swapping && e.maxOpen !== 1 / 0 && e._openNotices < e.maxOpen) {
                                    var n = !1, i = function(i) {
                                        if (i !== t && "waiting" === i.getState() && (i.open().catch(function() {}), e._openNotices >= e.maxOpen)) return n = !0, !1;
                                    };
                                    "wait" === e.maxStrategy ? (e.forEach(i, {
                                        start: t,
                                        dir: "next"
                                    }), n || e.forEach(i, {
                                        start: t,
                                        dir: "prev"
                                    })) : "close" === e.maxStrategy && e.maxClosureCausesWait && (e.forEach(i, {
                                        start: t,
                                        dir: "older"
                                    }), n || e.forEach(i, {
                                        start: t,
                                        dir: "newer"
                                    }));
                                }
                                e._openNotices <= 0 ? (e._openNotices = 0, e._resetPositionData(), e._overlayOpen && !e._swapping && e._removeOverlay()) : e._collapsingModalState || e.queuePosition(0), e.fire("afterCloseNotice", {
                                    notice: t
                                });
                            }
                        })
                    };
                    if ("top" === this.push ? (i.next = this._noticeHead.next, i.prev = this._noticeHead, i.next.prev = i, i.prev.next = i) : (i.prev = this._noticeTail.prev, i.next = this._noticeTail, i.prev.next = i, i.next.prev = i), this._noticeMap.set(t, i), this._length++, this._listener || (this._listener = function() {
                        return e.position();
                    }, this.context.addEventListener("pnotify:position", this._listener)), -1 !== [
                        "open",
                        "opening",
                        "closing"
                    ].indexOf(t.getState())) n();
                    else if ("ish" === this.modal && this.modalishFlash && this._shouldNoticeWait(t)) var o = t.on("pnotify:mount", function() {
                        o(), t._setMasking(!0, !1, function() {
                            t._setMasking(!1);
                        }), e._resetPositionData(), e._positionNotice(e._leader), window.requestAnimationFrame(function() {
                            e._positionNotice(t, !0);
                        });
                    });
                    this.fire("afterAddNotice", {
                        notice: t
                    });
                }
            },
            {
                key: "_removeNotice",
                value: function(t) {
                    if (this._noticeMap.has(t)) {
                        this.fire("beforeRemoveNotice", {
                            notice: t
                        });
                        var e = this._noticeMap.get(t);
                        this._leader === t && this._setLeader(null), this._masking === t && this._setMasking(null), e.prev.next = e.next, e.next.prev = e.prev, e.prev = null, e.next = null, e.beforeOpenOff(), e.beforeOpenOff = null, e.afterCloseOff(), e.afterCloseOff = null, this._noticeMap.delete(t), this._length--, !this._length && this._listener && (this.context.removeEventListener("pnotify:position", this._listener), this._listener = null), !this._length && this._overlayOpen && this._removeOverlay(), -1 !== [
                            "open",
                            "opening",
                            "closing"
                        ].indexOf(t.getState()) && this._handleNoticeClosed(t), this.fire("afterRemoveNotice", {
                            notice: t
                        });
                    }
                }
            },
            {
                key: "_setLeader",
                value: function(t) {
                    var e = this;
                    if (this.fire("beforeSetLeader", {
                        leader: t
                    }), this._leaderOff && (this._leaderOff(), this._leaderOff = null), this._leader = t, this._leader) {
                        var n, i = function() {
                            var t = null;
                            e._overlayOpen && (e._collapsingModalState = !0, e.forEach(function(n) {
                                n._preventTimerClose(!1), n !== e._leader && -1 !== [
                                    "opening",
                                    "open"
                                ].indexOf(n.getState()) && (t || (t = n), n.close(n === t, !1, !0));
                            }, {
                                start: e._leader,
                                dir: "next",
                                skipModuleHandled: !0
                            }), e._removeOverlay()), o && (clearTimeout(o), o = null), e.forEach(function(n) {
                                if (n !== e._leader) return "waiting" === n.getState() || n === t ? (e._setMasking(n, !!t), !1) : void 0;
                            }, {
                                start: e._leader,
                                dir: "next",
                                skipModuleHandled: !0
                            });
                        }, o = null, r = function() {
                            o && (clearTimeout(o), o = null), o = setTimeout(function() {
                                o = null, e._setMasking(null);
                            }, 750);
                        };
                        this._leaderOff = (n = [
                            this._leader.on("mouseenter", i),
                            this._leader.on("focusin", i),
                            this._leader.on("mouseleave", r),
                            this._leader.on("focusout", r)
                        ], function() {
                            return n.map(function(t) {
                                return t();
                            });
                        }), this.fire("afterSetLeader", {
                            leader: t
                        });
                    } else this.fire("afterSetLeader", {
                        leader: t
                    });
                }
            },
            {
                key: "_setMasking",
                value: function(t, e) {
                    var n = this;
                    if (this._masking) {
                        if (this._masking === t) return;
                        this._masking._setMasking(!1, e);
                    }
                    if (this._maskingOff && (this._maskingOff(), this._maskingOff = null), this._masking = t, this._masking) {
                        this._resetPositionData(), this._leader && this._positionNotice(this._leader), this._masking._setMasking(!0, e), window.requestAnimationFrame(function() {
                            n._masking && n._positionNotice(n._masking);
                        });
                        var i, o = function() {
                            "ish" === n.modal && (n._insertOverlay(), n._setMasking(null, !0), n.forEach(function(t) {
                                t._preventTimerClose(!0), "waiting" === t.getState() && t.open();
                            }, {
                                start: n._leader,
                                dir: "next",
                                skipModuleHandled: !0
                            }));
                        };
                        this._maskingOff = (i = [
                            this._masking.on("mouseenter", o),
                            this._masking.on("focusin", o)
                        ], function() {
                            return i.map(function(t) {
                                return t();
                            });
                        });
                    }
                }
            },
            {
                key: "_shouldNoticeWait",
                value: function(t) {
                    return this._swapping !== t && !("ish" === this.modal && this._overlayOpen) && this.maxOpen !== 1 / 0 && this._openNotices >= this.maxOpen && "wait" === this.maxStrategy;
                }
            },
            {
                key: "_insertOverlay",
                value: function() {
                    var t = this;
                    this._overlay || (this._overlay = document.createElement("div"), this._overlay.classList.add("pnotify-modal-overlay"), this.dir1 && this._overlay.classList.add("pnotify-modal-overlay-".concat(this.dir1)), this.overlayClose && this._overlay.classList.add("pnotify-modal-overlay-closes"), this.context !== document.body && (this._overlay.style.height = "".concat(this.context.scrollHeight, "px"), this._overlay.style.width = "".concat(this.context.scrollWidth, "px")), this._overlay.addEventListener("click", function(e) {
                        if (t.overlayClose) {
                            if (t.fire("overlayClose", {
                                clickEvent: e
                            }), e.defaultPrevented) return;
                            t._leader && t._setLeader(null), t.forEach(function(e) {
                                -1 === [
                                    "closed",
                                    "closing",
                                    "waiting"
                                ].indexOf(e.getState()) && (e.hide || t.overlayClosesPinned ? e.close() : e.hide || "ish" !== t.modal || (t._leader ? e.close(!1, !1, !0) : t._setLeader(e)));
                            }, {
                                skipModuleHandled: !0
                            }), t._overlayOpen && t._removeOverlay();
                        }
                    })), this._overlay.parentNode !== this.context && (this.fire("beforeAddOverlay"), this._overlay.classList.remove("pnotify-modal-overlay-in"), this._overlay = this.context.insertBefore(this._overlay, this.context.firstChild), this._overlayOpen = !0, this._overlayInserted = !0, window.requestAnimationFrame(function() {
                        t._overlay.classList.add("pnotify-modal-overlay-in"), t.fire("afterAddOverlay");
                    })), this._collapsingModalState = !1;
                }
            },
            {
                key: "_removeOverlay",
                value: function() {
                    var t = this;
                    this._overlay.parentNode && (this.fire("beforeRemoveOverlay"), this._overlay.classList.remove("pnotify-modal-overlay-in"), this._overlayOpen = !1, setTimeout(function() {
                        t._overlayInserted = !1, t._overlay.parentNode && (t._overlay.parentNode.removeChild(t._overlay), t.fire("afterRemoveOverlay"));
                    }, 250), setTimeout(function() {
                        t._collapsingModalState = !1;
                    }, 400));
                }
            },
            {
                key: "notices",
                get: function() {
                    var t = [];
                    return this.forEach(function(e) {
                        return t.push(e);
                    }), t;
                }
            },
            {
                key: "length",
                get: function() {
                    return this._length;
                }
            },
            {
                key: "leader",
                get: function() {
                    return this._leader;
                }
            }
        ]), t;
    }(), gt = function() {
        for(var t = arguments.length, e = new Array(t), n = 0; n < t; n++)e[n] = arguments[n];
        return f(Jt, e);
    };
    var $t = at.Map;
    function _t(t, e, n) {
        var i = t.slice();
        return i[109] = e[n][0], i[110] = e[n][1], i;
    }
    function kt(t, e, n) {
        var i = t.slice();
        return i[109] = e[n][0], i[110] = e[n][1], i;
    }
    function xt(t, e, n) {
        var i = t.slice();
        return i[109] = e[n][0], i[110] = e[n][1], i;
    }
    function bt(t, e, n) {
        var i = t.slice();
        return i[109] = e[n][0], i[110] = e[n][1], i;
    }
    function wt(t, e) {
        var n, i, o, r, s = [
            {
                self: e[42]
            },
            e[110]
        ], a = e[109].default;
        function c(t) {
            for(var e = {}, n = 0; n < s.length; n += 1)e = $(e, s[n]);
            return {
                props: e
            };
        }
        return a && (i = new a(c())), {
            key: t,
            first: null,
            c: function() {
                n = S(), i && dt(i.$$.fragment), o = S(), this.first = n;
            },
            m: function(t, e) {
                C(t, n, e), i && ht(i, t, e), C(t, o, e), r = !0;
            },
            p: function(t, e) {
                var n = 2176 & e[1] ? ut(s, [
                    2048 & e[1] && {
                        self: t[42]
                    },
                    128 & e[1] && ft(t[110])
                ]) : {};
                if (a !== (a = t[109].default)) {
                    if (i) {
                        it();
                        var r = i;
                        st(r.$$.fragment, 1, 0, function() {
                            pt(r, 1);
                        }), ot();
                    }
                    a ? (dt((i = new a(c())).$$.fragment), rt(i.$$.fragment, 1), ht(i, o.parentNode, o)) : i = null;
                } else a && i.$set(n);
            },
            i: function(t) {
                r || (i && rt(i.$$.fragment, t), r = !0);
            },
            o: function(t) {
                i && st(i.$$.fragment, t), r = !1;
            },
            d: function(t) {
                t && M(n), t && M(o), i && pt(i, t);
            }
        };
    }
    function Ot(t) {
        var e, n, i, o, r, s;
        return {
            c: function() {
                e = T("div"), P(n = T("span"), "class", t[22]("closer")), P(e, "class", i = "pnotify-closer ".concat(t[21]("closer"), " ").concat(t[17] && !t[26] || t[28] ? "pnotify-hidden" : "")), P(e, "role", "button"), P(e, "tabindex", "0"), P(e, "title", o = t[20].close);
            },
            m: function(i, o) {
                C(i, e, o), O(e, n), r || (s = N(e, "click", t[81]), r = !0);
            },
            p: function(t, n) {
                335675392 & n[0] && i !== (i = "pnotify-closer ".concat(t[21]("closer"), " ").concat(t[17] && !t[26] || t[28] ? "pnotify-hidden" : "")) && P(e, "class", i), 1048576 & n[0] && o !== (o = t[20].close) && P(e, "title", o);
            },
            d: function(t) {
                t && M(e), r = !1, s();
            }
        };
    }
    function Ct(t) {
        var e, n, i, o, r, s, a, c;
        return {
            c: function() {
                e = T("div"), P(n = T("span"), "class", i = "".concat(t[22]("sticker"), " ").concat(t[3] ? t[22]("unstuck") : t[22]("stuck"))), P(e, "class", o = "pnotify-sticker ".concat(t[21]("sticker"), " ").concat(t[19] && !t[26] || t[28] ? "pnotify-hidden" : "")), P(e, "role", "button"), P(e, "aria-pressed", r = !t[3]), P(e, "tabindex", "0"), P(e, "title", s = t[3] ? t[20].stick : t[20].unstick);
            },
            m: function(i, o) {
                C(i, e, o), O(e, n), a || (c = N(e, "click", t[82]), a = !0);
            },
            p: function(t, a) {
                8 & a[0] && i !== (i = "".concat(t[22]("sticker"), " ").concat(t[3] ? t[22]("unstuck") : t[22]("stuck"))) && P(n, "class", i), 336068608 & a[0] && o !== (o = "pnotify-sticker ".concat(t[21]("sticker"), " ").concat(t[19] && !t[26] || t[28] ? "pnotify-hidden" : "")) && P(e, "class", o), 8 & a[0] && r !== (r = !t[3]) && P(e, "aria-pressed", r), 1048584 & a[0] && s !== (s = t[3] ? t[20].stick : t[20].unstick) && P(e, "title", s);
            },
            d: function(t) {
                t && M(e), a = !1, c();
            }
        };
    }
    function Mt(t) {
        var e, n, i;
        return {
            c: function() {
                e = T("div"), P(n = T("span"), "class", i = !0 === t[13] ? t[22](t[4]) : t[13]), P(e, "class", "pnotify-icon ".concat(t[21]("icon")));
            },
            m: function(i, o) {
                C(i, e, o), O(e, n), t[83](e);
            },
            p: function(t, e) {
                8208 & e[0] && i !== (i = !0 === t[13] ? t[22](t[4]) : t[13]) && P(n, "class", i);
            },
            d: function(n) {
                n && M(e), t[83](null);
            }
        };
    }
    function Tt(t, e) {
        var n, i, o, r, s = [
            {
                self: e[42]
            },
            e[110]
        ], a = e[109].default;
        function c(t) {
            for(var e = {}, n = 0; n < s.length; n += 1)e = $(e, s[n]);
            return {
                props: e
            };
        }
        return a && (i = new a(c())), {
            key: t,
            first: null,
            c: function() {
                n = S(), i && dt(i.$$.fragment), o = S(), this.first = n;
            },
            m: function(t, e) {
                C(t, n, e), i && ht(i, t, e), C(t, o, e), r = !0;
            },
            p: function(t, e) {
                var n = 2304 & e[1] ? ut(s, [
                    2048 & e[1] && {
                        self: t[42]
                    },
                    256 & e[1] && ft(t[110])
                ]) : {};
                if (a !== (a = t[109].default)) {
                    if (i) {
                        it();
                        var r = i;
                        st(r.$$.fragment, 1, 0, function() {
                            pt(r, 1);
                        }), ot();
                    }
                    a ? (dt((i = new a(c())).$$.fragment), rt(i.$$.fragment, 1), ht(i, o.parentNode, o)) : i = null;
                } else a && i.$set(n);
            },
            i: function(t) {
                r || (i && rt(i.$$.fragment, t), r = !0);
            },
            o: function(t) {
                i && st(i.$$.fragment, t), r = !1;
            },
            d: function(t) {
                t && M(n), t && M(o), i && pt(i, t);
            }
        };
    }
    function Ht(t) {
        var e, n = !t[34] && Et(t);
        return {
            c: function() {
                e = T("div"), n && n.c(), P(e, "class", "pnotify-title ".concat(t[21]("title")));
            },
            m: function(i, o) {
                C(i, e, o), n && n.m(e, null), t[84](e);
            },
            p: function(t, i) {
                t[34] ? n && (n.d(1), n = null) : n ? n.p(t, i) : ((n = Et(t)).c(), n.m(e, null));
            },
            d: function(i) {
                i && M(e), n && n.d(), t[84](null);
            }
        };
    }
    function Et(t) {
        var e;
        function n(t, e) {
            return t[6] ? Nt : St;
        }
        var i = n(t), o = i(t);
        return {
            c: function() {
                o.c(), e = S();
            },
            m: function(t, n) {
                o.m(t, n), C(t, e, n);
            },
            p: function(t, r) {
                i === (i = n(t)) && o ? o.p(t, r) : (o.d(1), (o = i(t)) && (o.c(), o.m(e.parentNode, e)));
            },
            d: function(t) {
                o.d(t), t && M(e);
            }
        };
    }
    function St(t) {
        var e, n;
        return {
            c: function() {
                e = T("span"), n = H(t[5]), P(e, "class", "pnotify-pre-line");
            },
            m: function(t, i) {
                C(t, e, i), O(e, n);
            },
            p: function(t, e) {
                32 & e[0] && L(n, t[5]);
            },
            d: function(t) {
                t && M(e);
            }
        };
    }
    function Nt(t) {
        var e, n;
        return {
            c: function() {
                n = S(), e = new R(n);
            },
            m: function(i, o) {
                e.m(t[5], i, o), C(i, n, o);
            },
            p: function(t, n) {
                32 & n[0] && e.p(t[5]);
            },
            d: function(t) {
                t && M(n), t && e.d();
            }
        };
    }
    function Pt(t) {
        var e, n, i = !t[35] && At(t);
        return {
            c: function() {
                e = T("div"), i && i.c(), P(e, "class", n = "pnotify-text ".concat(t[21]("text"), " ").concat("" === t[33] ? "" : "pnotify-text-with-max-height")), P(e, "style", t[33]), P(e, "role", "alert");
            },
            m: function(n, o) {
                C(n, e, o), i && i.m(e, null), t[85](e);
            },
            p: function(t, o) {
                t[35] ? i && (i.d(1), i = null) : i ? i.p(t, o) : ((i = At(t)).c(), i.m(e, null)), 4 & o[1] && n !== (n = "pnotify-text ".concat(t[21]("text"), " ").concat("" === t[33] ? "" : "pnotify-text-with-max-height")) && P(e, "class", n), 4 & o[1] && P(e, "style", t[33]);
            },
            d: function(n) {
                n && M(e), i && i.d(), t[85](null);
            }
        };
    }
    function At(t) {
        var e;
        function n(t, e) {
            return t[8] ? jt : Lt;
        }
        var i = n(t), o = i(t);
        return {
            c: function() {
                o.c(), e = S();
            },
            m: function(t, n) {
                o.m(t, n), C(t, e, n);
            },
            p: function(t, r) {
                i === (i = n(t)) && o ? o.p(t, r) : (o.d(1), (o = i(t)) && (o.c(), o.m(e.parentNode, e)));
            },
            d: function(t) {
                o.d(t), t && M(e);
            }
        };
    }
    function Lt(t) {
        var e, n;
        return {
            c: function() {
                e = T("span"), n = H(t[7]), P(e, "class", "pnotify-pre-line");
            },
            m: function(t, i) {
                C(t, e, i), O(e, n);
            },
            p: function(t, e) {
                128 & e[0] && L(n, t[7]);
            },
            d: function(t) {
                t && M(e);
            }
        };
    }
    function jt(t) {
        var e, n;
        return {
            c: function() {
                n = S(), e = new R(n);
            },
            m: function(i, o) {
                e.m(t[7], i, o), C(i, n, o);
            },
            p: function(t, n) {
                128 & n[0] && e.p(t[7]);
            },
            d: function(t) {
                t && M(n), t && e.d();
            }
        };
    }
    function Rt(t, e) {
        var n, i, o, r, s = [
            {
                self: e[42]
            },
            e[110]
        ], a = e[109].default;
        function c(t) {
            for(var e = {}, n = 0; n < s.length; n += 1)e = $(e, s[n]);
            return {
                props: e
            };
        }
        return a && (i = new a(c())), {
            key: t,
            first: null,
            c: function() {
                n = S(), i && dt(i.$$.fragment), o = S(), this.first = n;
            },
            m: function(t, e) {
                C(t, n, e), i && ht(i, t, e), C(t, o, e), r = !0;
            },
            p: function(t, e) {
                var n = 2560 & e[1] ? ut(s, [
                    2048 & e[1] && {
                        self: t[42]
                    },
                    512 & e[1] && ft(t[110])
                ]) : {};
                if (a !== (a = t[109].default)) {
                    if (i) {
                        it();
                        var r = i;
                        st(r.$$.fragment, 1, 0, function() {
                            pt(r, 1);
                        }), ot();
                    }
                    a ? (dt((i = new a(c())).$$.fragment), rt(i.$$.fragment, 1), ht(i, o.parentNode, o)) : i = null;
                } else a && i.$set(n);
            },
            i: function(t) {
                r || (i && rt(i.$$.fragment, t), r = !0);
            },
            o: function(t) {
                i && st(i.$$.fragment, t), r = !1;
            },
            d: function(t) {
                t && M(n), t && M(o), i && pt(i, t);
            }
        };
    }
    function Wt(t, e) {
        var n, i, o, r, s = [
            {
                self: e[42]
            },
            e[110]
        ], a = e[109].default;
        function c(t) {
            for(var e = {}, n = 0; n < s.length; n += 1)e = $(e, s[n]);
            return {
                props: e
            };
        }
        return a && (i = new a(c())), {
            key: t,
            first: null,
            c: function() {
                n = S(), i && dt(i.$$.fragment), o = S(), this.first = n;
            },
            m: function(t, e) {
                C(t, n, e), i && ht(i, t, e), C(t, o, e), r = !0;
            },
            p: function(t, e) {
                var n = 3072 & e[1] ? ut(s, [
                    2048 & e[1] && {
                        self: t[42]
                    },
                    1024 & e[1] && ft(t[110])
                ]) : {};
                if (a !== (a = t[109].default)) {
                    if (i) {
                        it();
                        var r = i;
                        st(r.$$.fragment, 1, 0, function() {
                            pt(r, 1);
                        }), ot();
                    }
                    a ? (dt((i = new a(c())).$$.fragment), rt(i.$$.fragment, 1), ht(i, o.parentNode, o)) : i = null;
                } else a && i.$set(n);
            },
            i: function(t) {
                r || (i && rt(i.$$.fragment, t), r = !0);
            },
            o: function(t) {
                i && st(i.$$.fragment, t), r = !1;
            },
            d: function(t) {
                t && M(n), t && M(o), i && pt(i, t);
            }
        };
    }
    function It(t) {
        for(var e, n, i, o, r, s, a, c, l, u, f, d, h, p, m, v, y, $ = [], _ = new $t, k = [], w = new $t, H = [], S = new $t, A = [], L = new $t, j = t[38], R = function(t) {
            return t[109];
        }, W = 0; W < j.length; W += 1){
            var I = bt(t, j, W), D = R(I);
            _.set(D, $[W] = wt(D, I));
        }
        for(var F = t[16] && !t[36] && Ot(t), q = t[18] && !t[36] && Ct(t), B = !1 !== t[13] && Mt(t), z = t[39], U = function(t) {
            return t[109];
        }, G = 0; G < z.length; G += 1){
            var J = xt(t, z, G), K = U(J);
            w.set(K, k[G] = Tt(K, J));
        }
        for(var Q = !1 !== t[5] && Ht(t), V = !1 !== t[7] && Pt(t), X = t[40], Y = function(t) {
            return t[109];
        }, Z = 0; Z < X.length; Z += 1){
            var tt = kt(t, X, Z), et = Y(tt);
            S.set(et, H[Z] = Rt(et, tt));
        }
        for(var nt = t[41], at = function(t) {
            return t[109];
        }, ut = 0; ut < nt.length; ut += 1){
            var ft = _t(t, nt, ut), dt = at(ft);
            L.set(dt, A[ut] = Wt(dt, ft));
        }
        return {
            c: function() {
                e = T("div"), n = T("div");
                for(var m = 0; m < $.length; m += 1)$[m].c();
                i = E(), F && F.c(), o = E(), q && q.c(), r = E(), B && B.c(), s = E(), a = T("div");
                for(var v = 0; v < k.length; v += 1)k[v].c();
                c = E(), Q && Q.c(), l = E(), V && V.c(), u = E();
                for(var y = 0; y < H.length; y += 1)H[y].c();
                f = E();
                for(var g = 0; g < A.length; g += 1)A[g].c();
                P(a, "class", "pnotify-content ".concat(t[21]("content"))), P(n, "class", d = "pnotify-container ".concat(t[21]("container"), " ").concat(t[21](t[4]), " ").concat(t[15] ? "pnotify-shadow" : "", " ").concat(t[27].container.join(" "))), P(n, "style", h = "".concat(t[31], " ").concat(t[32])), P(n, "role", "alert"), P(e, "data-pnotify", ""), P(e, "class", p = "pnotify ".concat(!t[0] || t[0].positioned ? "pnotify-positioned" : "", " ").concat(!1 !== t[13] ? "pnotify-with-icon" : "", " ").concat(t[21]("elem"), " pnotify-mode-").concat(t[9], " ").concat(t[10], " ").concat(t[24], " ").concat(t[25], " ").concat(t[37], " ").concat("fade" === t[2] ? "pnotify-fade-".concat(t[14]) : "", " ").concat(t[30] ? "pnotify-modal ".concat(t[11]) : t[12], " ").concat(t[28] ? "pnotify-masking" : "", " ").concat(t[29] ? "pnotify-masking-in" : "", " ").concat(t[27].elem.join(" "))), P(e, "aria-live", "assertive"), P(e, "role", "alertdialog");
            },
            m: function(d, h) {
                C(d, e, h), O(e, n);
                for(var p = 0; p < $.length; p += 1)$[p].m(n, null);
                O(n, i), F && F.m(n, null), O(n, o), q && q.m(n, null), O(n, r), B && B.m(n, null), O(n, s), O(n, a);
                for(var _ = 0; _ < k.length; _ += 1)k[_].m(a, null);
                O(a, c), Q && Q.m(a, null), O(a, l), V && V.m(a, null), O(a, u);
                for(var x = 0; x < H.length; x += 1)H[x].m(a, null);
                t[86](a), O(n, f);
                for(var w = 0; w < A.length; w += 1)A[w].m(n, null);
                var M;
                t[87](n), t[88](e), m = !0, v || (y = [
                    (M = t[43].call(null, e), M && b(M.destroy) ? M.destroy : g),
                    N(e, "mouseenter", t[44]),
                    N(e, "mouseleave", t[45]),
                    N(e, "focusin", t[44]),
                    N(e, "focusout", t[45])
                ], v = !0);
            },
            p: function(t, f) {
                if (2176 & f[1]) {
                    var v = t[38];
                    it(), $ = lt($, f, R, 1, t, v, _, n, ct, wt, i, bt), ot();
                }
                if (t[16] && !t[36] ? F ? F.p(t, f) : ((F = Ot(t)).c(), F.m(n, o)) : F && (F.d(1), F = null), t[18] && !t[36] ? q ? q.p(t, f) : ((q = Ct(t)).c(), q.m(n, r)) : q && (q.d(1), q = null), !1 !== t[13] ? B ? B.p(t, f) : ((B = Mt(t)).c(), B.m(n, s)) : B && (B.d(1), B = null), 2304 & f[1]) {
                    var y = t[39];
                    it(), k = lt(k, f, U, 1, t, y, w, a, ct, Tt, c, xt), ot();
                }
                if (!1 !== t[5] ? Q ? Q.p(t, f) : ((Q = Ht(t)).c(), Q.m(a, l)) : Q && (Q.d(1), Q = null), !1 !== t[7] ? V ? V.p(t, f) : ((V = Pt(t)).c(), V.m(a, u)) : V && (V.d(1), V = null), 2560 & f[1]) {
                    var g = t[40];
                    it(), H = lt(H, f, Y, 1, t, g, S, a, ct, Rt, null, kt), ot();
                }
                if (3072 & f[1]) {
                    var x = t[41];
                    it(), A = lt(A, f, at, 1, t, x, L, n, ct, Wt, null, _t), ot();
                }
                (!m || 134250512 & f[0] && d !== (d = "pnotify-container ".concat(t[21]("container"), " ").concat(t[21](t[4]), " ").concat(t[15] ? "pnotify-shadow" : "", " ").concat(t[27].container.join(" ")))) && P(n, "class", d), (!m || 3 & f[1] && h !== (h = "".concat(t[31], " ").concat(t[32]))) && P(n, "style", h), (!m || 2063629829 & f[0] | 64 & f[1] && p !== (p = "pnotify ".concat(!t[0] || t[0].positioned ? "pnotify-positioned" : "", " ").concat(!1 !== t[13] ? "pnotify-with-icon" : "", " ").concat(t[21]("elem"), " pnotify-mode-").concat(t[9], " ").concat(t[10], " ").concat(t[24], " ").concat(t[25], " ").concat(t[37], " ").concat("fade" === t[2] ? "pnotify-fade-".concat(t[14]) : "", " ").concat(t[30] ? "pnotify-modal ".concat(t[11]) : t[12], " ").concat(t[28] ? "pnotify-masking" : "", " ").concat(t[29] ? "pnotify-masking-in" : "", " ").concat(t[27].elem.join(" ")))) && P(e, "class", p);
            },
            i: function(t) {
                if (!m) {
                    for(var e = 0; e < j.length; e += 1)rt($[e]);
                    for(var n = 0; n < z.length; n += 1)rt(k[n]);
                    for(var i = 0; i < X.length; i += 1)rt(H[i]);
                    for(var o = 0; o < nt.length; o += 1)rt(A[o]);
                    m = !0;
                }
            },
            o: function(t) {
                for(var e = 0; e < $.length; e += 1)st($[e]);
                for(var n = 0; n < k.length; n += 1)st(k[n]);
                for(var i = 0; i < H.length; i += 1)st(H[i]);
                for(var o = 0; o < A.length; o += 1)st(A[o]);
                m = !1;
            },
            d: function(n) {
                n && M(e);
                for(var i = 0; i < $.length; i += 1)$[i].d();
                F && F.d(), q && q.d(), B && B.d();
                for(var o = 0; o < k.length; o += 1)k[o].d();
                Q && Q.d(), V && V.d();
                for(var r = 0; r < H.length; r += 1)H[r].d();
                t[86](null);
                for(var s = 0; s < A.length; s += 1)A[s].d();
                t[87](null), t[88](null), v = !1, x(y);
            }
        };
    }
    function Dt(t, n) {
        "object" !== e(t) && (t = {
            text: t
        }), n && (t.type = n);
        var i = document.body;
        return "stack" in t && t.stack && t.stack.context && (i = t.stack.context), {
            target: i,
            props: t
        };
    }
    var Ft, qt = new yt({
        dir1: "down",
        dir2: "left",
        firstpos1: 25,
        firstpos2: 25,
        spacing1: 36,
        spacing2: 36,
        push: "bottom"
    }), Bt = new Map, zt = {
        type: "notice",
        title: !1,
        titleTrusted: !1,
        text: !1,
        textTrusted: !1,
        styling: "brighttheme",
        icons: "brighttheme",
        mode: "no-preference",
        addClass: "",
        addModalClass: "",
        addModelessClass: "",
        autoOpen: !0,
        width: "360px",
        minHeight: "16px",
        maxTextHeight: "200px",
        icon: !0,
        animation: "fade",
        animateSpeed: "normal",
        shadow: !0,
        hide: !0,
        delay: 8e3,
        mouseReset: !0,
        closer: !0,
        closerHover: !0,
        sticker: !0,
        stickerHover: !0,
        labels: {
            close: "Close",
            stick: "Pin",
            unstick: "Unpin"
        },
        remove: !0,
        destroy: !0,
        stack: qt,
        modules: Bt
    };
    function Ut() {
        qt.context || (qt.context = document.body), window.addEventListener("resize", function() {
            Ft && clearTimeout(Ft), Ft = setTimeout(function() {
                var t = new Event("pnotify:position");
                document.body.dispatchEvent(t), Ft = null;
            }, 10);
        });
    }
    function Gt(t, e, n) {
        var i = I(), o = D(), r = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = [
                "focus",
                "blur",
                "fullscreenchange",
                "fullscreenerror",
                "scroll",
                "cut",
                "copy",
                "paste",
                "keydown",
                "keypress",
                "keyup",
                "auxclick",
                "click",
                "contextmenu",
                "dblclick",
                "mousedown",
                "mouseenter",
                "mouseleave",
                "mousemove",
                "mouseover",
                "mouseout",
                "mouseup",
                "pointerlockchange",
                "pointerlockerror",
                "select",
                "wheel",
                "drag",
                "dragend",
                "dragenter",
                "dragstart",
                "dragleave",
                "dragover",
                "drop",
                "touchcancel",
                "touchend",
                "touchmove",
                "touchstart",
                "pointerover",
                "pointerenter",
                "pointerdown",
                "pointermove",
                "pointerup",
                "pointercancel",
                "pointerout",
                "pointerleave",
                "gotpointercapture",
                "lostpointercapture"
            ].concat(m(e));
            function i(e) {
                F(t, e);
            }
            return function(t) {
                for(var e = [], o = 0; o < n.length; o++)e.push(N(t, n[o], i));
                return {
                    destroy: function() {
                        for(var t = 0; t < e.length; t++)e[t]();
                    }
                };
            };
        }(i, [
            "pnotify:init",
            "pnotify:mount",
            "pnotify:update",
            "pnotify:beforeOpen",
            "pnotify:afterOpen",
            "pnotify:enterModal",
            "pnotify:leaveModal",
            "pnotify:beforeClose",
            "pnotify:afterClose",
            "pnotify:beforeDestroy",
            "pnotify:afterDestroy",
            "focusin",
            "focusout",
            "animationend",
            "transitionend"
        ]), s = e.modules, c = void 0 === s ? new Map(zt.modules) : s, l = e.stack, u = void 0 === l ? zt.stack : l, f = {
            elem: null,
            container: null,
            content: null,
            iconContainer: null,
            titleContainer: null,
            textContainer: null
        }, d = a({}, zt);
        Qt("init", {
            notice: i,
            defaults: d
        });
        var h, v = e.type, y = void 0 === v ? d.type : v, g = e.title, $ = void 0 === g ? d.title : g, _ = e.titleTrusted, k = void 0 === _ ? d.titleTrusted : _, x = e.text, b = void 0 === x ? d.text : x, w = e.textTrusted, O = void 0 === w ? d.textTrusted : w, C = e.styling, M = void 0 === C ? d.styling : C, T = e.icons, H = void 0 === T ? d.icons : T, E = e.mode, S = void 0 === E ? d.mode : E, P = e.addClass, A = void 0 === P ? d.addClass : P, L = e.addModalClass, j = void 0 === L ? d.addModalClass : L, R = e.addModelessClass, W = void 0 === R ? d.addModelessClass : R, q = e.autoOpen, z = void 0 === q ? d.autoOpen : q, U = e.width, G = void 0 === U ? d.width : U, J = e.minHeight, K = void 0 === J ? d.minHeight : J, V = e.maxTextHeight, X = void 0 === V ? d.maxTextHeight : V, Y = e.icon, Z = void 0 === Y ? d.icon : Y, tt = e.animation, et = void 0 === tt ? d.animation : tt, nt = e.animateSpeed, it = void 0 === nt ? d.animateSpeed : nt, ot = e.shadow, rt = void 0 === ot ? d.shadow : ot, st = e.hide, at = void 0 === st ? d.hide : st, ct = e.delay, lt = void 0 === ct ? d.delay : ct, ut = e.mouseReset, ft = void 0 === ut ? d.mouseReset : ut, dt = e.closer, ht = void 0 === dt ? d.closer : dt, pt = e.closerHover, mt = void 0 === pt ? d.closerHover : pt, vt = e.sticker, yt = void 0 === vt ? d.sticker : vt, gt = e.stickerHover, $t = void 0 === gt ? d.stickerHover : gt, _t = e.labels, kt = void 0 === _t ? d.labels : _t, xt = e.remove, bt = void 0 === xt ? d.remove : xt, wt = e.destroy, Ot = void 0 === wt ? d.destroy : wt, Ct = "closed", Mt = null, Tt = null, Ht = null, Et = !1, St = "", Nt = "", Pt = !1, At = !1, Lt = {
            elem: [],
            container: []
        }, jt = !1, Rt = !1, Wt = !1, It = !1, Dt = null, Ft = at, qt = null, Bt = null, Ut = u && (!0 === u.modal || "ish" === u.modal && "prevented" === Mt), Gt = NaN, Jt = null, Kt = null;
        function Qt(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = a({
                notice: i
            }, e);
            "init" === t && Array.from(c).forEach(function(t) {
                var e = p(t, 2), i = e[0];
                e[1];
                return "init" in i && i.init(n);
            });
            var r = f.elem || u && u.context || document.body;
            if (!r) return o("pnotify:".concat(t), n), !0;
            var s = new Event("pnotify:".concat(t), {
                bubbles: "init" === t || "mount" === t,
                cancelable: t.startsWith("before")
            });
            return s.detail = n, r.dispatchEvent(s), !s.defaultPrevented;
        }
        function Vt() {
            var t = u && u.context || document.body;
            if (!t) throw new Error("No context to insert this notice into.");
            if (!f.elem) throw new Error("Trying to insert notice before element is available.");
            f.elem.parentNode !== t && t.appendChild(f.elem);
        }
        function Xt() {
            f.elem && f.elem.parentNode.removeChild(f.elem);
        }
        h = function() {
            Qt("mount"), z && Zt().catch(function() {});
        }, I().$$.on_mount.push(h), function(t) {
            I().$$.before_update.push(t);
        }(function() {
            Qt("update"), "closed" !== Ct && "waiting" !== Ct && at !== Ft && (at ? Ft || ae() : se()), "closed" !== Ct && "closing" !== Ct && u && !u._collapsingModalState && u.queuePosition(), Ft = at;
        });
        var Yt = e.open, Zt = void 0 === Yt ? function(t) {
            if ("opening" === Ct) return qt;
            if ("open" === Ct) return at && ae(), Promise.resolve();
            if (!jt && u && u._shouldNoticeWait(i)) return Ct = "waiting", Promise.reject();
            if (!Qt("beforeOpen", {
                immediate: t
            })) return Promise.reject();
            var e, o;
            Ct = "opening", n(28, Wt = !1), n(24, St = "pnotify-initial pnotify-hidden");
            var r = new Promise(function(t, n) {
                e = t, o = n;
            });
            qt = r;
            var s = function() {
                at && ae(), Ct = "open", Qt("afterOpen", {
                    immediate: t
                }), qt = null, e();
            };
            return Rt ? (s(), Promise.resolve()) : (Vt(), window.requestAnimationFrame(function() {
                if ("opening" !== Ct) return o(), void (qt = null);
                u && (n(0, u._animation = !1, u), "top" === u.push && u._resetPositionData(), u._positionNotice(i), u.queuePosition(0), n(0, u._animation = !0, u)), ie(s, t);
            }), r);
        } : Yt, te = e.close, ee = void 0 === te ? function(t, e, o) {
            if ("closing" === Ct) return Bt;
            if ("closed" === Ct) return Promise.resolve();
            var r, s = function() {
                Qt("beforeDestroy") && (u && u._removeNotice(i), i.$destroy(), Qt("afterDestroy"));
            };
            if ("waiting" === Ct) return o || (Ct = "closed", Ot && !o && s()), Promise.resolve();
            if (!Qt("beforeClose", {
                immediate: t,
                timerHide: e,
                waitAfterward: o
            })) return Promise.reject();
            Ct = "closing", Pt = !!e, Mt && "prevented" !== Mt && clearTimeout && clearTimeout(Mt), Mt = null;
            var a = new Promise(function(t, e) {
                r = t;
            });
            return Bt = a, re(function() {
                n(26, At = !1), Pt = !1, Ct = o ? "waiting" : "closed", Qt("afterClose", {
                    immediate: t,
                    timerHide: e,
                    waitAfterward: o
                }), Bt = null, r(), o || (Ot ? s() : bt && Xt());
            }, t), a;
        } : te, ne = e.animateIn, ie = void 0 === ne ? function(t, e) {
            Et = "in";
            var i = function e(n) {
                if (!(n && f.elem && n.target !== f.elem || (f.elem && f.elem.removeEventListener("transitionend", e), Tt && clearTimeout(Tt), "in" !== Et))) {
                    var i = Rt;
                    if (!i && f.elem) {
                        var o = f.elem.getBoundingClientRect();
                        for(var r in o)if (o[r] > 0) {
                            i = !0;
                            break;
                        }
                    }
                    i ? (t && t.call(), Et = !1) : Tt = setTimeout(e, 40);
                }
            };
            if ("fade" !== et || e) {
                var o = et;
                n(2, et = "none"), n(24, St = "pnotify-in ".concat("fade" === o ? "pnotify-fade-in" : "")), Q().then(function() {
                    n(2, et = o), i();
                });
            } else f.elem && f.elem.addEventListener("transitionend", i), n(24, St = "pnotify-in"), Q().then(function() {
                n(24, St = "pnotify-in pnotify-fade-in"), Tt = setTimeout(i, 650);
            });
        } : ne, oe = e.animateOut, re = void 0 === oe ? function(t, e) {
            Et = "out";
            var i = function e(i) {
                if (!(i && f.elem && i.target !== f.elem || (f.elem && f.elem.removeEventListener("transitionend", e), Ht && clearTimeout(Ht), "out" !== Et))) {
                    var o = Rt;
                    if (!o && f.elem) {
                        var r = f.elem.getBoundingClientRect();
                        for(var s in r)if (r[s] > 0) {
                            o = !0;
                            break;
                        }
                    }
                    f.elem && f.elem.style.opacity && "0" !== f.elem.style.opacity && o ? Ht = setTimeout(e, 40) : (n(24, St = ""), t && t.call(), Et = !1);
                }
            };
            "fade" !== et || e ? (n(24, St = ""), Q().then(function() {
                i();
            })) : (f.elem && f.elem.addEventListener("transitionend", i), n(24, St = "pnotify-in"), Ht = setTimeout(i, 650));
        } : oe;
        function se() {
            Mt && "prevented" !== Mt && (clearTimeout(Mt), Mt = null), Ht && clearTimeout(Ht), "closing" === Ct && (Ct = "open", Et = !1, n(24, St = "fade" === et ? "pnotify-in pnotify-fade-in" : "pnotify-in"));
        }
        function ae() {
            "prevented" !== Mt && (se(), lt !== 1 / 0 && (Mt = setTimeout(function() {
                return ee(!1, !0);
            }, isNaN(lt) ? 0 : lt)));
        }
        var ce, le, ue, fe, de, he, pe, me, ve, ye, ge;
        return t.$$set = function(t) {
            "modules" in t && n(46, c = t.modules), "stack" in t && n(0, u = t.stack), "type" in t && n(4, y = t.type), "title" in t && n(5, $ = t.title), "titleTrusted" in t && n(6, k = t.titleTrusted), "text" in t && n(7, b = t.text), "textTrusted" in t && n(8, O = t.textTrusted), "styling" in t && n(47, M = t.styling), "icons" in t && n(48, H = t.icons), "mode" in t && n(9, S = t.mode), "addClass" in t && n(10, A = t.addClass), "addModalClass" in t && n(11, j = t.addModalClass), "addModelessClass" in t && n(12, W = t.addModelessClass), "autoOpen" in t && n(49, z = t.autoOpen), "width" in t && n(50, G = t.width), "minHeight" in t && n(51, K = t.minHeight), "maxTextHeight" in t && n(52, X = t.maxTextHeight), "icon" in t && n(13, Z = t.icon), "animation" in t && n(2, et = t.animation), "animateSpeed" in t && n(14, it = t.animateSpeed), "shadow" in t && n(15, rt = t.shadow), "hide" in t && n(3, at = t.hide), "delay" in t && n(53, lt = t.delay), "mouseReset" in t && n(54, ft = t.mouseReset), "closer" in t && n(16, ht = t.closer), "closerHover" in t && n(17, mt = t.closerHover), "sticker" in t && n(18, yt = t.sticker), "stickerHover" in t && n(19, $t = t.stickerHover), "labels" in t && n(20, kt = t.labels), "remove" in t && n(55, bt = t.remove), "destroy" in t && n(56, Ot = t.destroy), "open" in t && n(59, Zt = t.open), "close" in t && n(23, ee = t.close), "animateIn" in t && n(60, ie = t.animateIn), "animateOut" in t && n(61, re = t.animateOut);
        }, t.$$.update = function() {
            524288 & t.$$.dirty[1] && n(31, ce = "string" == typeof G ? "width: ".concat(G, ";") : ""), 1048576 & t.$$.dirty[1] && n(32, le = "string" == typeof K ? "min-height: ".concat(K, ";") : ""), 2097152 & t.$$.dirty[1] && n(33, ue = "string" == typeof X ? "max-height: ".concat(X, ";") : ""), 32 & t.$$.dirty[0] && n(34, fe = $ instanceof HTMLElement), 128 & t.$$.dirty[0] && n(35, de = b instanceof HTMLElement), 1 & t.$$.dirty[0] | 1792 & t.$$.dirty[3] && Gt !== u && (Gt && (Gt._removeNotice(i), n(30, Ut = !1), Jt(), Kt()), u && (u._addNotice(i), n(102, Jt = u.on("beforeAddOverlay", function() {
                n(30, Ut = !0), Qt("enterModal");
            })), n(103, Kt = u.on("afterRemoveOverlay", function() {
                n(30, Ut = !1), Qt("leaveModal");
            }))), n(101, Gt = u)), 1073748992 & t.$$.dirty[0] && n(36, he = A.match(/\bnonblock\b/) || j.match(/\bnonblock\b/) && Ut || W.match(/\bnonblock\b/) && !Ut), 1 & t.$$.dirty[0] && n(37, pe = u && u.dir1 ? "pnotify-stack-".concat(u.dir1) : ""), 32768 & t.$$.dirty[1] && n(38, me = Array.from(c).filter(function(t) {
                var e = p(t, 2), n = e[0];
                e[1];
                return "PrependContainer" === n.position;
            })), 32768 & t.$$.dirty[1] && n(39, ve = Array.from(c).filter(function(t) {
                var e = p(t, 2), n = e[0];
                e[1];
                return "PrependContent" === n.position;
            })), 32768 & t.$$.dirty[1] && n(40, ye = Array.from(c).filter(function(t) {
                var e = p(t, 2), n = e[0];
                e[1];
                return "AppendContent" === n.position;
            })), 32768 & t.$$.dirty[1] && n(41, ge = Array.from(c).filter(function(t) {
                var e = p(t, 2), n = e[0];
                e[1];
                return "AppendContainer" === n.position;
            })), 34 & t.$$.dirty[0] | 8 & t.$$.dirty[1] && fe && f.titleContainer && f.titleContainer.appendChild($), 130 & t.$$.dirty[0] | 16 & t.$$.dirty[1] && de && f.textContainer && f.textContainer.appendChild(b);
        }, [
            u,
            f,
            et,
            at,
            y,
            $,
            k,
            b,
            O,
            S,
            A,
            j,
            W,
            Z,
            it,
            rt,
            ht,
            mt,
            yt,
            $t,
            kt,
            function(t) {
                return "string" == typeof M ? "".concat(M, "-").concat(t) : t in M ? M[t] : "".concat(M.prefix, "-").concat(t);
            },
            function(t) {
                return "string" == typeof H ? "".concat(H, "-icon-").concat(t) : t in H ? H[t] : "".concat(H.prefix, "-icon-").concat(t);
            },
            ee,
            St,
            Nt,
            At,
            Lt,
            Wt,
            It,
            Ut,
            ce,
            le,
            ue,
            fe,
            de,
            he,
            pe,
            me,
            ve,
            ye,
            ge,
            i,
            r,
            function(t) {
                if (n(26, At = !0), ft && "closing" === Ct) {
                    if (!Pt) return;
                    se();
                }
                at && ft && se();
            },
            function(t) {
                n(26, At = !1), at && ft && "out" !== Et && -1 !== [
                    "open",
                    "opening"
                ].indexOf(Ct) && ae();
            },
            c,
            M,
            H,
            z,
            G,
            K,
            X,
            lt,
            ft,
            bt,
            Ot,
            function() {
                return Ct;
            },
            function() {
                return Mt;
            },
            Zt,
            ie,
            re,
            se,
            ae,
            function(t) {
                t ? (se(), Mt = "prevented") : "prevented" === Mt && (Mt = null, "open" === Ct && at && ae());
            },
            function() {
                return i.$on.apply(i, arguments);
            },
            function() {
                return i.$set.apply(i, arguments);
            },
            function(t, e) {
                o(t, e);
            },
            function(t) {
                for(var e = 0; e < (arguments.length <= 1 ? 0 : arguments.length - 1); e++){
                    var i = e + 1 < 1 || arguments.length <= e + 1 ? void 0 : arguments[e + 1];
                    -1 === Lt[t].indexOf(i) && Lt[t].push(i);
                }
                n(27, Lt);
            },
            function(t) {
                for(var e = 0; e < (arguments.length <= 1 ? 0 : arguments.length - 1); e++){
                    var i = e + 1 < 1 || arguments.length <= e + 1 ? void 0 : arguments[e + 1], o = Lt[t].indexOf(i);
                    -1 !== o && Lt[t].splice(o, 1);
                }
                n(27, Lt);
            },
            function(t) {
                for(var e = 0; e < (arguments.length <= 1 ? 0 : arguments.length - 1); e++){
                    var n = e + 1 < 1 || arguments.length <= e + 1 ? void 0 : arguments[e + 1];
                    if (-1 === Lt[t].indexOf(n)) return !1;
                }
                return !0;
            },
            function() {
                return jt;
            },
            function(t) {
                return jt = t;
            },
            function() {
                return Rt;
            },
            function(t) {
                return Rt = t;
            },
            function(t) {
                return Et = t;
            },
            function() {
                return St;
            },
            function(t) {
                return n(24, St = t);
            },
            function() {
                return Nt;
            },
            function(t) {
                return n(25, Nt = t);
            },
            function(t, e, i) {
                if (Dt && clearTimeout(Dt), Wt !== t) {
                    if (t) n(28, Wt = !0), n(29, It = !!e), Vt(), Q().then(function() {
                        window.requestAnimationFrame(function() {
                            if (Wt) {
                                if (e && i) i();
                                else {
                                    n(29, It = !0);
                                    var t = function t() {
                                        f.elem && f.elem.removeEventListener("transitionend", t), Dt && clearTimeout(Dt), It && i && i();
                                    };
                                    f.elem && f.elem.addEventListener("transitionend", t), Dt = setTimeout(t, 650);
                                }
                            }
                        });
                    });
                    else if (e) n(28, Wt = !1), n(29, It = !1), bt && -1 === [
                        "open",
                        "opening",
                        "closing"
                    ].indexOf(Ct) && Xt(), i && i();
                    else {
                        var o = function t() {
                            f.elem && f.elem.removeEventListener("transitionend", t), Dt && clearTimeout(Dt), It || (n(28, Wt = !1), bt && -1 === [
                                "open",
                                "opening",
                                "closing"
                            ].indexOf(Ct) && Xt(), i && i());
                        };
                        n(29, It = !1), f.elem && f.elem.addEventListener("transitionend", o), f.elem && f.elem.style.opacity, Dt = setTimeout(o, 650);
                    }
                }
            },
            function() {
                return ee(!1);
            },
            function() {
                return n(3, at = !at);
            },
            function(t) {
                B[t ? "unshift" : "push"](function() {
                    f.iconContainer = t, n(1, f);
                });
            },
            function(t) {
                B[t ? "unshift" : "push"](function() {
                    f.titleContainer = t, n(1, f);
                });
            },
            function(t) {
                B[t ? "unshift" : "push"](function() {
                    f.textContainer = t, n(1, f);
                });
            },
            function(t) {
                B[t ? "unshift" : "push"](function() {
                    f.content = t, n(1, f);
                });
            },
            function(t) {
                B[t ? "unshift" : "push"](function() {
                    f.container = t, n(1, f);
                });
            },
            function(t) {
                B[t ? "unshift" : "push"](function() {
                    f.elem = t, n(1, f);
                });
            }
        ];
    }
    window && document.body ? Ut() : document.addEventListener("DOMContentLoaded", Ut);
    var Jt = function(t) {
        !function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && l(t, e);
        }(s, t);
        var e, i, r = (e = s, i = u(), function() {
            var t, n = c(e);
            if (i) {
                var o = c(this).constructor;
                t = Reflect.construct(n, arguments, o);
            } else t = n.apply(this, arguments);
            return h(this, t);
        });
        function s(t) {
            var e;
            return n(this, s), function(t, e, n, i, o, r) {
                var s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [
                    -1
                ], a = j;
                W(t);
                var c = e.props || {}, l = t.$$ = {
                    fragment: null,
                    ctx: null,
                    props: r,
                    update: g,
                    not_equal: o,
                    bound: k(),
                    on_mount: [],
                    on_destroy: [],
                    before_update: [],
                    after_update: [],
                    context: new Map(a ? a.$$.context : []),
                    callbacks: k(),
                    dirty: s,
                    skip_bound: !1
                }, u = !1;
                if (l.ctx = n ? n(t, c, function(e, n) {
                    var i = !(arguments.length <= 2) && arguments.length - 2 ? arguments.length <= 2 ? void 0 : arguments[2] : n;
                    return l.ctx && o(l.ctx[e], l.ctx[e] = i) && (!l.skip_bound && l.bound[e] && l.bound[e](i), u && mt(t, e)), n;
                }) : [], l.update(), u = !0, x(l.before_update), l.fragment = !!i && i(l.ctx), e.target) {
                    if (e.hydrate) {
                        var f = A(e.target);
                        l.fragment && l.fragment.l(f), f.forEach(M);
                    } else l.fragment && l.fragment.c();
                    e.intro && rt(t.$$.fragment), ht(t, e.target, e.anchor), Z();
                }
                W(a);
            }(d(e = r.call(this)), t, Gt, It, w, {
                modules: 46,
                stack: 0,
                refs: 1,
                type: 4,
                title: 5,
                titleTrusted: 6,
                text: 7,
                textTrusted: 8,
                styling: 47,
                icons: 48,
                mode: 9,
                addClass: 10,
                addModalClass: 11,
                addModelessClass: 12,
                autoOpen: 49,
                width: 50,
                minHeight: 51,
                maxTextHeight: 52,
                icon: 13,
                animation: 2,
                animateSpeed: 14,
                shadow: 15,
                hide: 3,
                delay: 53,
                mouseReset: 54,
                closer: 16,
                closerHover: 17,
                sticker: 18,
                stickerHover: 19,
                labels: 20,
                remove: 55,
                destroy: 56,
                getState: 57,
                getTimer: 58,
                getStyle: 21,
                getIcon: 22,
                open: 59,
                close: 23,
                animateIn: 60,
                animateOut: 61,
                cancelClose: 62,
                queueClose: 63,
                _preventTimerClose: 64,
                on: 65,
                update: 66,
                fire: 67,
                addModuleClass: 68,
                removeModuleClass: 69,
                hasModuleClass: 70,
                getModuleHandled: 71,
                setModuleHandled: 72,
                getModuleOpen: 73,
                setModuleOpen: 74,
                setAnimating: 75,
                getAnimatingClass: 76,
                setAnimatingClass: 77,
                _getMoveClass: 78,
                _setMoveClass: 79,
                _setMasking: 80
            }, [
                -1,
                -1,
                -1,
                -1
            ]), e;
        }
        return o(s, [
            {
                key: "modules",
                get: function() {
                    return this.$$.ctx[46];
                },
                set: function(t) {
                    this.$set({
                        modules: t
                    }), Z();
                }
            },
            {
                key: "stack",
                get: function() {
                    return this.$$.ctx[0];
                },
                set: function(t) {
                    this.$set({
                        stack: t
                    }), Z();
                }
            },
            {
                key: "refs",
                get: function() {
                    return this.$$.ctx[1];
                }
            },
            {
                key: "type",
                get: function() {
                    return this.$$.ctx[4];
                },
                set: function(t) {
                    this.$set({
                        type: t
                    }), Z();
                }
            },
            {
                key: "title",
                get: function() {
                    return this.$$.ctx[5];
                },
                set: function(t) {
                    this.$set({
                        title: t
                    }), Z();
                }
            },
            {
                key: "titleTrusted",
                get: function() {
                    return this.$$.ctx[6];
                },
                set: function(t) {
                    this.$set({
                        titleTrusted: t
                    }), Z();
                }
            },
            {
                key: "text",
                get: function() {
                    return this.$$.ctx[7];
                },
                set: function(t) {
                    this.$set({
                        text: t
                    }), Z();
                }
            },
            {
                key: "textTrusted",
                get: function() {
                    return this.$$.ctx[8];
                },
                set: function(t) {
                    this.$set({
                        textTrusted: t
                    }), Z();
                }
            },
            {
                key: "styling",
                get: function() {
                    return this.$$.ctx[47];
                },
                set: function(t) {
                    this.$set({
                        styling: t
                    }), Z();
                }
            },
            {
                key: "icons",
                get: function() {
                    return this.$$.ctx[48];
                },
                set: function(t) {
                    this.$set({
                        icons: t
                    }), Z();
                }
            },
            {
                key: "mode",
                get: function() {
                    return this.$$.ctx[9];
                },
                set: function(t) {
                    this.$set({
                        mode: t
                    }), Z();
                }
            },
            {
                key: "addClass",
                get: function() {
                    return this.$$.ctx[10];
                },
                set: function(t) {
                    this.$set({
                        addClass: t
                    }), Z();
                }
            },
            {
                key: "addModalClass",
                get: function() {
                    return this.$$.ctx[11];
                },
                set: function(t) {
                    this.$set({
                        addModalClass: t
                    }), Z();
                }
            },
            {
                key: "addModelessClass",
                get: function() {
                    return this.$$.ctx[12];
                },
                set: function(t) {
                    this.$set({
                        addModelessClass: t
                    }), Z();
                }
            },
            {
                key: "autoOpen",
                get: function() {
                    return this.$$.ctx[49];
                },
                set: function(t) {
                    this.$set({
                        autoOpen: t
                    }), Z();
                }
            },
            {
                key: "width",
                get: function() {
                    return this.$$.ctx[50];
                },
                set: function(t) {
                    this.$set({
                        width: t
                    }), Z();
                }
            },
            {
                key: "minHeight",
                get: function() {
                    return this.$$.ctx[51];
                },
                set: function(t) {
                    this.$set({
                        minHeight: t
                    }), Z();
                }
            },
            {
                key: "maxTextHeight",
                get: function() {
                    return this.$$.ctx[52];
                },
                set: function(t) {
                    this.$set({
                        maxTextHeight: t
                    }), Z();
                }
            },
            {
                key: "icon",
                get: function() {
                    return this.$$.ctx[13];
                },
                set: function(t) {
                    this.$set({
                        icon: t
                    }), Z();
                }
            },
            {
                key: "animation",
                get: function() {
                    return this.$$.ctx[2];
                },
                set: function(t) {
                    this.$set({
                        animation: t
                    }), Z();
                }
            },
            {
                key: "animateSpeed",
                get: function() {
                    return this.$$.ctx[14];
                },
                set: function(t) {
                    this.$set({
                        animateSpeed: t
                    }), Z();
                }
            },
            {
                key: "shadow",
                get: function() {
                    return this.$$.ctx[15];
                },
                set: function(t) {
                    this.$set({
                        shadow: t
                    }), Z();
                }
            },
            {
                key: "hide",
                get: function() {
                    return this.$$.ctx[3];
                },
                set: function(t) {
                    this.$set({
                        hide: t
                    }), Z();
                }
            },
            {
                key: "delay",
                get: function() {
                    return this.$$.ctx[53];
                },
                set: function(t) {
                    this.$set({
                        delay: t
                    }), Z();
                }
            },
            {
                key: "mouseReset",
                get: function() {
                    return this.$$.ctx[54];
                },
                set: function(t) {
                    this.$set({
                        mouseReset: t
                    }), Z();
                }
            },
            {
                key: "closer",
                get: function() {
                    return this.$$.ctx[16];
                },
                set: function(t) {
                    this.$set({
                        closer: t
                    }), Z();
                }
            },
            {
                key: "closerHover",
                get: function() {
                    return this.$$.ctx[17];
                },
                set: function(t) {
                    this.$set({
                        closerHover: t
                    }), Z();
                }
            },
            {
                key: "sticker",
                get: function() {
                    return this.$$.ctx[18];
                },
                set: function(t) {
                    this.$set({
                        sticker: t
                    }), Z();
                }
            },
            {
                key: "stickerHover",
                get: function() {
                    return this.$$.ctx[19];
                },
                set: function(t) {
                    this.$set({
                        stickerHover: t
                    }), Z();
                }
            },
            {
                key: "labels",
                get: function() {
                    return this.$$.ctx[20];
                },
                set: function(t) {
                    this.$set({
                        labels: t
                    }), Z();
                }
            },
            {
                key: "remove",
                get: function() {
                    return this.$$.ctx[55];
                },
                set: function(t) {
                    this.$set({
                        remove: t
                    }), Z();
                }
            },
            {
                key: "destroy",
                get: function() {
                    return this.$$.ctx[56];
                },
                set: function(t) {
                    this.$set({
                        destroy: t
                    }), Z();
                }
            },
            {
                key: "getState",
                get: function() {
                    return this.$$.ctx[57];
                }
            },
            {
                key: "getTimer",
                get: function() {
                    return this.$$.ctx[58];
                }
            },
            {
                key: "getStyle",
                get: function() {
                    return this.$$.ctx[21];
                }
            },
            {
                key: "getIcon",
                get: function() {
                    return this.$$.ctx[22];
                }
            },
            {
                key: "open",
                get: function() {
                    return this.$$.ctx[59];
                },
                set: function(t) {
                    this.$set({
                        open: t
                    }), Z();
                }
            },
            {
                key: "close",
                get: function() {
                    return this.$$.ctx[23];
                },
                set: function(t) {
                    this.$set({
                        close: t
                    }), Z();
                }
            },
            {
                key: "animateIn",
                get: function() {
                    return this.$$.ctx[60];
                },
                set: function(t) {
                    this.$set({
                        animateIn: t
                    }), Z();
                }
            },
            {
                key: "animateOut",
                get: function() {
                    return this.$$.ctx[61];
                },
                set: function(t) {
                    this.$set({
                        animateOut: t
                    }), Z();
                }
            },
            {
                key: "cancelClose",
                get: function() {
                    return this.$$.ctx[62];
                }
            },
            {
                key: "queueClose",
                get: function() {
                    return this.$$.ctx[63];
                }
            },
            {
                key: "_preventTimerClose",
                get: function() {
                    return this.$$.ctx[64];
                }
            },
            {
                key: "on",
                get: function() {
                    return this.$$.ctx[65];
                }
            },
            {
                key: "update",
                get: function() {
                    return this.$$.ctx[66];
                }
            },
            {
                key: "fire",
                get: function() {
                    return this.$$.ctx[67];
                }
            },
            {
                key: "addModuleClass",
                get: function() {
                    return this.$$.ctx[68];
                }
            },
            {
                key: "removeModuleClass",
                get: function() {
                    return this.$$.ctx[69];
                }
            },
            {
                key: "hasModuleClass",
                get: function() {
                    return this.$$.ctx[70];
                }
            },
            {
                key: "getModuleHandled",
                get: function() {
                    return this.$$.ctx[71];
                }
            },
            {
                key: "setModuleHandled",
                get: function() {
                    return this.$$.ctx[72];
                }
            },
            {
                key: "getModuleOpen",
                get: function() {
                    return this.$$.ctx[73];
                }
            },
            {
                key: "setModuleOpen",
                get: function() {
                    return this.$$.ctx[74];
                }
            },
            {
                key: "setAnimating",
                get: function() {
                    return this.$$.ctx[75];
                }
            },
            {
                key: "getAnimatingClass",
                get: function() {
                    return this.$$.ctx[76];
                }
            },
            {
                key: "setAnimatingClass",
                get: function() {
                    return this.$$.ctx[77];
                }
            },
            {
                key: "_getMoveClass",
                get: function() {
                    return this.$$.ctx[78];
                }
            },
            {
                key: "_setMoveClass",
                get: function() {
                    return this.$$.ctx[79];
                }
            },
            {
                key: "_setMasking",
                get: function() {
                    return this.$$.ctx[80];
                }
            }
        ]), s;
    }(vt);
    t.Stack = yt, t.alert = function(t) {
        return gt(Dt(t));
    }, t.default = Jt, t.defaultModules = Bt, t.defaultStack = qt, t.defaults = zt, t.error = function(t) {
        return gt(Dt(t, "error"));
    }, t.info = function(t) {
        return gt(Dt(t, "info"));
    }, t.notice = function(t) {
        return gt(Dt(t, "notice"));
    }, t.success = function(t) {
        return gt(Dt(t, "success"));
    }, Object.defineProperty(t, "__esModule", {
        value: !0
    });
});

},{}],"c4y47":[function() {},{}],"grIyt":[function() {},{}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"juCeJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebars = require("handlebars");
var _handlebarsDefault = parcelHelpers.interopDefault(_handlebars);
const templateFunction = (0, _handlebarsDefault.default).template({
    "0": function(container, depth0, helpers, partials, data) {
        var alias1 = container.lambda, alias2 = container.escapeExpression;
        return "                <span class=\"badge-fish\" data-fish=\"" + alias2(alias1(depth0, depth0)) + "\">" + alias2(alias1(depth0, depth0)) + "</span>\r\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div class=\"card " + alias4((helper = (helper = lookupProperty(helpers, "tipo") || (depth0 != null ? lookupProperty(depth0, "tipo") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "tipo",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 17
                },
                "end": {
                    "line": 1,
                    "column": 25
                }
            }
        }) : helper)) + "\">\r\n    <h2>" + alias4((helper = (helper = lookupProperty(helpers, "nome") || (depth0 != null ? lookupProperty(depth0, "nome") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "nome",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 8
                },
                "end": {
                    "line": 2,
                    "column": 16
                }
            }
        }) : helper)) + '</h2>\r\n    <p class="distance-row">\uD83D\uDCCD <strong>\u0412\u0456\u0434\u0441\u0442\u0430\u043D\u044C:</strong> <span class="km-value" data-lat="' + alias4((helper = (helper = lookupProperty(helpers, "lat") || (depth0 != null ? lookupProperty(depth0, "lat") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "lat",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 91
                },
                "end": {
                    "line": 3,
                    "column": 98
                }
            }
        }) : helper)) + "\" data-lon=\"" + alias4((helper = (helper = lookupProperty(helpers, "lon") || (depth0 != null ? lookupProperty(depth0, "lon") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "lon",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 110
                },
                "end": {
                    "line": 3,
                    "column": 117
                }
            }
        }) : helper)) + '">\u0420\u0430\u0445\u0443\u0454\u043C\u043E...</span></p>\r\n    <p><strong>\uD83C\uDF21\uFE0F \u041F\u043E\u0433\u043E\u0434\u0430 \u0437\u0430\u0440\u0430\u0437:</strong> ' + alias4((helper = (helper = lookupProperty(helpers, "meteoInfo") || (depth0 != null ? lookupProperty(depth0, "meteoInfo") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "meteoInfo",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 42
                },
                "end": {
                    "line": 4,
                    "column": 55
                }
            }
        }) : helper)) + '</p>\r\n    <div class="fish-section">\r\n        <strong>\uD83D\uDC1F \u041E\u0441\u043D\u043E\u0432\u043D\u0430 \u0440\u0438\u0431\u0430 (\u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u0434\u043B\u044F \u0456\u043D\u0444\u043E):</strong> \r\n        <div class="fish-container">\r\n' + ((stack1 = lookupProperty(helpers, "each").call(alias1, depth0 != null ? lookupProperty(depth0, "pesci") : depth0, {
            "name": "each",
            "hash": {},
            "fn": container.program(0, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 12
                },
                "end": {
                    "line": 10,
                    "column": 21
                }
            }
        })) != null ? stack1 : "") + '        </div>\r\n    </div>\r\n    <p class="description">\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 ' + alias4((helper = (helper = lookupProperty(helpers, "info_generale") || (depth0 != null ? lookupProperty(depth0, "info_generale") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "info_generale",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 13,
                    "column": 38
                },
                "end": {
                    "line": 13,
                    "column": 55
                }
            }
        }) : helper)) + "</p>\r\n    <div class=\"fish-details-modal\" id=\"details-" + alias4((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "id",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 14,
                    "column": 48
                },
                "end": {
                    "line": 14,
                    "column": 54
                }
            }
        }) : helper)) + "\" style=\"display: none;\"></div>\r\n    <div class=\"card-actions\">\r\n        <a href=\"https://google.com" + alias4((helper = (helper = lookupProperty(helpers, "lat") || (depth0 != null ? lookupProperty(depth0, "lat") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "lat",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 16,
                    "column": 35
                },
                "end": {
                    "line": 16,
                    "column": 42
                }
            }
        }) : helper)) + "," + alias4((helper = (helper = lookupProperty(helpers, "lon") || (depth0 != null ? lookupProperty(depth0, "lon") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "lon",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 16,
                    "column": 43
                },
                "end": {
                    "line": 16,
                    "column": 50
                }
            }
        }) : helper)) + "\" \r\n           target=\"_blank\" \r\n           rel=\"noopener noreferrer\" \r\n           class=\"btn-navigatore\"\r\n           data-nome=\"" + alias4((helper = (helper = lookupProperty(helpers, "nome") || (depth0 != null ? lookupProperty(depth0, "nome") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "nome",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 20,
                    "column": 22
                },
                "end": {
                    "line": 20,
                    "column": 30
                }
            }
        }) : helper)) + "\"\r\n           data-lat=\"" + alias4((helper = (helper = lookupProperty(helpers, "lat") || (depth0 != null ? lookupProperty(depth0, "lat") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "lat",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 21,
                    "column": 21
                },
                "end": {
                    "line": 21,
                    "column": 28
                }
            }
        }) : helper)) + "\"\r\n           data-lon=\"" + alias4((helper = (helper = lookupProperty(helpers, "lon") || (depth0 != null ? lookupProperty(depth0, "lon") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "lon",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 22,
                    "column": 21
                },
                "end": {
                    "line": 22,
                    "column": 28
                }
            }
        }) : helper)) + '">\r\n           \uD83D\uDE97 \u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043D\u0430\u0432\u0456\u0433\u0430\u0442\u043E\u0440\r\n        </a>\r\n    </div>\r\n</div>';
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars":"9pFby","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9pFby":[function(require,module,exports,__globalThis) {
'use strict';
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _handlebarsRuntime = require("dace82ca4fa82d09");
var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);
// Compiler imports
var _handlebarsCompilerAst = require("55d6571b0684487f");
var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);
var _handlebarsCompilerBase = require("d2401330935e41f4");
var _handlebarsCompilerCompiler = require("300c50185aceb8ce");
var _handlebarsCompilerJavascriptCompiler = require("4c8208884d4d255f");
var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);
var _handlebarsCompilerVisitor = require("a22ebe793edc8181");
var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);
var _handlebarsNoConflict = require("d367057010f3400e");
var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
var _create = _handlebarsRuntime2['default'].create;
function create() {
    var hb = _create();
    hb.compile = function(input, options) {
        return _handlebarsCompilerCompiler.compile(input, options, hb);
    };
    hb.precompile = function(input, options) {
        return _handlebarsCompilerCompiler.precompile(input, options, hb);
    };
    hb.AST = _handlebarsCompilerAst2['default'];
    hb.Compiler = _handlebarsCompilerCompiler.Compiler;
    hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
    hb.Parser = _handlebarsCompilerBase.parser;
    hb.parse = _handlebarsCompilerBase.parse;
    hb.parseWithoutProcessing = _handlebarsCompilerBase.parseWithoutProcessing;
    return hb;
}
var inst = create();
inst.create = create;
_handlebarsNoConflict2['default'](inst);
inst.Visitor = _handlebarsCompilerVisitor2['default'];
inst['default'] = inst;
exports['default'] = inst;
module.exports = exports['default'];

},{"dace82ca4fa82d09":"15xNZ","55d6571b0684487f":"25y7Q","d2401330935e41f4":"cVKZz","300c50185aceb8ce":"aLtLf","4c8208884d4d255f":"4KA3d","a22ebe793edc8181":"1HI7q","d367057010f3400e":"6o2Fs"}],"15xNZ":[function(require,module,exports,__globalThis) {
'use strict';
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
// istanbul ignore next
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj['default'] = obj;
        return newObj;
    }
}
var _handlebarsBase = require("5189b13b1bf4f35d");
var base = _interopRequireWildcard(_handlebarsBase);
// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)
var _handlebarsSafeString = require("29e779a04116da4");
var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
var _handlebarsException = require("c6e11e8d1a79afbb");
var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
var _handlebarsUtils = require("4e1f243f38a8b2d0");
var Utils = _interopRequireWildcard(_handlebarsUtils);
var _handlebarsRuntime = require("8a480915b8bcb3c8");
var runtime = _interopRequireWildcard(_handlebarsRuntime);
var _handlebarsNoConflict = require("261057eb44c1e90c");
var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
    var hb = new base.HandlebarsEnvironment();
    Utils.extend(hb, base);
    hb.SafeString = _handlebarsSafeString2['default'];
    hb.Exception = _handlebarsException2['default'];
    hb.Utils = Utils;
    hb.escapeExpression = Utils.escapeExpression;
    hb.VM = runtime;
    hb.template = function(spec) {
        return runtime.template(spec, hb);
    };
    return hb;
}
var inst = create();
inst.create = create;
_handlebarsNoConflict2['default'](inst);
inst['default'] = inst;
exports['default'] = inst;
module.exports = exports['default'];

},{"5189b13b1bf4f35d":"lbZDS","29e779a04116da4":"dSoPK","c6e11e8d1a79afbb":"fzp9G","4e1f243f38a8b2d0":"5nZBG","8a480915b8bcb3c8":"aGtvU","261057eb44c1e90c":"6o2Fs"}],"lbZDS":[function(require,module,exports,__globalThis) {
'use strict';
exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _utils = require("4991264a6ecb5c6b");
var _exception = require("e4673ac149ffa7c");
var _exception2 = _interopRequireDefault(_exception);
var _helpers = require("981170f7187ce468");
var _decorators = require("ae06834a8db4d94c");
var _logger = require("35fef4b90bf7743");
var _logger2 = _interopRequireDefault(_logger);
var _internalProtoAccess = require("2adbdb537ec9595f");
var VERSION = '4.7.9';
exports.VERSION = VERSION;
var COMPILER_REVISION = 8;
exports.COMPILER_REVISION = COMPILER_REVISION;
var LAST_COMPATIBLE_COMPILER_REVISION = 7;
exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
var REVISION_CHANGES = {
    1: '<= 1.0.rc.2',
    2: '== 1.0.0-rc.3',
    3: '== 1.0.0-rc.4',
    4: '== 1.x.x',
    5: '== 2.0.0-alpha.x',
    6: '>= 2.0.0-beta.1',
    7: '>= 4.0.0 <4.3.0',
    8: '>= 4.3.0'
};
exports.REVISION_CHANGES = REVISION_CHANGES;
var objectType = '[object Object]';
function HandlebarsEnvironment(helpers, partials, decorators) {
    this.helpers = helpers || {};
    this.partials = partials || {};
    this.decorators = decorators || {};
    _helpers.registerDefaultHelpers(this);
    _decorators.registerDefaultDecorators(this);
}
HandlebarsEnvironment.prototype = {
    constructor: HandlebarsEnvironment,
    logger: _logger2['default'],
    log: _logger2['default'].log,
    registerHelper: function registerHelper(name, fn) {
        if (_utils.toString.call(name) === objectType) {
            if (fn) throw new _exception2['default']('Arg not supported with multiple helpers');
            _utils.extend(this.helpers, name);
        } else this.helpers[name] = fn;
    },
    unregisterHelper: function unregisterHelper(name) {
        delete this.helpers[name];
    },
    registerPartial: function registerPartial(name, partial) {
        if (_utils.toString.call(name) === objectType) _utils.extend(this.partials, name);
        else {
            if (typeof partial === 'undefined') throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
            this.partials[name] = partial;
        }
    },
    unregisterPartial: function unregisterPartial(name) {
        delete this.partials[name];
    },
    registerDecorator: function registerDecorator(name, fn) {
        if (_utils.toString.call(name) === objectType) {
            if (fn) throw new _exception2['default']('Arg not supported with multiple decorators');
            _utils.extend(this.decorators, name);
        } else this.decorators[name] = fn;
    },
    unregisterDecorator: function unregisterDecorator(name) {
        delete this.decorators[name];
    },
    /**
   * Reset the memory of illegal property accesses that have already been logged.
   * @deprecated should only be used in handlebars test-cases
   */ resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
        _internalProtoAccess.resetLoggedProperties();
    }
};
var log = _logger2['default'].log;
exports.log = log;
exports.createFrame = _utils.createFrame;
exports.logger = _logger2['default'];

},{"4991264a6ecb5c6b":"5nZBG","e4673ac149ffa7c":"fzp9G","981170f7187ce468":"5Zcqj","ae06834a8db4d94c":"kna3c","35fef4b90bf7743":"aa6Iv","2adbdb537ec9595f":"kp2Nf"}],"5nZBG":[function(require,module,exports,__globalThis) {
'use strict';
exports.__esModule = true;
exports.extend = extend;
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.createFrame = createFrame;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;',
    '=': '&#x3D;'
};
var badChars = /[&<>"'`=]/g, possible = /[&<>"'`=]/;
function escapeChar(chr) {
    return escape[chr];
}
function extend(obj /* , ...source */ ) {
    for(var i = 1; i < arguments.length; i++){
        for(var key in arguments[i])if (Object.prototype.hasOwnProperty.call(arguments[i], key)) obj[key] = arguments[i][key];
    }
    return obj;
}
var toString = Object.prototype.toString;
exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */ var isFunction = function isFunction(value) {
    return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */ if (isFunction(/x/)) exports.isFunction = isFunction = function(value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
};
exports.isFunction = isFunction;
/* eslint-enable func-style */ /* istanbul ignore next */ var isArray = Array.isArray || function(value) {
    return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
};
exports.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.
function indexOf(array, value) {
    for(var i = 0, len = array.length; i < len; i++){
        if (array[i] === value) return i;
    }
    return -1;
}
function escapeExpression(string) {
    if (typeof string !== 'string') {
        // don't escape SafeStrings, since they're already safe
        if (string && string.toHTML) return string.toHTML();
        else if (string == null) return '';
        else if (!string) return string + '';
        // Force a string conversion as this will be done by the append regardless and
        // the regex test will do this transparently behind the scenes, causing issues if
        // an object's to string has escaped characters in it.
        string = '' + string;
    }
    if (!possible.test(string)) return string;
    return string.replace(badChars, escapeChar);
}
function isEmpty(value) {
    if (!value && value !== 0) return true;
    else if (isArray(value) && value.length === 0) return true;
    else return false;
}
function createFrame(object) {
    var frame = extend({}, object);
    frame._parent = object;
    return frame;
}
function blockParams(params, ids) {
    params.path = ids;
    return params;
}
function appendContextPath(contextPath, id) {
    return (contextPath ? contextPath + '.' : '') + id;
}

},{}],"fzp9G":[function(require,module,exports,__globalThis) {
'use strict';
exports.__esModule = true;
var errorProps = [
    'description',
    'fileName',
    'lineNumber',
    'endLineNumber',
    'message',
    'name',
    'number',
    'stack'
];
function Exception(message, node) {
    var loc = node && node.loc, line = undefined, endLineNumber = undefined, column = undefined, endColumn = undefined;
    if (loc) {
        line = loc.start.line;
        endLineNumber = loc.end.line;
        column = loc.start.column;
        endColumn = loc.end.column;
        message += ' - ' + line + ':' + column;
    }
    var tmp = Error.prototype.constructor.call(this, message);
    // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
    for(var idx = 0; idx < errorProps.length; idx++)this[errorProps[idx]] = tmp[errorProps[idx]];
    /* istanbul ignore else */ if (Error.captureStackTrace) Error.captureStackTrace(this, Exception);
    try {
        if (loc) {
            this.lineNumber = line;
            this.endLineNumber = endLineNumber;
            // Work around issue under safari where we can't directly set the column value
            /* istanbul ignore next */ if (Object.defineProperty) {
                Object.defineProperty(this, 'column', {
                    value: column,
                    enumerable: true
                });
                Object.defineProperty(this, 'endColumn', {
                    value: endColumn,
                    enumerable: true
                });
            } else {
                this.column = column;
                this.endColumn = endColumn;
            }
        }
    } catch (nop) {
    /* Ignore if the browser is very particular */ }
}
Exception.prototype = new Error();
exports['default'] = Exception;
module.exports = exports['default'];

},{}],"5Zcqj":[function(require,module,exports,__globalThis) {
'use strict';
exports.__esModule = true;
exports.registerDefaultHelpers = registerDefaultHelpers;
exports.moveHelperToHooks = moveHelperToHooks;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _helpersBlockHelperMissing = require("817b5223939b0f70");
var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
var _helpersEach = require("8268a3aef10dd64d");
var _helpersEach2 = _interopRequireDefault(_helpersEach);
var _helpersHelperMissing = require("b726f4668cdedb66");
var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
var _helpersIf = require("8cd91e8af9210478");
var _helpersIf2 = _interopRequireDefault(_helpersIf);
var _helpersLog = require("565cabdafd6dcf40");
var _helpersLog2 = _interopRequireDefault(_helpersLog);
var _helpersLookup = require("7892b3b4b00506a9");
var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
var _helpersWith = require("c976d072e7e0289");
var _helpersWith2 = _interopRequireDefault(_helpersWith);
function registerDefaultHelpers(instance) {
    _helpersBlockHelperMissing2['default'](instance);
    _helpersEach2['default'](instance);
    _helpersHelperMissing2['default'](instance);
    _helpersIf2['default'](instance);
    _helpersLog2['default'](instance);
    _helpersLookup2['default'](instance);
    _helpersWith2['default'](instance);
}
function moveHelperToHooks(instance, helperName, keepHelper) {
    if (instance.helpers[helperName]) {
        instance.hooks[helperName] = instance.helpers[helperName];
        if (!keepHelper) // Using delete is slow
        instance.helpers[helperName] = undefined;
    }
}

},{"817b5223939b0f70":"h11PG","8268a3aef10dd64d":"RBJMO","b726f4668cdedb66":"8XB4W","8cd91e8af9210478":"4YOxw","565cabdafd6dcf40":"7e154","7892b3b4b00506a9":"hIKdb","c976d072e7e0289":"4Gfx6"}],"h11PG":[function(require,module,exports,__globalThis) {
'use strict';
exports.__esModule = true;
var _utils = require("2e9f7b43a3f3ed64");
exports['default'] = function(instance) {
    instance.registerHelper('blockHelperMissing', function(context, options) {
        var inverse = options.inverse, fn = options.fn;
        if (context === true) return fn(this);
        else if (context === false || context == null) return inverse(this);
        else if (_utils.isArray(context)) {
            if (context.length > 0) {
                if (options.ids) options.ids = [
                    options.name
                ];
                return instance.helpers.each(context, options);
            } else return inverse(this);
        } else {
            if (options.data && options.ids) {
                var data = _utils.createFrame(options.data);
                data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
                options = {
                    data: data
                };
            }
            return fn(context, options);
        }
    });
};
module.exports = exports['default'];

},{"2e9f7b43a3f3ed64":"5nZBG"}],"RBJMO":[function(require,module,exports,__globalThis) {
'use strict';
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _utils = require("8733c54d8e9aa93c");
var _exception = require("2c934d2484a6224c");
var _exception2 = _interopRequireDefault(_exception);
exports['default'] = function(instance) {
    instance.registerHelper('each', function(context, options) {
        if (!options) throw new _exception2['default']('Must pass iterator to #each');
        var fn = options.fn, inverse = options.inverse, i = 0, ret = '', data = undefined, contextPath = undefined;
        if (options.data && options.ids) contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
        if (_utils.isFunction(context)) context = context.call(this);
        if (options.data) data = _utils.createFrame(options.data);
        function execIteration(field, index, last) {
            if (data) {
                data.key = field;
                data.index = index;
                data.first = index === 0;
                data.last = !!last;
                if (contextPath) data.contextPath = contextPath + field;
            }
            ret = ret + fn(context[field], {
                data: data,
                blockParams: _utils.blockParams([
                    context[field],
                    field
                ], [
                    contextPath + field,
                    null
                ])
            });
        }
        if (context && typeof context === 'object') {
            if (_utils.isArray(context)) {
                for(var j = context.length; i < j; i++)if (i in context) execIteration(i, i, i === context.length - 1);
            } else if (typeof Symbol === 'function' && context[Symbol.iterator]) {
                var newContext = [];
                var iterator = context[Symbol.iterator]();
                for(var it = iterator.next(); !it.done; it = iterator.next())newContext.push(it.value);
                context = newContext;
                for(var j = context.length; i < j; i++)execIteration(i, i, i === context.length - 1);
            } else (function() {
                var priorKey = undefined;
                Object.keys(context).forEach(function(key) {
                    // We're running the iterations one step out of sync so we can detect
                    // the last iteration without have to scan the object twice and create
                    // an itermediate keys array.
                    if (priorKey !== undefined) execIteration(priorKey, i - 1);
                    priorKey = key;
                    i++;
                });
                if (priorKey !== undefined) execIteration(priorKey, i - 1, true);
            })();
        }
        if (i === 0) ret = inverse(this);
        return ret;
    });
};
module.exports = exports['default'];

},{"8733c54d8e9aa93c":"5nZBG","2c934d2484a6224c":"fzp9G"}],"8XB4W":[function(require,module,exports,__globalThis) {
'use strict';
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _exception = require("892d5fcb527c9723");
var _exception2 = _interopRequireDefault(_exception);
exports['default'] = function(instance) {
    instance.registerHelper('helperMissing', function() /* [args, ]options */ {
        if (arguments.length === 1) // A missing field in a {{foo}} construct.
        return undefined;
        else // Someone is actually trying to call something, blow up.
        throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    });
};
module.exports = exports['default'];

},{"892d5fcb527c9723":"fzp9G"}],"4YOxw":[function(require,module,exports,__globalThis) {
'use strict';
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _utils = require("9d4ef5ba9185cc77");
var _exception = require("dae1cebe64ff2466");
var _exception2 = _interopRequireDefault(_exception);
exports['default'] = function(instance) {
    instance.registerHelper('if', function(conditional, options) {
        if (arguments.length != 2) throw new _exception2['default']('#if requires exactly one argument');
        if (_utils.isFunction(conditional)) conditional = conditional.call(this);
        // Default behavior is to render the positive path if the value is truthy and not empty.
        // The `includeZero` option may be set to treat the condtional as purely not empty based on the
        // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
        if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) return options.inverse(this);
        else return options.fn(this);
    });
    instance.registerHelper('unless', function(conditional, options) {
        if (arguments.length != 2) throw new _exception2['default']('#unless requires exactly one argument');
        return instance.helpers['if'].call(this, conditional, {
            fn: options.inverse,
            inverse: options.fn,
            hash: options.hash
        });
    });
};
module.exports = exports['default'];

},{"9d4ef5ba9185cc77":"5nZBG","dae1cebe64ff2466":"fzp9G"}],"7e154":[function(require,module,exports,__globalThis) {
'use strict';
exports.__esModule = true;
exports['default'] = function(instance) {
    instance.registerHelper('log', function() /* message, options */ {
        var args = [
            undefined
        ], options = arguments[arguments.length - 1];
        for(var i = 0; i < arguments.length - 1; i++)args.push(arguments[i]);
        var level = 1;
        if (options.hash.level != null) level = options.hash.level;
        else if (options.data && options.data.level != null) level = options.data.level;
        args[0] = level;
        instance.log.apply(instance, args);
    });
};
module.exports = exports['default'];

},{}],"hIKdb":[function(require,module,exports,__globalThis) {
'use strict';
exports.__esModule = true;
exports['default'] = function(instance) {
    instance.registerHelper('lookup', function(obj, field, options) {
        if (!obj) // Note for 5.0: Change to "obj == null" in 5.0
        return obj;
        return options.lookupProperty(obj, field);
    });
};
module.exports = exports['default'];

},{}],"4Gfx6":[function(require,module,exports,__globalThis) {
'use strict';
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _utils = require("4cf8b7b9d21f65fd");
var _exception = require("3fe725e9a0c860cc");
var _exception2 = _interopRequireDefault(_exception);
exports['default'] = function(instance) {
    instance.registerHelper('with', function(context, options) {
        if (arguments.length != 2) throw new _exception2['default']('#with requires exactly one argument');
        if (_utils.isFunction(context)) context = context.call(this);
        var fn = options.fn;
        if (!_utils.isEmpty(context)) {
            var data = options.data;
            if (options.data && options.ids) {
                data = _utils.createFrame(options.data);
                data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
            }
            return fn(context, {
                data: data,
                blockParams: _utils.blockParams([
                    context
                ], [
                    data && data.contextPath
                ])
            });
        } else return options.inverse(this);
    });
};
module.exports = exports['default'];

},{"4cf8b7b9d21f65fd":"5nZBG","3fe725e9a0c860cc":"fzp9G"}],"kna3c":[function(require,module,exports,__globalThis) {
'use strict';
exports.__esModule = true;
exports.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _decoratorsInline = require("1b226d84ad64b747");
var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
function registerDefaultDecorators(instance) {
    _decoratorsInline2['default'](instance);
}

},{"1b226d84ad64b747":"cTea7"}],"cTea7":[function(require,module,exports,__globalThis) {
'use strict';
exports.__esModule = true;
var _utils = require("15f855348e482cd8");
exports['default'] = function(instance) {
    instance.registerDecorator('inline', function(fn, props, container, options) {
        var ret = fn;
        if (!props.partials) {
            props.partials = {};
            ret = function(context, options) {
                // Create a new partials stack frame prior to exec.
                var original = container.partials;
                container.partials = _utils.extend({}, original, props.partials);
                var ret = fn(context, options);
                container.partials = original;
                return ret;
            };
        }
        props.partials[options.args[0]] = options.fn;
        return ret;
    });
};
module.exports = exports['default'];

},{"15f855348e482cd8":"5nZBG"}],"aa6Iv":[function(require,module,exports,__globalThis) {
'use strict';
exports.__esModule = true;
var _utils = require("58f53b6c24134408");
var logger = {
    methodMap: [
        'debug',
        'info',
        'warn',
        'error'
    ],
    level: 'info',
    // Maps a given level value to the `methodMap` indexes above.
    lookupLevel: function lookupLevel(level) {
        if (typeof level === 'string') {
            var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
            if (levelMap >= 0) level = levelMap;
            else level = parseInt(level, 10);
        }
        return level;
    },
    // Can be overridden in the host environment
    log: function log(level) {
        level = logger.lookupLevel(level);
        if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
            var method = logger.methodMap[level];
            // eslint-disable-next-line no-console
            if (!console[method]) method = 'log';
            for(var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)message[_key - 1] = arguments[_key];
            console[method].apply(console, message); // eslint-disable-line no-console
        }
    }
};
exports['default'] = logger;
module.exports = exports['default'];

},{"58f53b6c24134408":"5nZBG"}],"kp2Nf":[function(require,module,exports,__globalThis) {
'use strict';
exports.__esModule = true;
exports.createProtoAccessControl = createProtoAccessControl;
exports.resultIsAllowed = resultIsAllowed;
exports.resetLoggedProperties = resetLoggedProperties;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _utils = require("f50a8a7798bc4975");
var _logger = require("d501e14593152748");
var _logger2 = _interopRequireDefault(_logger);
var loggedProperties = Object.create(null);
function createProtoAccessControl(runtimeOptions) {
    // Create an object with "null"-prototype to avoid truthy results on
    // prototype properties.
    var propertyWhiteList = Object.create(null);
    // eslint-disable-next-line no-proto
    propertyWhiteList['__proto__'] = false;
    _utils.extend(propertyWhiteList, runtimeOptions.allowedProtoProperties);
    var methodWhiteList = Object.create(null);
    methodWhiteList['constructor'] = false;
    methodWhiteList['__defineGetter__'] = false;
    methodWhiteList['__defineSetter__'] = false;
    methodWhiteList['__lookupGetter__'] = false;
    methodWhiteList['__lookupSetter__'] = false;
    _utils.extend(methodWhiteList, runtimeOptions.allowedProtoMethods);
    return {
        properties: {
            whitelist: propertyWhiteList,
            defaultValue: runtimeOptions.allowProtoPropertiesByDefault
        },
        methods: {
            whitelist: methodWhiteList,
            defaultValue: runtimeOptions.allowProtoMethodsByDefault
        }
    };
}
function resultIsAllowed(result, protoAccessControl, propertyName) {
    if (typeof result === 'function') return checkWhiteList(protoAccessControl.methods, propertyName);
    else return checkWhiteList(protoAccessControl.properties, propertyName);
}
function checkWhiteList(protoAccessControlForType, propertyName) {
    if (protoAccessControlForType.whitelist[propertyName] !== undefined) return protoAccessControlForType.whitelist[propertyName] === true;
    if (protoAccessControlForType.defaultValue !== undefined) return protoAccessControlForType.defaultValue;
    logUnexpecedPropertyAccessOnce(propertyName);
    return false;
}
function logUnexpecedPropertyAccessOnce(propertyName) {
    if (loggedProperties[propertyName] !== true) {
        loggedProperties[propertyName] = true;
        _logger2['default'].log('error', 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + 'You can add a runtime option to disable the check or this warning:\n' + 'See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');
    }
}
function resetLoggedProperties() {
    Object.keys(loggedProperties).forEach(function(propertyName) {
        delete loggedProperties[propertyName];
    });
}

},{"f50a8a7798bc4975":"5nZBG","d501e14593152748":"aa6Iv"}],"dSoPK":[function(require,module,exports,__globalThis) {
// Build out our basic SafeString type
'use strict';
exports.__esModule = true;
function SafeString(string) {
    this.string = string;
}
SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
    return '' + this.string;
};
exports['default'] = SafeString;
module.exports = exports['default'];

},{}],"aGtvU":[function(require,module,exports,__globalThis) {
'use strict';
exports.__esModule = true;
exports.checkRevision = checkRevision;
exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
// istanbul ignore next
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj['default'] = obj;
        return newObj;
    }
}
var _utils = require("e0cd7490a4a8815b");
var Utils = _interopRequireWildcard(_utils);
var _exception = require("3cdd666125a00268");
var _exception2 = _interopRequireDefault(_exception);
var _base = require("61483b81fde4c3fd");
var _helpers = require("1784f0b71cba0d71");
var _internalWrapHelper = require("8ec17d2237199ec0");
var _internalProtoAccess = require("6c7d31140c725cfe");
function checkRevision(compilerInfo) {
    var compilerRevision = compilerInfo && compilerInfo[0] || 1, currentRevision = _base.COMPILER_REVISION;
    if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) return;
    if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
        var runtimeVersions = _base.REVISION_CHANGES[currentRevision], compilerVersions = _base.REVISION_CHANGES[compilerRevision];
        throw new _exception2['default']("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
    } else // Use the embedded version info since the runtime doesn't know about this revision yet
    throw new _exception2['default']("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + compilerInfo[1] + ').');
}
function template(templateSpec, env) {
    /* istanbul ignore next */ if (!env) throw new _exception2['default']('No environment passed to template');
    if (!templateSpec || !templateSpec.main) throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
    templateSpec.main.decorator = templateSpec.main_d;
    // Note: Using env.VM references rather than local var references throughout this section to allow
    // for external users to override these as pseudo-supported APIs.
    env.VM.checkRevision(templateSpec.compiler);
    // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
    var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;
    function invokePartialWrapper(partial, context, options) {
        if (options.hash) {
            context = Utils.extend({}, context, options.hash);
            if (options.ids) options.ids[0] = true;
        }
        partial = env.VM.resolvePartial.call(this, partial, context, options);
        options.hooks = this.hooks;
        options.protoAccessControl = this.protoAccessControl;
        var result = env.VM.invokePartial.call(this, partial, context, options);
        if (result == null && env.compile) {
            options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
            result = options.partials[options.name](context, options);
        }
        if (result != null) {
            if (options.indent) {
                var lines = result.split('\n');
                for(var i = 0, l = lines.length; i < l; i++){
                    if (!lines[i] && i + 1 === l) break;
                    lines[i] = options.indent + lines[i];
                }
                result = lines.join('\n');
            }
            return result;
        } else throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
    }
    // Just add water
    var container = {
        strict: function strict(obj, name, loc) {
            if (!obj || !(name in obj)) throw new _exception2['default']('"' + name + '" not defined in ' + obj, {
                loc: loc
            });
            return container.lookupProperty(obj, name);
        },
        lookupProperty: function lookupProperty(parent, propertyName) {
            var result = parent[propertyName];
            if (result == null) return result;
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return result;
            if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) return result;
            return undefined;
        },
        lookup: function lookup(depths, name) {
            var len = depths.length;
            for(var i = 0; i < len; i++){
                var result = depths[i] && container.lookupProperty(depths[i], name);
                if (result != null) return result;
            }
        },
        lambda: function lambda(current, context) {
            return typeof current === 'function' ? current.call(context) : current;
        },
        escapeExpression: Utils.escapeExpression,
        invokePartial: invokePartialWrapper,
        fn: function fn(i) {
            var ret = templateSpec[i];
            ret.decorator = templateSpec[i + '_d'];
            return ret;
        },
        programs: [],
        program: function program(i, data, declaredBlockParams, blockParams, depths) {
            var programWrapper = this.programs[i], fn = this.fn(i);
            if (data || depths || blockParams || declaredBlockParams) programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
            else if (!programWrapper) programWrapper = this.programs[i] = wrapProgram(this, i, fn);
            return programWrapper;
        },
        data: function data(value, depth) {
            while(value && depth--)value = value._parent;
            return value;
        },
        mergeIfNeeded: function mergeIfNeeded(param, common) {
            var obj = param || common;
            if (param && common && param !== common) obj = Utils.extend({}, common, param);
            return obj;
        },
        // An empty object to use as replacement for null-contexts
        nullContext: Object.seal({}),
        noop: env.VM.noop,
        compilerInfo: templateSpec.compiler
    };
    function ret(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var data = options.data;
        ret._setup(options);
        if (!options.partial && templateSpec.useData) data = initData(context, data);
        var depths = undefined, blockParams = templateSpec.useBlockParams ? [] : undefined;
        if (templateSpec.useDepths) {
            if (options.depths) depths = context != options.depths[0] ? [
                context
            ].concat(options.depths) : options.depths;
            else depths = [
                context
            ];
        }
        function main(context /*, options*/ ) {
            return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
        }
        main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
        return main(context, options);
    }
    ret.isTop = true;
    ret._setup = function(options) {
        if (!options.partial) {
            var mergedHelpers = {};
            addHelpers(mergedHelpers, env.helpers, container);
            addHelpers(mergedHelpers, options.helpers, container);
            container.helpers = mergedHelpers;
            if (templateSpec.usePartial) // Use mergeIfNeeded here to prevent compiling global partials multiple times
            container.partials = container.mergeIfNeeded(options.partials, env.partials);
            if (templateSpec.usePartial || templateSpec.useDecorators) container.decorators = Utils.extend({}, env.decorators, options.decorators);
            container.hooks = {};
            container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);
            var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
            _helpers.moveHelperToHooks(container, 'helperMissing', keepHelperInHelpers);
            _helpers.moveHelperToHooks(container, 'blockHelperMissing', keepHelperInHelpers);
        } else {
            container.protoAccessControl = options.protoAccessControl; // internal option
            container.helpers = options.helpers;
            container.partials = options.partials;
            container.decorators = options.decorators;
            container.hooks = options.hooks;
        }
    };
    ret._child = function(i, data, blockParams, depths) {
        if (templateSpec.useBlockParams && !blockParams) throw new _exception2['default']('must pass block params');
        if (templateSpec.useDepths && !depths) throw new _exception2['default']('must pass parent depths');
        return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
    };
    return ret;
}
function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
    function prog(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var currentDepths = depths;
        if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) currentDepths = [
            context
        ].concat(depths);
        return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [
            options.blockParams
        ].concat(blockParams), currentDepths);
    }
    prog = executeDecorators(fn, prog, container, depths, data, blockParams);
    prog.program = i;
    prog.depth = depths ? depths.length : 0;
    prog.blockParams = declaredBlockParams || 0;
    return prog;
}
/**
 * This is currently part of the official API, therefore implementation details should not be changed.
 */ function resolvePartial(partial, context, options) {
    if (!partial) {
        if (options.name === '@partial-block') partial = lookupOwnProperty(options.data, 'partial-block');
        else partial = lookupOwnProperty(options.partials, options.name);
    } else if (!partial.call && !options.name) {
        // This is a dynamic partial that returned a string
        options.name = partial;
        partial = lookupOwnProperty(options.partials, partial);
    }
    return partial;
}
function invokePartial(partial, context, options) {
    // Use the current closure context to save the partial-block if this partial
    var currentPartialBlock = lookupOwnProperty(options.data, 'partial-block');
    options.partial = true;
    if (options.ids) options.data.contextPath = options.ids[0] || options.data.contextPath;
    var partialBlock = undefined;
    if (options.fn && options.fn !== noop) (function() {
        options.data = _base.createFrame(options.data);
        // Wrapper function to get access to currentPartialBlock from the closure
        var fn = options.fn;
        partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
            var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
            // Restore the partial-block from the closure for the execution of the block
            // i.e. the part inside the block of the partial call.
            options.data = _base.createFrame(options.data);
            options.data['partial-block'] = currentPartialBlock;
            return fn(context, options);
        };
        if (fn.partials) options.partials = Utils.extend({}, options.partials, fn.partials);
    })();
    if (partial === undefined && partialBlock) partial = partialBlock;
    if (partial === undefined) throw new _exception2['default']('The partial ' + options.name + ' could not be found');
    else if (partial instanceof Function) return partial(context, options);
}
function noop() {
    return '';
}
function lookupOwnProperty(obj, name) {
    if (obj && Object.prototype.hasOwnProperty.call(obj, name)) return obj[name];
}
function initData(context, data) {
    if (!data || !('root' in data)) {
        data = data ? _base.createFrame(data) : {};
        data.root = context;
    }
    return data;
}
function executeDecorators(fn, prog, container, depths, data, blockParams) {
    if (fn.decorator) {
        var props = {};
        prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
        Utils.extend(prog, props);
    }
    return prog;
}
function addHelpers(mergedHelpers, helpers, container) {
    if (!helpers) return;
    Object.keys(helpers).forEach(function(helperName) {
        var helper = helpers[helperName];
        mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
    });
}
function passLookupPropertyOption(helper, container) {
    var lookupProperty = container.lookupProperty;
    return _internalWrapHelper.wrapHelper(helper, function(options) {
        options.lookupProperty = lookupProperty;
        return options;
    });
}

},{"e0cd7490a4a8815b":"5nZBG","3cdd666125a00268":"fzp9G","61483b81fde4c3fd":"lbZDS","1784f0b71cba0d71":"5Zcqj","8ec17d2237199ec0":"iyCpc","6c7d31140c725cfe":"kp2Nf"}],"iyCpc":[function(require,module,exports,__globalThis) {
'use strict';
exports.__esModule = true;
exports.wrapHelper = wrapHelper;
function wrapHelper(helper, transformOptionsFn) {
    if (typeof helper !== 'function') // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
    // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
    return helper;
    var wrapper = function wrapper() /* dynamic arguments */ {
        var options = arguments[arguments.length - 1];
        arguments[arguments.length - 1] = transformOptionsFn(options);
        return helper.apply(this, arguments);
    };
    return wrapper;
}

},{}],"6o2Fs":[function(require,module,exports,__globalThis) {
/* global globalThis */ 'use strict';
exports.__esModule = true;
exports['default'] = function(Handlebars) {
    /* istanbul ignore next */ // https://mathiasbynens.be/notes/globalthis
    (function() {
        if (typeof globalThis === 'object') return;
        Object.prototype.__defineGetter__('__magic__', function() {
            return this;
        });
        __magic__.globalThis = __magic__; // eslint-disable-line no-undef
        delete Object.prototype.__magic__;
    })();
    var $Handlebars = globalThis.Handlebars;
    /* istanbul ignore next */ Handlebars.noConflict = function() {
        if (globalThis.Handlebars === Handlebars) globalThis.Handlebars = $Handlebars;
        return Handlebars;
    };
};
module.exports = exports['default'];

},{}],"25y7Q":[function(require,module,exports,__globalThis) {
'use strict';
exports.__esModule = true;
var AST = {
    // Public API used to evaluate derived attributes regarding AST nodes
    helpers: {
        // a mustache is definitely a helper if:
        // * it is an eligible helper, and
        // * it has at least one parameter or hash segment
        helperExpression: function helperExpression(node) {
            return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
        },
        scopedId: function scopedId(path) {
            return /^\.|this\b/.test(path.original);
        },
        // an ID is simple if it only has one part, and that part is not
        // `..` or `this`.
        simpleId: function simpleId(path) {
            return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
        }
    }
};
// Must be exported as an object rather than the root of the module as the jison lexer
// must modify the object to operate properly.
exports['default'] = AST;
module.exports = exports['default'];

},{}],"cVKZz":[function(require,module,exports,__globalThis) {
'use strict';
exports.__esModule = true;
exports.parseWithoutProcessing = parseWithoutProcessing;
exports.parse = parse;
// istanbul ignore next
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj['default'] = obj;
        return newObj;
    }
}
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _parser = require("541314b1b882bb40");
var _parser2 = _interopRequireDefault(_parser);
var _whitespaceControl = require("bad178b173809688");
var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);
var _helpers = require("eae10f32d37a7735");
var Helpers = _interopRequireWildcard(_helpers);
var _exception = require("d95c56b5bed9c1d");
var _exception2 = _interopRequireDefault(_exception);
var _utils = require("d76332258c7b1d5c");
exports.parser = _parser2['default'];
var yy = {};
_utils.extend(yy, Helpers);
function parseWithoutProcessing(input, options) {
    // Just return if an already-compiled AST was passed in.
    if (input.type === 'Program') {
        // When a pre-parsed AST is passed in, validate all node values to prevent
        // code injection via type-confused literals.
        validateInputAst(input);
        return input;
    }
    _parser2['default'].yy = yy;
    // Altering the shared object here, but this is ok as parser is a sync operation
    yy.locInfo = function(locInfo) {
        return new yy.SourceLocation(options && options.srcName, locInfo);
    };
    var ast = _parser2['default'].parse(input);
    return ast;
}
function parse(input, options) {
    var ast = parseWithoutProcessing(input, options);
    var strip = new _whitespaceControl2['default'](options);
    return strip.accept(ast);
}
function validateInputAst(ast) {
    validateAstNode(ast);
}
function validateAstNode(node) {
    if (node == null) return;
    if (Array.isArray(node)) {
        node.forEach(validateAstNode);
        return;
    }
    if (typeof node !== 'object') return;
    if (node.type === 'PathExpression') {
        if (!isValidDepth(node.depth)) throw new _exception2['default']('Invalid AST: PathExpression.depth must be an integer');
        if (!Array.isArray(node.parts)) throw new _exception2['default']('Invalid AST: PathExpression.parts must be an array');
        for(var i = 0; i < node.parts.length; i++){
            if (typeof node.parts[i] !== 'string') throw new _exception2['default']('Invalid AST: PathExpression.parts must only contain strings');
        }
    } else if (node.type === 'NumberLiteral') {
        if (typeof node.value !== 'number' || !isFinite(node.value)) throw new _exception2['default']('Invalid AST: NumberLiteral.value must be a number');
    } else if (node.type === 'BooleanLiteral') {
        if (typeof node.value !== 'boolean') throw new _exception2['default']('Invalid AST: BooleanLiteral.value must be a boolean');
    }
    Object.keys(node).forEach(function(propertyName) {
        if (propertyName === 'loc') return;
        validateAstNode(node[propertyName]);
    });
}
function isValidDepth(depth) {
    return typeof depth === 'number' && isFinite(depth) && Math.floor(depth) === depth && depth >= 0;
}

},{"541314b1b882bb40":"1kkeF","bad178b173809688":"73lNo","eae10f32d37a7735":"1gpwa","d95c56b5bed9c1d":"fzp9G","d76332258c7b1d5c":"5nZBG"}],"1kkeF":[function(require,module,exports,__globalThis) {
// File ignored in coverage tests via setting in .istanbul.yml
/* Jison generated parser */ "use strict";
exports.__esModule = true;
var handlebars = function() {
    var parser = {
        trace: function trace() {},
        yy: {},
        symbols_: {
            "error": 2,
            "root": 3,
            "program": 4,
            "EOF": 5,
            "program_repetition0": 6,
            "statement": 7,
            "mustache": 8,
            "block": 9,
            "rawBlock": 10,
            "partial": 11,
            "partialBlock": 12,
            "content": 13,
            "COMMENT": 14,
            "CONTENT": 15,
            "openRawBlock": 16,
            "rawBlock_repetition0": 17,
            "END_RAW_BLOCK": 18,
            "OPEN_RAW_BLOCK": 19,
            "helperName": 20,
            "openRawBlock_repetition0": 21,
            "openRawBlock_option0": 22,
            "CLOSE_RAW_BLOCK": 23,
            "openBlock": 24,
            "block_option0": 25,
            "closeBlock": 26,
            "openInverse": 27,
            "block_option1": 28,
            "OPEN_BLOCK": 29,
            "openBlock_repetition0": 30,
            "openBlock_option0": 31,
            "openBlock_option1": 32,
            "CLOSE": 33,
            "OPEN_INVERSE": 34,
            "openInverse_repetition0": 35,
            "openInverse_option0": 36,
            "openInverse_option1": 37,
            "openInverseChain": 38,
            "OPEN_INVERSE_CHAIN": 39,
            "openInverseChain_repetition0": 40,
            "openInverseChain_option0": 41,
            "openInverseChain_option1": 42,
            "inverseAndProgram": 43,
            "INVERSE": 44,
            "inverseChain": 45,
            "inverseChain_option0": 46,
            "OPEN_ENDBLOCK": 47,
            "OPEN": 48,
            "mustache_repetition0": 49,
            "mustache_option0": 50,
            "OPEN_UNESCAPED": 51,
            "mustache_repetition1": 52,
            "mustache_option1": 53,
            "CLOSE_UNESCAPED": 54,
            "OPEN_PARTIAL": 55,
            "partialName": 56,
            "partial_repetition0": 57,
            "partial_option0": 58,
            "openPartialBlock": 59,
            "OPEN_PARTIAL_BLOCK": 60,
            "openPartialBlock_repetition0": 61,
            "openPartialBlock_option0": 62,
            "param": 63,
            "sexpr": 64,
            "OPEN_SEXPR": 65,
            "sexpr_repetition0": 66,
            "sexpr_option0": 67,
            "CLOSE_SEXPR": 68,
            "hash": 69,
            "hash_repetition_plus0": 70,
            "hashSegment": 71,
            "ID": 72,
            "EQUALS": 73,
            "blockParams": 74,
            "OPEN_BLOCK_PARAMS": 75,
            "blockParams_repetition_plus0": 76,
            "CLOSE_BLOCK_PARAMS": 77,
            "path": 78,
            "dataName": 79,
            "STRING": 80,
            "NUMBER": 81,
            "BOOLEAN": 82,
            "UNDEFINED": 83,
            "NULL": 84,
            "DATA": 85,
            "pathSegments": 86,
            "SEP": 87,
            "$accept": 0,
            "$end": 1
        },
        terminals_: {
            2: "error",
            5: "EOF",
            14: "COMMENT",
            15: "CONTENT",
            18: "END_RAW_BLOCK",
            19: "OPEN_RAW_BLOCK",
            23: "CLOSE_RAW_BLOCK",
            29: "OPEN_BLOCK",
            33: "CLOSE",
            34: "OPEN_INVERSE",
            39: "OPEN_INVERSE_CHAIN",
            44: "INVERSE",
            47: "OPEN_ENDBLOCK",
            48: "OPEN",
            51: "OPEN_UNESCAPED",
            54: "CLOSE_UNESCAPED",
            55: "OPEN_PARTIAL",
            60: "OPEN_PARTIAL_BLOCK",
            65: "OPEN_SEXPR",
            68: "CLOSE_SEXPR",
            72: "ID",
            73: "EQUALS",
            75: "OPEN_BLOCK_PARAMS",
            77: "CLOSE_BLOCK_PARAMS",
            80: "STRING",
            81: "NUMBER",
            82: "BOOLEAN",
            83: "UNDEFINED",
            84: "NULL",
            85: "DATA",
            87: "SEP"
        },
        productions_: [
            0,
            [
                3,
                2
            ],
            [
                4,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                7,
                1
            ],
            [
                13,
                1
            ],
            [
                10,
                3
            ],
            [
                16,
                5
            ],
            [
                9,
                4
            ],
            [
                9,
                4
            ],
            [
                24,
                6
            ],
            [
                27,
                6
            ],
            [
                38,
                6
            ],
            [
                43,
                2
            ],
            [
                45,
                3
            ],
            [
                45,
                1
            ],
            [
                26,
                3
            ],
            [
                8,
                5
            ],
            [
                8,
                5
            ],
            [
                11,
                5
            ],
            [
                12,
                3
            ],
            [
                59,
                5
            ],
            [
                63,
                1
            ],
            [
                63,
                1
            ],
            [
                64,
                5
            ],
            [
                69,
                1
            ],
            [
                71,
                3
            ],
            [
                74,
                3
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                20,
                1
            ],
            [
                56,
                1
            ],
            [
                56,
                1
            ],
            [
                79,
                2
            ],
            [
                78,
                1
            ],
            [
                86,
                3
            ],
            [
                86,
                1
            ],
            [
                6,
                0
            ],
            [
                6,
                2
            ],
            [
                17,
                0
            ],
            [
                17,
                2
            ],
            [
                21,
                0
            ],
            [
                21,
                2
            ],
            [
                22,
                0
            ],
            [
                22,
                1
            ],
            [
                25,
                0
            ],
            [
                25,
                1
            ],
            [
                28,
                0
            ],
            [
                28,
                1
            ],
            [
                30,
                0
            ],
            [
                30,
                2
            ],
            [
                31,
                0
            ],
            [
                31,
                1
            ],
            [
                32,
                0
            ],
            [
                32,
                1
            ],
            [
                35,
                0
            ],
            [
                35,
                2
            ],
            [
                36,
                0
            ],
            [
                36,
                1
            ],
            [
                37,
                0
            ],
            [
                37,
                1
            ],
            [
                40,
                0
            ],
            [
                40,
                2
            ],
            [
                41,
                0
            ],
            [
                41,
                1
            ],
            [
                42,
                0
            ],
            [
                42,
                1
            ],
            [
                46,
                0
            ],
            [
                46,
                1
            ],
            [
                49,
                0
            ],
            [
                49,
                2
            ],
            [
                50,
                0
            ],
            [
                50,
                1
            ],
            [
                52,
                0
            ],
            [
                52,
                2
            ],
            [
                53,
                0
            ],
            [
                53,
                1
            ],
            [
                57,
                0
            ],
            [
                57,
                2
            ],
            [
                58,
                0
            ],
            [
                58,
                1
            ],
            [
                61,
                0
            ],
            [
                61,
                2
            ],
            [
                62,
                0
            ],
            [
                62,
                1
            ],
            [
                66,
                0
            ],
            [
                66,
                2
            ],
            [
                67,
                0
            ],
            [
                67,
                1
            ],
            [
                70,
                1
            ],
            [
                70,
                2
            ],
            [
                76,
                1
            ],
            [
                76,
                2
            ]
        ],
        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
            var $0 = $$.length - 1;
            switch(yystate){
                case 1:
                    return $$[$0 - 1];
                case 2:
                    this.$ = yy.prepareProgram($$[$0]);
                    break;
                case 3:
                    this.$ = $$[$0];
                    break;
                case 4:
                    this.$ = $$[$0];
                    break;
                case 5:
                    this.$ = $$[$0];
                    break;
                case 6:
                    this.$ = $$[$0];
                    break;
                case 7:
                    this.$ = $$[$0];
                    break;
                case 8:
                    this.$ = $$[$0];
                    break;
                case 9:
                    this.$ = {
                        type: 'CommentStatement',
                        value: yy.stripComment($$[$0]),
                        strip: yy.stripFlags($$[$0], $$[$0]),
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 10:
                    this.$ = {
                        type: 'ContentStatement',
                        original: $$[$0],
                        value: $$[$0],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 11:
                    this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                    break;
                case 12:
                    this.$ = {
                        path: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1]
                    };
                    break;
                case 13:
                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
                    break;
                case 14:
                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
                    break;
                case 15:
                    this.$ = {
                        open: $$[$0 - 5],
                        path: $$[$0 - 4],
                        params: $$[$0 - 3],
                        hash: $$[$0 - 2],
                        blockParams: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 5], $$[$0])
                    };
                    break;
                case 16:
                    this.$ = {
                        path: $$[$0 - 4],
                        params: $$[$0 - 3],
                        hash: $$[$0 - 2],
                        blockParams: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 5], $$[$0])
                    };
                    break;
                case 17:
                    this.$ = {
                        path: $$[$0 - 4],
                        params: $$[$0 - 3],
                        hash: $$[$0 - 2],
                        blockParams: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 5], $$[$0])
                    };
                    break;
                case 18:
                    this.$ = {
                        strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]),
                        program: $$[$0]
                    };
                    break;
                case 19:
                    var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$), program = yy.prepareProgram([
                        inverse
                    ], $$[$0 - 1].loc);
                    program.chained = true;
                    this.$ = {
                        strip: $$[$0 - 2].strip,
                        program: program,
                        chain: true
                    };
                    break;
                case 20:
                    this.$ = $$[$0];
                    break;
                case 21:
                    this.$ = {
                        path: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 2], $$[$0])
                    };
                    break;
                case 22:
                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                    break;
                case 23:
                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                    break;
                case 24:
                    this.$ = {
                        type: 'PartialStatement',
                        name: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1],
                        indent: '',
                        strip: yy.stripFlags($$[$0 - 4], $$[$0]),
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 25:
                    this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                    break;
                case 26:
                    this.$ = {
                        path: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1],
                        strip: yy.stripFlags($$[$0 - 4], $$[$0])
                    };
                    break;
                case 27:
                    this.$ = $$[$0];
                    break;
                case 28:
                    this.$ = $$[$0];
                    break;
                case 29:
                    this.$ = {
                        type: 'SubExpression',
                        path: $$[$0 - 3],
                        params: $$[$0 - 2],
                        hash: $$[$0 - 1],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 30:
                    this.$ = {
                        type: 'Hash',
                        pairs: $$[$0],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 31:
                    this.$ = {
                        type: 'HashPair',
                        key: yy.id($$[$0 - 2]),
                        value: $$[$0],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 32:
                    this.$ = yy.id($$[$0 - 1]);
                    break;
                case 33:
                    this.$ = $$[$0];
                    break;
                case 34:
                    this.$ = $$[$0];
                    break;
                case 35:
                    this.$ = {
                        type: 'StringLiteral',
                        value: $$[$0],
                        original: $$[$0],
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 36:
                    this.$ = {
                        type: 'NumberLiteral',
                        value: Number($$[$0]),
                        original: Number($$[$0]),
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 37:
                    this.$ = {
                        type: 'BooleanLiteral',
                        value: $$[$0] === 'true',
                        original: $$[$0] === 'true',
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 38:
                    this.$ = {
                        type: 'UndefinedLiteral',
                        original: undefined,
                        value: undefined,
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 39:
                    this.$ = {
                        type: 'NullLiteral',
                        original: null,
                        value: null,
                        loc: yy.locInfo(this._$)
                    };
                    break;
                case 40:
                    this.$ = $$[$0];
                    break;
                case 41:
                    this.$ = $$[$0];
                    break;
                case 42:
                    this.$ = yy.preparePath(true, $$[$0], this._$);
                    break;
                case 43:
                    this.$ = yy.preparePath(false, $$[$0], this._$);
                    break;
                case 44:
                    $$[$0 - 2].push({
                        part: yy.id($$[$0]),
                        original: $$[$0],
                        separator: $$[$0 - 1]
                    });
                    this.$ = $$[$0 - 2];
                    break;
                case 45:
                    this.$ = [
                        {
                            part: yy.id($$[$0]),
                            original: $$[$0]
                        }
                    ];
                    break;
                case 46:
                    this.$ = [];
                    break;
                case 47:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 48:
                    this.$ = [];
                    break;
                case 49:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 50:
                    this.$ = [];
                    break;
                case 51:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 58:
                    this.$ = [];
                    break;
                case 59:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 64:
                    this.$ = [];
                    break;
                case 65:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 70:
                    this.$ = [];
                    break;
                case 71:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 78:
                    this.$ = [];
                    break;
                case 79:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 82:
                    this.$ = [];
                    break;
                case 83:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 86:
                    this.$ = [];
                    break;
                case 87:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 90:
                    this.$ = [];
                    break;
                case 91:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 94:
                    this.$ = [];
                    break;
                case 95:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 98:
                    this.$ = [
                        $$[$0]
                    ];
                    break;
                case 99:
                    $$[$0 - 1].push($$[$0]);
                    break;
                case 100:
                    this.$ = [
                        $$[$0]
                    ];
                    break;
                case 101:
                    $$[$0 - 1].push($$[$0]);
                    break;
            }
        },
        table: [
            {
                3: 1,
                4: 2,
                5: [
                    2,
                    46
                ],
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                1: [
                    3
                ]
            },
            {
                5: [
                    1,
                    4
                ]
            },
            {
                5: [
                    2,
                    2
                ],
                7: 5,
                8: 6,
                9: 7,
                10: 8,
                11: 9,
                12: 10,
                13: 11,
                14: [
                    1,
                    12
                ],
                15: [
                    1,
                    20
                ],
                16: 17,
                19: [
                    1,
                    23
                ],
                24: 15,
                27: 16,
                29: [
                    1,
                    21
                ],
                34: [
                    1,
                    22
                ],
                39: [
                    2,
                    2
                ],
                44: [
                    2,
                    2
                ],
                47: [
                    2,
                    2
                ],
                48: [
                    1,
                    13
                ],
                51: [
                    1,
                    14
                ],
                55: [
                    1,
                    18
                ],
                59: 19,
                60: [
                    1,
                    24
                ]
            },
            {
                1: [
                    2,
                    1
                ]
            },
            {
                5: [
                    2,
                    47
                ],
                14: [
                    2,
                    47
                ],
                15: [
                    2,
                    47
                ],
                19: [
                    2,
                    47
                ],
                29: [
                    2,
                    47
                ],
                34: [
                    2,
                    47
                ],
                39: [
                    2,
                    47
                ],
                44: [
                    2,
                    47
                ],
                47: [
                    2,
                    47
                ],
                48: [
                    2,
                    47
                ],
                51: [
                    2,
                    47
                ],
                55: [
                    2,
                    47
                ],
                60: [
                    2,
                    47
                ]
            },
            {
                5: [
                    2,
                    3
                ],
                14: [
                    2,
                    3
                ],
                15: [
                    2,
                    3
                ],
                19: [
                    2,
                    3
                ],
                29: [
                    2,
                    3
                ],
                34: [
                    2,
                    3
                ],
                39: [
                    2,
                    3
                ],
                44: [
                    2,
                    3
                ],
                47: [
                    2,
                    3
                ],
                48: [
                    2,
                    3
                ],
                51: [
                    2,
                    3
                ],
                55: [
                    2,
                    3
                ],
                60: [
                    2,
                    3
                ]
            },
            {
                5: [
                    2,
                    4
                ],
                14: [
                    2,
                    4
                ],
                15: [
                    2,
                    4
                ],
                19: [
                    2,
                    4
                ],
                29: [
                    2,
                    4
                ],
                34: [
                    2,
                    4
                ],
                39: [
                    2,
                    4
                ],
                44: [
                    2,
                    4
                ],
                47: [
                    2,
                    4
                ],
                48: [
                    2,
                    4
                ],
                51: [
                    2,
                    4
                ],
                55: [
                    2,
                    4
                ],
                60: [
                    2,
                    4
                ]
            },
            {
                5: [
                    2,
                    5
                ],
                14: [
                    2,
                    5
                ],
                15: [
                    2,
                    5
                ],
                19: [
                    2,
                    5
                ],
                29: [
                    2,
                    5
                ],
                34: [
                    2,
                    5
                ],
                39: [
                    2,
                    5
                ],
                44: [
                    2,
                    5
                ],
                47: [
                    2,
                    5
                ],
                48: [
                    2,
                    5
                ],
                51: [
                    2,
                    5
                ],
                55: [
                    2,
                    5
                ],
                60: [
                    2,
                    5
                ]
            },
            {
                5: [
                    2,
                    6
                ],
                14: [
                    2,
                    6
                ],
                15: [
                    2,
                    6
                ],
                19: [
                    2,
                    6
                ],
                29: [
                    2,
                    6
                ],
                34: [
                    2,
                    6
                ],
                39: [
                    2,
                    6
                ],
                44: [
                    2,
                    6
                ],
                47: [
                    2,
                    6
                ],
                48: [
                    2,
                    6
                ],
                51: [
                    2,
                    6
                ],
                55: [
                    2,
                    6
                ],
                60: [
                    2,
                    6
                ]
            },
            {
                5: [
                    2,
                    7
                ],
                14: [
                    2,
                    7
                ],
                15: [
                    2,
                    7
                ],
                19: [
                    2,
                    7
                ],
                29: [
                    2,
                    7
                ],
                34: [
                    2,
                    7
                ],
                39: [
                    2,
                    7
                ],
                44: [
                    2,
                    7
                ],
                47: [
                    2,
                    7
                ],
                48: [
                    2,
                    7
                ],
                51: [
                    2,
                    7
                ],
                55: [
                    2,
                    7
                ],
                60: [
                    2,
                    7
                ]
            },
            {
                5: [
                    2,
                    8
                ],
                14: [
                    2,
                    8
                ],
                15: [
                    2,
                    8
                ],
                19: [
                    2,
                    8
                ],
                29: [
                    2,
                    8
                ],
                34: [
                    2,
                    8
                ],
                39: [
                    2,
                    8
                ],
                44: [
                    2,
                    8
                ],
                47: [
                    2,
                    8
                ],
                48: [
                    2,
                    8
                ],
                51: [
                    2,
                    8
                ],
                55: [
                    2,
                    8
                ],
                60: [
                    2,
                    8
                ]
            },
            {
                5: [
                    2,
                    9
                ],
                14: [
                    2,
                    9
                ],
                15: [
                    2,
                    9
                ],
                19: [
                    2,
                    9
                ],
                29: [
                    2,
                    9
                ],
                34: [
                    2,
                    9
                ],
                39: [
                    2,
                    9
                ],
                44: [
                    2,
                    9
                ],
                47: [
                    2,
                    9
                ],
                48: [
                    2,
                    9
                ],
                51: [
                    2,
                    9
                ],
                55: [
                    2,
                    9
                ],
                60: [
                    2,
                    9
                ]
            },
            {
                20: 25,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 36,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                4: 37,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                39: [
                    2,
                    46
                ],
                44: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                4: 38,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                44: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                15: [
                    2,
                    48
                ],
                17: 39,
                18: [
                    2,
                    48
                ]
            },
            {
                20: 41,
                56: 40,
                64: 42,
                65: [
                    1,
                    43
                ],
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                4: 44,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                5: [
                    2,
                    10
                ],
                14: [
                    2,
                    10
                ],
                15: [
                    2,
                    10
                ],
                18: [
                    2,
                    10
                ],
                19: [
                    2,
                    10
                ],
                29: [
                    2,
                    10
                ],
                34: [
                    2,
                    10
                ],
                39: [
                    2,
                    10
                ],
                44: [
                    2,
                    10
                ],
                47: [
                    2,
                    10
                ],
                48: [
                    2,
                    10
                ],
                51: [
                    2,
                    10
                ],
                55: [
                    2,
                    10
                ],
                60: [
                    2,
                    10
                ]
            },
            {
                20: 45,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 46,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 47,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 41,
                56: 48,
                64: 42,
                65: [
                    1,
                    43
                ],
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                33: [
                    2,
                    78
                ],
                49: 49,
                65: [
                    2,
                    78
                ],
                72: [
                    2,
                    78
                ],
                80: [
                    2,
                    78
                ],
                81: [
                    2,
                    78
                ],
                82: [
                    2,
                    78
                ],
                83: [
                    2,
                    78
                ],
                84: [
                    2,
                    78
                ],
                85: [
                    2,
                    78
                ]
            },
            {
                23: [
                    2,
                    33
                ],
                33: [
                    2,
                    33
                ],
                54: [
                    2,
                    33
                ],
                65: [
                    2,
                    33
                ],
                68: [
                    2,
                    33
                ],
                72: [
                    2,
                    33
                ],
                75: [
                    2,
                    33
                ],
                80: [
                    2,
                    33
                ],
                81: [
                    2,
                    33
                ],
                82: [
                    2,
                    33
                ],
                83: [
                    2,
                    33
                ],
                84: [
                    2,
                    33
                ],
                85: [
                    2,
                    33
                ]
            },
            {
                23: [
                    2,
                    34
                ],
                33: [
                    2,
                    34
                ],
                54: [
                    2,
                    34
                ],
                65: [
                    2,
                    34
                ],
                68: [
                    2,
                    34
                ],
                72: [
                    2,
                    34
                ],
                75: [
                    2,
                    34
                ],
                80: [
                    2,
                    34
                ],
                81: [
                    2,
                    34
                ],
                82: [
                    2,
                    34
                ],
                83: [
                    2,
                    34
                ],
                84: [
                    2,
                    34
                ],
                85: [
                    2,
                    34
                ]
            },
            {
                23: [
                    2,
                    35
                ],
                33: [
                    2,
                    35
                ],
                54: [
                    2,
                    35
                ],
                65: [
                    2,
                    35
                ],
                68: [
                    2,
                    35
                ],
                72: [
                    2,
                    35
                ],
                75: [
                    2,
                    35
                ],
                80: [
                    2,
                    35
                ],
                81: [
                    2,
                    35
                ],
                82: [
                    2,
                    35
                ],
                83: [
                    2,
                    35
                ],
                84: [
                    2,
                    35
                ],
                85: [
                    2,
                    35
                ]
            },
            {
                23: [
                    2,
                    36
                ],
                33: [
                    2,
                    36
                ],
                54: [
                    2,
                    36
                ],
                65: [
                    2,
                    36
                ],
                68: [
                    2,
                    36
                ],
                72: [
                    2,
                    36
                ],
                75: [
                    2,
                    36
                ],
                80: [
                    2,
                    36
                ],
                81: [
                    2,
                    36
                ],
                82: [
                    2,
                    36
                ],
                83: [
                    2,
                    36
                ],
                84: [
                    2,
                    36
                ],
                85: [
                    2,
                    36
                ]
            },
            {
                23: [
                    2,
                    37
                ],
                33: [
                    2,
                    37
                ],
                54: [
                    2,
                    37
                ],
                65: [
                    2,
                    37
                ],
                68: [
                    2,
                    37
                ],
                72: [
                    2,
                    37
                ],
                75: [
                    2,
                    37
                ],
                80: [
                    2,
                    37
                ],
                81: [
                    2,
                    37
                ],
                82: [
                    2,
                    37
                ],
                83: [
                    2,
                    37
                ],
                84: [
                    2,
                    37
                ],
                85: [
                    2,
                    37
                ]
            },
            {
                23: [
                    2,
                    38
                ],
                33: [
                    2,
                    38
                ],
                54: [
                    2,
                    38
                ],
                65: [
                    2,
                    38
                ],
                68: [
                    2,
                    38
                ],
                72: [
                    2,
                    38
                ],
                75: [
                    2,
                    38
                ],
                80: [
                    2,
                    38
                ],
                81: [
                    2,
                    38
                ],
                82: [
                    2,
                    38
                ],
                83: [
                    2,
                    38
                ],
                84: [
                    2,
                    38
                ],
                85: [
                    2,
                    38
                ]
            },
            {
                23: [
                    2,
                    39
                ],
                33: [
                    2,
                    39
                ],
                54: [
                    2,
                    39
                ],
                65: [
                    2,
                    39
                ],
                68: [
                    2,
                    39
                ],
                72: [
                    2,
                    39
                ],
                75: [
                    2,
                    39
                ],
                80: [
                    2,
                    39
                ],
                81: [
                    2,
                    39
                ],
                82: [
                    2,
                    39
                ],
                83: [
                    2,
                    39
                ],
                84: [
                    2,
                    39
                ],
                85: [
                    2,
                    39
                ]
            },
            {
                23: [
                    2,
                    43
                ],
                33: [
                    2,
                    43
                ],
                54: [
                    2,
                    43
                ],
                65: [
                    2,
                    43
                ],
                68: [
                    2,
                    43
                ],
                72: [
                    2,
                    43
                ],
                75: [
                    2,
                    43
                ],
                80: [
                    2,
                    43
                ],
                81: [
                    2,
                    43
                ],
                82: [
                    2,
                    43
                ],
                83: [
                    2,
                    43
                ],
                84: [
                    2,
                    43
                ],
                85: [
                    2,
                    43
                ],
                87: [
                    1,
                    50
                ]
            },
            {
                72: [
                    1,
                    35
                ],
                86: 51
            },
            {
                23: [
                    2,
                    45
                ],
                33: [
                    2,
                    45
                ],
                54: [
                    2,
                    45
                ],
                65: [
                    2,
                    45
                ],
                68: [
                    2,
                    45
                ],
                72: [
                    2,
                    45
                ],
                75: [
                    2,
                    45
                ],
                80: [
                    2,
                    45
                ],
                81: [
                    2,
                    45
                ],
                82: [
                    2,
                    45
                ],
                83: [
                    2,
                    45
                ],
                84: [
                    2,
                    45
                ],
                85: [
                    2,
                    45
                ],
                87: [
                    2,
                    45
                ]
            },
            {
                52: 52,
                54: [
                    2,
                    82
                ],
                65: [
                    2,
                    82
                ],
                72: [
                    2,
                    82
                ],
                80: [
                    2,
                    82
                ],
                81: [
                    2,
                    82
                ],
                82: [
                    2,
                    82
                ],
                83: [
                    2,
                    82
                ],
                84: [
                    2,
                    82
                ],
                85: [
                    2,
                    82
                ]
            },
            {
                25: 53,
                38: 55,
                39: [
                    1,
                    57
                ],
                43: 56,
                44: [
                    1,
                    58
                ],
                45: 54,
                47: [
                    2,
                    54
                ]
            },
            {
                28: 59,
                43: 60,
                44: [
                    1,
                    58
                ],
                47: [
                    2,
                    56
                ]
            },
            {
                13: 62,
                15: [
                    1,
                    20
                ],
                18: [
                    1,
                    61
                ]
            },
            {
                33: [
                    2,
                    86
                ],
                57: 63,
                65: [
                    2,
                    86
                ],
                72: [
                    2,
                    86
                ],
                80: [
                    2,
                    86
                ],
                81: [
                    2,
                    86
                ],
                82: [
                    2,
                    86
                ],
                83: [
                    2,
                    86
                ],
                84: [
                    2,
                    86
                ],
                85: [
                    2,
                    86
                ]
            },
            {
                33: [
                    2,
                    40
                ],
                65: [
                    2,
                    40
                ],
                72: [
                    2,
                    40
                ],
                80: [
                    2,
                    40
                ],
                81: [
                    2,
                    40
                ],
                82: [
                    2,
                    40
                ],
                83: [
                    2,
                    40
                ],
                84: [
                    2,
                    40
                ],
                85: [
                    2,
                    40
                ]
            },
            {
                33: [
                    2,
                    41
                ],
                65: [
                    2,
                    41
                ],
                72: [
                    2,
                    41
                ],
                80: [
                    2,
                    41
                ],
                81: [
                    2,
                    41
                ],
                82: [
                    2,
                    41
                ],
                83: [
                    2,
                    41
                ],
                84: [
                    2,
                    41
                ],
                85: [
                    2,
                    41
                ]
            },
            {
                20: 64,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                26: 65,
                47: [
                    1,
                    66
                ]
            },
            {
                30: 67,
                33: [
                    2,
                    58
                ],
                65: [
                    2,
                    58
                ],
                72: [
                    2,
                    58
                ],
                75: [
                    2,
                    58
                ],
                80: [
                    2,
                    58
                ],
                81: [
                    2,
                    58
                ],
                82: [
                    2,
                    58
                ],
                83: [
                    2,
                    58
                ],
                84: [
                    2,
                    58
                ],
                85: [
                    2,
                    58
                ]
            },
            {
                33: [
                    2,
                    64
                ],
                35: 68,
                65: [
                    2,
                    64
                ],
                72: [
                    2,
                    64
                ],
                75: [
                    2,
                    64
                ],
                80: [
                    2,
                    64
                ],
                81: [
                    2,
                    64
                ],
                82: [
                    2,
                    64
                ],
                83: [
                    2,
                    64
                ],
                84: [
                    2,
                    64
                ],
                85: [
                    2,
                    64
                ]
            },
            {
                21: 69,
                23: [
                    2,
                    50
                ],
                65: [
                    2,
                    50
                ],
                72: [
                    2,
                    50
                ],
                80: [
                    2,
                    50
                ],
                81: [
                    2,
                    50
                ],
                82: [
                    2,
                    50
                ],
                83: [
                    2,
                    50
                ],
                84: [
                    2,
                    50
                ],
                85: [
                    2,
                    50
                ]
            },
            {
                33: [
                    2,
                    90
                ],
                61: 70,
                65: [
                    2,
                    90
                ],
                72: [
                    2,
                    90
                ],
                80: [
                    2,
                    90
                ],
                81: [
                    2,
                    90
                ],
                82: [
                    2,
                    90
                ],
                83: [
                    2,
                    90
                ],
                84: [
                    2,
                    90
                ],
                85: [
                    2,
                    90
                ]
            },
            {
                20: 74,
                33: [
                    2,
                    80
                ],
                50: 71,
                63: 72,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 73,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                72: [
                    1,
                    79
                ]
            },
            {
                23: [
                    2,
                    42
                ],
                33: [
                    2,
                    42
                ],
                54: [
                    2,
                    42
                ],
                65: [
                    2,
                    42
                ],
                68: [
                    2,
                    42
                ],
                72: [
                    2,
                    42
                ],
                75: [
                    2,
                    42
                ],
                80: [
                    2,
                    42
                ],
                81: [
                    2,
                    42
                ],
                82: [
                    2,
                    42
                ],
                83: [
                    2,
                    42
                ],
                84: [
                    2,
                    42
                ],
                85: [
                    2,
                    42
                ],
                87: [
                    1,
                    50
                ]
            },
            {
                20: 74,
                53: 80,
                54: [
                    2,
                    84
                ],
                63: 81,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 82,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                26: 83,
                47: [
                    1,
                    66
                ]
            },
            {
                47: [
                    2,
                    55
                ]
            },
            {
                4: 84,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                39: [
                    2,
                    46
                ],
                44: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                47: [
                    2,
                    20
                ]
            },
            {
                20: 85,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                4: 86,
                6: 3,
                14: [
                    2,
                    46
                ],
                15: [
                    2,
                    46
                ],
                19: [
                    2,
                    46
                ],
                29: [
                    2,
                    46
                ],
                34: [
                    2,
                    46
                ],
                47: [
                    2,
                    46
                ],
                48: [
                    2,
                    46
                ],
                51: [
                    2,
                    46
                ],
                55: [
                    2,
                    46
                ],
                60: [
                    2,
                    46
                ]
            },
            {
                26: 87,
                47: [
                    1,
                    66
                ]
            },
            {
                47: [
                    2,
                    57
                ]
            },
            {
                5: [
                    2,
                    11
                ],
                14: [
                    2,
                    11
                ],
                15: [
                    2,
                    11
                ],
                19: [
                    2,
                    11
                ],
                29: [
                    2,
                    11
                ],
                34: [
                    2,
                    11
                ],
                39: [
                    2,
                    11
                ],
                44: [
                    2,
                    11
                ],
                47: [
                    2,
                    11
                ],
                48: [
                    2,
                    11
                ],
                51: [
                    2,
                    11
                ],
                55: [
                    2,
                    11
                ],
                60: [
                    2,
                    11
                ]
            },
            {
                15: [
                    2,
                    49
                ],
                18: [
                    2,
                    49
                ]
            },
            {
                20: 74,
                33: [
                    2,
                    88
                ],
                58: 88,
                63: 89,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 90,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                65: [
                    2,
                    94
                ],
                66: 91,
                68: [
                    2,
                    94
                ],
                72: [
                    2,
                    94
                ],
                80: [
                    2,
                    94
                ],
                81: [
                    2,
                    94
                ],
                82: [
                    2,
                    94
                ],
                83: [
                    2,
                    94
                ],
                84: [
                    2,
                    94
                ],
                85: [
                    2,
                    94
                ]
            },
            {
                5: [
                    2,
                    25
                ],
                14: [
                    2,
                    25
                ],
                15: [
                    2,
                    25
                ],
                19: [
                    2,
                    25
                ],
                29: [
                    2,
                    25
                ],
                34: [
                    2,
                    25
                ],
                39: [
                    2,
                    25
                ],
                44: [
                    2,
                    25
                ],
                47: [
                    2,
                    25
                ],
                48: [
                    2,
                    25
                ],
                51: [
                    2,
                    25
                ],
                55: [
                    2,
                    25
                ],
                60: [
                    2,
                    25
                ]
            },
            {
                20: 92,
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 74,
                31: 93,
                33: [
                    2,
                    60
                ],
                63: 94,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 95,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                75: [
                    2,
                    60
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 74,
                33: [
                    2,
                    66
                ],
                36: 96,
                63: 97,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 98,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                75: [
                    2,
                    66
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 74,
                22: 99,
                23: [
                    2,
                    52
                ],
                63: 100,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 101,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                20: 74,
                33: [
                    2,
                    92
                ],
                62: 102,
                63: 103,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 104,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                33: [
                    1,
                    105
                ]
            },
            {
                33: [
                    2,
                    79
                ],
                65: [
                    2,
                    79
                ],
                72: [
                    2,
                    79
                ],
                80: [
                    2,
                    79
                ],
                81: [
                    2,
                    79
                ],
                82: [
                    2,
                    79
                ],
                83: [
                    2,
                    79
                ],
                84: [
                    2,
                    79
                ],
                85: [
                    2,
                    79
                ]
            },
            {
                33: [
                    2,
                    81
                ]
            },
            {
                23: [
                    2,
                    27
                ],
                33: [
                    2,
                    27
                ],
                54: [
                    2,
                    27
                ],
                65: [
                    2,
                    27
                ],
                68: [
                    2,
                    27
                ],
                72: [
                    2,
                    27
                ],
                75: [
                    2,
                    27
                ],
                80: [
                    2,
                    27
                ],
                81: [
                    2,
                    27
                ],
                82: [
                    2,
                    27
                ],
                83: [
                    2,
                    27
                ],
                84: [
                    2,
                    27
                ],
                85: [
                    2,
                    27
                ]
            },
            {
                23: [
                    2,
                    28
                ],
                33: [
                    2,
                    28
                ],
                54: [
                    2,
                    28
                ],
                65: [
                    2,
                    28
                ],
                68: [
                    2,
                    28
                ],
                72: [
                    2,
                    28
                ],
                75: [
                    2,
                    28
                ],
                80: [
                    2,
                    28
                ],
                81: [
                    2,
                    28
                ],
                82: [
                    2,
                    28
                ],
                83: [
                    2,
                    28
                ],
                84: [
                    2,
                    28
                ],
                85: [
                    2,
                    28
                ]
            },
            {
                23: [
                    2,
                    30
                ],
                33: [
                    2,
                    30
                ],
                54: [
                    2,
                    30
                ],
                68: [
                    2,
                    30
                ],
                71: 106,
                72: [
                    1,
                    107
                ],
                75: [
                    2,
                    30
                ]
            },
            {
                23: [
                    2,
                    98
                ],
                33: [
                    2,
                    98
                ],
                54: [
                    2,
                    98
                ],
                68: [
                    2,
                    98
                ],
                72: [
                    2,
                    98
                ],
                75: [
                    2,
                    98
                ]
            },
            {
                23: [
                    2,
                    45
                ],
                33: [
                    2,
                    45
                ],
                54: [
                    2,
                    45
                ],
                65: [
                    2,
                    45
                ],
                68: [
                    2,
                    45
                ],
                72: [
                    2,
                    45
                ],
                73: [
                    1,
                    108
                ],
                75: [
                    2,
                    45
                ],
                80: [
                    2,
                    45
                ],
                81: [
                    2,
                    45
                ],
                82: [
                    2,
                    45
                ],
                83: [
                    2,
                    45
                ],
                84: [
                    2,
                    45
                ],
                85: [
                    2,
                    45
                ],
                87: [
                    2,
                    45
                ]
            },
            {
                23: [
                    2,
                    44
                ],
                33: [
                    2,
                    44
                ],
                54: [
                    2,
                    44
                ],
                65: [
                    2,
                    44
                ],
                68: [
                    2,
                    44
                ],
                72: [
                    2,
                    44
                ],
                75: [
                    2,
                    44
                ],
                80: [
                    2,
                    44
                ],
                81: [
                    2,
                    44
                ],
                82: [
                    2,
                    44
                ],
                83: [
                    2,
                    44
                ],
                84: [
                    2,
                    44
                ],
                85: [
                    2,
                    44
                ],
                87: [
                    2,
                    44
                ]
            },
            {
                54: [
                    1,
                    109
                ]
            },
            {
                54: [
                    2,
                    83
                ],
                65: [
                    2,
                    83
                ],
                72: [
                    2,
                    83
                ],
                80: [
                    2,
                    83
                ],
                81: [
                    2,
                    83
                ],
                82: [
                    2,
                    83
                ],
                83: [
                    2,
                    83
                ],
                84: [
                    2,
                    83
                ],
                85: [
                    2,
                    83
                ]
            },
            {
                54: [
                    2,
                    85
                ]
            },
            {
                5: [
                    2,
                    13
                ],
                14: [
                    2,
                    13
                ],
                15: [
                    2,
                    13
                ],
                19: [
                    2,
                    13
                ],
                29: [
                    2,
                    13
                ],
                34: [
                    2,
                    13
                ],
                39: [
                    2,
                    13
                ],
                44: [
                    2,
                    13
                ],
                47: [
                    2,
                    13
                ],
                48: [
                    2,
                    13
                ],
                51: [
                    2,
                    13
                ],
                55: [
                    2,
                    13
                ],
                60: [
                    2,
                    13
                ]
            },
            {
                38: 55,
                39: [
                    1,
                    57
                ],
                43: 56,
                44: [
                    1,
                    58
                ],
                45: 111,
                46: 110,
                47: [
                    2,
                    76
                ]
            },
            {
                33: [
                    2,
                    70
                ],
                40: 112,
                65: [
                    2,
                    70
                ],
                72: [
                    2,
                    70
                ],
                75: [
                    2,
                    70
                ],
                80: [
                    2,
                    70
                ],
                81: [
                    2,
                    70
                ],
                82: [
                    2,
                    70
                ],
                83: [
                    2,
                    70
                ],
                84: [
                    2,
                    70
                ],
                85: [
                    2,
                    70
                ]
            },
            {
                47: [
                    2,
                    18
                ]
            },
            {
                5: [
                    2,
                    14
                ],
                14: [
                    2,
                    14
                ],
                15: [
                    2,
                    14
                ],
                19: [
                    2,
                    14
                ],
                29: [
                    2,
                    14
                ],
                34: [
                    2,
                    14
                ],
                39: [
                    2,
                    14
                ],
                44: [
                    2,
                    14
                ],
                47: [
                    2,
                    14
                ],
                48: [
                    2,
                    14
                ],
                51: [
                    2,
                    14
                ],
                55: [
                    2,
                    14
                ],
                60: [
                    2,
                    14
                ]
            },
            {
                33: [
                    1,
                    113
                ]
            },
            {
                33: [
                    2,
                    87
                ],
                65: [
                    2,
                    87
                ],
                72: [
                    2,
                    87
                ],
                80: [
                    2,
                    87
                ],
                81: [
                    2,
                    87
                ],
                82: [
                    2,
                    87
                ],
                83: [
                    2,
                    87
                ],
                84: [
                    2,
                    87
                ],
                85: [
                    2,
                    87
                ]
            },
            {
                33: [
                    2,
                    89
                ]
            },
            {
                20: 74,
                63: 115,
                64: 75,
                65: [
                    1,
                    43
                ],
                67: 114,
                68: [
                    2,
                    96
                ],
                69: 116,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                33: [
                    1,
                    117
                ]
            },
            {
                32: 118,
                33: [
                    2,
                    62
                ],
                74: 119,
                75: [
                    1,
                    120
                ]
            },
            {
                33: [
                    2,
                    59
                ],
                65: [
                    2,
                    59
                ],
                72: [
                    2,
                    59
                ],
                75: [
                    2,
                    59
                ],
                80: [
                    2,
                    59
                ],
                81: [
                    2,
                    59
                ],
                82: [
                    2,
                    59
                ],
                83: [
                    2,
                    59
                ],
                84: [
                    2,
                    59
                ],
                85: [
                    2,
                    59
                ]
            },
            {
                33: [
                    2,
                    61
                ],
                75: [
                    2,
                    61
                ]
            },
            {
                33: [
                    2,
                    68
                ],
                37: 121,
                74: 122,
                75: [
                    1,
                    120
                ]
            },
            {
                33: [
                    2,
                    65
                ],
                65: [
                    2,
                    65
                ],
                72: [
                    2,
                    65
                ],
                75: [
                    2,
                    65
                ],
                80: [
                    2,
                    65
                ],
                81: [
                    2,
                    65
                ],
                82: [
                    2,
                    65
                ],
                83: [
                    2,
                    65
                ],
                84: [
                    2,
                    65
                ],
                85: [
                    2,
                    65
                ]
            },
            {
                33: [
                    2,
                    67
                ],
                75: [
                    2,
                    67
                ]
            },
            {
                23: [
                    1,
                    123
                ]
            },
            {
                23: [
                    2,
                    51
                ],
                65: [
                    2,
                    51
                ],
                72: [
                    2,
                    51
                ],
                80: [
                    2,
                    51
                ],
                81: [
                    2,
                    51
                ],
                82: [
                    2,
                    51
                ],
                83: [
                    2,
                    51
                ],
                84: [
                    2,
                    51
                ],
                85: [
                    2,
                    51
                ]
            },
            {
                23: [
                    2,
                    53
                ]
            },
            {
                33: [
                    1,
                    124
                ]
            },
            {
                33: [
                    2,
                    91
                ],
                65: [
                    2,
                    91
                ],
                72: [
                    2,
                    91
                ],
                80: [
                    2,
                    91
                ],
                81: [
                    2,
                    91
                ],
                82: [
                    2,
                    91
                ],
                83: [
                    2,
                    91
                ],
                84: [
                    2,
                    91
                ],
                85: [
                    2,
                    91
                ]
            },
            {
                33: [
                    2,
                    93
                ]
            },
            {
                5: [
                    2,
                    22
                ],
                14: [
                    2,
                    22
                ],
                15: [
                    2,
                    22
                ],
                19: [
                    2,
                    22
                ],
                29: [
                    2,
                    22
                ],
                34: [
                    2,
                    22
                ],
                39: [
                    2,
                    22
                ],
                44: [
                    2,
                    22
                ],
                47: [
                    2,
                    22
                ],
                48: [
                    2,
                    22
                ],
                51: [
                    2,
                    22
                ],
                55: [
                    2,
                    22
                ],
                60: [
                    2,
                    22
                ]
            },
            {
                23: [
                    2,
                    99
                ],
                33: [
                    2,
                    99
                ],
                54: [
                    2,
                    99
                ],
                68: [
                    2,
                    99
                ],
                72: [
                    2,
                    99
                ],
                75: [
                    2,
                    99
                ]
            },
            {
                73: [
                    1,
                    108
                ]
            },
            {
                20: 74,
                63: 125,
                64: 75,
                65: [
                    1,
                    43
                ],
                72: [
                    1,
                    35
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                5: [
                    2,
                    23
                ],
                14: [
                    2,
                    23
                ],
                15: [
                    2,
                    23
                ],
                19: [
                    2,
                    23
                ],
                29: [
                    2,
                    23
                ],
                34: [
                    2,
                    23
                ],
                39: [
                    2,
                    23
                ],
                44: [
                    2,
                    23
                ],
                47: [
                    2,
                    23
                ],
                48: [
                    2,
                    23
                ],
                51: [
                    2,
                    23
                ],
                55: [
                    2,
                    23
                ],
                60: [
                    2,
                    23
                ]
            },
            {
                47: [
                    2,
                    19
                ]
            },
            {
                47: [
                    2,
                    77
                ]
            },
            {
                20: 74,
                33: [
                    2,
                    72
                ],
                41: 126,
                63: 127,
                64: 75,
                65: [
                    1,
                    43
                ],
                69: 128,
                70: 76,
                71: 77,
                72: [
                    1,
                    78
                ],
                75: [
                    2,
                    72
                ],
                78: 26,
                79: 27,
                80: [
                    1,
                    28
                ],
                81: [
                    1,
                    29
                ],
                82: [
                    1,
                    30
                ],
                83: [
                    1,
                    31
                ],
                84: [
                    1,
                    32
                ],
                85: [
                    1,
                    34
                ],
                86: 33
            },
            {
                5: [
                    2,
                    24
                ],
                14: [
                    2,
                    24
                ],
                15: [
                    2,
                    24
                ],
                19: [
                    2,
                    24
                ],
                29: [
                    2,
                    24
                ],
                34: [
                    2,
                    24
                ],
                39: [
                    2,
                    24
                ],
                44: [
                    2,
                    24
                ],
                47: [
                    2,
                    24
                ],
                48: [
                    2,
                    24
                ],
                51: [
                    2,
                    24
                ],
                55: [
                    2,
                    24
                ],
                60: [
                    2,
                    24
                ]
            },
            {
                68: [
                    1,
                    129
                ]
            },
            {
                65: [
                    2,
                    95
                ],
                68: [
                    2,
                    95
                ],
                72: [
                    2,
                    95
                ],
                80: [
                    2,
                    95
                ],
                81: [
                    2,
                    95
                ],
                82: [
                    2,
                    95
                ],
                83: [
                    2,
                    95
                ],
                84: [
                    2,
                    95
                ],
                85: [
                    2,
                    95
                ]
            },
            {
                68: [
                    2,
                    97
                ]
            },
            {
                5: [
                    2,
                    21
                ],
                14: [
                    2,
                    21
                ],
                15: [
                    2,
                    21
                ],
                19: [
                    2,
                    21
                ],
                29: [
                    2,
                    21
                ],
                34: [
                    2,
                    21
                ],
                39: [
                    2,
                    21
                ],
                44: [
                    2,
                    21
                ],
                47: [
                    2,
                    21
                ],
                48: [
                    2,
                    21
                ],
                51: [
                    2,
                    21
                ],
                55: [
                    2,
                    21
                ],
                60: [
                    2,
                    21
                ]
            },
            {
                33: [
                    1,
                    130
                ]
            },
            {
                33: [
                    2,
                    63
                ]
            },
            {
                72: [
                    1,
                    132
                ],
                76: 131
            },
            {
                33: [
                    1,
                    133
                ]
            },
            {
                33: [
                    2,
                    69
                ]
            },
            {
                15: [
                    2,
                    12
                ],
                18: [
                    2,
                    12
                ]
            },
            {
                14: [
                    2,
                    26
                ],
                15: [
                    2,
                    26
                ],
                19: [
                    2,
                    26
                ],
                29: [
                    2,
                    26
                ],
                34: [
                    2,
                    26
                ],
                47: [
                    2,
                    26
                ],
                48: [
                    2,
                    26
                ],
                51: [
                    2,
                    26
                ],
                55: [
                    2,
                    26
                ],
                60: [
                    2,
                    26
                ]
            },
            {
                23: [
                    2,
                    31
                ],
                33: [
                    2,
                    31
                ],
                54: [
                    2,
                    31
                ],
                68: [
                    2,
                    31
                ],
                72: [
                    2,
                    31
                ],
                75: [
                    2,
                    31
                ]
            },
            {
                33: [
                    2,
                    74
                ],
                42: 134,
                74: 135,
                75: [
                    1,
                    120
                ]
            },
            {
                33: [
                    2,
                    71
                ],
                65: [
                    2,
                    71
                ],
                72: [
                    2,
                    71
                ],
                75: [
                    2,
                    71
                ],
                80: [
                    2,
                    71
                ],
                81: [
                    2,
                    71
                ],
                82: [
                    2,
                    71
                ],
                83: [
                    2,
                    71
                ],
                84: [
                    2,
                    71
                ],
                85: [
                    2,
                    71
                ]
            },
            {
                33: [
                    2,
                    73
                ],
                75: [
                    2,
                    73
                ]
            },
            {
                23: [
                    2,
                    29
                ],
                33: [
                    2,
                    29
                ],
                54: [
                    2,
                    29
                ],
                65: [
                    2,
                    29
                ],
                68: [
                    2,
                    29
                ],
                72: [
                    2,
                    29
                ],
                75: [
                    2,
                    29
                ],
                80: [
                    2,
                    29
                ],
                81: [
                    2,
                    29
                ],
                82: [
                    2,
                    29
                ],
                83: [
                    2,
                    29
                ],
                84: [
                    2,
                    29
                ],
                85: [
                    2,
                    29
                ]
            },
            {
                14: [
                    2,
                    15
                ],
                15: [
                    2,
                    15
                ],
                19: [
                    2,
                    15
                ],
                29: [
                    2,
                    15
                ],
                34: [
                    2,
                    15
                ],
                39: [
                    2,
                    15
                ],
                44: [
                    2,
                    15
                ],
                47: [
                    2,
                    15
                ],
                48: [
                    2,
                    15
                ],
                51: [
                    2,
                    15
                ],
                55: [
                    2,
                    15
                ],
                60: [
                    2,
                    15
                ]
            },
            {
                72: [
                    1,
                    137
                ],
                77: [
                    1,
                    136
                ]
            },
            {
                72: [
                    2,
                    100
                ],
                77: [
                    2,
                    100
                ]
            },
            {
                14: [
                    2,
                    16
                ],
                15: [
                    2,
                    16
                ],
                19: [
                    2,
                    16
                ],
                29: [
                    2,
                    16
                ],
                34: [
                    2,
                    16
                ],
                44: [
                    2,
                    16
                ],
                47: [
                    2,
                    16
                ],
                48: [
                    2,
                    16
                ],
                51: [
                    2,
                    16
                ],
                55: [
                    2,
                    16
                ],
                60: [
                    2,
                    16
                ]
            },
            {
                33: [
                    1,
                    138
                ]
            },
            {
                33: [
                    2,
                    75
                ]
            },
            {
                33: [
                    2,
                    32
                ]
            },
            {
                72: [
                    2,
                    101
                ],
                77: [
                    2,
                    101
                ]
            },
            {
                14: [
                    2,
                    17
                ],
                15: [
                    2,
                    17
                ],
                19: [
                    2,
                    17
                ],
                29: [
                    2,
                    17
                ],
                34: [
                    2,
                    17
                ],
                39: [
                    2,
                    17
                ],
                44: [
                    2,
                    17
                ],
                47: [
                    2,
                    17
                ],
                48: [
                    2,
                    17
                ],
                51: [
                    2,
                    17
                ],
                55: [
                    2,
                    17
                ],
                60: [
                    2,
                    17
                ]
            }
        ],
        defaultActions: {
            4: [
                2,
                1
            ],
            54: [
                2,
                55
            ],
            56: [
                2,
                20
            ],
            60: [
                2,
                57
            ],
            73: [
                2,
                81
            ],
            82: [
                2,
                85
            ],
            86: [
                2,
                18
            ],
            90: [
                2,
                89
            ],
            101: [
                2,
                53
            ],
            104: [
                2,
                93
            ],
            110: [
                2,
                19
            ],
            111: [
                2,
                77
            ],
            116: [
                2,
                97
            ],
            119: [
                2,
                63
            ],
            122: [
                2,
                69
            ],
            135: [
                2,
                75
            ],
            136: [
                2,
                32
            ]
        },
        parseError: function parseError(str, hash) {
            throw new Error(str);
        },
        parse: function parse(input) {
            var self = this, stack = [
                0
            ], vstack = [
                null
            ], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
            this.lexer.setInput(input);
            this.lexer.yy = this.yy;
            this.yy.lexer = this.lexer;
            this.yy.parser = this;
            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
            var yyloc = this.lexer.yylloc;
            lstack.push(yyloc);
            var ranges = this.lexer.options && this.lexer.options.ranges;
            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
            function popStack(n) {
                stack.length = stack.length - 2 * n;
                vstack.length = vstack.length - n;
                lstack.length = lstack.length - n;
            }
            function lex() {
                var token;
                token = self.lexer.lex() || 1;
                if (typeof token !== "number") token = self.symbols_[token] || token;
                return token;
            }
            var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
            while(true){
                state = stack[stack.length - 1];
                if (this.defaultActions[state]) action = this.defaultActions[state];
                else {
                    if (symbol === null || typeof symbol == "undefined") symbol = lex();
                    action = table[state] && table[state][symbol];
                }
                if (typeof action === "undefined" || !action.length || !action[0]) {
                    var errStr = "";
                    if (!recovering) {
                        expected = [];
                        for(p in table[state])if (this.terminals_[p] && p > 2) expected.push("'" + this.terminals_[p] + "'");
                        if (this.lexer.showPosition) errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                        else errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
                        this.parseError(errStr, {
                            text: this.lexer.match,
                            token: this.terminals_[symbol] || symbol,
                            line: this.lexer.yylineno,
                            loc: yyloc,
                            expected: expected
                        });
                    }
                }
                if (action[0] instanceof Array && action.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
                switch(action[0]){
                    case 1:
                        stack.push(symbol);
                        vstack.push(this.lexer.yytext);
                        lstack.push(this.lexer.yylloc);
                        stack.push(action[1]);
                        symbol = null;
                        if (!preErrorSymbol) {
                            yyleng = this.lexer.yyleng;
                            yytext = this.lexer.yytext;
                            yylineno = this.lexer.yylineno;
                            yyloc = this.lexer.yylloc;
                            if (recovering > 0) recovering--;
                        } else {
                            symbol = preErrorSymbol;
                            preErrorSymbol = null;
                        }
                        break;
                    case 2:
                        len = this.productions_[action[1]][1];
                        yyval.$ = vstack[vstack.length - len];
                        yyval._$ = {
                            first_line: lstack[lstack.length - (len || 1)].first_line,
                            last_line: lstack[lstack.length - 1].last_line,
                            first_column: lstack[lstack.length - (len || 1)].first_column,
                            last_column: lstack[lstack.length - 1].last_column
                        };
                        if (ranges) yyval._$.range = [
                            lstack[lstack.length - (len || 1)].range[0],
                            lstack[lstack.length - 1].range[1]
                        ];
                        r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
                        if (typeof r !== "undefined") return r;
                        if (len) {
                            stack = stack.slice(0, -1 * len * 2);
                            vstack = vstack.slice(0, -1 * len);
                            lstack = lstack.slice(0, -1 * len);
                        }
                        stack.push(this.productions_[action[1]][0]);
                        vstack.push(yyval.$);
                        lstack.push(yyval._$);
                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                        stack.push(newState);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        }
    };
    /* Jison generated lexer */ var lexer = function() {
        var lexer = {
            EOF: 1,
            parseError: function parseError(str, hash) {
                if (this.yy.parser) this.yy.parser.parseError(str, hash);
                else throw new Error(str);
            },
            setInput: function setInput(input) {
                this._input = input;
                this._more = this._less = this.done = false;
                this.yylineno = this.yyleng = 0;
                this.yytext = this.matched = this.match = '';
                this.conditionStack = [
                    'INITIAL'
                ];
                this.yylloc = {
                    first_line: 1,
                    first_column: 0,
                    last_line: 1,
                    last_column: 0
                };
                if (this.options.ranges) this.yylloc.range = [
                    0,
                    0
                ];
                this.offset = 0;
                return this;
            },
            input: function input() {
                var ch = this._input[0];
                this.yytext += ch;
                this.yyleng++;
                this.offset++;
                this.match += ch;
                this.matched += ch;
                var lines = ch.match(/(?:\r\n?|\n).*/g);
                if (lines) {
                    this.yylineno++;
                    this.yylloc.last_line++;
                } else this.yylloc.last_column++;
                if (this.options.ranges) this.yylloc.range[1]++;
                this._input = this._input.slice(1);
                return ch;
            },
            unput: function unput(ch) {
                var len = ch.length;
                var lines = ch.split(/(?:\r\n?|\n)/g);
                this._input = ch + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
                //this.yyleng -= len;
                this.offset -= len;
                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);
                if (lines.length - 1) this.yylineno -= lines.length - 1;
                var r = this.yylloc.range;
                this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
                };
                if (this.options.ranges) this.yylloc.range = [
                    r[0],
                    r[0] + this.yyleng - len
                ];
                return this;
            },
            more: function more() {
                this._more = true;
                return this;
            },
            less: function less(n) {
                this.unput(this.match.slice(n));
            },
            pastInput: function pastInput() {
                var past = this.matched.substr(0, this.matched.length - this.match.length);
                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
            },
            upcomingInput: function upcomingInput() {
                var next = this.match;
                if (next.length < 20) next += this._input.substr(0, 20 - next.length);
                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
            },
            showPosition: function showPosition() {
                var pre = this.pastInput();
                var c = new Array(pre.length + 1).join("-");
                return pre + this.upcomingInput() + "\n" + c + "^";
            },
            next: function next() {
                if (this.done) return this.EOF;
                if (!this._input) this.done = true;
                var token, match, tempMatch, index, col, lines;
                if (!this._more) {
                    this.yytext = '';
                    this.match = '';
                }
                var rules = this._currentRules();
                for(var i = 0; i < rules.length; i++){
                    tempMatch = this._input.match(this.rules[rules[i]]);
                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                        match = tempMatch;
                        index = i;
                        if (!this.options.flex) break;
                    }
                }
                if (match) {
                    lines = match[0].match(/(?:\r\n?|\n).*/g);
                    if (lines) this.yylineno += lines.length;
                    this.yylloc = {
                        first_line: this.yylloc.last_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.last_column,
                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
                    };
                    this.yytext += match[0];
                    this.match += match[0];
                    this.matches = match;
                    this.yyleng = this.yytext.length;
                    if (this.options.ranges) this.yylloc.range = [
                        this.offset,
                        this.offset += this.yyleng
                    ];
                    this._more = false;
                    this._input = this._input.slice(match[0].length);
                    this.matched += match[0];
                    token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
                    if (this.done && this._input) this.done = false;
                    if (token) return token;
                    else return;
                }
                if (this._input === "") return this.EOF;
                else return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                    text: "",
                    token: null,
                    line: this.yylineno
                });
            },
            lex: function lex() {
                var r = this.next();
                if (typeof r !== 'undefined') return r;
                else return this.lex();
            },
            begin: function begin(condition) {
                this.conditionStack.push(condition);
            },
            popState: function popState() {
                return this.conditionStack.pop();
            },
            _currentRules: function _currentRules() {
                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
            },
            topState: function topState() {
                return this.conditionStack[this.conditionStack.length - 2];
            },
            pushState: function begin(condition) {
                this.begin(condition);
            }
        };
        lexer.options = {};
        lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
            function strip(start, end) {
                return yy_.yytext = yy_.yytext.substring(start, yy_.yyleng - end + start);
            }
            var YYSTATE = YY_START;
            switch($avoiding_name_collisions){
                case 0:
                    if (yy_.yytext.slice(-2) === "\\\\") {
                        strip(0, 1);
                        this.begin("mu");
                    } else if (yy_.yytext.slice(-1) === "\\") {
                        strip(0, 1);
                        this.begin("emu");
                    } else this.begin("mu");
                    if (yy_.yytext) return 15;
                    break;
                case 1:
                    return 15;
                case 2:
                    this.popState();
                    return 15;
                case 3:
                    this.begin('raw');
                    return 15;
                case 4:
                    this.popState();
                    // Should be using `this.topState()` below, but it currently
                    // returns the second top instead of the first top. Opened an
                    // issue about it at https://github.com/zaach/jison/issues/291
                    if (this.conditionStack[this.conditionStack.length - 1] === 'raw') return 15;
                    else {
                        strip(5, 9);
                        return 'END_RAW_BLOCK';
                    }
                    break;
                case 5:
                    return 15;
                case 6:
                    this.popState();
                    return 14;
                case 7:
                    return 65;
                case 8:
                    return 68;
                case 9:
                    return 19;
                case 10:
                    this.popState();
                    this.begin('raw');
                    return 23;
                case 11:
                    return 55;
                case 12:
                    return 60;
                case 13:
                    return 29;
                case 14:
                    return 47;
                case 15:
                    this.popState();
                    return 44;
                case 16:
                    this.popState();
                    return 44;
                case 17:
                    return 34;
                case 18:
                    return 39;
                case 19:
                    return 51;
                case 20:
                    return 48;
                case 21:
                    this.unput(yy_.yytext);
                    this.popState();
                    this.begin('com');
                    break;
                case 22:
                    this.popState();
                    return 14;
                case 23:
                    return 48;
                case 24:
                    return 73;
                case 25:
                    return 72;
                case 26:
                    return 72;
                case 27:
                    return 87;
                case 28:
                    break;
                case 29:
                    this.popState();
                    return 54;
                case 30:
                    this.popState();
                    return 33;
                case 31:
                    yy_.yytext = strip(1, 2).replace(/\\"/g, '"');
                    return 80;
                case 32:
                    yy_.yytext = strip(1, 2).replace(/\\'/g, "'");
                    return 80;
                case 33:
                    return 85;
                case 34:
                    return 82;
                case 35:
                    return 82;
                case 36:
                    return 83;
                case 37:
                    return 84;
                case 38:
                    return 81;
                case 39:
                    return 75;
                case 40:
                    return 77;
                case 41:
                    return 72;
                case 42:
                    yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');
                    return 72;
                case 43:
                    return 'INVALID';
                case 44:
                    return 5;
            }
        };
        lexer.rules = [
            /^(?:[^\x00]*?(?=(\{\{)))/,
            /^(?:[^\x00]+)/,
            /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,
            /^(?:\{\{\{\{(?=[^\/]))/,
            /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,
            /^(?:[^\x00]+?(?=(\{\{\{\{)))/,
            /^(?:[\s\S]*?--(~)?\}\})/,
            /^(?:\()/,
            /^(?:\))/,
            /^(?:\{\{\{\{)/,
            /^(?:\}\}\}\})/,
            /^(?:\{\{(~)?>)/,
            /^(?:\{\{(~)?#>)/,
            /^(?:\{\{(~)?#\*?)/,
            /^(?:\{\{(~)?\/)/,
            /^(?:\{\{(~)?\^\s*(~)?\}\})/,
            /^(?:\{\{(~)?\s*else\s*(~)?\}\})/,
            /^(?:\{\{(~)?\^)/,
            /^(?:\{\{(~)?\s*else\b)/,
            /^(?:\{\{(~)?\{)/,
            /^(?:\{\{(~)?&)/,
            /^(?:\{\{(~)?!--)/,
            /^(?:\{\{(~)?![\s\S]*?\}\})/,
            /^(?:\{\{(~)?\*?)/,
            /^(?:=)/,
            /^(?:\.\.)/,
            /^(?:\.(?=([=~}\s\/.)|])))/,
            /^(?:[\/.])/,
            /^(?:\s+)/,
            /^(?:\}(~)?\}\})/,
            /^(?:(~)?\}\})/,
            /^(?:"(\\["]|[^"])*")/,
            /^(?:'(\\[']|[^'])*')/,
            /^(?:@)/,
            /^(?:true(?=([~}\s)])))/,
            /^(?:false(?=([~}\s)])))/,
            /^(?:undefined(?=([~}\s)])))/,
            /^(?:null(?=([~}\s)])))/,
            /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,
            /^(?:as\s+\|)/,
            /^(?:\|)/,
            /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,
            /^(?:\[(\\\]|[^\]])*\])/,
            /^(?:.)/,
            /^(?:$)/
        ];
        lexer.conditions = {
            "mu": {
                "rules": [
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    17,
                    18,
                    19,
                    20,
                    21,
                    22,
                    23,
                    24,
                    25,
                    26,
                    27,
                    28,
                    29,
                    30,
                    31,
                    32,
                    33,
                    34,
                    35,
                    36,
                    37,
                    38,
                    39,
                    40,
                    41,
                    42,
                    43,
                    44
                ],
                "inclusive": false
            },
            "emu": {
                "rules": [
                    2
                ],
                "inclusive": false
            },
            "com": {
                "rules": [
                    6
                ],
                "inclusive": false
            },
            "raw": {
                "rules": [
                    3,
                    4,
                    5
                ],
                "inclusive": false
            },
            "INITIAL": {
                "rules": [
                    0,
                    1,
                    44
                ],
                "inclusive": true
            }
        };
        return lexer;
    }();
    parser.lexer = lexer;
    function Parser() {
        this.yy = {};
    }
    Parser.prototype = parser;
    parser.Parser = Parser;
    return new Parser();
}();
exports["default"] = handlebars;
module.exports = exports["default"];

},{}],"73lNo":[function(require,module,exports,__globalThis) {
'use strict';
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _visitor = require("b78876b053176903");
var _visitor2 = _interopRequireDefault(_visitor);
function WhitespaceControl() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    this.options = options;
}
WhitespaceControl.prototype = new _visitor2['default']();
WhitespaceControl.prototype.Program = function(program) {
    var doStandalone = !this.options.ignoreStandalone;
    var isRoot = !this.isRootSeen;
    this.isRootSeen = true;
    var body = program.body;
    for(var i = 0, l = body.length; i < l; i++){
        var current = body[i], strip = this.accept(current);
        if (!strip) continue;
        var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot), _isNextWhitespace = isNextWhitespace(body, i, isRoot), openStandalone = strip.openStandalone && _isPrevWhitespace, closeStandalone = strip.closeStandalone && _isNextWhitespace, inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;
        if (strip.close) omitRight(body, i, true);
        if (strip.open) omitLeft(body, i, true);
        if (doStandalone && inlineStandalone) {
            omitRight(body, i);
            if (omitLeft(body, i)) // If we are on a standalone node, save the indent info for partials
            {
                if (current.type === 'PartialStatement') // Pull out the whitespace from the final line
                current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
            }
        }
        if (doStandalone && openStandalone) {
            omitRight((current.program || current.inverse).body);
            // Strip out the previous content node if it's whitespace only
            omitLeft(body, i);
        }
        if (doStandalone && closeStandalone) {
            // Always strip the next node
            omitRight(body, i);
            omitLeft((current.inverse || current.program).body);
        }
    }
    return program;
};
WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function(block) {
    this.accept(block.program);
    this.accept(block.inverse);
    // Find the inverse program that is involed with whitespace stripping.
    var program = block.program || block.inverse, inverse = block.program && block.inverse, firstInverse = inverse, lastInverse = inverse;
    if (inverse && inverse.chained) {
        firstInverse = inverse.body[0].program;
        // Walk the inverse chain to find the last inverse that is actually in the chain.
        while(lastInverse.chained)lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
    }
    var strip = {
        open: block.openStrip.open,
        close: block.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: isNextWhitespace(program.body),
        closeStandalone: isPrevWhitespace((firstInverse || program).body)
    };
    if (block.openStrip.close) omitRight(program.body, null, true);
    if (inverse) {
        var inverseStrip = block.inverseStrip;
        if (inverseStrip.open) omitLeft(program.body, null, true);
        if (inverseStrip.close) omitRight(firstInverse.body, null, true);
        if (block.closeStrip.open) omitLeft(lastInverse.body, null, true);
        // Find standalone else statments
        if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
            omitLeft(program.body);
            omitRight(firstInverse.body);
        }
    } else if (block.closeStrip.open) omitLeft(program.body, null, true);
    return strip;
};
WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function(mustache) {
    return mustache.strip;
};
WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function(node) {
    /* istanbul ignore next */ var strip = node.strip || {};
    return {
        inlineStandalone: true,
        open: strip.open,
        close: strip.close
    };
};
function isPrevWhitespace(body, i, isRoot) {
    if (i === undefined) i = body.length;
    // Nodes that end with newlines are considered whitespace (but are special
    // cased for strip operations)
    var prev = body[i - 1], sibling = body[i - 2];
    if (!prev) return isRoot;
    if (prev.type === 'ContentStatement') return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
}
function isNextWhitespace(body, i, isRoot) {
    if (i === undefined) i = -1;
    var next = body[i + 1], sibling = body[i + 2];
    if (!next) return isRoot;
    if (next.type === 'ContentStatement') return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
}
// Marks the node to the right of the position as omitted.
// I.e. {{foo}}' ' will mark the ' ' node as omitted.
//
// If i is undefined, then the first child will be marked as such.
//
// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
// content is met.
function omitRight(body, i, multiple) {
    var current = body[i == null ? 0 : i + 1];
    if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) return;
    var original = current.value;
    current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
    current.rightStripped = current.value !== original;
}
// Marks the node to the left of the position as omitted.
// I.e. ' '{{foo}} will mark the ' ' node as omitted.
//
// If i is undefined then the last child will be marked as such.
//
// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
// content is met.
function omitLeft(body, i, multiple) {
    var current = body[i == null ? body.length - 1 : i - 1];
    if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) return;
    // We omit the last node if it's whitespace only and not preceded by a non-content node.
    var original = current.value;
    current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
    current.leftStripped = current.value !== original;
    return current.leftStripped;
}
exports['default'] = WhitespaceControl;
module.exports = exports['default'];

},{"b78876b053176903":"1HI7q"}],"1HI7q":[function(require,module,exports,__globalThis) {
'use strict';
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _exception = require("76ca3a022ba69006");
var _exception2 = _interopRequireDefault(_exception);
function Visitor() {
    this.parents = [];
}
Visitor.prototype = {
    constructor: Visitor,
    mutating: false,
    // Visits a given value. If mutating, will replace the value if necessary.
    acceptKey: function acceptKey(node, name) {
        var value = this.accept(node[name]);
        if (this.mutating) {
            // Hacky sanity check: This may have a few false positives for type for the helper
            // methods but will generally do the right thing without a lot of overhead.
            if (value && !Visitor.prototype[value.type]) throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
            node[name] = value;
        }
    },
    // Performs an accept operation with added sanity check to ensure
    // required keys are not removed.
    acceptRequired: function acceptRequired(node, name) {
        this.acceptKey(node, name);
        if (!node[name]) throw new _exception2['default'](node.type + ' requires ' + name);
    },
    // Traverses a given array. If mutating, empty respnses will be removed
    // for child elements.
    acceptArray: function acceptArray(array) {
        for(var i = 0, l = array.length; i < l; i++){
            this.acceptKey(array, i);
            if (!array[i]) {
                array.splice(i, 1);
                i--;
                l--;
            }
        }
    },
    accept: function accept(object) {
        if (!object) return;
        /* istanbul ignore next: Sanity code */ if (!this[object.type]) throw new _exception2['default']('Unknown type: ' + object.type, object);
        if (this.current) this.parents.unshift(this.current);
        this.current = object;
        var ret = this[object.type](object);
        this.current = this.parents.shift();
        if (!this.mutating || ret) return ret;
        else if (ret !== false) return object;
    },
    Program: function Program(program) {
        this.acceptArray(program.body);
    },
    MustacheStatement: visitSubExpression,
    Decorator: visitSubExpression,
    BlockStatement: visitBlock,
    DecoratorBlock: visitBlock,
    PartialStatement: visitPartial,
    PartialBlockStatement: function PartialBlockStatement(partial) {
        visitPartial.call(this, partial);
        this.acceptKey(partial, 'program');
    },
    ContentStatement: function ContentStatement() /* content */ {},
    CommentStatement: function CommentStatement() /* comment */ {},
    SubExpression: visitSubExpression,
    PathExpression: function PathExpression() /* path */ {},
    StringLiteral: function StringLiteral() /* string */ {},
    NumberLiteral: function NumberLiteral() /* number */ {},
    BooleanLiteral: function BooleanLiteral() /* bool */ {},
    UndefinedLiteral: function UndefinedLiteral() /* literal */ {},
    NullLiteral: function NullLiteral() /* literal */ {},
    Hash: function Hash(hash) {
        this.acceptArray(hash.pairs);
    },
    HashPair: function HashPair(pair) {
        this.acceptRequired(pair, 'value');
    }
};
function visitSubExpression(mustache) {
    this.acceptRequired(mustache, 'path');
    this.acceptArray(mustache.params);
    this.acceptKey(mustache, 'hash');
}
function visitBlock(block) {
    visitSubExpression.call(this, block);
    this.acceptKey(block, 'program');
    this.acceptKey(block, 'inverse');
}
function visitPartial(partial) {
    this.acceptRequired(partial, 'name');
    this.acceptArray(partial.params);
    this.acceptKey(partial, 'hash');
}
exports['default'] = Visitor;
module.exports = exports['default'];

},{"76ca3a022ba69006":"fzp9G"}],"1gpwa":[function(require,module,exports,__globalThis) {
'use strict';
exports.__esModule = true;
exports.SourceLocation = SourceLocation;
exports.id = id;
exports.stripFlags = stripFlags;
exports.stripComment = stripComment;
exports.preparePath = preparePath;
exports.prepareMustache = prepareMustache;
exports.prepareRawBlock = prepareRawBlock;
exports.prepareBlock = prepareBlock;
exports.prepareProgram = prepareProgram;
exports.preparePartialBlock = preparePartialBlock;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _exception = require("490e821ab297818f");
var _exception2 = _interopRequireDefault(_exception);
function validateClose(open, close) {
    close = close.path ? close.path.original : close;
    if (open.path.original !== close) {
        var errorNode = {
            loc: open.path.loc
        };
        throw new _exception2['default'](open.path.original + " doesn't match " + close, errorNode);
    }
}
function SourceLocation(source, locInfo) {
    this.source = source;
    this.start = {
        line: locInfo.first_line,
        column: locInfo.first_column
    };
    this.end = {
        line: locInfo.last_line,
        column: locInfo.last_column
    };
}
function id(token) {
    if (/^\[.*\]$/.test(token)) return token.substring(1, token.length - 1);
    else return token;
}
function stripFlags(open, close) {
    return {
        open: open.charAt(2) === '~',
        close: close.charAt(close.length - 3) === '~'
    };
}
function stripComment(comment) {
    return comment.replace(/^\{\{~?!-?-?/, '').replace(/-?-?~?\}\}$/, '');
}
function preparePath(data, parts, loc) {
    loc = this.locInfo(loc);
    var original = data ? '@' : '', dig = [], depth = 0;
    for(var i = 0, l = parts.length; i < l; i++){
        var part = parts[i].part, // If we have [] syntax then we do not treat path references as operators,
        // i.e. foo.[this] resolves to approximately context.foo['this']
        isLiteral = parts[i].original !== part;
        original += (parts[i].separator || '') + part;
        if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
            if (dig.length > 0) throw new _exception2['default']('Invalid path: ' + original, {
                loc: loc
            });
            else if (part === '..') depth++;
        } else dig.push(part);
    }
    return {
        type: 'PathExpression',
        data: data,
        depth: depth,
        parts: dig,
        original: original,
        loc: loc
    };
}
function prepareMustache(path, params, hash, open, strip, locInfo) {
    // Must use charAt to support IE pre-10
    var escapeFlag = open.charAt(3) || open.charAt(2), escaped = escapeFlag !== '{' && escapeFlag !== '&';
    var decorator = /\*/.test(open);
    return {
        type: decorator ? 'Decorator' : 'MustacheStatement',
        path: path,
        params: params,
        hash: hash,
        escaped: escaped,
        strip: strip,
        loc: this.locInfo(locInfo)
    };
}
function prepareRawBlock(openRawBlock, contents, close, locInfo) {
    validateClose(openRawBlock, close);
    locInfo = this.locInfo(locInfo);
    var program = {
        type: 'Program',
        body: contents,
        strip: {},
        loc: locInfo
    };
    return {
        type: 'BlockStatement',
        path: openRawBlock.path,
        params: openRawBlock.params,
        hash: openRawBlock.hash,
        program: program,
        openStrip: {},
        inverseStrip: {},
        closeStrip: {},
        loc: locInfo
    };
}
function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
    if (close && close.path) validateClose(openBlock, close);
    var decorator = /\*/.test(openBlock.open);
    program.blockParams = openBlock.blockParams;
    var inverse = undefined, inverseStrip = undefined;
    if (inverseAndProgram) {
        if (decorator) throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
        if (inverseAndProgram.chain) inverseAndProgram.program.body[0].closeStrip = close.strip;
        inverseStrip = inverseAndProgram.strip;
        inverse = inverseAndProgram.program;
    }
    if (inverted) {
        inverted = inverse;
        inverse = program;
        program = inverted;
    }
    return {
        type: decorator ? 'DecoratorBlock' : 'BlockStatement',
        path: openBlock.path,
        params: openBlock.params,
        hash: openBlock.hash,
        program: program,
        inverse: inverse,
        openStrip: openBlock.strip,
        inverseStrip: inverseStrip,
        closeStrip: close && close.strip,
        loc: this.locInfo(locInfo)
    };
}
function prepareProgram(statements, loc) {
    if (!loc && statements.length) {
        var firstLoc = statements[0].loc, lastLoc = statements[statements.length - 1].loc;
        /* istanbul ignore else */ if (firstLoc && lastLoc) loc = {
            source: firstLoc.source,
            start: {
                line: firstLoc.start.line,
                column: firstLoc.start.column
            },
            end: {
                line: lastLoc.end.line,
                column: lastLoc.end.column
            }
        };
    }
    return {
        type: 'Program',
        body: statements,
        strip: {},
        loc: loc
    };
}
function preparePartialBlock(open, program, close, locInfo) {
    validateClose(open, close);
    return {
        type: 'PartialBlockStatement',
        name: open.path,
        params: open.params,
        hash: open.hash,
        program: program,
        openStrip: open.strip,
        closeStrip: close && close.strip,
        loc: this.locInfo(locInfo)
    };
}

},{"490e821ab297818f":"fzp9G"}],"aLtLf":[function(require,module,exports,__globalThis) {
/* eslint-disable new-cap */ 'use strict';
exports.__esModule = true;
exports.Compiler = Compiler;
exports.precompile = precompile;
exports.compile = compile;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _exception = require("16d5909d44d4f16f");
var _exception2 = _interopRequireDefault(_exception);
var _utils = require("959490b0f7c68258");
var _ast = require("88466b3bf9ae2d15");
var _ast2 = _interopRequireDefault(_ast);
var slice = [].slice;
function Compiler() {}
// the foundHelper register will disambiguate helper lookup from finding a
// function in a context. This is necessary for mustache compatibility, which
// requires that context functions in blocks are evaluated by blockHelperMissing,
// and then proceed as if the resulting value was provided to blockHelperMissing.
Compiler.prototype = {
    compiler: Compiler,
    equals: function equals(other) {
        var len = this.opcodes.length;
        if (other.opcodes.length !== len) return false;
        for(var i = 0; i < len; i++){
            var opcode = this.opcodes[i], otherOpcode = other.opcodes[i];
            if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) return false;
        }
        // We know that length is the same between the two arrays because they are directly tied
        // to the opcode behavior above.
        len = this.children.length;
        for(var i = 0; i < len; i++){
            if (!this.children[i].equals(other.children[i])) return false;
        }
        return true;
    },
    guid: 0,
    compile: function compile(program, options) {
        this.sourceNode = [];
        this.opcodes = [];
        this.children = [];
        this.options = options;
        this.stringParams = options.stringParams;
        this.trackIds = options.trackIds;
        options.blockParams = options.blockParams || [];
        options.knownHelpers = _utils.extend(Object.create(null), {
            helperMissing: true,
            blockHelperMissing: true,
            each: true,
            'if': true,
            unless: true,
            'with': true,
            log: true,
            lookup: true
        }, options.knownHelpers);
        return this.accept(program);
    },
    compileProgram: function compileProgram(program) {
        var childCompiler = new this.compiler(), // eslint-disable-line new-cap
        result = childCompiler.compile(program, this.options), guid = this.guid++;
        this.usePartial = this.usePartial || result.usePartial;
        this.children[guid] = result;
        this.useDepths = this.useDepths || result.useDepths;
        return guid;
    },
    accept: function accept(node) {
        /* istanbul ignore next: Sanity code */ if (!this[node.type]) throw new _exception2['default']('Unknown type: ' + node.type, node);
        this.sourceNode.unshift(node);
        var ret = this[node.type](node);
        this.sourceNode.shift();
        return ret;
    },
    Program: function Program(program) {
        this.options.blockParams.unshift(program.blockParams);
        var body = program.body, bodyLength = body.length;
        for(var i = 0; i < bodyLength; i++)this.accept(body[i]);
        this.options.blockParams.shift();
        this.isSimple = bodyLength === 1;
        this.blockParams = program.blockParams ? program.blockParams.length : 0;
        return this;
    },
    BlockStatement: function BlockStatement(block) {
        transformLiteralToPath(block);
        var program = block.program, inverse = block.inverse;
        program = program && this.compileProgram(program);
        inverse = inverse && this.compileProgram(inverse);
        var type = this.classifySexpr(block);
        if (type === 'helper') this.helperSexpr(block, program, inverse);
        else if (type === 'simple') {
            this.simpleSexpr(block);
            // now that the simple mustache is resolved, we need to
            // evaluate it by executing `blockHelperMissing`
            this.opcode('pushProgram', program);
            this.opcode('pushProgram', inverse);
            this.opcode('emptyHash');
            this.opcode('blockValue', block.path.original);
        } else {
            this.ambiguousSexpr(block, program, inverse);
            // now that the simple mustache is resolved, we need to
            // evaluate it by executing `blockHelperMissing`
            this.opcode('pushProgram', program);
            this.opcode('pushProgram', inverse);
            this.opcode('emptyHash');
            this.opcode('ambiguousBlockValue');
        }
        this.opcode('append');
    },
    DecoratorBlock: function DecoratorBlock(decorator) {
        var program = decorator.program && this.compileProgram(decorator.program);
        var params = this.setupFullMustacheParams(decorator, program, undefined), path = decorator.path;
        this.useDecorators = true;
        this.opcode('registerDecorator', params.length, path.original);
    },
    PartialStatement: function PartialStatement(partial) {
        this.usePartial = true;
        var program = partial.program;
        if (program) program = this.compileProgram(partial.program);
        var params = partial.params;
        if (params.length > 1) throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
        else if (!params.length) {
            if (this.options.explicitPartialContext) this.opcode('pushLiteral', 'undefined');
            else params.push({
                type: 'PathExpression',
                parts: [],
                depth: 0
            });
        }
        var partialName = partial.name.original, isDynamic = partial.name.type === 'SubExpression';
        if (isDynamic) this.accept(partial.name);
        this.setupFullMustacheParams(partial, program, undefined, true);
        var indent = partial.indent || '';
        if (this.options.preventIndent && indent) {
            this.opcode('appendContent', indent);
            indent = '';
        }
        this.opcode('invokePartial', isDynamic, partialName, indent);
        this.opcode('append');
    },
    PartialBlockStatement: function PartialBlockStatement(partialBlock) {
        this.PartialStatement(partialBlock);
    },
    MustacheStatement: function MustacheStatement(mustache) {
        this.SubExpression(mustache);
        if (mustache.escaped && !this.options.noEscape) this.opcode('appendEscaped');
        else this.opcode('append');
    },
    Decorator: function Decorator(decorator) {
        this.DecoratorBlock(decorator);
    },
    ContentStatement: function ContentStatement(content) {
        if (content.value) this.opcode('appendContent', content.value);
    },
    CommentStatement: function CommentStatement() {},
    SubExpression: function SubExpression(sexpr) {
        transformLiteralToPath(sexpr);
        var type = this.classifySexpr(sexpr);
        if (type === 'simple') this.simpleSexpr(sexpr);
        else if (type === 'helper') this.helperSexpr(sexpr);
        else this.ambiguousSexpr(sexpr);
    },
    ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
        var path = sexpr.path, name = path.parts[0], isBlock = program != null || inverse != null;
        this.opcode('getContext', path.depth);
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        path.strict = true;
        this.accept(path);
        this.opcode('invokeAmbiguous', name, isBlock);
    },
    simpleSexpr: function simpleSexpr(sexpr) {
        var path = sexpr.path;
        path.strict = true;
        this.accept(path);
        this.opcode('resolvePossibleLambda');
    },
    helperSexpr: function helperSexpr(sexpr, program, inverse) {
        var params = this.setupFullMustacheParams(sexpr, program, inverse), path = sexpr.path, name = path.parts[0];
        if (this.options.knownHelpers[name]) this.opcode('invokeKnownHelper', params.length, name);
        else if (this.options.knownHelpersOnly) throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
        else {
            path.strict = true;
            path.falsy = true;
            this.accept(path);
            this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
        }
    },
    PathExpression: function PathExpression(path) {
        this.addDepth(path.depth);
        this.opcode('getContext', path.depth);
        var name = path.parts[0], scoped = _ast2['default'].helpers.scopedId(path), blockParamId = !path.depth && !scoped && this.blockParamIndex(name);
        if (blockParamId) this.opcode('lookupBlockParam', blockParamId, path.parts);
        else if (!name) // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
        this.opcode('pushContext');
        else if (path.data) {
            this.options.data = true;
            this.opcode('lookupData', path.depth, path.parts, path.strict);
        } else this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
    },
    StringLiteral: function StringLiteral(string) {
        this.opcode('pushString', string.value);
    },
    NumberLiteral: function NumberLiteral(number) {
        this.opcode('pushLiteral', number.value);
    },
    BooleanLiteral: function BooleanLiteral(bool) {
        this.opcode('pushLiteral', bool.value);
    },
    UndefinedLiteral: function UndefinedLiteral() {
        this.opcode('pushLiteral', 'undefined');
    },
    NullLiteral: function NullLiteral() {
        this.opcode('pushLiteral', 'null');
    },
    Hash: function Hash(hash) {
        var pairs = hash.pairs, i = 0, l = pairs.length;
        this.opcode('pushHash');
        for(; i < l; i++)this.pushParam(pairs[i].value);
        while(i--)this.opcode('assignToHash', pairs[i].key);
        this.opcode('popHash');
    },
    // HELPERS
    opcode: function opcode(name) {
        this.opcodes.push({
            opcode: name,
            args: slice.call(arguments, 1),
            loc: this.sourceNode[0].loc
        });
    },
    addDepth: function addDepth(depth) {
        if (!depth) return;
        this.useDepths = true;
    },
    classifySexpr: function classifySexpr(sexpr) {
        var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);
        var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);
        // a mustache is an eligible helper if:
        // * its id is simple (a single part, not `this` or `..`)
        var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);
        // if a mustache is an eligible helper but not a definite
        // helper, it is ambiguous, and will be resolved in a later
        // pass or at runtime.
        var isEligible = !isBlockParam && (isHelper || isSimple);
        // if ambiguous, we can possibly resolve the ambiguity now
        // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
        if (isEligible && !isHelper) {
            var _name = sexpr.path.parts[0], options = this.options;
            if (options.knownHelpers[_name]) isHelper = true;
            else if (options.knownHelpersOnly) isEligible = false;
        }
        if (isHelper) return 'helper';
        else if (isEligible) return 'ambiguous';
        else return 'simple';
    },
    pushParams: function pushParams(params) {
        for(var i = 0, l = params.length; i < l; i++)this.pushParam(params[i]);
    },
    pushParam: function pushParam(val) {
        var value = val.value != null ? val.value : val.original || '';
        if (this.stringParams) {
            if (value.replace) value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
            if (val.depth) this.addDepth(val.depth);
            this.opcode('getContext', val.depth || 0);
            this.opcode('pushStringParam', value, val.type);
            if (val.type === 'SubExpression') // SubExpressions get evaluated and passed in
            // in string params mode.
            this.accept(val);
        } else {
            if (this.trackIds) {
                var blockParamIndex = undefined;
                if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) blockParamIndex = this.blockParamIndex(val.parts[0]);
                if (blockParamIndex) {
                    var blockParamChild = val.parts.slice(1).join('.');
                    this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
                } else {
                    value = val.original || value;
                    if (value.replace) value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
                    this.opcode('pushId', val.type, value);
                }
            }
            this.accept(val);
        }
    },
    setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
        var params = sexpr.params;
        this.pushParams(params);
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        if (sexpr.hash) this.accept(sexpr.hash);
        else this.opcode('emptyHash', omitEmpty);
        return params;
    },
    blockParamIndex: function blockParamIndex(name) {
        for(var depth = 0, len = this.options.blockParams.length; depth < len; depth++){
            var blockParams = this.options.blockParams[depth], param = blockParams && _utils.indexOf(blockParams, name);
            if (blockParams && param >= 0) return [
                depth,
                param
            ];
        }
    }
};
function precompile(input, options, env) {
    if (input == null || typeof input !== 'string' && input.type !== 'Program') throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
    options = options || {};
    if (!('data' in options)) options.data = true;
    if (options.compat) options.useDepths = true;
    var ast = env.parse(input, options), environment = new env.Compiler().compile(ast, options);
    return new env.JavaScriptCompiler().compile(environment, options);
}
function compile(input, options, env) {
    if (options === undefined) options = {};
    if (input == null || typeof input !== 'string' && input.type !== 'Program') throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
    options = _utils.extend({}, options);
    if (!('data' in options)) options.data = true;
    if (options.compat) options.useDepths = true;
    var compiled = undefined;
    function compileInput() {
        var ast = env.parse(input, options), environment = new env.Compiler().compile(ast, options), templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
        return env.template(templateSpec);
    }
    // Template is only compiled on first use and cached after that point.
    function ret(context, execOptions) {
        if (!compiled) compiled = compileInput();
        return compiled.call(this, context, execOptions);
    }
    ret._setup = function(setupOptions) {
        if (!compiled) compiled = compileInput();
        return compiled._setup(setupOptions);
    };
    ret._child = function(i, data, blockParams, depths) {
        if (!compiled) compiled = compileInput();
        return compiled._child(i, data, blockParams, depths);
    };
    return ret;
}
function argEquals(a, b) {
    if (a === b) return true;
    if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
        for(var i = 0; i < a.length; i++){
            if (!argEquals(a[i], b[i])) return false;
        }
        return true;
    }
}
function transformLiteralToPath(sexpr) {
    if (!sexpr.path.parts) {
        var literal = sexpr.path;
        // Casting to string here to make false and 0 literal values play nicely with the rest
        // of the system.
        sexpr.path = {
            type: 'PathExpression',
            data: false,
            depth: 0,
            parts: [
                literal.original + ''
            ],
            original: literal.original + '',
            loc: literal.loc
        };
    }
}

},{"16d5909d44d4f16f":"fzp9G","959490b0f7c68258":"5nZBG","88466b3bf9ae2d15":"25y7Q"}],"4KA3d":[function(require,module,exports,__globalThis) {
'use strict';
exports.__esModule = true;
// istanbul ignore next
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        'default': obj
    };
}
var _base = require("a0a16efc5d27e7a7");
var _exception = require("d25f115c9a9762da");
var _exception2 = _interopRequireDefault(_exception);
var _utils = require("930fe40140fd5914");
var _codeGen = require("5a4632a3990a4ddf");
var _codeGen2 = _interopRequireDefault(_codeGen);
function Literal(value) {
    this.value = value;
}
function JavaScriptCompiler() {}
JavaScriptCompiler.prototype = {
    // PUBLIC API: You can override these methods in a subclass to provide
    // alternative compiled forms for name lookup and buffering semantics
    nameLookup: function nameLookup(parent, name /*,  type */ ) {
        return this.internalNameLookup(parent, name);
    },
    depthedLookup: function depthedLookup(name) {
        return [
            this.aliasable('container.lookup'),
            '(depths, ',
            JSON.stringify(name),
            ')'
        ];
    },
    compilerInfo: function compilerInfo() {
        var revision = _base.COMPILER_REVISION, versions = _base.REVISION_CHANGES[revision];
        return [
            revision,
            versions
        ];
    },
    appendToBuffer: function appendToBuffer(source, location, explicit) {
        // Force a source as this simplifies the merge logic.
        if (!_utils.isArray(source)) source = [
            source
        ];
        source = this.source.wrap(source, location);
        if (this.environment.isSimple) return [
            'return ',
            source,
            ';'
        ];
        else if (explicit) // This is a case where the buffer operation occurs as a child of another
        // construct, generally braces. We have to explicitly output these buffer
        // operations to ensure that the emitted code goes in the correct location.
        return [
            'buffer += ',
            source,
            ';'
        ];
        else {
            source.appendToBuffer = true;
            return source;
        }
    },
    initializeBuffer: function initializeBuffer() {
        return this.quotedString('');
    },
    // END PUBLIC API
    internalNameLookup: function internalNameLookup(parent, name) {
        this.lookupPropertyFunctionIsUsed = true;
        return [
            'lookupProperty(',
            parent,
            ',',
            JSON.stringify(name),
            ')'
        ];
    },
    lookupPropertyFunctionIsUsed: false,
    compile: function compile(environment, options, context, asObject) {
        this.environment = environment;
        this.options = options;
        this.stringParams = this.options.stringParams;
        this.trackIds = this.options.trackIds;
        this.precompile = !asObject;
        this.name = this.environment.name;
        this.isChild = !!context;
        this.context = context || {
            decorators: [],
            programs: [],
            environments: []
        };
        this.preamble();
        this.stackSlot = 0;
        this.stackVars = [];
        this.aliases = {};
        this.registers = {
            list: []
        };
        this.hashes = [];
        this.compileStack = [];
        this.inlineStack = [];
        this.blockParams = [];
        this.compileChildren(environment, options);
        this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
        this.useBlockParams = this.useBlockParams || environment.useBlockParams;
        var opcodes = environment.opcodes, opcode = undefined, firstLoc = undefined, i = undefined, l = undefined;
        for(i = 0, l = opcodes.length; i < l; i++){
            opcode = opcodes[i];
            this.source.currentLocation = opcode.loc;
            firstLoc = firstLoc || opcode.loc;
            this[opcode.opcode].apply(this, opcode.args);
        }
        // Flush any trailing content that might be pending.
        this.source.currentLocation = firstLoc;
        this.pushSource('');
        /* istanbul ignore next */ if (this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new _exception2['default']('Compile completed with content left on stack');
        if (!this.decorators.isEmpty()) {
            this.useDecorators = true;
            this.decorators.prepend([
                'var decorators = container.decorators, ',
                this.lookupPropertyFunctionVarDeclaration(),
                ';\n'
            ]);
            this.decorators.push('return fn;');
            if (asObject) this.decorators = Function.apply(this, [
                'fn',
                'props',
                'container',
                'depth0',
                'data',
                'blockParams',
                'depths',
                this.decorators.merge()
            ]);
            else {
                this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
                this.decorators.push('}\n');
                this.decorators = this.decorators.merge();
            }
        } else this.decorators = undefined;
        var fn = this.createFunctionContext(asObject);
        if (!this.isChild) {
            var ret = {
                compiler: this.compilerInfo(),
                main: fn
            };
            if (this.decorators) {
                ret.main_d = this.decorators; // eslint-disable-line camelcase
                ret.useDecorators = true;
            }
            var _context = this.context;
            var programs = _context.programs;
            var decorators = _context.decorators;
            for(i = 0, l = programs.length; i < l; i++){
                ret[i] = programs[i];
                if (decorators[i]) {
                    ret[i + '_d'] = decorators[i];
                    ret.useDecorators = true;
                }
            }
            if (this.environment.usePartial) ret.usePartial = true;
            if (this.options.data) ret.useData = true;
            if (this.useDepths) ret.useDepths = true;
            if (this.useBlockParams) ret.useBlockParams = true;
            if (this.options.compat) ret.compat = true;
            if (!asObject) {
                ret.compiler = JSON.stringify(ret.compiler);
                this.source.currentLocation = {
                    start: {
                        line: 1,
                        column: 0
                    }
                };
                ret = this.objectLiteral(ret);
                if (options.srcName) {
                    ret = ret.toStringWithSourceMap({
                        file: options.destName
                    });
                    ret.map = ret.map && ret.map.toString();
                } else ret = ret.toString();
            } else ret.compilerOptions = this.options;
            return ret;
        } else return fn;
    },
    preamble: function preamble() {
        // track the last context pushed into place to allow skipping the
        // getContext opcode when it would be a noop
        this.lastContext = 0;
        this.source = new _codeGen2['default'](this.options.srcName);
        this.decorators = new _codeGen2['default'](this.options.srcName);
    },
    createFunctionContext: function createFunctionContext(asObject) {
        // istanbul ignore next
        var _this = this;
        var varDeclarations = '';
        var locals = this.stackVars.concat(this.registers.list);
        if (locals.length > 0) varDeclarations += ', ' + locals.join(', ');
        // Generate minimizer alias mappings
        //
        // When using true SourceNodes, this will update all references to the given alias
        // as the source nodes are reused in situ. For the non-source node compilation mode,
        // aliases will not be used, but this case is already being run on the client and
        // we aren't concern about minimizing the template size.
        var aliasCount = 0;
        Object.keys(this.aliases).forEach(function(alias) {
            var node = _this.aliases[alias];
            if (node.children && node.referenceCount > 1) {
                varDeclarations += ', alias' + ++aliasCount + '=' + alias;
                node.children[0] = 'alias' + aliasCount;
            }
        });
        if (this.lookupPropertyFunctionIsUsed) varDeclarations += ', ' + this.lookupPropertyFunctionVarDeclaration();
        var params = [
            'container',
            'depth0',
            'helpers',
            'partials',
            'data'
        ];
        if (this.useBlockParams || this.useDepths) params.push('blockParams');
        if (this.useDepths) params.push('depths');
        // Perform a second pass over the output to merge content when possible
        var source = this.mergeSource(varDeclarations);
        if (asObject) {
            params.push(source);
            return Function.apply(this, params);
        } else return this.source.wrap([
            'function(',
            params.join(','),
            ') {\n  ',
            source,
            '}'
        ]);
    },
    mergeSource: function mergeSource(varDeclarations) {
        var isSimple = this.environment.isSimple, appendOnly = !this.forceBuffer, appendFirst = undefined, sourceSeen = undefined, bufferStart = undefined, bufferEnd = undefined;
        this.source.each(function(line) {
            if (line.appendToBuffer) {
                if (bufferStart) line.prepend('  + ');
                else bufferStart = line;
                bufferEnd = line;
            } else {
                if (bufferStart) {
                    if (!sourceSeen) appendFirst = true;
                    else bufferStart.prepend('buffer += ');
                    bufferEnd.add(';');
                    bufferStart = bufferEnd = undefined;
                }
                sourceSeen = true;
                if (!isSimple) appendOnly = false;
            }
        });
        if (appendOnly) {
            if (bufferStart) {
                bufferStart.prepend('return ');
                bufferEnd.add(';');
            } else if (!sourceSeen) this.source.push('return "";');
        } else {
            varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());
            if (bufferStart) {
                bufferStart.prepend('return buffer + ');
                bufferEnd.add(';');
            } else this.source.push('return buffer;');
        }
        if (varDeclarations) this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
        return this.source.merge();
    },
    lookupPropertyFunctionVarDeclaration: function lookupPropertyFunctionVarDeclaration() {
        return '\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    '.trim();
    },
    // [blockValue]
    //
    // On stack, before: hash, inverse, program, value
    // On stack, after: return value of blockHelperMissing
    //
    // The purpose of this opcode is to take a block of the form
    // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
    // replace it on the stack with the result of properly
    // invoking blockHelperMissing.
    blockValue: function blockValue(name) {
        var blockHelperMissing = this.aliasable('container.hooks.blockHelperMissing'), params = [
            this.contextName(0)
        ];
        this.setupHelperArgs(name, 0, params);
        var blockName = this.popStack();
        params.splice(1, 0, blockName);
        this.push(this.source.functionCall(blockHelperMissing, 'call', params));
    },
    // [ambiguousBlockValue]
    //
    // On stack, before: hash, inverse, program, value
    // Compiler value, before: lastHelper=value of last found helper, if any
    // On stack, after, if no lastHelper: same as [blockValue]
    // On stack, after, if lastHelper: value
    ambiguousBlockValue: function ambiguousBlockValue() {
        // We're being a bit cheeky and reusing the options value from the prior exec
        var blockHelperMissing = this.aliasable('container.hooks.blockHelperMissing'), params = [
            this.contextName(0)
        ];
        this.setupHelperArgs('', 0, params, true);
        this.flushInline();
        var current = this.topStack();
        params.splice(1, 0, current);
        this.pushSource([
            'if (!',
            this.lastHelper,
            ') { ',
            current,
            ' = ',
            this.source.functionCall(blockHelperMissing, 'call', params),
            '}'
        ]);
    },
    // [appendContent]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Appends the string value of `content` to the current buffer
    appendContent: function appendContent(content) {
        if (this.pendingContent) content = this.pendingContent + content;
        else this.pendingLocation = this.source.currentLocation;
        this.pendingContent = content;
    },
    // [append]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Coerces `value` to a String and appends it to the current buffer.
    //
    // If `value` is truthy, or 0, it is coerced into a string and appended
    // Otherwise, the empty string is appended
    append: function append() {
        if (this.isInline()) {
            this.replaceStack(function(current) {
                return [
                    ' != null ? ',
                    current,
                    ' : ""'
                ];
            });
            this.pushSource(this.appendToBuffer(this.popStack()));
        } else {
            var local = this.popStack();
            this.pushSource([
                'if (',
                local,
                ' != null) { ',
                this.appendToBuffer(local, undefined, true),
                ' }'
            ]);
            if (this.environment.isSimple) this.pushSource([
                'else { ',
                this.appendToBuffer("''", undefined, true),
                ' }'
            ]);
        }
    },
    // [appendEscaped]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Escape `value` and append it to the buffer
    appendEscaped: function appendEscaped() {
        this.pushSource(this.appendToBuffer([
            this.aliasable('container.escapeExpression'),
            '(',
            this.popStack(),
            ')'
        ]));
    },
    // [getContext]
    //
    // On stack, before: ...
    // On stack, after: ...
    // Compiler value, after: lastContext=depth
    //
    // Set the value of the `lastContext` compiler value to the depth
    getContext: function getContext(depth) {
        this.lastContext = depth;
    },
    // [pushContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext, ...
    //
    // Pushes the value of the current context onto the stack.
    pushContext: function pushContext() {
        this.pushStackLiteral(this.contextName(this.lastContext));
    },
    // [lookupOnContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext[name], ...
    //
    // Looks up the value of `name` on the current context and pushes
    // it onto the stack.
    lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
        var i = 0;
        if (!scoped && this.options.compat && !this.lastContext) // The depthed query is expected to handle the undefined logic for the root level that
        // is implemented below, so we evaluate that directly in compat mode
        this.push(this.depthedLookup(parts[i++]));
        else this.pushContext();
        this.resolvePath('context', parts, i, falsy, strict);
    },
    // [lookupBlockParam]
    //
    // On stack, before: ...
    // On stack, after: blockParam[name], ...
    //
    // Looks up the value of `parts` on the given block param and pushes
    // it onto the stack.
    lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
        this.useBlockParams = true;
        this.push([
            'blockParams[',
            blockParamId[0],
            '][',
            blockParamId[1],
            ']'
        ]);
        this.resolvePath('context', parts, 1);
    },
    // [lookupData]
    //
    // On stack, before: ...
    // On stack, after: data, ...
    //
    // Push the data lookup operator
    lookupData: function lookupData(depth, parts, strict) {
        if (!depth) this.pushStackLiteral('data');
        else this.pushStackLiteral('container.data(data, ' + depth + ')');
        this.resolvePath('data', parts, 0, true, strict);
    },
    resolvePath: function resolvePath(type, parts, startPartIndex, falsy, strict) {
        // istanbul ignore next
        var _this2 = this;
        if (this.options.strict || this.options.assumeObjects) {
            this.push(strictLookup(this.options.strict && strict, this, parts, startPartIndex, type));
            return;
        }
        var len = parts.length;
        var _loop = function(i) {
            /* eslint-disable no-loop-func */ _this2.replaceStack(function(current) {
                var lookup = _this2.nameLookup(current, parts[i], type);
                // We want to ensure that zero and false are handled properly if the context (falsy flag)
                // needs to have the special handling for these values.
                if (!falsy) return [
                    ' != null ? ',
                    lookup,
                    ' : ',
                    current
                ];
                else // Otherwise we can use generic falsy handling
                return [
                    ' && ',
                    lookup
                ];
            });
        /* eslint-enable no-loop-func */ };
        for(var i = startPartIndex; i < len; i++)_loop(i);
    },
    // [resolvePossibleLambda]
    //
    // On stack, before: value, ...
    // On stack, after: resolved value, ...
    //
    // If the `value` is a lambda, replace it on the stack by
    // the return value of the lambda
    resolvePossibleLambda: function resolvePossibleLambda() {
        this.push([
            this.aliasable('container.lambda'),
            '(',
            this.popStack(),
            ', ',
            this.contextName(0),
            ')'
        ]);
    },
    // [pushStringParam]
    //
    // On stack, before: ...
    // On stack, after: string, currentContext, ...
    //
    // This opcode is designed for use in string mode, which
    // provides the string value of a parameter along with its
    // depth rather than resolving it immediately.
    pushStringParam: function pushStringParam(string, type) {
        this.pushContext();
        this.pushString(type);
        // If it's a subexpression, the string result
        // will be pushed after this opcode.
        if (type !== 'SubExpression') {
            if (typeof string === 'string') this.pushString(string);
            else this.pushStackLiteral(string);
        }
    },
    emptyHash: function emptyHash(omitEmpty) {
        if (this.trackIds) this.push('{}'); // hashIds
        if (this.stringParams) {
            this.push('{}'); // hashContexts
            this.push('{}'); // hashTypes
        }
        this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
    },
    pushHash: function pushHash() {
        if (this.hash) this.hashes.push(this.hash);
        this.hash = {
            values: {},
            types: [],
            contexts: [],
            ids: []
        };
    },
    popHash: function popHash() {
        var hash = this.hash;
        this.hash = this.hashes.pop();
        if (this.trackIds) this.push(this.objectLiteral(hash.ids));
        if (this.stringParams) {
            this.push(this.objectLiteral(hash.contexts));
            this.push(this.objectLiteral(hash.types));
        }
        this.push(this.objectLiteral(hash.values));
    },
    // [pushString]
    //
    // On stack, before: ...
    // On stack, after: quotedString(string), ...
    //
    // Push a quoted version of `string` onto the stack
    pushString: function pushString(string) {
        this.pushStackLiteral(this.quotedString(string));
    },
    // [pushLiteral]
    //
    // On stack, before: ...
    // On stack, after: value, ...
    //
    // Pushes a value onto the stack. This operation prevents
    // the compiler from creating a temporary variable to hold
    // it.
    pushLiteral: function pushLiteral(value) {
        this.pushStackLiteral(value);
    },
    // [pushProgram]
    //
    // On stack, before: ...
    // On stack, after: program(guid), ...
    //
    // Push a program expression onto the stack. This takes
    // a compile-time guid and converts it into a runtime-accessible
    // expression.
    pushProgram: function pushProgram(guid) {
        if (guid != null) this.pushStackLiteral(this.programExpression(guid));
        else this.pushStackLiteral(null);
    },
    // [registerDecorator]
    //
    // On stack, before: hash, program, params..., ...
    // On stack, after: ...
    //
    // Pops off the decorator's parameters, invokes the decorator,
    // and inserts the decorator into the decorators list.
    registerDecorator: function registerDecorator(paramSize, name) {
        var foundDecorator = this.nameLookup('decorators', name, 'decorator'), options = this.setupHelperArgs(name, paramSize);
        // Store the resolved decorator in a variable and verify it is a function before
        // calling it. Without this, unregistered decorators can cause an unhandled TypeError
        // (calling undefined), which crashes the process — enabling Denial of Service.
        this.decorators.push([
            'var decorator = ',
            foundDecorator,
            ';'
        ]);
        this.decorators.push([
            'if (typeof decorator !== "function") { throw new Error(',
            this.quotedString('Missing decorator: "' + name + '"'),
            '); }'
        ]);
        this.decorators.push([
            'fn = ',
            this.decorators.functionCall('decorator', '', [
                'fn',
                'props',
                'container',
                options
            ]),
            ' || fn;'
        ]);
    },
    // [invokeHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // Pops off the helper's parameters, invokes the helper,
    // and pushes the helper's return value onto the stack.
    //
    // If the helper is not found, `helperMissing` is called.
    invokeHelper: function invokeHelper(paramSize, name, isSimple) {
        var nonHelper = this.popStack(), helper = this.setupHelper(paramSize, name);
        var possibleFunctionCalls = [];
        if (isSimple) // direct call to helper
        possibleFunctionCalls.push(helper.name);
        // call a function from the input object
        possibleFunctionCalls.push(nonHelper);
        if (!this.options.strict) possibleFunctionCalls.push(this.aliasable('container.hooks.helperMissing'));
        var functionLookupCode = [
            '(',
            this.itemsSeparatedBy(possibleFunctionCalls, '||'),
            ')'
        ];
        var functionCall = this.source.functionCall(functionLookupCode, 'call', helper.callParams);
        this.push(functionCall);
    },
    itemsSeparatedBy: function itemsSeparatedBy(items, separator) {
        var result = [];
        result.push(items[0]);
        for(var i = 1; i < items.length; i++)result.push(separator, items[i]);
        return result;
    },
    // [invokeKnownHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // This operation is used when the helper is known to exist,
    // so a `helperMissing` fallback is not required.
    invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
        var helper = this.setupHelper(paramSize, name);
        this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
    },
    // [invokeAmbiguous]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of disambiguation
    //
    // This operation is used when an expression like `{{foo}}`
    // is provided, but we don't know at compile-time whether it
    // is a helper or a path.
    //
    // This operation emits more code than the other options,
    // and can be avoided by passing the `knownHelpers` and
    // `knownHelpersOnly` flags at compile-time.
    invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
        this.useRegister('helper');
        var nonHelper = this.popStack();
        this.emptyHash();
        var helper = this.setupHelper(0, name, helperCall);
        var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');
        var lookup = [
            '(',
            '(helper = ',
            helperName,
            ' || ',
            nonHelper,
            ')'
        ];
        if (!this.options.strict) {
            lookup[0] = '(helper = ';
            lookup.push(' != null ? helper : ', this.aliasable('container.hooks.helperMissing'));
        }
        this.push([
            '(',
            lookup,
            helper.paramsInit ? [
                '),(',
                helper.paramsInit
            ] : [],
            '),',
            '(typeof helper === ',
            this.aliasable('"function"'),
            ' ? ',
            this.source.functionCall('helper', 'call', helper.callParams),
            ' : helper))'
        ]);
    },
    // [invokePartial]
    //
    // On stack, before: context, ...
    // On stack after: result of partial invocation
    //
    // This operation pops off a context, invokes a partial with that context,
    // and pushes the result of the invocation back.
    invokePartial: function invokePartial(isDynamic, name, indent) {
        var params = [], options = this.setupParams(name, 1, params);
        if (isDynamic) {
            name = this.popStack();
            delete options.name;
        }
        if (indent) options.indent = JSON.stringify(indent);
        options.helpers = 'helpers';
        options.partials = 'partials';
        options.decorators = 'container.decorators';
        if (!isDynamic) params.unshift(this.nameLookup('partials', name, 'partial'));
        else params.unshift(name);
        if (this.options.compat) options.depths = 'depths';
        options = this.objectLiteral(options);
        params.push(options);
        this.push(this.source.functionCall('container.invokePartial', '', params));
    },
    // [assignToHash]
    //
    // On stack, before: value, ..., hash, ...
    // On stack, after: ..., hash, ...
    //
    // Pops a value off the stack and assigns it to the current hash
    assignToHash: function assignToHash(key) {
        var value = this.popStack(), context = undefined, type = undefined, id = undefined;
        if (this.trackIds) id = this.popStack();
        if (this.stringParams) {
            type = this.popStack();
            context = this.popStack();
        }
        var hash = this.hash;
        if (context) hash.contexts[key] = context;
        if (type) hash.types[key] = type;
        if (id) hash.ids[key] = id;
        hash.values[key] = value;
    },
    pushId: function pushId(type, name, child) {
        if (type === 'BlockParam') this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
        else if (type === 'PathExpression') this.pushString(name);
        else if (type === 'SubExpression') this.pushStackLiteral('true');
        else this.pushStackLiteral('null');
    },
    // HELPERS
    compiler: JavaScriptCompiler,
    compileChildren: function compileChildren(environment, options) {
        var children = environment.children, child = undefined, compiler = undefined;
        for(var i = 0, l = children.length; i < l; i++){
            child = children[i];
            compiler = new this.compiler(); // eslint-disable-line new-cap
            var existing = this.matchExistingProgram(child);
            if (existing == null) {
                // Placeholder to prevent name conflicts for nested children
                var index = this.context.programs.push('') - 1;
                child.index = index;
                child.name = 'program' + index;
                this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
                this.context.decorators[index] = compiler.decorators;
                this.context.environments[index] = child;
                this.useDepths = this.useDepths || compiler.useDepths;
                this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
                child.useDepths = this.useDepths;
                child.useBlockParams = this.useBlockParams;
            } else {
                child.index = existing.index;
                child.name = 'program' + existing.index;
                this.useDepths = this.useDepths || existing.useDepths;
                this.useBlockParams = this.useBlockParams || existing.useBlockParams;
            }
        }
    },
    matchExistingProgram: function matchExistingProgram(child) {
        for(var i = 0, len = this.context.environments.length; i < len; i++){
            var environment = this.context.environments[i];
            if (environment && environment.equals(child)) return environment;
        }
    },
    programExpression: function programExpression(guid) {
        var child = this.environment.children[guid], programParams = [
            child.index,
            'data',
            child.blockParams
        ];
        if (this.useBlockParams || this.useDepths) programParams.push('blockParams');
        if (this.useDepths) programParams.push('depths');
        return 'container.program(' + programParams.join(', ') + ')';
    },
    useRegister: function useRegister(name) {
        if (!this.registers[name]) {
            this.registers[name] = true;
            this.registers.list.push(name);
        }
    },
    push: function push(expr) {
        if (!(expr instanceof Literal)) expr = this.source.wrap(expr);
        this.inlineStack.push(expr);
        return expr;
    },
    pushStackLiteral: function pushStackLiteral(item) {
        this.push(new Literal(item));
    },
    pushSource: function pushSource(source) {
        if (this.pendingContent) {
            this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
            this.pendingContent = undefined;
        }
        if (source) this.source.push(source);
    },
    replaceStack: function replaceStack(callback) {
        var prefix = [
            '('
        ], stack = undefined, createdStack = undefined, usedLiteral = undefined;
        /* istanbul ignore next */ if (!this.isInline()) throw new _exception2['default']('replaceStack on non-inline');
        // We want to merge the inline statement into the replacement statement via ','
        var top = this.popStack(true);
        if (top instanceof Literal) {
            // Literals do not need to be inlined
            stack = [
                top.value
            ];
            prefix = [
                '(',
                stack
            ];
            usedLiteral = true;
        } else {
            // Get or create the current stack name for use by the inline
            createdStack = true;
            var _name = this.incrStack();
            prefix = [
                '((',
                this.push(_name),
                ' = ',
                top,
                ')'
            ];
            stack = this.topStack();
        }
        var item = callback.call(this, stack);
        if (!usedLiteral) this.popStack();
        if (createdStack) this.stackSlot--;
        this.push(prefix.concat(item, ')'));
    },
    incrStack: function incrStack() {
        this.stackSlot++;
        if (this.stackSlot > this.stackVars.length) this.stackVars.push('stack' + this.stackSlot);
        return this.topStackName();
    },
    topStackName: function topStackName() {
        return 'stack' + this.stackSlot;
    },
    flushInline: function flushInline() {
        var inlineStack = this.inlineStack;
        this.inlineStack = [];
        for(var i = 0, len = inlineStack.length; i < len; i++){
            var entry = inlineStack[i];
            /* istanbul ignore if */ if (entry instanceof Literal) this.compileStack.push(entry);
            else {
                var stack = this.incrStack();
                this.pushSource([
                    stack,
                    ' = ',
                    entry,
                    ';'
                ]);
                this.compileStack.push(stack);
            }
        }
    },
    isInline: function isInline() {
        return this.inlineStack.length;
    },
    popStack: function popStack(wrapped) {
        var inline = this.isInline(), item = (inline ? this.inlineStack : this.compileStack).pop();
        if (!wrapped && item instanceof Literal) return item.value;
        else {
            if (!inline) {
                /* istanbul ignore next */ if (!this.stackSlot) throw new _exception2['default']('Invalid stack pop');
                this.stackSlot--;
            }
            return item;
        }
    },
    topStack: function topStack() {
        var stack = this.isInline() ? this.inlineStack : this.compileStack, item = stack[stack.length - 1];
        /* istanbul ignore if */ if (item instanceof Literal) return item.value;
        else return item;
    },
    contextName: function contextName(context) {
        if (this.useDepths && context) return 'depths[' + context + ']';
        else return 'depth' + context;
    },
    quotedString: function quotedString(str) {
        return this.source.quotedString(str);
    },
    objectLiteral: function objectLiteral(obj) {
        return this.source.objectLiteral(obj);
    },
    aliasable: function aliasable(name) {
        var ret = this.aliases[name];
        if (ret) {
            ret.referenceCount++;
            return ret;
        }
        ret = this.aliases[name] = this.source.wrap(name);
        ret.aliasable = true;
        ret.referenceCount = 1;
        return ret;
    },
    setupHelper: function setupHelper(paramSize, name, blockHelper) {
        var params = [], paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
        var foundHelper = this.nameLookup('helpers', name, 'helper'), callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : (container.nullContext || {})');
        return {
            params: params,
            paramsInit: paramsInit,
            name: foundHelper,
            callParams: [
                callContext
            ].concat(params)
        };
    },
    setupParams: function setupParams(helper, paramSize, params) {
        var options = {}, contexts = [], types = [], ids = [], objectArgs = !params, param = undefined;
        if (objectArgs) params = [];
        options.name = this.quotedString(helper);
        options.hash = this.popStack();
        if (this.trackIds) options.hashIds = this.popStack();
        if (this.stringParams) {
            options.hashTypes = this.popStack();
            options.hashContexts = this.popStack();
        }
        var inverse = this.popStack(), program = this.popStack();
        // Avoid setting fn and inverse if neither are set. This allows
        // helpers to do a check for `if (options.fn)`
        if (program || inverse) {
            options.fn = program || 'container.noop';
            options.inverse = inverse || 'container.noop';
        }
        // The parameters go on to the stack in order (making sure that they are evaluated in order)
        // so we need to pop them off the stack in reverse order
        var i = paramSize;
        while(i--){
            param = this.popStack();
            params[i] = param;
            if (this.trackIds) ids[i] = this.popStack();
            if (this.stringParams) {
                types[i] = this.popStack();
                contexts[i] = this.popStack();
            }
        }
        if (objectArgs) options.args = this.source.generateArray(params);
        if (this.trackIds) options.ids = this.source.generateArray(ids);
        if (this.stringParams) {
            options.types = this.source.generateArray(types);
            options.contexts = this.source.generateArray(contexts);
        }
        if (this.options.data) options.data = 'data';
        if (this.useBlockParams) options.blockParams = 'blockParams';
        return options;
    },
    setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
        var options = this.setupParams(helper, paramSize, params);
        options.loc = JSON.stringify(this.source.currentLocation);
        options = this.objectLiteral(options);
        if (useRegister) {
            this.useRegister('options');
            params.push('options');
            return [
                'options=',
                options
            ];
        } else if (params) {
            params.push(options);
            return '';
        } else return options;
    }
};
(function() {
    var reservedWords = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(' ');
    var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};
    for(var i = 0, l = reservedWords.length; i < l; i++)compilerWords[reservedWords[i]] = true;
})();
/**
 * @deprecated May be removed in the next major version
 */ JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
    return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
};
function strictLookup(requireTerminal, compiler, parts, startPartIndex, type) {
    var stack = compiler.popStack(), len = parts.length;
    if (requireTerminal) len--;
    for(var i = startPartIndex; i < len; i++)stack = compiler.nameLookup(stack, parts[i], type);
    if (requireTerminal) return [
        compiler.aliasable('container.strict'),
        '(',
        stack,
        ', ',
        compiler.quotedString(parts[len]),
        ', ',
        JSON.stringify(compiler.source.currentLocation),
        ' )'
    ];
    else return stack;
}
exports['default'] = JavaScriptCompiler;
module.exports = exports['default'];

},{"a0a16efc5d27e7a7":"lbZDS","d25f115c9a9762da":"fzp9G","930fe40140fd5914":"5nZBG","5a4632a3990a4ddf":"wNsNe"}],"wNsNe":[function(require,module,exports,__globalThis) {
/* global define, require */ 'use strict';
exports.__esModule = true;
var _utils = require("21db19743b10c9d0");
var SourceNode = undefined;
try {
    /* istanbul ignore next */ if (typeof define !== 'function' || !define.amd) {
        // We don't support this in AMD environments. For these environments, we assume that
        // they are running on the browser and thus have no need for the source-map library.
        var SourceMap = require("f318d3d11bf97e0a");
        SourceNode = SourceMap.SourceNode;
    }
} catch (err) {}
/* NOP */ /* istanbul ignore if: tested but not covered in istanbul due to dist build  */ if (!SourceNode) {
    SourceNode = function(line, column, srcFile, chunks) {
        this.src = '';
        if (chunks) this.add(chunks);
    };
    /* istanbul ignore next */ SourceNode.prototype = {
        add: function add(chunks) {
            if (_utils.isArray(chunks)) chunks = chunks.join('');
            this.src += chunks;
        },
        prepend: function prepend(chunks) {
            if (_utils.isArray(chunks)) chunks = chunks.join('');
            this.src = chunks + this.src;
        },
        toStringWithSourceMap: function toStringWithSourceMap() {
            return {
                code: this.toString()
            };
        },
        toString: function toString() {
            return this.src;
        }
    };
}
function castChunk(chunk, codeGen, loc) {
    if (_utils.isArray(chunk)) {
        var ret = [];
        for(var i = 0, len = chunk.length; i < len; i++)ret.push(codeGen.wrap(chunk[i], loc));
        return ret;
    } else if (typeof chunk === 'boolean' || typeof chunk === 'number') // Handle primitives that the SourceNode will throw up on
    return chunk + '';
    return chunk;
}
function CodeGen(srcFile) {
    this.srcFile = srcFile;
    this.source = [];
}
CodeGen.prototype = {
    isEmpty: function isEmpty() {
        return !this.source.length;
    },
    prepend: function prepend(source, loc) {
        this.source.unshift(this.wrap(source, loc));
    },
    push: function push(source, loc) {
        this.source.push(this.wrap(source, loc));
    },
    merge: function merge() {
        var source = this.empty();
        this.each(function(line) {
            source.add([
                '  ',
                line,
                '\n'
            ]);
        });
        return source;
    },
    each: function each(iter) {
        for(var i = 0, len = this.source.length; i < len; i++)iter(this.source[i]);
    },
    empty: function empty() {
        var loc = this.currentLocation || {
            start: {}
        };
        return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
    },
    wrap: function wrap(chunk) {
        var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || {
            start: {}
        } : arguments[1];
        if (chunk instanceof SourceNode) return chunk;
        chunk = castChunk(chunk, this, loc);
        return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
    },
    functionCall: function functionCall(fn, type, params) {
        params = this.generateList(params);
        return this.wrap([
            fn,
            type ? '.' + type + '(' : '(',
            params,
            ')'
        ]);
    },
    quotedString: function quotedString(str) {
        return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028') // Per Ecma-262 7.3 + 7.8.4
        .replace(/\u2029/g, '\\u2029') + '"';
    },
    objectLiteral: function objectLiteral(obj) {
        // istanbul ignore next
        var _this = this;
        var pairs = [];
        Object.keys(obj).forEach(function(key) {
            var value = castChunk(obj[key], _this);
            if (value !== 'undefined') pairs.push([
                _this.quotedString(key),
                ':',
                value
            ]);
        });
        var ret = this.generateList(pairs);
        ret.prepend('{');
        ret.add('}');
        return ret;
    },
    generateList: function generateList(entries) {
        var ret = this.empty();
        for(var i = 0, len = entries.length; i < len; i++){
            if (i) ret.add(',');
            ret.add(castChunk(entries[i], this));
        }
        return ret;
    },
    generateArray: function generateArray(entries) {
        var ret = this.generateList(entries);
        ret.prepend('[');
        ret.add(']');
        return ret;
    }
};
exports['default'] = CodeGen;
module.exports = exports['default'];

},{"21db19743b10c9d0":"5nZBG","f318d3d11bf97e0a":"CeNjn"}],"CeNjn":[function(require,module,exports,__globalThis) {
/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ exports.SourceMapGenerator = require("4f3489f7a4aa86a").SourceMapGenerator;
exports.SourceMapConsumer = require("74f5da57ddba8e").SourceMapConsumer;
exports.SourceNode = require("24e5bc41542c0363").SourceNode;

},{"4f3489f7a4aa86a":"fWPsq","74f5da57ddba8e":"aJzFI","24e5bc41542c0363":"bArmc"}],"fWPsq":[function(require,module,exports,__globalThis) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var base64VLQ = require("c40e1500640cbc22");
var util = require("c65fbfec2259bb0f");
var ArraySet = require("fce2ada3f2269665").ArraySet;
var MappingList = require("2ae94379d5b0c785").MappingList;
/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */ function SourceMapGenerator(aArgs) {
    if (!aArgs) aArgs = {};
    this._file = util.getArg(aArgs, 'file', null);
    this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
    this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
    this._sources = new ArraySet();
    this._names = new ArraySet();
    this._mappings = new MappingList();
    this._sourcesContents = null;
}
SourceMapGenerator.prototype._version = 3;
/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */ SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
        file: aSourceMapConsumer.file,
        sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function(mapping) {
        var newMapping = {
            generated: {
                line: mapping.generatedLine,
                column: mapping.generatedColumn
            }
        };
        if (mapping.source != null) {
            newMapping.source = mapping.source;
            if (sourceRoot != null) newMapping.source = util.relative(sourceRoot, newMapping.source);
            newMapping.original = {
                line: mapping.originalLine,
                column: mapping.originalColumn
            };
            if (mapping.name != null) newMapping.name = mapping.name;
        }
        generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var sourceRelative = sourceFile;
        if (sourceRoot !== null) sourceRelative = util.relative(sourceRoot, sourceFile);
        if (!generator._sources.has(sourceRelative)) generator._sources.add(sourceRelative);
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) generator.setSourceContent(sourceFile, content);
    });
    return generator;
};
/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */ SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, 'generated');
    var original = util.getArg(aArgs, 'original', null);
    var source = util.getArg(aArgs, 'source', null);
    var name = util.getArg(aArgs, 'name', null);
    if (!this._skipValidation) this._validateMapping(generated, original, source, name);
    if (source != null) {
        source = String(source);
        if (!this._sources.has(source)) this._sources.add(source);
    }
    if (name != null) {
        name = String(name);
        if (!this._names.has(name)) this._names.add(name);
    }
    this._mappings.add({
        generatedLine: generated.line,
        generatedColumn: generated.column,
        originalLine: original != null && original.line,
        originalColumn: original != null && original.column,
        source: source,
        name: name
    });
};
/**
 * Set the source content for a source file.
 */ SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) source = util.relative(this._sourceRoot, source);
    if (aSourceContent != null) {
        // Add the source content to the _sourcesContents map.
        // Create a new _sourcesContents map if the property is null.
        if (!this._sourcesContents) this._sourcesContents = Object.create(null);
        this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
        // Remove the source file from the _sourcesContents map.
        // If the _sourcesContents map is empty, set the property to null.
        delete this._sourcesContents[util.toSetString(source)];
        if (Object.keys(this._sourcesContents).length === 0) this._sourcesContents = null;
    }
};
/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */ SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
        if (aSourceMapConsumer.file == null) throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
        sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) sourceFile = util.relative(sourceRoot, sourceFile);
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();
    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function(mapping) {
        if (mapping.source === sourceFile && mapping.originalLine != null) {
            // Check if it can be mapped by the source map, then update the mapping.
            var original = aSourceMapConsumer.originalPositionFor({
                line: mapping.originalLine,
                column: mapping.originalColumn
            });
            if (original.source != null) {
                // Copy mapping
                mapping.source = original.source;
                if (aSourceMapPath != null) mapping.source = util.join(aSourceMapPath, mapping.source);
                if (sourceRoot != null) mapping.source = util.relative(sourceRoot, mapping.source);
                mapping.originalLine = original.line;
                mapping.originalColumn = original.column;
                if (original.name != null) mapping.name = original.name;
            }
        }
        var source = mapping.source;
        if (source != null && !newSources.has(source)) newSources.add(source);
        var name = mapping.name;
        if (name != null && !newNames.has(name)) newNames.add(name);
    }, this);
    this._sources = newSources;
    this._names = newNames;
    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
            if (aSourceMapPath != null) sourceFile = util.join(aSourceMapPath, sourceFile);
            if (sourceRoot != null) sourceFile = util.relative(sourceRoot, sourceFile);
            this.setSourceContent(sourceFile, content);
        }
    }, this);
};
/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */ SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
    // When aOriginal is truthy but has empty values for .line and .column,
    // it is most likely a programmer error. In this case we throw a very
    // specific error message to try to guide them the right way.
    // For example: https://github.com/Polymer/polymer-bundler/pull/519
    if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) // Case 1.
    return;
    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated && aOriginal && 'line' in aOriginal && 'column' in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) // Cases 2 and 3.
    return;
    else throw new Error('Invalid mapping: ' + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
    }));
};
/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */ SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = '';
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;
    var mappings = this._mappings.toArray();
    for(var i = 0, len = mappings.length; i < len; i++){
        mapping = mappings[i];
        next = '';
        if (mapping.generatedLine !== previousGeneratedLine) {
            previousGeneratedColumn = 0;
            while(mapping.generatedLine !== previousGeneratedLine){
                next += ';';
                previousGeneratedLine++;
            }
        } else if (i > 0) {
            if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) continue;
            next += ',';
        }
        next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
        previousGeneratedColumn = mapping.generatedColumn;
        if (mapping.source != null) {
            sourceIdx = this._sources.indexOf(mapping.source);
            next += base64VLQ.encode(sourceIdx - previousSource);
            previousSource = sourceIdx;
            // lines are stored 0-based in SourceMap spec version 3
            next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
            previousOriginalLine = mapping.originalLine - 1;
            next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
            previousOriginalColumn = mapping.originalColumn;
            if (mapping.name != null) {
                nameIdx = this._names.indexOf(mapping.name);
                next += base64VLQ.encode(nameIdx - previousName);
                previousName = nameIdx;
            }
        }
        result += next;
    }
    return result;
};
SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function(source) {
        if (!this._sourcesContents) return null;
        if (aSourceRoot != null) source = util.relative(aSourceRoot, source);
        var key = util.toSetString(source);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
    }, this);
};
/**
 * Externalize the source map.
 */ SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
    var map = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings()
    };
    if (this._file != null) map.file = this._file;
    if (this._sourceRoot != null) map.sourceRoot = this._sourceRoot;
    if (this._sourcesContents) map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    return map;
};
/**
 * Render the source map being generated to a string.
 */ SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
};
exports.SourceMapGenerator = SourceMapGenerator;

},{"c40e1500640cbc22":"V97wI","c65fbfec2259bb0f":"5Iq0C","fce2ada3f2269665":"98l1a","2ae94379d5b0c785":"cSG9g"}],"V97wI":[function(require,module,exports,__globalThis) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ var base64 = require("9fcf0c64c293678d");
// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011
var VLQ_BASE_SHIFT = 5;
// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;
// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;
/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */ function toVLQSigned(aValue) {
    return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
}
/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */ function fromVLQSigned(aValue) {
    var isNegative = (aValue & 1) === 1;
    var shifted = aValue >> 1;
    return isNegative ? -shifted : shifted;
}
/**
 * Returns the base 64 VLQ encoded value.
 */ exports.encode = function base64VLQ_encode(aValue) {
    var encoded = "";
    var digit;
    var vlq = toVLQSigned(aValue);
    do {
        digit = vlq & VLQ_BASE_MASK;
        vlq >>>= VLQ_BASE_SHIFT;
        if (vlq > 0) // There are still more digits in this value, so we must make sure the
        // continuation bit is marked.
        digit |= VLQ_CONTINUATION_BIT;
        encoded += base64.encode(digit);
    }while (vlq > 0);
    return encoded;
};
/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */ exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
    var strLen = aStr.length;
    var result = 0;
    var shift = 0;
    var continuation, digit;
    do {
        if (aIndex >= strLen) throw new Error("Expected more digits in base 64 VLQ value.");
        digit = base64.decode(aStr.charCodeAt(aIndex++));
        if (digit === -1) throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
        continuation = !!(digit & VLQ_CONTINUATION_BIT);
        digit &= VLQ_BASE_MASK;
        result = result + (digit << shift);
        shift += VLQ_BASE_SHIFT;
    }while (continuation);
    aOutParam.value = fromVLQSigned(result);
    aOutParam.rest = aIndex;
};

},{"9fcf0c64c293678d":"kYww2"}],"kYww2":[function(require,module,exports,__globalThis) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */ exports.encode = function(number) {
    if (0 <= number && number < intToCharMap.length) return intToCharMap[number];
    throw new TypeError("Must be between 0 and 63: " + number);
};
/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */ exports.decode = function(charCode) {
    var bigA = 65; // 'A'
    var bigZ = 90; // 'Z'
    var littleA = 97; // 'a'
    var littleZ = 122; // 'z'
    var zero = 48; // '0'
    var nine = 57; // '9'
    var plus = 43; // '+'
    var slash = 47; // '/'
    var littleOffset = 26;
    var numberOffset = 52;
    // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
    if (bigA <= charCode && charCode <= bigZ) return charCode - bigA;
    // 26 - 51: abcdefghijklmnopqrstuvwxyz
    if (littleA <= charCode && charCode <= littleZ) return charCode - littleA + littleOffset;
    // 52 - 61: 0123456789
    if (zero <= charCode && charCode <= nine) return charCode - zero + numberOffset;
    // 62: +
    if (charCode == plus) return 62;
    // 63: /
    if (charCode == slash) return 63;
    // Invalid base64 digit.
    return -1;
};

},{}],"5Iq0C":[function(require,module,exports,__globalThis) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ /**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */ function getArg(aArgs, aName, aDefaultValue) {
    if (aName in aArgs) return aArgs[aName];
    else if (arguments.length === 3) return aDefaultValue;
    else throw new Error('"' + aName + '" is a required argument.');
}
exports.getArg = getArg;
var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;
function urlParse(aUrl) {
    var match = aUrl.match(urlRegexp);
    if (!match) return null;
    return {
        scheme: match[1],
        auth: match[2],
        host: match[3],
        port: match[4],
        path: match[5]
    };
}
exports.urlParse = urlParse;
function urlGenerate(aParsedUrl) {
    var url = '';
    if (aParsedUrl.scheme) url += aParsedUrl.scheme + ':';
    url += '//';
    if (aParsedUrl.auth) url += aParsedUrl.auth + '@';
    if (aParsedUrl.host) url += aParsedUrl.host;
    if (aParsedUrl.port) url += ":" + aParsedUrl.port;
    if (aParsedUrl.path) url += aParsedUrl.path;
    return url;
}
exports.urlGenerate = urlGenerate;
/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */ function normalize(aPath) {
    var path = aPath;
    var url = urlParse(aPath);
    if (url) {
        if (!url.path) return aPath;
        path = url.path;
    }
    var isAbsolute = exports.isAbsolute(path);
    var parts = path.split(/\/+/);
    for(var part, up = 0, i = parts.length - 1; i >= 0; i--){
        part = parts[i];
        if (part === '.') parts.splice(i, 1);
        else if (part === '..') up++;
        else if (up > 0) {
            if (part === '') {
                // The first part is blank if the path is absolute. Trying to go
                // above the root is a no-op. Therefore we can remove all '..' parts
                // directly after the root.
                parts.splice(i + 1, up);
                up = 0;
            } else {
                parts.splice(i, 2);
                up--;
            }
        }
    }
    path = parts.join('/');
    if (path === '') path = isAbsolute ? '/' : '.';
    if (url) {
        url.path = path;
        return urlGenerate(url);
    }
    return path;
}
exports.normalize = normalize;
/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */ function join(aRoot, aPath) {
    if (aRoot === "") aRoot = ".";
    if (aPath === "") aPath = ".";
    var aPathUrl = urlParse(aPath);
    var aRootUrl = urlParse(aRoot);
    if (aRootUrl) aRoot = aRootUrl.path || '/';
    // `join(foo, '//www.example.org')`
    if (aPathUrl && !aPathUrl.scheme) {
        if (aRootUrl) aPathUrl.scheme = aRootUrl.scheme;
        return urlGenerate(aPathUrl);
    }
    if (aPathUrl || aPath.match(dataUrlRegexp)) return aPath;
    // `join('http://', 'www.example.com')`
    if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
        aRootUrl.host = aPath;
        return urlGenerate(aRootUrl);
    }
    var joined = aPath.charAt(0) === '/' ? aPath : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);
    if (aRootUrl) {
        aRootUrl.path = joined;
        return urlGenerate(aRootUrl);
    }
    return joined;
}
exports.join = join;
exports.isAbsolute = function(aPath) {
    return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};
/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */ function relative(aRoot, aPath) {
    if (aRoot === "") aRoot = ".";
    aRoot = aRoot.replace(/\/$/, '');
    // It is possible for the path to be above the root. In this case, simply
    // checking whether the root is a prefix of the path won't work. Instead, we
    // need to remove components from the root one by one, until either we find
    // a prefix that fits, or we run out of components to remove.
    var level = 0;
    while(aPath.indexOf(aRoot + '/') !== 0){
        var index = aRoot.lastIndexOf("/");
        if (index < 0) return aPath;
        // If the only part of the root that is left is the scheme (i.e. http://,
        // file:///, etc.), one or more slashes (/), or simply nothing at all, we
        // have exhausted all components, so the path is not relative to the root.
        aRoot = aRoot.slice(0, index);
        if (aRoot.match(/^([^\/]+:\/)?\/*$/)) return aPath;
        ++level;
    }
    // Make sure we add a "../" for each component we removed from the root.
    return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;
var supportsNullProto = function() {
    var obj = Object.create(null);
    return !('__proto__' in obj);
}();
function identity(s) {
    return s;
}
/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */ function toSetString(aStr) {
    if (isProtoString(aStr)) return '$' + aStr;
    return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;
function fromSetString(aStr) {
    if (isProtoString(aStr)) return aStr.slice(1);
    return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;
function isProtoString(s) {
    if (!s) return false;
    var length = s.length;
    if (length < 9 /* "__proto__".length */ ) return false;
    if (s.charCodeAt(length - 1) !== 95 /* '_' */  || s.charCodeAt(length - 2) !== 95 /* '_' */  || s.charCodeAt(length - 3) !== 111 /* 'o' */  || s.charCodeAt(length - 4) !== 116 /* 't' */  || s.charCodeAt(length - 5) !== 111 /* 'o' */  || s.charCodeAt(length - 6) !== 114 /* 'r' */  || s.charCodeAt(length - 7) !== 112 /* 'p' */  || s.charCodeAt(length - 8) !== 95 /* '_' */  || s.charCodeAt(length - 9) !== 95 /* '_' */ ) return false;
    for(var i = length - 10; i >= 0; i--){
        if (s.charCodeAt(i) !== 36 /* '$' */ ) return false;
    }
    return true;
}
/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */ function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
    var cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0 || onlyCompareOriginal) return cmp;
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) return cmp;
    cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) return cmp;
    return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;
/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */ function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0 || onlyCompareGenerated) return cmp;
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) return cmp;
    return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
function strcmp(aStr1, aStr2) {
    if (aStr1 === aStr2) return 0;
    if (aStr1 === null) return 1; // aStr2 !== null
    if (aStr2 === null) return -1; // aStr1 !== null
    if (aStr1 > aStr2) return 1;
    return -1;
}
/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */ function compareByGeneratedPositionsInflated(mappingA, mappingB) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) return cmp;
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) return cmp;
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) return cmp;
    return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */ function parseSourceMapInput(str) {
    return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;
/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */ function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
    sourceURL = sourceURL || '';
    if (sourceRoot) {
        // This follows what Chrome does.
        if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') sourceRoot += '/';
        // The spec says:
        //   Line 4: An optional source root, useful for relocating source
        //   files on a server or removing repeated values in the
        //   “sources” entry.  This value is prepended to the individual
        //   entries in the “source” field.
        sourceURL = sourceRoot + sourceURL;
    }
    // Historically, SourceMapConsumer did not take the sourceMapURL as
    // a parameter.  This mode is still somewhat supported, which is why
    // this code block is conditional.  However, it's preferable to pass
    // the source map URL to SourceMapConsumer, so that this function
    // can implement the source URL resolution algorithm as outlined in
    // the spec.  This block is basically the equivalent of:
    //    new URL(sourceURL, sourceMapURL).toString()
    // ... except it avoids using URL, which wasn't available in the
    // older releases of node still supported by this library.
    //
    // The spec says:
    //   If the sources are not absolute URLs after prepending of the
    //   “sourceRoot”, the sources are resolved relative to the
    //   SourceMap (like resolving script src in a html document).
    if (sourceMapURL) {
        var parsed = urlParse(sourceMapURL);
        if (!parsed) throw new Error("sourceMapURL could not be parsed");
        if (parsed.path) {
            // Strip the last path component, but keep the "/".
            var index = parsed.path.lastIndexOf('/');
            if (index >= 0) parsed.path = parsed.path.substring(0, index + 1);
        }
        sourceURL = join(urlGenerate(parsed), sourceURL);
    }
    return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;

},{}],"98l1a":[function(require,module,exports,__globalThis) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var util = require("f4001388f67ef757");
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";
/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */ function ArraySet() {
    this._array = [];
    this._set = hasNativeMap ? new Map() : Object.create(null);
}
/**
 * Static method for creating ArraySet instances from an existing array.
 */ ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
    var set = new ArraySet();
    for(var i = 0, len = aArray.length; i < len; i++)set.add(aArray[i], aAllowDuplicates);
    return set;
};
/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */ ArraySet.prototype.size = function ArraySet_size() {
    return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
/**
 * Add the given string to this set.
 *
 * @param String aStr
 */ ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
    var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
    var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
    var idx = this._array.length;
    if (!isDuplicate || aAllowDuplicates) this._array.push(aStr);
    if (!isDuplicate) {
        if (hasNativeMap) this._set.set(aStr, idx);
        else this._set[sStr] = idx;
    }
};
/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */ ArraySet.prototype.has = function ArraySet_has(aStr) {
    if (hasNativeMap) return this._set.has(aStr);
    else {
        var sStr = util.toSetString(aStr);
        return has.call(this._set, sStr);
    }
};
/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */ ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
    if (hasNativeMap) {
        var idx = this._set.get(aStr);
        if (idx >= 0) return idx;
    } else {
        var sStr = util.toSetString(aStr);
        if (has.call(this._set, sStr)) return this._set[sStr];
    }
    throw new Error('"' + aStr + '" is not in the set.');
};
/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */ ArraySet.prototype.at = function ArraySet_at(aIdx) {
    if (aIdx >= 0 && aIdx < this._array.length) return this._array[aIdx];
    throw new Error('No element indexed by ' + aIdx);
};
/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */ ArraySet.prototype.toArray = function ArraySet_toArray() {
    return this._array.slice();
};
exports.ArraySet = ArraySet;

},{"f4001388f67ef757":"5Iq0C"}],"cSG9g":[function(require,module,exports,__globalThis) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var util = require("a70191b97ba376d4");
/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */ function generatedPositionAfter(mappingA, mappingB) {
    // Optimized for most common case
    var lineA = mappingA.generatedLine;
    var lineB = mappingB.generatedLine;
    var columnA = mappingA.generatedColumn;
    var columnB = mappingB.generatedColumn;
    return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}
/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */ function MappingList() {
    this._array = [];
    this._sorted = true;
    // Serves as infimum
    this._last = {
        generatedLine: -1,
        generatedColumn: 0
    };
}
/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */ MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
};
/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */ MappingList.prototype.add = function MappingList_add(aMapping) {
    if (generatedPositionAfter(this._last, aMapping)) {
        this._last = aMapping;
        this._array.push(aMapping);
    } else {
        this._sorted = false;
        this._array.push(aMapping);
    }
};
/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */ MappingList.prototype.toArray = function MappingList_toArray() {
    if (!this._sorted) {
        this._array.sort(util.compareByGeneratedPositionsInflated);
        this._sorted = true;
    }
    return this._array;
};
exports.MappingList = MappingList;

},{"a70191b97ba376d4":"5Iq0C"}],"aJzFI":[function(require,module,exports,__globalThis) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var util = require("b22324b13f72201b");
var binarySearch = require("129ba2b16e81db9e");
var ArraySet = require("832bf56bf6a231e4").ArraySet;
var base64VLQ = require("95d11d359ee56491");
var quickSort = require("7076e0beb1aa0cfd").quickSort;
function SourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === 'string') sourceMap = util.parseSourceMapInput(aSourceMap);
    return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}
SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
    return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
};
/**
 * The version of the source mapping spec that we are consuming.
 */ SourceMapConsumer.prototype._version = 3;
// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.
SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
    configurable: true,
    enumerable: true,
    get: function() {
        if (!this.__generatedMappings) this._parseMappings(this._mappings, this.sourceRoot);
        return this.__generatedMappings;
    }
});
SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
    configurable: true,
    enumerable: true,
    get: function() {
        if (!this.__originalMappings) this._parseMappings(this._mappings, this.sourceRoot);
        return this.__originalMappings;
    }
});
SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */ SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
};
SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;
SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;
/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */ SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
    var mappings;
    switch(order){
        case SourceMapConsumer.GENERATED_ORDER:
            mappings = this._generatedMappings;
            break;
        case SourceMapConsumer.ORIGINAL_ORDER:
            mappings = this._originalMappings;
            break;
        default:
            throw new Error("Unknown order of iteration.");
    }
    var sourceRoot = this.sourceRoot;
    mappings.map(function(mapping) {
        var source = mapping.source === null ? null : this._sources.at(mapping.source);
        source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
        return {
            source: source,
            generatedLine: mapping.generatedLine,
            generatedColumn: mapping.generatedColumn,
            originalLine: mapping.originalLine,
            originalColumn: mapping.originalColumn,
            name: mapping.name === null ? null : this._names.at(mapping.name)
        };
    }, this).forEach(aCallback, context);
};
/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */ SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');
    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
        source: util.getArg(aArgs, 'source'),
        originalLine: line,
        originalColumn: util.getArg(aArgs, 'column', 0)
    };
    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) return [];
    var mappings = [];
    var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (aArgs.column === undefined) {
            var originalLine = mapping.originalLine;
            // Iterate until either we run out of mappings, or we run into
            // a mapping for a different line than the one we found. Since
            // mappings are sorted, this is guaranteed to find all mappings for
            // the line we found.
            while(mapping && mapping.originalLine === originalLine){
                mappings.push({
                    line: util.getArg(mapping, 'generatedLine', null),
                    column: util.getArg(mapping, 'generatedColumn', null),
                    lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
                });
                mapping = this._originalMappings[++index];
            }
        } else {
            var originalColumn = mapping.originalColumn;
            // Iterate until either we run out of mappings, or we run into
            // a mapping for a different line than the one we were searching for.
            // Since mappings are sorted, this is guaranteed to find all mappings for
            // the line we are searching for.
            while(mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn){
                mappings.push({
                    line: util.getArg(mapping, 'generatedLine', null),
                    column: util.getArg(mapping, 'generatedColumn', null),
                    lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
                });
                mapping = this._originalMappings[++index];
            }
        }
    }
    return mappings;
};
exports.SourceMapConsumer = SourceMapConsumer;
/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */ function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === 'string') sourceMap = util.parseSourceMapInput(aSourceMap);
    var version = util.getArg(sourceMap, 'version');
    var sources = util.getArg(sourceMap, 'sources');
    // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
    // requires the array) to play nice here.
    var names = util.getArg(sourceMap, 'names', []);
    var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
    var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
    var mappings = util.getArg(sourceMap, 'mappings');
    var file = util.getArg(sourceMap, 'file', null);
    // Once again, Sass deviates from the spec and supplies the version as a
    // string rather than a number, so we use loose equality checking here.
    if (version != this._version) throw new Error('Unsupported version: ' + version);
    if (sourceRoot) sourceRoot = util.normalize(sourceRoot);
    sources = sources.map(String)// Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)// Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function(source) {
        return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
    });
    // Pass `true` below to allow duplicate names and sources. While source maps
    // are intended to be compressed and deduplicated, the TypeScript compiler
    // sometimes generates source maps with duplicates in them. See Github issue
    // #72 and bugzil.la/889492.
    this._names = ArraySet.fromArray(names.map(String), true);
    this._sources = ArraySet.fromArray(sources, true);
    this._absoluteSources = this._sources.toArray().map(function(s) {
        return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
    });
    this.sourceRoot = sourceRoot;
    this.sourcesContent = sourcesContent;
    this._mappings = mappings;
    this._sourceMapURL = aSourceMapURL;
    this.file = file;
}
BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */ BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
    var relativeSource = aSource;
    if (this.sourceRoot != null) relativeSource = util.relative(this.sourceRoot, relativeSource);
    if (this._sources.has(relativeSource)) return this._sources.indexOf(relativeSource);
    // Maybe aSource is an absolute URL as returned by |sources|.  In
    // this case we can't simply undo the transform.
    var i;
    for(i = 0; i < this._absoluteSources.length; ++i){
        if (this._absoluteSources[i] == aSource) return i;
    }
    return -1;
};
/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */ BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);
    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function(s) {
        return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });
    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.
    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];
    for(var i = 0, length = generatedMappings.length; i < length; i++){
        var srcMapping = generatedMappings[i];
        var destMapping = new Mapping;
        destMapping.generatedLine = srcMapping.generatedLine;
        destMapping.generatedColumn = srcMapping.generatedColumn;
        if (srcMapping.source) {
            destMapping.source = sources.indexOf(srcMapping.source);
            destMapping.originalLine = srcMapping.originalLine;
            destMapping.originalColumn = srcMapping.originalColumn;
            if (srcMapping.name) destMapping.name = names.indexOf(srcMapping.name);
            destOriginalMappings.push(destMapping);
        }
        destGeneratedMappings.push(destMapping);
    }
    quickSort(smc.__originalMappings, util.compareByOriginalPositions);
    return smc;
};
/**
 * The version of the source mapping spec that we are consuming.
 */ BasicSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */ Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
    get: function() {
        return this._absoluteSources.slice();
    }
});
/**
 * Provide the JIT with a nice shape / hidden class.
 */ function Mapping() {
    this.generatedLine = 0;
    this.generatedColumn = 0;
    this.source = null;
    this.originalLine = null;
    this.originalColumn = null;
    this.name = null;
}
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */ BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;
    while(index < length){
        if (aStr.charAt(index) === ';') {
            generatedLine++;
            index++;
            previousGeneratedColumn = 0;
        } else if (aStr.charAt(index) === ',') index++;
        else {
            mapping = new Mapping();
            mapping.generatedLine = generatedLine;
            // Because each offset is encoded relative to the previous one,
            // many segments often have the same encoding. We can exploit this
            // fact by caching the parsed variable length fields of each segment,
            // allowing us to avoid a second parse if we encounter the same
            // segment again.
            for(end = index; end < length; end++){
                if (this._charIsMappingSeparator(aStr, end)) break;
            }
            str = aStr.slice(index, end);
            segment = cachedSegments[str];
            if (segment) index += str.length;
            else {
                segment = [];
                while(index < end){
                    base64VLQ.decode(aStr, index, temp);
                    value = temp.value;
                    index = temp.rest;
                    segment.push(value);
                }
                if (segment.length === 2) throw new Error('Found a source, but no line and column');
                if (segment.length === 3) throw new Error('Found a source and line, but no column');
                cachedSegments[str] = segment;
            }
            // Generated column.
            mapping.generatedColumn = previousGeneratedColumn + segment[0];
            previousGeneratedColumn = mapping.generatedColumn;
            if (segment.length > 1) {
                // Original source.
                mapping.source = previousSource + segment[1];
                previousSource += segment[1];
                // Original line.
                mapping.originalLine = previousOriginalLine + segment[2];
                previousOriginalLine = mapping.originalLine;
                // Lines are stored 0-based
                mapping.originalLine += 1;
                // Original column.
                mapping.originalColumn = previousOriginalColumn + segment[3];
                previousOriginalColumn = mapping.originalColumn;
                if (segment.length > 4) {
                    // Original name.
                    mapping.name = previousName + segment[4];
                    previousName += segment[4];
                }
            }
            generatedMappings.push(mapping);
            if (typeof mapping.originalLine === 'number') originalMappings.push(mapping);
        }
    }
    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;
    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
};
/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */ BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.
    if (aNeedle[aLineName] <= 0) throw new TypeError('Line must be greater than or equal to 1, got ' + aNeedle[aLineName]);
    if (aNeedle[aColumnName] < 0) throw new TypeError('Column must be greater than or equal to 0, got ' + aNeedle[aColumnName]);
    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
};
/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */ BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
    for(var index = 0; index < this._generatedMappings.length; ++index){
        var mapping = this._generatedMappings[index];
        // Mappings do not contain a field for the last generated columnt. We
        // can come up with an optimistic estimate, however, by assuming that
        // mappings are contiguous (i.e. given two consecutive mappings, the
        // first mapping ends where the second one starts).
        if (index + 1 < this._generatedMappings.length) {
            var nextMapping = this._generatedMappings[index + 1];
            if (mapping.generatedLine === nextMapping.generatedLine) {
                mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
                continue;
            }
        }
        // The last mapping for each line spans the entire line.
        mapping.lastGeneratedColumn = Infinity;
    }
};
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */ BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
        generatedLine: util.getArg(aArgs, 'line'),
        generatedColumn: util.getArg(aArgs, 'column')
    };
    var index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util.compareByGeneratedPositionsDeflated, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));
    if (index >= 0) {
        var mapping = this._generatedMappings[index];
        if (mapping.generatedLine === needle.generatedLine) {
            var source = util.getArg(mapping, 'source', null);
            if (source !== null) {
                source = this._sources.at(source);
                source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
            }
            var name = util.getArg(mapping, 'name', null);
            if (name !== null) name = this._names.at(name);
            return {
                source: source,
                line: util.getArg(mapping, 'originalLine', null),
                column: util.getArg(mapping, 'originalColumn', null),
                name: name
            };
        }
    }
    return {
        source: null,
        line: null,
        column: null,
        name: null
    };
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */ BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) return false;
    return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
        return sc == null;
    });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */ BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) return null;
    var index = this._findSourceIndex(aSource);
    if (index >= 0) return this.sourcesContent[index];
    var relativeSource = aSource;
    if (this.sourceRoot != null) relativeSource = util.relative(this.sourceRoot, relativeSource);
    var url;
    if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
        // XXX: file:// URIs and absolute paths lead to unexpected behavior for
        // many users. We can help them out when they expect file:// URIs to
        // behave like it would if they were running a local HTTP server. See
        // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
        var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
        if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
        if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
    }
    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) return null;
    else throw new Error('"' + relativeSource + '" is not in the SourceMap.');
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */ BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) return {
        line: null,
        column: null,
        lastColumn: null
    };
    var needle = {
        source: source,
        originalLine: util.getArg(aArgs, 'line'),
        originalColumn: util.getArg(aArgs, 'column')
    };
    var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));
    if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (mapping.source === needle.source) return {
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
    }
    return {
        line: null,
        column: null,
        lastColumn: null
    };
};
exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */ function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === 'string') sourceMap = util.parseSourceMapInput(aSourceMap);
    var version = util.getArg(sourceMap, 'version');
    var sections = util.getArg(sourceMap, 'sections');
    if (version != this._version) throw new Error('Unsupported version: ' + version);
    this._sources = new ArraySet();
    this._names = new ArraySet();
    var lastOffset = {
        line: -1,
        column: 0
    };
    this._sections = sections.map(function(s) {
        if (s.url) // The url field will require support for asynchronicity.
        // See https://github.com/mozilla/source-map/issues/16
        throw new Error('Support for url field in sections not implemented.');
        var offset = util.getArg(s, 'offset');
        var offsetLine = util.getArg(offset, 'line');
        var offsetColumn = util.getArg(offset, 'column');
        if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) throw new Error('Section offsets must be ordered and non-overlapping.');
        lastOffset = offset;
        return {
            generatedOffset: {
                // The offset fields are 0-based, but we use 1-based indices when
                // encoding/decoding from VLQ.
                generatedLine: offsetLine + 1,
                generatedColumn: offsetColumn + 1
            },
            consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
        };
    });
}
IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
/**
 * The version of the source mapping spec that we are consuming.
 */ IndexedSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */ Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
    get: function() {
        var sources = [];
        for(var i = 0; i < this._sections.length; i++)for(var j = 0; j < this._sections[i].consumer.sources.length; j++)sources.push(this._sections[i].consumer.sources[j]);
        return sources;
    }
});
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */ IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
        generatedLine: util.getArg(aArgs, 'line'),
        generatedColumn: util.getArg(aArgs, 'column')
    };
    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections, function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) return cmp;
        return needle.generatedColumn - section.generatedOffset.generatedColumn;
    });
    var section = this._sections[sectionIndex];
    if (!section) return {
        source: null,
        line: null,
        column: null,
        name: null
    };
    return section.consumer.originalPositionFor({
        line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
        column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
        bias: aArgs.bias
    });
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */ IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function(s) {
        return s.consumer.hasContentsOfAllSources();
    });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */ IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        var content = section.consumer.sourceContentFor(aSource, true);
        if (content) return content;
    }
    if (nullOnMissing) return null;
    else throw new Error('"' + aSource + '" is not in the SourceMap.');
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */ IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        // Only consider this section if the requested source is in the list of
        // sources of the consumer.
        if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) continue;
        var generatedPosition = section.consumer.generatedPositionFor(aArgs);
        if (generatedPosition) {
            var ret = {
                line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
                column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
            };
            return ret;
        }
    }
    return {
        line: null,
        column: null
    };
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */ IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for(var i = 0; i < this._sections.length; i++){
        var section = this._sections[i];
        var sectionMappings = section.consumer._generatedMappings;
        for(var j = 0; j < sectionMappings.length; j++){
            var mapping = sectionMappings[j];
            var source = section.consumer._sources.at(mapping.source);
            source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
            this._sources.add(source);
            source = this._sources.indexOf(source);
            var name = null;
            if (mapping.name) {
                name = section.consumer._names.at(mapping.name);
                this._names.add(name);
                name = this._names.indexOf(name);
            }
            // The mappings coming from the consumer for the section have
            // generated positions relative to the start of the section, so we
            // need to offset them to be relative to the start of the concatenated
            // generated file.
            var adjustedMapping = {
                source: source,
                generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
                generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
                originalLine: mapping.originalLine,
                originalColumn: mapping.originalColumn,
                name: name
            };
            this.__generatedMappings.push(adjustedMapping);
            if (typeof adjustedMapping.originalLine === 'number') this.__originalMappings.push(adjustedMapping);
        }
    }
    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
};
exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;

},{"b22324b13f72201b":"5Iq0C","129ba2b16e81db9e":"3EdLs","832bf56bf6a231e4":"98l1a","95d11d359ee56491":"V97wI","7076e0beb1aa0cfd":"2bRqr"}],"3EdLs":[function(require,module,exports,__globalThis) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;
/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */ function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
    // This function terminates when one of the following is true:
    //
    //   1. We find the exact element we are looking for.
    //
    //   2. We did not find the exact element, but we can return the index of
    //      the next-closest element.
    //
    //   3. We did not find the exact element, and there is no next-closest
    //      element than the one we are searching for, so we return -1.
    var mid = Math.floor((aHigh - aLow) / 2) + aLow;
    var cmp = aCompare(aNeedle, aHaystack[mid], true);
    if (cmp === 0) // Found the element we are looking for.
    return mid;
    else if (cmp > 0) {
        // Our needle is greater than aHaystack[mid].
        if (aHigh - mid > 1) // The element is in the upper half.
        return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
        // The exact needle element was not found in this haystack. Determine if
        // we are in termination case (3) or (2) and return the appropriate thing.
        if (aBias == exports.LEAST_UPPER_BOUND) return aHigh < aHaystack.length ? aHigh : -1;
        else return mid;
    } else {
        // Our needle is less than aHaystack[mid].
        if (mid - aLow > 1) // The element is in the lower half.
        return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
        // we are in termination case (3) or (2) and return the appropriate thing.
        if (aBias == exports.LEAST_UPPER_BOUND) return mid;
        else return aLow < 0 ? -1 : aLow;
    }
}
/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */ exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
    if (aHaystack.length === 0) return -1;
    var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare, aBias || exports.GREATEST_LOWER_BOUND);
    if (index < 0) return -1;
    // We have found either the exact element, or the next-closest element than
    // the one we are searching for. However, there may be more than one such
    // element. Make sure we always return the smallest of these.
    while(index - 1 >= 0){
        if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) break;
        --index;
    }
    return index;
};

},{}],"2bRqr":[function(require,module,exports,__globalThis) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ // It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.
/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */ function swap(ary, x, y) {
    var temp = ary[x];
    ary[x] = ary[y];
    ary[y] = temp;
}
/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */ function randomIntInRange(low, high) {
    return Math.round(low + Math.random() * (high - low));
}
/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */ function doQuickSort(ary, comparator, p, r) {
    // If our lower bound is less than our upper bound, we (1) partition the
    // array into two pieces and (2) recurse on each half. If it is not, this is
    // the empty array and our base case.
    if (p < r) {
        // (1) Partitioning.
        //
        // The partitioning chooses a pivot between `p` and `r` and moves all
        // elements that are less than or equal to the pivot to the before it, and
        // all the elements that are greater than it after it. The effect is that
        // once partition is done, the pivot is in the exact place it will be when
        // the array is put in sorted order, and it will not need to be moved
        // again. This runs in O(n) time.
        // Always choose a random pivot so that an input array which is reverse
        // sorted does not cause O(n^2) running time.
        var pivotIndex = randomIntInRange(p, r);
        var i = p - 1;
        swap(ary, pivotIndex, r);
        var pivot = ary[r];
        // Immediately after `j` is incremented in this loop, the following hold
        // true:
        //
        //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
        //
        //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
        for(var j = p; j < r; j++)if (comparator(ary[j], pivot) <= 0) {
            i += 1;
            swap(ary, i, j);
        }
        swap(ary, i + 1, j);
        var q = i + 1;
        // (2) Recurse on each half.
        doQuickSort(ary, comparator, p, q - 1);
        doQuickSort(ary, comparator, q + 1, r);
    }
}
/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */ exports.quickSort = function(ary, comparator) {
    doQuickSort(ary, comparator, 0, ary.length - 1);
};

},{}],"bArmc":[function(require,module,exports,__globalThis) {
/* -*- Mode: js; js-indent-level: 2; -*- */ /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */ var SourceMapGenerator = require("a07d2c2c4b11c39f").SourceMapGenerator;
var util = require("18d5ff036a08fa06");
// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;
// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;
// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";
/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */ function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
    this.children = [];
    this.sourceContents = {};
    this.line = aLine == null ? null : aLine;
    this.column = aColumn == null ? null : aColumn;
    this.source = aSource == null ? null : aSource;
    this.name = aName == null ? null : aName;
    this[isSourceNode] = true;
    if (aChunks != null) this.add(aChunks);
}
/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */ SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();
    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are accessed by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
        var lineContents = getNextLine();
        // The last line of a file might not have a newline.
        var newLine = getNextLine() || "";
        return lineContents + newLine;
        function getNextLine() {
            return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : undefined;
        }
    };
    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;
    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;
    aSourceMapConsumer.eachMapping(function(mapping) {
        if (lastMapping !== null) {
            // We add the code from "lastMapping" to "mapping":
            // First check if there is a new line in between.
            if (lastGeneratedLine < mapping.generatedLine) {
                // Associate first line with "lastMapping"
                addMappingWithCode(lastMapping, shiftNextLine());
                lastGeneratedLine++;
                lastGeneratedColumn = 0;
            // The remaining code is added without mapping
            } else {
                // There is no new line in between.
                // Associate the code between "lastGeneratedColumn" and
                // "mapping.generatedColumn" with "lastMapping"
                var nextLine = remainingLines[remainingLinesIndex] || '';
                var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
                remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
                lastGeneratedColumn = mapping.generatedColumn;
                addMappingWithCode(lastMapping, code);
                // No more remaining code, continue
                lastMapping = mapping;
                return;
            }
        }
        // We add the generated code until the first mapping
        // to the SourceNode without any mapping.
        // Each line is added as separate string.
        while(lastGeneratedLine < mapping.generatedLine){
            node.add(shiftNextLine());
            lastGeneratedLine++;
        }
        if (lastGeneratedColumn < mapping.generatedColumn) {
            var nextLine = remainingLines[remainingLinesIndex] || '';
            node.add(nextLine.substr(0, mapping.generatedColumn));
            remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
        }
        lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLinesIndex < remainingLines.length) {
        if (lastMapping) // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
        // and add the remaining lines without any mapping
        node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }
    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
            if (aRelativePath != null) sourceFile = util.join(aRelativePath, sourceFile);
            node.setSourceContent(sourceFile, content);
        }
    });
    return node;
    function addMappingWithCode(mapping, code) {
        if (mapping === null || mapping.source === undefined) node.add(code);
        else {
            var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
            node.add(new SourceNode(mapping.originalLine, mapping.originalColumn, source, code, mapping.name));
        }
    }
};
/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */ SourceNode.prototype.add = function SourceNode_add(aChunk) {
    if (Array.isArray(aChunk)) aChunk.forEach(function(chunk) {
        this.add(chunk);
    }, this);
    else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        if (aChunk) this.children.push(aChunk);
    } else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
    return this;
};
/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */ SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
    if (Array.isArray(aChunk)) for(var i = aChunk.length - 1; i >= 0; i--)this.prepend(aChunk[i]);
    else if (aChunk[isSourceNode] || typeof aChunk === "string") this.children.unshift(aChunk);
    else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
    return this;
};
/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */ SourceNode.prototype.walk = function SourceNode_walk(aFn) {
    var chunk;
    for(var i = 0, len = this.children.length; i < len; i++){
        chunk = this.children[i];
        if (chunk[isSourceNode]) chunk.walk(aFn);
        else if (chunk !== '') aFn(chunk, {
            source: this.source,
            line: this.line,
            column: this.column,
            name: this.name
        });
    }
};
/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */ SourceNode.prototype.join = function SourceNode_join(aSep) {
    var newChildren;
    var i;
    var len = this.children.length;
    if (len > 0) {
        newChildren = [];
        for(i = 0; i < len - 1; i++){
            newChildren.push(this.children[i]);
            newChildren.push(aSep);
        }
        newChildren.push(this.children[i]);
        this.children = newChildren;
    }
    return this;
};
/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */ SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
    var lastChild = this.children[this.children.length - 1];
    if (lastChild[isSourceNode]) lastChild.replaceRight(aPattern, aReplacement);
    else if (typeof lastChild === 'string') this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
    else this.children.push(''.replace(aPattern, aReplacement));
    return this;
};
/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */ SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
};
/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */ SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
    for(var i = 0, len = this.children.length; i < len; i++)if (this.children[i][isSourceNode]) this.children[i].walkSourceContents(aFn);
    var sources = Object.keys(this.sourceContents);
    for(var i = 0, len = sources.length; i < len; i++)aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
};
/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */ SourceNode.prototype.toString = function SourceNode_toString() {
    var str = "";
    this.walk(function(chunk) {
        str += chunk;
    });
    return str;
};
/**
 * Returns the string representation of this source node along with a source
 * map.
 */ SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
    var generated = {
        code: "",
        line: 1,
        column: 0
    };
    var map = new SourceMapGenerator(aArgs);
    var sourceMappingActive = false;
    var lastOriginalSource = null;
    var lastOriginalLine = null;
    var lastOriginalColumn = null;
    var lastOriginalName = null;
    this.walk(function(chunk, original) {
        generated.code += chunk;
        if (original.source !== null && original.line !== null && original.column !== null) {
            if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) map.addMapping({
                source: original.source,
                original: {
                    line: original.line,
                    column: original.column
                },
                generated: {
                    line: generated.line,
                    column: generated.column
                },
                name: original.name
            });
            lastOriginalSource = original.source;
            lastOriginalLine = original.line;
            lastOriginalColumn = original.column;
            lastOriginalName = original.name;
            sourceMappingActive = true;
        } else if (sourceMappingActive) {
            map.addMapping({
                generated: {
                    line: generated.line,
                    column: generated.column
                }
            });
            lastOriginalSource = null;
            sourceMappingActive = false;
        }
        for(var idx = 0, length = chunk.length; idx < length; idx++)if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
            generated.line++;
            generated.column = 0;
            // Mappings end at eol
            if (idx + 1 === length) {
                lastOriginalSource = null;
                sourceMappingActive = false;
            } else if (sourceMappingActive) map.addMapping({
                source: original.source,
                original: {
                    line: original.line,
                    column: original.column
                },
                generated: {
                    line: generated.line,
                    column: generated.column
                },
                name: original.name
            });
        } else generated.column++;
    });
    this.walkSourceContents(function(sourceFile, sourceContent) {
        map.setSourceContent(sourceFile, sourceContent);
    });
    return {
        code: generated.code,
        map: map
    };
};
exports.SourceNode = SourceNode;

},{"a07d2c2c4b11c39f":"fWPsq","18d5ff036a08fa06":"5Iq0C"}],"6wxm9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spotPescaItalia", ()=>spotPescaItalia);
parcelHelpers.export(exports, "regioniNomi", ()=>regioniNomi);
const spotPescaItalia = [
    // ================= LAZIO =================
    {
        id: "bolsena",
        regione: "lazio",
        nome: "Lago di Bolsena (\u041E\u0437\u0435\u0440\u043E \u0411\u043E\u043B\u044C\u0441\u0435\u043D\u0430)",
        tipo: "naturale",
        lat: 42.5925,
        lon: 11.9366,
        immagine: "./assets/images/bolsena.jpg",
        pesci: [
            "\u0412\u0435\u043B\u0438\u043A\u043E\u0440\u043E\u0442\u0438\u0439 \u043E\u043A\u0443\u043D\u044C (\u0411\u0430\u0441\u0441)",
            "\u041A\u043E\u0440\u0435\u0433\u043E\u043D (\u0421\u0438\u0433)",
            "\u0420\u0456\u0447\u043A\u043E\u0432\u0438\u0439 \u043E\u043A\u0443\u043D\u044C"
        ],
        info_generale: "\u041D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0435 \u0432\u0443\u043B\u043A\u0430\u043D\u0456\u0447\u043D\u0435 \u043E\u0437\u0435\u0440\u043E \u0432 \u0404\u0432\u0440\u043E\u043F\u0456. \u041E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0435 \u043D\u043E\u0432\u0438\u043C\u0438 \u0431\u0435\u0442\u043E\u043D\u043D\u0438\u043C\u0438 \u043F\u0430\u043D\u0434\u0443\u0441\u0430\u043C\u0438 \u0442\u0430 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u043C\u0438 \u043F\u0456\u0440\u0441\u0430\u043C\u0438 \u0434\u043B\u044F \u0440\u0438\u0431\u0430\u043B\u043E\u043A \u043D\u0430 \u043A\u0440\u0456\u0441\u043B\u0430\u0445-\u043A\u043E\u043B\u0456\u0441\u0430\u0445 \u0431\u0456\u043B\u044F \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u043E\u0457 \u0411\u043E\u043B\u044C\u0441\u0435\u043D\u0438.",
        curiosita: "\u0412\u043E\u0434\u0430 \u043D\u0430\u0441\u0442\u0456\u043B\u044C\u043A\u0438 \u0447\u0438\u0441\u0442\u0430, \u0449\u043E \u0432\u0432\u0430\u0436\u0430\u0454\u0442\u044C\u0441\u044F \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u043F\u0438\u0442\u043D\u043E\u044E. \u0427\u0435\u0440\u0435\u0437 \u0443\u043D\u0456\u043A\u0430\u043B\u044C\u043D\u0456 \u043F\u0456\u0434\u0432\u043E\u0434\u043D\u0456 \u0442\u0435\u0447\u0456\u0457 \u0442\u0443\u0442 \u0432\u0438\u043D\u0438\u043A\u0430\u0454 \u044F\u0432\u0438\u0449\u0435 '\u0441\u0435\u0439\u0448\u0456' (\u0440\u0430\u043F\u0442\u043E\u0432\u0435 \u043A\u043E\u043B\u0438\u0432\u0430\u043D\u043D\u044F \u0440\u0456\u0432\u043D\u044F \u0432\u043E\u0434\u0438)."
    },
    {
        id: "bracciano",
        regione: "lazio",
        nome: "Lago di Bracciano (\u041E\u0437\u0435\u0440\u043E \u0411\u0440\u0430\u0447\u0447\u0430\u043D\u043E)",
        tipo: "naturale",
        lat: 42.1211,
        lon: 12.2319,
        immagine: "./assets/images/bracciano.jpg",
        pesci: [
            "\u0406\u0442\u0430\u043B\u0456\u0439\u0441\u044C\u043A\u0430 \u0449\u0443\u043A\u0430",
            "\u041A\u043E\u0440\u0435\u0433\u043E\u043D (\u0421\u0438\u0433)",
            "\u0420\u0456\u0447\u043A\u043E\u0432\u0438\u0439 \u043E\u043A\u0443\u043D\u044C"
        ],
        info_generale: "\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0456\u0447\u043D\u0438\u0439 \u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440 \u043F\u0438\u0442\u043D\u043E\u0457 \u0432\u043E\u0434\u0438 \u0434\u043B\u044F \u0420\u0438\u043C\u0443. \u0420\u0438\u0431\u043E\u043B\u043E\u0432\u043D\u0456 \u0441\u0435\u043A\u0442\u043E\u0440\u0438 \u0431\u0456\u043B\u044F \u0410\u043D\u0433\u0443\u0456\u043B\u043B\u0430\u0440\u0438 \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0432\u0438\u0440\u0456\u0432\u043D\u044F\u043D\u0456, \u0437\u0430\u0430\u0441\u0444\u0430\u043B\u044C\u0442\u043E\u0432\u0430\u043D\u0456 \u0442\u0430 \u043F\u043E\u0437\u0431\u0430\u0432\u043B\u0435\u043D\u0456 \u0430\u0440\u0445\u0456\u0442\u0435\u043A\u0442\u0443\u0440\u043D\u0438\u0445 \u0431\u0430\u0440'\u0454\u0440\u0456\u0432.",
        curiosita: "\u0422\u0443\u0442 \u0441\u0443\u0432\u043E\u0440\u043E \u0437\u0430\u0431\u043E\u0440\u043E\u043D\u0435\u043D\u043E \u0440\u0443\u0445 \u043C\u043E\u0442\u043E\u0440\u043D\u0438\u0445 \u0447\u043E\u0432\u043D\u0456\u0432, \u0449\u043E \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0443\u0454 \u0456\u0434\u0435\u0430\u043B\u044C\u043D\u0443 \u0442\u0438\u0448\u0443. \u041D\u0430 \u0434\u043D\u0456 \u043E\u0437\u0435\u0440\u0430 \u043B\u0435\u0436\u0438\u0442\u044C \u043D\u0430\u0439\u0434\u0430\u0432\u043D\u0456\u0448\u0435 \u0432 \u0404\u0432\u0440\u043E\u043F\u0456 neo\u043B\u0456\u0442\u0438\u0447\u043D\u0435 \u043A\u0430\u043D\u043E\u0435."
    },
    {
        id: "albano",
        regione: "lazio",
        nome: "Lago Albano (\u041E\u0437\u0435\u0440\u043E \u0410\u043B\u044C\u0431\u0430\u043D\u043E - \u041A\u0430\u0441\u0442\u0435\u043B\u043B\u0456 \u0420\u043E\u043C\u0430\u043D\u0456)",
        tipo: "naturale",
        lat: 41.7483,
        lon: 12.6642,
        immagine: "./assets/images/albano.jpg",
        pesci: [
            "\u0427\u043E\u0440\u043D\u0438\u0439 \u0431\u0430\u0441\u0441",
            "\u041A\u043E\u0440\u043E\u043F \u0420\u0435\u0434\u0436\u0438\u043D\u0430",
            "\u0420\u0430\u0434\u0443\u0436\u043D\u0430 \u0444\u043E\u0440\u0435\u043B\u044C"
        ],
        info_generale: "\u0413\u043B\u0438\u0431\u043E\u043A\u0435 \u0432\u0443\u043B\u043A\u0430\u043D\u0456\u0447\u043D\u0435 \u043E\u0437\u0435\u0440\u043E. \u0411\u0435\u0440\u0435\u0433\u043E\u0432\u0430 \u043B\u0456\u043D\u0456\u044F \u0432\u0437\u0434\u043E\u0432\u0436 \u0433\u043E\u043B\u043E\u0432\u043D\u043E\u0457 \u0430\u043B\u0435\u0457 \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0430 \u0434\u0435\u0440\u0435\u0432'\u044F\u043D\u0438\u043C\u0438 \u0430\u0434\u0430\u043F\u0442\u043E\u0432\u0430\u043D\u0438\u043C\u0438 \u043D\u0430\u0441\u0442\u0438\u043B\u0430\u043C\u0438 \u0437 \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0438\u043C\u0438 \u043E\u0433\u043E\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F\u043C\u0438.",
        curiosita: "\u041D\u0430 \u0431\u0435\u0440\u0435\u0437\u0456 \u0446\u044C\u043E\u0433\u043E \u043E\u0437\u0435\u0440\u0430 \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0430 \u043B\u0456\u0442\u043D\u044F \u043F\u0430\u043F\u0441\u044C\u043A\u0430 \u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0446\u0456\u044F \u041A\u0430\u0441\u0442\u0435\u043B\u044C-\u0413\u0430\u043D\u0434\u043E\u043B\u044C\u0444\u043E, \u044F\u043A\u0430 \u0432\u0438\u0441\u043E\u0447\u0456\u0454 \u043F\u0440\u044F\u043C\u043E \u043D\u0430\u0434 \u0440\u0438\u0431\u0430\u043B\u044C\u0441\u044C\u043A\u0438\u043C\u0438 \u0441\u0435\u043A\u0442\u043E\u0440\u0430\u043C\u0438."
    },
    {
        id: "colline",
        regione: "lazio",
        nome: "Laghi delle Colline (\u041E\u0437\u0435\u0440\u0430 \u0427\u0435\u0437\u0430\u043D\u043E - \u0420\u0438\u043C)",
        tipo: "privato",
        lat: 42.0315,
        lon: 12.3242,
        immagine: "./assets/images/colline.jpg",
        pesci: [
            "\u0420\u0430\u0434\u0443\u0436\u043D\u0430 \u0444\u043E\u0440\u0435\u043B\u044C",
            "\u0414\u0437\u0435\u0440\u043A\u0430\u043B\u044C\u043D\u0438\u0439 \u043A\u043E\u0440\u043E\u043F",
            "\u041E\u0441\u0435\u0442\u0435\u0440"
        ],
        info_generale: "\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0438\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 \u0437 \u043F\u043B\u043E\u0441\u043A\u043E\u044E \u0446\u0435\u043C\u0435\u043D\u0442\u043E\u0432\u0430\u043D\u043E\u044E \u0431\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u044E \u043B\u0456\u043D\u0456\u0454\u044E \u0442\u0430 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u043C\u0438 \u043F\u0456\u0434'\u0457\u0437\u0434\u0430\u043C\u0438 \u0431\u0435\u0437 \u0441\u0445\u043E\u0434\u0438\u043D\u043E\u043A \u0434\u043B\u044F \u043A\u0440\u0456\u0441\u0435\u043B-\u043A\u043E\u043B\u0456\u0441.",
        curiosita: "\u0422\u0443\u0442 \u0434\u0456\u0454 \u0441\u0443\u0432\u043E\u0440\u0435 \u0456\u043D\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043E No-Kill, \u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B \u0437\u0430\u0432\u0436\u0434\u0438 \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u0454 \u0437 \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u043D\u044F\u043C \u043D\u0430 \u0437\u0430\u0430\u0441\u0444\u0430\u043B\u044C\u0442\u043E\u0432\u0430\u043D\u0438\u0445 \u043F\u043E\u043C\u043E\u0441\u0442\u0430\u0445."
    },
    {
        id: "pirgo_civitavecchia",
        regione: "lazio",
        nome: "Scogliera del Pirgo (\u0421\u043A\u0435\u043B\u0456 \u041F\u0456\u0440\u0433\u043E - \u0427\u0456\u0432\u0456\u0442\u0430\u0432\u0435\u043A\u043A'\u044F)",
        tipo: "costa",
        lat: 42.0888,
        lon: 11.7952,
        immagine: "./assets/images/pirgo_civitavecchia.jpg",
        pesci: [
            "\u0412\u0435\u043B\u0438\u043A\u0438\u0439 \u0441\u0430\u0440\u0433",
            "\u041B\u0430\u0432\u0440\u0430\u043A (\u0421\u043F\u0456\u0433\u043E\u043B\u0430)",
            "\u041C\u0443\u0440\u0435\u043D\u0430"
        ],
        info_generale: "\u0413\u043B\u0438\u0431\u043E\u043A\u043E\u0432\u043E\u0434\u043D\u0430 \u0448\u0442\u0443\u0447\u043D\u0430 \u0441\u043C\u0443\u0433\u0430 \u0441\u043A\u0435\u043B\u044C \u043D\u0430\u0432\u043A\u043E\u043B\u043E \u0456\u0441\u0442\u043E\u0440\u0438\u0447\u043D\u043E\u0457 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0438. \u041F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0437\u0430\u0430\u0441\u0444\u0430\u043B\u044C\u0442\u043E\u0432\u0430\u043D\u0430 \u0442\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0434\u043B\u044F \u043A\u0440\u0456\u0441\u0435\u043B-\u043A\u043E\u043B\u0456\u0441.",
        curiosita: "\u0422\u0435\u043E\u0440\u0435\u0442\u0438\u0447\u043D\u043E \u0456 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u043D\u043E \u0432\u0437\u0438\u043C\u043A\u0443 \u0446\u0435 \u043D\u0430\u0439\u043A\u0440\u0430\u0449\u0435 \u043C\u0456\u0441\u0446\u0435: \u0437\u0438\u043C\u043E\u0432\u0456 \u0448\u0442\u043E\u0440\u043C\u0438 \u0432\u0438\u043C\u0438\u0432\u0430\u044E\u0442\u044C \u0431\u0430\u0433\u0430\u0442\u043E \u043A\u043E\u0440\u043C\u0443 \u0437\u0456 \u0441\u043A\u0435\u043B\u044C, \u043F\u0440\u0438\u0432\u0430\u0431\u043B\u044E\u044E\u0447\u0438 \u0433\u0456\u0433\u0430\u043D\u0442\u0441\u044C\u043A\u0438\u0445 \u043B\u0430\u0432\u0440\u0430\u043A\u0456\u0432 \u0442\u0430 \u0441\u0430\u0440\u0433\u0456\u0432, \u043A\u043E\u043B\u0438 \u043D\u0430 \u0443\u0437\u0431\u0435\u0440\u0435\u0436\u0436\u0456 \u043D\u0435\u043C\u0430\u0454 \u0442\u0443\u0440\u0438\u0441\u0442\u0456\u0432."
    },
    {
        id: "santa_severa",
        regione: "lazio",
        nome: "Spiaggia del Castello (\u041F\u043B\u044F\u0436 \u0431\u0456\u043B\u044F \u0417\u0430\u043C\u043A\u0443 - \u0421\u0430\u043D\u0442\u0430-\u0421\u0435vera)",
        tipo: "costa",
        lat: 42.0161,
        lon: 11.9512,
        immagine: "./assets/images/santa_severa.jpg",
        pesci: [
            "\u041C\u043E\u0440\u043C\u043E\u0440",
            "\u0414\u043E\u0440\u0430\u0434\u0430 (\u041E\u0440\u0430\u0442\u0430)",
            "\u041B\u0430\u0432\u0440\u0430\u043A"
        ],
        info_generale: "\u041C\u0430\u043B\u044C\u043E\u0432\u043D\u0438\u0447\u0438\u0439 \u043F\u043B\u044F\u0436 \u0431\u0456\u043B\u044F \u043F\u0456\u0434\u043D\u0456\u0436\u0436\u044F \u0441\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0432\u0456\u0447\u043D\u043E\u0433\u043E \u0437\u0430\u043C\u043A\u0443. \u041E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0438\u0439 \u0431\u0435\u0442\u043E\u043D\u043D\u0438\u043C \u043F\u0430\u043D\u0434\u0443\u0441\u043E\u043C, \u044F\u043A\u0438\u0439 \u0432\u0435\u0434\u0435 \u043F\u0440\u044F\u043C\u043E \u0434\u043E \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u043E\u0457 \u0437\u043E\u043D\u0438 \u043B\u043E\u0432\u0443.",
        curiosita: "\u0412\u0437\u0438\u043C\u043A\u0443 \u0442\u0443\u0442 \u0432\u0456\u0434\u043A\u0440\u0438\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u0456\u0434\u0435\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u0435\u0437\u043E\u043D \u0434\u043B\u044F \u0441\u0435\u0440\u0444\u043A\u0430\u0441\u0442\u0438\u043D\u0433\u0443: \u0437\u0430 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u043E\u0441\u0442\u0456 bagnanti \u043C\u043E\u0436\u043D\u0430 \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u043E \u0440\u0438\u0431\u0430\u043B\u0438\u0442\u0438 \u043D\u0430 \u0432\u0435\u043B\u0438\u043A\u0438\u0445 \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0456\u044F\u0445 \u0443 \u0431\u0443\u0440\u0445\u043B\u0438\u0432\u043E\u043C\u0443 \u043C\u043E\u0440\u0456."
    },
    {
        id: "foce_tevere",
        regione: "lazio",
        nome: "Foce del Tevere (\u0413\u0438\u0440\u043B\u043E \u0422\u0456\u0431\u0440\u0443 - \u041E\u0441\u0442\u0456\u044F)",
        tipo: "costa",
        lat: 41.7382,
        lon: 12.221,
        immagine: "./assets/images/foce_tevere.jpg",
        pesci: [
            "\u0413\u0456\u0433\u0430\u043D\u0442\u0441\u044C\u043A\u0438\u0439 \u043B\u0430\u0432\u0440\u0430\u043A",
            "\u041A\u0435\u0444\u0430\u043B\u044C",
            "\u041B\u0443\u0444\u0430\u0440"
        ],
        info_generale: "\u0422\u043E\u0447\u043A\u0430 \u0437\u0443\u0441\u0442\u0440\u0456\u0447\u0456 \u0440\u0456\u0447\u043A\u0438 \u0442\u0430 \u043C\u043E\u0440\u044F \u0437 \u043F\u043E\u0440\u0442\u043E\u0432\u0438\u043C\u0438 \u0446\u0435\u043C\u0435\u043D\u0442\u043D\u0438\u043C\u0438 \u043F\u0456\u0440\u0441\u0430\u043C\u0438 \u041E\u0441\u0442\u0456\u0457, \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0438\u043C\u0438 \u0434\u043B\u044F \u0440\u0438\u0431\u0430\u043B\u043E\u043A \u0437 \u0456\u043D\u0432\u0430\u043B\u0456\u0434\u043D\u0456\u0441\u0442\u044E.",
        curiosita: "\u0417\u0438\u043C\u043E\u0432\u0430 \u0440\u0438\u0431\u043E\u043B\u043E\u0432\u043B\u044F \u0442\u0443\u0442 \u043B\u0435\u0433\u0435\u043D\u0434\u0430\u0440\u043D\u0430: \u043F\u0440\u0456\u0441\u043D\u0430 \u0432\u043E\u0434\u0430 \u0422\u0456\u0431\u0440\u0443 \u043F\u0456\u0441\u043B\u044F \u0434\u043E\u0449\u0456\u0432 \u043D\u0435\u0441\u0435 \u0431\u0430\u0433\u0430\u0442\u043E \u043E\u0440\u0433\u0430\u043D\u0456\u043A\u0438 \u0432 \u043C\u043E\u0440\u0435, \u0441\u0442\u0432\u043E\u0440\u044E\u044E\u0447\u0438 \u0456\u0434\u0435\u0430\u043B\u044C\u043D\u0443 \u043A\u0430\u043B\u0430\u043C\u0443\u0442\u044C \u0434\u043B\u044F \u043F\u043E\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u043D\u0430 \u0432\u0435\u043B\u0438\u0447\u0435\u0437\u043D\u0438\u0445 Spigole \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u0431\u043E\u043B\u043E\u043D\u044C\u0454\u0437\u0435."
    },
    // ================= LOMBARDIA =================
    {
        id: "pozzolo_mincio",
        regione: "lombardia",
        nome: "Fiume Mincio (\u041F\u043E\u0446\u0446\u043E\u043B\u043E-\u0441\u0443\u043B\u044C-\u041C\u0456\u043D\u0447\u0456\u043E - \u041C\u0430\u043D\u0442\u0443\u044F)",
        tipo: "naturale",
        lat: 45.2215,
        lon: 10.7142,
        immagine: "./assets/images/pozzolo_mincio.jpg",
        pesci: [
            "\u041A\u043E\u0440\u043E\u043F",
            "\u0412\u0443\u0441\u0430\u0447",
            "\u0429\u0443\u043A\u0430"
        ],
        info_generale: "\u0417\u0430\u043F\u043E\u0432\u0456\u0434\u043D\u0430 \u0440\u0438\u0431\u0430\u043B\u044C\u0441\u044C\u043A\u0430 \u0437\u043E\u043D\u0430 \u0437 \u0434\u0435\u0440\u0435\u0432'\u044F\u043D\u0438\u043C\u0438 \u043F\u0440\u0438\u0447\u0430\u043B\u0430\u043C\u0438, \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0438\u043C\u0438 \u0431\u0456\u0447\u043D\u0438\u043C\u0438 \u0437\u0430\u0445\u0438\u0441\u043D\u0438\u043C\u0438 \u0431\u043E\u0440\u0442\u0438\u043A\u0430\u043C\u0438 \u0434\u043B\u044F \u043A\u0440\u0456\u0441\u0435\u043B-\u043A\u043E\u043B\u0456\u0441.",
        curiosita: "\u0426\u0435\u0439 \u0431\u0435\u0437\u0431\u0430\u0440'\u0454\u0440\u043D\u0438\u0439 \u0441\u043F\u043E\u0442 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043E \u0443 \u0441\u043F\u0456\u0432\u043F\u0440\u0430\u0446\u0456 \u0437 \u041F\u0430\u0440\u043A\u043E\u043C \u041C\u0456\u043D\u0447\u0456\u043E \u0434\u043B\u044F \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u0438\u0437\u0430\u0446\u0456\u0457 \u043F\u0430\u0440\u0430\u043B\u0456\u043C\u043F\u0456\u0439\u0441\u044C\u043A\u043E\u0433\u043E \u0441\u043F\u043E\u0440\u0442\u0443."
    },
    {
        id: "lago_liscate",
        regione: "lombardia",
        nome: "Lago di Liscate (\u041E\u0437\u0435\u0440\u043E \u041B\u0456\u0441\u043A\u0430\u0442\u0435 - \u041C\u0456\u043B\u0430\u043D)",
        tipo: "privato",
        lat: 45.4791,
        lon: 9.4124,
        immagine: "./assets/images/lago_liscate.jpg",
        pesci: [
            "\u0420\u0430\u0434\u0443\u0436\u043D\u0430 \u0444\u043E\u0440\u0435\u043B\u044C",
            "\u041A\u043E\u0440\u043E\u043F",
            "\u0411\u0456\u043B\u0438\u0439 \u0430\u043C\u0443\u0440"
        ],
        info_generale: "\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0430 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0437 \u0430\u0441\u0444\u0430\u043B\u044C\u0442\u043E\u0432\u0430\u043D\u0438\u043C \u043F\u0456\u0434'\u0457\u0437\u0434\u043E\u043C, \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u043E\u044E \u0442\u0430 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u043C\u0438 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430\u043C\u0438 \u0434\u043B\u044F \u0456\u043D\u0432\u0430\u043B\u0456\u0434\u043D\u0438\u0445 \u0432\u0456\u0437\u043A\u0456\u0432.",
        curiosita: "\u0412\u043E\u0434\u043E\u0439\u043C\u0430 \u0434\u0443\u0436\u0435 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0430 \u0441\u0435\u0440\u0435\u0434 \u0440\u0438\u0431\u0430\u043B\u043E\u043A-\u0441\u043F\u043E\u0440\u0442\u0441\u043C\u0435\u043D\u0456\u0432 \u0447\u0435\u0440\u0435\u0437 \u0432\u0438\u0441\u043E\u043A\u0443 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C \u043A\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u0432\u0435\u043B\u0438\u043A\u0438\u0445 \u043E\u0441\u0435\u0442\u0440\u0456\u0432."
    },
    {
        id: "gabbiani_varese",
        regione: "lombardia",
        nome: "Nuovo Lago dei Gabbiani (\u0421\u043E\u043C\u043C\u0430-\u041B\u043E\u043C\u0431\u0430\u0440\u0434\u043E)",
        tipo: "privato",
        lat: 45.6694,
        lon: 8.6851,
        immagine: "./assets/images/gabbiani_varese.jpg",
        pesci: [
            "\u0424\u043E\u0440\u0435\u043B\u044C",
            "\u0414\u0437\u0435\u0440\u043A\u0430\u043B\u044C\u043D\u0438\u0439 \u043A\u043E\u0440\u043E\u043F",
            "\u0427\u043E\u0440\u043D\u0438\u0439 \u0441\u043E\u043C\u0438\u043A"
        ],
        info_generale: "Lago \u0437\u0430\u0440\u0438\u0431\u043B\u0435\u043D\u0435 \u0432\u0435\u043B\u0438\u043A\u043E\u044E \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044E \u0442\u0440\u043E\u0444\u0435\u0439\u043D\u043E\u0457 \u0444\u043E\u0440\u0435\u043B\u0456, \u0437 \u043F\u043E\u043B\u043E\u0433\u0438\u043C\u0438 \u0431\u0435\u0440\u0435\u0433\u0430\u043C\u0438 \u0431\u0435\u0437 \u0441\u0445\u043E\u0434\u0438\u043D\u043E\u043A.",
        curiosita: "\u0420\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0435 \u0432 \u043C\u0435\u0436\u0430\u0445 \u043F\u0440\u0438\u0440\u043E\u0434\u043D\u043E\u0433\u043E \u043F\u0430\u0440\u043A\u0443 \u0422\u0456\u0447\u0456\u043D\u043E, \u0449\u043E \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0443\u0454 \u043C\u0430\u043B\u044C\u043E\u0432\u043D\u0438\u0447\u0438\u0439 \u043A\u0440\u0430\u0454\u0432\u0438\u0434 \u043F\u0456\u0434 \u0447\u0430\u0441 \u0440\u0438\u0431\u043E\u043B\u043E\u0432\u043B\u0456."
    },
    // ================= TOSCANA =================
    {
        id: "bilancino_access",
        regione: "toscana",
        nome: "Lago di Bilancino (\u041E\u0437\u0435\u0440\u043E \u0411\u0456\u043B\u0430\u043D\u0447\u0456\u043D\u043E - \u041C\u0443\u0434\u0436\u0435\u043B\u043B\u043E)",
        tipo: "naturale",
        lat: 43.9912,
        lon: 11.2185,
        immagine: "./assets/images/bilancino_access.jpg",
        pesci: [
            "\u0429\u0443\u043A\u0430",
            "\u0412\u0435\u043B\u0438\u043A\u043E\u0440\u043E\u0442\u0438\u0439 \u043E\u043A\u0443\u043D\u044C (\u0411\u0430\u0441\u0441)",
            "\u041A\u043E\u0440\u043E\u043F"
        ],
        info_generale: "\u0417\u043E\u043D\u0438 \u0437 \u0442\u0432\u0435\u0440\u0434\u0438\u043C \u043F\u043E\u043A\u0440\u0438\u0442\u0442\u044F\u043C \u043D\u0430 \u0431\u0435\u0440\u0435\u0437\u0456 \u0432\u0435\u043B\u0438\u043A\u043E\u0433\u043E \u043E\u0437\u0435\u0440\u0430, \u044F\u043A\u0456 \u0433\u0430\u0440\u0430\u043D\u0442\u0443\u044E\u0442\u044C \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0438\u0439 \u0434\u0430\u043B\u0435\u043A\u0438\u0439 \u0437\u0430\u043A\u0438\u0434 \u0432\u0443\u0434\u043A\u0438 \u0431\u0435\u0437 \u0431\u0430\u0440'\u0454\u0440\u0456\u0432.",
        curiosita: "\u0420\u0456\u0432\u0435\u043D\u044C \u0432\u043E\u0434\u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044E\u0454\u0442\u044C\u0441\u044F \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E, \u0442\u043E\u043C\u0443 \u043F\u043E\u043C\u043E\u0441\u0442\u0438 \u0437\u0430\u0432\u0436\u0434\u0438 \u0437\u0430\u043B\u0438\u0448\u0430\u044E\u0442\u044C\u0441\u044F \u0441\u0443\u0445\u0438\u043C\u0438 \u0442\u0430 \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0438\u043C\u0438."
    },
    {
        id: "arno_firenze",
        regione: "toscana",
        nome: "Fiume Arno (\u0420\u0456\u0447\u043A\u0430 \u0410\u0440\u043D\u043E - \u0424\u043B\u043E\u0440\u0435\u043D\u0446\u0456\u044F)",
        tipo: "naturale",
        lat: 43.7661,
        lon: 11.2785,
        immagine: "./assets/images/arno_firenze.jpg",
        pesci: [
            "\u0404\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u044C\u043A\u0438\u0439 \u0441\u043E\u043C",
            "\u041A\u043E\u0440\u043E\u043F",
            "\u041A\u0430\u0440\u0430\u0441\u044C"
        ],
        info_generale: "\u0414\u0456\u043B\u044F\u043D\u043A\u0430 \u0440\u0456\u0447\u043A\u0438 \u0432\u0437\u0434\u043E\u0432\u0436 Lungarno Aldo Moro, \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0456\u043D\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u0430 \u0442\u0430 \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0430 \u0434\u043B\u044F \u0437\u043C\u0430\u0433\u0430\u043D\u044C \u043B\u044E\u0434\u0435\u0439 \u0437 \u0456\u043D\u0432\u0430\u043B\u0456\u0434\u043D\u0456\u0441\u0442\u044E.",
        curiosita: "\u0422\u0443\u0442 \u043F\u0440\u043E\u0432\u043E\u0434\u044F\u0442\u044C\u0441\u044F \u043E\u0444\u0456\u0446\u0456\u0439\u043D\u0456 \u0435\u0442\u0430\u043F\u0438 \u043F\u0456\u0434 \u0435\u0433\u0456\u0434\u043E\u044E Arcipesca Toscana \u0434\u043B\u044F \u043C\u043E\u043B\u043E\u0434\u0456 \u0442\u0430 \u043F\u0430\u0440\u0430\u043B\u0456\u043C\u043F\u0456\u0439\u0446\u0456\u0432."
    },
    {
        id: "laghetto_fiorentino",
        regione: "toscana",
        nome: "Fosso Reale (\u041A\u0430\u043D\u0430\u043B \u041A\u0430\u043C\u043F\u0456-\u0411\u0456\u0437\u0435\u043D\u0446\u0456\u043E)",
        tipo: "privato",
        lat: 43.8241,
        lon: 11.1315,
        immagine: "./assets/images/laghetto_fiorentino.jpg",
        pesci: [
            "\u041A\u0430\u0440\u0430\u0441\u044C",
            "\u041A\u043E\u0440\u043E\u043F",
            "\u0421\u043E\u043C\u0438\u043A"
        ],
        info_generale: "\u0428\u0442\u0443\u0447\u043D\u0430 \u0432\u043E\u0434\u043E\u0439\u043C\u0430 \u0440\u0438\u0431\u043E\u043B\u043E\u0432\u043D\u043E\u0433\u043E \u0442\u043E\u0432\u0430\u0440\u0438\u0441\u0442\u0432\u0430, \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0430 \u043F\u043B\u043E\u0441\u043A\u0438\u043C\u0438 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430\u043C\u0438 \u0437 \u043F\u0430\u043D\u0434\u0443\u0441\u0430\u043C\u0438 \u0442\u0430 \u0437\u0430\u0445\u0438\u0441\u043D\u0438\u043C\u0438 \u043F\u043E\u0440\u0443\u0447\u043D\u044F\u043C\u0438.",
        curiosita: "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E \u043F\u0440\u0438\u0439\u043C\u0430\u0454 \u0435\u0442\u0430\u043F\u0438 \u0456\u0442\u0430\u043B\u0456\u0439\u0441\u044C\u043A\u043E\u0433\u043E \u043F\u0430\u0440\u0430\u043B\u0456\u043C\u043F\u0456\u0439\u0441\u044C\u043A\u043E\u0433\u043E \u0447\u0435\u043C\u043F\u0456\u043E\u043D\u0430\u0442\u0443 \u0437 \u0434\u043E\u043D\u043D\u043E\u0457 \u043B\u043E\u0432\u043B\u0456 \u0440\u0438\u0431\u0438."
    },
    // ================= VENETO =================
    {
        id: "brenta_solagna",
        regione: "veneto",
        nome: "Fiume Brenta (\u0420\u0456\u0447\u043A\u0430 \u0411\u0440\u0435\u043D\u0442\u0430 - \u0412\u0456\u0447\u0435\u043D\u0446\u0430)",
        tipo: "naturale",
        lat: 45.8123,
        lon: 11.7154,
        immagine: "./assets/images/brenta_solagna.jpg",
        pesci: [
            "\u041C\u0430\u0440\u043C\u0443\u0440\u043E\u0432\u0430 \u0444\u043E\u0440\u0435\u043B\u044C",
            "\u0425\u0430\u0440\u0456\u0443\u0441",
            "\u0420\u0430\u0434\u0443\u0436\u043D\u0430 \u0444\u043E\u0440\u0435\u043B\u044C"
        ],
        info_generale: "\u041F\u0435\u0440\u0448\u0430 \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0431\u0435\u0437\u0431\u0430\u0440'\u0454\u0440\u043D\u0430 \u0440\u0456\u0447\u043A\u043E\u0432\u0430 \u0437\u043E\u043D\u0430 \u0432 \u0440\u0435\u0433\u0456\u043E\u043D\u0456. \u0420\u0456\u0432\u043D\u0435 \u0431\u0435\u0442\u043E\u043D\u043D\u0435 \u043F\u043E\u043A\u0440\u0438\u0442\u0442\u044F \u0442\u0430 \u0441\u0442\u0430\u043B\u0435\u0432\u0456 \u0437\u0430\u0445\u0438\u0441\u043D\u0456 \u0431\u0430\u0440'\u0454\u0440\u0438 \u0431\u0456\u043B\u044F \u0441\u0430\u043C\u043E\u0457 \u0432\u043E\u0434\u0438.",
        curiosita: "\u041F\u0440\u043E\u0435\u043A\u0442 \u0444\u0456\u043D\u0430\u043D\u0441\u0443\u0432\u0430\u0432\u0441\u044F Enel \u0434\u043B\u044F \u0456\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0456\u0457 \u0441\u043F\u043E\u0440\u0442\u0441\u043C\u0435\u043D\u0456\u0432 \u0437 \u0456\u043D\u0432\u0430\u043B\u0456\u0434\u043D\u0456\u0441\u0442\u044E \u0443 \u0440\u0438\u0431\u043E\u043B\u043E\u0432\u043B\u044E \u043D\u0430\u0445\u043B\u0438\u0441\u0442\u043E\u043C."
    },
    {
        id: "revine_lakes",
        regione: "veneto",
        nome: "Laghi di Revine (\u041E\u0437\u0435\u0440\u0430 \u0420\u0435\u0432\u0456\u043D\u0435 - \u0422\u0440\u0435\u0432\u0456\u0437\u043E)",
        tipo: "naturale",
        lat: 45.9872,
        lon: 12.2241,
        immagine: "./assets/images/revine_lakes.jpg",
        pesci: [
            "\u0429\u0443\u043A\u0430",
            "\u041B\u0438\u043D\u044C",
            "\u041E\u043A\u0443\u043D\u044C"
        ],
        info_generale: "\u041C\u0430\u043B\u044C\u043E\u0432\u043D\u0438\u0447\u0456 \u043E\u0437\u0435\u0440\u0430, \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0456 \u0434\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0443 \u0441\u043E\u0446\u0456\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0442\u0430 \u0456\u043D\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u043E\u0433\u043E \u0442\u0443\u0440\u0438\u0437\u043C\u0443 \u0412\u0435\u043D\u0435\u0442\u043E. \u041F\u0440\u043E\u043F\u043E\u043D\u0443\u044E\u0442\u044C \u0430\u0434\u0430\u043F\u0442\u043E\u0432\u0430\u043D\u0456 \u0434\u0435\u0440\u0435\u0432'\u044F\u043D\u0456 \u043F\u0456\u0440\u0441\u0438.",
        curiosita: "\u0422\u0443\u0442 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E \u043F\u0440\u043E\u0432\u043E\u0434\u044F\u0442\u044C\u0441\u044F \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0456 \u0435\u043A\u043E\u043B\u043E\u0433\u0456\u0447\u043D\u0456 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0456\u0457 \u0442\u0430 \u0456\u043D\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u0456 \u0437\u043C\u0430\u0433\u0430\u043D\u043D\u044F \u0434\u043B\u044F \u043B\u044E\u0434\u0435\u0439 \u0437 \u0456\u043D\u0432\u0430\u043B\u0456\u0434\u043D\u0456\u0441\u0442\u044E."
    },
    {
        id: "canal_bianco",
        regione: "veneto",
        nome: "Canal Bianco (\u041A\u0430\u043D\u0430\u043B \u0411'\u044F\u043D\u043A\u043E - \u0420\u043E\u0432\u0456\u0433\u043E)",
        tipo: "naturale",
        lat: 45.0512,
        lon: 11.7845,
        immagine: "./assets/images/canal_bianco.jpg",
        pesci: [
            "\u041A\u043E\u0440\u043E\u043F",
            "\u041B\u044F\u0449",
            "\u0410\u043C\u0443\u0440"
        ],
        info_generale: "\u041E\u0434\u0438\u043D \u0437 \u043D\u0430\u0439\u043A\u0440\u0430\u0449\u0438\u0445 \u043A\u0430\u043D\u0430\u043B\u0456\u0432 \u0434\u043B\u044F \u0444\u0456\u0434\u0435\u0440\u043D\u043E\u0457 \u043B\u043E\u0432\u043B\u0456 \u0432 \u0404\u0432\u0440\u043E\u043F\u0456, \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0438\u0439 \u043C\u043E\u043D\u043E\u043B\u0456\u0442\u043D\u0438\u043C \u0431\u0435\u0442\u043E\u043D\u043D\u0438\u043C \u0431\u0435\u0440\u0435\u0433\u043E\u043C \u0437 \u043F\u0456\u0434'\u0457\u0437\u0434\u043E\u043C \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u0456\u0432 \u0440\u0438\u0431\u0430\u043B\u043E\u043A-\u0456\u043D\u0432\u0430\u043B\u0456\u0434\u0456\u0432.",
        curiosita: "\u0426\u044F \u0432\u043E\u0434\u043E\u0439\u043C\u0430 \u0432\u0432\u0430\u0436\u0430\u0454\u0442\u044C\u0441\u044F \u0441\u0442\u0430\u0434\u0456\u043E\u043D\u043E\u043C \u0440\u0438\u0431\u043E\u043B\u043E\u0432\u043D\u043E\u0433\u043E \u0441\u043F\u043E\u0440\u0442\u0443 \u0447\u0435\u0440\u0435\u0437 \u0456\u0434\u0435\u0430\u043B\u044C\u043D\u043E \u043F\u0440\u044F\u043C\u0443 \u0431\u0435\u0440\u0435\u0433\u043E\u0432\u0443 \u043B\u0456\u043D\u0456\u044E \u043D\u0430 \u043A\u0456\u043B\u044C\u043A\u0430 \u043A\u0456\u043B\u043E\u043C\u0435\u0442\u0440\u0456\u0432."
    },
    // ================= PIEMONTE =================
    {
        id: "san_vito_roddi",
        regione: "piemonte",
        nome: "Lago San Vito (\u041E\u0437\u0435ro \u0421\u0430\u043D-\u0412\u0456\u0442\u043E - \u041A\u0443\u043D\u0435\u043E)",
        tipo: "privato",
        lat: 44.6811,
        lon: 7.9742,
        immagine: "./assets/images/san_vito_roddi.jpg",
        pesci: [
            "\u0413\u0456\u0433\u0430\u043D\u0442\u0441\u044C\u043A\u0438\u0439 \u043A\u043E\u0440\u043E\u043F",
            "\u0410\u043C\u0443\u0440",
            "\u041E\u0441\u0435\u0442\u0435\u0440"
        ],
        info_generale: "\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u0438\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441, \u0432\u0456\u0434\u043E\u043C\u0438\u0439 \u043D\u0430\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u043C \u0456\u043D\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u0438\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u043C 'Pesc-Abili'. \u0411\u0435\u0440\u0435\u0433\u0438 \u043C\u0430\u044E\u0442\u044C \u043F\u0440\u043E\u0442\u0438\u043A\u043E\u0432\u0437\u043A\u0435 \u043F\u043E\u043A\u0440\u0438\u0442\u0442\u044F.",
        curiosita: "\u041C\u0456\u0441\u0442\u043A\u0438 \u0440\u043E\u0437\u0440\u043E\u0431\u043B\u0435\u043D\u0456 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u043E \u043F\u0456\u0434 \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u0438 \u043F\u0430\u0440\u0430\u043B\u0456\u043C\u043F\u0456\u0439\u0441\u044C\u043A\u0438\u0445 \u043A\u0440\u0456\u0441\u0435\u043B \u0434\u043B\u044F \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043A\u0430\u0440\u043F\u0444\u0456\u0448\u0438\u043D\u0433\u0443."
    },
    {
        id: "tanaro_asti",
        regione: "piemonte",
        nome: "Fiume Tanaro (\u0420\u0456\u0447\u043A\u0430 \u0422\u0430\u043D\u0430\u0440\u043E - \u0410\u0441\u0442\u0456)",
        tipo: "naturale",
        lat: 44.8912,
        lon: 8.2154,
        immagine: "./assets/images/tanaro_asti.jpg",
        pesci: [
            "\u0412\u0443\u0441\u0430\u0447",
            "\u0413\u043E\u043B\u043E\u0432\u0435\u043D\u044C",
            "\u0421\u043E\u043C"
        ],
        info_generale: "\u0420\u0456\u0447\u043A\u043E\u0432\u0430 \u0437\u043E\u043D\u0430 \u0437 mono\u043B\u0456\u0442\u043D\u0438\u043C\u0438 \u0431\u0435\u0442\u043E\u043D\u043D\u0438\u043C\u0438 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430\u043C\u0438, \u0449\u043E \u0456\u043D\u0442\u0435\u0433\u0440\u043E\u0432\u0430\u043D\u0456 \u0432 \u043C\u0456\u0441\u044C\u043A\u0438\u0439 \u043F\u0430\u0440\u043A \u0456 \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0456 \u0437 \u0430\u0441\u0444\u0430\u043B\u044C\u0442\u043E\u0432\u0430\u043D\u0438\u0445 \u043F\u0430\u0440\u043A\u043E\u0432\u043E\u043A.",
        curiosita: "\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0438 \u0437\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u0456 \u043F\u0456\u0434 \u043E\u0441\u043E\u0431\u043B\u0438\u0432\u0438\u043C \u043A\u0443\u0442\u043E\u043C, \u044F\u043A\u0438\u0439 \u0437\u0430\u0445\u0438\u0449\u0430\u0454 \u0440\u0438\u0431\u0430\u043B\u043E\u043A \u0432\u0456\u0434 \u0441\u0438\u043B\u044C\u043D\u0438\u0445 \u043F\u0430\u0432\u043E\u0434\u043A\u043E\u0432\u0438\u0445 \u0442\u0435\u0447\u0456\u0439 \u0440\u0456\u0447\u043A\u0438."
    },
    {
        id: "lago_candia",
        regione: "piemonte",
        nome: "Lago di Candia (\u041E\u0437\u0435\u0440\u043E \u041A\u0430\u043D\u0434\u0456\u044F - \u0422\u0443\u0440\u0438\u043D)",
        tipo: "naturale",
        lat: 45.3241,
        lon: 7.8852,
        immagine: "./assets/images/lago_candia.jpg",
        pesci: [
            "\u0429\u0443\u043A\u0430",
            "\u0427\u043E\u0440\u043D\u0438\u0439 \u0431\u0430\u0441\u0441",
            "\u041B\u0438\u043D\u044C"
        ],
        info_generale: "\u041F\u0440\u0438\u0440\u043E\u0434\u043D\u0438\u0439 \u043F\u0430\u0440\u043A \u0437 \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0438\u043C\u0438 \u0434\u0435\u0440\u0435\u0432'\u044F\u043D\u0438\u043C\u0438 \u043F\u0440\u0438\u0447\u0430\u043B\u0430\u043C\u0438 \u0434\u043B\u044F \u0440\u0438\u0431\u043E\u043B\u043E\u0432\u043B\u0456 \u0431\u0435\u0437 \u0441\u0445\u043E\u0434\u0438\u043D\u043E\u043A \u0456 \u0431\u0430\u0440'\u0454\u0440\u0456\u0432, \u0437 \u043F\u0440\u044F\u043C\u0438\u043C \u0432\u0438\u0445\u043E\u0434\u043E\u043C \u0434\u043E \u0437\u043E\u043D\u0438 \u043F\u0430\u0440\u043A\u0443\u0432\u0430\u043D\u043D\u044F.",
        curiosita: "\u041F\u0435\u0440\u0448\u0435 \u043E\u0437\u0435\u0440\u043E \u0432 \u0406\u0442\u0430\u043B\u0456\u0457, \u0434\u0435 \u0431\u0443\u043B\u043E \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0437\u0430\u0431\u043E\u0440\u043E\u043D\u0435\u043D\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u0434\u0432\u0438\u0433\u0443\u043D\u0456\u0432 \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u044C\u043E\u0433\u043E \u0437\u0433\u043E\u0440\u044F\u043D\u043D\u044F."
    },
    // ================= EMILIA-ROMAGNA =================
    {
        id: "oasi_valle_santa",
        regione: "emilia_romagna",
        nome: "Oasi di Valle Santa (\u041E\u0430\u0437\u0430 \u0412\u0430\u043B\u043B\u0435 \u0421\u0430\u043D\u0442\u0430 - \u0424\u0435\u0440\u0440\u0430\u0440\u0430)",
        tipo: "naturale",
        lat: 44.5741,
        lon: 11.8315,
        immagine: "./assets/images/oasi_valle_santa.jpg",
        pesci: [
            "\u041A\u0430\u0440\u0430\u0441\u044C",
            "\u041A\u043E\u0440\u043E\u043F",
            "\u0421\u0443\u0434\u0430\u043A"
        ],
        info_generale: "\u041F\u0440\u0438\u0440\u043E\u0434\u043D\u0438\u0439 \u043F\u0430\u0440\u043A \u0434\u0435\u043B\u044C\u0442\u0438 \u0440\u0456\u0447\u043A\u0438 \u041F\u043E. \u041E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0438\u0439 \u0434\u0435\u0440\u0435\u0432'\u044F\u043D\u0438\u043C\u0438 \u0456\u043D\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u0438\u043C\u0438 \u043D\u0430\u0441\u0442\u0438\u043B\u0430\u043C\u0438 \u0442\u0430 \u0448\u0438\u0440\u043E\u043A\u0438\u043C\u0438 \u0441\u043F\u043E\u0441\u0442\u0435\u0440\u0435\u0436\u043D\u0438\u043C\u0438 \u043F\u0443\u043D\u043A\u0442\u0430\u043C\u0438.",
        curiosita: "\u041F\u0456\u0434 \u0447\u0430\u0441 \u0440\u0438\u0431\u043E\u043B\u043E\u0432\u043B\u0456 \u0442\u0443\u0442 \u043C\u043E\u0436\u043D\u0430 \u0441\u043F\u043E\u0441\u0442\u0435\u0440\u0456\u0433\u0430\u0442\u0438 \u0437\u0430 \u043D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u043E\u044E \u043A\u043E\u043B\u043E\u043D\u0456\u0454\u044E \u0440\u043E\u0436\u0435\u0432\u0438\u0445 \u0444\u043B\u0430\u043C\u0456\u043D\u0433\u043E \u043D\u0430 \u043F\u0456\u0432\u043D\u043E\u0447\u0456 \u0406\u0442\u0430\u043B\u0456\u0457."
    },
    {
        id: "sapaba_bologna",
        regione: "emilia_romagna",
        nome: "Laghi Sapaba (\u041E\u0437\u0435\u0440\u0430 \u0421\u0430\u043F\u0430\u0431\u0430 - \u0411\u043E\u043B\u043E\u043D\u044C\u044F)",
        tipo: "privato",
        lat: 44.4215,
        lon: 11.2842,
        immagine: "./assets/images/sapaba_bologna.jpg",
        pesci: [
            "\u041A\u043E\u0440\u043E\u043F",
            "\u0410\u043C\u0443\u0440",
            "\u0427\u043E\u0440\u043D\u0438\u0439 \u0431\u0430\u0441\u0441"
        ],
        info_generale: "\u041A\u043E\u043B\u0438\u0448\u043D\u0456 \u043A\u0430\u0440'\u0454\u0440\u0438, \u043F\u0435\u0440\u0435\u0442\u0432\u043E\u0440\u0435\u043D\u0456 \u043D\u0430 \u0440\u0438\u0431\u0430\u043B\u044C\u0441\u044C\u043A\u0438\u0439 \u0440\u0430\u0439. \u041E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0456 \u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u0438\u043C\u0438 \u043F\u0456\u0434'\u0457\u0437\u0434\u0430\u043C\u0438 \u0442\u0430 \u0448\u0438\u0440\u043E\u043A\u0438\u043C\u0438 \u0441\u0435\u043A\u0442\u043E\u0440\u0430\u043C\u0438 \u0434\u043B\u044F \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u043E\u0433\u043E \u0440\u043E\u0437\u0432\u043E\u0440\u043E\u0442\u0443 \u043A\u0440\u0456\u0441\u0435\u043B.",
        curiosita: "\u0417\u0430\u0432\u0434\u044F\u043A\u0438 \u043F\u0456\u0434\u0432\u043E\u0434\u043D\u0438\u043C \u0434\u0436\u0435\u0440\u0435\u043B\u0430\u043C \u0432\u043E\u0434\u0430 \u0442\u0443\u0442 \u043C\u0430\u0454 \u0434\u0438\u0432\u043E\u0432\u0438\u0436\u043D\u0438\u0439 \u0431\u0456\u0440\u044E\u0437\u043E\u0432\u0438\u0439 \u0432\u0456\u0434\u0442\u0456\u043D\u043E\u043A \u0456 \u0437\u0430\u043B\u0438\u0448\u0430\u0454\u0442\u044C\u0441\u044F \u043F\u0440\u043E\u0437\u043E\u0440\u043E\u044E \u0446\u0456\u043B\u0438\u0439 \u0440\u0456\u043A."
    },
    {
        id: "canale_brian",
        regione: "emilia_romagna",
        nome: "Canale Brian (\u041A\u0430\u043D\u0430\u043B \u0411\u0440\u0456\u0430\u043D - \u0420\u0430\u0432\u0435\u043D\u043D\u0430)",
        tipo: "naturale",
        lat: 45.5812,
        lon: 12.7845,
        immagine: "./assets/images/canale_brian.jpg",
        pesci: [
            "\u041A\u0430\u0440\u0430\u0441\u044C",
            "\u041A\u043E\u0440\u043E\u043F",
            "\u041C\u043E\u0440\u0441\u044C\u043A\u0430 \u043A\u0435\u0444\u0430\u043B\u044C"
        ],
        info_generale: "\u0420\u0456\u0432\u043D\u0430 \u0431\u0435\u0442\u043E\u043D\u043D\u0430 \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u0430 \u0437 \u0437\u0430\u0445\u0438\u0441\u043D\u0438\u043C\u0438 \u043E\u0433\u043E\u0440\u043E\u0436\u0430\u043C\u0438 \u0442\u0430 \u043F\u0430\u043D\u0434\u0443\u0441\u0430\u043C\u0438, \u0456\u0434\u0435\u0430\u043B\u044C\u043D\u0430 \u0434\u043B\u044F \u043B\u043E\u0432\u043B\u0456 \u043D\u0430 \u0434\u043E\u0432\u0433\u0456 \u0448\u0442\u0435\u043A\u0435\u0440\u043D\u0456 \u0432\u0443\u0434\u043A\u0438 \u0437 \u0456\u043D\u0432\u0430\u043B\u0456\u0434\u043D\u043E\u0433\u043E \u043A\u0440\u0456\u0441\u043B\u0430.",
        curiosita: "\u0427\u0435\u0440\u0435\u0437 \u0431\u043B\u0438\u0437\u044C\u043A\u0456\u0441\u0442\u044C \u0434\u043E \u043C\u043E\u0440\u044F \u0432\u043E\u0434\u0430 \u0432 \u043A\u0430\u043D\u0430\u043B\u0456 \u0441\u043E\u043B\u043E\u043D\u0443\u0432\u0430\u0442\u0430, \u0442\u043E\u043C\u0443 \u0442\u0443\u0442 \u043C\u043E\u0436\u043D\u0430 \u0441\u043F\u0456\u0439\u043C\u0430\u0442\u0438 \u044F\u043A \u0440\u0456\u0447\u043A\u043E\u0432\u043E\u0433\u043E \u043A\u0430\u0440\u0430\u0441\u044F, \u0442\u0430\u043A \u0456 \u043C\u043E\u0440\u0441\u044C\u043A\u0443 \u043A\u0435\u0444\u0430\u043B\u044C."
    },
    // ================= CAMPANIA =================
    {
        id: "pescatore_avellino",
        regione: "campania",
        nome: "Laghi ASD Il Pescatore (\u0410\u0432\u0435\u043B\u043B\u0456\u043D\u043E)",
        tipo: "privato",
        lat: 40.9122,
        lon: 15.0143,
        immagine: "./assets/images/pescatore_avellino.jpg",
        pesci: [
            "\u0420\u0430\u0434\u0443\u0436\u043D\u0430 \u0444\u043E\u0440\u0435\u043B\u044C",
            "\u041A\u043E\u0440\u043E\u043F",
            "\u0421\u043E\u043C"
        ],
        info_generale: "\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0438\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 \u0437 \u0442\u0440\u044C\u043E\u0445 \u0432\u0435\u043B\u0438\u043A\u0438\u0445 \u0441\u0442\u0430\u0432\u043A\u0456\u0432. \u041F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0437\u0430\u0430\u0441\u0444\u0430\u043B\u044C\u0442\u043E\u0432\u0430\u043D\u0456 \u0434\u043E\u0440\u0456\u0436\u043A\u0438 \u0437 \u043D\u0430\u0445\u0438\u043B\u043E\u043C \u043C\u0435\u043D\u0448\u0435 4% \u0434\u043B\u044F \u043F\u043E\u0432\u043D\u043E\u0457 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u0456\u0457 \u043F\u0435\u0440\u0435\u0441\u0443\u0432\u0430\u043D\u043D\u044F.",
        curiosita: "\u041D\u0430 \u0442\u0435\u0440\u0438\u0442\u043E\u0440\u0456\u0457 \u0434\u0456\u0454 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0437\u043E\u0432\u0430\u043D\u0430 \u0431\u0435\u0437\u0431\u0430\u0440'\u0454\u0440\u043D\u0430 \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0430 \u0442\u0430 \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0430\u0434\u0430\u043F\u0442\u043E\u0432\u0430\u043D\u0456 \u0441\u0430\u043D\u0456\u0442\u0430\u0440\u043D\u0456 \u0437\u043E\u043D\u0438."
    },
    {
        id: "capriati_volturno",
        regione: "campania",
        nome: "Laghi di Capriati (\u041E\u0437\u0435\u0440\u0430 \u041A\u0430\u043F\u0440\u0456\u0430\u0442\u0456-\u0430-\u0412\u043E\u043B\u044C\u0442\u0443\u0440\u043D\u043E)",
        tipo: "privato",
        lat: 41.4615,
        lon: 14.1542,
        immagine: "./assets/images/capriati_volturno.jpg",
        pesci: [
            "\u0424\u043E\u0440\u0435\u043B\u044C",
            "\u041A\u043E\u0440\u043E\u043F \u0420\u0435\u0434\u0436\u0438\u043D\u0430",
            "\u0427\u043E\u0440\u043D\u0438\u0439 \u0441\u043E\u043C\u0438\u043A"
        ],
        info_generale: "\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u0456 \u0441\u0442\u0430\u0432\u043A\u0438 \u0431\u0456\u043B\u044F \u043F\u0456\u0434\u043D\u0456\u0436\u0436\u044F \u0433\u0456\u0440 \u041C\u0430\u0442\u0435\u0437\u0435. \u0411\u0435\u0440\u0435\u0433\u0438 \u043C\u0430\u044E\u0442\u044C \u043C\u043E\u043D\u043E\u043B\u0456\u0442\u043D\u0435 \u043F\u043E\u043A\u0440\u0438\u0442\u0442\u044F \u0442\u0430 \u0437\u0430\u0445\u0438\u0441\u043D\u0456 \u043E\u0433\u043E\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u0432\u0437\u0434\u043E\u0432\u0436 \u0441\u0435\u043A\u0442\u043E\u0440\u0456\u0432 \u0432\u0438\u0432\u0430\u0436\u0443\u0432\u0430\u043D\u043D\u044F \u0440\u0438\u0431\u0438.",
        curiosita: "\u0412\u043E\u0434\u0430 \u043D\u0430\u0434\u0445\u043E\u0434\u0438\u0442\u044C \u043F\u0440\u044F\u043C\u043E \u0437 \u0433\u0456\u0440\u0441\u044C\u043A\u0438\u0445 \u0434\u0436\u0435\u0440\u0435\u043B \u041C\u0430\u0442\u0435\u0437\u0435, \u0449\u043E \u043F\u0440\u0438\u0441\u043A\u043E\u0440\u044E\u0454 \u0440\u0456\u0441\u0442 \u0432\u0435\u043B\u0438\u043A\u0438\u0445 \u0434\u0437\u0435\u0440\u043A\u0430\u043B\u044C\u043D\u0438\u0445 \u043A\u043E\u0440\u043E\u043F\u0456\u0432."
    },
    {
        id: "diga_alento",
        regione: "campania",
        nome: "Oasi Fiume Alento (\u0414\u0430\u043C\u0431\u0430 \u0410\u043B\u0435\u043D\u0442\u043E - \u0421\u0430\u043B\u0435\u0440\u043D\u043E)",
        tipo: "naturale",
        lat: 40.2312,
        lon: 15.1145,
        immagine: "./assets/images/diga_alento.jpg",
        pesci: [
            "\u041A\u043E\u0440\u043E\u043F",
            "\u0412\u0443\u0441\u0430\u0447",
            "\u041A\u0430\u0440\u0430\u0441\u044C"
        ],
        info_generale: "\u041F\u0440\u0438\u0440\u043E\u0434\u043D\u0438\u0439 \u0437\u0430\u043F\u043E\u0432\u0456\u0434\u043D\u0438\u043A, \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0438\u0439 \u0434\u0435\u0440\u0435\u0432'\u044F\u043D\u0438\u043C\u0438 \u043F\u0456\u0440\u0441\u0430\u043C\u0438 \u0437\u0456 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u043C\u0438 \u0444\u0456\u043A\u0441\u0430\u0442\u043E\u0440\u0430\u043C\u0438 \u0434\u043B\u044F \u0456\u043D\u0432\u0430\u043B\u0456\u0434\u043D\u0438\u0445 \u0432\u0456\u0437\u043A\u0456\u0432 \u0442\u0430 \u0431\u0435\u0437\u0431\u0430\u0440'\u0454\u0440\u043D\u0438\u043C\u0438 \u0441\u0442\u0435\u0436\u043A\u0430\u043C\u0438.",
        curiosita: "\u0414\u0430\u043C\u0431\u0430 \u0454 \u043E\u0434\u043D\u0438\u043C \u0456\u0437 \u043D\u0430\u0439\u0431\u0456\u043B\u044C\u0448 \u043F\u0435\u0440\u0435\u0434\u043E\u0432\u0438\u0445 \u0435\u043A\u043E\u043B\u043E\u0433\u0456\u0447\u043D\u0438\u0445 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u0456\u0432 \u041F\u0456\u0432\u0434\u043D\u044F \u0406\u0442\u0430\u043B\u0456\u0457, \u0449\u043E \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0443\u0454\u0442\u044C\u0441\u044F \u0437\u0435\u043B\u0435\u043D\u043E\u044E \u0435\u043D\u0435\u0440\u0433\u0456\u0454\u044E."
    },
    // ================= PUGLIA =================
    {
        id: "lesina_lagoon",
        regione: "puglia",
        nome: "Laguna di Lesina (\u041B\u0430\u0433\u0443\u043D\u0430 \u041B\u0435\u0437\u0456\u043D\u0430 - \u0424\u043E\u0434\u0436\u0430)",
        tipo: "costa",
        lat: 41.8841,
        lon: 15.3512,
        immagine: "./assets/images/lesina_lagoon.jpg",
        pesci: [
            "\u041B\u0430\u0432\u0440\u0430\u043A (\u0421\u043F\u0456\u0433\u043E\u043B\u0430)",
            "\u041A\u0430\u043C\u0431\u0430\u043B\u0430",
            "\u0412\u0443\u0433\u043E\u0440"
        ],
        info_generale: "\u0421\u043E\u043B\u043E\u043D\u043E\u0432\u043E\u0434\u043D\u0430 \u043B\u0430\u0433\u0443\u043D\u0430 \u0437 \u043D\u043E\u0432\u0438\u043C \u0456\u043D\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u0438\u043C \u0434\u0435\u0440\u0435\u0432'\u044F\u043D\u0438\u043C \u043F\u0456\u0440\u0441\u043E\u043C \u0434\u043E\u0432\u0436\u0438\u043D\u043E\u044E \u043F\u043E\u043D\u0430\u0434 200 \u043C\u0435\u0442\u0440\u0456\u0432 \u0431\u0435\u0437 \u0441\u0445\u043E\u0434\u0438\u043D\u043E\u043A.",
        curiosita: "Lesina \u0454 \u0454\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u044C\u043A\u0438\u043C \u0446\u0435\u043D\u0442\u0440\u043E\u043C \u0432\u0438\u0432\u0447\u0435\u043D\u043D\u044F \u0442\u0430 \u0432\u0438\u043B\u043E\u0432\u0443 \u0434\u0438\u043A\u043E\u0433\u043E \u0441\u0435\u0440\u0435\u0434\u0437\u0435\u043C\u043D\u043E\u043C\u043E\u0440\u0441\u044C\u043A\u043E\u0433\u043E \u0432\u0443\u0433\u0440\u0430."
    },
    {
        id: "locone_minervino",
        regione: "puglia",
        nome: "Diga del Locone (\u0414\u0430\u043C\u0431\u0430 \u041B\u043E\u043A\u043E\u043D\u0435 - \u0411\u0430\u0440\u0456)",
        tipo: "naturale",
        lat: 41.1342,
        lon: 16.0315,
        immagine: "./assets/images/locone_minervino.jpg",
        pesci: [
            "\u041A\u043E\u0440\u043E\u043F",
            "\u041A\u043E\u0440\u043E\u043B\u0456\u0432\u0441\u044C\u043A\u0438\u0439 \u043A\u0430\u0440\u0430\u0441\u044C",
            "\u0421\u0443\u0434\u0430\u043A"
        ],
        info_generale: "\u0414\u0440\u0443\u0433\u0430 \u0437\u0430 \u0432\u0435\u043B\u0438\u0447\u0438\u043D\u043E\u044E \u0437\u0435\u043C\u043B\u044F\u043D\u0430 \u0434\u0430\u043C\u0431\u0430 \u0432 \u0404\u0432\u0440\u043E\u043F\u0456. \u041E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0435 \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0438\u043C\u0438 \u043F\u0456\u0434'\u0457\u0437\u043D\u0438\u043C\u0438 \u0440\u0430\u043C\u043F\u0430\u043C\u0438 \u043D\u0430 \u0440\u0456\u0432\u043D\u0438\u0445 \u0434\u0456\u043B\u044F\u043D\u043A\u0430\u0445 \u0431\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u0457 \u0441\u0442\u0456\u043D\u0438.",
        curiosita: "\u041F\u0456\u0434 \u0447\u0430\u0441 \u0431\u0443\u0434\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u0430 \u0434\u0430\u043C\u0431\u0438 \u0431\u0443\u043B\u043E \u0437\u0430\u0442\u043E\u043F\u043B\u0435\u043D\u043E \u0434\u0430\u0432\u043D\u044C\u043E\u0440\u0438\u043C\u0441\u044C\u043A\u0443 \u0432\u0456\u043B\u043B\u0443, \u044F\u043A\u0430 \u043B\u0435\u0436\u0438\u0442\u044C \u043D\u0435\u0434\u043E\u0442\u043E\u0440\u043A\u0430\u043D\u043E\u044E \u043D\u0430 \u0433\u043B\u0438\u0431\u0438\u043D\u0456 40 \u043C\u0435\u0442\u0440\u0456\u0432."
    },
    {
        id: "molo_brindisi",
        regione: "puglia",
        nome: "Molo di Brindisi (\u041F\u043E\u0440\u0442\u043E\u0432\u0438\u0439 \u043C\u043E\u043B \u0411\u0440\u0456\u043D\u0434\u0456\u0437\u0456)",
        tipo: "costa",
        lat: 40.6412,
        lon: 17.9545,
        immagine: "./assets/images/molo_brindisi.jpg",
        pesci: [
            "\u0414\u043E\u0440\u0430\u0434\u0430",
            "\u0421\u0430\u0440\u0433\u0430\u043D",
            "\u0421\u043A\u0443\u043C\u0431\u0440\u0456\u044F"
        ],
        info_generale: "\u041F\u043B\u043E\u0441\u043A\u0438\u0439 \u0431\u0435\u0442\u043E\u043D\u043D\u0438\u0439 \u043C\u043E\u043B \u0437 \u043F\u0430\u043D\u0434\u0443\u0441\u0430\u043C\u0438 \u0442\u0430 \u0448\u0438\u0440\u043E\u043A\u0438\u043C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u044C\u043D\u0438\u043C \u043F\u0430\u0440\u043A\u0443\u0432\u0430\u043D\u043D\u044F\u043C \u043F\u0440\u044F\u043C\u043E \u0431\u0456\u043B\u044F \u0441\u0435\u043A\u0442\u043E\u0440\u0456\u0432 \u0440\u0438\u0431\u043E\u043B\u043E\u0432\u043B\u0456.",
        curiosita: "\u0417 \u0446\u044C\u043E\u0433\u043E \u043C\u043E\u043B\u0443 \u0432\u0456\u0434\u043A\u0440\u0438\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u0447\u0443\u0434\u043E\u0432\u0438\u0439 \u0432\u0438\u0434 \u043D\u0430 \u0437\u0430\u043C\u043E\u043A \u0410\u043B\u044C\u0444\u043E\u043D\u0441\u0456\u043D\u043E, \u0437\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0439 \u043D\u0430 \u0441\u043A\u0435\u043B\u044F\u0445 \u043F\u043E\u0441\u0435\u0440\u0435\u0434 \u043C\u043E\u0440\u044F."
    },
    // ================= UMBRIA =================
    {
        id: "trasimeno_castiglione",
        regione: "umbria",
        nome: "Lago Trasimeno (\u041E\u0437\u0435\u0440\u043E \u0422\u0440\u0430\u0437\u0456\u043C\u0435\u043D\u043E - \u041F\u0435\u0440\u0443\u0434\u0436\u0430)",
        tipo: "naturale",
        lat: 43.1283,
        lon: 12.0415,
        immagine: "./assets/images/trasimeno_castiglione.jpg",
        pesci: [
            "\u0429\u0443\u043A\u0430",
            "\u041A\u0430\u0440\u0430\u0441\u044C",
            "\u041A\u043E\u0440\u043E\u043F"
        ],
        info_generale: "\u0412\u0435\u043B\u0438\u043A\u0435 \u043C\u0456\u043B\u043A\u043E\u0432\u043E\u0434\u043D\u0435 \u043E\u0437\u0435\u0440\u043E, \u043E\u0441\u043D\u0430\u0449\u0435\u043D\u0435 \u0431\u0435\u0437\u0431\u0430\u0440'\u0454\u0440\u043D\u0438\u043C\u0438 \u043E\u0433\u043B\u044F\u0434\u043E\u0432\u0438\u043C\u0438 \u0442\u0430 \u0440\u0438\u0431\u0430\u043B\u044C\u0441\u044C\u043A\u0438\u043C\u0438 \u043C\u0456\u0441\u0442\u043A\u0430\u043C\u0438 \u0432 \u043F\u0430\u0440\u043A\u0443 \u041A\u0430\u0441\u0442\u0456\u043B\u044C\u0439\u043E\u043D\u0435.",
        curiosita: "\u041D\u0430 \u0446\u0438\u0445 \u0431\u0435\u0440\u0435\u0433\u0430\u0445 \u0443 217 \u0440\u043E\u0446\u0456 \u0434\u043E \u043D.\u0435. \u0413\u0430\u043D\u043D\u0456\u0431\u0430\u043B \u0440\u043E\u0437\u0433\u0440\u043E\u043C\u0438\u0432 \u0440\u0438\u043C\u0441\u044C\u043A\u0456 \u043B\u0435\u0433\u0456\u043E\u043D\u0438 \u0443 \u0437\u043D\u0430\u043C\u0435\u043D\u0438\u0442\u0456\u0439 \u0437\u0430\u0441\u0456\u0434\u0446\u0456."
    },
    {
        id: "piediluco_lake",
        regione: "umbria",
        nome: "Lago di Piediluco (\u041E\u0437\u0435\u0440\u043E \u041F'\u0454\u0434\u0456\u043B\u0443\u043A\u043E - \u0422\u0435\u0440\u043D\u0456)",
        tipo: "naturale",
        lat: 42.5312,
        lon: 12.7541,
        immagine: "./assets/images/piediluco_lake.jpg",
        pesci: [
            "\u041A\u043E\u0440\u0435\u0433\u043E\u043D",
            "\u0424\u043E\u0440\u0435\u043B\u044C",
            "\u0420\u0456\u0447\u043A\u043E\u0432\u0438\u0439 \u043E\u043A\u0443\u043D\u044C"
        ],
        info_generale: "\u041C\u0430\u043B\u044C\u043E\u0432\u043D\u0438\u0447\u0435 \u043E\u0437\u0435\u0440\u043E, \u0434\u0435 \u0442\u0440\u0435\u043D\u0443\u0454\u0442\u044C\u0441\u044F \u0437\u0431\u0456\u0440\u043D\u0430 \u0406\u0442\u0430\u043B\u0456\u0457 \u0437 \u0432\u0435\u0441\u043B\u0443\u0432\u0430\u043D\u043D\u044F. \u041E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0435 \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0438\u043C\u0438 \u043F\u043B\u043E\u0441\u043A\u0438\u043C\u0438 \u043F\u0456\u0440\u0441\u0430\u043C\u0438 \u0431\u0456\u043B\u044F \u043C\u0456\u0441\u044C\u043A\u043E\u0433\u043E \u043F\u043B\u044F\u0436\u0443.",
        curiosita: "\u041E\u0437\u0435\u0440\u043E \u043C\u0430\u0454 \u0456\u0434\u0435\u0430\u043B\u044C\u043D\u0443 \u0434\u0437\u0435\u0440\u043A\u0430\u043B\u044C\u043D\u0443 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u044E \u0442\u0430 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0441\u0442\u044C \u0445\u0432\u0438\u043B\u044C \u0437\u0430\u0432\u0434\u044F\u043A\u0438 \u043D\u0430\u0432\u043A\u043E\u043B\u0438\u0448\u043D\u0456\u043C \u0433\u043E\u0440\u0430\u043C."
    },
    {
        id: "lago_corbara",
        regione: "umbria",
        nome: "Lago di Corbara (\u041E\u0437\u0435\u0440\u043E \u041A\u043E\u0440\u0431\u0430\u0440\u0430 - \u041E\u0440\u0432'\u0454\u0442\u043E)",
        tipo: "naturale",
        lat: 42.7112,
        lon: 12.2845,
        immagine: "./assets/images/lago_corbara.jpg",
        pesci: [
            "\u041A\u043E\u0440\u043E\u043F",
            "\u0421\u0443\u0434\u0430\u043A",
            "\u0411\u0456\u043B\u0438\u0437\u043D\u0430"
        ],
        info_generale: "\u0412\u0435\u043B\u0438\u043A\u0438\u0439 \u0440\u0456\u0447\u043A\u043E\u0432\u0438\u0439 \u0431\u0430\u0441\u0435\u0439\u043D \u0437 \u043E\u0431\u043B\u0430\u0448\u0442\u043E\u0432\u0430\u043D\u0438\u043C\u0438 \u0431\u0435\u0442\u043E\u043D\u043D\u0438\u043C\u0438 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0430\u043C\u0438 \u0431\u0456\u043B\u044F \u0433\u0456\u0434\u0440\u043E\u0435\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0456\u0457, \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u043C\u0438 \u043D\u0430 \u043A\u0440\u0456\u0441\u043B\u0430\u0445.",
        curiosita: "\u0412\u043E\u0434\u043E\u0439\u043C\u0430 \u0432\u0456\u0434\u043E\u043C\u0430 \u0443 \u0432\u0441\u044C\u043E\u043C\u0443 \u0441\u0432\u0456\u0442\u0456 \u0441\u0435\u0440\u0435\u0434 \u043B\u044E\u0431\u0438\u0442\u0435\u043B\u0456\u0432 \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043A\u0430\u0440\u043F\u0444\u0456\u0448\u0438\u043D\u0433\u0443 \u0447\u0435\u0440\u0435\u0437 \u0432\u0435\u043B\u0438\u0447\u0435\u0437\u043D\u0443 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0442\u0440\u043E\u0444\u0435\u0439\u043D\u0438\u0445 \u043A\u043E\u0440\u043E\u043F\u0456\u0432."
    },
    // ================= ABRUZZO =================
    {
        id: "campotosto_access",
        regione: "abruzzo",
        nome: "Lago di Campotosto (\u041E\u0437\u0435\u0440\u043E \u041A\u0430\u043C\u043F\u043E\u0442\u043E\u0441\u0442\u043E - \u041B'\u0410\u043A\u0443\u0457\u043B\u0430)",
        tipo: "naturale",
        lat: 42.5584,
        lon: 13.3672,
        immagine: "./assets/images/campotosto_access.jpg",
        pesci: [
            "\u041A\u043E\u0440\u0435\u0433\u043E\u043D",
            "\u0424\u043E\u0440\u0435\u043B\u044C",
            "\u0420\u0456\u0447\u043A\u043E\u0432\u0438\u0439 \u043E\u043A\u0443\u043D\u044C"
        ],
        info_generale: "\u0412\u0438\u0441\u043E\u043A\u043E\u0433\u0456\u0440\u043D\u0435 \u043E\u0437\u0435\u0440\u043E \u0437 \u043D\u043E\u0432\u0438\u043C\u0438 \u043F\u043B\u043E\u0441\u043A\u0438\u043C\u0438 \u0434\u0435\u0440\u0435\u0432'\u044F\u043D\u0438\u043C\u0438 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430\u043C\u0438 \u0431\u0456\u043B\u044F \u0431\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u0457 \u0434\u043E\u0440\u043E\u0433\u0438, \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u043C\u0438 \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u043F\u0430\u0434\u0456\u0432 \u0432\u0438\u0441\u043E\u0442.",
        curiosita: "\u0426\u0435 \u043D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0430 \u0448\u0442\u0443\u0447\u043D\u0430 \u0432\u043E\u0434\u043E\u0439\u043C\u0430 \u0432 \u0440\u0435\u0433\u0456\u043E\u043D\u0456, \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0430 \u043D\u0430 \u0432\u0438\u0441\u043E\u0442\u0456 1300 \u043C\u0435\u0442\u0440\u0456\u0432 \u0443 \u0441\u0430\u043C\u043E\u043C\u0443 \u0441\u0435\u0440\u0446\u0456 \u0410\u043F\u0435\u043D\u043D\u0456\u043D."
    },
    {
        id: "bomba_lake",
        regione: "abruzzo",
        nome: "Lago di Bomba (\u041E\u0437\u0435\u0440\u043E \u0411\u043E\u043C\u0431\u0430 - \u041A'\u0454\u0442\u0456)",
        tipo: "naturale",
        lat: 42.0384,
        lon: 14.3645,
        immagine: "./assets/images/bomba_lake.jpg",
        pesci: [
            "\u041A\u043E\u0440\u043E\u043F",
            "\u041A\u0430\u0440\u0430\u0441\u044C",
            "\u0421\u0443\u0434\u0430\u043A"
        ],
        info_generale: "\u0412\u043E\u0434\u043E\u0439\u043C\u0430 \u0448\u0442\u0443\u0447\u043D\u043E\u0433\u043E \u0442\u0438\u043F\u0443 \u0437 \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0438\u043C\u0438 \u0431\u0435\u0442\u043E\u043D\u043D\u0438\u043C\u0438 \u043C\u0430\u0439\u0434\u0430\u043D\u0447\u0438\u043A\u0430\u043C\u0438 \u0434\u043B\u044F \u0440\u0438\u0431\u043E\u043B\u043E\u0432\u043B\u0456 \u0431\u0456\u043B\u044F \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u0443, \u0431\u0435\u0437 \u0431\u0430\u0440'\u0454\u0440\u0456\u0432.",
        curiosita: "\u041E\u0437\u0435\u0440\u043E \u0454 \u043E\u0444\u0456\u0446\u0456\u0439\u043D\u043E\u044E \u0431\u0430\u0437\u043E\u044E \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u043D\u0430\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0437\u043C\u0430\u0433\u0430\u043D\u044C \u0437 \u0432\u0435\u0441\u043B\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0430 \u043F\u0430\u0440\u0430\u043B\u0456\u043C\u043F\u0456\u0439\u0441\u044C\u043A\u043E\u0457 \u0440\u0438\u0431\u043E\u043B\u043E\u0432\u043B\u0456."
    },
    {
        id: "scanno_lake",
        regione: "abruzzo",
        nome: "Lago di Scanno (\u041E\u0437\u0435\u0440\u043E \u0421\u043A\u0430\u043D\u043D\u043E - \u041B'\u0410\u043A\u0443\u0457\u043B\u0430)",
        tipo: "naturale",
        lat: 41.9212,
        lon: 13.8641,
        immagine: "./assets/images/scanno_lake.jpg",
        pesci: [
            "\u0421\u0442\u0440\u0443\u043C\u043A\u043E\u0432\u0430 \u0444\u043E\u0440\u0435\u043B\u044C",
            "\u0420\u0456\u0447\u043A\u043E\u0432\u0438\u0439 \u043E\u043A\u0443\u043D\u044C",
            "\u041A\u043E\u0440\u043E\u043F"
        ],
        info_generale: "\u041F\u0440\u0438\u0440\u043E\u0434\u043D\u0435 \u043E\u0437\u0435\u0440\u043E \u0437 \u043E\u0431\u043B\u0430\u0448\u0442\u043E\u0432\u0430\u043D\u0438\u043C\u0438 \u0434\u0435\u0440\u0435\u0432'\u044F\u043D\u0438\u043C\u0438 \u043D\u0430\u0441\u0442\u0438\u043B\u0430\u043C\u0438 \u0442\u0430 \u043F\u043E\u043B\u043E\u0433\u0438\u043C\u0438 \u0431\u0435\u0437\u0431\u0430\u0440'\u0454\u0440\u043D\u0438\u043C\u0438 \u043F\u0430\u0440\u043A\u043E\u0432\u0438\u043C\u0438 \u0434\u043E\u0440\u0456\u0436\u043A\u0430\u043C\u0438 \u0432\u0437\u0434\u043E\u0432\u0436 \u0443\u0437\u0431\u0435\u0440\u0435\u0436\u0436\u044F.",
        curiosita: "\u041F\u0440\u0438 \u043F\u043E\u0433\u043B\u044F\u0434\u0456 \u0437 \u043D\u0430\u0432\u043A\u043E\u043B\u0438\u0448\u043D\u0456\u0445 \u043F\u0430\u0433\u043E\u0440\u0431\u0456\u0432 \u0437\u0430\u0432\u0434\u044F\u043A\u0438 \u043E\u0441\u043E\u0431\u043B\u0438\u0432\u0456\u0439 \u0444\u043E\u0440\u043C\u0456 \u0431\u0435\u0440\u0435\u0433\u0456\u0432 \u043E\u0437\u0435\u0440\u043E \u043C\u0430\u0454 \u0447\u0456\u0442\u043A\u0443 \u0444\u043E\u0440\u043C\u0443 \u0441\u0435\u0440\u0446\u044F."
    },
    // ================= BASILICATA =================
    {
        id: "san_giuliano_matera",
        regione: "basilicata",
        nome: "Lago di San Giuliano (\u041E\u0437\u0435\u0440\u043E \u0421\u0430\u043D-\u0414\u0436\u0443\u043B\u0456\u0430\u043D\u043E - \u041C\u0430\u0442\u0435\u0440\u0430)",
        tipo: "naturale",
        lat: 40.6315,
        lon: 16.4842,
        immagine: "./assets/images/san_giuliano_matera.jpg",
        pesci: [
            "\u041A\u043E\u0440\u043E\u043F",
            "\u041A\u0430\u0440\u0430\u0441\u044C",
            "\u0421\u0443\u0434\u0430\u043A"
        ],
        info_generale: "\u041F\u0440\u0438\u0440\u043E\u0434\u043D\u0438\u0439 \u0437\u0430\u043F\u043E\u0432\u0456\u0434\u043D\u0438\u043A \u0437 \u043E\u0431\u043B\u0430\u0448\u0442\u043E\u0432\u0430\u043D\u0438\u043C\u0438 \u043F\u043B\u043E\u0441\u043A\u0438\u043C\u0438 \u043C\u0430\u0439\u0434\u0430\u043D\u0447\u0438\u043A\u0430\u043C\u0438 \u0434\u043B\u044F \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u043E\u0457 \u043B\u043E\u0432\u043B\u0456 \u0440\u0438\u0431\u0438, \u0437'\u0454\u0434\u043D\u0430\u043D\u0438\u043C\u0438 \u0437 \u0431\u0435\u0437\u0431\u0430\u0440'\u0454\u0440\u043D\u0438\u043C \u043F\u0430\u0440\u043A\u0456\u043D\u0433\u043E\u043C.",
        curiosita: "\u0423 2006 \u0440\u043E\u0446\u0456 \u043D\u0430 \u0431\u0435\u0440\u0435\u0437\u0456 \u0446\u044C\u043E\u0433\u043E \u043E\u0437\u0435\u0440\u0430 \u0437\u043D\u0430\u0439\u0448\u043B\u0438 \u0441\u043A\u0435\u043B\u0435\u0442 \u0432\u0438\u043A\u043E\u043F\u043D\u043E\u0433\u043E \u043A\u0438\u0442\u0430 \u0432\u0456\u043A\u043E\u043C 1.5 \u043C\u0456\u043B\u044C\u0439\u043E\u043D\u0430 \u0440\u043E\u043A\u0456\u0432."
    },
    {
        id: "laghi_monticchio",
        regione: "basilicata",
        nome: "Laghi di Monticchio (\u041E\u0437\u0435\u0440\u0430 \u041C\u043E\u043D\u0442\u0456\u043A\u043A\u044C\u043E - \u041F\u043E\u0442\u0435\u043D\u0446\u0430)",
        tipo: "naturale",
        lat: 40.9384,
        lon: 15.6315,
        immagine: "./assets/images/laghi_monticchio.jpg",
        pesci: [
            "\u041A\u043E\u0440\u043E\u043F",
            "\u041B\u0438\u043D\u044C",
            "\u0429\u0443\u043A\u0430"
        ],
        info_generale: "\u0412\u0443\u043B\u043A\u0430\u043D\u0456\u0447\u043D\u0456 \u043E\u0437\u0435\u0440\u0430 \u0437 \u0430\u0441\u0444\u0430\u043B\u044C\u0442\u043E\u0432\u0430\u043D\u043E\u044E \u043F\u0440\u043E\u0433\u0443\u043B\u044F\u043D\u043A\u043E\u0432\u043E\u044E \u0430\u043B\u0435\u0454\u044E \u0442\u0430 \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0438\u043C\u0438 \u0434\u0435\u0440\u0435\u0432'\u044F\u043D\u0438\u043C\u0438 \u043F\u0440\u0438\u0447\u0430\u043B\u0430\u043C\u0438 \u0434\u043B\u044F \u043B\u044E\u0434\u0435\u0439 \u043D\u0430 \u0432\u0456\u0437\u043A\u0430\u0445.",
        curiosita: "\u0412\u043E\u043D\u0438 \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0456 \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456 \u043A\u0440\u0430\u0442\u0435\u0440\u0430 \u0437\u0433\u0430\u0441\u043B\u043E\u0433\u043E \u0432\u0443\u043B\u043A\u0430\u043D\u0430 \u0412\u0443\u043B\u044C\u0442\u0443\u0440\u0435 \u0456 \u0432\u0432\u0430\u0436\u0430\u044E\u0442\u044C\u0441\u044F \u0443\u043D\u0456\u043A\u0430\u043B\u044C\u043D\u043E\u044E \u043F\u0430\u043C'\u044F\u0442\u043A\u043E\u044E \u043F\u0440\u0438\u0440\u043E\u0434\u0438."
    },
    {
        id: "pertusillo_lake",
        regione: "basilicata",
        nome: "Lago del Pertusillo (\u041E\u0437\u0435\u0440\u043E \u041F\u0435\u0440\u0442\u0443\u0437\u0456\u043B\u043B\u043E - \u041F\u043E\u0442\u0435\u043D\u0446\u0430)",
        tipo: "naturale",
        lat: 40.2812,
        lon: 15.9845,
        immagine: "./assets/images/pertusillo_lake.jpg",
        pesci: [
            "\u0424\u043E\u0440\u0435\u043B\u044C",
            "\u0427\u043E\u0440\u043D\u0438\u0439 \u0431\u0430\u0441\u0441",
            "\u0421\u0443\u0434\u0430\u043A"
        ],
        info_generale: "\u0412\u0435\u043B\u0438\u043A\u0435 \u0448\u0442\u0443\u0447\u043D\u0435 \u0432\u043E\u0434\u043E\u0441\u0445\u043E\u0432\u0438\u0449\u0435 \u0437 \u043F\u043B\u043E\u0441\u043A\u0438\u043C\u0438 \u043F\u0456\u0434'\u0457\u0437\u0434\u0430\u043C\u0438 \u0442\u0430 \u0431\u0435\u0442\u043E\u043D\u043E\u0432\u0430\u043D\u0438\u043C\u0438 \u0434\u0456\u043B\u044F\u043D\u043A\u0430\u043C\u0438 \u0431\u0435\u0440\u0435\u0433\u0430 \u0431\u0456\u043B\u044F \u0433\u0440\u0435\u0431\u043B\u0456 \u0434\u043B\u044F \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u043E\u0433\u043E \u043B\u043E\u0432\u0443.",
        curiosita: "\u0412\u043E\u0434\u043E\u0439\u043C\u0430 \u043E\u0442\u043E\u0447\u0435\u043D\u0430 \u0433\u0443\u0441\u0442\u0438\u043C\u0438 \u0434\u0443\u0431\u043E\u0432\u0438\u043C\u0438 \u043B\u0456\u0441\u0430\u043C\u0438 \u043D\u0430\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0430\u0440\u043A\u0443 \u0410\u043F\u043F\u0435\u043D\u043D\u0456\u043D\u043E \u041B\u0443\u043A\u0430\u043D\u043E."
    },
    // ================= CALABRIA =================
    {
        id: "cecita_sila",
        regione: "calabria",
        nome: "Lago Cecita (\u041E\u0437\u0435\u0440\u043E \u0427\u0435\u0447\u0456\u0442\u0430 - \u041A\u043E\u0437\u0435\u043D\u0446\u0430)",
        tipo: "naturale",
        lat: 39.3842,
        lon: 16.5512,
        immagine: "./assets/images/cecita_sila.jpg",
        pesci: [
            "\u0420\u0430\u0434\u0443\u0436\u043D\u0430 \u0444\u043E\u0440\u0435\u043B\u044C",
            "\u041A\u0443\u043C\u0436\u0430",
            "\u041A\u043E\u0440\u043E\u043F"
        ],
        info_generale: "\u0412\u0435\u043B\u0438\u043A\u0435 \u043E\u0437\u0435\u0440\u043E \u0432 \u041D\u0430\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u043F\u0430\u0440\u043A\u0443 \u0421\u0438\u043B\u0430. \u041E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0435 \u0434\u0435\u0440\u0435\u0432'\u044F\u043D\u0438\u043C\u0438 \u043F\u0430\u043D\u0434\u0443\u0441\u0430\u043C\u0438 \u0442\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u0438\u043C\u0438 \u0441\u0435\u043A\u0442\u043E\u0440\u0430\u043C\u0438 \u043B\u043E\u0432\u0443.",
        curiosita: "\u0412\u043E\u0434\u0430 \u043E\u0437\u0435\u0440\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u043F\u043E\u043B\u0438\u0432\u0443 \u0437\u043D\u0430\u043C\u0435\u043D\u0438\u0442\u043E\u0457 \u043A\u0430\u0440\u0442\u043E\u043F\u043B\u0456 \u0421\u0438\u043B\u0430 (Patata della Sila IGP)."
    },
    {
        id: "ampollino_lake",
        regione: "calabria",
        nome: "Lago Ampollino (\u041E\u0437\u0435\u0440\u043E \u0410\u043C\u043F\u043E\u043B\u043B\u0456\u043D\u043E - \u041A\u0440\u043E\u0442\u043E\u043D\u0435)",
        tipo: "naturale",
        lat: 39.1823,
        lon: 16.6841,
        immagine: "./assets/images/ampollino_lake.jpg",
        pesci: [
            "\u0429\u0443\u043A\u0430",
            "\u041A\u043E\u0440\u043E\u043F",
            "\u0420\u0456\u0447\u043A\u043E\u0432\u0438\u0439 \u043E\u043A\u0443\u043D\u044C"
        ],
        info_generale: "\u0428\u0442\u0443\u0447\u043D\u0435 \u043E\u0437\u0435\u0440\u043E \u0437 \u0440\u0456\u0432\u043D\u0438\u043C\u0438 \u0434\u0435\u0440\u0435\u0432'\u044F\u043D\u0438\u043C\u0438 \u043F\u043E\u043C\u043E\u0441\u0442\u0430\u043C\u0438, \u0456\u043D\u0442\u0435\u0433\u0440\u043E\u0432\u0430\u043D\u0438\u043C\u0438 \u0443 \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u043D\u0456 \u0437\u043E\u043D\u0438 \u0437 \u0431\u0435\u0437\u0431\u0430\u0440'\u0454\u0440\u043D\u0438\u043C \u0434\u043E\u0441\u0442\u0443\u043F\u043E\u043C.",
        curiosita: "\u0426\u0435 \u043F\u0435\u0440\u0448\u0435 \u0448\u0442\u0443\u0447\u043D\u0435 \u043E\u0437\u0435\u0440\u043E, \u043F\u043E\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u0435 \u0432 \u0433\u043E\u0440\u0430\u0445 \u0421\u0438\u043B\u0430 \u0432 1926 \u0440\u043E\u0446\u0456 \u0434\u043B\u044F \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u0430 \u0433\u0456\u0434\u0440\u043E\u0435\u043D\u0435\u0440\u0433\u0456\u0457."
    },
    {
        id: "angitola_lake",
        regione: "calabria",
        nome: "Lago dell'Angitola (\u041E\u0437\u0435\u0440\u043E \u0410\u043D\u0434\u0436\u0456\u0442\u043E\u043B\u0430)",
        tipo: "naturale",
        lat: 38.7412,
        lon: 16.2145,
        immagine: "./assets/images/angitola_lake.jpg",
        pesci: [
            "\u041A\u043E\u0440\u043E\u043F \u0420\u0435\u0434\u0436\u0438\u043D\u0430",
            "\u041A\u0430\u0440\u0430\u0441\u044C",
            "\u0410\u043C\u0443\u0440"
        ],
        info_generale: "\u041F\u0440\u0438\u0440\u043E\u0434\u043D\u0438\u0439 \u0437\u0430\u043F\u043E\u0432\u0456\u0434\u043D\u0438\u043A WWF \u0437 \u043F\u043B\u043E\u0441\u043A\u0438\u043C\u0438 \u0442\u0430 \u0430\u0441\u0444\u0430\u043B\u044C\u0442\u043E\u0432\u0430\u043D\u0438\u043C\u0438 \u0434\u043E\u0440\u0456\u0436\u043A\u0430\u043C\u0438, \u0449\u043E \u0432\u0435\u0434\u0443\u0442\u044C \u043F\u0440\u044F\u043C\u043E \u0434\u043E \u0432\u0438\u0434\u0456\u043B\u0435\u043D\u0438\u0445 \u0440\u0438\u0431\u043E\u043B\u043E\u0432\u043D\u0438\u0445 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C.",
        curiosita: "\u0426\u0435 \u0454\u0434\u0438\u043D\u0430 \u0432\u043E\u0434\u043E\u0439\u043C\u0430 \u0432 \u041A\u0430\u043B\u0430\u0431\u0440\u0456\u0457, \u0434\u0435 \u0433\u043D\u0456\u0437\u0434\u0438\u0442\u044C\u0441\u044F \u0440\u0456\u0434\u043A\u0456\u0441\u043D\u0438\u0439 \u043F\u0442\u0430\u0445 - \u0432\u0435\u043B\u0438\u043A\u0430 \u043F\u043E\u0433\u0430\u043D\u043A\u0430."
    },
    // ================= FRIULI-VENEZIA GIULIA =================
    {
        id: "barcis_pordenone",
        regione: "friuli_venezia_giulia",
        nome: "Lago di Barcis (\u041E\u0437\u0435\u0440\u043E \u0411\u0430\u0440\u0447\u0456\u0441 - \u041F\u043E\u0440\u0434\u0435\u043D\u043E\u043D\u0435)",
        tipo: "naturale",
        lat: 46.1915,
        lon: 12.5642,
        immagine: "./assets/images/barcis_pordenone.jpg",
        pesci: [
            "\u0421\u0442\u0440\u0443\u043C\u043A\u043E\u0432\u0430 \u0444\u043E\u0440\u0435\u043B\u044C",
            "\u041F\u0430\u043B\u0456\u044F",
            "\u0425\u0430\u0440\u0456\u0443\u0441"
        ],
        info_generale: "\u0421\u043C\u0430\u0440\u0430\u0433\u0434\u043E\u0432\u0435 \u0430\u043B\u044C\u043F\u0456\u0439\u0441\u044C\u043A\u0435 \u043E\u0437\u0435\u0440\u043E \u0437 \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0437\u0430\u0430\u0441\u0444\u0430\u043B\u044C\u0442\u043E\u0432\u0430\u043D\u043E\u044E \u043E\u0437\u0435\u0440\u043D\u043E\u044E \u043F\u0440\u043E\u0433\u0443\u043B\u044F\u043D\u043A\u043E\u0432\u043E\u044E \u043B\u0456\u043D\u0456\u0454\u044E.",
        curiosita: "\u0412\u043E\u0434\u0430 \u043C\u0430\u0454 \u0443\u043D\u0456\u043A\u0430\u043B\u044C\u043D\u0438\u0439 \u043D\u0430\u0441\u0438\u0447\u0435\u043D\u0438\u0439 \u0437\u0435\u043B\u0435\u043D\u043E-\u0431\u0456\u0440\u044E\u0437\u043E\u0432\u0438\u0439 \u043A\u043E\u043B\u0456\u0440 \u0447\u0435\u0440\u0435\u0437 \u043E\u0441\u043E\u0431\u043B\u0438\u0432\u0456 \u0432\u0430\u043F\u043D\u044F\u043A\u043E\u0432\u0456 \u0434\u043E\u043C\u0456\u0448\u043A\u0438 \u0440\u0456\u0447\u043A\u0438 \u0427\u0435\u043B\u043B\u0456\u043D\u0430."
    },
    {
        id: "sauris_lake",
        regione: "friuli_venezia_giulia",
        nome: "Lago di Sauris (\u041E\u0437\u0435\u0440\u043E \u0421\u0430\u0443\u0440\u0456\u0441 - \u0423\u0434\u0456\u043D\u0435)",
        tipo: "naturale",
        lat: 46.4612,
        lon: 12.7145,
        immagine: "./assets/images/sauris_lake.jpg",
        pesci: [
            "\u0420\u0430\u0434\u0443\u0436\u043D\u0430 \u0444\u043E\u0440\u0435\u043B\u044C",
            "\u041C\u0430\u0440\u043C\u0443\u0440\u043E\u0432\u0430 \u0444\u043E\u0440\u0435\u043B\u044C",
            "\u0413\u043E\u043B\u0435\u0446\u044C"
        ],
        info_generale: "\u0412\u0438\u0441\u043E\u043A\u043E\u0433\u0456\u0440\u043D\u0435 \u0448\u0442\u0443\u0447\u043D\u0435 \u043E\u0437\u0435\u0440\u043E \u0437 \u043F\u043E\u043B\u043E\u0433\u0438\u043C\u0438 \u0431\u0435\u0442\u043E\u043D\u043E\u0432\u0430\u043D\u0438\u043C\u0438 \u0437'\u0457\u0437\u0434\u0430\u043C\u0438 \u0431\u0456\u043B\u044F \u0431\u0430\u0437\u0438 \u0442\u0435\u0445\u043D\u0456\u0447\u043D\u043E\u0433\u043E \u043E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F \u0433\u0440\u0435\u0431\u043B\u0456, \u0431\u0435\u0437 \u0431\u0430\u0440'\u0454\u0440\u0456\u0432.",
        curiosita: "\u0421\u0435\u043B\u0438\u0449\u0435 \u0421\u0430\u0443\u0440\u0456\u0441 \u0432\u0456\u0434\u043E\u043C\u0435 \u0441\u0432\u043E\u0454\u044E \u0443\u043D\u0456\u043A\u0430\u043B\u044C\u043D\u043E\u044E \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u043E\u044E \u0442\u0430 \u0437\u043D\u0430\u043C\u0435\u043D\u0438\u0442\u0438\u043C \u043A\u043E\u043F\u0447\u0435\u043D\u0438\u043C \u043E\u043A\u043E\u0441\u0442\u043E\u043C (Prosciutto di Sauris IGP)."
    },
    {
        id: "cavazzo_lake",
        regione: "friuli_venezia_giulia",
        nome: "Lago di Cavazzo (\u041E\u0437\u0435\u0440\u043E \u041A\u0430\u0432\u0430\u0446\u0446\u043E - \u0423\u0434\u0456\u043D\u0435)",
        tipo: "naturale",
        lat: 46.3212,
        lon: 13.0541,
        immagine: "./assets/images/cavazzo_lake.jpg",
        pesci: [
            "\u0429\u0443\u043A\u0430",
            "\u0420\u0456\u0447\u043A\u043E\u0432\u0438\u0439 \u043E\u043A\u0443\u043D\u044C",
            "\u041B\u0438\u043D\u044C"
        ],
        info_generale: "\u041D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0435 \u043F\u0440\u0438\u0440\u043E\u0434\u043D\u0435 \u043E\u0437\u0435\u0440\u043E \u0440\u0435\u0433\u0456\u043E\u043D\u0443, \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0435 \u0434\u0435\u0440\u0435\u0432'\u044F\u043D\u0438\u043C\u0438 \u043F\u0440\u0438\u0447\u0430\u043B\u0430\u043C\u0438 \u0437\u0456 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u043C\u0438 \u043F\u0430\u043D\u0434\u0443\u0441\u0430\u043C\u0438 \u0434\u043B\u044F \u043F\u0430\u0440\u0430\u043B\u0456\u043C\u043F\u0456\u0439\u0446\u0456\u0432.",
        curiosita: "\u0417\u0433\u0456\u0434\u043D\u043E \u0437 \u043B\u0435\u0433\u0435\u043D\u0434\u0430\u043C\u0438, \u043E\u0437\u0435\u0440\u043E \u0436\u0438\u0432\u0438\u0442\u044C\u0441\u044F \u0431\u0435\u0437\u043F\u043E\u0441\u0435\u0440\u0435\u0434\u043D\u044C\u043E \u0437 \u043F\u0456\u0434\u0437\u0435\u043C\u043D\u043E\u0433\u043E \u0442\u0430\u0454\u043C\u043D\u043E\u0433\u043E \u043B\u044C\u043E\u0434\u043E\u0432\u0438\u043A\u0430, \u0442\u043E\u043C\u0443 \u0432\u043E\u0434\u0430 \u043F\u0440\u043E\u0445\u043E\u043B\u043E\u0434\u043D\u0430."
    },
    // ================= LIGURIA =================
    {
        id: "porto_genova",
        regione: "liguria",
        nome: "Porto Antico (\u0421\u0442\u0430\u0440\u0438\u0439 \u041F\u043E\u0440\u0442 \u0413\u0435\u043D\u0443\u0457)",
        tipo: "costa",
        lat: 44.4088,
        lon: 8.9242,
        immagine: "./assets/images/porto_genova.jpg",
        pesci: [
            "\u0414\u043E\u0440\u0430\u0434\u0430",
            "\u041B\u0430\u0432\u0440\u0430\u043A",
            "\u041A\u0435\u0444\u0430\u043B\u044C"
        ],
        info_generale: "\u0406\u0441\u0442\u043E\u0440\u0438\u0447\u043D\u0430 \u043F\u043E\u0440\u0442\u043E\u0432\u0430 \u0437\u043E\u043D\u0430, \u0440\u0435\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u0439\u043E\u0432\u0430\u043D\u0430 \u0420\u0435\u043D\u0446\u043E \u041F\u0456\u0430\u043D\u043E. \u041F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u043F\u043B\u043E\u0441\u043A\u0456 \u0446\u0435\u043C\u0435\u043D\u0442\u043D\u0456 \u043F\u0456\u0440\u0441\u0438 \u0437 \u043F\u0430\u043D\u0434\u0443\u0441\u0430\u043C\u0438.",
        curiosita: "\u0413\u043B\u0438\u0431\u0438\u043D\u0430 \u0431\u0456\u043B\u044F \u043F\u0440\u0438\u0447\u0430\u043B\u0456\u0432 \u043F\u0435\u0440\u0435\u0432\u0438\u0449\u0443\u0454 9 \u043C\u0435\u0442\u0440\u0456\u0432, \u0449\u043E \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u0454 \u043B\u043E\u0432\u0438\u0442\u0438 \u0432\u0435\u043B\u0438\u043A\u0443 \u043C\u043E\u0440\u0441\u044C\u043A\u0443 \u0440\u0438\u0431\u0443 \u043F\u0440\u044F\u043C\u043E \u0437 \u043C\u0456\u0441\u044C\u043A\u043E\u0457 \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u043E\u0457."
    },
    {
        id: "molo_la_spezia",
        regione: "liguria",
        nome: "Molo Italia (\u041C\u043E\u043B \u0406\u0442\u0430\u043B\u0456\u044F - \u041B\u0430-\u0421\u043F\u0435\u0446\u0456\u044F)",
        tipo: "costa",
        lat: 44.1023,
        lon: 9.8241,
        immagine: "./assets/images/molo_la_spezia.jpg",
        pesci: [
            "\u041C\u043E\u0440\u0441\u044C\u043A\u0438\u0439 \u043A\u0430\u0440\u0430\u0441\u044C",
            "\u041B\u0430\u0432\u0440\u0430\u043A",
            "\u041A\u0430\u043B\u044C\u043C\u0430\u0440"
        ],
        info_generale: "\u0414\u043E\u0432\u0433\u0438\u0439 \u0430\u0441\u0444\u0430\u043B\u044C\u0442\u043E\u0432\u0430\u043D\u0438\u0439 \u043C\u043E\u043B \u0437 \u0437\u0430\u0445\u0438\u0441\u043D\u0438\u043C\u0438 \u043E\u0433\u043E\u0440\u043E\u0436\u0430\u043C\u0438, \u0449\u043E \u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0454 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u0438\u0439 \u043F\u0440\u043E\u0441\u0442\u0456\u0440 \u0434\u043B\u044F \u0440\u0438\u0431\u0430\u043B\u043E\u043A \u043D\u0430 \u0432\u0456\u0437\u043A\u0430\u0445.",
        curiosita: "\u041C\u043E\u043B \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0438\u0439 \u0443 \u0437\u0430\u043A\u0440\u0438\u0442\u0456\u0439 \u0431\u0443\u0445\u0442\u0456, \u0442\u043E\u043C\u0443 \u0442\u0443\u0442 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u043D\u043E \u043D\u0456\u043A\u043E\u043B\u0438 \u043D\u0435 \u0431\u0443\u0432\u0430\u0454 \u0441\u0438\u043B\u044C\u043D\u0438\u0445 \u0448\u0442\u043E\u0440\u043C\u043E\u0432\u0438\u0445 \u0445\u0432\u0438\u043B\u044C."
    },
    {
        id: "lago_osiglia",
        regione: "liguria",
        nome: "Lago di Osiglia (\u041E\u0437\u0435\u0440\u043E \u041E\u0441\u0456\u043B\u044C\u044F - \u0421\u0430\u0432\u043E\u043D\u0430)",
        tipo: "naturale",
        lat: 44.2812,
        lon: 8.2145,
        immagine: "./assets/images/lago_osiglia.jpg",
        pesci: [
            "\u0420\u0430\u0434\u0443\u0436\u043D\u0430 \u0444\u043E\u0440\u0435\u043B\u044C",
            "\u041A\u043E\u0440\u043E\u043F",
            "\u0420\u0456\u0447\u043A\u043E\u0432\u0438\u0439 \u043E\u043A\u0443\u043D\u044C"
        ],
        info_generale: "\u0413\u0456\u0440\u0441\u044C\u043A\u0435 \u0448\u0442\u0443\u0447\u043D\u0435 \u043E\u0437\u0435\u0440\u043E \u0437 \u043D\u043E\u0432\u0438\u043C\u0438 \u0434\u0435\u0440\u0435\u0432'\u044F\u043D\u0438\u043C\u0438 \u043F\u0456\u0440\u0441\u0430\u043C\u0438 \u0434\u043B\u044F \u0440\u0438\u0431\u043E\u043B\u043E\u0432\u043B\u0456, \u044F\u043A\u0456 \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0456 \u0456\u043D\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u0438\u043C\u0438 \u043F\u0456\u0434'\u0457\u0437\u0434\u0430\u043C\u0438.",
        curiosita: "\u0420\u0430\u0437 \u043D\u0430 10 \u0440\u043E\u043A\u0456\u0432 \u043E\u0437\u0435\u0440\u043E \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u043E\u0441\u0443\u0448\u0443\u044E\u0442\u044C \u0434\u043B\u044F \u0442\u0435\u0445\u043D\u0456\u0447\u043D\u0438\u0445 \u0440\u043E\u0431\u0456\u0442, \u0432\u0456\u0434\u043A\u0440\u0438\u0432\u0430\u044E\u0447\u0438 \u0437\u0430\u043B\u0438\u0448\u043A\u0438 \u0437\u0430\u0442\u043E\u043D\u0443\u043B\u043E\u0433\u043E \u0441\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0432\u0456\u0447\u043D\u043E\u0433\u043E \u0441\u0435\u043B\u0430."
    },
    // ================= MARCHE =================
    {
        id: "fiastra_macerata",
        regione: "marche",
        nome: "Lago di Fiastra (\u041E\u0437\u0435\u0440\u043E \u0424'\u044F\u0441\u0442\u0440\u0430 - \u041C\u0430\u0447\u0435\u0440\u0430\u0442\u0430)",
        tipo: "naturale",
        lat: 43.0384,
        lon: 13.1512,
        immagine: "./assets/images/fiastra_macerata.jpg",
        pesci: [
            "\u0420\u0443\u0441\u043B\u0430 \u0444\u043E\u0440\u0435\u043B\u044C",
            "\u041A\u043E\u0440\u043E\u043F",
            "\u0420\u0456\u0447\u043A\u043E\u0432\u0438\u0439 \u043E\u043A\u0443\u043D\u044C"
        ],
        info_generale: "\u0427\u0438\u0441\u0442\u0435 \u0433\u0456\u0440\u0441\u044C\u043A\u0435 \u043E\u0437\u0435\u0440\u043E \u0432 \u043F\u0430\u0440\u043A\u0443 \u041C\u043E\u043D\u0442\u0456 \u0421\u0438\u0431\u0456\u043B\u043B\u0456\u043D\u0456. \u041C\u0430\u0454 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u043E \u043E\u0431\u043B\u0430\u0448\u0442\u043E\u0432\u0430\u043D\u0456 \u0441\u0435\u043A\u0442\u043E\u0440\u0438 \u0437 \u0431\u0435\u0442\u043E\u043D\u043D\u043E\u044E \u043E\u0441\u043D\u043E\u0432\u043E\u044E \u0431\u0456\u043B\u044F \u0434\u0430\u043C\u0431\u0438.",
        curiosita: "\u0412\u043E\u0434\u0430 \u043D\u0430\u0441\u0442\u0456\u043B\u044C\u043A\u0438 \u043F\u0440\u043E\u0437\u043E\u0440\u0430, \u0449\u043E \u043F\u0456\u0434 \u0447\u0430\u0441 \u0441\u043E\u043D\u044F\u0447\u043D\u043E\u0457 \u043F\u043E\u0433\u043E\u0434\u0438 \u043C\u043E\u0436\u043D\u0430 \u0432\u0456\u0437\u0443\u0430\u043B\u044C\u043D\u043E \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044E\u0432\u0430\u0442\u0438 \u0440\u0443\u0445 \u0440\u0438\u0431\u0438 \u043D\u0430 \u0433\u043B\u0438\u0431\u0438\u043D\u0456 \u0434\u043E 5 \u043C\u0435\u0442\u0440\u0456\u0432."
    },
    {
        id: "molo_ancona",
        regione: "marche",
        nome: "Molo Sud Ancona (\u041F\u0456\u0432\u0434\u0435\u043D\u043D\u0438\u0439 \u043C\u043E\u043B \u0410\u043D\u043A\u043E\u043D\u0438)",
        tipo: "costa",
        lat: 43.6184,
        lon: 13.5152,
        immagine: "./assets/images/molo_ancona.jpg",
        pesci: [
            "\u0421\u0430\u0440\u0430\u0433\u043E",
            "\u0414\u043E\u0440\u0430\u0434\u0430",
            "\u0421\u043A\u0443\u043C\u0431\u0440\u0456\u044F"
        ],
        info_generale: "\u0428\u0443\u043A\u0430\u043D\u0438\u0439 \u0437\u0430\u043B\u0456\u0437\u043E\u0431\u0435\u0442\u043E\u043D\u043D\u0438\u0439 \u043F\u0456\u0440\u0441, \u0430\u0434\u0430\u043F\u0442\u043E\u0432\u0430\u043D\u0438\u0439 \u0443 2023 \u0440\u043E\u0446\u0456 \u0434\u043B\u044F \u0431\u0435\u0437\u0431\u0430\u0440'\u0454\u0440\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0443 \u0440\u0438\u0431\u0430\u043B\u043E\u043A \u0437 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u043E\u044E \u0440\u0443\u0445\u043B\u0438\u0432\u0456\u0441\u0442\u044E.",
        curiosita: "\u0426\u0435\u0439 \u043C\u043E\u043B \u0454 \u0447\u0430\u0441\u0442\u0438\u043D\u043E\u044E \u0441\u0442\u0430\u0440\u043E\u0434\u0430\u0432\u043D\u044C\u043E\u0433\u043E \u043F\u043E\u0440\u0442\u0443 \u0422\u0440\u0430\u044F\u043D\u0430, \u0437\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u043E\u0433\u043E \u0437 \u0431\u0456\u043B\u043E\u0433\u043E \u043C\u0430\u0440\u043C\u0443\u0440\u0443 \u0432 115 \u0440\u043E\u0446\u0456 \u043D\u0430\u0448\u043E\u0457 \u0435\u0440\u0438."
    },
    {
        id: "lago_gerosa",
        regione: "marche",
        nome: "Lago di Gerosa (\u041E\u0437\u0435\u0440\u043E \u0414\u0436\u0435\u0440\u043E\u0437\u0430 - \u0410\u0441\u043A\u043E\u043B\u0456-\u041F\u0456\u0447\u0435\u043D\u043E)",
        tipo: "naturale",
        lat: 42.9212,
        lon: 13.3145,
        immagine: "./assets/images/lago_gerosa.jpg",
        pesci: [
            "\u0424\u043E\u0440\u0435\u043B\u044C",
            "\u041A\u043E\u0440\u043E\u043F \u0420\u0435\u0434\u0436\u0438\u043D\u0430",
            "\u0421\u0443\u0434\u0430\u043A"
        ],
        info_generale: "\u0428\u0442\u0443\u0447\u043D\u0430 \u0432\u043E\u0434\u043E\u0439\u043C\u0430 \u0437 \u043F\u043E\u043B\u043E\u0433\u0438\u043C\u0438 \u0430\u0441\u0444\u0430\u043B\u044C\u0442\u043E\u0432\u0430\u043D\u0438\u043C\u0438 \u0434\u043E\u0440\u0456\u0436\u043A\u0430\u043C\u0438, \u0449\u043E \u0441\u043F\u0443\u0441\u043A\u0430\u044E\u0442\u044C\u0441\u044F \u0434\u043E \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u043E \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0438\u0445 \u043F\u043B\u043E\u0441\u043A\u0438\u0445 \u0441\u0435\u043A\u0442\u043E\u0440\u0456\u0432 \u043B\u043E\u0432\u0443.",
        curiosita: "\u041E\u0437\u0435\u0440\u043E \u0436\u0438\u0432\u0438\u0442\u044C\u0441\u044F \u043A\u0440\u0438\u0436\u0430\u043D\u0438\u043C\u0438 \u043F\u0456\u0434\u0437\u0435\u043C\u043D\u0438\u043C\u0438 \u0434\u0436\u0435\u0440\u0435\u043B\u0430\u043C\u0438 \u0433\u043E\u0440\u0438 \u0412\u0456\u0442\u0442\u043E\u0440\u0435, \u0442\u043E\u043C\u0443 \u0444\u043E\u0440\u0435\u043B\u044C \u0430\u043A\u0442\u0438\u0432\u043D\u0430 \u043D\u0430\u0432\u0456\u0442\u044C \u0432\u043B\u0456\u0442\u043A\u0443."
    },
    // ================= MOLISE =================
    {
        id: "guardialfiera_lake",
        regione: "molise",
        nome: "Lago di Guardialfiera (\u041E\u0437\u0435\u0440\u043E \u0413\u0432\u0430\u0440\u0434\u0456\u0430\u043B\u044C\u0444'\u0454\u0440\u0430)",
        tipo: "naturale",
        lat: 41.8023,
        lon: 14.8342,
        immagine: "./assets/images/guardialfiera_lake.jpg",
        pesci: [
            "\u0421\u0443\u0434\u0430\u043A",
            "\u041A\u043E\u0440\u043E\u043F \u0420\u0435\u0434\u0436\u0438\u043D\u0430",
            "\u0421\u043E\u043C"
        ],
        info_generale: "\u0428\u0442\u0443\u0447\u043D\u0435 \u043E\u0437\u0435\u0440\u043E, \u043F\u0435\u0440\u0435\u0442\u043D\u0443\u0442\u0435 \u0432\u0435\u043B\u0438\u043A\u0438\u043C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u044C\u043D\u0438\u043C \u043C\u043E\u0441\u0442\u043E\u043C. \u041E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0435 \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0438\u043C\u0438 \u043F\u043E\u043B\u043E\u0433\u0438\u043C\u0438 \u0437'\u0457\u0437\u0434\u0430\u043C\u0438 \u0434\u043E \u0432\u043E\u0434\u0438.",
        curiosita: "\u041F\u0456\u0434 \u0447\u0430\u0441 \u043B\u0456\u0442\u043D\u044C\u043E\u0433\u043E \u0437\u043D\u0438\u0436\u0435\u043D\u043D\u044F \u0440\u0456\u0432\u043D\u044F \u0432\u043E\u0434\u0438 \u0437-\u043F\u0456\u0434 \u0445\u0432\u0438\u043B\u044C \u0437'\u044F\u0432\u043B\u044F\u044E\u0442\u044C\u0441\u044F \u0437\u0430\u043B\u0438\u0448\u043A\u0438 \u0434\u0430\u0432\u043D\u044C\u043E\u0440\u0438\u043C\u0441\u044C\u043A\u043E\u0433\u043E \u043A\u0430\u043C'\u044F\u043D\u043E\u0433\u043E \u043C\u043E\u0441\u0442\u0443 \u0413\u0430\u043D\u043D\u0456\u0431\u0430\u043B\u0430."
    },
    {
        id: "chiauci_lake",
        regione: "molise",
        nome: "Lago di Chiauci (\u041E\u0437\u0435\u0440\u043E \u041A'\u044F\u0443\u0447\u0456 - \u0406\u0437\u0435\u0440\u043D\u0456\u044F)",
        tipo: "naturale",
        lat: 41.6812,
        lon: 14.3852,
        immagine: "./assets/images/chiauci_lake.jpg",
        pesci: [
            "\u0421\u0442\u0440\u0443\u043C\u043A\u043E\u0432\u0430 \u0444\u043E\u0440\u0435\u043B\u044C",
            "\u0413\u043E\u043B\u043E\u0432\u0435\u043D\u044C",
            "\u041A\u0430\u0440\u0430\u0441\u044C"
        ],
        info_generale: "\u041D\u043E\u0432\u0435 \u0432\u043E\u0434\u043E\u0441\u0445\u043E\u0432\u0438\u0449\u0435 \u0437 \u043F\u043B\u043E\u0441\u043A\u0438\u043C\u0438 \u0446\u0435\u043C\u0435\u043D\u0442\u043D\u0438\u043C\u0438 \u043C\u0430\u0439\u0434\u0430\u043D\u0447\u0438\u043A\u0430\u043C\u0438 \u0440\u0438\u0431\u043E\u043B\u043E\u0432\u043B\u0456, \u0456\u043D\u0442\u0435\u0433\u0440\u043E\u0432\u0430\u043D\u0438\u043C\u0438 \u0432 \u043B\u0456\u0441\u043E\u0432\u0443 \u0456\u043D\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u0443 \u0437\u043E\u043D\u0443 \u0432\u0456\u0434\u043F\u043E\u0447\u0438\u043D\u043A\u0443.",
        curiosita: "\u041E\u0437\u0435\u0440\u043E \u043E\u0442\u043E\u0447\u0435\u043D\u0435 \u0440\u0435\u043B\u0456\u043A\u0442\u043E\u0432\u0438\u043C \u0434\u0443\u0431\u043E\u0432\u0438\u043C \u043B\u0456\u0441\u043E\u043C, \u044F\u043A\u0438\u0439 \u043E\u0445\u043E\u0440\u043E\u043D\u044F\u0454\u0442\u044C\u0441\u044F \u042E\u041D\u0415\u0421\u041A\u041E \u044F\u043A \u0431\u0456\u043E\u0441\u0444\u0435\u0440\u043D\u0438\u0439 \u0437\u0430\u043F\u043E\u0432\u0456\u0434\u043D\u0438\u043A."
    },
    {
        id: "molo_termoli",
        regione: "molise",
        nome: "Porto di Termoli (\u041F\u043E\u0440\u0442\u043E\u0432\u0438\u0439 \u043F\u0456\u0440\u0441 Termoli)",
        tipo: "costa",
        lat: 42.0041,
        lon: 15.0012,
        immagine: "./assets/images/molo_termoli.jpg",
        pesci: [
            "\u041B\u0430\u0432\u0440\u0430\u043A",
            "\u0414\u043E\u0440\u0430\u0434\u0430",
            "\u0421\u0430\u0440\u0433\u0430\u043D"
        ],
        info_generale: "\u0426\u0435\u043C\u0435\u043D\u0442\u043D\u0430 \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u0430 \u0437 \u043F\u0430\u043D\u0434\u0443\u0441\u0430\u043C\u0438 \u0442\u0430 \u0437\u0430\u0445\u0438\u0441\u043D\u0438\u043C\u0438 \u0431\u043E\u0440\u0442\u0438\u043A\u0430\u043C\u0438, \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0434\u043B\u044F \u0456\u043D\u0432\u0430\u043B\u0456\u0434\u043D\u0438\u0445 \u0432\u0456\u0437\u043A\u0456\u0432 \u043F\u0440\u044F\u043C\u043E \u0437 \u043C\u0456\u0441\u044C\u043A\u043E\u0433\u043E \u043F\u0430\u0440\u043A\u0456\u043D\u0433\u0443.",
        curiosita: "\u0417 \u0446\u044C\u043E\u0433\u043E \u043F\u0456\u0440\u0441\u0443 \u043C\u043E\u0436\u043D\u0430 \u0437\u0431\u043B\u0438\u0437\u044C\u043A\u0430 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 'Trabucchi' - \u0441\u0442\u0430\u0440\u043E\u0434\u0430\u0432\u043D\u0456 \u0434\u0435\u0440\u0435\u0432'\u044F\u043D\u0456 \u0440\u0438\u0431\u0430\u043B\u044C\u0441\u044C\u043A\u0456 \u043C\u0430\u0448\u0438\u043D\u0438."
    },
    // ================= SARDEGNA =================
    {
        id: "omodeo_oristanano",
        regione: "sardegna",
        nome: "Lago Omodeo (\u041E\u0437\u0435\u0440\u043E \u041E\u043C\u043E\u0434\u0435\u043E - \u041E\u0440\u0456\u0441\u0442\u0430\u043D\u043E)",
        tipo: "naturale",
        lat: 40.1384,
        lon: 8.9122,
        immagine: "./assets/images/omodeo_oristanano.jpg",
        pesci: [
            "\u0427\u043E\u0440\u043D\u0438\u0439 \u0431\u0430\u0441\u0441",
            "\u041A\u043E\u0440\u043E\u043F",
            "\u0421\u043E\u043C\u0438\u043A"
        ],
        info_generale: "\u041E\u0434\u043D\u0435 \u0437 \u043D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0438\u0445 \u0448\u0442\u0443\u0447\u043D\u0438\u0445 \u043E\u0437\u0435\u0440 \u0432 \u0406\u0442\u0430\u043B\u0456\u0457. \u041E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0435 \u043D\u043E\u0432\u0438\u043C\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u043C\u0438 \u043F\u0440\u0438\u0447\u0430\u043B\u0430\u043C\u0438 \u0431\u0456\u043B\u044F \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0446\u0435\u043D\u0442\u0440\u0443.",
        curiosita: "\u041D\u0430 \u0434\u043D\u0456 \u043E\u0437\u0435\u0440\u0430 \u0437\u0430\u0442\u043E\u043D\u0443\u0432 \u0446\u0456\u043B\u0438\u0439 \u0441\u043A\u0430\u043C'\u044F\u043D\u0456\u043B\u0438\u0439 \u0442\u0440\u043E\u043F\u0456\u0447\u043D\u0438\u0439 \u043B\u0456\u0441 \u0432\u0456\u043A\u043E\u043C \u043F\u043E\u043D\u0430\u0434 20 \u043C\u0456\u043B\u044C\u0439\u043E\u043D\u0456\u0432 \u0440\u043E\u043A\u0456\u0432."
    },
    {
        id: "molo_cagliari",
        regione: "sardegna",
        nome: "Molo Ichnusa (\u041C\u043E\u043B \u0406\u043A\u043D\u0443\u0437\u0430 - \u041A\u0430\u043B\u044C\u044F\u0440\u0456)",
        tipo: "costa",
        lat: 39.2112,
        lon: 9.1245,
        immagine: "./assets/images/molo_cagliari.jpg",
        pesci: [
            "\u0414\u043E\u0440\u0430\u0434\u0430",
            "\u041B\u0430\u0432\u0440\u0430\u043A",
            "\u041A\u0430\u043B\u044C\u043C\u0430\u0440"
        ],
        info_generale: "\u0421\u0443\u0447\u0430\u0441\u043D\u0430 \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u0430 \u0437 \u043F\u0430\u043D\u0434\u0443\u0441\u0430\u043C\u0438, \u0442\u0430\u043A\u0442\u0438\u043B\u044C\u043D\u043E\u044E \u043F\u043B\u0438\u0442\u043A\u043E\u044E \u0442\u0430 \u043D\u0438\u0437\u044C\u043A\u0438\u043C\u0438 \u0431\u043E\u0440\u0442\u0438\u043A\u0430\u043C\u0438 \u0434\u043B\u044F \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u043E\u0433\u043E \u043B\u043E\u0432\u0443 \u0443 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u043E\u043C\u0443 \u043C\u043E\u0440\u0456.",
        curiosita: "\u0411\u0443\u0445\u0442\u0430 \u043C\u043E\u043B\u0443 \u0454 \u043E\u0444\u0456\u0446\u0456\u0439\u043D\u043E\u044E \u0431\u0430\u0437\u043E\u044E \u043F\u0440\u0435\u0441\u0442\u0438\u0436\u043D\u043E\u0457 \u043A\u043E\u043C\u0430\u043D\u0434\u0438 \u0432\u0456\u0442\u0440\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043F\u043E\u0440\u0442\u0443 Luna Rossa."
    },
    {
        id: "lago_liscia",
        regione: "sardegna",
        nome: "Lago del Liscia (\u041E\u0437\u0435\u0440\u043E \u041B\u0456\u0448\u0430 - \u041E\u043B\u044C\u0431\u0456\u044F)",
        tipo: "naturale",
        lat: 41.0112,
        lon: 9.3241,
        immagine: "./assets/images/lago_liscia.jpg",
        pesci: [
            "\u0427\u043E\u0440\u043D\u0438\u0439 \u0431\u0430\u0441\u0441",
            "\u041A\u043E\u0440\u043E\u043F \u0420\u0435\u0434\u0436\u0438\u043D\u0430",
            "\u0420\u0456\u0447\u043A\u043E\u0432\u0438\u0439 \u043E\u043A\u0443\u043D\u044C"
        ],
        info_generale: "\u0428\u0442\u0443\u0447\u043D\u0435 \u043E\u0437\u0435\u0440\u043E \u0437 \u0440\u0456\u0432\u043D\u0438\u043C\u0438 \u043F\u0456\u0434'\u0457\u0437\u0434\u0430\u043C\u0438 \u0431\u0456\u043B\u044F \u0441\u0442\u043E\u044F\u043D\u043A\u0438 \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u043D\u043E\u0433\u043E \u043F\u043E\u0442\u044F\u0433\u0430 'Trenino Verde', \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0431\u0435\u0437\u0431\u0430\u0440'\u0454\u0440\u043D\u0435.",
        curiosita: "\u041D\u0430 \u0431\u0435\u0440\u0435\u0437\u0456 \u0446\u044C\u043E\u0433\u043E \u043E\u0437\u0435\u0440\u0430 \u0440\u043E\u0441\u0442\u0443\u0442\u044C \u043D\u0430\u0439\u0441\u0442\u0430\u0440\u0456\u0448\u0456 \u0434\u0438\u043A\u0456 \u043E\u043B\u0438\u0432\u0438 \u0432 \u0404\u0432\u0440\u043E\u043F\u0456, \u0432\u0456\u043A \u044F\u043A\u0438\u0445 \u043F\u0435\u0440\u0435\u0432\u0438\u0449\u0443\u0454 4000 \u0440\u043E\u043A\u0456\u0432."
    },
    // ================= SICILIA =================
    {
        id: "pozziello_enna",
        regione: "sicilia",
        nome: "Lago di Pozzillo (\u041E\u0437\u0435\u0440\u043E \u041F\u043E\u0446\u0446\u0456\u043B\u043B\u043E - \u0415\u043D\u043D\u0430)",
        tipo: "naturale",
        lat: 37.6415,
        lon: 14.6154,
        immagine: "./assets/images/pozziello_enna.jpg",
        pesci: [
            "\u0412\u0435\u043B\u0438\u043A\u043E\u0440\u043E\u0442\u0438\u0439 \u043E\u043A\u0443\u043D\u044C (\u0411\u0430\u0441\u0441)",
            "\u041A\u043E\u0440\u043E\u043F",
            "\u0421\u0443\u0434\u0430\u043A"
        ],
        info_generale: "\u0413\u043E\u043B\u043E\u0432\u043D\u0438\u0439 \u0446\u0435\u043D\u0442\u0440 \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0431\u0430\u0441\u0441-\u0444\u0456\u0448\u0438\u043D\u0433\u0443 \u0421\u0438\u0446\u0438\u043B\u0456\u0457. \u0411\u0435\u0440\u0435\u0433\u043E\u0432\u0430 \u043B\u0456\u043D\u0456\u044F \u0431\u0456\u043B\u044F \u0433\u0440\u0435\u0431\u043B\u0456 \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0430 \u043F\u0430\u043D\u0434\u0443\u0441\u0430\u043C\u0438 \u0434\u043B\u044F \u043F\u0430\u0440\u0430\u043B\u0456\u043C\u043F\u0456\u0439\u0446\u0456\u0432.",
        curiosita: "\u041E\u0437\u0435\u0440\u043E \u043E\u0442\u043E\u0447\u0435\u043D\u0435 \u0432\u0435\u043B\u0438\u0447\u0435\u0437\u043D\u0438\u043C\u0438 \u0435\u0432\u043A\u0430\u043B\u0456\u043F\u0442\u043E\u0432\u0438\u043C\u0438 \u043B\u0456\u0441\u0430\u043C\u0438, \u043F\u043E\u0441\u0430\u0434\u0436\u0435\u043D\u0438\u043C\u0438 \u0432 \u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456 20 \u0441\u0442\u043E\u043B\u0456\u0442\u0442\u044F."
    },
    {
        id: "molo_catania",
        regione: "sicilia",
        nome: "Molo di Levante (\u0421\u0445\u0456\u0434\u043D\u0438\u0439 \u043C\u043E\u043B \u041A\u0430\u0442\u0430\u043D\u0456\u0457)",
        tipo: "costa",
        lat: 37.5012,
        lon: 15.0945,
        immagine: "./assets/images/molo_catania.jpg",
        pesci: [
            "\u0414\u043E\u0440\u0430\u0434\u0430",
            "\u041A\u0430\u0440\u0430\u0441\u044C",
            "\u041B\u0430\u0432\u0440\u0430\u043A"
        ],
        info_generale: "\u041F\u0440\u044F\u043C\u0438\u0439 \u043F\u043B\u043E\u0441\u043A\u0438\u0439 \u0437\u0430\u043B\u0456\u0437\u043E\u0431\u0435\u0442\u043E\u043D\u043D\u0438\u0439 \u043C\u043E\u043B \u0434\u043E\u0432\u0436\u0438\u043D\u043E\u044E \u043F\u043E\u043D\u0430\u0434 1 \u043A\u043C \u0437 \u043F\u0430\u043D\u0434\u0443\u0441\u0430\u043C\u0438 \u0442\u0430 \u0437\u0430\u0445\u0438\u0441\u043D\u0438\u043C\u0438 \u0431\u043E\u0440\u0442\u0438\u043A\u0430\u043C\u0438 \u0431\u0435\u0437 \u0431\u0430\u0440'\u0454\u0440\u0456\u0432.",
        curiosita: "\u041F\u0456\u0434 \u0447\u0430\u0441 \u0440\u0438\u0431\u043E\u043B\u043E\u0432\u043B\u0456 \u0437 \u0446\u044C\u043E\u0433\u043E \u043C\u043E\u043B\u0443 \u0432\u0456\u0434\u043A\u0440\u0438\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u0432\u0440\u0430\u0436\u0430\u044E\u0447\u0438\u0439 \u043F\u0430\u043D\u043E\u0440\u0430\u043C\u043D\u0438\u0439 \u0432\u0438\u0433\u043B\u044F\u0434 \u043D\u0430 \u0434\u0456\u044E\u0447\u0438\u0439 \u0432\u0443\u043B\u043A\u0430\u043D \u0415\u0442\u043D\u0430."
    },
    {
        id: "piana_albanesi",
        regione: "sicilia",
        nome: "Lago di Piana degli Albanesi (\u041F\u0430\u043B\u0435\u0440\u043C\u043E)",
        tipo: "naturale",
        lat: 37.9812,
        lon: 13.2841,
        immagine: "./assets/images/piana_albanesi.jpg",
        pesci: [
            "\u0429\u0443\u043A\u0430",
            "\u0427\u043E\u0440\u043D\u0438\u0439 \u0431\u0430\u0441\u0441",
            "\u041A\u043E\u0440\u043E\u043F \u0420\u0435\u0434\u0436\u0438\u043D\u0430"
        ],
        info_generale: "\u041D\u0430\u0439\u0434\u0430\u0432\u043D\u0454 \u0448\u0442\u0443\u0447\u043D\u0435 \u043E\u0437\u0435\u0440\u043E \u0421\u0438\u0446\u0438\u043B\u0456\u0457, \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0435 \u0440\u0456\u0432\u043D\u0438\u043C\u0438 \u0434\u0435\u0440\u0435\u0432'\u044F\u043D\u0438\u043C\u0438 \u043F\u0440\u0438\u0447\u0430\u043B\u0430\u043C\u0438 \u0431\u0456\u043B\u044F \u0432\u0435\u0441\u043B\u0443\u0432\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u043B\u0443\u0431\u0443.",
        curiosita: "\u0412\u043E\u0434\u043E\u0439\u043C\u0430 \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0430 \u0432 \u0435\u0442\u043D\u0456\u0447\u043D\u0456\u0439 \u043C\u043E\u0432\u043D\u0456\u0439 \u0437\u043E\u043D\u0456 Arb\xebresh\xeb, \u0434\u0435 \u043C\u0456\u0441\u0446\u0435\u0432\u0456 \u0436\u0438\u0442\u0435\u043B\u0456 \u0441\u043F\u0456\u043B\u043A\u0443\u044E\u0442\u044C\u0441\u044F \u0434\u0430\u0432\u043D\u044C\u043E\u0430\u043B\u0431\u0430\u043D\u0441\u044C\u043A\u043E\u044E \u043C\u043E\u0432\u043E\u044E."
    },
    // ================= TRENTINO-ALTO ADIGE =================
    {
        id: "caldonazzo_trento",
        regione: "trentino_alto_adige",
        nome: "Lago di Caldonazzo (\u041E\u0437\u0435\u0440\u043E \u041A\u0430\u043B\u044C\u0434\u043E\u043D\u0430\u0446\u0446\u043E)",
        tipo: "naturale",
        lat: 46.0154,
        lon: 11.2584,
        immagine: "./assets/images/caldonazzo_trento.jpg",
        pesci: [
            "\u0429\u0443\u043A\u0430",
            "\u0421\u0443\u0434\u0430\u043A",
            "\u0420\u0456\u0447\u043A\u043E\u0432\u0438\u0439 \u043E\u043A\u0443\u043D\u044C"
        ],
        info_generale: "\u041F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0456\u043D\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u0435 \u043E\u0437\u0435\u0440\u043E, \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043A\u043E\u0432\u0430\u043D\u0435 \u0434\u043B\u044F \u043F\u0430\u0440\u0430\u043B\u0456\u043C\u043F\u0456\u0439\u0441\u044C\u043A\u043E\u0433\u043E \u0432\u043E\u0434\u043D\u043E\u0433\u043E \u0441\u043F\u043E\u0440\u0442\u0443. \u041C\u0430\u0454 \u0434\u0435\u0440\u0435\u0432'\u044F\u043D\u0456 \u043F\u0456\u0440\u0441\u0438 \u0437 \u043F\u0430\u043D\u0434\u0443\u0441\u0430\u043C\u0438.",
        curiosita: "\u0426\u0435 \u0454\u0434\u0438\u043D\u0430 \u0432\u0435\u043B\u0438\u0447\u0435\u0437\u043D\u0430 \u0430\u043B\u044C\u043F\u0456\u0439\u0441\u044C\u043A\u0430 \u0432\u043E\u0434\u043E\u0439\u043C\u0430, \u0434\u0435 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0432\u043E\u0434\u0438 \u0432\u043B\u0456\u0442\u043A\u0443 \u043F\u0440\u043E\u0433\u0440\u0456\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u0434\u043E +27\xb0C."
    },
    {
        id: "lago_ledro",
        regione: "trentino_alto_adige",
        nome: "Lago di Ledro (\u041E\u0437\u0435\u0440\u043E \u041B\u0435\u0434\u0440\u043E)",
        tipo: "naturale",
        lat: 45.8712,
        lon: 10.7345,
        immagine: "./assets/images/lago_ledro.jpg",
        pesci: [
            "\u0421\u0442\u0440\u0443\u043C\u043A\u043E\u0432\u0430 \u0444\u043E\u0440\u0435\u043B\u044C",
            "\u0420\u0456\u0447\u043A\u043E\u0432\u0438\u0439 \u043E\u043A\u0443\u043D\u044C",
            "\u0421\u0438\u0433"
        ],
        info_generale: "\u0413\u0456\u0440\u0441\u044C\u043A\u0435 \u043E\u0437\u0435\u0440\u043E \u0437 \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u043F\u043B\u043E\u0441\u043A\u043E\u044E \u0437\u0430\u0430\u0441\u0444\u0430\u043B\u044C\u0442\u043E\u0432\u0430\u043D\u043E\u044E \u043F\u0440\u043E\u0433\u0443\u043B\u044F\u043D\u043A\u043E\u0432\u043E\u044E \u043B\u0456\u043D\u0456\u0454\u044E \u0442\u0430 \u0432\u0438\u0434\u0456\u043B\u0435\u043D\u0438\u043C\u0438 \u043C\u0456\u0441\u0446\u044F\u043C\u0438 \u0440\u0438\u0431\u043E\u043B\u043E\u0432\u043B\u0456 \u0437 \u043E\u0433\u043E\u0440\u043E\u0436\u0435\u044E.",
        curiosita: "\u041D\u0430 \u0431\u0435\u0440\u0435\u0437\u0456 \u043F\u0456\u0434 \u0447\u0430\u0441 \u043F\u043E\u0441\u0443\u0445\u0438 1929 \u0440\u043E\u043A\u0443 \u0437\u043D\u0430\u0439\u0448\u043B\u0438 \u0433\u0456\u0433\u0430\u043D\u0442\u0441\u044C\u043A\u0435 \u0430\u0440\u0445\u0435\u043E\u043B\u043E\u0433\u0456\u0447\u043D\u0435 \u043F\u043E\u0441\u0435\u043B\u0435\u043D\u043D\u044F \u043D\u0430 \u043F\u0430\u043B\u044F\u0445 \u0431\u0440\u043E\u043D\u0437\u043E\u0432\u043E\u0433\u043E \u0432\u0456\u043A\u0443."
    },
    {
        id: "lago_terlago",
        regione: "trentino_alto_adige",
        nome: "Lago di Terlago (\u041E\u0437\u0435\u0440\u043E \u0422\u0435\u0440\u043B\u0430\u0433\u043E - \u0422ren\u0442\u043E)",
        tipo: "naturale",
        lat: 46.0941,
        lon: 11.0552,
        immagine: "./assets/images/lago_terlago.jpg",
        pesci: [
            "\u0429\u0443\u043A\u0430",
            "\u041A\u043E\u0440\u043E\u043F \u0420\u0435\u0434\u0436\u0438\u043D\u0430",
            "\u041B\u0438\u043D\u044C"
        ],
        info_generale: "\u041D\u0430\u0439\u0431\u0430\u0433\u0430\u0442\u0448\u0430 \u043D\u0430 \u0431\u0456\u043E\u0440\u0456\u0437\u043D\u043E\u043C\u0430\u043D\u0456\u0442\u0442\u044F \u0432\u043E\u0434\u043E\u0439\u043C\u0430 \u0440\u0435\u0433\u0456\u043E\u043D\u0443, \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0430 \u043D\u043E\u0432\u0438\u043C\u0438 \u0434\u0435\u0440\u0435\u0432'\u044F\u043D\u0438\u043C\u0438 \u0456\u043D\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u0438\u043C\u0438 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430\u043C\u0438 \u0437 \u043F\u0430\u043D\u0434\u0443\u0441\u0430\u043C\u0438.",
        curiosita: "\u0426\u0435 \u043E\u0437\u0435\u0440\u043E \u0432\u0432\u0430\u0436\u0430\u0454\u0442\u044C\u0441\u044F \u0435\u043A\u043E\u0441\u0438\u0441\u0442\u0435\u043C\u043E\u044E \u0437 \u043D\u0430\u0439\u0432\u0438\u0449\u043E\u044E \u0449\u0456\u043B\u044C\u043D\u0456\u0441\u0442\u044E \u0449\u0443\u043A\u0438 \u043D\u0430 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u0438\u0439 \u043C\u0435\u0442\u0440 \u0432 \u0443\u0441\u0456\u0439 \u043F\u0440\u043E\u0432\u0456\u043D\u0446\u0456\u0457."
    },
    // ================= VALLE D'AOSTA =================
    {
        id: "place_moulin",
        regione: "valle_daosta",
        nome: "Lago di Place-Moulin (\u041E\u0437\u0435\u0440\u043E \u041F\u043B\u044F\u0441-\u041C\u0443\u043B\u0435\u043D)",
        tipo: "naturale",
        lat: 45.8942,
        lon: 7.5122,
        immagine: "./assets/images/place_moulin.jpg",
        pesci: [
            "\u0410\u043B\u044C\u043F\u0456\u0439\u0441\u044C\u043A\u0438\u0439 \u0433\u043E\u043B\u0435\u0446\u044C",
            "\u0420\u0430\u0434\u0443\u0436\u043D\u0430 \u0444\u043E\u0440\u0435\u043B\u044C"
        ],
        info_generale: "\u0428\u0442\u0443\u0447\u043D\u0435 \u0432\u043E\u0434\u043E\u0441\u0445\u043E\u0432\u0438\u0449\u0435 \u0437 \u043F\u043B\u043E\u0441\u043A\u043E\u044E \u0433\u0440\u0443\u043D\u0442\u043E\u0432\u043E-\u0430\u0441\u0444\u0430\u043B\u044C\u0442\u043E\u0432\u0430\u043D\u043E\u044E \u0434\u043E\u0440\u043E\u0433\u043E\u044E \u0434\u043E\u0432\u0436\u0438\u043D\u043E\u044E 4 \u043A\u043C \u0432\u0437\u0434\u043E\u0432\u0436 \u0431\u0435\u0440\u0435\u0433\u0430, \u0456\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u044E \u0434\u043B\u044F \u043A\u0440\u0456\u0441\u0435\u043B.",
        curiosita: "\u0413\u0440\u0435\u0431\u043B\u044F Place-Moulin \u0454 \u043E\u0434\u043D\u0456\u0454\u044E \u0437 \u043D\u0430\u0439\u0432\u0438\u0449\u0438\u0445 \u0432 \u0404\u0432\u0440\u043E\u043F\u0456 (155 \u043C\u0435\u0442\u0440\u0456\u0432), \u0430 \u0432\u043E\u0434\u0430 \u043C\u0430\u0454 \u0431\u0456\u0440\u044E\u0437\u043E\u0432\u0438\u0439 \u043A\u043E\u043B\u0456\u0440 \u0447\u0435\u0440\u0435\u0437 \u0442\u0430\u043D\u0435\u043D\u043D\u044F \u043B\u044C\u043E\u0434\u043E\u0432\u0438\u043A\u0456\u0432."
    },
    {
        id: "lago_verney",
        regione: "valle_daosta",
        nome: "Lago d'Arpy (\u041E\u0437\u0435\u0440\u043E \u0410\u0440\u043F\u0456 - \u041C\u043E\u0440\u0436\u0435)",
        tipo: "naturale",
        lat: 45.7312,
        lon: 6.9945,
        immagine: "./assets/images/lago_verney.jpg",
        pesci: [
            "\u0410\u043B\u044C\u043F\u0456\u0439\u0441\u044C\u043A\u0430 \u0444\u043E\u0440\u0435\u043B\u044C",
            "\u041F\u0430\u043B\u0456\u044F"
        ],
        info_generale: "\u0410\u043B\u044C\u043F\u0456\u0439\u0441\u044C\u043A\u0435 \u043E\u0437\u0435\u0440\u043E \u0437 \u0448\u0438\u0440\u043E\u043A\u043E\u044E \u0456 \u0440\u0456\u0432\u043D\u043E\u044E \u0441\u0442\u0435\u0436\u043A\u043E\u044E \u0434\u043E\u0441\u0442\u0443\u043F\u0443 \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u043F\u0430\u0434\u0456\u0432 \u0432\u0438\u0441\u043E\u0442, \u0449\u043E \u0432\u0435\u0434\u0435 \u0434\u043E \u0434\u0435\u0440\u0435\u0432'\u044F\u043D\u043E\u0433\u043E \u043F\u043E\u043C\u043E\u0441\u0442\u0443.",
        curiosita: "\u0417 \u0431\u0435\u0440\u0435\u0433\u0430 \u043F\u043E\u043C\u043E\u0441\u0442\u0443 \u0432\u0456\u0434\u043A\u0440\u0438\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u0456\u0434\u0435\u0430\u043B\u044C\u043D\u0435 \u043F\u0440\u044F\u043C\u0435 \u0434\u0437\u0435\u0440\u043A\u0430\u043B\u044C\u043D\u0435 \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0445\u0440\u0435\u0431\u0442\u0430 \u041C\u043E\u043D\u0431\u043B\u0430\u043D."
    },
    {
        id: "laghetto_morgex",
        regione: "valle_daosta",
        nome: "Laghetto di Morgex (\u0421\u0442\u0430\u0432\u043E\u043A \u041C\u043E\u0440\u0436\u0435)",
        tipo: "privato",
        lat: 45.7512,
        lon: 7.0341,
        immagine: "./assets/images/laghetto_morgex.jpg",
        pesci: [
            "\u0420\u0430\u0434\u0443\u0436\u043D\u0430 \u0444\u043E\u0440\u0435\u043B\u044C",
            "\u0417\u043E\u043B\u043E\u0442\u0430 \u0444\u043E\u0440\u0435\u043B\u044C"
        ],
        info_generale: "\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u0438\u0439 \u0437\u0430\u0440\u0438\u0431\u043B\u0435\u043D\u0438\u0439 \u0441\u0442\u0430\u0432\u043E\u043A \u0440\u0438\u0431\u043E\u043B\u043E\u0432\u043D\u043E\u0433\u043E \u0442\u043E\u0432\u0430\u0440\u0438\u0441\u0442\u0432\u0430 \u0437 \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0446\u0435\u043C\u0435\u043D\u0442\u043E\u0432\u0430\u043D\u0438\u043C \u043F\u043B\u043E\u0441\u043A\u0438\u043C \u043A\u043E\u043D\u0442\u0443\u0440\u043E\u043C \u0431\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u0457 \u043B\u0456\u043D\u0456\u0457.",
        curiosita: "T\u0443\u0442 \u0434\u043E\u0437\u0432\u043E\u043B\u0435\u043D\u043E \u0440\u0438\u0431\u0430\u043B\u0438\u0442\u0438 \u0431\u0435\u0437 \u0434\u0435\u0440\u0436\u0430\u0432\u043D\u043E\u0457 \u043B\u0456\u0446\u0435\u043D\u0437\u0456\u0457, \u0441\u043F\u043B\u0430\u0447\u0443\u044E\u0447\u0438 \u043B\u0438\u0448\u0435 \u0437\u0430 \u0432\u0430\u0433\u0443 \u0432\u0438\u043B\u043E\u0432\u043B\u0435\u043D\u043E\u0457 \u0444\u043E\u0440\u0435\u043B\u0456."
    },
    // ================= ABRUZZO =================
    {
        id: "scanno_lake_extra",
        regione: "abruzzo",
        nome: "Lago di Barrea (\u041E\u0437\u0435\u0440\u043E \u0411\u0430\u0440\u0440\u0435\u044F)",
        tipo: "naturale",
        lat: 41.7612,
        lon: 13.9845,
        immagine: "./assets/images/scanno_lake_extra.jpg",
        pesci: [
            "\u041A\u043E\u0440\u043E\u043F",
            "\u041A\u0430\u0440\u0430\u0441\u044C",
            "\u0413\u043E\u043B\u043E\u0432\u0435\u043D\u044C"
        ],
        info_generale: "\u0428\u0442\u0443\u0447\u043D\u0435 \u043E\u0437\u0435\u0440\u043E \u0432 \u041D\u0430\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u043F\u0430\u0440\u043A\u0443 \u0410\u0431\u0440\u0443\u0446\u0446\u043E, \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u0435 \u043F\u043B\u043E\u0441\u043A\u0438\u043C\u0438 \u043F\u0456\u0440\u0441\u0430\u043C\u0438 \u0431\u0456\u043B\u044F \u043A\u0435\u043C\u043F\u0456\u043D\u0433\u043E\u0432\u043E\u0457 \u0456\u043D\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u043E\u0457 \u0437\u043E\u043D\u0438.",
        curiosita: "\u0411\u0435\u0440\u0435\u0433\u0438 \u043E\u0437\u0435\u0440\u0430 \u0447\u0430\u0441\u0442\u043E \u0432\u0456\u0434\u0432\u0456\u0434\u0443\u044E\u0442\u044C \u0434\u0438\u043A\u0456 \u043E\u043B\u0435\u043D\u0456, \u044F\u043A\u0456 \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u043E \u043D\u0435 \u0431\u043E\u044F\u0442\u044C\u0441\u044F \u0441\u043F\u043E\u043A\u0456\u0439\u043D\u0438\u0445 \u0440\u0438\u0431\u0430\u043B\u043E\u043A \u043D\u0430 \u043F\u043E\u043C\u043E\u0441\u0442\u0430\u0445."
    },
    // ================= LIGURIA  =================
    {
        id: "molo_sanremo",
        regione: "liguria",
        nome: "Molo di Sanremo (\u041F\u043E\u0440\u0442\u043E\u0432\u0438\u0439 \u043C\u043E\u043B \u0421\u0430\u043D\u0440\u0435\u043C\u043E)",
        tipo: "costa",
        lat: 43.8112,
        lon: 7.7845,
        immagine: "./assets/images/molo_sanremo.jpg",
        pesci: [
            "\u0414\u043E\u0440\u0430\u0434\u0430",
            "\u041C\u043E\u0440\u0441\u044C\u043A\u0438\u0439 \u0432\u043E\u0432\u043A",
            "\u0421\u0430\u0440\u0433\u043E"
        ],
        info_generale: "\u041C\u043E\u043D\u043E\u043B\u0456\u0442\u043D\u0438\u0439 \u0431\u0435\u0442\u043E\u043D\u043D\u0438\u0439 \u043C\u043E\u043B \u0437 \u043F\u043E\u043B\u043E\u0433\u0438\u043C\u0438 \u0440\u0430\u043C\u043F\u0430\u043C\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u0443, \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u0438\u0439 \u0432\u0456\u0434 \u0441\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0432\u0456\u0442\u0440\u0443 \u043A\u0430\u043C'\u044F\u043D\u043E\u044E \u0441\u0442\u0456\u043D\u043E\u044E.",
        curiosita: "\u041F\u043E\u0440\u0443\u0447 \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0430 \u0456\u0441\u0442\u043E\u0440\u0438\u0447\u043D\u0430 \u043D\u0430\u0431\u0435\u0440\u0435\u0436\u043D\u0430, \u0434\u0435 \u0449\u043E\u0440\u0456\u0447\u043D\u043E \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442\u044C \u0437\u043D\u0430\u043C\u0435\u043D\u0438\u0442\u0438\u0439 \u043C\u0443\u0437\u0438\u0447\u043D\u0438\u0439 \u0444\u0435\u0441\u0442\u0438\u0432\u0430\u043B\u044C."
    }
];
const regioniNomi = {
    lazio: "\u041B\u0430\u0446\u0456\u043E (Lazio) - \u267F 7 \u043C\u0456\u0441\u0446\u044C",
    lombardia: "\u041B\u043E\u043C\u0431\u0430\u0440\u0434\u0456\u044F (Lombardia) - \u267F 3 \u043C\u0456\u0441\u0446\u044F",
    toscana: "\u0422\u043E\u0441\u043A\u0430\u043D\u0430 (Toscana) - \u267F 3 \u043C\u0456\u0441\u0446\u044F",
    veneto: "\u0412\u0435\u043D\u0435\u0442\u043E (Veneto) - \u267F 3 \u043C\u0456\u0441\u0446\u044F",
    piemonte: "\u041F'\u0454\u043C\u043E\u043D\u0442 (Piemonte) - \u267F 3 \u043C\u0456\u0441\u0446\u044F",
    emilia_romagna: "\u0415\u043C\u0456\u043B\u0456\u044F-Romagna - \u267F 3 \u043C\u0456\u0441\u0446\u044F",
    campania: "\u041A\u0430\u043C\u043F\u0430\u043D\u0456\u044F (Campania) - \u267F 3 \u043C\u0456\u0441\u0446\u044F",
    puglia: "\u041F\u0443\u0433\u043B\u0456\u044F (Puglia) - \u267F 3 \u043C\u0456\u0441\u0446\u044F",
    umbria: "\u0423\u043C\u0431\u0440\u0456\u044F (Umbria) - \u267F 3 \u043C\u0456\u0441\u0446\u044F",
    abruzzo: "\u0410\u0431\u0440\u0443\u0446\u0446\u043E (Abruzzo) - \u267F 4 \u043C\u0456\u0441\u0446\u044F",
    basilicata: "\u0411\u0430\u0437\u0438\u043B\u0456\u043A\u0430\u0442\u0430 (Basilicata) - \u267F 3 \u043C\u0456\u0441\u0446\u044F",
    calabria: "\u041A\u0430\u043B\u0430\u0431\u0440\u0456\u044F (Calabria) - \u267F 3 \u043C\u0456\u0441\u0446\u044F",
    friuli_venezia_giulia: "\u0424\u0440\u0456\u0443\u043B\u0456-\u0412\u0435\u043D\u0435\u0446\u0456\u044F \u0414\u0436\u0443\u043B\u0456\u044F - \u267F 3 \u043C\u0456\u0441\u0446\u044F",
    liguria: "\u041B\u0456\u0433\u0443\u0440\u0456\u044F (Liguria) - \u267F 4 \u043C\u0456\u0441\u0446\u044F",
    marche: "\u041C\u0430\u0440\u043A\u0435 (Marche) - \u267F 3 \u043C\u0456\u0441\u0446\u044F",
    molise: "\u041C\u043E\u043B\u0456\u0437\u0435 (Molise) - \u267F 3 \u043C\u0456\u0441\u0446\u044F",
    sardegna: "\u0421\u0430\u0440\u0434\u0438\u043D\u0456\u044F (Sardegna) - \u267F 3 \u043C\u0456\u0441\u0446\u044F",
    sicilia: "\u0421\u0438\u0446\u0438\u043B\u0456\u044F (Sicilia) - \u267F 3 \u043C\u0456\u0441\u0446\u044F",
    trentino_alto_adige: "\u0422\u0440\u0435\u043D\u0442\u0456\u043D\u043E-\u0410\u043B\u044C\u0442\u043E \u0410\u0434\u0456\u0434\u0436\u0435 - \u267F 3 \u043C\u0456\u0441\u0446\u044F",
    valle_daosta: "\u0412\u0430\u043B\u043B\u0435-\u0434'\u0410\u043E\u0441\u0442\u0430 (Valle d'Aosta) - \u267F 3 \u043C\u0456\u0441\u0446\u044F"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["93v64","lhpGb"], "lhpGb", "parcelRequire1840", {})

//# sourceMappingURL=happy-birthday-dad.b828852a.js.map
