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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/arctic-background.jpg */ \"./src/images/arctic-background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pingu-icon.png */ \"./src/images/pingu-icon.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    /* border: 1px solid red; */\\n    box-sizing: border-box;\\n}\\nbody {\\n    width: 100vw;\\n    font-family: 'Roboto Condensed', sans-serif;\\n    background-color: #7dd3fc;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    margin: 0px;\\n    height: 100vh;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n}\\nul {\\n    list-style: none;\\n    padding: 0px;\\n}\\n#content {\\n    display: grid;\\n    grid-template-columns: 1fr;\\n    grid-template-rows: 1fr 0.5fr 5fr;\\n    justify-content: center;\\n    width: 100%;\\n    height: 100%;\\n}\\n\\n.header-container {\\n    font-size: 50px;\\n    font-weight: bolder;\\n    background-color: #0ea5e9;\\n    width: 100%;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    color: white;\\n}\\n.header-container > img {\\n    width: 150px;\\n    object-fit: cover;\\n    content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\ndiv.nav {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    background-color: rgba(125, 211, 252, 0.3);\\n    \\n}\\ndiv.nav > ul {\\n    display: flex;\\n    gap: 100px;\\n    justify-content: center;\\n    align-items: center;\\n    \\n}\\n\\n.nav-button {\\n    color: white;\\n    font-size: x-large;\\n    font-weight: bolder;\\n}\\n\\n\\ndiv.main {\\n    display: flex;\\n    justify-content: center;\\n    align-items: flex-start;\\n    margin-top: 2vh;\\n    min-width: 500px;\\n}\\n\\ndiv.main-content {\\n    width: 50vw;\\n    background-color: #0ea5e9;\\n    border-radius: 50px;\\n    padding: 50px;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 20px;\\n    min-width: 500px;\\n}\\n\\ndiv.content-section {\\n    background-color: #bae6fd;\\n    border-radius: 30px;\\n    padding: 20px;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    text-align: center;\\n    gap: 10px;\\n    border: 5px solid #0284c7;\\n}\\n\\ndiv.content-section-header {\\n    font-size: x-large;\\n    font-weight: bold;\\n}\\n\\ndiv.content-section-text {\\n    font-size: large;\\n}\\n\\ndiv#hours.content-section-text > ul {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 10px;\\n    justify-content: start;\\n}\\n\\n#main-dish.content-section-text, #desserts.content-section-text {\\n    width: 100%;\\n    display: grid;\\n    grid-template-columns: repeat(auto-fit, minmax(200px, max-content));\\n    justify-content: center;\\n    gap: 10px;\\n}\\n\\n.dish {\\n    border: solid 5px #f0f9ff;\\n    border-radius: 10px;\\n    background: #f0f9ff;\\n    padding: 5px;\\n    /* width: 200px; */\\n}\\n\\n.dish-image {\\n    width: 150px;\\n    object-fit: cover;\\n    border-radius: 10px;\\n}\\n\\n.person {\\n    display: flex;\\n    flex-direction: column;\\n    \\n}\\n\\n.person > div > img {\\n    width: 150px;\\n}\\n.person > div {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.clicked.nav-button {\\n    font-size: xx-large;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_pingu_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pingu-icon.png */ \"./src/images/pingu-icon.png\");\n\nfunction getPerson(name, id, role, phone, image) {\n    let contentSection = document.createElement('div');\n    contentSection.classList.add('content-section');\n    contentSection.id = id;\n    let contentSectionHeader = document.createElement('div');\n    contentSectionHeader.classList.add('content-section-header');\n    contentSectionHeader.id = id;\n    contentSectionHeader.textContent = name;\n    contentSection.appendChild(contentSectionHeader);\n    \n    let contentSectionText = document.createElement('div');\n    contentSectionText.classList.add('content-section-text');\n    contentSectionText.id = id;\n    contentSection.appendChild(contentSectionText);\n    let person = document.createElement('div');\n    person.classList.add('person');\n    contentSectionText.appendChild(person);\n    let imgContainer = document.createElement('div');\n    let img = new Image();\n    img.classList.add('person-image');\n    img.setAttribute('alt', id);\n    img.src = image;\n    imgContainer.appendChild(img);\n    person.appendChild(imgContainer);\n    let roleContainer = document.createElement('div');\n    let roleTxt = document.createElement('p');\n    roleTxt.textContent = 'Role: ' + role;\n    roleContainer.appendChild(roleTxt);\n    person.appendChild(roleContainer);\n    let phoneContainer = document.createElement('div');\n    let phoneTxt = document.createElement('p');\n    phoneTxt.textContent = 'Phone Number: ' + phone;\n    phoneContainer.appendChild(phoneTxt);\n    person.appendChild(phoneContainer);\n    return contentSection;\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    let mainContent = document.querySelector('.main-content');\n    mainContent.replaceChildren();\n    mainContent.appendChild(getPerson(\"Pingu\", 'pingu', 'Owner and Chef', '123456789', _images_pingu_icon_png__WEBPACK_IMPORTED_MODULE_0__));\n}\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/general.js":
/*!************************!*\
  !*** ./src/general.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\nconst clearClicked = function() {\n    let navHome = document.querySelector('#home.nav-button');\n    let navMenu = document.querySelector('#menu.nav-button');\n    let navContact = document.querySelector('#contact.nav-button');\n    navHome.classList.remove('clicked');\n    navMenu.classList.remove('clicked');\n    navContact.classList.remove('clicked');\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    let contentDiv = document.querySelector(\"div#content\");\n    contentDiv.replaceChildren();\n    // header\n    let headerContainer = document.createElement('div');\n    headerContainer.classList.add(\"header-container\");\n    let pinguIcon = document.createElement('img');\n    // pinguIcon.src = pinguIconIMG;\n    headerContainer.textContent = \"Antarctic Restaurant\";\n    headerContainer.appendChild(pinguIcon);\n    contentDiv.appendChild(headerContainer);\n\n    // nav\n    let nav = document.createElement('div');\n    nav.classList.add(\"nav\");\n    let navUL = document.createElement('ul');\n\n    let liHome = document.createElement('li');\n    let divHome = document.createElement('div');\n    divHome.classList.add(\"nav-button\");\n    divHome.setAttribute(\"id\", \"home\");\n    divHome.textContent = \"Home\";\n    liHome.appendChild(divHome);\n\n    let liMenu = document.createElement('li');\n    let divMenu = document.createElement('div');\n    divMenu.classList.add(\"nav-button\");\n    divMenu.setAttribute(\"id\", \"menu\");\n    divMenu.textContent = \"Menu\";\n    liMenu.appendChild(divMenu);\n\n    let liContact = document.createElement('li');\n    let divContact = document.createElement('div');\n    divContact.classList.add(\"nav-button\");\n    divContact.setAttribute(\"id\", \"contact\");\n    divContact.textContent = \"Contact\";\n    liContact.appendChild(divContact);\n    \n    navUL.appendChild(liHome);\n    navUL.appendChild(liMenu);\n    navUL.appendChild(liContact);\n    \n    nav.appendChild(navUL);\n    contentDiv.appendChild(nav);\n\n    // main\n    let mainDiv = document.createElement('div');\n    mainDiv.classList.add(\"main\");\n    let mainContentDiv = document.createElement('div');\n    mainContentDiv.classList.add(\"main-content\");  \n    mainDiv.appendChild(mainContentDiv);\n    contentDiv.appendChild(mainDiv);\n\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    let navHome = document.querySelector('#home.nav-button');\n    navHome.classList.add('clicked');\n    divHome.addEventListener('click', (event) => {\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        clearClicked();\n        event.target.classList.add('clicked');\n    });\n    divMenu.addEventListener('click', (event) => {\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        clearClicked();\n        event.target.classList.add('clicked');\n    });\n    divContact.addEventListener('click', (event) => {\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        clearClicked();\n        event.target.classList.add('clicked');\n    });\n}\n\n//# sourceURL=webpack://restaurant/./src/general.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    let mainContent = document.querySelector('.main-content');\n    mainContent.replaceChildren();\n    // about us\n    let aboutUsContent = document.createElement('div');\n    aboutUsContent.classList.add('content-section');\n    aboutUsContent.setAttribute('id', 'about-us');\n\n    let contentSectionHeader = document.createElement('div');\n    contentSectionHeader.classList.add('content-section-header');\n    contentSectionHeader.setAttribute('id', 'about-us');\n    contentSectionHeader.textContent = \"About Us!\";\n    aboutUsContent.appendChild(contentSectionHeader);\n\n    let contentSectionText = document.createElement('div');\n    contentSectionText.classList.add('content-section-text');\n    contentSectionText.setAttribute('id', 'about-us');\n    contentSectionText.textContent = \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat nam ratione nihil officia, placeat iure similique, dolorum minus ex, nesciunt animi inventore eos temporibus. Nulla officia aliquam et velit? Vitae?\\n Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat nam ratione nihil officia, placeat iure similique, dolorum minus ex, nesciunt animi inventore eos temporibus. Nulla officia aliquam et velit? Vitae?\\n Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat nam ratione nihil officia, placeat iure similique, dolorum minus ex, nesciunt animi inventore eos temporibus. Nulla officia aliquam et velit? Vitae?\";\n    aboutUsContent.appendChild(contentSectionText);\n    mainContent.appendChild(aboutUsContent);\n\n    // hours\n    let hoursContent = document.createElement('div');\n    hoursContent.classList.add('content-section');\n    hoursContent.setAttribute('id', 'hours');\n\n    contentSectionHeader = document.createElement('div');\n    contentSectionHeader.classList.add('content-section-header');\n    contentSectionHeader.setAttribute('id', 'hours');\n    contentSectionHeader.textContent = \"Hours\";\n    hoursContent.appendChild(contentSectionHeader);\n\n    contentSectionText = document.createElement('div');\n    contentSectionText.classList.add('content-section-text');\n    contentSectionText.setAttribute('id', 'hours');\n    let contentSectionUL = document.createElement('ul');\n\n    let contentSectionLi = document.createElement('li');\n    contentSectionLi.textContent = \"Monday: 6am - 11pm\";\n    contentSectionUL.appendChild(contentSectionLi);\n\n    contentSectionLi = document.createElement('li');\n    contentSectionLi.textContent = \"Tuesday: 6am - 11pm\";\n    contentSectionUL.appendChild(contentSectionLi);\n\n    contentSectionLi = document.createElement('li');\n    contentSectionLi.textContent = \"Wednesday: 6am - 11pm\";\n    contentSectionUL.appendChild(contentSectionLi);\n\n    contentSectionLi = document.createElement('li');\n    contentSectionLi.textContent = \"Thursday: 6am - 11pm\";\n    contentSectionUL.appendChild(contentSectionLi);\n\n    contentSectionLi = document.createElement('li');\n    contentSectionLi.textContent = \"Friday: 6am - 11pm\";\n    contentSectionUL.appendChild(contentSectionLi);\n\n    contentSectionLi = document.createElement('li');\n    contentSectionLi.textContent = \"Saturday: 6am - 8pm\";\n    contentSectionUL.appendChild(contentSectionLi);\n\n    contentSectionLi = document.createElement('li');\n    contentSectionLi.textContent = \"Sunday: 6am - 8pm\";\n    contentSectionUL.appendChild(contentSectionLi);\n\n    contentSectionText.appendChild(contentSectionUL);\n    hoursContent.appendChild(contentSectionText);\n    mainContent.appendChild(hoursContent);\n\n\n    // location\n    let locationContent = document.createElement('div');\n    locationContent.classList.add('content-section');\n    locationContent.setAttribute('id', 'location');\n\n    contentSectionHeader = document.createElement('div');\n    contentSectionHeader.classList.add('content-section-header');\n    contentSectionHeader.setAttribute('id', 'location');\n    contentSectionHeader.textContent = \"Location\";\n    locationContent.appendChild(contentSectionHeader);\n\n    contentSectionText = document.createElement('div');\n    contentSectionText.classList.add('content-section-text');\n    contentSectionText.setAttribute('id', 'location');\n    contentSectionText.textContent = \"123 Totally Real Road, Antarctica\";\n    locationContent.appendChild(contentSectionText);\n    mainContent.appendChild(locationContent);\n    \n}\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general */ \"./src/general.js\");\n\n\n\n(0,_general__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_salmon_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/salmon.jpg */ \"./src/images/salmon.jpg\");\n/* harmony import */ var _images_sardines_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/sardines.jpg */ \"./src/images/sardines.jpg\");\n/* harmony import */ var _images_polar_bear_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/polar-bear.jpg */ \"./src/images/polar-bear.jpg\");\n/* harmony import */ var _images_great_white_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/great-white.jpg */ \"./src/images/great-white.jpg\");\n/* harmony import */ var _images_ice_cream_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/ice-cream.jpg */ \"./src/images/ice-cream.jpg\");\n/* harmony import */ var _images_snowball_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/snowball.jpg */ \"./src/images/snowball.jpg\");\n\n\n\n\n\n\n\nfunction getDish(name, id, price, image) {\n    let dish = document.createElement('div');\n    dish.classList.add('dish');\n    let dishName = document.createElement('div');\n    dishName.classList.add('dish-description');\n    dishName.textContent = name;\n    dish.appendChild(dishName);\n    let dishImage = document.createElement('img');\n    dishImage.classList.add('dish-image');\n    dishImage.setAttribute('alt', id);\n    dishImage.setAttribute('id', id);\n    dishImage.src = image;\n    dish.appendChild(dishImage);\n    let dishPrice = document.createElement('div');\n    dishPrice.classList.add('dish-price');\n    dishPrice.textContent = '$' + price;\n    dish.appendChild(dishPrice);\n    return dish;\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    let mainContent = document.querySelector('.main-content');\n    mainContent.replaceChildren();\n\n    // main dish\n    let mainDishSection = document.createElement('div');\n    mainDishSection.classList.add('content-section');\n    mainDishSection.setAttribute('id', 'main-dish');\n    let contentSectionHeader = document.createElement('div');\n    contentSectionHeader.classList.add('content-section-header');\n    contentSectionHeader.setAttribute('id', 'main-dish');\n    contentSectionHeader.textContent = 'Main Dishes';\n    mainDishSection.appendChild(contentSectionHeader);\n    let contentSectionText = document.createElement('div');\n    contentSectionText.classList.add('content-section-text');\n    contentSectionText.setAttribute('id', 'main-dish');\n    mainDishSection.appendChild(contentSectionText);\n    contentSectionText.appendChild(getDish(\"Salmon\", \"salmon\", 10, _images_salmon_jpg__WEBPACK_IMPORTED_MODULE_0__));\n    contentSectionText.appendChild(getDish(\"Sardine\", \"sardine\", 10, _images_sardines_jpg__WEBPACK_IMPORTED_MODULE_1__));\n    contentSectionText.appendChild(getDish(\"Polar Bear\", \"polar-bear\", 100, _images_polar_bear_jpg__WEBPACK_IMPORTED_MODULE_2__));\n    contentSectionText.appendChild(getDish(\"Great White Shark\", \"great-white-shark\", 1000, _images_great_white_jpg__WEBPACK_IMPORTED_MODULE_3__));\n    mainContent.appendChild(mainDishSection);\n\n    // desserts\n    let dessertsSection = document.createElement('div');\n    dessertsSection.classList.add('content-section');\n    dessertsSection.setAttribute('id', 'desserts');\n    contentSectionHeader = document.createElement('div');\n    contentSectionHeader.classList.add('content-section-header');\n    contentSectionHeader.setAttribute('id', 'desserts');\n    contentSectionHeader.textContent = 'Desserts';\n    dessertsSection.appendChild(contentSectionHeader);\n    contentSectionText = document.createElement('div');\n    contentSectionText.classList.add('content-section-text');\n    contentSectionText.setAttribute('id', 'desserts');\n    dessertsSection.appendChild(contentSectionText);\n    contentSectionText.appendChild(getDish(\"Ice Cream\", \"ice-cream\", 10, _images_ice_cream_jpg__WEBPACK_IMPORTED_MODULE_4__));\n    contentSectionText.appendChild(getDish(\"Snowball\", \"snowball\", 5, _images_snowball_jpg__WEBPACK_IMPORTED_MODULE_5__));\n    mainContent.appendChild(dessertsSection);\n\n}\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/images/arctic-background.jpg":
