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
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log("Connected!!!!");

//Complex types: When you access a complex type you work on a reference to its value.
/* const foo = [1, 2];
    const bar = foo;  //this reference foo to have the value of bar 
    bar[0] = 9;
    console.log(foo[0], bar[0]);  // 9, 9  // so when we reasign values in a complex data type, we in essence refrence the new state value to the initial value of the first variable being mutated
*/

// Constant immutability
//Context-1
/*  const arg, args; //throw syntaxerr : constant variables are immutable, not its values, in essence cannot be reassigned and must be initialized during declaration
    arg = 'Hello';
    args = `${arg} world` 
*/

//Context-2
/*  const arg = [2,3,4];
    arg[2] = 20;  // [2,3 20] // constant value can be reassigned
*/

var data = {
  favourite: [1, 2, 33, 44],
  "other info": {
    friends: ['paul', 'james', 'vikky'],
    temp: [30],
    edibles: {
      food: ["rice", "beans", " yam"],
      drinks: ['coke', 'fanta', 'sprite']
    },
    home: {
      address: '51 iweka road onitsha'
    }
  }
};

var data = function data() {
  return 3 * 6;
};

/***/ })
/******/ ]);