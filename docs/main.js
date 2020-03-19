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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/App/app.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/App/app.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\nbody {\n  font-size: 16px;\n  font-family: 'Raleway', sans-serif; }\n\n#app {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  width: 100%; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Footer/footer.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Footer/footer.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".footer {\n  align-items: center;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 0 0 1px #ccc;\n  display: flex;\n  font-size: 1.5rem;\n  height: 48px;\n  justify-content: space-between;\n  padding: 1rem; }\n  .footer-button {\n    border-radius: 4px;\n    font-size: 1.5rem;\n    background-color: white;\n    border: 1px solid;\n    padding: 0 0.3rem; }\n    .footer-button-disabled {\n      color: gray; }\n\n.buttons-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 300px; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Input/input.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Input/input.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".app-input {\n  border-radius: 5px;\n  box-shadow: 0px 6px 8px gray;\n  border: unset;\n  font-size: 1rem;\n  font-weight: lighter;\n  height: 4em;\n  max-width: 100%;\n  padding: 1rem;\n  width: 60em; }\n  .app-input::placeholder {\n    color: gray;\n    font-size: 1rem;\n    font-style: italic; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ItemList/itemList.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ItemList/itemList.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".app-item-list {\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n  width: 60em; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Title/title.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Title/title.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".app-title {\n  font-size: 10rem;\n  text-align: center;\n  font-weight: lighter; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TodoItem/components/closeButton.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TodoItem/components/closeButton.scss ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".close-button {\n  background: transparent;\n  border-radius: 50px;\n  border-style: none;\n  cursor: pointer;\n  height: 24px;\n  max-width: 24px;\n  width: 100%; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TodoItem/components/editableLabel.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TodoItem/components/editableLabel.scss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".editable-label {\n  width: 100%; }\n  .editable-label-disable {\n    color: gray;\n    cursor: default;\n    pointer-events: none;\n    text-decoration: line-through; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TodoItem/components/toggleButton.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TodoItem/components/toggleButton.scss ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".toggle-button {\n  border-radius: 50px;\n  background: transparent;\n  border: 1px solid;\n  cursor: pointer;\n  height: 24px;\n  margin-right: 1rem;\n  width: 24px; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TodoItem/todoItem.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TodoItem/todoItem.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".todo-item {\n  align-items: center;\n  background: white;\n  border-radius: 5px;\n  box-shadow: 0 0 1px #ccc;\n  display: flex;\n  font-size: 1.5rem;\n  height: 48px;\n  padding: 1rem; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/components/App/app.scss":
/*!*************************************!*\
  !*** ./src/components/App/app.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./app.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/App/app.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/App/createApp.js":
/*!*****************************************!*\
  !*** ./src/components/App/createApp.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Title_createTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Title/createTitle */ "./src/components/Title/createTitle.js");
/* harmony import */ var _Input_createInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Input/createInput */ "./src/components/Input/createInput.js");
/* harmony import */ var _ItemList_createItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ItemList/createItemList */ "./src/components/ItemList/createItemList.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data */ "./src/data/index.js");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.scss */ "./src/components/App/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_4__);







function createApp(node) {
  node.appendChild(Object(_Title_createTitle__WEBPACK_IMPORTED_MODULE_0__["default"])());
  node.appendChild(Object(_Input_createInput__WEBPACK_IMPORTED_MODULE_1__["default"])());
  node.appendChild(Object(_ItemList_createItemList__WEBPACK_IMPORTED_MODULE_2__["default"])(_data__WEBPACK_IMPORTED_MODULE_3__["default"].get()));
}

function ReloadList(data = _data__WEBPACK_IMPORTED_MODULE_3__["default"].get()) {
  const node = document.querySelector('.app-item-list');
  node.remove();
  const parentNode = document.querySelector('#app');
  parentNode.appendChild(Object(_ItemList_createItemList__WEBPACK_IMPORTED_MODULE_2__["default"])(data));
}

_data__WEBPACK_IMPORTED_MODULE_3__["default"].subscribe(ReloadList);

/* harmony default export */ __webpack_exports__["default"] = (createApp);


/***/ }),

/***/ "./src/components/Footer/components/createFooterButton.js":
/*!****************************************************************!*\
  !*** ./src/components/Footer/components/createFooterButton.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createFooterButton({ callback, name, style } = {}) {
  const footerButton = document.createElement('button');
  footerButton.innerHTML = name;
  footerButton.onclick = () => callback();
  footerButton.className = style;
  return footerButton;
}

/* harmony default export */ __webpack_exports__["default"] = (createFooterButton);


/***/ }),

/***/ "./src/components/Footer/createFooter.js":
/*!***********************************************!*\
  !*** ./src/components/Footer/createFooter.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data */ "./src/data/index.js");
/* harmony import */ var _components_createFooterButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/createFooterButton */ "./src/components/Footer/components/createFooterButton.js");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.scss */ "./src/components/Footer/footer.scss");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_footer_scss__WEBPACK_IMPORTED_MODULE_2__);





const styles = {
  allButton: 'footer-button footer-button-disabled',
  activeButton: 'footer-button',
  completeButton: 'footer-button',
};

function handleActiveButton() {
  styles.activeButton = 'footer-button footer-button-disabled';
  styles.allButton = 'footer-button';
  styles.completeButton = 'footer-button';
  _data__WEBPACK_IMPORTED_MODULE_0__["default"].publish(_data__WEBPACK_IMPORTED_MODULE_0__["default"].filterComplete());
}

function handleAllButton() {
  styles.activeButton = 'footer-button';
  styles.allButton = 'footer-button footer-button-disabled';
  styles.completeButton = 'footer-button';
  _data__WEBPACK_IMPORTED_MODULE_0__["default"].publish();
}

function handleCompleteButtonButton() {
  styles.activeButton = 'footer-button';
  styles.allButton = 'footer-button';
  styles.completeButton = 'footer-button footer-button-disabled';
  _data__WEBPACK_IMPORTED_MODULE_0__["default"].publish(_data__WEBPACK_IMPORTED_MODULE_0__["default"].filterUncomplete());
}

