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

/***/ "./footer.js":
/*!*******************!*\
  !*** ./footer.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footerNews\": function() { return /* binding */ footerNews; }\n/* harmony export */ });\nfunction footerNews() {\n  var root = document.getElementById('root');\n  var foot_main = document.createElement('div');\n  foot_main.classList.add(\"foot_main\");\n  var contacts = document.createElement('div');\n  contacts.classList.add('contacts');\n  var icon = document.createElement('div');\n  contacts.textContent = \"mor\";\n  icon.textContent = \"О нас\";\n  foot_main.append(contacts, icon);\n  root.after(foot_main);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (footerNews);\n\n//# sourceURL=webpack:///./footer.js?");

/***/ }),

/***/ "./getCategories.js":
/*!**************************!*\
  !*** ./getCategories.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCategories\": function() { return /* binding */ getCategories; }\n/* harmony export */ });\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialState */ \"./initialState.js\");\n/* harmony import */ var _render_renderCategories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render/renderCategories */ \"./render/renderCategories.js\");\n\n\nvar getCategories = function getCategories() {\n  fetch(\"http://localhost:4200/category\").then(function (res) {\n    return res.json();\n  }).then(function (category) {\n    _initialState__WEBPACK_IMPORTED_MODULE_0__.initialState.categories = category;\n    (0,_render_renderCategories__WEBPACK_IMPORTED_MODULE_1__.renderCategories)();\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (getCategories);\n\n//# sourceURL=webpack:///./getCategories.js?");

/***/ }),

/***/ "./getComments.js":
/*!************************!*\
  !*** ./getComments.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": function() { return /* binding */ getComments; }\n/* harmony export */ });\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialState */ \"./initialState.js\");\n/* harmony import */ var _render_renderComments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render/renderComments */ \"./render/renderComments.js\");\n/* harmony import */ var _render_renderNews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render/renderNews */ \"./render/renderNews.js\");\n\n\n\nfunction getComments(id) {\n  fetch(\"http://localhost:4200/comments/\".concat(id)).then(function (res) {\n    return res.json();\n  }).then(function (comments) {\n    console.log(comments);\n    _initialState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].comments = comments;\n    (0,_render_renderComments__WEBPACK_IMPORTED_MODULE_1__.renderComments)();\n  }).catch(function (e) {\n    console.log(\"Ошибка, брат:\", e);\n  });\n  (0,_render_renderNews__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getComments);\n\n//# sourceURL=webpack:///./getComments.js?");

/***/ }),

/***/ "./getNews.js":
/*!********************!*\
  !*** ./getNews.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getNews\": function() { return /* binding */ getNews; }\n/* harmony export */ });\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialState */ \"./initialState.js\");\n/* harmony import */ var _render_renderNews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render/renderNews */ \"./render/renderNews.js\");\n\n\nfunction getNews() {\n  fetch(\"http://localhost:4200/news\").then(function (res) {\n    return res.json();\n  }).then(function (news) {\n    _initialState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].news = news;\n    (0,_render_renderNews__WEBPACK_IMPORTED_MODULE_1__.render)();\n  });\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getNews);\n\n//# sourceURL=webpack:///./getNews.js?");

/***/ }),

/***/ "./getNewsByCat.js":
/*!*************************!*\
  !*** ./getNewsByCat.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getNewsByCat\": function() { return /* binding */ getNewsByCat; }\n/* harmony export */ });\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialState */ \"./initialState.js\");\n/* harmony import */ var _render_renderNews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render/renderNews */ \"./render/renderNews.js\");\n\n\nfunction getNewsByCat(id) {\n  console.log(1);\n  fetch(\"http://localhost:4200/news/cat/\".concat(id)).then(function (res) {\n    return res.json();\n  }).then(function (news) {\n    console.log(news);\n    _initialState__WEBPACK_IMPORTED_MODULE_0__[\"default\"].news = news;\n    (0,_render_renderNews__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n}\n\n//# sourceURL=webpack:///./getNewsByCat.js?");

/***/ }),

/***/ "./getNewsById.js":
/*!************************!*\
  !*** ./getNewsById.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getNewsById\": function() { return /* binding */ getNewsById; }\n/* harmony export */ });\n/* harmony import */ var _getComments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComments */ \"./getComments.js\");\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialState */ \"./initialState.js\");\n/* harmony import */ var _render_renderNews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render/renderNews */ \"./render/renderNews.js\");\n\n\n\nfunction getNewsById(id) {\n  fetch(\"http://localhost:4200/news/\".concat(id)).then(function (res) {\n    return res.json();\n  }).then(function (news) {\n    _initialState__WEBPACK_IMPORTED_MODULE_1__[\"default\"].news = news;\n    (0,_getComments__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id);\n  });\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getNewsById);\n\n//# sourceURL=webpack:///./getNewsById.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ \"./footer.js\");\n/* harmony import */ var _getCategories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCategories */ \"./getCategories.js\");\n/* harmony import */ var _getNews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNews */ \"./getNews.js\");\n\n\n\n(0,_getCategories__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_getNews__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./initialState.js":
