// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"main.js":[function(require,module,exports) {
!function () {
    var duration = 25;
    $('.buttons').on('click', 'button', function (e) {
        var $button = $(e.currentTarget);
        var speed = $button.attr('data-speed');
        $button.addClass('active').siblings('.active').removeClass('active');
        switch (speed) {
            case 'slow':
                duration = 50;
                break;
            case 'normal':
                duration = 25;
                break;
            case 'fast':
                duration = 5;
                break;
            case 'refresh':
                window.location.reload();
                break;
        }
    });
    function writeCode(prefix, code, fn) {
        var codeBox = document.querySelector('#code');
        var write = document.querySelector('#write');
        var n = 0;
        var id = void 0;
        id = setTimeout(function run() {
            n += 1;
            codeBox.innerHTML = code.substring(0, n);
            write.innerHTML = code.substring(0, n);
            codeBox.scrollTop = codeBox.scrollHeight;
            if (n < code.length) {
                id = setTimeout(run, duration);
            } else {
                fn && fn.call();
            }
        }, duration);
    }
    var code = '.pikaWrapper{\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: #FEE433;\n}\n\n.pikachu {\n    width: 400px;\n    height: 400px;\n    position: relative;\n    overflow: hidden;\n    background: #FEE433;\n}\n\n.nose {\n    width: 0px;\n    height: 0px;\n    border-style: solid;\n    border-width: 12px;\n    border-color: black transparent transparent;\n    border-radius: 11px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    margin-left: -12px;\n}\n\n.eyeL{\n    width: 49px;\n    height: 49px;\n    border-radius: 50%;\n    background: #2E2E2E;\n    position: absolute;\n    border: 2px solid black;\n    left:70px;\n    top: 170px;\n}\n.eyeR{\n    width: 49px;\n    height: 49px;\n    border-radius: 50%;\n    background: #2E2E2E;\n    position: absolute;\n    border: 2px solid black;\n    left:280px;\n    top: 170px;\n}\n.eye ::before{\n    content: \'\';\n    display: block;\n    width: 18px;\n    height: 18px;\n    background: white;\n    position: absolute;\n    border-radius: 50%;\n    left: 6px;\n    top: -1px;\n    border: 2px solid #000;\n}\n\n.mouthUp{\n    left: 50%;\n    top: 200px;\n    position: absolute;\n}\n.lipL{\n    height: 25px;\n    width: 80px;\n    border: 2px solid black;\n    position: absolute;\n    top: 30px;\n    background: #FDE348;\n    right: 0px;\n    border-bottom-left-radius: 40px 25px;\n    border-top: none;\n    border-right: none;\n    transform: rotate(-20deg);\n}\n.lipR{\n    height: 25px;\n    width: 80px;\n    border: 2px solid black;\n    position: absolute;\n    top: 30px;\n    background: #FDE348;\n    left: 0px;\n    border-bottom-right-radius: 40px 25px;\n    border-top: none;\n    border-left: none;\n    transform: rotate(20deg);\n}\n.mouthDown{\n    bottom: 0;\n    position: absolute;\n    left: 50%;\n    margin-left: -150px;\n    height: 110px;\n    top: 240px;\n    width: 300px;\n    overflow: hidden;\n}\n.lipB{\n    height: 3500px;\n    width: 300px;\n    background: #990513;\n    border-radius: 200px/2000px;\n    border: 2px solid black;\n    position: absolute;\n    bottom: 0px;\n    overflow: hidden;\n}\n.lipB::after {\n    content: \'\';\n    position: absolute;\n    bottom: -20px;\n    width: 100px;\n    height: 100px;\n    background: #FC4A62;\n    left: 50%;\n    margin-left: -50px;\n    border-radius: 50px;\n}\n.ballL{\n    width: 68px;\n    height: 68px;\n    background: #FC0D1C;\n    border: 2px solid black;\n    border-radius: 50%;\n    position: absolute;\n    top: 250px;\n    left: 10px;\n}\n.ballR{\n    width: 68px;\n    height: 68px;\n    background: #FC0D1C;\n    border: 2px solid black;\n    border-radius: 50%;\n    position: absolute;\n    top: 250px;\n    right: 10px;\n}\n\n\n/*\u7ED8\u5236\u5B8C\u6210\uFF01*/\n';
    writeCode('', code);
}.call();
},{}],"..\\..\\..\\..\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '9344' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["..\\..\\..\\..\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.e8b2f5bd.map