function createFooter() {
  const footerElement = document.createElement('div');
  const buttonsContainer = document.createElement('div');
  const summary = document.createElement('span');
  summary.innerHTML = `${_data__WEBPACK_IMPORTED_MODULE_0__["default"].filterComplete().length} items left`;

  const allButton = Object(_components_createFooterButton__WEBPACK_IMPORTED_MODULE_1__["default"])({ callback: handleAllButton, name: 'All', style: styles.allButton });
  const activeButton = Object(_components_createFooterButton__WEBPACK_IMPORTED_MODULE_1__["default"])({ callback: handleActiveButton, name: 'Active', style: styles.activeButton });
  const completeButton = Object(_components_createFooterButton__WEBPACK_IMPORTED_MODULE_1__["default"])({ callback: handleCompleteButtonButton, name: 'Complete', style: styles.completeButton });
  // TODO: clear the data
  const clearButton = Object(_components_createFooterButton__WEBPACK_IMPORTED_MODULE_1__["default"])({ callback: handleCompleteButtonButton, name: 'Clear completed', style: 'footer-button' });

  footerElement.appendChild(summary);
  buttonsContainer.appendChild(allButton);
  buttonsContainer.appendChild(activeButton);
  buttonsContainer.appendChild(completeButton);
  footerElement.appendChild(buttonsContainer);
  footerElement.appendChild(clearButton);

  footerElement.className = 'footer';
  buttonsContainer.className = 'buttons-container';

  return footerElement;
}

/* harmony default export */ __webpack_exports__["default"] = (createFooter);


/***/ }),

/***/ "./src/components/Footer/footer.scss":
/*!*******************************************!*\
  !*** ./src/components/Footer/footer.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Footer/footer.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/Input/constants.js":
/*!*******************************************!*\
  !*** ./src/components/Input/constants.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  placeholderText: ' Write something you need to do',
  altText: 'todo item',
});


/***/ }),

/***/ "./src/components/Input/createInput.js":
/*!*********************************************!*\
  !*** ./src/components/Input/createInput.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/components/Input/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data */ "./src/data/index.js");
/* harmony import */ var _input_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input.scss */ "./src/components/Input/input.scss");
/* harmony import */ var _input_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_input_scss__WEBPACK_IMPORTED_MODULE_3__);





function createInput() {
  const inputElement = document.createElement('input');
  inputElement.setAttribute('label', _constants__WEBPACK_IMPORTED_MODULE_0__["default"].altText);
  inputElement.setAttribute('placeholder', _constants__WEBPACK_IMPORTED_MODULE_0__["default"].placeholderText);
  inputElement.className = 'app-input';
  inputElement.handleInput = (inputText = inputElement.value) => (
    {
      itemID: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      itemName: inputText,
      itemStatus: false,
    }
  );

  inputElement.onkeyup = (e) => {
    if (e.code === 'Enter') {
      _data__WEBPACK_IMPORTED_MODULE_2__["default"].put(inputElement.handleInput());
      inputElement.value = '';
      _data__WEBPACK_IMPORTED_MODULE_2__["default"].publish();
    }
  };
  return inputElement;
}

/* harmony default export */ __webpack_exports__["default"] = (createInput);


/***/ }),

/***/ "./src/components/Input/input.scss":
/*!*****************************************!*\
  !*** ./src/components/Input/input.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./input.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Input/input.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/ItemList/constants.js":
/*!**********************************************!*\
  !*** ./src/components/ItemList/constants.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  altText: 'todo list of items',
});


/***/ }),

/***/ "./src/components/ItemList/createItemList.js":
/*!***************************************************!*\
  !*** ./src/components/ItemList/createItemList.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/components/ItemList/constants.js");
/* harmony import */ var _TodoItem_createTodoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TodoItem/createTodoItem */ "./src/components/TodoItem/createTodoItem.js");
/* harmony import */ var _Footer_createFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer/createFooter */ "./src/components/Footer/createFooter.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data */ "./src/data/index.js");
/* harmony import */ var _itemList_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./itemList.scss */ "./src/components/ItemList/itemList.scss");
/* harmony import */ var _itemList_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_itemList_scss__WEBPACK_IMPORTED_MODULE_4__);








function createitemList(itemList = _data__WEBPACK_IMPORTED_MODULE_3__["default"].get()) {
  const itemListElement = document.createElement('UL');
  itemListElement.setAttribute('label', _constants__WEBPACK_IMPORTED_MODULE_0__["default"].altText);
  itemListElement.className = 'app-item-list';
  itemList.forEach((item) => itemListElement.appendChild(Object(_TodoItem_createTodoItem__WEBPACK_IMPORTED_MODULE_1__["default"])(item)));
  if (_data__WEBPACK_IMPORTED_MODULE_3__["default"].get().length) { itemListElement.appendChild(Object(_Footer_createFooter__WEBPACK_IMPORTED_MODULE_2__["default"])()); }
  return itemListElement;
}

/* harmony default export */ __webpack_exports__["default"] = (createitemList);


/***/ }),

/***/ "./src/components/ItemList/itemList.scss":
/*!***********************************************!*\
  !*** ./src/components/ItemList/itemList.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./itemList.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ItemList/itemList.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/Title/constants.js":
/*!*******************************************!*\
  !*** ./src/components/Title/constants.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  titleText: 'todos',
  altText: 'to do list',
});


/***/ }),

/***/ "./src/components/Title/createTitle.js":
/*!*********************************************!*\
  !*** ./src/components/Title/createTitle.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/components/Title/constants.js");
/* harmony import */ var _title_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title.scss */ "./src/components/Title/title.scss");
/* harmony import */ var _title_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_title_scss__WEBPACK_IMPORTED_MODULE_1__);




function createTitle() {
  const titleElement = document.createElement('h1');
  titleElement.setAttribute('label', _constants__WEBPACK_IMPORTED_MODULE_0__["default"].altText);
  titleElement.innerHTML = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].titleText;
  titleElement.className = 'app-title';
  return titleElement;
}

