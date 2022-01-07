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

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.indexTemplate = void 0;\nconst indexTemplate = (content) => `\n    <!doctype html>\n    <html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\"\n              content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n        <title>Reddit</title>\n        <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n    </head>\n    <body>\n        <div id=\"react_root\">${content}</div>\n    </body>\n    </html>\n`;\nexports.indexTemplate = indexTemplate;\n\n\n//# sourceURL=webpack://skillbox/./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nconst Header_1 = __webpack_require__(/*! ../shared/Header */ \"./src/shared/Header.jsx\");\nconst indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\nconst app = (0, express_1.default)();\napp.use('/static', express_1.default.static('./dist/client'));\napp.get('/', (req, res) => {\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, Header_1.Header)())));\n});\napp.listen(3001, () => {\n    console.log('Server started on port 3001');\n});\n\n\n//# sourceURL=webpack://skillbox/./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Header.jsx":
/*!*******************************!*\
  !*** ./src/shared/Header.jsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Header = void 0;\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\nconst _Header = () => {\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(\"h1\", null, \"Reddit for our own bug fixed\")));\n};\nexports.Header = (0, root_1.hot)(_Header);\n\n\n//# sourceURL=webpack://skillbox/./src/shared/Header.jsx?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react-hot-loader/root");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.js");
/******/ 	
/******/ })()
;