/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./getNews.js":
/*!********************!*\
  !*** ./getNews.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getNews\": function() { return /* binding */ getNews; }\n/* harmony export */ });\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialState */ \"./initialState.js\");\n/* harmony import */ var _render_renderNews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render/renderNews */ \"./render/renderNews.js\");\n\n\nfunction getNews() {\n  fetch(\"http://localhost:4200/news\").then(function (res) {\n    return res.json();\n  }).then(function (news) {\n    _initialState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].news = news;\n    console.log(news);\n    (0,_render_renderNews__WEBPACK_IMPORTED_MODULE_1__.render)();\n  });\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getNews);\n\n//# sourceURL=webpack:///./getNews.js?");

/***/ }),

/***/ "./getNewsById.js":
/*!************************!*\
  !*** ./getNewsById.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getNewsById\": function() { return /* binding */ getNewsById; }\n/* harmony export */ });\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialState */ \"./initialState.js\");\n/* harmony import */ var _render_renderNews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render/renderNews */ \"./render/renderNews.js\");\n\n\nfunction getNewsById(id) {\n  fetch(\"http://localhost:4200/news/\".concat(id)).then(function (res) {\n    return res.json();\n  }).then(function (news) {\n    console.log(news);\n    _initialState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].news = news;\n    (0,_render_renderNews__WEBPACK_IMPORTED_MODULE_1__.render)();\n  });\n}\n\n//# sourceURL=webpack:///./getNewsById.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getNews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNews */ \"./getNews.js\");\n\n(0,_getNews__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./initialState.js":
/*!*************************!*\
  !*** ./initialState.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar initialState = {\n  categories: [],\n  comments: [],\n  news: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (initialState);\n\n//# sourceURL=webpack:///./initialState.js?");

/***/ }),

/***/ "./render/renderNews.js":
/*!******************************!*\
  !*** ./render/renderNews.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var _getNewsById__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getNewsById */ \"./getNewsById.js\");\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../initialState */ \"./initialState.js\");\n\n\nvar render = function render() {\n  var root = document.getElementById(\"root\");\n\n  if (Array.isArray(_initialState__WEBPACK_IMPORTED_MODULE_1__[\"default\"].news)) {\n    root.textContent = \"\";\n    _initialState__WEBPACK_IMPORTED_MODULE_1__[\"default\"].news.forEach(function (news) {\n      var div = document.createElement(\"div\");\n      div.textContent = news.title;\n      div.addEventListener(\"click\", function () {\n        return (0,_getNewsById__WEBPACK_IMPORTED_MODULE_0__.getNewsById)(news._id);\n      });\n      root.append(div);\n    });\n  } else {\n    root.textContent = \"\";\n    var title = document.createElement('h1');\n    title.textContent = _initialState__WEBPACK_IMPORTED_MODULE_1__[\"default\"].news.title;\n    var text = document.createElement('div');\n    text.textContent = _initialState__WEBPACK_IMPORTED_MODULE_1__[\"default\"].news.body; // const comment = document.createElement('div')\n    // comment.textContent = initialState.comments\n\n    root.append(title, text);\n  }\n};\n\n//# sourceURL=webpack:///./render/renderNews.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;