/* harmony default export */ __webpack_exports__["default"] = (createTitle);


/***/ }),

/***/ "./src/components/Title/title.scss":
/*!*****************************************!*\
  !*** ./src/components/Title/title.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./title.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Title/title.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/TodoItem/components/closeButton.scss":
/*!*************************************************************!*\
  !*** ./src/components/TodoItem/components/closeButton.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./closeButton.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TodoItem/components/closeButton.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/TodoItem/components/createCheckBox.js":
/*!**************************************************************!*\
  !*** ./src/components/TodoItem/components/createCheckBox.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggleButton_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggleButton.scss */ "./src/components/TodoItem/components/toggleButton.scss");
/* harmony import */ var _toggleButton_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_toggleButton_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data */ "./src/data/index.js");



function handleClick(e, itemID) {
  e.preventDefault();
  _data__WEBPACK_IMPORTED_MODULE_1__["default"].changeStatus(itemID);
  _data__WEBPACK_IMPORTED_MODULE_1__["default"].publish();
}

function createCheckBox(status = false, itemID) {
  const toggleElement = document.createElement('button');
  toggleElement.setAttribute('type', 'button');
  toggleElement.onclick = (e) => handleClick(e, itemID);

  const checkmark = document.createElement('img');
  checkmark.setAttribute('src', './assets/checkmark.svg');

  if (status) toggleElement.appendChild(checkmark);

  toggleElement.className = 'toggle-button';
  return toggleElement;
}

/* harmony default export */ __webpack_exports__["default"] = (createCheckBox);


/***/ }),

/***/ "./src/components/TodoItem/components/createCloseButton.js":
/*!*****************************************************************!*\
  !*** ./src/components/TodoItem/components/createCloseButton.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _closeButton_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./closeButton.scss */ "./src/components/TodoItem/components/closeButton.scss");
/* harmony import */ var _closeButton_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_closeButton_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data */ "./src/data/index.js");
/* harmony import */ var _constants_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/paths */ "./src/constants/paths.js");





function handleClick(e, itemID) {
  e.preventDefault();
  _data__WEBPACK_IMPORTED_MODULE_1__["default"].delete(itemID);
  _data__WEBPACK_IMPORTED_MODULE_1__["default"].publish();
}

function createCloseButton(itemID) {
  const closeElement = document.createElement('button');
  closeElement.setAttribute('type', 'button');
  closeElement.onclick = (e) => handleClick(e, itemID);
  closeElement.className = 'close-button';

  const checkmark = document.createElement('img');
  checkmark.setAttribute('src', _constants_paths__WEBPACK_IMPORTED_MODULE_2__["CLOSE_ICON"]);
  closeElement.appendChild(checkmark);
  return closeElement;
}

/* harmony default export */ __webpack_exports__["default"] = (createCloseButton);


/***/ }),

/***/ "./src/components/TodoItem/components/createEditableLabel.js":
/*!*******************************************************************!*\
  !*** ./src/components/TodoItem/components/createEditableLabel.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editableLabel_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editableLabel.scss */ "./src/components/TodoItem/components/editableLabel.scss");
/* harmony import */ var _editableLabel_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editableLabel_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data */ "./src/data/index.js");



function handleClick(e, itemID) {
  _data__WEBPACK_IMPORTED_MODULE_1__["default"].updateName(itemID, e.target.innerText);
}

function createEditableLabel(textValue = '', itemID = 12) {
  const labelElement = document.createElement('div');
  labelElement.setAttribute('contenteditable', true);
  labelElement.innerHTML = textValue;
  labelElement.className = 'editable-label';

  if (_data__WEBPACK_IMPORTED_MODULE_1__["default"].getOne(itemID).itemStatus) {
    labelElement.className = 'editable-label editable-label-disable';
  } else {
    labelElement.oninput = (e) => handleClick(e, itemID);
  }
  return labelElement;
}

/* harmony default export */ __webpack_exports__["default"] = (createEditableLabel);


/***/ }),

/***/ "./src/components/TodoItem/components/editableLabel.scss":
/*!***************************************************************!*\
  !*** ./src/components/TodoItem/components/editableLabel.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./editableLabel.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TodoItem/components/editableLabel.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/TodoItem/components/toggleButton.scss":
/*!**************************************************************!*\
  !*** ./src/components/TodoItem/components/toggleButton.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./toggleButton.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TodoItem/components/toggleButton.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/TodoItem/createTodoItem.js":
/*!***************************************************!*\
  !*** ./src/components/TodoItem/createTodoItem.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_createCheckBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/createCheckBox */ "./src/components/TodoItem/components/createCheckBox.js");
/* harmony import */ var _components_createEditableLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/createEditableLabel */ "./src/components/TodoItem/components/createEditableLabel.js");
/* harmony import */ var _components_createCloseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/createCloseButton */ "./src/components/TodoItem/components/createCloseButton.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _todoItem_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todoItem.scss */ "./src/components/TodoItem/todoItem.scss");
/* harmony import */ var _todoItem_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_todoItem_scss__WEBPACK_IMPORTED_MODULE_4__);







function createTodoItem(
  { itemID, itemName, itemStatus } =
  { itemID: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["default"])(), itemName: '', itemStatus: false },
) {
  const todoElement = document.createElement('li');
  todoElement.setAttribute('data-key', itemID);
  todoElement.appendChild(Object(_components_createCheckBox__WEBPACK_IMPORTED_MODULE_0__["default"])(itemStatus, itemID));
  todoElement.appendChild(Object(_components_createEditableLabel__WEBPACK_IMPORTED_MODULE_1__["default"])(itemName, itemID));
  todoElement.appendChild(Object(_components_createCloseButton__WEBPACK_IMPORTED_MODULE_2__["default"])(itemID));
  todoElement.className = 'todo-item';
  return todoElement;
}

/* harmony default export */ __webpack_exports__["default"] = (createTodoItem);


/***/ }),

