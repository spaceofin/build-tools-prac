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

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar _mathUtils = __webpack_require__(/*! ./math-utils.js */ \"./lib/math-utils.js\");\nvar arr = [1, 2, 3, 4, 5];\nconsole.log(\"|-5| = \", (0, _mathUtils.absolute)(-5));\nconsole.log(\"5! = \", (0, _mathUtils.factorial)(5));\nconsole.log(\"The GCD of 12 and 18 is\", (0, _mathUtils.gcd)(12, 18));\nconsole.log(\"The LCM of 12 and 18 is\", (0, _mathUtils.lcm)(12, 18));\nconsole.log(\"The average of\", arr, \"is\", (0, _mathUtils.average)(arr));\n\n//# sourceURL=webpack://babel-and-webpack/./lib/main.js?");

/***/ }),

/***/ "./lib/math-utils.js":
/*!***************************!*\
  !*** ./lib/math-utils.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.absolute = absolute;\nexports.average = average;\nexports.factorial = factorial;\nexports.gcd = gcd;\nexports.lcm = lcm;\nfunction absolute(n) {\n  return n < 0 ? -n : n;\n}\nfunction factorial(n) {\n  if (n < 0) return undefined;\n  if (n === 0) return 1;\n  return n * factorial(n - 1);\n}\nfunction gcd(a, b) {\n  return b === 0 ? a : gcd(b, a % b);\n}\nfunction lcm(a, b) {\n  return a * b / gcd(a, b);\n}\nfunction average(numbers) {\n  if (!Array.isArray(numbers) || numbers.length === 0) return undefined;\n  var sum = numbers.reduce(function (acc, cur) {\n    return acc + cur;\n  }, 0);\n  return sum / numbers.length;\n}\n\n//# sourceURL=webpack://babel-and-webpack/./lib/math-utils.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./lib/main.js");
/******/ 	
/******/ })()
;