/*!*************************!*\
  !*** ./initialState.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialState\": function() { return /* binding */ initialState; }\n/* harmony export */ });\nvar initialState = {\n  categories: [],\n  comments: [],\n  news: [],\n  names: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (initialState);\n\n//# sourceURL=webpack:///./initialState.js?");

/***/ }),

/***/ "./render/renderCategories.js":
/*!************************************!*\
  !*** ./render/renderCategories.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderCategories\": function() { return /* binding */ renderCategories; }\n/* harmony export */ });\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../initialState */ \"./initialState.js\");\n/* harmony import */ var _getNewsByCat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getNewsByCat */ \"./getNewsByCat.js\");\n/* harmony import */ var _renderNews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderNews */ \"./render/renderNews.js\");\n/* harmony import */ var _getNews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getNews */ \"./getNews.js\");\n\n\n\n\nvar renderCategories = function renderCategories() {\n  var root = document.querySelector('#root');\n  var cat = document.createElement(\"div\");\n  cat.classList.add(\"add_cat\");\n  var allNews = document.createElement('div');\n  allNews.textContent = 'Все новости';\n  allNews.addEventListener('click', function () {\n    (0,_getNews__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  });\n  _initialState__WEBPACK_IMPORTED_MODULE_0__.initialState.categories.forEach(function (category) {\n    var sidebarWithCategories = document.createElement('div');\n    sidebarWithCategories.textContent = category.name;\n    sidebarWithCategories.addEventListener('click', function () {\n      return (0,_getNewsByCat__WEBPACK_IMPORTED_MODULE_1__.getNewsByCat)(category._id);\n    });\n    cat.append(sidebarWithCategories);\n    root.prepend(cat);\n  });\n  root.prepend(allNews);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderCategories);\n\n//# sourceURL=webpack:///./render/renderCategories.js?");

/***/ }),

/***/ "./render/renderComments.js":
/*!**********************************!*\
  !*** ./render/renderComments.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderComments\": function() { return /* binding */ renderComments; }\n/* harmony export */ });\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../initialState */ \"./initialState.js\");\n\nvar renderComments = function renderComments() {\n  var root = document.getElementById(\"root\");\n  _initialState__WEBPACK_IMPORTED_MODULE_0__.initialState.comments.forEach(function (elem) {\n    var commentWrapper = document.createElement(\"div\"); // console.log(commentWrapper);\n\n    commentWrapper.textContent = elem.text;\n    root.append(commentWrapper);\n    console.log(_initialState__WEBPACK_IMPORTED_MODULE_0__.initialState.comments);\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderComments);\n\n//# sourceURL=webpack:///./render/renderComments.js?");

/***/ }),

/***/ "./render/renderNews.js":
/*!******************************!*\
  !*** ./render/renderNews.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var _getNewsById__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getNewsById */ \"./getNewsById.js\");\n/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../initialState */ \"./initialState.js\");\n\n\nvar root = document.getElementById(\"root\");\nvar news_con = document.createElement(\"div\");\nnews_con.classList.add(\"add_news\");\nvar render = function render() {\n  news_con.textContent = \"\";\n\n  if (Array.isArray(_initialState__WEBPACK_IMPORTED_MODULE_1__[\"default\"].news)) {\n    _initialState__WEBPACK_IMPORTED_MODULE_1__[\"default\"].news.forEach(function (news) {\n      var div = document.createElement(\"div\");\n      div.textContent = news.title;\n      div.addEventListener(\"click\", function () {\n        return (0,_getNewsById__WEBPACK_IMPORTED_MODULE_0__.getNewsById)(news._id);\n      });\n      news_con.append(div);\n      root.append(news_con);\n    });\n  } else {\n    root.textContent = \"\";\n    var title = document.createElement(\"h1\");\n    title.textContent = _initialState__WEBPACK_IMPORTED_MODULE_1__[\"default\"].news.title;\n    var text = document.createElement(\"div\");\n    text.textContent = _initialState__WEBPACK_IMPORTED_MODULE_1__[\"default\"].news.body; // const comment = document.createElement('div')\n    // comment.textContent = initialState.comments\n\n    news_con.append(title, text);\n    root.append(news_con);\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (render);\n\n//# sourceURL=webpack:///./render/renderNews.js?");

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