/***/ "./src/components/TodoItem/todoItem.scss":
/*!***********************************************!*\
  !*** ./src/components/TodoItem/todoItem.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./todoItem.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/TodoItem/todoItem.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/constants/paths.js":
/*!********************************!*\
  !*** ./src/constants/paths.js ***!
  \********************************/
/*! exports provided: CLOSE_ICON, CHECKMARK_ICON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_ICON", function() { return CLOSE_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKMARK_ICON", function() { return CHECKMARK_ICON; });
const CLOSE_ICON = '../assets/close.svg';

const CHECKMARK_ICON = '../assets/checkmark.svg';


/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const todoList = [
  {
    itemID: 1,
    itemName: 'Clean dishes',
    itemStatus: true,
  },
  {
    itemID: 12,
    itemName: 'garbage can',
    itemStatus: false,
  },
  {
    itemID: 13,
    itemName: 'organizer',
    itemStatus: false,
  },
  {
    itemID: 14,
    itemName: 'teddy beaber',
    itemStatus: true,
  },
  {
    itemID: 111,
    itemName: 'Fruit',
    itemStatus: false,
  },
];

/* harmony default export */ __webpack_exports__["default"] = (todoList);


/***/ }),

/***/ "./src/data/index.js":
/*!***************************!*\
  !*** ./src/data/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data/data.js");


const todoItems = _data__WEBPACK_IMPORTED_MODULE_0__["default"];
const changeListeners = [];

/* harmony default export */ __webpack_exports__["default"] = ({
  getChangeList: () => changeListeners,
  get: () => todoItems,
  getOne: (itemId) => todoItems.filter((item) => item.itemID === itemId)[0],
  put: (item) => todoItems.unshift(item),
  delete: (itemId) => (todoItems.splice(todoItems.indexOf(todoItems.filter((item) => item.itemID === itemId)[0]), 1)),
  changeStatus: (itemId) => todoItems.forEach((item) => {
    if (item.itemID === itemId) { item.itemStatus = !item.itemStatus; }
  }),
  updateName: (itemId, newName) => todoItems.forEach((item) => {
    if (item.itemID === itemId) { item.itemName = newName; }
  }),
  filterComplete: () => todoItems.filter((item) => !item.itemStatus),
  filterUncomplete: () => todoItems.filter((item) => item.itemStatus),
  subscribe: (callbackfunction) => changeListeners.push(callbackfunction),
  publish: (d) => changeListeners.map((changeListener) => (changeListener(d))),
});


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_App_createApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App/createApp */ "./src/components/App/createApp.js");


const node = document.querySelector('#app');

Object(_components_App_createApp__WEBPACK_IMPORTED_MODULE_0__["default"])(node);


/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const generateID = (date = new Date()) => 0 - `${date.getMilliseconds()}${date.getDay()}${date.getSeconds()}`;

