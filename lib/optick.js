/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DOMNodeCollection__ = __webpack_require__(1);


let funcsOnLoad = [];

document.addEventListener('DOMContentLoaded', () => funcsOnLoad.forEach(func => func()));

const optick = (e) => {

  if (typeof e === 'string') {
    const nodes = Array.from(document.querySelectorAll(e));
    const nodeCollection = new __WEBPACK_IMPORTED_MODULE_0__DOMNodeCollection__["a" /* default */](nodes);
    return nodeCollection;
  }

  if (e instanceof Function) {
    if (document.readyState === 'complete')
      e();
    else {
      funcsOnLoad.push(e);
    }
  }
};

optick.ajax = (options) => {
  const finalOptions = {
    url: window.location,
    method: 'GET',
    data: {},
    contentType: 'text/html',
    success: () => undefined,
    error: () => undefined,
  };

  optick.extend(finalOptions, options);
    const xhr = new XMLHttpRequest();
    xhr.open(finalOptions.method, finalOptions.url);
    xhr.onload = () => {
      if(xhr.status >= 200 && xhr.status < 300) finalOptions.success(xhr.response);
      else finalOptions.error(xhr.response);
    };
    if(Object.keys(finalOptions.data) !== 0) xhr.send(finalOptions.data);
  };

window.o_ = optick;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class DOMNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
  }

  html(content) {
    if (content) {
      this.nodes.forEach(node => node.innerHTML = content);
      return this;
    } else return this.nodes[0].innerHTML;
  }

  empty() {
    this.html('');
  }

  append(content) {
    let toAppend = "";
    if (content instanceof DOMNodeCollection) {
      content.nodes.forEach(node => toAppend.concat(node.outerHTML));
    }
    if (content instanceof HTMLElement) {
      toAppend = content.outerHTML;
    }
    if (typeof content === "string") {
      toAppend = content;
    }
    this.nodes.forEach(node => node.innerHTML += toAppend);
    return this;
  }

  attr(name, value) {
    if (value === undefined) {
      return this.nodes[0].getAttribute(name);
    }
    this.nodes.forEach(node => node.setAttribute(name, value));
    return this;
  }

  addClass(className) {
    this.nodes.forEach(el => {
      if (!Array.from(el.classList).includes(className))
        el.className += ` ${className}`;
    });
    return this;
  }

  removeClass(className) {
    this.nodes.forEach(el => {
      el.className = el.className.replace(className, "");
    });
    return this;
  }

  toggleClass(toggleClass) {
    this.each(node => node.classList.toggle(toggleClass));
  }

  children() {
    let childrenArr = [];
    this.nodes.forEach(el => childrenArr = childrenArr.concat(Array.from(el.children)));
    return new DOMNodeCollection(childrenArr);
  }

  parent() {
    const parentArr = [];
    this.nodes.forEach(el => parentArr.push(el.parentNode));
    return new DOMNodeCollection(parentArr);
  }

  find(selector) {
    let foundNodes = [];
    this.nodes.forEach(node => {
      return foundNodes.concat(Array.from(node.querySelectorAll(selector)));
    });
  }

  remove() {
    this.nodes.forEach(node => node.outerHTML = '');
    this.nodes = [];
    return this;
  }

  on(eventType, callback) {
    this.nodes.forEach(el => {
      if (el.eventHandlers === undefined) el.eventHandlers = {};
      if (el.eventHandlers[eventType] === undefined) el.eventHandlers[eventType] = [];
      el.eventHandlers[eventType].push(callback);
      el.addEventListener(eventType, callback);
    });
    return this;
  }

  off(eventType) {
    this.nodes.forEach(el => {
      if (el.eventHandlers !== undefined && el.eventHandlers[eventType] !== undefined) {
        el.eventHandlers[eventType].forEach(callback => el.removeEventListener(eventType, callback));
        el.eventHandlers[eventType] = [];
      }
    });
    return this;
  }

}

/* harmony default export */ __webpack_exports__["a"] = (DOMNodeCollection);


/***/ })
/******/ ]);