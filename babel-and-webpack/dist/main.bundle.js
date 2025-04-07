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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _math_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-utils.js */ \"./src/math-utils.js\");\n\nconst arr = [1, 2, 3, 4, 5];\nconsole.log(\"|-5| = \", (0,_math_utils_js__WEBPACK_IMPORTED_MODULE_0__.absolute)(-5));\nconsole.log(\"5! = \", (0,_math_utils_js__WEBPACK_IMPORTED_MODULE_0__.factorial)(5));\nconsole.log(\"The GCD of 12 and 18 is\", (0,_math_utils_js__WEBPACK_IMPORTED_MODULE_0__.gcd)(12, 18));\nconsole.log(\"The LCM of 12 and 18 is\", (0,_math_utils_js__WEBPACK_IMPORTED_MODULE_0__.lcm)(12, 18));\nconsole.log(\"The average of\", arr, \"is\", (0,_math_utils_js__WEBPACK_IMPORTED_MODULE_0__.average)(arr));\n\n//# sourceURL=webpack://babel-and-webpack/./src/main.js?");

/***/ }),

/***/ "./src/math-utils.js":
/*!***************************!*\
  !*** ./src/math-utils.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   absolute: () => (/* binding */ absolute),\n/* harmony export */   average: () => (/* binding */ average),\n/* harmony export */   factorial: () => (/* binding */ factorial),\n/* harmony export */   gcd: () => (/* binding */ gcd),\n/* harmony export */   lcm: () => (/* binding */ lcm)\n/* harmony export */ });\nfunction absolute(n) {\n  return n < 0 ? -n : n;\n}\nfunction factorial(n) {\n  if (n < 0) return undefined;\n  if (n === 0) return 1;\n  return n * factorial(n - 1);\n}\nfunction gcd(a, b) {\n  return b === 0 ? a : gcd(b, a % b);\n}\nfunction lcm(a, b) {\n  return a * b / gcd(a, b);\n}\nfunction average(numbers) {\n  if (!Array.isArray(numbers) || numbers.length === 0) return undefined;\n  const sum = numbers.reduce((acc, cur) => acc + cur, 0);\n  return sum / numbers.length;\n}\n\n//# sourceURL=webpack://babel-and-webpack/./src/math-utils.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;