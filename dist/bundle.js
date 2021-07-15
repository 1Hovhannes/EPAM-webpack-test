/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* binding */ Button)\n/* harmony export */ });\nconst Button = ({ text, clickHandler }) => {\r\n  const buttonWrapper = document.createElement(\"div\");\r\n  const button = document.createElement(\"button\");\r\n  button.addEventListener(\"click\", clickHandler);\r\n  button.innerText = text;\r\n\r\n  buttonWrapper.append(button);\r\n\r\n  return buttonWrapper;\r\n};\r\n\n\n//# sourceURL=webpack://webpack/./components/Button.js?");

/***/ }),

/***/ "./components/Heading.js":
/*!*******************************!*\
  !*** ./components/Heading.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\nconst Header = ({ text }) => {\r\n  const heading = document.createElement(\"h1\");\r\n  heading.innerText = text;\r\n\r\n  return heading;\r\n};\r\n\n\n//# sourceURL=webpack://webpack/./components/Heading.js?");

/***/ }),

/***/ "./root.component.js":
/*!***************************!*\
  !*** ./root.component.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Button */ \"./components/Button.js\");\n/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Heading */ \"./components/Heading.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/helpers */ \"./utils/helpers.js\");\n\r\n\r\n\r\n\r\nlet count = 0;\r\n\r\nconst body = document.body;\r\nconst root = document.createElement(\"div\");\r\nconst countWrapper = document.createElement(\"h2\");\r\ncountWrapper.innerText = count;\r\n\r\nconst header = (0,_components_Heading__WEBPACK_IMPORTED_MODULE_1__.Header)({\r\n  text: \"Counter\",\r\n});\r\n\r\nconst decrement = (0,_components_Button__WEBPACK_IMPORTED_MODULE_0__.Button)({\r\n  text: \"Decrement\",\r\n  clickHandler: () => {\r\n    (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_2__.counter)(countWrapper, --count);\r\n  },\r\n});\r\n\r\nconst increment = (0,_components_Button__WEBPACK_IMPORTED_MODULE_0__.Button)({\r\n  text: \"Increment\",\r\n  clickHandler: () => {\r\n    (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_2__.counter)(countWrapper, ++count);\r\n  },\r\n});\r\n\r\nroot.append(header);\r\n\r\nroot.append(decrement);\r\nroot.append(countWrapper);\r\nroot.append(increment);\r\n\r\nbody.append(root);\r\n\n\n//# sourceURL=webpack://webpack/./root.component.js?");

/***/ }),

/***/ "./utils/helpers.js":
/*!**************************!*\
  !*** ./utils/helpers.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counter\": () => (/* binding */ counter)\n/* harmony export */ });\nfunction counter(element, count) {\r\n  element.innerText = count;\r\n}\r\n\n\n//# sourceURL=webpack://webpack/./utils/helpers.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./root.component.js");
/******/ 	
/******/ })()
;