/* harmony default export */ __webpack_exports__["default"] = (generateID);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9mb290ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JbnB1dC9pbnB1dC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0l0ZW1MaXN0L2l0ZW1MaXN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGl0bGUvdGl0bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub2RvSXRlbS9jb21wb25lbnRzL2Nsb3NlQnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVG9kb0l0ZW0vY29tcG9uZW50cy9lZGl0YWJsZUxhYmVsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVG9kb0l0ZW0vY29tcG9uZW50cy90b2dnbGVCdXR0b24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub2RvSXRlbS90b2RvSXRlbS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC9hcHAuc2Nzcz9hN2E0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC9jcmVhdGVBcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL2NvbXBvbmVudHMvY3JlYXRlRm9vdGVyQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9jcmVhdGVGb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL2Zvb3Rlci5zY3NzPzAzNTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW5wdXQvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0lucHV0L2NyZWF0ZUlucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0lucHV0L2lucHV0LnNjc3M/MDkzZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JdGVtTGlzdC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSXRlbUxpc3QvY3JlYXRlSXRlbUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSXRlbUxpc3QvaXRlbUxpc3Quc2Nzcz9iNmM5Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpdGxlL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaXRsZS9jcmVhdGVUaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaXRsZS90aXRsZS5zY3NzP2MyZTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVG9kb0l0ZW0vY29tcG9uZW50cy9jbG9zZUJ1dHRvbi5zY3NzPzcxODMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVG9kb0l0ZW0vY29tcG9uZW50cy9jcmVhdGVDaGVja0JveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub2RvSXRlbS9jb21wb25lbnRzL2NyZWF0ZUNsb3NlQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RvZG9JdGVtL2NvbXBvbmVudHMvY3JlYXRlRWRpdGFibGVMYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub2RvSXRlbS9jb21wb25lbnRzL2VkaXRhYmxlTGFiZWwuc2Nzcz85Y2RjIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RvZG9JdGVtL2NvbXBvbmVudHMvdG9nZ2xlQnV0dG9uLnNjc3M/OTMwZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub2RvSXRlbS9jcmVhdGVUb2RvSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub2RvSXRlbS90b2RvSXRlbS5zY3NzPzFiMGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy9wYXRocy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7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QWlDLG9DQUFvQztBQUNyRSxHQUFHO0FBQ0g7QUFDQSxpQ0FBaUMseUJBQXlCO0FBQzFELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3JCRjtBQUFBO0FBQW1EOztBQUVuRDs7QUFFQSx5RUFBUzs7Ozs7Ozs7Ozs7OztBQ0pUO0FBQUEsaURBQWlELHVCQUF1QixFQUFFLGNBQWMsRUFBRSxrQkFBa0I7O0FBRTdGLHlFQUFVLEVBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4uanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjsgfVxcblxcbiNhcHAge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mb290ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjY2NjO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMXJlbTsgfVxcbiAgLmZvb3Rlci1idXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIHBhZGRpbmc6IDAgMC4zcmVtOyB9XFxuICAgIC5mb290ZXItYnV0dG9uLWRpc2FibGVkIHtcXG4gICAgICBjb2xvcjogZ3JheTsgfVxcblxcbi5idXR0b25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAzMDBweDsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFwcC1pbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwcHggNnB4IDhweCBncmF5O1xcbiAgYm9yZGVyOiB1bnNldDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgaGVpZ2h0OiA0ZW07XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgd2lkdGg6IDYwZW07IH1cXG4gIC5hcHAtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IGdyYXk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYXBwLWl0ZW0tbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHdpZHRoOiA2MGVtOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYXBwLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTByZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNsb3NlLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBtYXgtd2lkdGg6IDI0cHg7XFxuICB3aWR0aDogMTAwJTsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmVkaXRhYmxlLWxhYmVsIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuICAuZWRpdGFibGUtbGFiZWwtZGlzYWJsZSB7XFxuICAgIGNvbG9yOiBncmF5O1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRvZ2dsZS1idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICB3aWR0aDogMjRweDsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRvZG8taXRlbSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4ICNjY2M7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBwYWRkaW5nOiAxcmVtOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXBwLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IGNyZWF0ZVRpdGxlIGZyb20gJy4uL1RpdGxlL2NyZWF0ZVRpdGxlJztcbmltcG9ydCBjcmVhdGVJbnB1dCBmcm9tICcuLi9JbnB1dC9jcmVhdGVJbnB1dCc7XG5pbXBvcnQgY3JlYXRlSXRlbUxpc3QgZnJvbSAnLi4vSXRlbUxpc3QvY3JlYXRlSXRlbUxpc3QnO1xuaW1wb3J0IGRhdGFtYW5hZ2VyIGZyb20gJy4uLy4uL2RhdGEnO1xuXG5pbXBvcnQgJy4vYXBwLnNjc3MnO1xuXG5mdW5jdGlvbiBjcmVhdGVBcHAobm9kZSkge1xuICBub2RlLmFwcGVuZENoaWxkKGNyZWF0ZVRpdGxlKCkpO1xuICBub2RlLmFwcGVuZENoaWxkKGNyZWF0ZUlucHV0KCkpO1xuICBub2RlLmFwcGVuZENoaWxkKGNyZWF0ZUl0ZW1MaXN0KGRhdGFtYW5hZ2VyLmdldCgpKSk7XG59XG5cbmZ1bmN0aW9uIFJlbG9hZExpc3QoZGF0YSA9IGRhdGFtYW5hZ2VyLmdldCgpKSB7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwLWl0ZW0tbGlzdCcpO1xuICBub2RlLnJlbW92ZSgpO1xuICBjb25zdCBwYXJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpO1xuICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGNyZWF0ZUl0ZW1MaXN0KGRhdGEpKTtcbn1cblxuZGF0YW1hbmFnZXIuc3Vic2NyaWJlKFJlbG9hZExpc3QpO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBcHA7XG4iLCJmdW5jdGlvbiBjcmVhdGVGb290ZXJCdXR0b24oeyBjYWxsYmFjaywgbmFtZSwgc3R5bGUgfSA9IHt9KSB7XG4gIGNvbnN0IGZvb3RlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBmb290ZXJCdXR0b24uaW5uZXJIVE1MID0gbmFtZTtcbiAgZm9vdGVyQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiBjYWxsYmFjaygpO1xuICBmb290ZXJCdXR0b24uY2xhc3NOYW1lID0gc3R5bGU7XG4gIHJldHVybiBmb290ZXJCdXR0b247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvb3RlckJ1dHRvbjtcbiIsImltcG9ydCBkYXRhbWFuYWdlciBmcm9tICcuLi8uLi9kYXRhJztcbmltcG9ydCBjcmVhdGVGb290ZXJCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL2NyZWF0ZUZvb3RlckJ1dHRvbic7XG5cbmltcG9ydCAnLi9mb290ZXIuc2Nzcyc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgYWxsQnV0dG9uOiAnZm9vdGVyLWJ1dHRvbiBmb290ZXItYnV0dG9uLWRpc2FibGVkJyxcbiAgYWN0aXZlQnV0dG9uOiAnZm9vdGVyLWJ1dHRvbicsXG4gIGNvbXBsZXRlQnV0dG9uOiAnZm9vdGVyLWJ1dHRvbicsXG59O1xuXG5mdW5jdGlvbiBoYW5kbGVBY3RpdmVCdXR0b24oKSB7XG4gIHN0eWxlcy5hY3RpdmVCdXR0b24gPSAnZm9vdGVyLWJ1dHRvbiBmb290ZXItYnV0dG9uLWRpc2FibGVkJztcbiAgc3R5bGVzLmFsbEJ1dHRvbiA9ICdmb290ZXItYnV0dG9uJztcbiAgc3R5bGVzLmNvbXBsZXRlQnV0dG9uID0gJ2Zvb3Rlci1idXR0b24nO1xuICBkYXRhbWFuYWdlci5wdWJsaXNoKGRhdGFtYW5hZ2VyLmZpbHRlckNvbXBsZXRlKCkpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVBbGxCdXR0b24oKSB7XG4gIHN0eWxlcy5hY3RpdmVCdXR0b24gPSAnZm9vdGVyLWJ1dHRvbic7XG4gIHN0eWxlcy5hbGxCdXR0b24gPSAnZm9vdGVyLWJ1dHRvbiBmb290ZXItYnV0dG9uLWRpc2FibGVkJztcbiAgc3R5bGVzLmNvbXBsZXRlQnV0dG9uID0gJ2Zvb3Rlci1idXR0b24nO1xuICBkYXRhbWFuYWdlci5wdWJsaXNoKCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNvbXBsZXRlQnV0dG9uQnV0dG9uKCkge1xuICBzdHlsZXMuYWN0aXZlQnV0dG9uID0gJ2Zvb3Rlci1idXR0b24nO1xuICBzdHlsZXMuYWxsQnV0dG9uID0gJ2Zvb3Rlci1idXR0b24nO1xuICBzdHlsZXMuY29tcGxldGVCdXR0b24gPSAnZm9vdGVyLWJ1dHRvbiBmb290ZXItYnV0dG9uLWRpc2FibGVkJztcbiAgZGF0YW1hbmFnZXIucHVibGlzaChkYXRhbWFuYWdlci5maWx0ZXJVbmNvbXBsZXRlKCkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBzdW1tYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzdW1tYXJ5LmlubmVySFRNTCA9IGAke2RhdGFtYW5hZ2VyLmZpbHRlckNvbXBsZXRlKCkubGVuZ3RofSBpdGVtcyBsZWZ0YDtcblxuICBjb25zdCBhbGxCdXR0b24gPSBjcmVhdGVGb290ZXJCdXR0b24oeyBjYWxsYmFjazogaGFuZGxlQWxsQnV0dG9uLCBuYW1lOiAnQWxsJywgc3R5bGU6IHN0eWxlcy5hbGxCdXR0b24gfSk7XG4gIGNvbnN0IGFjdGl2ZUJ1dHRvbiA9IGNyZWF0ZUZvb3RlckJ1dHRvbih7IGNhbGxiYWNrOiBoYW5kbGVBY3RpdmVCdXR0b24sIG5hbWU6ICdBY3RpdmUnLCBzdHlsZTogc3R5bGVzLmFjdGl2ZUJ1dHRvbiB9KTtcbiAgY29uc3QgY29tcGxldGVCdXR0b24gPSBjcmVhdGVGb290ZXJCdXR0b24oeyBjYWxsYmFjazogaGFuZGxlQ29tcGxldGVCdXR0b25CdXR0b24sIG5hbWU6ICdDb21wbGV0ZScsIHN0eWxlOiBzdHlsZXMuY29tcGxldGVCdXR0b24gfSk7XG4gIC8vIFRPRE86IGNsZWFyIHRoZSBkYXRhXG4gIGNvbnN0IGNsZWFyQnV0dG9uID0gY3JlYXRlRm9vdGVyQnV0dG9uKHsgY2FsbGJhY2s6IGhhbmRsZUNvbXBsZXRlQnV0dG9uQnV0dG9uLCBuYW1lOiAnQ2xlYXIgY29tcGxldGVkJywgc3R5bGU6ICdmb290ZXItYnV0dG9uJyB9KTtcblxuICBmb290ZXJFbGVtZW50LmFwcGVuZENoaWxkKHN1bW1hcnkpO1xuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGFsbEJ1dHRvbik7XG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWN0aXZlQnV0dG9uKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZUJ1dHRvbik7XG4gIGZvb3RlckVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcik7XG4gIGZvb3RlckVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xlYXJCdXR0b24pO1xuXG4gIGZvb3RlckVsZW1lbnQuY2xhc3NOYW1lID0gJ2Zvb3Rlcic7XG4gIGJ1dHRvbnNDb250YWluZXIuY2xhc3NOYW1lID0gJ2J1dHRvbnMtY29udGFpbmVyJztcblxuICByZXR1cm4gZm9vdGVyRWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9vdGVyO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHBsYWNlaG9sZGVyVGV4dDogJyBXcml0ZSBzb21ldGhpbmcgeW91IG5lZWQgdG8gZG8nLFxuICBhbHRUZXh0OiAndG9kbyBpdGVtJyxcbn07XG4iLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBnZW5lcmF0ZUlEIGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCBkYXRhbWFuYWdlciBmcm9tICcuLi8uLi9kYXRhJztcbmltcG9ydCAnLi9pbnB1dC5zY3NzJztcblxuZnVuY3Rpb24gY3JlYXRlSW5wdXQoKSB7XG4gIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgY29uc3RhbnRzLmFsdFRleHQpO1xuICBpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGNvbnN0YW50cy5wbGFjZWhvbGRlclRleHQpO1xuICBpbnB1dEVsZW1lbnQuY2xhc3NOYW1lID0gJ2FwcC1pbnB1dCc7XG4gIGlucHV0RWxlbWVudC5oYW5kbGVJbnB1dCA9IChpbnB1dFRleHQgPSBpbnB1dEVsZW1lbnQudmFsdWUpID0+IChcbiAgICB7XG4gICAgICBpdGVtSUQ6IGdlbmVyYXRlSUQoKSxcbiAgICAgIGl0ZW1OYW1lOiBpbnB1dFRleHQsXG4gICAgICBpdGVtU3RhdHVzOiBmYWxzZSxcbiAgICB9XG4gICk7XG5cbiAgaW5wdXRFbGVtZW50Lm9ua2V5dXAgPSAoZSkgPT4ge1xuICAgIGlmIChlLmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICAgIGRhdGFtYW5hZ2VyLnB1dChpbnB1dEVsZW1lbnQuaGFuZGxlSW5wdXQoKSk7XG4gICAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgIGRhdGFtYW5hZ2VyLnB1Ymxpc2goKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBpbnB1dEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUlucHV0O1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbnB1dC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYWx0VGV4dDogJ3RvZG8gbGlzdCBvZiBpdGVtcycsXG59O1xuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgY2VhdGVUb2RvSXRlbSBmcm9tICcuLi9Ub2RvSXRlbS9jcmVhdGVUb2RvSXRlbSc7XG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gJy4uL0Zvb3Rlci9jcmVhdGVGb290ZXInO1xuXG5pbXBvcnQgZGF0YW1hbmFnZXIgZnJvbSAnLi4vLi4vZGF0YSc7XG5cbmltcG9ydCAnLi9pdGVtTGlzdC5zY3NzJztcblxuZnVuY3Rpb24gY3JlYXRlaXRlbUxpc3QoaXRlbUxpc3QgPSBkYXRhbWFuYWdlci5nZXQoKSkge1xuICBjb25zdCBpdGVtTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdVTCcpO1xuICBpdGVtTGlzdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdsYWJlbCcsIGNvbnN0YW50cy5hbHRUZXh0KTtcbiAgaXRlbUxpc3RFbGVtZW50LmNsYXNzTmFtZSA9ICdhcHAtaXRlbS1saXN0JztcbiAgaXRlbUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbUxpc3RFbGVtZW50LmFwcGVuZENoaWxkKGNlYXRlVG9kb0l0ZW0oaXRlbSkpKTtcbiAgaWYgKGRhdGFtYW5hZ2VyLmdldCgpLmxlbmd0aCkgeyBpdGVtTGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpOyB9XG4gIHJldHVybiBpdGVtTGlzdEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZWl0ZW1MaXN0O1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pdGVtTGlzdC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGVUZXh0OiAndG9kb3MnLFxuICBhbHRUZXh0OiAndG8gZG8gbGlzdCcsXG59O1xuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmltcG9ydCAnLi90aXRsZS5zY3NzJztcblxuZnVuY3Rpb24gY3JlYXRlVGl0bGUoKSB7XG4gIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgY29uc3RhbnRzLmFsdFRleHQpO1xuICB0aXRsZUVsZW1lbnQuaW5uZXJIVE1MID0gY29uc3RhbnRzLnRpdGxlVGV4dDtcbiAgdGl0bGVFbGVtZW50LmNsYXNzTmFtZSA9ICdhcHAtdGl0bGUnO1xuICByZXR1cm4gdGl0bGVFbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUaXRsZTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGl0bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Nsb3NlQnV0dG9uLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0ICcuL3RvZ2dsZUJ1dHRvbi5zY3NzJztcbmltcG9ydCBkYXRhbWFuYWdlciBmcm9tICcuLi8uLi8uLi9kYXRhJztcblxuZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSwgaXRlbUlEKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZGF0YW1hbmFnZXIuY2hhbmdlU3RhdHVzKGl0ZW1JRCk7XG4gIGRhdGFtYW5hZ2VyLnB1Ymxpc2goKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2hlY2tCb3goc3RhdHVzID0gZmFsc2UsIGl0ZW1JRCkge1xuICBjb25zdCB0b2dnbGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRvZ2dsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICB0b2dnbGVFbGVtZW50Lm9uY2xpY2sgPSAoZSkgPT4gaGFuZGxlQ2xpY2soZSwgaXRlbUlEKTtcblxuICBjb25zdCBjaGVja21hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY2hlY2ttYXJrLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL2NoZWNrbWFyay5zdmcnKTtcblxuICBpZiAoc3RhdHVzKSB0b2dnbGVFbGVtZW50LmFwcGVuZENoaWxkKGNoZWNrbWFyayk7XG5cbiAgdG9nZ2xlRWxlbWVudC5jbGFzc05hbWUgPSAndG9nZ2xlLWJ1dHRvbic7XG4gIHJldHVybiB0b2dnbGVFbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDaGVja0JveDtcbiIsImltcG9ydCAnLi9jbG9zZUJ1dHRvbi5zY3NzJztcbmltcG9ydCBkYXRhbWFuYWdlciBmcm9tICcuLi8uLi8uLi9kYXRhJztcbmltcG9ydCB7IENMT1NFX0lDT04gfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvcGF0aHMnO1xuXG5cbmZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUsIGl0ZW1JRCkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGRhdGFtYW5hZ2VyLmRlbGV0ZShpdGVtSUQpO1xuICBkYXRhbWFuYWdlci5wdWJsaXNoKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsb3NlQnV0dG9uKGl0ZW1JRCkge1xuICBjb25zdCBjbG9zZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2xvc2VFbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgY2xvc2VFbGVtZW50Lm9uY2xpY2sgPSAoZSkgPT4gaGFuZGxlQ2xpY2soZSwgaXRlbUlEKTtcbiAgY2xvc2VFbGVtZW50LmNsYXNzTmFtZSA9ICdjbG9zZS1idXR0b24nO1xuXG4gIGNvbnN0IGNoZWNrbWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjaGVja21hcmsuc2V0QXR0cmlidXRlKCdzcmMnLCBDTE9TRV9JQ09OKTtcbiAgY2xvc2VFbGVtZW50LmFwcGVuZENoaWxkKGNoZWNrbWFyayk7XG4gIHJldHVybiBjbG9zZUVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNsb3NlQnV0dG9uO1xuIiwiaW1wb3J0ICcuL2VkaXRhYmxlTGFiZWwuc2Nzcyc7XG5pbXBvcnQgZGF0YW1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vZGF0YSc7XG5cbmZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUsIGl0ZW1JRCkge1xuICBkYXRhbWFuYWdlci51cGRhdGVOYW1lKGl0ZW1JRCwgZS50YXJnZXQuaW5uZXJUZXh0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWRpdGFibGVMYWJlbCh0ZXh0VmFsdWUgPSAnJywgaXRlbUlEID0gMTIpIHtcbiAgY29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxhYmVsRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIHRydWUpO1xuICBsYWJlbEVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dFZhbHVlO1xuICBsYWJlbEVsZW1lbnQuY2xhc3NOYW1lID0gJ2VkaXRhYmxlLWxhYmVsJztcblxuICBpZiAoZGF0YW1hbmFnZXIuZ2V0T25lKGl0ZW1JRCkuaXRlbVN0YXR1cykge1xuICAgIGxhYmVsRWxlbWVudC5jbGFzc05hbWUgPSAnZWRpdGFibGUtbGFiZWwgZWRpdGFibGUtbGFiZWwtZGlzYWJsZSc7XG4gIH0gZWxzZSB7XG4gICAgbGFiZWxFbGVtZW50Lm9uaW5wdXQgPSAoZSkgPT4gaGFuZGxlQ2xpY2soZSwgaXRlbUlEKTtcbiAgfVxuICByZXR1cm4gbGFiZWxFbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFZGl0YWJsZUxhYmVsO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9lZGl0YWJsZUxhYmVsLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2dnbGVCdXR0b24uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgY3JlYXRlQ2hlY2tCb3ggZnJvbSAnLi9jb21wb25lbnRzL2NyZWF0ZUNoZWNrQm94JztcbmltcG9ydCBjcmVhdGVFZGl0YWJsZUxhYmVsIGZyb20gJy4vY29tcG9uZW50cy9jcmVhdGVFZGl0YWJsZUxhYmVsJztcbmltcG9ydCBjcmVhdGVDbG9zZUJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvY3JlYXRlQ2xvc2VCdXR0b24nO1xuaW1wb3J0IGdlbmVyYXRlSUQgZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5pbXBvcnQgJy4vdG9kb0l0ZW0uc2Nzcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9JdGVtKFxuICB7IGl0ZW1JRCwgaXRlbU5hbWUsIGl0ZW1TdGF0dXMgfSA9XG4gIHsgaXRlbUlEOiBnZW5lcmF0ZUlEKCksIGl0ZW1OYW1lOiAnJywgaXRlbVN0YXR1czogZmFsc2UgfSxcbikge1xuICBjb25zdCB0b2RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIHRvZG9FbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBpdGVtSUQpO1xuICB0b2RvRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVDaGVja0JveChpdGVtU3RhdHVzLCBpdGVtSUQpKTtcbiAgdG9kb0VsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWRpdGFibGVMYWJlbChpdGVtTmFtZSwgaXRlbUlEKSk7XG4gIHRvZG9FbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUNsb3NlQnV0dG9uKGl0ZW1JRCkpO1xuICB0b2RvRWxlbWVudC5jbGFzc05hbWUgPSAndG9kby1pdGVtJztcbiAgcmV0dXJuIHRvZG9FbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUb2RvSXRlbTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kb0l0ZW0uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJleHBvcnQgY29uc3QgQ0xPU0VfSUNPTiA9ICcuLi9hc3NldHMvY2xvc2Uuc3ZnJztcblxuZXhwb3J0IGNvbnN0IENIRUNLTUFSS19JQ09OID0gJy4uL2Fzc2V0cy9jaGVja21hcmsuc3ZnJztcbiIsImNvbnN0IHRvZG9MaXN0ID0gW1xuICB7XG4gICAgaXRlbUlEOiAxLFxuICAgIGl0ZW1OYW1lOiAnQ2xlYW4gZGlzaGVzJyxcbiAgICBpdGVtU3RhdHVzOiB0cnVlLFxuICB9LFxuICB7XG4gICAgaXRlbUlEOiAxMixcbiAgICBpdGVtTmFtZTogJ2dhcmJhZ2UgY2FuJyxcbiAgICBpdGVtU3RhdHVzOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIGl0ZW1JRDogMTMsXG4gICAgaXRlbU5hbWU6ICdvcmdhbml6ZXInLFxuICAgIGl0ZW1TdGF0dXM6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgaXRlbUlEOiAxNCxcbiAgICBpdGVtTmFtZTogJ3RlZGR5IGJlYWJlcicsXG4gICAgaXRlbVN0YXR1czogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGl0ZW1JRDogMTExLFxuICAgIGl0ZW1OYW1lOiAnRnJ1aXQnLFxuICAgIGl0ZW1TdGF0dXM6IGZhbHNlLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kb0xpc3Q7XG4iLCJpbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEnO1xuXG5jb25zdCB0b2RvSXRlbXMgPSBkYXRhO1xuY29uc3QgY2hhbmdlTGlzdGVuZXJzID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0Q2hhbmdlTGlzdDogKCkgPT4gY2hhbmdlTGlzdGVuZXJzLFxuICBnZXQ6ICgpID0+IHRvZG9JdGVtcyxcbiAgZ2V0T25lOiAoaXRlbUlkKSA9PiB0b2RvSXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLml0ZW1JRCA9PT0gaXRlbUlkKVswXSxcbiAgcHV0OiAoaXRlbSkgPT4gdG9kb0l0ZW1zLnVuc2hpZnQoaXRlbSksXG4gIGRlbGV0ZTogKGl0ZW1JZCkgPT4gKHRvZG9JdGVtcy5zcGxpY2UodG9kb0l0ZW1zLmluZGV4T2YodG9kb0l0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pdGVtSUQgPT09IGl0ZW1JZClbMF0pLCAxKSksXG4gIGNoYW5nZVN0YXR1czogKGl0ZW1JZCkgPT4gdG9kb0l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5pdGVtSUQgPT09IGl0ZW1JZCkgeyBpdGVtLml0ZW1TdGF0dXMgPSAhaXRlbS5pdGVtU3RhdHVzOyB9XG4gIH0pLFxuICB1cGRhdGVOYW1lOiAoaXRlbUlkLCBuZXdOYW1lKSA9PiB0b2RvSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtLml0ZW1JRCA9PT0gaXRlbUlkKSB7IGl0ZW0uaXRlbU5hbWUgPSBuZXdOYW1lOyB9XG4gIH0pLFxuICBmaWx0ZXJDb21wbGV0ZTogKCkgPT4gdG9kb0l0ZW1zLmZpbHRlcigoaXRlbSkgPT4gIWl0ZW0uaXRlbVN0YXR1cyksXG4gIGZpbHRlclVuY29tcGxldGU6ICgpID0+IHRvZG9JdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaXRlbVN0YXR1cyksXG4gIHN1YnNjcmliZTogKGNhbGxiYWNrZnVuY3Rpb24pID0+IGNoYW5nZUxpc3RlbmVycy5wdXNoKGNhbGxiYWNrZnVuY3Rpb24pLFxuICBwdWJsaXNoOiAoZCkgPT4gY2hhbmdlTGlzdGVuZXJzLm1hcCgoY2hhbmdlTGlzdGVuZXIpID0+IChjaGFuZ2VMaXN0ZW5lcihkKSkpLFxufTtcbiIsImltcG9ydCBjcmVhdGVBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcC9jcmVhdGVBcHAnO1xuXG5jb25zdCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpO1xuXG5jcmVhdGVBcHAobm9kZSk7XG4iLCJjb25zdCBnZW5lcmF0ZUlEID0gKGRhdGUgPSBuZXcgRGF0ZSgpKSA9PiAwIC0gYCR7ZGF0ZS5nZXRNaWxsaXNlY29uZHMoKX0ke2RhdGUuZ2V0RGF5KCl9JHtkYXRlLmdldFNlY29uZHMoKX1gO1xuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUlEO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==