/*!******************************************!*\
  !*** ./src/images/arctic-background.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"754d3b8fc514f7166fc5.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/arctic-background.jpg?");

/***/ }),

/***/ "./src/images/great-white.jpg":
/*!************************************!*\
  !*** ./src/images/great-white.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5e58f185ca7f2c2b83b1.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/great-white.jpg?");

/***/ }),

/***/ "./src/images/ice-cream.jpg":
/*!**********************************!*\
  !*** ./src/images/ice-cream.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9beb0aacef8d29d1e3e5.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/ice-cream.jpg?");

/***/ }),

/***/ "./src/images/pingu-icon.png":
/*!***********************************!*\
  !*** ./src/images/pingu-icon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"234a267a83f507920eab.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/pingu-icon.png?");

/***/ }),

/***/ "./src/images/polar-bear.jpg":
/*!***********************************!*\
  !*** ./src/images/polar-bear.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b729d65f8af7b77646c4.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/polar-bear.jpg?");

/***/ }),

/***/ "./src/images/salmon.jpg":
/*!*******************************!*\
  !*** ./src/images/salmon.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"90e12b6e420bd320ce27.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/salmon.jpg?");

/***/ }),

/***/ "./src/images/sardines.jpg":
/*!*********************************!*\
  !*** ./src/images/sardines.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"97a57cdf83d8eb377961.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/sardines.jpg?");

/***/ }),

/***/ "./src/images/snowball.jpg":
/*!*********************************!*\
  !*** ./src/images/snowball.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c392aedbb8fc0987bd03.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/snowball.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;