/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(5);

	//document.write(require('./node_modules/jquery/dist/jquery.min.js'));
	//document.write(require('./js/hammer.min.js'));
	//document.write(require('./node_modules/hammerjs/hammer.min.js'));
	//document.write(require('imports?hammerjs='));
	document.write(__webpack_require__(27));
	//document.write(require('./js/page.js'));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".text-narrow-center {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 600px; }\n\n.parallax-container {\n  color: rgba(255, 255, 255, 0.9); }\n\n.large-parallax-container {\n  height: 70vh; }\n  .large-parallax-container#contact {\n    min-height: 100vh;\n    height: auto; }\n\n.small-parallax-container {\n  height: 30vh;\n  width: 100%; }\n  .small-parallax-container .parallax img {\n    width: 100%;\n    float: left; }\n\ndiv.parallax-container div.full-width-section {\n  width: 100%; }\n\n.icon-block-row {\n  height: 30vh; }\n  .icon-block-row .col {\n    position: relative;\n    top: 50%;\n    transform: translateY(-50%); }\n    .icon-block-row .col .icon-block {\n      width: 100%; }\n\n.parallax img {\n  height: auto; }\n\n#contact .container {\n  opacity: 0; }\n  #contact .container a {\n    color: white; }\n  #contact .container span {\n    white-space: pre; }\n\n#experience-section li {\n  opacity: 0; }\n\n.big-icon {\n  margin-left: 10px;\n  margin-right: 10px; }\n\n@media screen and (min-width: 993px) {\n  #dlResumeWrapper {\n    margin-top: 40vh; } }\n\n#dlResumeWrapper .btn-large {\n  margin-bottom: 10px;\n  margin-top: 10px; }\n", ""]);

	// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!./materialize.min.css", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!./materialize.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".materialize-red.lighten-5 {\n  background-color: #fdeaeb !important; }\n\n.materialize-red-text.text-lighten-5 {\n  color: #fdeaeb !important; }\n\n.materialize-red.lighten-4 {\n  background-color: #f8c1c3 !important; }\n\n.materialize-red-text.text-lighten-4 {\n  color: #f8c1c3 !important; }\n\n.materialize-red.lighten-3 {\n  background-color: #f3989b !important; }\n\n.materialize-red-text.text-lighten-3 {\n  color: #f3989b !important; }\n\n.materialize-red.lighten-2 {\n  background-color: #ee6e73 !important; }\n\n.materialize-red-text.text-lighten-2 {\n  color: #ee6e73 !important; }\n\n.materialize-red.lighten-1 {\n  background-color: #ea454b !important; }\n\n.materialize-red-text.text-lighten-1 {\n  color: #ea454b !important; }\n\n.materialize-red {\n  background-color: #e51c23 !important; }\n\n.materialize-red-text {\n  color: #e51c23 !important; }\n\n.materialize-red.darken-1 {\n  background-color: #d0181e !important; }\n\n.materialize-red-text.text-darken-1 {\n  color: #d0181e !important; }\n\n.materialize-red.darken-2 {\n  background-color: #b9151b !important; }\n\n.materialize-red-text.text-darken-2 {\n  color: #b9151b !important; }\n\n.materialize-red.darken-3 {\n  background-color: #a21318 !important; }\n\n.materialize-red-text.text-darken-3 {\n  color: #a21318 !important; }\n\n.materialize-red.darken-4 {\n  background-color: #8b1014 !important; }\n\n.materialize-red-text.text-darken-4 {\n  color: #8b1014 !important; }\n\n.red.lighten-5 {\n  background-color: #FFEBEE !important; }\n\n.red-text.text-lighten-5 {\n  color: #FFEBEE !important; }\n\n.red.lighten-4 {\n  background-color: #FFCDD2 !important; }\n\n.red-text.text-lighten-4 {\n  color: #FFCDD2 !important; }\n\n.red.lighten-3 {\n  background-color: #EF9A9A !important; }\n\n.red-text.text-lighten-3 {\n  color: #EF9A9A !important; }\n\n.red.lighten-2 {\n  background-color: #E57373 !important; }\n\n.red-text.text-lighten-2 {\n  color: #E57373 !important; }\n\n.red.lighten-1 {\n  background-color: #EF5350 !important; }\n\n.red-text.text-lighten-1 {\n  color: #EF5350 !important; }\n\n.red {\n  background-color: #F44336 !important; }\n\n.red-text {\n  color: #F44336 !important; }\n\n.red.darken-1 {\n  background-color: #E53935 !important; }\n\n.red-text.text-darken-1 {\n  color: #E53935 !important; }\n\n.red.darken-2 {\n  background-color: #D32F2F !important; }\n\n.red-text.text-darken-2 {\n  color: #D32F2F !important; }\n\n.red.darken-3 {\n  background-color: #C62828 !important; }\n\n.red-text.text-darken-3 {\n  color: #C62828 !important; }\n\n.red.darken-4 {\n  background-color: #B71C1C !important; }\n\n.red-text.text-darken-4 {\n  color: #B71C1C !important; }\n\n.red.accent-1 {\n  background-color: #FF8A80 !important; }\n\n.red-text.text-accent-1 {\n  color: #FF8A80 !important; }\n\n.red.accent-2 {\n  background-color: #FF5252 !important; }\n\n.red-text.text-accent-2 {\n  color: #FF5252 !important; }\n\n.red.accent-3 {\n  background-color: #FF1744 !important; }\n\n.red-text.text-accent-3 {\n  color: #FF1744 !important; }\n\n.red.accent-4 {\n  background-color: #D50000 !important; }\n\n.red-text.text-accent-4 {\n  color: #D50000 !important; }\n\n.pink.lighten-5 {\n  background-color: #fce4ec !important; }\n\n.pink-text.text-lighten-5 {\n  color: #fce4ec !important; }\n\n.pink.lighten-4 {\n  background-color: #f8bbd0 !important; }\n\n.pink-text.text-lighten-4 {\n  color: #f8bbd0 !important; }\n\n.pink.lighten-3 {\n  background-color: #f48fb1 !important; }\n\n.pink-text.text-lighten-3 {\n  color: #f48fb1 !important; }\n\n.pink.lighten-2 {\n  background-color: #f06292 !important; }\n\n.pink-text.text-lighten-2 {\n  color: #f06292 !important; }\n\n.pink.lighten-1 {\n  background-color: #ec407a !important; }\n\n.pink-text.text-lighten-1 {\n  color: #ec407a !important; }\n\n.pink {\n  background-color: #e91e63 !important; }\n\n.pink-text {\n  color: #e91e63 !important; }\n\n.pink.darken-1 {\n  background-color: #d81b60 !important; }\n\n.pink-text.text-darken-1 {\n  color: #d81b60 !important; }\n\n.pink.darken-2 {\n  background-color: #c2185b !important; }\n\n.pink-text.text-darken-2 {\n  color: #c2185b !important; }\n\n.pink.darken-3 {\n  background-color: #ad1457 !important; }\n\n.pink-text.text-darken-3 {\n  color: #ad1457 !important; }\n\n.pink.darken-4 {\n  background-color: #880e4f !important; }\n\n.pink-text.text-darken-4 {\n  color: #880e4f !important; }\n\n.pink.accent-1 {\n  background-color: #ff80ab !important; }\n\n.pink-text.text-accent-1 {\n  color: #ff80ab !important; }\n\n.pink.accent-2 {\n  background-color: #ff4081 !important; }\n\n.pink-text.text-accent-2 {\n  color: #ff4081 !important; }\n\n.pink.accent-3 {\n  background-color: #f50057 !important; }\n\n.pink-text.text-accent-3 {\n  color: #f50057 !important; }\n\n.pink.accent-4 {\n  background-color: #c51162 !important; }\n\n.pink-text.text-accent-4 {\n  color: #c51162 !important; }\n\n.purple.lighten-5 {\n  background-color: #f3e5f5 !important; }\n\n.purple-text.text-lighten-5 {\n  color: #f3e5f5 !important; }\n\n.purple.lighten-4 {\n  background-color: #e1bee7 !important; }\n\n.purple-text.text-lighten-4 {\n  color: #e1bee7 !important; }\n\n.purple.lighten-3 {\n  background-color: #ce93d8 !important; }\n\n.purple-text.text-lighten-3 {\n  color: #ce93d8 !important; }\n\n.purple.lighten-2 {\n  background-color: #ba68c8 !important; }\n\n.purple-text.text-lighten-2 {\n  color: #ba68c8 !important; }\n\n.purple.lighten-1 {\n  background-color: #ab47bc !important; }\n\n.purple-text.text-lighten-1 {\n  color: #ab47bc !important; }\n\n.purple {\n  background-color: #9c27b0 !important; }\n\n.purple-text {\n  color: #9c27b0 !important; }\n\n.purple.darken-1 {\n  background-color: #8e24aa !important; }\n\n.purple-text.text-darken-1 {\n  color: #8e24aa !important; }\n\n.purple.darken-2 {\n  background-color: #7b1fa2 !important; }\n\n.purple-text.text-darken-2 {\n  color: #7b1fa2 !important; }\n\n.purple.darken-3 {\n  background-color: #6a1b9a !important; }\n\n.purple-text.text-darken-3 {\n  color: #6a1b9a !important; }\n\n.purple.darken-4 {\n  background-color: #4a148c !important; }\n\n.purple-text.text-darken-4 {\n  color: #4a148c !important; }\n\n.purple.accent-1 {\n  background-color: #ea80fc !important; }\n\n.purple-text.text-accent-1 {\n  color: #ea80fc !important; }\n\n.purple.accent-2 {\n  background-color: #e040fb !important; }\n\n.purple-text.text-accent-2 {\n  color: #e040fb !important; }\n\n.purple.accent-3 {\n  background-color: #d500f9 !important; }\n\n.purple-text.text-accent-3 {\n  color: #d500f9 !important; }\n\n.purple.accent-4 {\n  background-color: #aa00ff !important; }\n\n.purple-text.text-accent-4 {\n  color: #aa00ff !important; }\n\n.deep-purple.lighten-5 {\n  background-color: #ede7f6 !important; }\n\n.deep-purple-text.text-lighten-5 {\n  color: #ede7f6 !important; }\n\n.deep-purple.lighten-4 {\n  background-color: #d1c4e9 !important; }\n\n.deep-purple-text.text-lighten-4 {\n  color: #d1c4e9 !important; }\n\n.deep-purple.lighten-3 {\n  background-color: #b39ddb !important; }\n\n.deep-purple-text.text-lighten-3 {\n  color: #b39ddb !important; }\n\n.deep-purple.lighten-2 {\n  background-color: #9575cd !important; }\n\n.deep-purple-text.text-lighten-2 {\n  color: #9575cd !important; }\n\n.deep-purple.lighten-1 {\n  background-color: #7e57c2 !important; }\n\n.deep-purple-text.text-lighten-1 {\n  color: #7e57c2 !important; }\n\n.deep-purple {\n  background-color: #673ab7 !important; }\n\n.deep-purple-text {\n  color: #673ab7 !important; }\n\n.deep-purple.darken-1 {\n  background-color: #5e35b1 !important; }\n\n.deep-purple-text.text-darken-1 {\n  color: #5e35b1 !important; }\n\n.deep-purple.darken-2 {\n  background-color: #512da8 !important; }\n\n.deep-purple-text.text-darken-2 {\n  color: #512da8 !important; }\n\n.deep-purple.darken-3 {\n  background-color: #4527a0 !important; }\n\n.deep-purple-text.text-darken-3 {\n  color: #4527a0 !important; }\n\n.deep-purple.darken-4 {\n  background-color: #311b92 !important; }\n\n.deep-purple-text.text-darken-4 {\n  color: #311b92 !important; }\n\n.deep-purple.accent-1 {\n  background-color: #b388ff !important; }\n\n.deep-purple-text.text-accent-1 {\n  color: #b388ff !important; }\n\n.deep-purple.accent-2 {\n  background-color: #7c4dff !important; }\n\n.deep-purple-text.text-accent-2 {\n  color: #7c4dff !important; }\n\n.deep-purple.accent-3 {\n  background-color: #651fff !important; }\n\n.deep-purple-text.text-accent-3 {\n  color: #651fff !important; }\n\n.deep-purple.accent-4 {\n  background-color: #6200ea !important; }\n\n.deep-purple-text.text-accent-4 {\n  color: #6200ea !important; }\n\n.indigo.lighten-5 {\n  background-color: #e8eaf6 !important; }\n\n.indigo-text.text-lighten-5 {\n  color: #e8eaf6 !important; }\n\n.indigo.lighten-4 {\n  background-color: #c5cae9 !important; }\n\n.indigo-text.text-lighten-4 {\n  color: #c5cae9 !important; }\n\n.indigo.lighten-3 {\n  background-color: #9fa8da !important; }\n\n.indigo-text.text-lighten-3 {\n  color: #9fa8da !important; }\n\n.indigo.lighten-2 {\n  background-color: #7986cb !important; }\n\n.indigo-text.text-lighten-2 {\n  color: #7986cb !important; }\n\n.indigo.lighten-1 {\n  background-color: #5c6bc0 !important; }\n\n.indigo-text.text-lighten-1 {\n  color: #5c6bc0 !important; }\n\n.indigo {\n  background-color: #3f51b5 !important; }\n\n.indigo-text {\n  color: #3f51b5 !important; }\n\n.indigo.darken-1 {\n  background-color: #3949ab !important; }\n\n.indigo-text.text-darken-1 {\n  color: #3949ab !important; }\n\n.indigo.darken-2 {\n  background-color: #303f9f !important; }\n\n.indigo-text.text-darken-2 {\n  color: #303f9f !important; }\n\n.indigo.darken-3 {\n  background-color: #283593 !important; }\n\n.indigo-text.text-darken-3 {\n  color: #283593 !important; }\n\n.indigo.darken-4 {\n  background-color: #1a237e !important; }\n\n.indigo-text.text-darken-4 {\n  color: #1a237e !important; }\n\n.indigo.accent-1 {\n  background-color: #8c9eff !important; }\n\n.indigo-text.text-accent-1 {\n  color: #8c9eff !important; }\n\n.indigo.accent-2 {\n  background-color: #536dfe !important; }\n\n.indigo-text.text-accent-2 {\n  color: #536dfe !important; }\n\n.indigo.accent-3 {\n  background-color: #3d5afe !important; }\n\n.indigo-text.text-accent-3 {\n  color: #3d5afe !important; }\n\n.indigo.accent-4 {\n  background-color: #304ffe !important; }\n\n.indigo-text.text-accent-4 {\n  color: #304ffe !important; }\n\n.blue.lighten-5 {\n  background-color: #E3F2FD !important; }\n\n.blue-text.text-lighten-5 {\n  color: #E3F2FD !important; }\n\n.blue.lighten-4 {\n  background-color: #BBDEFB !important; }\n\n.blue-text.text-lighten-4 {\n  color: #BBDEFB !important; }\n\n.blue.lighten-3 {\n  background-color: #90CAF9 !important; }\n\n.blue-text.text-lighten-3 {\n  color: #90CAF9 !important; }\n\n.blue.lighten-2 {\n  background-color: #64B5F6 !important; }\n\n.blue-text.text-lighten-2 {\n  color: #64B5F6 !important; }\n\n.blue.lighten-1 {\n  background-color: #42A5F5 !important; }\n\n.blue-text.text-lighten-1 {\n  color: #42A5F5 !important; }\n\n.blue {\n  background-color: #2196F3 !important; }\n\n.blue-text {\n  color: #2196F3 !important; }\n\n.blue.darken-1 {\n  background-color: #1E88E5 !important; }\n\n.blue-text.text-darken-1 {\n  color: #1E88E5 !important; }\n\n.blue.darken-2 {\n  background-color: #1976D2 !important; }\n\n.blue-text.text-darken-2 {\n  color: #1976D2 !important; }\n\n.blue.darken-3 {\n  background-color: #1565C0 !important; }\n\n.blue-text.text-darken-3 {\n  color: #1565C0 !important; }\n\n.blue.darken-4 {\n  background-color: #0D47A1 !important; }\n\n.blue-text.text-darken-4 {\n  color: #0D47A1 !important; }\n\n.blue.accent-1 {\n  background-color: #82B1FF !important; }\n\n.blue-text.text-accent-1 {\n  color: #82B1FF !important; }\n\n.blue.accent-2 {\n  background-color: #448AFF !important; }\n\n.blue-text.text-accent-2 {\n  color: #448AFF !important; }\n\n.blue.accent-3 {\n  background-color: #2979FF !important; }\n\n.blue-text.text-accent-3 {\n  color: #2979FF !important; }\n\n.blue.accent-4 {\n  background-color: #2962FF !important; }\n\n.blue-text.text-accent-4 {\n  color: #2962FF !important; }\n\n.light-blue.lighten-5 {\n  background-color: #e1f5fe !important; }\n\n.light-blue-text.text-lighten-5 {\n  color: #e1f5fe !important; }\n\n.light-blue.lighten-4 {\n  background-color: #b3e5fc !important; }\n\n.light-blue-text.text-lighten-4 {\n  color: #b3e5fc !important; }\n\n.light-blue.lighten-3 {\n  background-color: #81d4fa !important; }\n\n.light-blue-text.text-lighten-3 {\n  color: #81d4fa !important; }\n\n.light-blue.lighten-2 {\n  background-color: #4fc3f7 !important; }\n\n.light-blue-text.text-lighten-2 {\n  color: #4fc3f7 !important; }\n\n.light-blue.lighten-1 {\n  background-color: #29b6f6 !important; }\n\n.light-blue-text.text-lighten-1 {\n  color: #29b6f6 !important; }\n\n.light-blue {\n  background-color: #03a9f4 !important; }\n\n.light-blue-text {\n  color: #03a9f4 !important; }\n\n.light-blue.darken-1 {\n  background-color: #039be5 !important; }\n\n.light-blue-text.text-darken-1 {\n  color: #039be5 !important; }\n\n.light-blue.darken-2 {\n  background-color: #0288d1 !important; }\n\n.light-blue-text.text-darken-2 {\n  color: #0288d1 !important; }\n\n.light-blue.darken-3 {\n  background-color: #0277bd !important; }\n\n.light-blue-text.text-darken-3 {\n  color: #0277bd !important; }\n\n.light-blue.darken-4 {\n  background-color: #01579b !important; }\n\n.light-blue-text.text-darken-4 {\n  color: #01579b !important; }\n\n.light-blue.accent-1 {\n  background-color: #80d8ff !important; }\n\n.light-blue-text.text-accent-1 {\n  color: #80d8ff !important; }\n\n.light-blue.accent-2 {\n  background-color: #40c4ff !important; }\n\n.light-blue-text.text-accent-2 {\n  color: #40c4ff !important; }\n\n.light-blue.accent-3 {\n  background-color: #00b0ff !important; }\n\n.light-blue-text.text-accent-3 {\n  color: #00b0ff !important; }\n\n.light-blue.accent-4 {\n  background-color: #0091ea !important; }\n\n.light-blue-text.text-accent-4 {\n  color: #0091ea !important; }\n\n.cyan.lighten-5 {\n  background-color: #e0f7fa !important; }\n\n.cyan-text.text-lighten-5 {\n  color: #e0f7fa !important; }\n\n.cyan.lighten-4 {\n  background-color: #b2ebf2 !important; }\n\n.cyan-text.text-lighten-4 {\n  color: #b2ebf2 !important; }\n\n.cyan.lighten-3 {\n  background-color: #80deea !important; }\n\n.cyan-text.text-lighten-3 {\n  color: #80deea !important; }\n\n.cyan.lighten-2 {\n  background-color: #4dd0e1 !important; }\n\n.cyan-text.text-lighten-2 {\n  color: #4dd0e1 !important; }\n\n.cyan.lighten-1 {\n  background-color: #26c6da !important; }\n\n.cyan-text.text-lighten-1 {\n  color: #26c6da !important; }\n\n.cyan {\n  background-color: #00bcd4 !important; }\n\n.cyan-text {\n  color: #00bcd4 !important; }\n\n.cyan.darken-1 {\n  background-color: #00acc1 !important; }\n\n.cyan-text.text-darken-1 {\n  color: #00acc1 !important; }\n\n.cyan.darken-2 {\n  background-color: #0097a7 !important; }\n\n.cyan-text.text-darken-2 {\n  color: #0097a7 !important; }\n\n.cyan.darken-3 {\n  background-color: #00838f !important; }\n\n.cyan-text.text-darken-3 {\n  color: #00838f !important; }\n\n.cyan.darken-4 {\n  background-color: #006064 !important; }\n\n.cyan-text.text-darken-4 {\n  color: #006064 !important; }\n\n.cyan.accent-1 {\n  background-color: #84ffff !important; }\n\n.cyan-text.text-accent-1 {\n  color: #84ffff !important; }\n\n.cyan.accent-2 {\n  background-color: #18ffff !important; }\n\n.cyan-text.text-accent-2 {\n  color: #18ffff !important; }\n\n.cyan.accent-3 {\n  background-color: #00e5ff !important; }\n\n.cyan-text.text-accent-3 {\n  color: #00e5ff !important; }\n\n.cyan.accent-4 {\n  background-color: #00b8d4 !important; }\n\n.cyan-text.text-accent-4 {\n  color: #00b8d4 !important; }\n\n.teal.lighten-5 {\n  background-color: #e0f2f1 !important; }\n\n.teal-text.text-lighten-5 {\n  color: #e0f2f1 !important; }\n\n.teal.lighten-4 {\n  background-color: #b2dfdb !important; }\n\n.teal-text.text-lighten-4 {\n  color: #b2dfdb !important; }\n\n.teal.lighten-3 {\n  background-color: #80cbc4 !important; }\n\n.teal-text.text-lighten-3 {\n  color: #80cbc4 !important; }\n\n.teal.lighten-2 {\n  background-color: #4db6ac !important; }\n\n.teal-text.text-lighten-2 {\n  color: #4db6ac !important; }\n\n.teal.lighten-1 {\n  background-color: #26a69a !important; }\n\n.teal-text.text-lighten-1 {\n  color: #26a69a !important; }\n\n.teal {\n  background-color: #009688 !important; }\n\n.teal-text {\n  color: #009688 !important; }\n\n.teal.darken-1 {\n  background-color: #00897b !important; }\n\n.teal-text.text-darken-1 {\n  color: #00897b !important; }\n\n.teal.darken-2 {\n  background-color: #00796b !important; }\n\n.teal-text.text-darken-2 {\n  color: #00796b !important; }\n\n.teal.darken-3 {\n  background-color: #00695c !important; }\n\n.teal-text.text-darken-3 {\n  color: #00695c !important; }\n\n.teal.darken-4 {\n  background-color: #004d40 !important; }\n\n.teal-text.text-darken-4 {\n  color: #004d40 !important; }\n\n.teal.accent-1 {\n  background-color: #a7ffeb !important; }\n\n.teal-text.text-accent-1 {\n  color: #a7ffeb !important; }\n\n.teal.accent-2 {\n  background-color: #64ffda !important; }\n\n.teal-text.text-accent-2 {\n  color: #64ffda !important; }\n\n.teal.accent-3 {\n  background-color: #1de9b6 !important; }\n\n.teal-text.text-accent-3 {\n  color: #1de9b6 !important; }\n\n.teal.accent-4 {\n  background-color: #00bfa5 !important; }\n\n.teal-text.text-accent-4 {\n  color: #00bfa5 !important; }\n\n.green.lighten-5 {\n  background-color: #E8F5E9 !important; }\n\n.green-text.text-lighten-5 {\n  color: #E8F5E9 !important; }\n\n.green.lighten-4 {\n  background-color: #C8E6C9 !important; }\n\n.green-text.text-lighten-4 {\n  color: #C8E6C9 !important; }\n\n.green.lighten-3 {\n  background-color: #A5D6A7 !important; }\n\n.green-text.text-lighten-3 {\n  color: #A5D6A7 !important; }\n\n.green.lighten-2 {\n  background-color: #81C784 !important; }\n\n.green-text.text-lighten-2 {\n  color: #81C784 !important; }\n\n.green.lighten-1 {\n  background-color: #66BB6A !important; }\n\n.green-text.text-lighten-1 {\n  color: #66BB6A !important; }\n\n.green {\n  background-color: #4CAF50 !important; }\n\n.green-text {\n  color: #4CAF50 !important; }\n\n.green.darken-1 {\n  background-color: #43A047 !important; }\n\n.green-text.text-darken-1 {\n  color: #43A047 !important; }\n\n.green.darken-2 {\n  background-color: #388E3C !important; }\n\n.green-text.text-darken-2 {\n  color: #388E3C !important; }\n\n.green.darken-3 {\n  background-color: #2E7D32 !important; }\n\n.green-text.text-darken-3 {\n  color: #2E7D32 !important; }\n\n.green.darken-4 {\n  background-color: #1B5E20 !important; }\n\n.green-text.text-darken-4 {\n  color: #1B5E20 !important; }\n\n.green.accent-1 {\n  background-color: #B9F6CA !important; }\n\n.green-text.text-accent-1 {\n  color: #B9F6CA !important; }\n\n.green.accent-2 {\n  background-color: #69F0AE !important; }\n\n.green-text.text-accent-2 {\n  color: #69F0AE !important; }\n\n.green.accent-3 {\n  background-color: #00E676 !important; }\n\n.green-text.text-accent-3 {\n  color: #00E676 !important; }\n\n.green.accent-4 {\n  background-color: #00C853 !important; }\n\n.green-text.text-accent-4 {\n  color: #00C853 !important; }\n\n.light-green.lighten-5 {\n  background-color: #f1f8e9 !important; }\n\n.light-green-text.text-lighten-5 {\n  color: #f1f8e9 !important; }\n\n.light-green.lighten-4 {\n  background-color: #dcedc8 !important; }\n\n.light-green-text.text-lighten-4 {\n  color: #dcedc8 !important; }\n\n.light-green.lighten-3 {\n  background-color: #c5e1a5 !important; }\n\n.light-green-text.text-lighten-3 {\n  color: #c5e1a5 !important; }\n\n.light-green.lighten-2 {\n  background-color: #aed581 !important; }\n\n.light-green-text.text-lighten-2 {\n  color: #aed581 !important; }\n\n.light-green.lighten-1 {\n  background-color: #9ccc65 !important; }\n\n.light-green-text.text-lighten-1 {\n  color: #9ccc65 !important; }\n\n.light-green {\n  background-color: #8bc34a !important; }\n\n.light-green-text {\n  color: #8bc34a !important; }\n\n.light-green.darken-1 {\n  background-color: #7cb342 !important; }\n\n.light-green-text.text-darken-1 {\n  color: #7cb342 !important; }\n\n.light-green.darken-2 {\n  background-color: #689f38 !important; }\n\n.light-green-text.text-darken-2 {\n  color: #689f38 !important; }\n\n.light-green.darken-3 {\n  background-color: #558b2f !important; }\n\n.light-green-text.text-darken-3 {\n  color: #558b2f !important; }\n\n.light-green.darken-4 {\n  background-color: #33691e !important; }\n\n.light-green-text.text-darken-4 {\n  color: #33691e !important; }\n\n.light-green.accent-1 {\n  background-color: #ccff90 !important; }\n\n.light-green-text.text-accent-1 {\n  color: #ccff90 !important; }\n\n.light-green.accent-2 {\n  background-color: #b2ff59 !important; }\n\n.light-green-text.text-accent-2 {\n  color: #b2ff59 !important; }\n\n.light-green.accent-3 {\n  background-color: #76ff03 !important; }\n\n.light-green-text.text-accent-3 {\n  color: #76ff03 !important; }\n\n.light-green.accent-4 {\n  background-color: #64dd17 !important; }\n\n.light-green-text.text-accent-4 {\n  color: #64dd17 !important; }\n\n.lime.lighten-5 {\n  background-color: #f9fbe7 !important; }\n\n.lime-text.text-lighten-5 {\n  color: #f9fbe7 !important; }\n\n.lime.lighten-4 {\n  background-color: #f0f4c3 !important; }\n\n.lime-text.text-lighten-4 {\n  color: #f0f4c3 !important; }\n\n.lime.lighten-3 {\n  background-color: #e6ee9c !important; }\n\n.lime-text.text-lighten-3 {\n  color: #e6ee9c !important; }\n\n.lime.lighten-2 {\n  background-color: #dce775 !important; }\n\n.lime-text.text-lighten-2 {\n  color: #dce775 !important; }\n\n.lime.lighten-1 {\n  background-color: #d4e157 !important; }\n\n.lime-text.text-lighten-1 {\n  color: #d4e157 !important; }\n\n.lime {\n  background-color: #cddc39 !important; }\n\n.lime-text {\n  color: #cddc39 !important; }\n\n.lime.darken-1 {\n  background-color: #c0ca33 !important; }\n\n.lime-text.text-darken-1 {\n  color: #c0ca33 !important; }\n\n.lime.darken-2 {\n  background-color: #afb42b !important; }\n\n.lime-text.text-darken-2 {\n  color: #afb42b !important; }\n\n.lime.darken-3 {\n  background-color: #9e9d24 !important; }\n\n.lime-text.text-darken-3 {\n  color: #9e9d24 !important; }\n\n.lime.darken-4 {\n  background-color: #827717 !important; }\n\n.lime-text.text-darken-4 {\n  color: #827717 !important; }\n\n.lime.accent-1 {\n  background-color: #f4ff81 !important; }\n\n.lime-text.text-accent-1 {\n  color: #f4ff81 !important; }\n\n.lime.accent-2 {\n  background-color: #eeff41 !important; }\n\n.lime-text.text-accent-2 {\n  color: #eeff41 !important; }\n\n.lime.accent-3 {\n  background-color: #c6ff00 !important; }\n\n.lime-text.text-accent-3 {\n  color: #c6ff00 !important; }\n\n.lime.accent-4 {\n  background-color: #aeea00 !important; }\n\n.lime-text.text-accent-4 {\n  color: #aeea00 !important; }\n\n.yellow.lighten-5 {\n  background-color: #fffde7 !important; }\n\n.yellow-text.text-lighten-5 {\n  color: #fffde7 !important; }\n\n.yellow.lighten-4 {\n  background-color: #fff9c4 !important; }\n\n.yellow-text.text-lighten-4 {\n  color: #fff9c4 !important; }\n\n.yellow.lighten-3 {\n  background-color: #fff59d !important; }\n\n.yellow-text.text-lighten-3 {\n  color: #fff59d !important; }\n\n.yellow.lighten-2 {\n  background-color: #fff176 !important; }\n\n.yellow-text.text-lighten-2 {\n  color: #fff176 !important; }\n\n.yellow.lighten-1 {\n  background-color: #ffee58 !important; }\n\n.yellow-text.text-lighten-1 {\n  color: #ffee58 !important; }\n\n.yellow {\n  background-color: #ffeb3b !important; }\n\n.yellow-text {\n  color: #ffeb3b !important; }\n\n.yellow.darken-1 {\n  background-color: #fdd835 !important; }\n\n.yellow-text.text-darken-1 {\n  color: #fdd835 !important; }\n\n.yellow.darken-2 {\n  background-color: #fbc02d !important; }\n\n.yellow-text.text-darken-2 {\n  color: #fbc02d !important; }\n\n.yellow.darken-3 {\n  background-color: #f9a825 !important; }\n\n.yellow-text.text-darken-3 {\n  color: #f9a825 !important; }\n\n.yellow.darken-4 {\n  background-color: #f57f17 !important; }\n\n.yellow-text.text-darken-4 {\n  color: #f57f17 !important; }\n\n.yellow.accent-1 {\n  background-color: #ffff8d !important; }\n\n.yellow-text.text-accent-1 {\n  color: #ffff8d !important; }\n\n.yellow.accent-2 {\n  background-color: #ffff00 !important; }\n\n.yellow-text.text-accent-2 {\n  color: #ffff00 !important; }\n\n.yellow.accent-3 {\n  background-color: #ffea00 !important; }\n\n.yellow-text.text-accent-3 {\n  color: #ffea00 !important; }\n\n.yellow.accent-4 {\n  background-color: #ffd600 !important; }\n\n.yellow-text.text-accent-4 {\n  color: #ffd600 !important; }\n\n.amber.lighten-5 {\n  background-color: #fff8e1 !important; }\n\n.amber-text.text-lighten-5 {\n  color: #fff8e1 !important; }\n\n.amber.lighten-4 {\n  background-color: #ffecb3 !important; }\n\n.amber-text.text-lighten-4 {\n  color: #ffecb3 !important; }\n\n.amber.lighten-3 {\n  background-color: #ffe082 !important; }\n\n.amber-text.text-lighten-3 {\n  color: #ffe082 !important; }\n\n.amber.lighten-2 {\n  background-color: #ffd54f !important; }\n\n.amber-text.text-lighten-2 {\n  color: #ffd54f !important; }\n\n.amber.lighten-1 {\n  background-color: #ffca28 !important; }\n\n.amber-text.text-lighten-1 {\n  color: #ffca28 !important; }\n\n.amber {\n  background-color: #ffc107 !important; }\n\n.amber-text {\n  color: #ffc107 !important; }\n\n.amber.darken-1 {\n  background-color: #ffb300 !important; }\n\n.amber-text.text-darken-1 {\n  color: #ffb300 !important; }\n\n.amber.darken-2 {\n  background-color: #ffa000 !important; }\n\n.amber-text.text-darken-2 {\n  color: #ffa000 !important; }\n\n.amber.darken-3 {\n  background-color: #ff8f00 !important; }\n\n.amber-text.text-darken-3 {\n  color: #ff8f00 !important; }\n\n.amber.darken-4 {\n  background-color: #ff6f00 !important; }\n\n.amber-text.text-darken-4 {\n  color: #ff6f00 !important; }\n\n.amber.accent-1 {\n  background-color: #ffe57f !important; }\n\n.amber-text.text-accent-1 {\n  color: #ffe57f !important; }\n\n.amber.accent-2 {\n  background-color: #ffd740 !important; }\n\n.amber-text.text-accent-2 {\n  color: #ffd740 !important; }\n\n.amber.accent-3 {\n  background-color: #ffc400 !important; }\n\n.amber-text.text-accent-3 {\n  color: #ffc400 !important; }\n\n.amber.accent-4 {\n  background-color: #ffab00 !important; }\n\n.amber-text.text-accent-4 {\n  color: #ffab00 !important; }\n\n.orange.lighten-5 {\n  background-color: #fff3e0 !important; }\n\n.orange-text.text-lighten-5 {\n  color: #fff3e0 !important; }\n\n.orange.lighten-4 {\n  background-color: #ffe0b2 !important; }\n\n.orange-text.text-lighten-4 {\n  color: #ffe0b2 !important; }\n\n.orange.lighten-3 {\n  background-color: #ffcc80 !important; }\n\n.orange-text.text-lighten-3 {\n  color: #ffcc80 !important; }\n\n.orange.lighten-2 {\n  background-color: #ffb74d !important; }\n\n.orange-text.text-lighten-2 {\n  color: #ffb74d !important; }\n\n.orange.lighten-1 {\n  background-color: #ffa726 !important; }\n\n.orange-text.text-lighten-1 {\n  color: #ffa726 !important; }\n\n.orange {\n  background-color: #ff9800 !important; }\n\n.orange-text {\n  color: #ff9800 !important; }\n\n.orange.darken-1 {\n  background-color: #fb8c00 !important; }\n\n.orange-text.text-darken-1 {\n  color: #fb8c00 !important; }\n\n.orange.darken-2 {\n  background-color: #f57c00 !important; }\n\n.orange-text.text-darken-2 {\n  color: #f57c00 !important; }\n\n.orange.darken-3 {\n  background-color: #ef6c00 !important; }\n\n.orange-text.text-darken-3 {\n  color: #ef6c00 !important; }\n\n.orange.darken-4 {\n  background-color: #e65100 !important; }\n\n.orange-text.text-darken-4 {\n  color: #e65100 !important; }\n\n.orange.accent-1 {\n  background-color: #ffd180 !important; }\n\n.orange-text.text-accent-1 {\n  color: #ffd180 !important; }\n\n.orange.accent-2 {\n  background-color: #ffab40 !important; }\n\n.orange-text.text-accent-2 {\n  color: #ffab40 !important; }\n\n.orange.accent-3 {\n  background-color: #ff9100 !important; }\n\n.orange-text.text-accent-3 {\n  color: #ff9100 !important; }\n\n.orange.accent-4 {\n  background-color: #ff6d00 !important; }\n\n.orange-text.text-accent-4 {\n  color: #ff6d00 !important; }\n\n.deep-orange.lighten-5 {\n  background-color: #fbe9e7 !important; }\n\n.deep-orange-text.text-lighten-5 {\n  color: #fbe9e7 !important; }\n\n.deep-orange.lighten-4 {\n  background-color: #ffccbc !important; }\n\n.deep-orange-text.text-lighten-4 {\n  color: #ffccbc !important; }\n\n.deep-orange.lighten-3 {\n  background-color: #ffab91 !important; }\n\n.deep-orange-text.text-lighten-3 {\n  color: #ffab91 !important; }\n\n.deep-orange.lighten-2 {\n  background-color: #ff8a65 !important; }\n\n.deep-orange-text.text-lighten-2 {\n  color: #ff8a65 !important; }\n\n.deep-orange.lighten-1 {\n  background-color: #ff7043 !important; }\n\n.deep-orange-text.text-lighten-1 {\n  color: #ff7043 !important; }\n\n.deep-orange {\n  background-color: #ff5722 !important; }\n\n.deep-orange-text {\n  color: #ff5722 !important; }\n\n.deep-orange.darken-1 {\n  background-color: #f4511e !important; }\n\n.deep-orange-text.text-darken-1 {\n  color: #f4511e !important; }\n\n.deep-orange.darken-2 {\n  background-color: #e64a19 !important; }\n\n.deep-orange-text.text-darken-2 {\n  color: #e64a19 !important; }\n\n.deep-orange.darken-3 {\n  background-color: #d84315 !important; }\n\n.deep-orange-text.text-darken-3 {\n  color: #d84315 !important; }\n\n.deep-orange.darken-4 {\n  background-color: #bf360c !important; }\n\n.deep-orange-text.text-darken-4 {\n  color: #bf360c !important; }\n\n.deep-orange.accent-1 {\n  background-color: #ff9e80 !important; }\n\n.deep-orange-text.text-accent-1 {\n  color: #ff9e80 !important; }\n\n.deep-orange.accent-2 {\n  background-color: #ff6e40 !important; }\n\n.deep-orange-text.text-accent-2 {\n  color: #ff6e40 !important; }\n\n.deep-orange.accent-3 {\n  background-color: #ff3d00 !important; }\n\n.deep-orange-text.text-accent-3 {\n  color: #ff3d00 !important; }\n\n.deep-orange.accent-4 {\n  background-color: #dd2c00 !important; }\n\n.deep-orange-text.text-accent-4 {\n  color: #dd2c00 !important; }\n\n.brown.lighten-5 {\n  background-color: #efebe9 !important; }\n\n.brown-text.text-lighten-5 {\n  color: #efebe9 !important; }\n\n.brown.lighten-4 {\n  background-color: #d7ccc8 !important; }\n\n.brown-text.text-lighten-4 {\n  color: #d7ccc8 !important; }\n\n.brown.lighten-3 {\n  background-color: #bcaaa4 !important; }\n\n.brown-text.text-lighten-3 {\n  color: #bcaaa4 !important; }\n\n.brown.lighten-2 {\n  background-color: #a1887f !important; }\n\n.brown-text.text-lighten-2 {\n  color: #a1887f !important; }\n\n.brown.lighten-1 {\n  background-color: #8d6e63 !important; }\n\n.brown-text.text-lighten-1 {\n  color: #8d6e63 !important; }\n\n.brown {\n  background-color: #795548 !important; }\n\n.brown-text {\n  color: #795548 !important; }\n\n.brown.darken-1 {\n  background-color: #6d4c41 !important; }\n\n.brown-text.text-darken-1 {\n  color: #6d4c41 !important; }\n\n.brown.darken-2 {\n  background-color: #5d4037 !important; }\n\n.brown-text.text-darken-2 {\n  color: #5d4037 !important; }\n\n.brown.darken-3 {\n  background-color: #4e342e !important; }\n\n.brown-text.text-darken-3 {\n  color: #4e342e !important; }\n\n.brown.darken-4 {\n  background-color: #3e2723 !important; }\n\n.brown-text.text-darken-4 {\n  color: #3e2723 !important; }\n\n.blue-grey.lighten-5 {\n  background-color: #eceff1 !important; }\n\n.blue-grey-text.text-lighten-5 {\n  color: #eceff1 !important; }\n\n.blue-grey.lighten-4 {\n  background-color: #cfd8dc !important; }\n\n.blue-grey-text.text-lighten-4 {\n  color: #cfd8dc !important; }\n\n.blue-grey.lighten-3 {\n  background-color: #b0bec5 !important; }\n\n.blue-grey-text.text-lighten-3 {\n  color: #b0bec5 !important; }\n\n.blue-grey.lighten-2 {\n  background-color: #90a4ae !important; }\n\n.blue-grey-text.text-lighten-2 {\n  color: #90a4ae !important; }\n\n.blue-grey.lighten-1 {\n  background-color: #78909c !important; }\n\n.blue-grey-text.text-lighten-1 {\n  color: #78909c !important; }\n\n.blue-grey {\n  background-color: #607d8b !important; }\n\n.blue-grey-text {\n  color: #607d8b !important; }\n\n.blue-grey.darken-1 {\n  background-color: #546e7a !important; }\n\n.blue-grey-text.text-darken-1 {\n  color: #546e7a !important; }\n\n.blue-grey.darken-2 {\n  background-color: #455a64 !important; }\n\n.blue-grey-text.text-darken-2 {\n  color: #455a64 !important; }\n\n.blue-grey.darken-3 {\n  background-color: #37474f !important; }\n\n.blue-grey-text.text-darken-3 {\n  color: #37474f !important; }\n\n.blue-grey.darken-4 {\n  background-color: #263238 !important; }\n\n.blue-grey-text.text-darken-4 {\n  color: #263238 !important; }\n\n.grey.lighten-5 {\n  background-color: #fafafa !important; }\n\n.grey-text.text-lighten-5 {\n  color: #fafafa !important; }\n\n.grey.lighten-4 {\n  background-color: #f5f5f5 !important; }\n\n.grey-text.text-lighten-4 {\n  color: #f5f5f5 !important; }\n\n.grey.lighten-3 {\n  background-color: #eeeeee !important; }\n\n.grey-text.text-lighten-3 {\n  color: #eeeeee !important; }\n\n.grey.lighten-2 {\n  background-color: #e0e0e0 !important; }\n\n.grey-text.text-lighten-2 {\n  color: #e0e0e0 !important; }\n\n.grey.lighten-1 {\n  background-color: #bdbdbd !important; }\n\n.grey-text.text-lighten-1 {\n  color: #bdbdbd !important; }\n\n.grey {\n  background-color: #9e9e9e !important; }\n\n.grey-text {\n  color: #9e9e9e !important; }\n\n.grey.darken-1 {\n  background-color: #757575 !important; }\n\n.grey-text.text-darken-1 {\n  color: #757575 !important; }\n\n.grey.darken-2 {\n  background-color: #616161 !important; }\n\n.grey-text.text-darken-2 {\n  color: #616161 !important; }\n\n.grey.darken-3 {\n  background-color: #424242 !important; }\n\n.grey-text.text-darken-3 {\n  color: #424242 !important; }\n\n.grey.darken-4 {\n  background-color: #212121 !important; }\n\n.grey-text.text-darken-4 {\n  color: #212121 !important; }\n\n.shades.black {\n  background-color: #000000 !important; }\n\n.shades-text.text-black {\n  color: #000000 !important; }\n\n.shades.white {\n  background-color: #FFFFFF !important; }\n\n.shades-text.text-white {\n  color: #FFFFFF !important; }\n\n.shades.transparent {\n  background-color: transparent !important; }\n\n.shades-text.text-transparent {\n  color: transparent !important; }\n\n.black {\n  background-color: #000000 !important; }\n\n.black-text {\n  color: #000000 !important; }\n\n.white {\n  background-color: #FFFFFF !important; }\n\n.white-text {\n  color: #FFFFFF !important; }\n\n.transparent {\n  background-color: transparent !important; }\n\n.transparent-text {\n  color: transparent !important; }\n\n/*** Colors ***/\n/*** Badges ***/\n/*** Buttons ***/\n/*** Cards ***/\n/*** Collapsible ***/\n/*** Dropdown ***/\n/*** Fonts ***/\n/*** Forms ***/\n/*** Global ***/\n/*** Navbar ***/\n/*** SideNav ***/\n/*** Photo Slider ***/\n/*** Spinners | Loaders ***/\n/*** Tabs ***/\n/*** Tables ***/\n/*** Toasts ***/\n/*** Typography ***/\n/*** Collections ***/\n/* Progress Bar */\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0; }\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0; }\n\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto; }\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible; }\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n/* 1 */\nhtml input[type=\"button\"],\nbutton,\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal; }\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\nhtml {\n  box-sizing: border-box; }\n\n*, *:before, *:after {\n  box-sizing: inherit; }\n\nul {\n  list-style-type: none; }\n\na {\n  color: #039be5;\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent; }\n\n.valign-wrapper {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center; }\n  .valign-wrapper .valign {\n    display: block; }\n\nul {\n  padding: 0; }\n  ul li {\n    list-style-type: none; }\n\n.clearfix {\n  clear: both; }\n\n.z-depth-0 {\n  box-shadow: none !important; }\n\n.z-depth-1, nav, .card-panel, .card, .toast, .btn, .btn-large, .btn-floating, .dropdown-content, .collapsible, .side-nav {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); }\n\n.z-depth-1-half, .btn:hover, .btn-large:hover, .btn-floating:hover {\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15); }\n\n.z-depth-2 {\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.z-depth-3 {\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19); }\n\n.z-depth-4, .modal {\n  box-shadow: 0 16px 28px 0 rgba(0, 0, 0, 0.22), 0 25px 55px 0 rgba(0, 0, 0, 0.21); }\n\n.z-depth-5 {\n  box-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2), 0 40px 77px 0 rgba(0, 0, 0, 0.22); }\n\n.hoverable:hover {\n  transition: box-shadow .25s;\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.divider {\n  height: 1px;\n  overflow: hidden;\n  background-color: #e0e0e0; }\n\nblockquote {\n  margin: 20px 0;\n  padding-left: 1.5rem;\n  border-left: 5px solid #ee6e73; }\n\ni {\n  line-height: inherit; }\n  i.left {\n    float: left;\n    margin-right: 15px; }\n  i.right {\n    float: right;\n    margin-left: 15px; }\n  i.tiny {\n    font-size: 1rem; }\n  i.small {\n    font-size: 2rem; }\n  i.medium {\n    font-size: 4rem; }\n  i.large {\n    font-size: 6rem; }\n\nimg.responsive-img,\nvideo.responsive-video {\n  max-width: 100%;\n  height: auto; }\n\n.pagination li {\n  display: inline-block;\n  font-size: 1.2rem;\n  padding: 0 10px;\n  line-height: 30px;\n  border-radius: 2px;\n  text-align: center; }\n  .pagination li a {\n    color: #444; }\n  .pagination li.active a {\n    color: #fff; }\n  .pagination li.active {\n    background-color: #ee6e73; }\n  .pagination li.disabled a {\n    cursor: default;\n    color: #999; }\n  .pagination li i {\n    font-size: 2rem; }\n.pagination li.pages ul li {\n  display: inline-block;\n  float: none; }\n\n@media only screen and (max-width: 992px) {\n  .pagination {\n    width: 100%; }\n    .pagination li.prev,\n    .pagination li.next {\n      width: 10%; }\n    .pagination li.pages {\n      width: 80%;\n      overflow: hidden;\n      white-space: nowrap; } }\n.parallax-container {\n  position: relative;\n  overflow: hidden;\n  height: 500px; }\n\n.parallax {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1; }\n  .parallax img {\n    display: none;\n    position: absolute;\n    left: 50%;\n    bottom: 0;\n    min-width: 100%;\n    min-height: 100%;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    transform: translateX(-50%); }\n\n.pin-top, .pin-bottom {\n  position: relative; }\n\n.pinned {\n  position: fixed !important; }\n\n/*********************\n  Transition Classes\n**********************/\nul.staggered-list li {\n  opacity: 0; }\n\n.fade-in {\n  opacity: 0;\n  transform-origin: 0 50%; }\n\n/*********************\n  Media Query Classes\n**********************/\n@media only screen and (max-width: 600px) {\n  .hide-on-small-only, .hide-on-small-and-down {\n    display: none !important; } }\n\n@media only screen and (max-width: 992px) {\n  .hide-on-med-and-down {\n    display: none !important; } }\n\n@media only screen and (min-width: 601px) {\n  .hide-on-med-and-up {\n    display: none !important; } }\n\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .hide-on-med-only {\n    display: none !important; } }\n\n@media only screen and (min-width: 993px) {\n  .hide-on-large-only {\n    display: none !important; } }\n\n@media only screen and (min-width: 993px) {\n  .show-on-large {\n    display: initial !important; } }\n\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .show-on-medium {\n    display: initial !important; } }\n\n@media only screen and (max-width: 600px) {\n  .show-on-small {\n    display: initial !important; } }\n\n@media only screen and (min-width: 601px) {\n  .show-on-medium-and-up {\n    display: initial !important; } }\n\n@media only screen and (max-width: 992px) {\n  .show-on-medium-and-down {\n    display: initial !important; } }\n\n@media only screen and (max-width: 600px) {\n  .center-on-small-only {\n    text-align: center; } }\n\nfooter.page-footer {\n  margin-top: 20px;\n  padding-top: 20px;\n  background-color: #ee6e73; }\n  footer.page-footer .footer-copyright {\n    overflow: hidden;\n    height: 50px;\n    line-height: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background-color: rgba(51, 51, 51, 0.08); }\n\ntable, th, td {\n  border: none; }\n\ntable {\n  width: 100%;\n  display: table; }\n  table.bordered > thead > tr, table.bordered > tbody > tr {\n    border-bottom: 1px solid #d0d0d0; }\n  table.striped > tbody > tr:nth-child(odd) {\n    background-color: #f2f2f2; }\n  table.striped > tbody > tr > td {\n    border-radius: 0px; }\n  table.highlight > tbody > tr {\n    -webkit-transition: background-color 0.25s ease;\n    -moz-transition: background-color 0.25s ease;\n    -o-transition: background-color 0.25s ease;\n    -ms-transition: background-color 0.25s ease;\n    transition: background-color 0.25s ease; }\n    table.highlight > tbody > tr:hover {\n      background-color: #f2f2f2; }\n  table.centered thead tr th, table.centered tbody tr td {\n    text-align: center; }\n\nthead {\n  border-bottom: 1px solid #d0d0d0; }\n\ntd, th {\n  padding: 15px 5px;\n  display: table-cell;\n  text-align: left;\n  vertical-align: middle;\n  border-radius: 2px; }\n\n@media only screen and (max-width: 992px) {\n  table.responsive-table {\n    width: 100%;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: block;\n    position: relative;\n    /* sort out borders */ }\n    table.responsive-table th,\n    table.responsive-table td {\n      margin: 0;\n      vertical-align: top; }\n    table.responsive-table th {\n      text-align: left; }\n    table.responsive-table thead {\n      display: block;\n      float: left; }\n      table.responsive-table thead tr {\n        display: block;\n        padding: 0 10px 0 0; }\n        table.responsive-table thead tr th::before {\n          content: \"\\A0\"; }\n    table.responsive-table tbody {\n      display: block;\n      width: auto;\n      position: relative;\n      overflow-x: auto;\n      white-space: nowrap; }\n      table.responsive-table tbody tr {\n        display: inline-block;\n        vertical-align: top; }\n    table.responsive-table th {\n      display: block;\n      text-align: right; }\n    table.responsive-table td {\n      display: block;\n      min-height: 1.25em;\n      text-align: left; }\n    table.responsive-table tr {\n      padding: 0 10px; }\n    table.responsive-table thead {\n      border: 0;\n      border-right: 1px solid #d0d0d0; }\n    table.responsive-table.bordered th {\n      border-bottom: 0;\n      border-left: 0; }\n    table.responsive-table.bordered td {\n      border-left: 0;\n      border-right: 0;\n      border-bottom: 0; }\n    table.responsive-table.bordered tr {\n      border: 0; }\n    table.responsive-table.bordered tbody tr {\n      border-right: 1px solid #d0d0d0; } }\n.collection {\n  margin: 0.5rem 0 1rem 0;\n  border: 1px solid #e0e0e0;\n  border-radius: 2px;\n  overflow: hidden;\n  position: relative; }\n  .collection .collection-item {\n    background-color: #fff;\n    line-height: 1.5rem;\n    padding: 10px 20px;\n    margin: 0;\n    border-bottom: 1px solid #e0e0e0; }\n    .collection .collection-item.avatar {\n      min-height: 84px;\n      padding-left: 72px;\n      position: relative; }\n      .collection .collection-item.avatar .circle {\n        position: absolute;\n        width: 42px;\n        height: 42px;\n        overflow: hidden;\n        left: 15px;\n        display: inline-block;\n        vertical-align: middle; }\n      .collection .collection-item.avatar i.circle {\n        font-size: 18px;\n        line-height: 42px;\n        color: #fff;\n        background-color: #999;\n        text-align: center; }\n      .collection .collection-item.avatar .title {\n        font-size: 16px; }\n      .collection .collection-item.avatar p {\n        margin: 0; }\n      .collection .collection-item.avatar .secondary-content {\n        position: absolute;\n        top: 16px;\n        right: 16px; }\n    .collection .collection-item:last-child {\n      border-bottom: none; }\n    .collection .collection-item.active {\n      background-color: #26a69a;\n      color: #eafaf9; }\n      .collection .collection-item.active .secondary-content {\n        color: #fff; }\n  .collection a.collection-item {\n    display: block;\n    -webkit-transition: 0.25s;\n    -moz-transition: 0.25s;\n    -o-transition: 0.25s;\n    -ms-transition: 0.25s;\n    transition: 0.25s;\n    color: #26a69a; }\n    .collection a.collection-item:not(.active):hover {\n      background-color: #ddd; }\n  .collection.with-header .collection-header {\n    background-color: #fff;\n    border-bottom: 1px solid #e0e0e0;\n    padding: 10px 20px; }\n  .collection.with-header .collection-item {\n    padding-left: 30px; }\n  .collection.with-header .collection-item.avatar {\n    padding-left: 72px; }\n\n.secondary-content {\n  float: right;\n  color: #26a69a; }\n\n.collapsible .collection {\n  margin: 0;\n  border: none; }\n\nspan.badge {\n  min-width: 3rem;\n  padding: 0 6px;\n  text-align: center;\n  font-size: 1rem;\n  line-height: inherit;\n  color: #757575;\n  position: absolute;\n  right: 15px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n  span.badge.new {\n    font-weight: 300;\n    font-size: 0.8rem;\n    color: #fff;\n    background-color: #26a69a;\n    border-radius: 2px; }\n  span.badge.new:after {\n    content: \" new\"; }\n\nnav ul a span.badge {\n  position: static;\n  margin-left: 4px;\n  line-height: 0; }\n\n.video-container {\n  position: relative;\n  padding-bottom: 56.25%;\n  padding-top: 30px;\n  height: 0;\n  overflow: hidden; }\n  .video-container.no-controls {\n    padding-top: 0; }\n  .video-container iframe, .video-container object, .video-container embed {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n\n.progress {\n  position: relative;\n  height: 4px;\n  display: block;\n  width: 100%;\n  background-color: #acece6;\n  border-radius: 2px;\n  margin: 0.5rem 0 1rem 0;\n  overflow: hidden; }\n  .progress .determinate {\n    position: absolute;\n    background-color: inherit;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    background-color: #26a69a;\n    -webkit-transition: width 0.3s linear;\n    -moz-transition: width 0.3s linear;\n    -o-transition: width 0.3s linear;\n    -ms-transition: width 0.3s linear;\n    transition: width 0.3s linear; }\n  .progress .indeterminate {\n    background-color: #26a69a; }\n    .progress .indeterminate:before {\n      content: '';\n      position: absolute;\n      background-color: inherit;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      will-change: left, right;\n      -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n      -moz-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n      -ms-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n      -o-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n      animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite; }\n    .progress .indeterminate:after {\n      content: '';\n      position: absolute;\n      background-color: inherit;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      will-change: left, right;\n      -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n      -moz-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n      -ms-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n      -o-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n      animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n      -webkit-animation-delay: 1.15s;\n      -moz-animation-delay: 1.15s;\n      -ms-animation-delay: 1.15s;\n      -o-animation-delay: 1.15s;\n      animation-delay: 1.15s; }\n\n@-webkit-keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%; }\n  60% {\n    left: 100%;\n    right: -90%; }\n  100% {\n    left: 100%;\n    right: -90%; } }\n@-moz-keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%; }\n  60% {\n    left: 100%;\n    right: -90%; }\n  100% {\n    left: 100%;\n    right: -90%; } }\n@keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%; }\n  60% {\n    left: 100%;\n    right: -90%; }\n  100% {\n    left: 100%;\n    right: -90%; } }\n@-webkit-keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%; }\n  60% {\n    left: 107%;\n    right: -8%; }\n  100% {\n    left: 107%;\n    right: -8%; } }\n@-moz-keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%; }\n  60% {\n    left: 107%;\n    right: -8%; }\n  100% {\n    left: 107%;\n    right: -8%; } }\n@keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%; }\n  60% {\n    left: 107%;\n    right: -8%; }\n  100% {\n    left: 107%;\n    right: -8%; } }\n/*******************\n  Utility Classes\n*******************/\n.hide {\n  display: none !important; }\n\n.left-align {\n  text-align: left; }\n\n.right-align {\n  text-align: right; }\n\n.center, .center-align {\n  text-align: center; }\n\n.left {\n  float: left !important; }\n\n.right {\n  float: right !important; }\n\n.no-select, input[type=range], input[type=range] + .thumb {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.circle {\n  border-radius: 50%; }\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.truncate {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.no-padding {\n  padding: 0 !important; }\n\n@font-face {\n  font-family: \"Material-Design-Icons\";\n  src: url(" + __webpack_require__(7) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(8) + ") format(\"woff2\"), url(" + __webpack_require__(9) + ") format(\"woff\"), url(" + __webpack_require__(10) + ") format(\"truetype\"), url(" + __webpack_require__(11) + "#Material-Design-Icons) format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n[class^=\"mdi-\"], [class*=\"mdi-\"] {\n  speak: none;\n  display: inline-block;\n  font-family: \"Material-Design-Icons\";\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  transform: translate(0, 0); }\n  [class^=\"mdi-\"]:before, [class*=\"mdi-\"]:before {\n    display: inline-block;\n    speak: none;\n    text-decoration: inherit; }\n  [class^=\"mdi-\"].pull-left, [class*=\"mdi-\"].pull-left {\n    margin-right: .3em; }\n  [class^=\"mdi-\"].pull-right, [class*=\"mdi-\"].pull-right {\n    margin-left: .3em; }\n  [class^=\"mdi-\"].mdi-lg:before, [class^=\"mdi-\"].mdi-lg:after, [class*=\"mdi-\"].mdi-lg:before, [class*=\"mdi-\"].mdi-lg:after {\n    font-size: 1.33333333em;\n    line-height: 0.75em;\n    vertical-align: -15%; }\n  [class^=\"mdi-\"].mdi-2x:before, [class^=\"mdi-\"].mdi-2x:after, [class*=\"mdi-\"].mdi-2x:before, [class*=\"mdi-\"].mdi-2x:after {\n    font-size: 2em; }\n  [class^=\"mdi-\"].mdi-3x:before, [class^=\"mdi-\"].mdi-3x:after, [class*=\"mdi-\"].mdi-3x:before, [class*=\"mdi-\"].mdi-3x:after {\n    font-size: 3em; }\n  [class^=\"mdi-\"].mdi-4x:before, [class^=\"mdi-\"].mdi-4x:after, [class*=\"mdi-\"].mdi-4x:before, [class*=\"mdi-\"].mdi-4x:after {\n    font-size: 4em; }\n  [class^=\"mdi-\"].mdi-5x:before, [class^=\"mdi-\"].mdi-5x:after, [class*=\"mdi-\"].mdi-5x:before, [class*=\"mdi-\"].mdi-5x:after {\n    font-size: 5em; }\n\n[class^=\"mdi-device-signal-cellular-\"]:after,\n[class^=\"mdi-device-battery-\"]:after,\n[class^=\"mdi-device-battery-charging-\"]:after,\n[class^=\"mdi-device-signal-cellular-connected-no-internet-\"]:after,\n[class^=\"mdi-device-signal-wifi-\"]:after,\n[class^=\"mdi-device-signal-wifi-statusbar-not-connected\"]:after,\n.mdi-device-network-wifi:after {\n  opacity: .3;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  display: inline-block;\n  speak: none;\n  text-decoration: inherit; }\n\n[class^=\"mdi-device-signal-cellular-\"]:after {\n  content: \"\\E758\"; }\n\n[class^=\"mdi-device-battery-\"]:after {\n  content: \"\\E735\"; }\n\n[class^=\"mdi-device-battery-charging-\"]:after {\n  content: \"\\E733\"; }\n\n[class^=\"mdi-device-signal-cellular-connected-no-internet-\"]:after {\n  content: \"\\E75D\"; }\n\n[class^=\"mdi-device-signal-wifi-\"]:after, .mdi-device-network-wifi:after {\n  content: \"\\E765\"; }\n\n[class^=\"mdi-device-signal-wifi-statusbasr-not-connected\"]:after {\n  content: \"\\E8F7\"; }\n\n.mdi-device-signal-cellular-off:after, .mdi-device-signal-cellular-null:after, .mdi-device-signal-cellular-no-sim:after, .mdi-device-signal-wifi-off:after, .mdi-device-signal-wifi-4-bar:after, .mdi-device-signal-cellular-4-bar:after, .mdi-device-battery-alert:after, .mdi-device-signal-cellular-connected-no-internet-4-bar:after, .mdi-device-battery-std:after, .mdi-device-battery-full .mdi-device-battery-unknown:after {\n  content: \"\"; }\n\n.mdi-fw {\n  width: 1.28571429em;\n  text-align: center; }\n\n.mdi-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none; }\n\n.mdi-ul > li {\n  position: relative; }\n\n.mdi-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center; }\n\n.mdi-li.mdi-lg {\n  left: -1.85714286em; }\n\n.mdi-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em; }\n\n.mdi-spin {\n  -webkit-animation: mdi-spin 2s infinite linear;\n  animation: mdi-spin 2s infinite linear;\n  -webkit-transform-origin: 50% 50%;\n  -moz-transform-origin: 50% 50%;\n  -o-transform-origin: 50% 50%;\n  transform-origin: 50% 50%; }\n\n.mdi-pulse {\n  -webkit-animation: mdi-spin 1s steps(8) infinite;\n  animation: mdi-spin 1s steps(8) infinite;\n  -webkit-transform-origin: 50% 50%;\n  -moz-transform-origin: 50% 50%;\n  -o-transform-origin: 50% 50%;\n  transform-origin: 50% 50%; }\n\n@-webkit-keyframes mdi-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n@keyframes mdi-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n.mdi-rotate-90 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.mdi-rotate-180 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.mdi-rotate-270 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.mdi-flip-horizontal {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1); }\n\n.mdi-flip-vertical {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1); }\n\n:root .mdi-rotate-90,\n:root .mdi-rotate-180,\n:root .mdi-rotate-270,\n:root .mdi-flip-horizontal,\n:root .mdi-flip-vertical {\n  filter: none; }\n\n.mdi-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle; }\n\n.mdi-stack-1x,\n.mdi-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center; }\n\n.mdi-stack-1x {\n  line-height: inherit; }\n\n.mdi-stack-2x {\n  font-size: 2em; }\n\n.mdi-inverse {\n  color: #ffffff; }\n\n/* Start Icons */\n.mdi-action-3d-rotation:before {\n  content: \"\\E600\"; }\n\n.mdi-action-accessibility:before {\n  content: \"\\E601\"; }\n\n.mdi-action-account-balance-wallet:before {\n  content: \"\\E602\"; }\n\n.mdi-action-account-balance:before {\n  content: \"\\E603\"; }\n\n.mdi-action-account-box:before {\n  content: \"\\E604\"; }\n\n.mdi-action-account-child:before {\n  content: \"\\E605\"; }\n\n.mdi-action-account-circle:before {\n  content: \"\\E606\"; }\n\n.mdi-action-add-shopping-cart:before {\n  content: \"\\E607\"; }\n\n.mdi-action-alarm-add:before {\n  content: \"\\E608\"; }\n\n.mdi-action-alarm-off:before {\n  content: \"\\E609\"; }\n\n.mdi-action-alarm-on:before {\n  content: \"\\E60A\"; }\n\n.mdi-action-alarm:before {\n  content: \"\\E60B\"; }\n\n.mdi-action-android:before {\n  content: \"\\E60C\"; }\n\n.mdi-action-announcement:before {\n  content: \"\\E60D\"; }\n\n.mdi-action-aspect-ratio:before {\n  content: \"\\E60E\"; }\n\n.mdi-action-assessment:before {\n  content: \"\\E60F\"; }\n\n.mdi-action-assignment-ind:before {\n  content: \"\\E610\"; }\n\n.mdi-action-assignment-late:before {\n  content: \"\\E611\"; }\n\n.mdi-action-assignment-return:before {\n  content: \"\\E612\"; }\n\n.mdi-action-assignment-returned:before {\n  content: \"\\E613\"; }\n\n.mdi-action-assignment-turned-in:before {\n  content: \"\\E614\"; }\n\n.mdi-action-assignment:before {\n  content: \"\\E615\"; }\n\n.mdi-action-autorenew:before {\n  content: \"\\E616\"; }\n\n.mdi-action-backup:before {\n  content: \"\\E617\"; }\n\n.mdi-action-book:before {\n  content: \"\\E618\"; }\n\n.mdi-action-bookmark-outline:before {\n  content: \"\\E619\"; }\n\n.mdi-action-bookmark:before {\n  content: \"\\E61A\"; }\n\n.mdi-action-bug-report:before {\n  content: \"\\E61B\"; }\n\n.mdi-action-cached:before {\n  content: \"\\E61C\"; }\n\n.mdi-action-check-circle:before {\n  content: \"\\E61D\"; }\n\n.mdi-action-class:before {\n  content: \"\\E61E\"; }\n\n.mdi-action-credit-card:before {\n  content: \"\\E61F\"; }\n\n.mdi-action-dashboard:before {\n  content: \"\\E620\"; }\n\n.mdi-action-delete:before {\n  content: \"\\E621\"; }\n\n.mdi-action-description:before {\n  content: \"\\E622\"; }\n\n.mdi-action-dns:before {\n  content: \"\\E623\"; }\n\n.mdi-action-done-all:before {\n  content: \"\\E624\"; }\n\n.mdi-action-done:before {\n  content: \"\\E625\"; }\n\n.mdi-action-event:before {\n  content: \"\\E626\"; }\n\n.mdi-action-exit-to-app:before {\n  content: \"\\E627\"; }\n\n.mdi-action-explore:before {\n  content: \"\\E628\"; }\n\n.mdi-action-extension:before {\n  content: \"\\E629\"; }\n\n.mdi-action-face-unlock:before {\n  content: \"\\E62A\"; }\n\n.mdi-action-favorite-outline:before {\n  content: \"\\E62B\"; }\n\n.mdi-action-favorite:before {\n  content: \"\\E62C\"; }\n\n.mdi-action-find-in-page:before {\n  content: \"\\E62D\"; }\n\n.mdi-action-find-replace:before {\n  content: \"\\E62E\"; }\n\n.mdi-action-flip-to-back:before {\n  content: \"\\E62F\"; }\n\n.mdi-action-flip-to-front:before {\n  content: \"\\E630\"; }\n\n.mdi-action-get-app:before {\n  content: \"\\E631\"; }\n\n.mdi-action-grade:before {\n  content: \"\\E632\"; }\n\n.mdi-action-group-work:before {\n  content: \"\\E633\"; }\n\n.mdi-action-help:before {\n  content: \"\\E634\"; }\n\n.mdi-action-highlight-remove:before {\n  content: \"\\E635\"; }\n\n.mdi-action-history:before {\n  content: \"\\E636\"; }\n\n.mdi-action-home:before {\n  content: \"\\E637\"; }\n\n.mdi-action-https:before {\n  content: \"\\E638\"; }\n\n.mdi-action-info-outline:before {\n  content: \"\\E639\"; }\n\n.mdi-action-info:before {\n  content: \"\\E63A\"; }\n\n.mdi-action-input:before {\n  content: \"\\E63B\"; }\n\n.mdi-action-invert-colors:before {\n  content: \"\\E63C\"; }\n\n.mdi-action-label-outline:before {\n  content: \"\\E63D\"; }\n\n.mdi-action-label:before {\n  content: \"\\E63E\"; }\n\n.mdi-action-language:before {\n  content: \"\\E63F\"; }\n\n.mdi-action-launch:before {\n  content: \"\\E640\"; }\n\n.mdi-action-list:before {\n  content: \"\\E641\"; }\n\n.mdi-action-lock-open:before {\n  content: \"\\E642\"; }\n\n.mdi-action-lock-outline:before {\n  content: \"\\E643\"; }\n\n.mdi-action-lock:before {\n  content: \"\\E644\"; }\n\n.mdi-action-loyalty:before {\n  content: \"\\E645\"; }\n\n.mdi-action-markunread-mailbox:before {\n  content: \"\\E646\"; }\n\n.mdi-action-note-add:before {\n  content: \"\\E647\"; }\n\n.mdi-action-open-in-browser:before {\n  content: \"\\E648\"; }\n\n.mdi-action-open-in-new:before {\n  content: \"\\E649\"; }\n\n.mdi-action-open-with:before {\n  content: \"\\E64A\"; }\n\n.mdi-action-pageview:before {\n  content: \"\\E64B\"; }\n\n.mdi-action-payment:before {\n  content: \"\\E64C\"; }\n\n.mdi-action-perm-camera-mic:before {\n  content: \"\\E64D\"; }\n\n.mdi-action-perm-contact-cal:before {\n  content: \"\\E64E\"; }\n\n.mdi-action-perm-data-setting:before {\n  content: \"\\E64F\"; }\n\n.mdi-action-perm-device-info:before {\n  content: \"\\E650\"; }\n\n.mdi-action-perm-identity:before {\n  content: \"\\E651\"; }\n\n.mdi-action-perm-media:before {\n  content: \"\\E652\"; }\n\n.mdi-action-perm-phone-msg:before {\n  content: \"\\E653\"; }\n\n.mdi-action-perm-scan-wifi:before {\n  content: \"\\E654\"; }\n\n.mdi-action-picture-in-picture:before {\n  content: \"\\E655\"; }\n\n.mdi-action-polymer:before {\n  content: \"\\E656\"; }\n\n.mdi-action-print:before {\n  content: \"\\E657\"; }\n\n.mdi-action-query-builder:before {\n  content: \"\\E658\"; }\n\n.mdi-action-question-answer:before {\n  content: \"\\E659\"; }\n\n.mdi-action-receipt:before {\n  content: \"\\E65A\"; }\n\n.mdi-action-redeem:before {\n  content: \"\\E65B\"; }\n\n.mdi-action-reorder:before {\n  content: \"\\E65C\"; }\n\n.mdi-action-report-problem:before {\n  content: \"\\E65D\"; }\n\n.mdi-action-restore:before {\n  content: \"\\E65E\"; }\n\n.mdi-action-room:before {\n  content: \"\\E65F\"; }\n\n.mdi-action-schedule:before {\n  content: \"\\E660\"; }\n\n.mdi-action-search:before {\n  content: \"\\E661\"; }\n\n.mdi-action-settings-applications:before {\n  content: \"\\E662\"; }\n\n.mdi-action-settings-backup-restore:before {\n  content: \"\\E663\"; }\n\n.mdi-action-settings-bluetooth:before {\n  content: \"\\E664\"; }\n\n.mdi-action-settings-cell:before {\n  content: \"\\E665\"; }\n\n.mdi-action-settings-display:before {\n  content: \"\\E666\"; }\n\n.mdi-action-settings-ethernet:before {\n  content: \"\\E667\"; }\n\n.mdi-action-settings-input-antenna:before {\n  content: \"\\E668\"; }\n\n.mdi-action-settings-input-component:before {\n  content: \"\\E669\"; }\n\n.mdi-action-settings-input-composite:before {\n  content: \"\\E66A\"; }\n\n.mdi-action-settings-input-hdmi:before {\n  content: \"\\E66B\"; }\n\n.mdi-action-settings-input-svideo:before {\n  content: \"\\E66C\"; }\n\n.mdi-action-settings-overscan:before {\n  content: \"\\E66D\"; }\n\n.mdi-action-settings-phone:before {\n  content: \"\\E66E\"; }\n\n.mdi-action-settings-power:before {\n  content: \"\\E66F\"; }\n\n.mdi-action-settings-remote:before {\n  content: \"\\E670\"; }\n\n.mdi-action-settings-voice:before {\n  content: \"\\E671\"; }\n\n.mdi-action-settings:before {\n  content: \"\\E672\"; }\n\n.mdi-action-shop-two:before {\n  content: \"\\E673\"; }\n\n.mdi-action-shop:before {\n  content: \"\\E674\"; }\n\n.mdi-action-shopping-basket:before {\n  content: \"\\E675\"; }\n\n.mdi-action-shopping-cart:before {\n  content: \"\\E676\"; }\n\n.mdi-action-speaker-notes:before {\n  content: \"\\E677\"; }\n\n.mdi-action-spellcheck:before {\n  content: \"\\E678\"; }\n\n.mdi-action-star-rate:before {\n  content: \"\\E679\"; }\n\n.mdi-action-stars:before {\n  content: \"\\E67A\"; }\n\n.mdi-action-store:before {\n  content: \"\\E67B\"; }\n\n.mdi-action-subject:before {\n  content: \"\\E67C\"; }\n\n.mdi-action-supervisor-account:before {\n  content: \"\\E67D\"; }\n\n.mdi-action-swap-horiz:before {\n  content: \"\\E67E\"; }\n\n.mdi-action-swap-vert-circle:before {\n  content: \"\\E67F\"; }\n\n.mdi-action-swap-vert:before {\n  content: \"\\E680\"; }\n\n.mdi-action-system-update-tv:before {\n  content: \"\\E681\"; }\n\n.mdi-action-tab-unselected:before {\n  content: \"\\E682\"; }\n\n.mdi-action-tab:before {\n  content: \"\\E683\"; }\n\n.mdi-action-theaters:before {\n  content: \"\\E684\"; }\n\n.mdi-action-thumb-down:before {\n  content: \"\\E685\"; }\n\n.mdi-action-thumb-up:before {\n  content: \"\\E686\"; }\n\n.mdi-action-thumbs-up-down:before {\n  content: \"\\E687\"; }\n\n.mdi-action-toc:before {\n  content: \"\\E688\"; }\n\n.mdi-action-today:before {\n  content: \"\\E689\"; }\n\n.mdi-action-track-changes:before {\n  content: \"\\E68A\"; }\n\n.mdi-action-translate:before {\n  content: \"\\E68B\"; }\n\n.mdi-action-trending-down:before {\n  content: \"\\E68C\"; }\n\n.mdi-action-trending-neutral:before {\n  content: \"\\E68D\"; }\n\n.mdi-action-trending-up:before {\n  content: \"\\E68E\"; }\n\n.mdi-action-turned-in-not:before {\n  content: \"\\E68F\"; }\n\n.mdi-action-turned-in:before {\n  content: \"\\E690\"; }\n\n.mdi-action-verified-user:before {\n  content: \"\\E691\"; }\n\n.mdi-action-view-agenda:before {\n  content: \"\\E692\"; }\n\n.mdi-action-view-array:before {\n  content: \"\\E693\"; }\n\n.mdi-action-view-carousel:before {\n  content: \"\\E694\"; }\n\n.mdi-action-view-column:before {\n  content: \"\\E695\"; }\n\n.mdi-action-view-day:before {\n  content: \"\\E696\"; }\n\n.mdi-action-view-headline:before {\n  content: \"\\E697\"; }\n\n.mdi-action-view-list:before {\n  content: \"\\E698\"; }\n\n.mdi-action-view-module:before {\n  content: \"\\E699\"; }\n\n.mdi-action-view-quilt:before {\n  content: \"\\E69A\"; }\n\n.mdi-action-view-stream:before {\n  content: \"\\E69B\"; }\n\n.mdi-action-view-week:before {\n  content: \"\\E69C\"; }\n\n.mdi-action-visibility-off:before {\n  content: \"\\E69D\"; }\n\n.mdi-action-visibility:before {\n  content: \"\\E69E\"; }\n\n.mdi-action-wallet-giftcard:before {\n  content: \"\\E69F\"; }\n\n.mdi-action-wallet-membership:before {\n  content: \"\\E6A0\"; }\n\n.mdi-action-wallet-travel:before {\n  content: \"\\E6A1\"; }\n\n.mdi-action-work:before {\n  content: \"\\E6A2\"; }\n\n.mdi-alert-error:before {\n  content: \"\\E6A3\"; }\n\n.mdi-alert-warning:before {\n  content: \"\\E6A4\"; }\n\n.mdi-av-album:before {\n  content: \"\\E6A5\"; }\n\n.mdi-av-closed-caption:before {\n  content: \"\\E6A6\"; }\n\n.mdi-av-equalizer:before {\n  content: \"\\E6A7\"; }\n\n.mdi-av-explicit:before {\n  content: \"\\E6A8\"; }\n\n.mdi-av-fast-forward:before {\n  content: \"\\E6A9\"; }\n\n.mdi-av-fast-rewind:before {\n  content: \"\\E6AA\"; }\n\n.mdi-av-games:before {\n  content: \"\\E6AB\"; }\n\n.mdi-av-hearing:before {\n  content: \"\\E6AC\"; }\n\n.mdi-av-high-quality:before {\n  content: \"\\E6AD\"; }\n\n.mdi-av-loop:before {\n  content: \"\\E6AE\"; }\n\n.mdi-av-mic-none:before {\n  content: \"\\E6AF\"; }\n\n.mdi-av-mic-off:before {\n  content: \"\\E6B0\"; }\n\n.mdi-av-mic:before {\n  content: \"\\E6B1\"; }\n\n.mdi-av-movie:before {\n  content: \"\\E6B2\"; }\n\n.mdi-av-my-library-add:before {\n  content: \"\\E6B3\"; }\n\n.mdi-av-my-library-books:before {\n  content: \"\\E6B4\"; }\n\n.mdi-av-my-library-music:before {\n  content: \"\\E6B5\"; }\n\n.mdi-av-new-releases:before {\n  content: \"\\E6B6\"; }\n\n.mdi-av-not-interested:before {\n  content: \"\\E6B7\"; }\n\n.mdi-av-pause-circle-fill:before {\n  content: \"\\E6B8\"; }\n\n.mdi-av-pause-circle-outline:before {\n  content: \"\\E6B9\"; }\n\n.mdi-av-pause:before {\n  content: \"\\E6BA\"; }\n\n.mdi-av-play-arrow:before {\n  content: \"\\E6BB\"; }\n\n.mdi-av-play-circle-fill:before {\n  content: \"\\E6BC\"; }\n\n.mdi-av-play-circle-outline:before {\n  content: \"\\E6BD\"; }\n\n.mdi-av-play-shopping-bag:before {\n  content: \"\\E6BE\"; }\n\n.mdi-av-playlist-add:before {\n  content: \"\\E6BF\"; }\n\n.mdi-av-queue-music:before {\n  content: \"\\E6C0\"; }\n\n.mdi-av-queue:before {\n  content: \"\\E6C1\"; }\n\n.mdi-av-radio:before {\n  content: \"\\E6C2\"; }\n\n.mdi-av-recent-actors:before {\n  content: \"\\E6C3\"; }\n\n.mdi-av-repeat-one:before {\n  content: \"\\E6C4\"; }\n\n.mdi-av-repeat:before {\n  content: \"\\E6C5\"; }\n\n.mdi-av-replay:before {\n  content: \"\\E6C6\"; }\n\n.mdi-av-shuffle:before {\n  content: \"\\E6C7\"; }\n\n.mdi-av-skip-next:before {\n  content: \"\\E6C8\"; }\n\n.mdi-av-skip-previous:before {\n  content: \"\\E6C9\"; }\n\n.mdi-av-snooze:before {\n  content: \"\\E6CA\"; }\n\n.mdi-av-stop:before {\n  content: \"\\E6CB\"; }\n\n.mdi-av-subtitles:before {\n  content: \"\\E6CC\"; }\n\n.mdi-av-surround-sound:before {\n  content: \"\\E6CD\"; }\n\n.mdi-av-timer:before {\n  content: \"\\E6CE\"; }\n\n.mdi-av-video-collection:before {\n  content: \"\\E6CF\"; }\n\n.mdi-av-videocam-off:before {\n  content: \"\\E6D0\"; }\n\n.mdi-av-videocam:before {\n  content: \"\\E6D1\"; }\n\n.mdi-av-volume-down:before {\n  content: \"\\E6D2\"; }\n\n.mdi-av-volume-mute:before {\n  content: \"\\E6D3\"; }\n\n.mdi-av-volume-off:before {\n  content: \"\\E6D4\"; }\n\n.mdi-av-volume-up:before {\n  content: \"\\E6D5\"; }\n\n.mdi-av-web:before {\n  content: \"\\E6D6\"; }\n\n.mdi-communication-business:before {\n  content: \"\\E6D7\"; }\n\n.mdi-communication-call-end:before {\n  content: \"\\E6D8\"; }\n\n.mdi-communication-call-made:before {\n  content: \"\\E6D9\"; }\n\n.mdi-communication-call-merge:before {\n  content: \"\\E6DA\"; }\n\n.mdi-communication-call-missed:before {\n  content: \"\\E6DB\"; }\n\n.mdi-communication-call-received:before {\n  content: \"\\E6DC\"; }\n\n.mdi-communication-call-split:before {\n  content: \"\\E6DD\"; }\n\n.mdi-communication-call:before {\n  content: \"\\E6DE\"; }\n\n.mdi-communication-chat:before {\n  content: \"\\E6DF\"; }\n\n.mdi-communication-clear-all:before {\n  content: \"\\E6E0\"; }\n\n.mdi-communication-comment:before {\n  content: \"\\E6E1\"; }\n\n.mdi-communication-contacts:before {\n  content: \"\\E6E2\"; }\n\n.mdi-communication-dialer-sip:before {\n  content: \"\\E6E3\"; }\n\n.mdi-communication-dialpad:before {\n  content: \"\\E6E4\"; }\n\n.mdi-communication-dnd-on:before {\n  content: \"\\E6E5\"; }\n\n.mdi-communication-email:before {\n  content: \"\\E6E6\"; }\n\n.mdi-communication-forum:before {\n  content: \"\\E6E7\"; }\n\n.mdi-communication-import-export:before {\n  content: \"\\E6E8\"; }\n\n.mdi-communication-invert-colors-off:before {\n  content: \"\\E6E9\"; }\n\n.mdi-communication-invert-colors-on:before {\n  content: \"\\E6EA\"; }\n\n.mdi-communication-live-help:before {\n  content: \"\\E6EB\"; }\n\n.mdi-communication-location-off:before {\n  content: \"\\E6EC\"; }\n\n.mdi-communication-location-on:before {\n  content: \"\\E6ED\"; }\n\n.mdi-communication-message:before {\n  content: \"\\E6EE\"; }\n\n.mdi-communication-messenger:before {\n  content: \"\\E6EF\"; }\n\n.mdi-communication-no-sim:before {\n  content: \"\\E6F0\"; }\n\n.mdi-communication-phone:before {\n  content: \"\\E6F1\"; }\n\n.mdi-communication-portable-wifi-off:before {\n  content: \"\\E6F2\"; }\n\n.mdi-communication-quick-contacts-dialer:before {\n  content: \"\\E6F3\"; }\n\n.mdi-communication-quick-contacts-mail:before {\n  content: \"\\E6F4\"; }\n\n.mdi-communication-ring-volume:before {\n  content: \"\\E6F5\"; }\n\n.mdi-communication-stay-current-landscape:before {\n  content: \"\\E6F6\"; }\n\n.mdi-communication-stay-current-portrait:before {\n  content: \"\\E6F7\"; }\n\n.mdi-communication-stay-primary-landscape:before {\n  content: \"\\E6F8\"; }\n\n.mdi-communication-stay-primary-portrait:before {\n  content: \"\\E6F9\"; }\n\n.mdi-communication-swap-calls:before {\n  content: \"\\E6FA\"; }\n\n.mdi-communication-textsms:before {\n  content: \"\\E6FB\"; }\n\n.mdi-communication-voicemail:before {\n  content: \"\\E6FC\"; }\n\n.mdi-communication-vpn-key:before {\n  content: \"\\E6FD\"; }\n\n.mdi-content-add-box:before {\n  content: \"\\E6FE\"; }\n\n.mdi-content-add-circle-outline:before {\n  content: \"\\E6FF\"; }\n\n.mdi-content-add-circle:before {\n  content: \"\\E700\"; }\n\n.mdi-content-add:before {\n  content: \"\\E701\"; }\n\n.mdi-content-archive:before {\n  content: \"\\E702\"; }\n\n.mdi-content-backspace:before {\n  content: \"\\E703\"; }\n\n.mdi-content-block:before {\n  content: \"\\E704\"; }\n\n.mdi-content-clear:before {\n  content: \"\\E705\"; }\n\n.mdi-content-content-copy:before {\n  content: \"\\E706\"; }\n\n.mdi-content-content-cut:before {\n  content: \"\\E707\"; }\n\n.mdi-content-content-paste:before {\n  content: \"\\E708\"; }\n\n.mdi-content-create:before {\n  content: \"\\E709\"; }\n\n.mdi-content-drafts:before {\n  content: \"\\E70A\"; }\n\n.mdi-content-filter-list:before {\n  content: \"\\E70B\"; }\n\n.mdi-content-flag:before {\n  content: \"\\E70C\"; }\n\n.mdi-content-forward:before {\n  content: \"\\E70D\"; }\n\n.mdi-content-gesture:before {\n  content: \"\\E70E\"; }\n\n.mdi-content-inbox:before {\n  content: \"\\E70F\"; }\n\n.mdi-content-link:before {\n  content: \"\\E710\"; }\n\n.mdi-content-mail:before {\n  content: \"\\E711\"; }\n\n.mdi-content-markunread:before {\n  content: \"\\E712\"; }\n\n.mdi-content-redo:before {\n  content: \"\\E713\"; }\n\n.mdi-content-remove-circle-outline:before {\n  content: \"\\E714\"; }\n\n.mdi-content-remove-circle:before {\n  content: \"\\E715\"; }\n\n.mdi-content-remove:before {\n  content: \"\\E716\"; }\n\n.mdi-content-reply-all:before {\n  content: \"\\E717\"; }\n\n.mdi-content-reply:before {\n  content: \"\\E718\"; }\n\n.mdi-content-report:before {\n  content: \"\\E719\"; }\n\n.mdi-content-save:before {\n  content: \"\\E71A\"; }\n\n.mdi-content-select-all:before {\n  content: \"\\E71B\"; }\n\n.mdi-content-send:before {\n  content: \"\\E71C\"; }\n\n.mdi-content-sort:before {\n  content: \"\\E71D\"; }\n\n.mdi-content-text-format:before {\n  content: \"\\E71E\"; }\n\n.mdi-content-undo:before {\n  content: \"\\E71F\"; }\n\n.mdi-editor-attach-file:before {\n  content: \"\\E776\"; }\n\n.mdi-editor-attach-money:before {\n  content: \"\\E777\"; }\n\n.mdi-editor-border-all:before {\n  content: \"\\E778\"; }\n\n.mdi-editor-border-bottom:before {\n  content: \"\\E779\"; }\n\n.mdi-editor-border-clear:before {\n  content: \"\\E77A\"; }\n\n.mdi-editor-border-color:before {\n  content: \"\\E77B\"; }\n\n.mdi-editor-border-horizontal:before {\n  content: \"\\E77C\"; }\n\n.mdi-editor-border-inner:before {\n  content: \"\\E77D\"; }\n\n.mdi-editor-border-left:before {\n  content: \"\\E77E\"; }\n\n.mdi-editor-border-outer:before {\n  content: \"\\E77F\"; }\n\n.mdi-editor-border-right:before {\n  content: \"\\E780\"; }\n\n.mdi-editor-border-style:before {\n  content: \"\\E781\"; }\n\n.mdi-editor-border-top:before {\n  content: \"\\E782\"; }\n\n.mdi-editor-border-vertical:before {\n  content: \"\\E783\"; }\n\n.mdi-editor-format-align-center:before {\n  content: \"\\E784\"; }\n\n.mdi-editor-format-align-justify:before {\n  content: \"\\E785\"; }\n\n.mdi-editor-format-align-left:before {\n  content: \"\\E786\"; }\n\n.mdi-editor-format-align-right:before {\n  content: \"\\E787\"; }\n\n.mdi-editor-format-bold:before {\n  content: \"\\E788\"; }\n\n.mdi-editor-format-clear:before {\n  content: \"\\E789\"; }\n\n.mdi-editor-format-color-fill:before {\n  content: \"\\E78A\"; }\n\n.mdi-editor-format-color-reset:before {\n  content: \"\\E78B\"; }\n\n.mdi-editor-format-color-text:before {\n  content: \"\\E78C\"; }\n\n.mdi-editor-format-indent-decrease:before {\n  content: \"\\E78D\"; }\n\n.mdi-editor-format-indent-increase:before {\n  content: \"\\E78E\"; }\n\n.mdi-editor-format-italic:before {\n  content: \"\\E78F\"; }\n\n.mdi-editor-format-line-spacing:before {\n  content: \"\\E790\"; }\n\n.mdi-editor-format-list-bulleted:before {\n  content: \"\\E791\"; }\n\n.mdi-editor-format-list-numbered:before {\n  content: \"\\E792\"; }\n\n.mdi-editor-format-paint:before {\n  content: \"\\E793\"; }\n\n.mdi-editor-format-quote:before {\n  content: \"\\E794\"; }\n\n.mdi-editor-format-size:before {\n  content: \"\\E795\"; }\n\n.mdi-editor-format-strikethrough:before {\n  content: \"\\E796\"; }\n\n.mdi-editor-format-textdirection-l-to-r:before {\n  content: \"\\E797\"; }\n\n.mdi-editor-format-textdirection-r-to-l:before {\n  content: \"\\E798\"; }\n\n.mdi-editor-format-underline:before {\n  content: \"\\E799\"; }\n\n.mdi-editor-functions:before {\n  content: \"\\E79A\"; }\n\n.mdi-editor-insert-chart:before {\n  content: \"\\E79B\"; }\n\n.mdi-editor-insert-comment:before {\n  content: \"\\E79C\"; }\n\n.mdi-editor-insert-drive-file:before {\n  content: \"\\E79D\"; }\n\n.mdi-editor-insert-emoticon:before {\n  content: \"\\E79E\"; }\n\n.mdi-editor-insert-invitation:before {\n  content: \"\\E79F\"; }\n\n.mdi-editor-insert-link:before {\n  content: \"\\E7A0\"; }\n\n.mdi-editor-insert-photo:before {\n  content: \"\\E7A1\"; }\n\n.mdi-editor-merge-type:before {\n  content: \"\\E7A2\"; }\n\n.mdi-editor-mode-comment:before {\n  content: \"\\E7A3\"; }\n\n.mdi-editor-mode-edit:before {\n  content: \"\\E7A4\"; }\n\n.mdi-editor-publish:before {\n  content: \"\\E7A5\"; }\n\n.mdi-editor-vertical-align-bottom:before {\n  content: \"\\E7A6\"; }\n\n.mdi-editor-vertical-align-center:before {\n  content: \"\\E7A7\"; }\n\n.mdi-editor-vertical-align-top:before {\n  content: \"\\E7A8\"; }\n\n.mdi-editor-wrap-text:before {\n  content: \"\\E7A9\"; }\n\n.mdi-file-attachment:before {\n  content: \"\\E7AA\"; }\n\n.mdi-file-cloud-circle:before {\n  content: \"\\E7AB\"; }\n\n.mdi-file-cloud-done:before {\n  content: \"\\E7AC\"; }\n\n.mdi-file-cloud-download:before {\n  content: \"\\E7AD\"; }\n\n.mdi-file-cloud-off:before {\n  content: \"\\E7AE\"; }\n\n.mdi-file-cloud-queue:before {\n  content: \"\\E7AF\"; }\n\n.mdi-file-cloud-upload:before {\n  content: \"\\E7B0\"; }\n\n.mdi-file-cloud:before {\n  content: \"\\E7B1\"; }\n\n.mdi-file-file-download:before {\n  content: \"\\E7B2\"; }\n\n.mdi-file-file-upload:before {\n  content: \"\\E7B3\"; }\n\n.mdi-file-folder-open:before {\n  content: \"\\E7B4\"; }\n\n.mdi-file-folder-shared:before {\n  content: \"\\E7B5\"; }\n\n.mdi-file-folder:before {\n  content: \"\\E7B6\"; }\n\n.mdi-device-access-alarm:before {\n  content: \"\\E720\"; }\n\n.mdi-device-access-alarms:before {\n  content: \"\\E721\"; }\n\n.mdi-device-access-time:before {\n  content: \"\\E722\"; }\n\n.mdi-device-add-alarm:before {\n  content: \"\\E723\"; }\n\n.mdi-device-airplanemode-off:before {\n  content: \"\\E724\"; }\n\n.mdi-device-airplanemode-on:before {\n  content: \"\\E725\"; }\n\n.mdi-device-battery-20:before {\n  content: \"\\E726\"; }\n\n.mdi-device-battery-30:before {\n  content: \"\\E727\"; }\n\n.mdi-device-battery-50:before {\n  content: \"\\E728\"; }\n\n.mdi-device-battery-60:before {\n  content: \"\\E729\"; }\n\n.mdi-device-battery-80:before {\n  content: \"\\E72A\"; }\n\n.mdi-device-battery-90:before {\n  content: \"\\E72B\"; }\n\n.mdi-device-battery-alert:before {\n  content: \"\\E72C\"; }\n\n.mdi-device-battery-charging-20:before {\n  content: \"\\E72D\"; }\n\n.mdi-device-battery-charging-30:before {\n  content: \"\\E72E\"; }\n\n.mdi-device-battery-charging-50:before {\n  content: \"\\E72F\"; }\n\n.mdi-device-battery-charging-60:before {\n  content: \"\\E730\"; }\n\n.mdi-device-battery-charging-80:before {\n  content: \"\\E731\"; }\n\n.mdi-device-battery-charging-90:before {\n  content: \"\\E732\"; }\n\n.mdi-device-battery-charging-full:before {\n  content: \"\\E733\"; }\n\n.mdi-device-battery-full:before {\n  content: \"\\E734\"; }\n\n.mdi-device-battery-std:before {\n  content: \"\\E735\"; }\n\n.mdi-device-battery-unknown:before {\n  content: \"\\E736\"; }\n\n.mdi-device-bluetooth-connected:before {\n  content: \"\\E737\"; }\n\n.mdi-device-bluetooth-disabled:before {\n  content: \"\\E738\"; }\n\n.mdi-device-bluetooth-searching:before {\n  content: \"\\E739\"; }\n\n.mdi-device-bluetooth:before {\n  content: \"\\E73A\"; }\n\n.mdi-device-brightness-auto:before {\n  content: \"\\E73B\"; }\n\n.mdi-device-brightness-high:before {\n  content: \"\\E73C\"; }\n\n.mdi-device-brightness-low:before {\n  content: \"\\E73D\"; }\n\n.mdi-device-brightness-medium:before {\n  content: \"\\E73E\"; }\n\n.mdi-device-data-usage:before {\n  content: \"\\E73F\"; }\n\n.mdi-device-developer-mode:before {\n  content: \"\\E740\"; }\n\n.mdi-device-devices:before {\n  content: \"\\E741\"; }\n\n.mdi-device-dvr:before {\n  content: \"\\E742\"; }\n\n.mdi-device-gps-fixed:before {\n  content: \"\\E743\"; }\n\n.mdi-device-gps-not-fixed:before {\n  content: \"\\E744\"; }\n\n.mdi-device-gps-off:before {\n  content: \"\\E745\"; }\n\n.mdi-device-location-disabled:before {\n  content: \"\\E746\"; }\n\n.mdi-device-location-searching:before {\n  content: \"\\E747\"; }\n\n.mdi-device-multitrack-audio:before {\n  content: \"\\E748\"; }\n\n.mdi-device-network-cell:before {\n  content: \"\\E749\"; }\n\n.mdi-device-network-wifi:before {\n  content: \"\\E74A\"; }\n\n.mdi-device-nfc:before {\n  content: \"\\E74B\"; }\n\n.mdi-device-now-wallpaper:before {\n  content: \"\\E74C\"; }\n\n.mdi-device-now-widgets:before {\n  content: \"\\E74D\"; }\n\n.mdi-device-screen-lock-landscape:before {\n  content: \"\\E74E\"; }\n\n.mdi-device-screen-lock-portrait:before {\n  content: \"\\E74F\"; }\n\n.mdi-device-screen-lock-rotation:before {\n  content: \"\\E750\"; }\n\n.mdi-device-screen-rotation:before {\n  content: \"\\E751\"; }\n\n.mdi-device-sd-storage:before {\n  content: \"\\E752\"; }\n\n.mdi-device-settings-system-daydream:before {\n  content: \"\\E753\"; }\n\n.mdi-device-signal-cellular-0-bar:before {\n  content: \"\\E754\"; }\n\n.mdi-device-signal-cellular-1-bar:before {\n  content: \"\\E755\"; }\n\n.mdi-device-signal-cellular-2-bar:before {\n  content: \"\\E756\"; }\n\n.mdi-device-signal-cellular-3-bar:before {\n  content: \"\\E757\"; }\n\n.mdi-device-signal-cellular-4-bar:before {\n  content: \"\\E758\"; }\n\n.mdi-signal-wifi-statusbar-connected-no-internet-after:before {\n  content: \"\\E8F6\"; }\n\n.mdi-device-signal-cellular-connected-no-internet-0-bar:before {\n  content: \"\\E759\"; }\n\n.mdi-device-signal-cellular-connected-no-internet-1-bar:before {\n  content: \"\\E75A\"; }\n\n.mdi-device-signal-cellular-connected-no-internet-2-bar:before {\n  content: \"\\E75B\"; }\n\n.mdi-device-signal-cellular-connected-no-internet-3-bar:before {\n  content: \"\\E75C\"; }\n\n.mdi-device-signal-cellular-connected-no-internet-4-bar:before {\n  content: \"\\E75D\"; }\n\n.mdi-device-signal-cellular-no-sim:before {\n  content: \"\\E75E\"; }\n\n.mdi-device-signal-cellular-null:before {\n  content: \"\\E75F\"; }\n\n.mdi-device-signal-cellular-off:before {\n  content: \"\\E760\"; }\n\n.mdi-device-signal-wifi-0-bar:before {\n  content: \"\\E761\"; }\n\n.mdi-device-signal-wifi-1-bar:before {\n  content: \"\\E762\"; }\n\n.mdi-device-signal-wifi-2-bar:before {\n  content: \"\\E763\"; }\n\n.mdi-device-signal-wifi-3-bar:before {\n  content: \"\\E764\"; }\n\n.mdi-device-signal-wifi-4-bar:before {\n  content: \"\\E765\"; }\n\n.mdi-device-signal-wifi-off:before {\n  content: \"\\E766\"; }\n\n.mdi-device-signal-wifi-statusbar-1-bar:before {\n  content: \"\\E767\"; }\n\n.mdi-device-signal-wifi-statusbar-2-bar:before {\n  content: \"\\E768\"; }\n\n.mdi-device-signal-wifi-statusbar-3-bar:before {\n  content: \"\\E769\"; }\n\n.mdi-device-signal-wifi-statusbar-4-bar:before {\n  content: \"\\E76A\"; }\n\n.mdi-device-signal-wifi-statusbar-connected-no-internet-:before {\n  content: \"\\E76B\"; }\n\n.mdi-device-signal-wifi-statusbar-connected-no-internet:before {\n  content: \"\\E76F\"; }\n\n.mdi-device-signal-wifi-statusbar-connected-no-internet-2:before {\n  content: \"\\E76C\"; }\n\n.mdi-device-signal-wifi-statusbar-connected-no-internet-3:before {\n  content: \"\\E76D\"; }\n\n.mdi-device-signal-wifi-statusbar-connected-no-internet-4:before {\n  content: \"\\E76E\"; }\n\n.mdi-signal-wifi-statusbar-not-connected-after:before {\n  content: \"\\E8F7\"; }\n\n.mdi-device-signal-wifi-statusbar-not-connected:before {\n  content: \"\\E770\"; }\n\n.mdi-device-signal-wifi-statusbar-null:before {\n  content: \"\\E771\"; }\n\n.mdi-device-storage:before {\n  content: \"\\E772\"; }\n\n.mdi-device-usb:before {\n  content: \"\\E773\"; }\n\n.mdi-device-wifi-lock:before {\n  content: \"\\E774\"; }\n\n.mdi-device-wifi-tethering:before {\n  content: \"\\E775\"; }\n\n.mdi-hardware-cast-connected:before {\n  content: \"\\E7B7\"; }\n\n.mdi-hardware-cast:before {\n  content: \"\\E7B8\"; }\n\n.mdi-hardware-computer:before {\n  content: \"\\E7B9\"; }\n\n.mdi-hardware-desktop-mac:before {\n  content: \"\\E7BA\"; }\n\n.mdi-hardware-desktop-windows:before {\n  content: \"\\E7BB\"; }\n\n.mdi-hardware-dock:before {\n  content: \"\\E7BC\"; }\n\n.mdi-hardware-gamepad:before {\n  content: \"\\E7BD\"; }\n\n.mdi-hardware-headset-mic:before {\n  content: \"\\E7BE\"; }\n\n.mdi-hardware-headset:before {\n  content: \"\\E7BF\"; }\n\n.mdi-hardware-keyboard-alt:before {\n  content: \"\\E7C0\"; }\n\n.mdi-hardware-keyboard-arrow-down:before {\n  content: \"\\E7C1\"; }\n\n.mdi-hardware-keyboard-arrow-left:before {\n  content: \"\\E7C2\"; }\n\n.mdi-hardware-keyboard-arrow-right:before {\n  content: \"\\E7C3\"; }\n\n.mdi-hardware-keyboard-arrow-up:before {\n  content: \"\\E7C4\"; }\n\n.mdi-hardware-keyboard-backspace:before {\n  content: \"\\E7C5\"; }\n\n.mdi-hardware-keyboard-capslock:before {\n  content: \"\\E7C6\"; }\n\n.mdi-hardware-keyboard-control:before {\n  content: \"\\E7C7\"; }\n\n.mdi-hardware-keyboard-hide:before {\n  content: \"\\E7C8\"; }\n\n.mdi-hardware-keyboard-return:before {\n  content: \"\\E7C9\"; }\n\n.mdi-hardware-keyboard-tab:before {\n  content: \"\\E7CA\"; }\n\n.mdi-hardware-keyboard-voice:before {\n  content: \"\\E7CB\"; }\n\n.mdi-hardware-keyboard:before {\n  content: \"\\E7CC\"; }\n\n.mdi-hardware-laptop-chromebook:before {\n  content: \"\\E7CD\"; }\n\n.mdi-hardware-laptop-mac:before {\n  content: \"\\E7CE\"; }\n\n.mdi-hardware-laptop-windows:before {\n  content: \"\\E7CF\"; }\n\n.mdi-hardware-laptop:before {\n  content: \"\\E7D0\"; }\n\n.mdi-hardware-memory:before {\n  content: \"\\E7D1\"; }\n\n.mdi-hardware-mouse:before {\n  content: \"\\E7D2\"; }\n\n.mdi-hardware-phone-android:before {\n  content: \"\\E7D3\"; }\n\n.mdi-hardware-phone-iphone:before {\n  content: \"\\E7D4\"; }\n\n.mdi-hardware-phonelink-off:before {\n  content: \"\\E7D5\"; }\n\n.mdi-hardware-phonelink:before {\n  content: \"\\E7D6\"; }\n\n.mdi-hardware-security:before {\n  content: \"\\E7D7\"; }\n\n.mdi-hardware-sim-card:before {\n  content: \"\\E7D8\"; }\n\n.mdi-hardware-smartphone:before {\n  content: \"\\E7D9\"; }\n\n.mdi-hardware-speaker:before {\n  content: \"\\E7DA\"; }\n\n.mdi-hardware-tablet-android:before {\n  content: \"\\E7DB\"; }\n\n.mdi-hardware-tablet-mac:before {\n  content: \"\\E7DC\"; }\n\n.mdi-hardware-tablet:before {\n  content: \"\\E7DD\"; }\n\n.mdi-hardware-tv:before {\n  content: \"\\E7DE\"; }\n\n.mdi-hardware-watch:before {\n  content: \"\\E7DF\"; }\n\n.mdi-image-add-to-photos:before {\n  content: \"\\E7E0\"; }\n\n.mdi-image-adjust:before {\n  content: \"\\E7E1\"; }\n\n.mdi-image-assistant-photo:before {\n  content: \"\\E7E2\"; }\n\n.mdi-image-audiotrack:before {\n  content: \"\\E7E3\"; }\n\n.mdi-image-blur-circular:before {\n  content: \"\\E7E4\"; }\n\n.mdi-image-blur-linear:before {\n  content: \"\\E7E5\"; }\n\n.mdi-image-blur-off:before {\n  content: \"\\E7E6\"; }\n\n.mdi-image-blur-on:before {\n  content: \"\\E7E7\"; }\n\n.mdi-image-brightness-1:before {\n  content: \"\\E7E8\"; }\n\n.mdi-image-brightness-2:before {\n  content: \"\\E7E9\"; }\n\n.mdi-image-brightness-3:before {\n  content: \"\\E7EA\"; }\n\n.mdi-image-brightness-4:before {\n  content: \"\\E7EB\"; }\n\n.mdi-image-brightness-5:before {\n  content: \"\\E7EC\"; }\n\n.mdi-image-brightness-6:before {\n  content: \"\\E7ED\"; }\n\n.mdi-image-brightness-7:before {\n  content: \"\\E7EE\"; }\n\n.mdi-image-brush:before {\n  content: \"\\E7EF\"; }\n\n.mdi-image-camera-alt:before {\n  content: \"\\E7F0\"; }\n\n.mdi-image-camera-front:before {\n  content: \"\\E7F1\"; }\n\n.mdi-image-camera-rear:before {\n  content: \"\\E7F2\"; }\n\n.mdi-image-camera-roll:before {\n  content: \"\\E7F3\"; }\n\n.mdi-image-camera:before {\n  content: \"\\E7F4\"; }\n\n.mdi-image-center-focus-strong:before {\n  content: \"\\E7F5\"; }\n\n.mdi-image-center-focus-weak:before {\n  content: \"\\E7F6\"; }\n\n.mdi-image-collections:before {\n  content: \"\\E7F7\"; }\n\n.mdi-image-color-lens:before {\n  content: \"\\E7F8\"; }\n\n.mdi-image-colorize:before {\n  content: \"\\E7F9\"; }\n\n.mdi-image-compare:before {\n  content: \"\\E7FA\"; }\n\n.mdi-image-control-point-duplicate:before {\n  content: \"\\E7FB\"; }\n\n.mdi-image-control-point:before {\n  content: \"\\E7FC\"; }\n\n.mdi-image-crop-3-2:before {\n  content: \"\\E7FD\"; }\n\n.mdi-image-crop-5-4:before {\n  content: \"\\E7FE\"; }\n\n.mdi-image-crop-7-5:before {\n  content: \"\\E7FF\"; }\n\n.mdi-image-crop-16-9:before {\n  content: \"\\E800\"; }\n\n.mdi-image-crop-din:before {\n  content: \"\\E801\"; }\n\n.mdi-image-crop-free:before {\n  content: \"\\E802\"; }\n\n.mdi-image-crop-landscape:before {\n  content: \"\\E803\"; }\n\n.mdi-image-crop-original:before {\n  content: \"\\E804\"; }\n\n.mdi-image-crop-portrait:before {\n  content: \"\\E805\"; }\n\n.mdi-image-crop-square:before {\n  content: \"\\E806\"; }\n\n.mdi-image-crop:before {\n  content: \"\\E807\"; }\n\n.mdi-image-dehaze:before {\n  content: \"\\E808\"; }\n\n.mdi-image-details:before {\n  content: \"\\E809\"; }\n\n.mdi-image-edit:before {\n  content: \"\\E80A\"; }\n\n.mdi-image-exposure-minus-1:before {\n  content: \"\\E80B\"; }\n\n.mdi-image-exposure-minus-2:before {\n  content: \"\\E80C\"; }\n\n.mdi-image-exposure-plus-1:before {\n  content: \"\\E80D\"; }\n\n.mdi-image-exposure-plus-2:before {\n  content: \"\\E80E\"; }\n\n.mdi-image-exposure-zero:before {\n  content: \"\\E80F\"; }\n\n.mdi-image-exposure:before {\n  content: \"\\E810\"; }\n\n.mdi-image-filter-1:before {\n  content: \"\\E811\"; }\n\n.mdi-image-filter-2:before {\n  content: \"\\E812\"; }\n\n.mdi-image-filter-3:before {\n  content: \"\\E813\"; }\n\n.mdi-image-filter-4:before {\n  content: \"\\E814\"; }\n\n.mdi-image-filter-5:before {\n  content: \"\\E815\"; }\n\n.mdi-image-filter-6:before {\n  content: \"\\E816\"; }\n\n.mdi-image-filter-7:before {\n  content: \"\\E817\"; }\n\n.mdi-image-filter-8:before {\n  content: \"\\E818\"; }\n\n.mdi-image-filter-9-plus:before {\n  content: \"\\E819\"; }\n\n.mdi-image-filter-9:before {\n  content: \"\\E81A\"; }\n\n.mdi-image-filter-b-and-w:before {\n  content: \"\\E81B\"; }\n\n.mdi-image-filter-center-focus:before {\n  content: \"\\E81C\"; }\n\n.mdi-image-filter-drama:before {\n  content: \"\\E81D\"; }\n\n.mdi-image-filter-frames:before {\n  content: \"\\E81E\"; }\n\n.mdi-image-filter-hdr:before {\n  content: \"\\E81F\"; }\n\n.mdi-image-filter-none:before {\n  content: \"\\E820\"; }\n\n.mdi-image-filter-tilt-shift:before {\n  content: \"\\E821\"; }\n\n.mdi-image-filter-vintage:before {\n  content: \"\\E822\"; }\n\n.mdi-image-filter:before {\n  content: \"\\E823\"; }\n\n.mdi-image-flare:before {\n  content: \"\\E824\"; }\n\n.mdi-image-flash-auto:before {\n  content: \"\\E825\"; }\n\n.mdi-image-flash-off:before {\n  content: \"\\E826\"; }\n\n.mdi-image-flash-on:before {\n  content: \"\\E827\"; }\n\n.mdi-image-flip:before {\n  content: \"\\E828\"; }\n\n.mdi-image-gradient:before {\n  content: \"\\E829\"; }\n\n.mdi-image-grain:before {\n  content: \"\\E82A\"; }\n\n.mdi-image-grid-off:before {\n  content: \"\\E82B\"; }\n\n.mdi-image-grid-on:before {\n  content: \"\\E82C\"; }\n\n.mdi-image-hdr-off:before {\n  content: \"\\E82D\"; }\n\n.mdi-image-hdr-on:before {\n  content: \"\\E82E\"; }\n\n.mdi-image-hdr-strong:before {\n  content: \"\\E82F\"; }\n\n.mdi-image-hdr-weak:before {\n  content: \"\\E830\"; }\n\n.mdi-image-healing:before {\n  content: \"\\E831\"; }\n\n.mdi-image-image-aspect-ratio:before {\n  content: \"\\E832\"; }\n\n.mdi-image-image:before {\n  content: \"\\E833\"; }\n\n.mdi-image-iso:before {\n  content: \"\\E834\"; }\n\n.mdi-image-landscape:before {\n  content: \"\\E835\"; }\n\n.mdi-image-leak-add:before {\n  content: \"\\E836\"; }\n\n.mdi-image-leak-remove:before {\n  content: \"\\E837\"; }\n\n.mdi-image-lens:before {\n  content: \"\\E838\"; }\n\n.mdi-image-looks-3:before {\n  content: \"\\E839\"; }\n\n.mdi-image-looks-4:before {\n  content: \"\\E83A\"; }\n\n.mdi-image-looks-5:before {\n  content: \"\\E83B\"; }\n\n.mdi-image-looks-6:before {\n  content: \"\\E83C\"; }\n\n.mdi-image-looks-one:before {\n  content: \"\\E83D\"; }\n\n.mdi-image-looks-two:before {\n  content: \"\\E83E\"; }\n\n.mdi-image-looks:before {\n  content: \"\\E83F\"; }\n\n.mdi-image-loupe:before {\n  content: \"\\E840\"; }\n\n.mdi-image-movie-creation:before {\n  content: \"\\E841\"; }\n\n.mdi-image-nature-people:before {\n  content: \"\\E842\"; }\n\n.mdi-image-nature:before {\n  content: \"\\E843\"; }\n\n.mdi-image-navigate-before:before {\n  content: \"\\E844\"; }\n\n.mdi-image-navigate-next:before {\n  content: \"\\E845\"; }\n\n.mdi-image-palette:before {\n  content: \"\\E846\"; }\n\n.mdi-image-panorama-fisheye:before {\n  content: \"\\E847\"; }\n\n.mdi-image-panorama-horizontal:before {\n  content: \"\\E848\"; }\n\n.mdi-image-panorama-vertical:before {\n  content: \"\\E849\"; }\n\n.mdi-image-panorama-wide-angle:before {\n  content: \"\\E84A\"; }\n\n.mdi-image-panorama:before {\n  content: \"\\E84B\"; }\n\n.mdi-image-photo-album:before {\n  content: \"\\E84C\"; }\n\n.mdi-image-photo-camera:before {\n  content: \"\\E84D\"; }\n\n.mdi-image-photo-library:before {\n  content: \"\\E84E\"; }\n\n.mdi-image-photo:before {\n  content: \"\\E84F\"; }\n\n.mdi-image-portrait:before {\n  content: \"\\E850\"; }\n\n.mdi-image-remove-red-eye:before {\n  content: \"\\E851\"; }\n\n.mdi-image-rotate-left:before {\n  content: \"\\E852\"; }\n\n.mdi-image-rotate-right:before {\n  content: \"\\E853\"; }\n\n.mdi-image-slideshow:before {\n  content: \"\\E854\"; }\n\n.mdi-image-straighten:before {\n  content: \"\\E855\"; }\n\n.mdi-image-style:before {\n  content: \"\\E856\"; }\n\n.mdi-image-switch-camera:before {\n  content: \"\\E857\"; }\n\n.mdi-image-switch-video:before {\n  content: \"\\E858\"; }\n\n.mdi-image-tag-faces:before {\n  content: \"\\E859\"; }\n\n.mdi-image-texture:before {\n  content: \"\\E85A\"; }\n\n.mdi-image-timelapse:before {\n  content: \"\\E85B\"; }\n\n.mdi-image-timer-3:before {\n  content: \"\\E85C\"; }\n\n.mdi-image-timer-10:before {\n  content: \"\\E85D\"; }\n\n.mdi-image-timer-auto:before {\n  content: \"\\E85E\"; }\n\n.mdi-image-timer-off:before {\n  content: \"\\E85F\"; }\n\n.mdi-image-timer:before {\n  content: \"\\E860\"; }\n\n.mdi-image-tonality:before {\n  content: \"\\E861\"; }\n\n.mdi-image-transform:before {\n  content: \"\\E862\"; }\n\n.mdi-image-tune:before {\n  content: \"\\E863\"; }\n\n.mdi-image-wb-auto:before {\n  content: \"\\E864\"; }\n\n.mdi-image-wb-cloudy:before {\n  content: \"\\E865\"; }\n\n.mdi-image-wb-incandescent:before {\n  content: \"\\E866\"; }\n\n.mdi-image-wb-irradescent:before {\n  content: \"\\E867\"; }\n\n.mdi-image-wb-sunny:before {\n  content: \"\\E868\"; }\n\n.mdi-maps-beenhere:before {\n  content: \"\\E869\"; }\n\n.mdi-maps-directions-bike:before {\n  content: \"\\E86A\"; }\n\n.mdi-maps-directions-bus:before {\n  content: \"\\E86B\"; }\n\n.mdi-maps-directions-car:before {\n  content: \"\\E86C\"; }\n\n.mdi-maps-directions-ferry:before {\n  content: \"\\E86D\"; }\n\n.mdi-maps-directions-subway:before {\n  content: \"\\E86E\"; }\n\n.mdi-maps-directions-train:before {\n  content: \"\\E86F\"; }\n\n.mdi-maps-directions-transit:before {\n  content: \"\\E870\"; }\n\n.mdi-maps-directions-walk:before {\n  content: \"\\E871\"; }\n\n.mdi-maps-directions:before {\n  content: \"\\E872\"; }\n\n.mdi-maps-flight:before {\n  content: \"\\E873\"; }\n\n.mdi-maps-hotel:before {\n  content: \"\\E874\"; }\n\n.mdi-maps-layers-clear:before {\n  content: \"\\E875\"; }\n\n.mdi-maps-layers:before {\n  content: \"\\E876\"; }\n\n.mdi-maps-local-airport:before {\n  content: \"\\E877\"; }\n\n.mdi-maps-local-atm:before {\n  content: \"\\E878\"; }\n\n.mdi-maps-local-attraction:before {\n  content: \"\\E879\"; }\n\n.mdi-maps-local-bar:before {\n  content: \"\\E87A\"; }\n\n.mdi-maps-local-cafe:before {\n  content: \"\\E87B\"; }\n\n.mdi-maps-local-car-wash:before {\n  content: \"\\E87C\"; }\n\n.mdi-maps-local-convenience-store:before {\n  content: \"\\E87D\"; }\n\n.mdi-maps-local-drink:before {\n  content: \"\\E87E\"; }\n\n.mdi-maps-local-florist:before {\n  content: \"\\E87F\"; }\n\n.mdi-maps-local-gas-station:before {\n  content: \"\\E880\"; }\n\n.mdi-maps-local-grocery-store:before {\n  content: \"\\E881\"; }\n\n.mdi-maps-local-hospital:before {\n  content: \"\\E882\"; }\n\n.mdi-maps-local-hotel:before {\n  content: \"\\E883\"; }\n\n.mdi-maps-local-laundry-service:before {\n  content: \"\\E884\"; }\n\n.mdi-maps-local-library:before {\n  content: \"\\E885\"; }\n\n.mdi-maps-local-mall:before {\n  content: \"\\E886\"; }\n\n.mdi-maps-local-movies:before {\n  content: \"\\E887\"; }\n\n.mdi-maps-local-offer:before {\n  content: \"\\E888\"; }\n\n.mdi-maps-local-parking:before {\n  content: \"\\E889\"; }\n\n.mdi-maps-local-pharmacy:before {\n  content: \"\\E88A\"; }\n\n.mdi-maps-local-phone:before {\n  content: \"\\E88B\"; }\n\n.mdi-maps-local-pizza:before {\n  content: \"\\E88C\"; }\n\n.mdi-maps-local-play:before {\n  content: \"\\E88D\"; }\n\n.mdi-maps-local-post-office:before {\n  content: \"\\E88E\"; }\n\n.mdi-maps-local-print-shop:before {\n  content: \"\\E88F\"; }\n\n.mdi-maps-local-restaurant:before {\n  content: \"\\E890\"; }\n\n.mdi-maps-local-see:before {\n  content: \"\\E891\"; }\n\n.mdi-maps-local-shipping:before {\n  content: \"\\E892\"; }\n\n.mdi-maps-local-taxi:before {\n  content: \"\\E893\"; }\n\n.mdi-maps-location-history:before {\n  content: \"\\E894\"; }\n\n.mdi-maps-map:before {\n  content: \"\\E895\"; }\n\n.mdi-maps-my-location:before {\n  content: \"\\E896\"; }\n\n.mdi-maps-navigation:before {\n  content: \"\\E897\"; }\n\n.mdi-maps-pin-drop:before {\n  content: \"\\E898\"; }\n\n.mdi-maps-place:before {\n  content: \"\\E899\"; }\n\n.mdi-maps-rate-review:before {\n  content: \"\\E89A\"; }\n\n.mdi-maps-restaurant-menu:before {\n  content: \"\\E89B\"; }\n\n.mdi-maps-satellite:before {\n  content: \"\\E89C\"; }\n\n.mdi-maps-store-mall-directory:before {\n  content: \"\\E89D\"; }\n\n.mdi-maps-terrain:before {\n  content: \"\\E89E\"; }\n\n.mdi-maps-traffic:before {\n  content: \"\\E89F\"; }\n\n.mdi-navigation-apps:before {\n  content: \"\\E8A0\"; }\n\n.mdi-navigation-arrow-back:before {\n  content: \"\\E8A1\"; }\n\n.mdi-navigation-arrow-drop-down-circle:before {\n  content: \"\\E8A2\"; }\n\n.mdi-navigation-arrow-drop-down:before {\n  content: \"\\E8A3\"; }\n\n.mdi-navigation-arrow-drop-up:before {\n  content: \"\\E8A4\"; }\n\n.mdi-navigation-arrow-forward:before {\n  content: \"\\E8A5\"; }\n\n.mdi-navigation-cancel:before {\n  content: \"\\E8A6\"; }\n\n.mdi-navigation-check:before {\n  content: \"\\E8A7\"; }\n\n.mdi-navigation-chevron-left:before {\n  content: \"\\E8A8\"; }\n\n.mdi-navigation-chevron-right:before {\n  content: \"\\E8A9\"; }\n\n.mdi-navigation-close:before {\n  content: \"\\E8AA\"; }\n\n.mdi-navigation-expand-less:before {\n  content: \"\\E8AB\"; }\n\n.mdi-navigation-expand-more:before {\n  content: \"\\E8AC\"; }\n\n.mdi-navigation-fullscreen-exit:before {\n  content: \"\\E8AD\"; }\n\n.mdi-navigation-fullscreen:before {\n  content: \"\\E8AE\"; }\n\n.mdi-navigation-menu:before {\n  content: \"\\E8AF\"; }\n\n.mdi-navigation-more-horiz:before {\n  content: \"\\E8B0\"; }\n\n.mdi-navigation-more-vert:before {\n  content: \"\\E8B1\"; }\n\n.mdi-navigation-refresh:before {\n  content: \"\\E8B2\"; }\n\n.mdi-navigation-unfold-less:before {\n  content: \"\\E8B3\"; }\n\n.mdi-navigation-unfold-more:before {\n  content: \"\\E8B4\"; }\n\n.mdi-notification-adb:before {\n  content: \"\\E8B5\"; }\n\n.mdi-notification-bluetooth-audio:before {\n  content: \"\\E8B6\"; }\n\n.mdi-notification-disc-full:before {\n  content: \"\\E8B7\"; }\n\n.mdi-notification-dnd-forwardslash:before {\n  content: \"\\E8B8\"; }\n\n.mdi-notification-do-not-disturb:before {\n  content: \"\\E8B9\"; }\n\n.mdi-notification-drive-eta:before {\n  content: \"\\E8BA\"; }\n\n.mdi-notification-event-available:before {\n  content: \"\\E8BB\"; }\n\n.mdi-notification-event-busy:before {\n  content: \"\\E8BC\"; }\n\n.mdi-notification-event-note:before {\n  content: \"\\E8BD\"; }\n\n.mdi-notification-folder-special:before {\n  content: \"\\E8BE\"; }\n\n.mdi-notification-mms:before {\n  content: \"\\E8BF\"; }\n\n.mdi-notification-more:before {\n  content: \"\\E8C0\"; }\n\n.mdi-notification-network-locked:before {\n  content: \"\\E8C1\"; }\n\n.mdi-notification-phone-bluetooth-speaker:before {\n  content: \"\\E8C2\"; }\n\n.mdi-notification-phone-forwarded:before {\n  content: \"\\E8C3\"; }\n\n.mdi-notification-phone-in-talk:before {\n  content: \"\\E8C4\"; }\n\n.mdi-notification-phone-locked:before {\n  content: \"\\E8C5\"; }\n\n.mdi-notification-phone-missed:before {\n  content: \"\\E8C6\"; }\n\n.mdi-notification-phone-paused:before {\n  content: \"\\E8C7\"; }\n\n.mdi-notification-play-download:before {\n  content: \"\\E8C8\"; }\n\n.mdi-notification-play-install:before {\n  content: \"\\E8C9\"; }\n\n.mdi-notification-sd-card:before {\n  content: \"\\E8CA\"; }\n\n.mdi-notification-sim-card-alert:before {\n  content: \"\\E8CB\"; }\n\n.mdi-notification-sms-failed:before {\n  content: \"\\E8CC\"; }\n\n.mdi-notification-sms:before {\n  content: \"\\E8CD\"; }\n\n.mdi-notification-sync-disabled:before {\n  content: \"\\E8CE\"; }\n\n.mdi-notification-sync-problem:before {\n  content: \"\\E8CF\"; }\n\n.mdi-notification-sync:before {\n  content: \"\\E8D0\"; }\n\n.mdi-notification-system-update:before {\n  content: \"\\E8D1\"; }\n\n.mdi-notification-tap-and-play:before {\n  content: \"\\E8D2\"; }\n\n.mdi-notification-time-to-leave:before {\n  content: \"\\E8D3\"; }\n\n.mdi-notification-vibration:before {\n  content: \"\\E8D4\"; }\n\n.mdi-notification-voice-chat:before {\n  content: \"\\E8D5\"; }\n\n.mdi-notification-vpn-lock:before {\n  content: \"\\E8D6\"; }\n\n.mdi-social-cake:before {\n  content: \"\\E8D7\"; }\n\n.mdi-social-domain:before {\n  content: \"\\E8D8\"; }\n\n.mdi-social-group-add:before {\n  content: \"\\E8D9\"; }\n\n.mdi-social-group:before {\n  content: \"\\E8DA\"; }\n\n.mdi-social-location-city:before {\n  content: \"\\E8DB\"; }\n\n.mdi-social-mood:before {\n  content: \"\\E8DC\"; }\n\n.mdi-social-notifications-none:before {\n  content: \"\\E8DD\"; }\n\n.mdi-social-notifications-off:before {\n  content: \"\\E8DE\"; }\n\n.mdi-social-notifications-on:before {\n  content: \"\\E8DF\"; }\n\n.mdi-social-notifications-paused:before {\n  content: \"\\E8E0\"; }\n\n.mdi-social-notifications:before {\n  content: \"\\E8E1\"; }\n\n.mdi-social-pages:before {\n  content: \"\\E8E2\"; }\n\n.mdi-social-party-mode:before {\n  content: \"\\E8E3\"; }\n\n.mdi-social-people-outline:before {\n  content: \"\\E8E4\"; }\n\n.mdi-social-people:before {\n  content: \"\\E8E5\"; }\n\n.mdi-social-person-add:before {\n  content: \"\\E8E6\"; }\n\n.mdi-social-person-outline:before {\n  content: \"\\E8E7\"; }\n\n.mdi-social-person:before {\n  content: \"\\E8E8\"; }\n\n.mdi-social-plus-one:before {\n  content: \"\\E8E9\"; }\n\n.mdi-social-poll:before {\n  content: \"\\E8EA\"; }\n\n.mdi-social-public:before {\n  content: \"\\E8EB\"; }\n\n.mdi-social-school:before {\n  content: \"\\E8EC\"; }\n\n.mdi-social-share:before {\n  content: \"\\E8ED\"; }\n\n.mdi-social-whatshot:before {\n  content: \"\\E8EE\"; }\n\n.mdi-toggle-check-box-outline-blank:before {\n  content: \"\\E8EF\"; }\n\n.mdi-toggle-check-box:before {\n  content: \"\\E8F0\"; }\n\n.mdi-toggle-radio-button-off:before {\n  content: \"\\E8F1\"; }\n\n.mdi-toggle-radio-button-on:before {\n  content: \"\\E8F2\"; }\n\n.mdi-toggle-star-half:before {\n  content: \"\\E8F3\"; }\n\n.mdi-toggle-star-outline:before {\n  content: \"\\E8F4\"; }\n\n.mdi-toggle-star:before {\n  content: \"\\E8F5\"; }\n\n.container {\n  margin: 0 auto;\n  max-width: 1280px;\n  width: 90%; }\n\n@media only screen and (min-width: 601px) {\n  .container {\n    width: 85%; } }\n@media only screen and (min-width: 993px) {\n  .container {\n    width: 70%; } }\n.container .row {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem; }\n\n.section {\n  padding-top: 1rem;\n  padding-bottom: 1rem; }\n  .section.no-pad {\n    padding: 0; }\n  .section.no-pad-bot {\n    padding-bottom: 0; }\n  .section.no-pad-top {\n    padding-top: 0; }\n\n.row {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px; }\n  .row:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .row .col {\n    float: left;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    padding: 0 0.75rem; }\n    .row .col.s1 {\n      width: 8.33333%;\n      margin-left: 0; }\n    .row .col.s2 {\n      width: 16.66667%;\n      margin-left: 0; }\n    .row .col.s3 {\n      width: 25%;\n      margin-left: 0; }\n    .row .col.s4 {\n      width: 33.33333%;\n      margin-left: 0; }\n    .row .col.s5 {\n      width: 41.66667%;\n      margin-left: 0; }\n    .row .col.s6 {\n      width: 50%;\n      margin-left: 0; }\n    .row .col.s7 {\n      width: 58.33333%;\n      margin-left: 0; }\n    .row .col.s8 {\n      width: 66.66667%;\n      margin-left: 0; }\n    .row .col.s9 {\n      width: 75%;\n      margin-left: 0; }\n    .row .col.s10 {\n      width: 83.33333%;\n      margin-left: 0; }\n    .row .col.s11 {\n      width: 91.66667%;\n      margin-left: 0; }\n    .row .col.s12 {\n      width: 100%;\n      margin-left: 0; }\n    .row .col.offset-s1 {\n      margin-left: 8.33333%; }\n    .row .col.offset-s2 {\n      margin-left: 16.66667%; }\n    .row .col.offset-s3 {\n      margin-left: 25%; }\n    .row .col.offset-s4 {\n      margin-left: 33.33333%; }\n    .row .col.offset-s5 {\n      margin-left: 41.66667%; }\n    .row .col.offset-s6 {\n      margin-left: 50%; }\n    .row .col.offset-s7 {\n      margin-left: 58.33333%; }\n    .row .col.offset-s8 {\n      margin-left: 66.66667%; }\n    .row .col.offset-s9 {\n      margin-left: 75%; }\n    .row .col.offset-s10 {\n      margin-left: 83.33333%; }\n    .row .col.offset-s11 {\n      margin-left: 91.66667%; }\n    .row .col.offset-s12 {\n      margin-left: 100%; }\n    @media only screen and (min-width: 601px) {\n      .row .col.m1 {\n        width: 8.33333%;\n        margin-left: 0; }\n      .row .col.m2 {\n        width: 16.66667%;\n        margin-left: 0; }\n      .row .col.m3 {\n        width: 25%;\n        margin-left: 0; }\n      .row .col.m4 {\n        width: 33.33333%;\n        margin-left: 0; }\n      .row .col.m5 {\n        width: 41.66667%;\n        margin-left: 0; }\n      .row .col.m6 {\n        width: 50%;\n        margin-left: 0; }\n      .row .col.m7 {\n        width: 58.33333%;\n        margin-left: 0; }\n      .row .col.m8 {\n        width: 66.66667%;\n        margin-left: 0; }\n      .row .col.m9 {\n        width: 75%;\n        margin-left: 0; }\n      .row .col.m10 {\n        width: 83.33333%;\n        margin-left: 0; }\n      .row .col.m11 {\n        width: 91.66667%;\n        margin-left: 0; }\n      .row .col.m12 {\n        width: 100%;\n        margin-left: 0; }\n      .row .col.offset-m1 {\n        margin-left: 8.33333%; }\n      .row .col.offset-m2 {\n        margin-left: 16.66667%; }\n      .row .col.offset-m3 {\n        margin-left: 25%; }\n      .row .col.offset-m4 {\n        margin-left: 33.33333%; }\n      .row .col.offset-m5 {\n        margin-left: 41.66667%; }\n      .row .col.offset-m6 {\n        margin-left: 50%; }\n      .row .col.offset-m7 {\n        margin-left: 58.33333%; }\n      .row .col.offset-m8 {\n        margin-left: 66.66667%; }\n      .row .col.offset-m9 {\n        margin-left: 75%; }\n      .row .col.offset-m10 {\n        margin-left: 83.33333%; }\n      .row .col.offset-m11 {\n        margin-left: 91.66667%; }\n      .row .col.offset-m12 {\n        margin-left: 100%; } }\n    @media only screen and (min-width: 993px) {\n      .row .col.l1 {\n        width: 8.33333%;\n        margin-left: 0; }\n      .row .col.l2 {\n        width: 16.66667%;\n        margin-left: 0; }\n      .row .col.l3 {\n        width: 25%;\n        margin-left: 0; }\n      .row .col.l4 {\n        width: 33.33333%;\n        margin-left: 0; }\n      .row .col.l5 {\n        width: 41.66667%;\n        margin-left: 0; }\n      .row .col.l6 {\n        width: 50%;\n        margin-left: 0; }\n      .row .col.l7 {\n        width: 58.33333%;\n        margin-left: 0; }\n      .row .col.l8 {\n        width: 66.66667%;\n        margin-left: 0; }\n      .row .col.l9 {\n        width: 75%;\n        margin-left: 0; }\n      .row .col.l10 {\n        width: 83.33333%;\n        margin-left: 0; }\n      .row .col.l11 {\n        width: 91.66667%;\n        margin-left: 0; }\n      .row .col.l12 {\n        width: 100%;\n        margin-left: 0; }\n      .row .col.offset-l1 {\n        margin-left: 8.33333%; }\n      .row .col.offset-l2 {\n        margin-left: 16.66667%; }\n      .row .col.offset-l3 {\n        margin-left: 25%; }\n      .row .col.offset-l4 {\n        margin-left: 33.33333%; }\n      .row .col.offset-l5 {\n        margin-left: 41.66667%; }\n      .row .col.offset-l6 {\n        margin-left: 50%; }\n      .row .col.offset-l7 {\n        margin-left: 58.33333%; }\n      .row .col.offset-l8 {\n        margin-left: 66.66667%; }\n      .row .col.offset-l9 {\n        margin-left: 75%; }\n      .row .col.offset-l10 {\n        margin-left: 83.33333%; }\n      .row .col.offset-l11 {\n        margin-left: 91.66667%; }\n      .row .col.offset-l12 {\n        margin-left: 100%; } }\n\nnav {\n  color: #fff;\n  background-color: #ee6e73;\n  width: 100%;\n  height: 56px;\n  line-height: 56px; }\n  nav a {\n    color: #fff; }\n  nav .nav-wrapper {\n    position: relative;\n    height: 100%; }\n    nav .nav-wrapper i {\n      display: block;\n      font-size: 2rem; }\n  @media only screen and (min-width: 993px) {\n    nav a.button-collapse {\n      display: none; } }\n  nav .button-collapse {\n    float: left;\n    position: relative;\n    z-index: 1;\n    height: 56px; }\n    nav .button-collapse i {\n      font-size: 2.7rem;\n      height: 56px;\n      line-height: 56px; }\n  nav .brand-logo {\n    position: absolute;\n    color: #fff;\n    display: inline-block;\n    font-size: 2.1rem;\n    padding: 0;\n    white-space: nowrap; }\n    nav .brand-logo.center {\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n      -moz-transform: translateX(-50%);\n      -ms-transform: translateX(-50%);\n      -o-transform: translateX(-50%);\n      transform: translateX(-50%); }\n    @media only screen and (max-width: 992px) {\n      nav .brand-logo {\n        left: 50%;\n        -webkit-transform: translateX(-50%);\n        -moz-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n        -o-transform: translateX(-50%);\n        transform: translateX(-50%); }\n        nav .brand-logo.left, nav .brand-logo.right {\n          padding: 0;\n          -webkit-transform: none;\n          -moz-transform: none;\n          -ms-transform: none;\n          -o-transform: none;\n          transform: none; }\n        nav .brand-logo.left {\n          left: 0.5rem; }\n        nav .brand-logo.right {\n          right: 0.5rem;\n          left: auto; } }\n    nav .brand-logo.right {\n      right: 0.5rem;\n      padding: 0; }\n  nav ul {\n    margin: 0; }\n    nav ul li {\n      -webkit-transition: background-color 0.3s;\n      -moz-transition: background-color 0.3s;\n      -o-transition: background-color 0.3s;\n      -ms-transition: background-color 0.3s;\n      transition: background-color 0.3s;\n      float: left;\n      padding: 0; }\n      nav ul li:hover, nav ul li.active {\n        background-color: rgba(0, 0, 0, 0.1); }\n    nav ul a {\n      font-size: 1rem;\n      color: #fff;\n      display: block;\n      padding: 0 15px; }\n    nav ul.left {\n      float: left; }\n  nav .input-field {\n    margin: 0; }\n    nav .input-field input {\n      height: 100%;\n      font-size: 1.2rem;\n      border: none;\n      padding-left: 2rem; }\n      nav .input-field input:focus, nav .input-field input[type=text]:valid, nav .input-field input[type=password]:valid, nav .input-field input[type=email]:valid, nav .input-field input[type=url]:valid, nav .input-field input[type=date]:valid {\n        border: none;\n        box-shadow: none; }\n    nav .input-field label {\n      top: 0;\n      left: 0; }\n      nav .input-field label i {\n        color: rgba(255, 255, 255, 0.7);\n        -webkit-transition: color 0.3s;\n        -moz-transition: color 0.3s;\n        -o-transition: color 0.3s;\n        -ms-transition: color 0.3s;\n        transition: color 0.3s; }\n      nav .input-field label.active i {\n        color: #fff; }\n      nav .input-field label.active {\n        -webkit-transform: translateY(0);\n        -moz-transform: translateY(0);\n        -ms-transform: translateY(0);\n        -o-transform: translateY(0);\n        transform: translateY(0); }\n\n.navbar-fixed {\n  position: relative;\n  height: 56px;\n  z-index: 998; }\n  .navbar-fixed nav {\n    position: fixed; }\n\n@media only screen and (min-width: 601px) {\n  nav, nav .nav-wrapper i, nav a.button-collapse, nav a.button-collapse i {\n    height: 64px;\n    line-height: 64px; }\n\n  .navbar-fixed {\n    height: 64px; } }\n@font-face {\n  font-family: \"Roboto\";\n  src: local(Roboto Thin), url(" + __webpack_require__(12) + ") format(\"woff2\"), url(" + __webpack_require__(13) + ") format(\"woff\"), url(" + __webpack_require__(14) + ") format(\"truetype\");\n  font-weight: 200; }\n@font-face {\n  font-family: \"Roboto\";\n  src: local(Roboto Light), url(" + __webpack_require__(15) + ") format(\"woff2\"), url(" + __webpack_require__(16) + ") format(\"woff\"), url(" + __webpack_require__(17) + ") format(\"truetype\");\n  font-weight: 300; }\n@font-face {\n  font-family: \"Roboto\";\n  src: local(Roboto Regular), url(" + __webpack_require__(18) + ") format(\"woff2\"), url(" + __webpack_require__(19) + ") format(\"woff\"), url(" + __webpack_require__(20) + ") format(\"truetype\");\n  font-weight: 400; }\n@font-face {\n  font-family: \"Roboto\";\n  src: url(" + __webpack_require__(21) + ") format(\"woff2\"), url(" + __webpack_require__(22) + ") format(\"woff\"), url(" + __webpack_require__(23) + ") format(\"truetype\");\n  font-weight: 500; }\n@font-face {\n  font-family: \"Roboto\";\n  src: url(" + __webpack_require__(24) + ") format(\"woff2\"), url(" + __webpack_require__(25) + ") format(\"woff\"), url(" + __webpack_require__(26) + ") format(\"truetype\");\n  font-weight: 700; }\na {\n  text-decoration: none; }\n\nhtml {\n  line-height: 1.5;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: normal;\n  color: rgba(0, 0, 0, 0.87); }\n  @media only screen and (min-width: 0) {\n    html {\n      font-size: 14px; } }\n  @media only screen and (min-width: 992px) {\n    html {\n      font-size: 14.5px; } }\n  @media only screen and (min-width: 1200px) {\n    html {\n      font-size: 15px; } }\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 400;\n  line-height: 1.1; }\n\nh1 a, h2 a, h3 a, h4 a, h5 a, h6 a {\n  font-weight: inherit; }\n\nh1 {\n  font-size: 4.2rem;\n  line-height: 110%;\n  margin: 2.1rem 0 1.68rem 0; }\n\nh2 {\n  font-size: 3.56rem;\n  line-height: 110%;\n  margin: 1.78rem 0 1.424rem 0; }\n\nh3 {\n  font-size: 2.92rem;\n  line-height: 110%;\n  margin: 1.46rem 0 1.168rem 0; }\n\nh4 {\n  font-size: 2.28rem;\n  line-height: 110%;\n  margin: 1.14rem 0 0.912rem 0; }\n\nh5 {\n  font-size: 1.64rem;\n  line-height: 110%;\n  margin: 0.82rem 0 0.656rem 0; }\n\nh6 {\n  font-size: 1rem;\n  line-height: 110%;\n  margin: 0.5rem 0 0.4rem 0; }\n\nem {\n  font-style: italic; }\n\nstrong {\n  font-weight: 500; }\n\nsmall {\n  font-size: 75%; }\n\n.light, footer.page-footer .footer-copyright {\n  font-weight: 300; }\n\n.thin {\n  font-weight: 200; }\n\n.flow-text {\n  font-weight: 300; }\n  @media only screen and (min-width: 360px) {\n    .flow-text {\n      font-size: 1.2rem; } }\n  @media only screen and (min-width: 390px) {\n    .flow-text {\n      font-size: 1.224rem; } }\n  @media only screen and (min-width: 420px) {\n    .flow-text {\n      font-size: 1.248rem; } }\n  @media only screen and (min-width: 450px) {\n    .flow-text {\n      font-size: 1.272rem; } }\n  @media only screen and (min-width: 480px) {\n    .flow-text {\n      font-size: 1.296rem; } }\n  @media only screen and (min-width: 510px) {\n    .flow-text {\n      font-size: 1.32rem; } }\n  @media only screen and (min-width: 540px) {\n    .flow-text {\n      font-size: 1.344rem; } }\n  @media only screen and (min-width: 570px) {\n    .flow-text {\n      font-size: 1.368rem; } }\n  @media only screen and (min-width: 600px) {\n    .flow-text {\n      font-size: 1.392rem; } }\n  @media only screen and (min-width: 630px) {\n    .flow-text {\n      font-size: 1.416rem; } }\n  @media only screen and (min-width: 660px) {\n    .flow-text {\n      font-size: 1.44rem; } }\n  @media only screen and (min-width: 690px) {\n    .flow-text {\n      font-size: 1.464rem; } }\n  @media only screen and (min-width: 720px) {\n    .flow-text {\n      font-size: 1.488rem; } }\n  @media only screen and (min-width: 750px) {\n    .flow-text {\n      font-size: 1.512rem; } }\n  @media only screen and (min-width: 780px) {\n    .flow-text {\n      font-size: 1.536rem; } }\n  @media only screen and (min-width: 810px) {\n    .flow-text {\n      font-size: 1.56rem; } }\n  @media only screen and (min-width: 840px) {\n    .flow-text {\n      font-size: 1.584rem; } }\n  @media only screen and (min-width: 870px) {\n    .flow-text {\n      font-size: 1.608rem; } }\n  @media only screen and (min-width: 900px) {\n    .flow-text {\n      font-size: 1.632rem; } }\n  @media only screen and (min-width: 930px) {\n    .flow-text {\n      font-size: 1.656rem; } }\n  @media only screen and (min-width: 960px) {\n    .flow-text {\n      font-size: 1.68rem; } }\n  @media only screen and (max-width: 360px) {\n    .flow-text {\n      font-size: 1.2rem; } }\n\n.card-panel {\n  transition: box-shadow .25s;\n  padding: 20px;\n  margin: 0.5rem 0 1rem 0;\n  border-radius: 2px;\n  background-color: #fff; }\n\n.card {\n  position: relative;\n  overflow: hidden;\n  margin: 0.5rem 0 1rem 0;\n  background-color: #fff;\n  transition: box-shadow .25s;\n  border-radius: 2px; }\n  .card .card-title {\n    color: #fff;\n    font-size: 24px;\n    font-weight: 300; }\n    .card .card-title.activator {\n      cursor: pointer; }\n  .card.small, .card.medium, .card.large {\n    position: relative; }\n    .card.small .card-image, .card.medium .card-image, .card.large .card-image {\n      overflow: hidden; }\n    .card.small .card-content, .card.medium .card-content, .card.large .card-content {\n      overflow: hidden; }\n    .card.small .card-action, .card.medium .card-action, .card.large .card-action {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; }\n  .card.small {\n    height: 300px; }\n    .card.small .card-image {\n      height: 150px; }\n    .card.small .card-content {\n      height: 150px; }\n  .card.medium {\n    height: 400px; }\n    .card.medium .card-image {\n      height: 250px; }\n    .card.medium .card-content {\n      height: 150px; }\n  .card.large {\n    height: 500px; }\n    .card.large .card-image {\n      height: 330px; }\n    .card.large .card-content {\n      height: 170px; }\n  .card .card-image {\n    position: relative; }\n    .card .card-image img {\n      display: block;\n      border-radius: 2px 2px 0 0;\n      position: relative;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      width: 100%; }\n    .card .card-image .card-title {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 20px; }\n  .card .card-content {\n    padding: 20px;\n    border-radius: 0 0 2px 2px; }\n    .card .card-content p {\n      margin: 0;\n      color: inherit; }\n    .card .card-content .card-title {\n      line-height: 48px; }\n  .card .card-action {\n    border-top: 1px solid rgba(160, 160, 160, 0.2);\n    padding: 20px; }\n    .card .card-action a {\n      color: #ffab40;\n      margin-right: 20px;\n      -webkit-transition: color 0.3s ease;\n      -moz-transition: color 0.3s ease;\n      -o-transition: color 0.3s ease;\n      -ms-transition: color 0.3s ease;\n      transition: color 0.3s ease;\n      text-transform: uppercase; }\n      .card .card-action a:hover {\n        color: #ffd8a6; }\n  .card .card-reveal {\n    padding: 20px;\n    position: absolute;\n    background-color: #fff;\n    width: 100%;\n    overflow-y: auto;\n    top: 100%;\n    height: 100%;\n    z-index: 1;\n    display: none; }\n    .card .card-reveal .card-title {\n      cursor: pointer;\n      display: block; }\n\n#toast-container {\n  display: block;\n  position: fixed;\n  z-index: 10000; }\n  @media only screen and (max-width: 600px) {\n    #toast-container {\n      min-width: 100%;\n      bottom: 0%; } }\n  @media only screen and (min-width: 601px) and (max-width: 992px) {\n    #toast-container {\n      min-width: 30%;\n      left: 5%;\n      bottom: 7%; } }\n  @media only screen and (min-width: 993px) {\n    #toast-container {\n      min-width: 8%;\n      top: 10%;\n      right: 7%; } }\n\n.toast {\n  border-radius: 2px;\n  top: 0;\n  width: auto;\n  clear: both;\n  margin-top: 10px;\n  position: relative;\n  max-width: 100%;\n  height: 48px;\n  line-height: 48px;\n  background-color: #323232;\n  padding: 0 25px;\n  font-size: 1.1rem;\n  font-weight: 300;\n  color: #fff;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-justify-content: space-between;\n  justify-content: space-between; }\n  .toast .btn, .toast .btn-large, .toast .btn-flat {\n    margin: 0;\n    margin-left: 3rem; }\n  .toast.rounded {\n    border-radius: 24px; }\n  @media only screen and (max-width: 600px) {\n    .toast {\n      width: 100%;\n      border-radius: 0; } }\n  @media only screen and (min-width: 601px) and (max-width: 992px) {\n    .toast {\n      float: left; } }\n  @media only screen and (min-width: 993px) {\n    .toast {\n      float: right; } }\n\n.tabs {\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  position: relative;\n  height: 48px;\n  background-color: #fff;\n  margin: 0 auto;\n  width: 100%;\n  white-space: nowrap; }\n  .tabs .tab {\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    display: block;\n    float: left;\n    text-align: center;\n    line-height: 48px;\n    height: 48px;\n    padding: 0 20px;\n    margin: 0;\n    text-transform: uppercase;\n    letter-spacing: .8px;\n    width: 15%; }\n    .tabs .tab a {\n      color: #ee6e73;\n      display: block;\n      width: 100%;\n      height: 100%;\n      -webkit-transition: color 0.28s ease;\n      -moz-transition: color 0.28s ease;\n      -o-transition: color 0.28s ease;\n      -ms-transition: color 0.28s ease;\n      transition: color 0.28s ease; }\n      .tabs .tab a:hover {\n        color: #f9c9cb; }\n    .tabs .tab.disabled a {\n      color: #f9c9cb;\n      cursor: default; }\n  .tabs .indicator {\n    position: absolute;\n    bottom: 0;\n    height: 2px;\n    background-color: #f6b2b5;\n    will-change: left, right; }\n\n.tabs .tab {\n  padding: 0; }\n\n.material-tooltip {\n  padding: 10px 8px;\n  font-size: 1rem;\n  z-index: 2000;\n  background-color: transparent;\n  border-radius: 2px;\n  color: #fff;\n  min-height: 36px;\n  line-height: 1rem;\n  opacity: 0;\n  display: none;\n  position: absolute;\n  text-align: center;\n  overflow: hidden;\n  left: 0;\n  top: 0;\n  will-change: top, left; }\n\n.backdrop {\n  position: absolute;\n  opacity: 0;\n  display: none;\n  height: 7px;\n  width: 14px;\n  border-radius: 0 0 14px 14px;\n  background-color: #323232;\n  z-index: -1;\n  -webkit-transform-origin: 50% 10%;\n  -moz-transform-origin: 50% 10%;\n  -ms-transform-origin: 50% 10%;\n  -o-transform-origin: 50% 10%;\n  transform-origin: 50% 10%;\n  will-change: transform, opacity; }\n\n.btn, .btn-large, .btn-flat {\n  border: none;\n  border-radius: 2px;\n  display: inline-block;\n  height: 36px;\n  line-height: 36px;\n  outline: 0;\n  padding: 0 2rem;\n  text-transform: uppercase;\n  vertical-align: middle;\n  -webkit-tap-highlight-color: transparent; }\n\n.btn.disabled, .disabled.btn-large, .btn-floating.disabled, .btn-large.disabled, .btn:disabled, .btn-large:disabled, .btn-large:disabled, .btn-floating:disabled {\n  background-color: #DFDFDF !important;\n  box-shadow: none;\n  color: #9F9F9F !important;\n  cursor: default; }\n  .btn.disabled *, .disabled.btn-large *, .btn-floating.disabled *, .btn-large.disabled *, .btn:disabled *, .btn-large:disabled *, .btn-large:disabled *, .btn-floating:disabled * {\n    pointer-events: none; }\n  .btn.disabled:hover, .disabled.btn-large:hover, .btn-floating.disabled:hover, .btn-large.disabled:hover, .btn:disabled:hover, .btn-large:disabled:hover, .btn-large:disabled:hover, .btn-floating:disabled:hover {\n    background-color: #DFDFDF;\n    color: #9F9F9F; }\n\n.btn i, .btn-large i, .btn-floating i, .btn-large i, .btn-flat i {\n  font-size: 1.3rem;\n  line-height: inherit; }\n\n.btn, .btn-large {\n  text-decoration: none;\n  color: #fff;\n  background-color: #26a69a;\n  text-align: center;\n  letter-spacing: .5px;\n  -webkit-transition: 0.2s ease-out;\n  -moz-transition: 0.2s ease-out;\n  -o-transition: 0.2s ease-out;\n  -ms-transition: 0.2s ease-out;\n  transition: 0.2s ease-out;\n  cursor: pointer; }\n  .btn:hover, .btn-large:hover {\n    background-color: #2bbbad; }\n\n.btn-floating {\n  display: inline-block;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  width: 37px;\n  height: 37px;\n  line-height: 37px;\n  padding: 0;\n  background-color: #26a69a;\n  border-radius: 50%;\n  transition: .3s;\n  cursor: pointer;\n  vertical-align: middle; }\n  .btn-floating i {\n    width: inherit;\n    display: inline-block;\n    text-align: center;\n    color: #fff;\n    font-size: 1.6rem;\n    line-height: 37px; }\n  .btn-floating:before {\n    border-radius: 0; }\n  .btn-floating.btn-large {\n    width: 55.5px;\n    height: 55.5px; }\n    .btn-floating.btn-large i {\n      line-height: 55.5px; }\n\nbutton.btn-floating {\n  border: none; }\n\n.fixed-action-btn {\n  position: fixed;\n  right: 23px;\n  bottom: 23px;\n  padding-top: 15px;\n  margin-bottom: 0;\n  z-index: 998; }\n  .fixed-action-btn ul {\n    left: 0;\n    right: 0;\n    text-align: center;\n    position: absolute;\n    bottom: 64px;\n    margin: 0; }\n    .fixed-action-btn ul li {\n      margin-bottom: 15px; }\n    .fixed-action-btn ul a.btn-floating {\n      opacity: 0; }\n\n.btn-flat {\n  box-shadow: none;\n  background-color: transparent;\n  color: #343434;\n  cursor: pointer; }\n  .btn-flat.disabled {\n    color: #b3b3b3;\n    cursor: default; }\n\n.btn-large {\n  height: 54px;\n  line-height: 56px; }\n  .btn-large i {\n    font-size: 1.6rem; }\n\n.btn-block {\n  display: block; }\n\n.dropdown-content {\n  background-color: #fff;\n  margin: 0;\n  display: none;\n  min-width: 100px;\n  max-height: 650px;\n  overflow-y: auto;\n  opacity: 0;\n  position: absolute;\n  z-index: 999;\n  will-change: width, height; }\n  .dropdown-content li {\n    clear: both;\n    color: rgba(0, 0, 0, 0.87);\n    cursor: pointer;\n    line-height: 1.5rem;\n    width: 100%;\n    text-align: left;\n    text-transform: none; }\n    .dropdown-content li:hover, .dropdown-content li.active {\n      background-color: #eee; }\n    .dropdown-content li > a, .dropdown-content li > span {\n      font-size: 1.2rem;\n      color: #26a69a;\n      display: block;\n      padding: 1rem 1rem; }\n    .dropdown-content li > a > i {\n      height: inherit;\n      line-height: inherit; }\n\n/*!\n * Waves v0.6.0\n * http://fian.my.id/Waves\n *\n * Copyright 2014 Alfiana E. Sibuea and other contributors\n * Released under the MIT license\n * https://github.com/fians/Waves/blob/master/LICENSE\n */\n.waves-effect {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  will-change: opacity, transform;\n  -webkit-transition: all 0.3s ease-out;\n  -moz-transition: all 0.3s ease-out;\n  -o-transition: all 0.3s ease-out;\n  -ms-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out; }\n  .waves-effect .waves-ripple {\n    position: absolute;\n    border-radius: 50%;\n    width: 20px;\n    height: 20px;\n    margin-top: -10px;\n    margin-left: -10px;\n    opacity: 0;\n    background: rgba(0, 0, 0, 0.2);\n    -webkit-transition: all 0.7s ease-out;\n    -moz-transition: all 0.7s ease-out;\n    -o-transition: all 0.7s ease-out;\n    -ms-transition: all 0.7s ease-out;\n    transition: all 0.7s ease-out;\n    -webkit-transition-property: -webkit-transform, opacity;\n    -moz-transition-property: -moz-transform, opacity;\n    -o-transition-property: -o-transform, opacity;\n    transition-property: transform, opacity;\n    -webkit-transform: scale(0);\n    -moz-transform: scale(0);\n    -ms-transform: scale(0);\n    -o-transform: scale(0);\n    transform: scale(0);\n    pointer-events: none; }\n  .waves-effect.waves-light .waves-ripple {\n    background-color: rgba(255, 255, 255, 0.45); }\n  .waves-effect.waves-red .waves-ripple {\n    background-color: rgba(244, 67, 54, 0.7); }\n  .waves-effect.waves-yellow .waves-ripple {\n    background-color: rgba(255, 235, 59, 0.7); }\n  .waves-effect.waves-orange .waves-ripple {\n    background-color: rgba(255, 152, 0, 0.7); }\n  .waves-effect.waves-purple .waves-ripple {\n    background-color: rgba(156, 39, 176, 0.7); }\n  .waves-effect.waves-green .waves-ripple {\n    background-color: rgba(76, 175, 80, 0.7); }\n  .waves-effect.waves-teal .waves-ripple {\n    background-color: rgba(0, 150, 136, 0.7); }\n\n.waves-notransition {\n  -webkit-transition: none !important;\n  -moz-transition: none !important;\n  -o-transition: none !important;\n  -ms-transition: none !important;\n  transition: none !important; }\n\n.waves-circle {\n  -webkit-transform: translateZ(0);\n  -moz-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  -o-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%); }\n\n.waves-input-wrapper {\n  border-radius: 0.2em;\n  vertical-align: bottom; }\n  .waves-input-wrapper .waves-button-input {\n    position: relative;\n    top: 0;\n    left: 0;\n    z-index: 1; }\n\n.waves-circle {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none; }\n\n.waves-block {\n  display: block; }\n\n/* Firefox Bug: link not triggered */\na.waves-effect .waves-ripple {\n  z-index: -1; }\n\n.modal {\n  display: none;\n  position: fixed;\n  left: 0;\n  right: 0;\n  background-color: #fafafa;\n  padding: 0;\n  max-height: 70%;\n  width: 55%;\n  margin: auto;\n  overflow-y: auto;\n  border-radius: 2px;\n  will-change: top, opacity; }\n  @media only screen and (max-width: 992px) {\n    .modal {\n      width: 80%; } }\n  .modal h1, .modal h2, .modal h3, .modal h4 {\n    margin-top: 0; }\n  .modal .modal-content {\n    padding: 24px; }\n  .modal .modal-close {\n    cursor: pointer; }\n  .modal .modal-footer {\n    border-radius: 0 0 2px 2px;\n    background-color: #fafafa;\n    padding: 4px 6px;\n    height: 56px;\n    width: 100%; }\n    .modal .modal-footer .btn, .modal .modal-footer .btn-large, .modal .modal-footer .btn-flat {\n      float: right;\n      margin: 6px 0; }\n\n.lean-overlay {\n  position: fixed;\n  z-index: 999;\n  top: -100px;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 125%;\n  width: 100%;\n  background: #000;\n  display: none;\n  will-change: opacity; }\n\n.modal.modal-fixed-footer {\n  padding: 0;\n  height: 70%; }\n  .modal.modal-fixed-footer .modal-content {\n    position: absolute;\n    height: calc(100% - 56px);\n    max-height: 100%;\n    width: 100%;\n    overflow-y: auto; }\n  .modal.modal-fixed-footer .modal-footer {\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n    position: absolute;\n    bottom: 0; }\n\n.modal.bottom-sheet {\n  top: auto;\n  bottom: -100%;\n  margin: 0;\n  width: 100%;\n  max-height: 45%;\n  border-radius: 0;\n  will-change: bottom, opacity; }\n\n.collapsible {\n  border-top: 1px solid #ddd;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n  margin: 0.5rem 0 1rem 0; }\n\n.collapsible-header {\n  display: block;\n  cursor: pointer;\n  min-height: 3rem;\n  line-height: 3rem;\n  padding: 0 1rem;\n  background-color: #fff;\n  border-bottom: 1px solid #ddd; }\n  .collapsible-header i {\n    width: 2rem;\n    font-size: 1.6rem;\n    line-height: 3rem;\n    display: block;\n    float: left;\n    text-align: center;\n    margin-right: 1rem; }\n\n.collapsible-body {\n  display: none;\n  border-bottom: 1px solid #ddd;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n  .collapsible-body p {\n    margin: 0;\n    padding: 2rem; }\n\n.side-nav .collapsible {\n  border: none;\n  box-shadow: none; }\n  .side-nav .collapsible li {\n    padding: 0; }\n.side-nav .collapsible-header {\n  background-color: transparent;\n  border: none;\n  line-height: inherit;\n  height: inherit;\n  margin: 0 1rem; }\n  .side-nav .collapsible-header i {\n    line-height: inherit; }\n.side-nav .collapsible-body {\n  border: 0;\n  background-color: #fff; }\n  .side-nav .collapsible-body li a {\n    margin: 0 1rem 0 2rem; }\n\n.collapsible.popout {\n  border: none;\n  box-shadow: none; }\n  .collapsible.popout > li {\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n    margin: 0 24px;\n    transition: margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94); }\n  .collapsible.popout > li.active {\n    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n    margin: 16px 0; }\n\n.chip {\n  display: inline-block;\n  height: 32px;\n  font-size: 13px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.6);\n  line-height: 32px;\n  padding: 0 12px;\n  border-radius: 16px;\n  background-color: #E4E4E4; }\n  .chip img {\n    float: left;\n    margin: 0 8px 0 -12px;\n    height: 32px;\n    width: 32px;\n    border-radius: 50%; }\n  .chip i.material-icons {\n    cursor: pointer;\n    float: right;\n    font-size: 16px;\n    line-height: 32px;\n    padding-left: 8px; }\n\n.materialboxed {\n  display: block;\n  cursor: zoom-in;\n  position: relative;\n  -webkit-transition: opacity 0.4s;\n  -moz-transition: opacity 0.4s;\n  -o-transition: opacity 0.4s;\n  -ms-transition: opacity 0.4s;\n  transition: opacity 0.4s; }\n  .materialboxed:hover {\n    will-change: left, top, width, height; }\n    .materialboxed:hover:not(.active) {\n      opacity: .8; }\n\n.materialboxed.active {\n  cursor: zoom-out; }\n\n#materialbox-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #292929;\n  z-index: 999;\n  will-change: opacity; }\n\n.materialbox-caption {\n  position: fixed;\n  display: none;\n  color: #fff;\n  line-height: 50px;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  padding: 0% 15%;\n  height: 50px;\n  z-index: 1000;\n  -webkit-font-smoothing: antialiased; }\n\n/* Remove Focus Boxes */\nselect:focus {\n  outline: 1px solid #c9f3ef; }\n\nbutton:focus {\n  outline: none;\n  background-color: #2ab7a9; }\n\nlabel {\n  font-size: 0.8rem;\n  color: #9e9e9e; }\n\n/***************************\n   Text Inputs + Textarea\n****************************/\n::-webkit-input-placeholder {\n  color: #d1d1d1; }\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #d1d1d1; }\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #d1d1d1; }\n\n:-ms-input-placeholder {\n  color: #d1d1d1; }\n\ninput[type=text],\ninput[type=password],\ninput[type=email],\ninput[type=url],\ninput[type=time],\ninput[type=date],\ninput[type=datetime-local],\ninput[type=tel],\ninput[type=number],\ninput[type=search],\ntextarea.materialize-textarea {\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  border-radius: 0;\n  outline: none;\n  height: 3rem;\n  width: 100%;\n  font-size: 1rem;\n  margin: 0 0 15px 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  transition: all .3s; }\n  input[type=text]:disabled, input[type=text][readonly=\"readonly\"],\n  input[type=password]:disabled,\n  input[type=password][readonly=\"readonly\"],\n  input[type=email]:disabled,\n  input[type=email][readonly=\"readonly\"],\n  input[type=url]:disabled,\n  input[type=url][readonly=\"readonly\"],\n  input[type=time]:disabled,\n  input[type=time][readonly=\"readonly\"],\n  input[type=date]:disabled,\n  input[type=date][readonly=\"readonly\"],\n  input[type=datetime-local]:disabled,\n  input[type=datetime-local][readonly=\"readonly\"],\n  input[type=tel]:disabled,\n  input[type=tel][readonly=\"readonly\"],\n  input[type=number]:disabled,\n  input[type=number][readonly=\"readonly\"],\n  input[type=search]:disabled,\n  input[type=search][readonly=\"readonly\"],\n  textarea.materialize-textarea:disabled,\n  textarea.materialize-textarea[readonly=\"readonly\"] {\n    color: rgba(0, 0, 0, 0.26);\n    border-bottom: 1px dotted rgba(0, 0, 0, 0.26); }\n  input[type=text]:disabled + label, input[type=text][readonly=\"readonly\"] + label,\n  input[type=password]:disabled + label,\n  input[type=password][readonly=\"readonly\"] + label,\n  input[type=email]:disabled + label,\n  input[type=email][readonly=\"readonly\"] + label,\n  input[type=url]:disabled + label,\n  input[type=url][readonly=\"readonly\"] + label,\n  input[type=time]:disabled + label,\n  input[type=time][readonly=\"readonly\"] + label,\n  input[type=date]:disabled + label,\n  input[type=date][readonly=\"readonly\"] + label,\n  input[type=datetime-local]:disabled + label,\n  input[type=datetime-local][readonly=\"readonly\"] + label,\n  input[type=tel]:disabled + label,\n  input[type=tel][readonly=\"readonly\"] + label,\n  input[type=number]:disabled + label,\n  input[type=number][readonly=\"readonly\"] + label,\n  input[type=search]:disabled + label,\n  input[type=search][readonly=\"readonly\"] + label,\n  textarea.materialize-textarea:disabled + label,\n  textarea.materialize-textarea[readonly=\"readonly\"] + label {\n    color: rgba(0, 0, 0, 0.26); }\n  input[type=text]:focus:not([readonly]),\n  input[type=password]:focus:not([readonly]),\n  input[type=email]:focus:not([readonly]),\n  input[type=url]:focus:not([readonly]),\n  input[type=time]:focus:not([readonly]),\n  input[type=date]:focus:not([readonly]),\n  input[type=datetime-local]:focus:not([readonly]),\n  input[type=tel]:focus:not([readonly]),\n  input[type=number]:focus:not([readonly]),\n  input[type=search]:focus:not([readonly]),\n  textarea.materialize-textarea:focus:not([readonly]) {\n    border-bottom: 1px solid #26a69a;\n    box-shadow: 0 1px 0 0 #26a69a; }\n  input[type=text]:focus:not([readonly]) + label,\n  input[type=password]:focus:not([readonly]) + label,\n  input[type=email]:focus:not([readonly]) + label,\n  input[type=url]:focus:not([readonly]) + label,\n  input[type=time]:focus:not([readonly]) + label,\n  input[type=date]:focus:not([readonly]) + label,\n  input[type=datetime-local]:focus:not([readonly]) + label,\n  input[type=tel]:focus:not([readonly]) + label,\n  input[type=number]:focus:not([readonly]) + label,\n  input[type=search]:focus:not([readonly]) + label,\n  textarea.materialize-textarea:focus:not([readonly]) + label {\n    color: #26a69a; }\n  input[type=text].valid, input[type=text]:focus.valid,\n  input[type=password].valid,\n  input[type=password]:focus.valid,\n  input[type=email].valid,\n  input[type=email]:focus.valid,\n  input[type=url].valid,\n  input[type=url]:focus.valid,\n  input[type=time].valid,\n  input[type=time]:focus.valid,\n  input[type=date].valid,\n  input[type=date]:focus.valid,\n  input[type=datetime-local].valid,\n  input[type=datetime-local]:focus.valid,\n  input[type=tel].valid,\n  input[type=tel]:focus.valid,\n  input[type=number].valid,\n  input[type=number]:focus.valid,\n  input[type=search].valid,\n  input[type=search]:focus.valid,\n  textarea.materialize-textarea.valid,\n  textarea.materialize-textarea:focus.valid {\n    border-bottom: 1px solid #4CAF50;\n    box-shadow: 0 1px 0 0 #4CAF50; }\n  input[type=text].valid + label:after, input[type=text]:focus.valid + label:after,\n  input[type=password].valid + label:after,\n  input[type=password]:focus.valid + label:after,\n  input[type=email].valid + label:after,\n  input[type=email]:focus.valid + label:after,\n  input[type=url].valid + label:after,\n  input[type=url]:focus.valid + label:after,\n  input[type=time].valid + label:after,\n  input[type=time]:focus.valid + label:after,\n  input[type=date].valid + label:after,\n  input[type=date]:focus.valid + label:after,\n  input[type=datetime-local].valid + label:after,\n  input[type=datetime-local]:focus.valid + label:after,\n  input[type=tel].valid + label:after,\n  input[type=tel]:focus.valid + label:after,\n  input[type=number].valid + label:after,\n  input[type=number]:focus.valid + label:after,\n  input[type=search].valid + label:after,\n  input[type=search]:focus.valid + label:after,\n  textarea.materialize-textarea.valid + label:after,\n  textarea.materialize-textarea:focus.valid + label:after {\n    content: attr(data-success);\n    color: #4CAF50;\n    opacity: 1; }\n  input[type=text].invalid, input[type=text]:focus.invalid,\n  input[type=password].invalid,\n  input[type=password]:focus.invalid,\n  input[type=email].invalid,\n  input[type=email]:focus.invalid,\n  input[type=url].invalid,\n  input[type=url]:focus.invalid,\n  input[type=time].invalid,\n  input[type=time]:focus.invalid,\n  input[type=date].invalid,\n  input[type=date]:focus.invalid,\n  input[type=datetime-local].invalid,\n  input[type=datetime-local]:focus.invalid,\n  input[type=tel].invalid,\n  input[type=tel]:focus.invalid,\n  input[type=number].invalid,\n  input[type=number]:focus.invalid,\n  input[type=search].invalid,\n  input[type=search]:focus.invalid,\n  textarea.materialize-textarea.invalid,\n  textarea.materialize-textarea:focus.invalid {\n    border-bottom: 1px solid #F44336;\n    box-shadow: 0 1px 0 0 #F44336; }\n  input[type=text].invalid + label:after, input[type=text]:focus.invalid + label:after,\n  input[type=password].invalid + label:after,\n  input[type=password]:focus.invalid + label:after,\n  input[type=email].invalid + label:after,\n  input[type=email]:focus.invalid + label:after,\n  input[type=url].invalid + label:after,\n  input[type=url]:focus.invalid + label:after,\n  input[type=time].invalid + label:after,\n  input[type=time]:focus.invalid + label:after,\n  input[type=date].invalid + label:after,\n  input[type=date]:focus.invalid + label:after,\n  input[type=datetime-local].invalid + label:after,\n  input[type=datetime-local]:focus.invalid + label:after,\n  input[type=tel].invalid + label:after,\n  input[type=tel]:focus.invalid + label:after,\n  input[type=number].invalid + label:after,\n  input[type=number]:focus.invalid + label:after,\n  input[type=search].invalid + label:after,\n  input[type=search]:focus.invalid + label:after,\n  textarea.materialize-textarea.invalid + label:after,\n  textarea.materialize-textarea:focus.invalid + label:after {\n    content: attr(data-error);\n    color: #F44336;\n    opacity: 1; }\n  input[type=text] + label:after,\n  input[type=password] + label:after,\n  input[type=email] + label:after,\n  input[type=url] + label:after,\n  input[type=time] + label:after,\n  input[type=date] + label:after,\n  input[type=datetime-local] + label:after,\n  input[type=tel] + label:after,\n  input[type=number] + label:after,\n  input[type=search] + label:after,\n  textarea.materialize-textarea + label:after {\n    display: block;\n    content: \"\";\n    position: absolute;\n    top: 65px;\n    opacity: 0;\n    transition: .2s opacity ease-out, .2s color ease-out; }\n\n.input-field {\n  position: relative;\n  margin-top: 1rem; }\n  .input-field label {\n    color: #9e9e9e;\n    position: absolute;\n    top: 0.8rem;\n    left: 0.75rem;\n    font-size: 1rem;\n    cursor: text;\n    -webkit-transition: 0.2s ease-out;\n    -moz-transition: 0.2s ease-out;\n    -o-transition: 0.2s ease-out;\n    -ms-transition: 0.2s ease-out;\n    transition: 0.2s ease-out; }\n  .input-field label.active {\n    font-size: 0.8rem;\n    -webkit-transform: translateY(-140%);\n    -moz-transform: translateY(-140%);\n    -ms-transform: translateY(-140%);\n    -o-transform: translateY(-140%);\n    transform: translateY(-140%); }\n  .input-field .prefix {\n    position: absolute;\n    width: 3rem;\n    font-size: 2rem;\n    -webkit-transition: color 0.2s;\n    -moz-transition: color 0.2s;\n    -o-transition: color 0.2s;\n    -ms-transition: color 0.2s;\n    transition: color 0.2s; }\n    .input-field .prefix.active {\n      color: #26a69a; }\n  .input-field .prefix ~ input,\n  .input-field .prefix ~ textarea {\n    margin-left: 3rem;\n    width: 92%;\n    width: calc(100% - 3rem); }\n  .input-field .prefix ~ textarea {\n    padding-top: .8rem; }\n  .input-field .prefix ~ label {\n    margin-left: 3rem; }\n  @media only screen and (max-width: 992px) {\n    .input-field .prefix ~ input {\n      width: 86%;\n      width: calc(100% - 3rem); } }\n  @media only screen and (max-width: 600px) {\n    .input-field .prefix ~ input {\n      width: 80%;\n      width: calc(100% - 3rem); } }\n\n.input-field input[type=search] {\n  display: block;\n  line-height: inherit;\n  padding-left: 4rem;\n  width: calc(100% - 4rem); }\n  .input-field input[type=search]:focus {\n    background-color: #fff;\n    border: 0;\n    box-shadow: none;\n    color: #444; }\n    .input-field input[type=search]:focus + label i, .input-field input[type=search]:focus ~ .mdi-navigation-close, .input-field input[type=search]:focus ~ .material-icons {\n      color: #444; }\n  .input-field input[type=search] + label {\n    left: 1rem; }\n  .input-field input[type=search] ~ .mdi-navigation-close, .input-field input[type=search] ~ .material-icons {\n    position: absolute;\n    top: 0;\n    right: 1rem;\n    color: transparent;\n    cursor: pointer;\n    font-size: 2rem;\n    transition: .3s color; }\n\ntextarea {\n  width: 100%;\n  height: 3rem;\n  background-color: transparent; }\n  textarea.materialize-textarea {\n    overflow-y: hidden;\n    /* prevents scroll bar flash */\n    padding: 1.6rem 0;\n    /* prevents text jump on Enter keypress */\n    resize: none;\n    min-height: 3rem; }\n\n.hiddendiv {\n  display: none;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  /* future version of deprecated 'word-wrap' */\n  padding-top: 1.2rem;\n  /* prevents text jump on Enter keypress */ }\n\n/***************\n  Radio Buttons\n***************/\n/* Remove default Radio Buttons */\n[type=\"radio\"]:not(:checked),\n[type=\"radio\"]:checked {\n  position: absolute;\n  left: -9999px;\n  visibility: hidden; }\n\n[type=\"radio\"]:not(:checked) + label,\n[type=\"radio\"]:checked + label {\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  display: inline-block;\n  height: 25px;\n  line-height: 25px;\n  font-size: 1rem;\n  -webkit-transition: 0.28s ease;\n  -moz-transition: 0.28s ease;\n  -o-transition: 0.28s ease;\n  -ms-transition: 0.28s ease;\n  transition: 0.28s ease;\n  -webkit-user-select: none;\n  /* webkit (safari, chrome) browsers */\n  -moz-user-select: none;\n  /* mozilla browsers */\n  -khtml-user-select: none;\n  /* webkit (konqueror) browsers */\n  -ms-user-select: none;\n  /* IE10+ */ }\n\n[type=\"radio\"] + label:before,\n[type=\"radio\"] + label:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 4px;\n  width: 16px;\n  height: 16px;\n  z-index: 0;\n  -webkit-transition: 0.28s ease;\n  -moz-transition: 0.28s ease;\n  -o-transition: 0.28s ease;\n  -ms-transition: 0.28s ease;\n  transition: 0.28s ease; }\n\n/* Unchecked styles */\n[type=\"radio\"]:not(:checked) + label:before {\n  border-radius: 50%;\n  border: 2px solid #5a5a5a; }\n\n[type=\"radio\"]:not(:checked) + label:after {\n  border-radius: 50%;\n  border: 2px solid #5a5a5a;\n  z-index: -1;\n  -webkit-transform: scale(0);\n  -moz-transform: scale(0);\n  -ms-transform: scale(0);\n  -o-transform: scale(0);\n  transform: scale(0); }\n\n/* Checked styles */\n[type=\"radio\"]:checked + label:before {\n  border-radius: 50%;\n  border: 2px solid transparent; }\n\n[type=\"radio\"]:checked + label:after {\n  border-radius: 50%;\n  border: 2px solid #26a69a;\n  background-color: #26a69a;\n  z-index: 0;\n  -webkit-transform: scale(1.02);\n  -moz-transform: scale(1.02);\n  -ms-transform: scale(1.02);\n  -o-transform: scale(1.02);\n  transform: scale(1.02); }\n\n/* Radio With gap */\n[type=\"radio\"].with-gap:checked + label:before {\n  border-radius: 50%;\n  border: 2px solid #26a69a; }\n\n[type=\"radio\"].with-gap:checked + label:after {\n  border-radius: 50%;\n  border: 2px solid #26a69a;\n  background-color: #26a69a;\n  z-index: 0;\n  -webkit-transform: scale(0.5);\n  -moz-transform: scale(0.5);\n  -ms-transform: scale(0.5);\n  -o-transform: scale(0.5);\n  transform: scale(0.5); }\n\n/* Disabled Radio With gap */\n[type=\"radio\"].with-gap:disabled:checked + label:before {\n  border: 2px solid rgba(0, 0, 0, 0.26); }\n\n[type=\"radio\"].with-gap:disabled:checked + label:after {\n  border: none;\n  background-color: rgba(0, 0, 0, 0.26); }\n\n/* Disabled style */\n[type=\"radio\"]:disabled:not(:checked) + label:before,\n[type=\"radio\"]:disabled:checked + label:before {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.26); }\n\n[type=\"radio\"]:disabled + label {\n  color: rgba(0, 0, 0, 0.26); }\n\n[type=\"radio\"]:disabled:not(:checked) + label:before {\n  border-color: rgba(0, 0, 0, 0.26); }\n\n[type=\"radio\"]:disabled:checked + label:after {\n  background-color: rgba(0, 0, 0, 0.26);\n  border-color: #BDBDBD; }\n\n/***************\n   Checkboxes\n***************/\n/* CUSTOM CSS CHECKBOXES */\nform p {\n  margin-bottom: 10px;\n  text-align: left; }\n\nform p:last-child {\n  margin-bottom: 0; }\n\n/* Remove default checkbox */\n[type=\"checkbox\"]:not(:checked),\n[type=\"checkbox\"]:checked {\n  position: absolute;\n  left: -9999px;\n  visibility: hidden; }\n\n[type=\"checkbox\"] {\n  /* checkbox aspect */ }\n  [type=\"checkbox\"] + label {\n    position: relative;\n    padding-left: 35px;\n    cursor: pointer;\n    display: inline-block;\n    height: 25px;\n    line-height: 25px;\n    font-size: 1rem;\n    -webkit-user-select: none;\n    /* webkit (safari, chrome) browsers */\n    -moz-user-select: none;\n    /* mozilla browsers */\n    -khtml-user-select: none;\n    /* webkit (konqueror) browsers */\n    -ms-user-select: none;\n    /* IE10+ */ }\n  [type=\"checkbox\"] + label:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 18px;\n    height: 18px;\n    z-index: 0;\n    border: 2px solid #5a5a5a;\n    border-radius: 1px;\n    margin-top: 2px;\n    -webkit-transition: 0.2s;\n    -moz-transition: 0.2s;\n    -o-transition: 0.2s;\n    -ms-transition: 0.2s;\n    transition: 0.2s; }\n  [type=\"checkbox\"]:not(:checked):disabled + label:before {\n    border: none;\n    background-color: rgba(0, 0, 0, 0.26); }\n\n[type=\"checkbox\"]:checked + label:before {\n  top: -4px;\n  left: -3px;\n  width: 12px;\n  height: 22px;\n  border-top: 2px solid transparent;\n  border-left: 2px solid transparent;\n  border-right: 2px solid #26a69a;\n  border-bottom: 2px solid #26a69a;\n  -webkit-transform: rotate(40deg);\n  -moz-transform: rotate(40deg);\n  -ms-transform: rotate(40deg);\n  -o-transform: rotate(40deg);\n  transform: rotate(40deg);\n  -webkit-backface-visibility: hidden;\n  -webkit-transform-origin: 100% 100%;\n  -moz-transform-origin: 100% 100%;\n  -ms-transform-origin: 100% 100%;\n  -o-transform-origin: 100% 100%;\n  transform-origin: 100% 100%; }\n[type=\"checkbox\"]:checked:disabled + label:before {\n  border-right: 2px solid rgba(0, 0, 0, 0.26);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.26); }\n\n/* Indeterminate checkbox */\n[type=\"checkbox\"]:indeterminate + label:before {\n  left: -10px;\n  top: -11px;\n  width: 10px;\n  height: 22px;\n  border-top: none;\n  border-left: none;\n  border-right: 2px solid #26a69a;\n  border-bottom: none;\n  -webkit-transform: rotate(90deg);\n  -moz-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  -o-transform: rotate(90deg);\n  transform: rotate(90deg);\n  -webkit-backface-visibility: hidden;\n  -webkit-transform-origin: 100% 100%;\n  -moz-transform-origin: 100% 100%;\n  -ms-transform-origin: 100% 100%;\n  -o-transform-origin: 100% 100%;\n  transform-origin: 100% 100%; }\n[type=\"checkbox\"]:indeterminate:disabled + label:before {\n  border-right: 2px solid rgba(0, 0, 0, 0.26);\n  background-color: transparent; }\n\n[type=\"checkbox\"].filled-in + label:after {\n  border-radius: 2px; }\n[type=\"checkbox\"].filled-in + label:before,\n[type=\"checkbox\"].filled-in + label:after {\n  content: '';\n  left: 0;\n  position: absolute;\n  /* .1s delay is for check animation */\n  transition: border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;\n  z-index: 1; }\n[type=\"checkbox\"].filled-in:not(:checked) + label:before {\n  width: 0;\n  height: 0;\n  border: 3px solid transparent;\n  left: 6px;\n  top: 10px;\n  -webkit-transform: rotateZ(37deg);\n  transform: rotateZ(37deg);\n  -webkit-transform-origin: 20% 40%;\n  transform-origin: 100% 100%; }\n[type=\"checkbox\"].filled-in:not(:checked) + label:after {\n  height: 20px;\n  width: 20px;\n  background-color: transparent;\n  border: 2px solid #5a5a5a;\n  top: 0px;\n  z-index: 0; }\n[type=\"checkbox\"].filled-in:checked + label:before {\n  top: 0;\n  left: 1px;\n  width: 8px;\n  height: 13px;\n  border-top: 2px solid transparent;\n  border-left: 2px solid transparent;\n  border-right: 2px solid #fff;\n  border-bottom: 2px solid #fff;\n  -webkit-transform: rotateZ(37deg);\n  transform: rotateZ(37deg);\n  -webkit-transform-origin: 100% 100%;\n  transform-origin: 100% 100%; }\n[type=\"checkbox\"].filled-in:checked + label:after {\n  top: 0px;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #26a69a;\n  background-color: #26a69a;\n  z-index: 0; }\n[type=\"checkbox\"].filled-in:disabled:not(:checked) + label:before {\n  background-color: transparent;\n  border: 2px solid transparent; }\n[type=\"checkbox\"].filled-in:disabled:not(:checked) + label:after {\n  border-color: transparent;\n  background-color: #BDBDBD; }\n[type=\"checkbox\"].filled-in:disabled:checked + label:before {\n  background-color: transparent; }\n[type=\"checkbox\"].filled-in:disabled:checked + label:after {\n  background-color: #BDBDBD;\n  border-color: #BDBDBD; }\n\n/***************\n     Switch\n***************/\n.switch,\n.switch * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -ms-user-select: none; }\n\n.switch label {\n  cursor: pointer; }\n\n.switch label input[type=checkbox] {\n  opacity: 0;\n  width: 0;\n  height: 0; }\n\n.switch label input[type=checkbox]:checked + .lever {\n  background-color: #84c7c1; }\n\n.switch label input[type=checkbox]:checked + .lever:after {\n  background-color: #26a69a; }\n\n.switch label .lever {\n  content: \"\";\n  display: inline-block;\n  position: relative;\n  width: 40px;\n  height: 15px;\n  background-color: #818181;\n  border-radius: 15px;\n  margin-right: 10px;\n  transition: background 0.3s ease;\n  vertical-align: middle;\n  margin: 0 16px; }\n\n.switch label .lever:after {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  width: 21px;\n  height: 21px;\n  background-color: #F1F1F1;\n  border-radius: 21px;\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4);\n  left: -5px;\n  top: -3px;\n  transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease; }\n\ninput[type=checkbox]:checked:not(:disabled) ~ .lever:active:after {\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(38, 166, 154, 0.1); }\n\ninput[type=checkbox]:not(:disabled) ~ .lever:active:after {\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(0, 0, 0, 0.08); }\n\n.switch label input[type=checkbox]:checked + .lever:after {\n  left: 24px; }\n\n.switch input[type=checkbox][disabled] + .lever {\n  cursor: default; }\n\n.switch label input[type=checkbox][disabled] + .lever:after,\n.switch label input[type=checkbox][disabled]:checked + .lever:after {\n  background-color: #BDBDBD; }\n\n/***************\n  Select Field\n***************/\n.select-label {\n  position: absolute; }\n\n.select-wrapper {\n  position: relative; }\n  .select-wrapper input.select-dropdown {\n    position: relative;\n    cursor: pointer;\n    background-color: transparent;\n    border: none;\n    border-bottom: 1px solid #9e9e9e;\n    outline: none;\n    height: 3rem;\n    line-height: 3rem;\n    width: 100%;\n    font-size: 1rem;\n    margin: 0 0 15px 0;\n    padding: 0;\n    display: block; }\n  .select-wrapper span.caret {\n    color: initial;\n    position: absolute;\n    right: 0;\n    top: 16px;\n    font-size: 10px; }\n    .select-wrapper span.caret.disabled {\n      color: rgba(0, 0, 0, 0.26); }\n  .select-wrapper + label {\n    position: absolute;\n    top: -14px;\n    font-size: 0.8rem; }\n\nselect {\n  display: none; }\n\nselect.browser-default {\n  display: block; }\n\nselect:disabled {\n  color: rgba(0, 0, 0, 0.3); }\n\n.select-wrapper input.select-dropdown:disabled {\n  color: rgba(0, 0, 0, 0.3);\n  cursor: default;\n  -webkit-user-select: none;\n  /* webkit (safari, chrome) browsers */\n  -moz-user-select: none;\n  /* mozilla browsers */\n  -ms-user-select: none;\n  /* IE10+ */\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3); }\n\n.select-wrapper i {\n  color: rgba(0, 0, 0, 0.3); }\n\n.select-dropdown li.disabled {\n  color: rgba(0, 0, 0, 0.3);\n  background-color: transparent; }\n\n/*********************\n      File Input\n**********************/\n.file-field {\n  position: relative; }\n  .file-field .file-path-wrapper {\n    overflow: hidden;\n    padding-left: 10px; }\n  .file-field input.file-path {\n    width: 100%; }\n  .file-field .btn, .file-field .btn-large {\n    float: left;\n    height: 3rem;\n    line-height: 3rem; }\n  .file-field span {\n    cursor: pointer; }\n  .file-field input[type=file] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    font-size: 20px;\n    cursor: pointer;\n    opacity: 0;\n    filter: alpha(opacity=0); }\n\n/***************\n      Range\n***************/\n.range-field {\n  position: relative; }\n\ninput[type=range], input[type=range] + .thumb {\n  cursor: pointer; }\n\ninput[type=range] {\n  position: relative;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  width: 100%;\n  margin: 15px 0px;\n  padding: 0; }\n\ninput[type=range] + .thumb {\n  position: absolute;\n  border: none;\n  height: 0;\n  width: 0;\n  border-radius: 50%;\n  background-color: #26a69a;\n  top: 10px;\n  margin-left: -6px;\n  -webkit-transform-origin: 50% 50%;\n  -moz-transform-origin: 50% 50%;\n  -ms-transform-origin: 50% 50%;\n  -o-transform-origin: 50% 50%;\n  transform-origin: 50% 50%;\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  transform: rotate(-45deg); }\n  input[type=range] + .thumb .value {\n    display: block;\n    width: 30px;\n    text-align: center;\n    color: #26a69a;\n    font-size: 0;\n    -webkit-transform: rotate(45deg);\n    -moz-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    -o-transform: rotate(45deg);\n    transform: rotate(45deg); }\n  input[type=range] + .thumb.active {\n    border-radius: 50% 50% 50% 0; }\n    input[type=range] + .thumb.active .value {\n      color: #fff;\n      margin-left: -1px;\n      margin-top: 8px;\n      font-size: 10px; }\n\ninput[type=range]:focus {\n  outline: none; }\n\ninput[type=range] {\n  -webkit-appearance: none; }\n\ninput[type=range]::-webkit-slider-runnable-track {\n  height: 3px;\n  background: #c2c0c2;\n  border: none; }\n\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background-color: #26a69a;\n  transform-origin: 50% 50%;\n  margin: -5px 0 0 0;\n  -webkit-transition: 0.3s;\n  -moz-transition: 0.3s;\n  -o-transition: 0.3s;\n  -ms-transition: 0.3s;\n  transition: 0.3s; }\n\ninput[type=range]:focus::-webkit-slider-runnable-track {\n  background: #ccc; }\n\ninput[type=range] {\n  /* fix for FF unable to apply focus style bug  */\n  border: 1px solid white;\n  /*required for proper track sizing in FF*/ }\n\ninput[type=range]::-moz-range-track {\n  height: 3px;\n  background: #ddd;\n  border: none; }\n\ninput[type=range]::-moz-range-thumb {\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #26a69a;\n  margin-top: -5px; }\n\n/*hide the outline behind the border*/\ninput[type=range]:-moz-focusring {\n  outline: 1px solid white;\n  outline-offset: -1px; }\n\ninput[type=range]:focus::-moz-range-track {\n  background: #ccc; }\n\ninput[type=range]::-ms-track {\n  height: 3px;\n  /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */\n  background: transparent;\n  /*leave room for the larger thumb to overflow with a transparent border */\n  border-color: transparent;\n  border-width: 6px 0;\n  /*remove default tick marks*/\n  color: transparent; }\n\ninput[type=range]::-ms-fill-lower {\n  background: #777; }\n\ninput[type=range]::-ms-fill-upper {\n  background: #ddd; }\n\ninput[type=range]::-ms-thumb {\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #26a69a; }\n\ninput[type=range]:focus::-ms-fill-lower {\n  background: #888; }\n\ninput[type=range]:focus::-ms-fill-upper {\n  background: #ccc; }\n\n/***************************\n   Text Inputs + Textarea\n****************************/\nselect {\n  background-color: rgba(255, 255, 255, 0.9);\n  width: 100%;\n  padding: 5px;\n  border: 1px solid #f2f2f2;\n  border-radius: 2px;\n  height: 3rem; }\n\n/***************\n    Nav List\n***************/\n.table-of-contents.fixed {\n  position: fixed; }\n.table-of-contents li {\n  padding: 2px 0; }\n.table-of-contents a {\n  display: inline-block;\n  font-weight: 300;\n  color: #757575;\n  padding-left: 20px;\n  height: 1.5rem;\n  line-height: 1.5rem;\n  letter-spacing: .4;\n  display: inline-block; }\n  .table-of-contents a:hover {\n    color: #a8a8a8;\n    padding-left: 19px;\n    border-left: 1px solid #ea4a4f; }\n  .table-of-contents a.active {\n    font-weight: 500;\n    padding-left: 18px;\n    border-left: 2px solid #ea4a4f; }\n\n.side-nav {\n  position: fixed;\n  width: 240px;\n  left: -105%;\n  top: 0;\n  margin: 0;\n  height: 100%;\n  height: calc(100% + 60px);\n  height: -moz-calc(100%);\n  padding-bottom: 60px;\n  background-color: #fff;\n  z-index: 999;\n  overflow-y: auto;\n  will-change: left; }\n  .side-nav.right-aligned {\n    will-change: right;\n    right: -105%;\n    left: auto; }\n  .side-nav .collapsible {\n    margin: 0; }\n  .side-nav li {\n    float: none;\n    padding: 0 15px; }\n    .side-nav li:hover, .side-nav li.active {\n      background-color: #ddd; }\n  .side-nav a {\n    color: #444;\n    display: block;\n    font-size: 1rem;\n    height: 64px;\n    line-height: 64px;\n    padding: 0 15px; }\n\n.drag-target {\n  height: 100%;\n  width: 10px;\n  position: fixed;\n  top: 0;\n  z-index: 998; }\n\n.side-nav.fixed a {\n  display: block;\n  padding: 0 15px;\n  color: #444; }\n\n.side-nav.fixed {\n  left: 0;\n  position: fixed; }\n  .side-nav.fixed.right-aligned {\n    right: 0;\n    left: auto; }\n\n@media only screen and (max-width: 992px) {\n  .side-nav.fixed {\n    left: -105%; }\n    .side-nav.fixed.right-aligned {\n      right: -105%;\n      left: auto; } }\n.side-nav .collapsible-body li.active,\n.side-nav.fixed .collapsible-body li.active {\n  background-color: #ee6e73; }\n  .side-nav .collapsible-body li.active a,\n  .side-nav.fixed .collapsible-body li.active a {\n    color: #fff; }\n\n#sidenav-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 120vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 997;\n  will-change: opacity; }\n\n/*\n    @license\n    Copyright (c) 2014 The Polymer Project Authors. All rights reserved.\n    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt\n    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt\n    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt\n    Code distributed by Google as part of the polymer project is also\n    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt\n */\n/**************************/\n/* STYLES FOR THE SPINNER */\n/**************************/\n/*\n * Constants:\n *      STROKEWIDTH = 3px\n *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)\n *      ARCTIME     = 1333ms (time it takes to expand and contract arc)\n *      ARCSTARTROT = 216 degrees (how much the start location of the arc\n *                                should rotate each time, 216 gives us a\n *                                5 pointed star shape (it's 360/5 * 3).\n *                                For a 7 pointed star, we might do\n *                                360/7 * 3 = 154.286)\n *      CONTAINERWIDTH = 28px\n *      SHRINK_TIME = 400ms\n */\n.preloader-wrapper {\n  display: inline-block;\n  position: relative;\n  width: 48px;\n  height: 48px; }\n  .preloader-wrapper.small {\n    width: 36px;\n    height: 36px; }\n  .preloader-wrapper.big {\n    width: 64px;\n    height: 64px; }\n  .preloader-wrapper.active {\n    /* duration: 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */\n    -webkit-animation: container-rotate 1568ms linear infinite;\n    animation: container-rotate 1568ms linear infinite; }\n\n@-webkit-keyframes container-rotate {\n  to {\n    -webkit-transform: rotate(360deg); } }\n@keyframes container-rotate {\n  to {\n    transform: rotate(360deg); } }\n.spinner-layer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  border-color: #26a69a; }\n\n.spinner-blue,\n.spinner-blue-only {\n  border-color: #4285f4; }\n\n.spinner-red,\n.spinner-red-only {\n  border-color: #db4437; }\n\n.spinner-yellow,\n.spinner-yellow-only {\n  border-color: #f4b400; }\n\n.spinner-green,\n.spinner-green-only {\n  border-color: #0f9d58; }\n\n/**\n * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):\n *\n * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't\n * guarantee that the animation will start _exactly_ after that value. So we avoid using\n * animation-delay and instead set custom keyframes for each color (as redundant as it\n * seems).\n *\n * We write out each animation in full (instead of separating animation-name,\n * animation-duration, etc.) because under the polyfill, Safari does not recognize those\n * specific properties properly, treats them as -webkit-animation, and overrides the\n * other animation rules. See https://github.com/Polymer/platform/issues/53.\n */\n.active .spinner-layer.spinner-blue {\n  /* durations: 4 * ARCTIME */\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.active .spinner-layer.spinner-red {\n  /* durations: 4 * ARCTIME */\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.active .spinner-layer.spinner-yellow {\n  /* durations: 4 * ARCTIME */\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.active .spinner-layer.spinner-green {\n  /* durations: 4 * ARCTIME */\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.active .spinner-layer,\n.active .spinner-layer.spinner-blue-only,\n.active .spinner-layer.spinner-red-only,\n.active .spinner-layer.spinner-yellow-only,\n.active .spinner-layer.spinner-green-only {\n  /* durations: 4 * ARCTIME */\n  opacity: 1;\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n@-webkit-keyframes fill-unfill-rotate {\n  12.5% {\n    -webkit-transform: rotate(135deg); }\n  /* 0.5 * ARCSIZE */\n  25% {\n    -webkit-transform: rotate(270deg); }\n  /* 1   * ARCSIZE */\n  37.5% {\n    -webkit-transform: rotate(405deg); }\n  /* 1.5 * ARCSIZE */\n  50% {\n    -webkit-transform: rotate(540deg); }\n  /* 2   * ARCSIZE */\n  62.5% {\n    -webkit-transform: rotate(675deg); }\n  /* 2.5 * ARCSIZE */\n  75% {\n    -webkit-transform: rotate(810deg); }\n  /* 3   * ARCSIZE */\n  87.5% {\n    -webkit-transform: rotate(945deg); }\n  /* 3.5 * ARCSIZE */\n  to {\n    -webkit-transform: rotate(1080deg); }\n  /* 4   * ARCSIZE */ }\n@keyframes fill-unfill-rotate {\n  12.5% {\n    transform: rotate(135deg); }\n  /* 0.5 * ARCSIZE */\n  25% {\n    transform: rotate(270deg); }\n  /* 1   * ARCSIZE */\n  37.5% {\n    transform: rotate(405deg); }\n  /* 1.5 * ARCSIZE */\n  50% {\n    transform: rotate(540deg); }\n  /* 2   * ARCSIZE */\n  62.5% {\n    transform: rotate(675deg); }\n  /* 2.5 * ARCSIZE */\n  75% {\n    transform: rotate(810deg); }\n  /* 3   * ARCSIZE */\n  87.5% {\n    transform: rotate(945deg); }\n  /* 3.5 * ARCSIZE */\n  to {\n    transform: rotate(1080deg); }\n  /* 4   * ARCSIZE */ }\n@-webkit-keyframes blue-fade-in-out {\n  from {\n    opacity: 1; }\n  25% {\n    opacity: 1; }\n  26% {\n    opacity: 0; }\n  89% {\n    opacity: 0; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 1; } }\n@keyframes blue-fade-in-out {\n  from {\n    opacity: 1; }\n  25% {\n    opacity: 1; }\n  26% {\n    opacity: 0; }\n  89% {\n    opacity: 0; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 1; } }\n@-webkit-keyframes red-fade-in-out {\n  from {\n    opacity: 0; }\n  15% {\n    opacity: 0; }\n  25% {\n    opacity: 1; }\n  50% {\n    opacity: 1; }\n  51% {\n    opacity: 0; } }\n@keyframes red-fade-in-out {\n  from {\n    opacity: 0; }\n  15% {\n    opacity: 0; }\n  25% {\n    opacity: 1; }\n  50% {\n    opacity: 1; }\n  51% {\n    opacity: 0; } }\n@-webkit-keyframes yellow-fade-in-out {\n  from {\n    opacity: 0; }\n  40% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  75% {\n    opacity: 1; }\n  76% {\n    opacity: 0; } }\n@keyframes yellow-fade-in-out {\n  from {\n    opacity: 0; }\n  40% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  75% {\n    opacity: 1; }\n  76% {\n    opacity: 0; } }\n@-webkit-keyframes green-fade-in-out {\n  from {\n    opacity: 0; }\n  65% {\n    opacity: 0; }\n  75% {\n    opacity: 1; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n@keyframes green-fade-in-out {\n  from {\n    opacity: 0; }\n  65% {\n    opacity: 0; }\n  75% {\n    opacity: 1; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n/**\n * Patch the gap that appear between the two adjacent div.circle-clipper while the\n * spinner is rotating (appears on Chrome 38, Safari 7.1, and IE 11).\n */\n.gap-patch {\n  position: absolute;\n  top: 0;\n  left: 45%;\n  width: 10%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit; }\n\n.gap-patch .circle {\n  width: 1000%;\n  left: -450%; }\n\n.circle-clipper {\n  display: inline-block;\n  position: relative;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit; }\n  .circle-clipper .circle {\n    width: 200%;\n    height: 100%;\n    border-width: 3px;\n    /* STROKEWIDTH */\n    border-style: solid;\n    border-color: inherit;\n    border-bottom-color: transparent !important;\n    border-radius: 50%;\n    -webkit-animation: none;\n    animation: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0; }\n  .circle-clipper.left .circle {\n    left: 0;\n    border-right-color: transparent !important;\n    -webkit-transform: rotate(129deg);\n    transform: rotate(129deg); }\n  .circle-clipper.right .circle {\n    left: -100%;\n    border-left-color: transparent !important;\n    -webkit-transform: rotate(-129deg);\n    transform: rotate(-129deg); }\n\n.active .circle-clipper.left .circle {\n  /* duration: ARCTIME */\n  -webkit-animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.active .circle-clipper.right .circle {\n  /* duration: ARCTIME */\n  -webkit-animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n@-webkit-keyframes left-spin {\n  from {\n    -webkit-transform: rotate(130deg); }\n  50% {\n    -webkit-transform: rotate(-5deg); }\n  to {\n    -webkit-transform: rotate(130deg); } }\n@keyframes left-spin {\n  from {\n    transform: rotate(130deg); }\n  50% {\n    transform: rotate(-5deg); }\n  to {\n    transform: rotate(130deg); } }\n@-webkit-keyframes right-spin {\n  from {\n    -webkit-transform: rotate(-130deg); }\n  50% {\n    -webkit-transform: rotate(5deg); }\n  to {\n    -webkit-transform: rotate(-130deg); } }\n@keyframes right-spin {\n  from {\n    transform: rotate(-130deg); }\n  50% {\n    transform: rotate(5deg); }\n  to {\n    transform: rotate(-130deg); } }\n#spinnerContainer.cooldown {\n  /* duration: SHRINK_TIME */\n  -webkit-animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);\n  animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1); }\n\n@-webkit-keyframes fade-out {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n@keyframes fade-out {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n.slider {\n  position: relative;\n  height: 400px;\n  width: 100%; }\n  .slider.fullscreen {\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n    .slider.fullscreen ul.slides {\n      height: 100%; }\n    .slider.fullscreen ul.indicators {\n      z-index: 2;\n      bottom: 30px; }\n  .slider .slides {\n    background-color: #9e9e9e;\n    margin: 0;\n    height: 400px; }\n    .slider .slides li {\n      opacity: 0;\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 1;\n      width: 100%;\n      height: inherit;\n      overflow: hidden; }\n      .slider .slides li img {\n        height: 100%;\n        width: 100%;\n        background-size: cover;\n        background-position: center; }\n      .slider .slides li .caption {\n        color: #fff;\n        position: absolute;\n        top: 15%;\n        left: 15%;\n        width: 70%;\n        opacity: 0; }\n        .slider .slides li .caption p {\n          color: #e0e0e0; }\n      .slider .slides li.active {\n        z-index: 2; }\n  .slider .indicators {\n    position: absolute;\n    text-align: center;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: 0; }\n    .slider .indicators .indicator-item {\n      display: inline-block;\n      position: relative;\n      cursor: pointer;\n      height: 16px;\n      width: 16px;\n      margin: 0 12px;\n      background-color: #e0e0e0;\n      -webkit-transition: background-color 0.3s;\n      -moz-transition: background-color 0.3s;\n      -o-transition: background-color 0.3s;\n      -ms-transition: background-color 0.3s;\n      transition: background-color 0.3s;\n      border-radius: 50%; }\n      .slider .indicators .indicator-item.active {\n        background-color: #4CAF50; }\n\n/* ==========================================================================\n   $BASE-PICKER\n   ========================================================================== */\n/**\n * Note: the root picker element should *NOT* be styled more than what's here.\n */\n.picker {\n  font-size: 16px;\n  text-align: left;\n  line-height: 1.2;\n  color: #000000;\n  position: absolute;\n  z-index: 10000;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/**\n * The picker input element.\n */\n.picker__input {\n  cursor: default; }\n\n/**\n * When the picker is opened, the input element is \"activated\".\n */\n.picker__input.picker__input--active {\n  border-color: #0089ec; }\n\n/**\n * The holder is the only \"scrollable\" top-level container element.\n */\n.picker__holder {\n  width: 100%;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\n\n/*!\n * Default mobile-first, responsive styling for pickadate.js\n * Demo: http://amsul.github.io/pickadate.js\n */\n/**\n * Note: the root picker element should *NOT* be styled more than what's here.\n */\n/**\n * Make the holder and frame fullscreen.\n */\n.picker__holder,\n.picker__frame {\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 100%; }\n\n/**\n * The holder should overlay the entire screen.\n */\n.picker__holder {\n  position: fixed;\n  -webkit-transition: background 0.15s ease-out, top 0s 0.15s;\n  -moz-transition: background 0.15s ease-out, top 0s 0.15s;\n  transition: background 0.15s ease-out, top 0s 0.15s;\n  -webkit-backface-visibility: hidden; }\n\n/**\n * The frame that bounds the box contents of the picker.\n */\n.picker__frame {\n  position: absolute;\n  margin: 0 auto;\n  min-width: 256px;\n  width: 300px;\n  max-height: 350px;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n  -moz-opacity: 0;\n  opacity: 0;\n  -webkit-transition: all 0.15s ease-out;\n  -moz-transition: all 0.15s ease-out;\n  transition: all 0.15s ease-out; }\n\n@media (min-height: 28.875em) {\n  .picker__frame {\n    overflow: visible;\n    top: auto;\n    bottom: -100%;\n    max-height: 80%; } }\n@media (min-height: 40.125em) {\n  .picker__frame {\n    margin-bottom: 7.5%; } }\n/**\n * The wrapper sets the stage to vertically align the box contents.\n */\n.picker__wrap {\n  display: table;\n  width: 100%;\n  height: 100%; }\n\n@media (min-height: 28.875em) {\n  .picker__wrap {\n    display: block; } }\n/**\n * The box contains all the picker contents.\n */\n.picker__box {\n  background: #ffffff;\n  display: table-cell;\n  vertical-align: middle; }\n\n@media (min-height: 28.875em) {\n  .picker__box {\n    display: block;\n    border: 1px solid #777777;\n    border-top-color: #898989;\n    border-bottom-width: 0;\n    -webkit-border-radius: 5px 5px 0 0;\n    -moz-border-radius: 5px 5px 0 0;\n    border-radius: 5px 5px 0 0;\n    -webkit-box-shadow: 0 12px 36px 16px rgba(0, 0, 0, 0.24);\n    -moz-box-shadow: 0 12px 36px 16px rgba(0, 0, 0, 0.24);\n    box-shadow: 0 12px 36px 16px rgba(0, 0, 0, 0.24); } }\n/**\n * When the picker opens...\n */\n.picker--opened .picker__holder {\n  top: 0;\n  background: transparent;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr=#1E000000,endColorstr=#1E000000)\";\n  zoom: 1;\n  background: rgba(0, 0, 0, 0.32);\n  -webkit-transition: background 0.15s ease-out;\n  -moz-transition: background 0.15s ease-out;\n  transition: background 0.15s ease-out; }\n\n.picker--opened .picker__frame {\n  top: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  filter: alpha(opacity=100);\n  -moz-opacity: 1;\n  opacity: 1; }\n\n@media (min-height: 35.875em) {\n  .picker--opened .picker__frame {\n    top: 10%;\n    bottom: 20% auto; } }\n/**\n * For `large` screens, transform into an inline picker.\n */\n/* ==========================================================================\n   CUSTOM MATERIALIZE STYLES\n   ========================================================================== */\n.picker__input.picker__input--active {\n  border-color: #E3F2FD; }\n\n.picker__frame {\n  margin: 0 auto;\n  max-width: 325px; }\n\n@media (min-height: 38.875em) {\n  .picker--opened .picker__frame {\n    top: 10%;\n    bottom: auto; } }\n/* ==========================================================================\n   $BASE-DATE-PICKER\n   ========================================================================== */\n/**\n * The picker box.\n */\n.picker__box {\n  padding: 0 1em; }\n\n/**\n * The header containing the month and year stuff.\n */\n.picker__header {\n  text-align: center;\n  position: relative;\n  margin-top: .75em; }\n\n/**\n * The month and year labels.\n */\n.picker__month,\n.picker__year {\n  display: inline-block;\n  margin-left: .25em;\n  margin-right: .25em; }\n\n/**\n * The month and year selectors.\n */\n.picker__select--month,\n.picker__select--year {\n  height: 2em;\n  padding: 0;\n  margin-left: .25em;\n  margin-right: .25em; }\n\n.picker__select--month.browser-default {\n  display: inline;\n  background-color: #FFFFFF;\n  width: 40%; }\n\n.picker__select--year.browser-default {\n  display: inline;\n  background-color: #FFFFFF;\n  width: 25%; }\n\n.picker__select--month:focus,\n.picker__select--year:focus {\n  border-color: rgba(0, 0, 0, 0.05); }\n\n/**\n * The month navigation buttons.\n */\n.picker__nav--prev,\n.picker__nav--next {\n  position: absolute;\n  padding: .5em 1.25em;\n  width: 1em;\n  height: 1em;\n  box-sizing: content-box;\n  top: -0.25em; }\n\n.picker__nav--prev {\n  left: -1em;\n  padding-right: 1.25em; }\n\n.picker__nav--next {\n  right: -1em;\n  padding-left: 1.25em; }\n\n.picker__nav--disabled,\n.picker__nav--disabled:hover,\n.picker__nav--disabled:before,\n.picker__nav--disabled:before:hover {\n  cursor: default;\n  background: none;\n  border-right-color: #f5f5f5;\n  border-left-color: #f5f5f5; }\n\n/**\n * The calendar table of dates\n */\n.picker__table {\n  text-align: center;\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: fixed;\n  font-size: 1rem;\n  width: 100%;\n  margin-top: .75em;\n  margin-bottom: .5em; }\n\n.picker__table th, .picker__table td {\n  text-align: center; }\n\n.picker__table td {\n  margin: 0;\n  padding: 0; }\n\n/**\n * The weekday labels\n */\n.picker__weekday {\n  width: 14.285714286%;\n  font-size: .75em;\n  padding-bottom: .25em;\n  color: #999999;\n  font-weight: 500;\n  /* Increase the spacing a tad */ }\n\n@media (min-height: 33.875em) {\n  .picker__weekday {\n    padding-bottom: .5em; } }\n/**\n * The days on the calendar\n */\n.picker__day--today {\n  position: relative;\n  color: #595959;\n  letter-spacing: -.3;\n  padding: .75rem 0;\n  font-weight: 400;\n  border: 1px solid transparent; }\n\n.picker__day--disabled:before {\n  border-top-color: #aaaaaa; }\n\n.picker__day--infocus:hover {\n  cursor: pointer;\n  color: #000;\n  font-weight: 500; }\n\n.picker__day--outfocus {\n  display: none;\n  padding: .75rem 0;\n  color: #fff; }\n\n.picker__day--outfocus:hover {\n  cursor: pointer;\n  color: #dddddd;\n  font-weight: 500; }\n\n.picker__day--highlighted:hover,\n.picker--focused .picker__day--highlighted {\n  cursor: pointer; }\n\n.picker__day--selected,\n.picker__day--selected:hover,\n.picker--focused .picker__day--selected {\n  border-radius: 50%;\n  -webkit-transform: scale(0.75);\n  -moz-transform: scale(0.75);\n  -ms-transform: scale(0.75);\n  -o-transform: scale(0.75);\n  transform: scale(0.75);\n  background: #0089ec;\n  color: #ffffff; }\n\n.picker__day--disabled,\n.picker__day--disabled:hover,\n.picker--focused .picker__day--disabled {\n  background: #f5f5f5;\n  border-color: #f5f5f5;\n  color: #dddddd;\n  cursor: default; }\n\n.picker__day--highlighted.picker__day--disabled,\n.picker__day--highlighted.picker__day--disabled:hover {\n  background: #bbbbbb; }\n\n/**\n * The footer containing the \"today\", \"clear\", and \"close\" buttons.\n */\n.picker__footer {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.picker__button--today,\n.picker__button--clear,\n.picker__button--close {\n  border: 1px solid #ffffff;\n  background: #ffffff;\n  font-size: .8em;\n  padding: .66em 0;\n  font-weight: bold;\n  width: 33%;\n  display: inline-block;\n  vertical-align: bottom; }\n\n.picker__button--today:hover,\n.picker__button--clear:hover,\n.picker__button--close:hover {\n  cursor: pointer;\n  color: #000000;\n  background: #b1dcfb;\n  border-bottom-color: #b1dcfb; }\n\n.picker__button--today:focus,\n.picker__button--clear:focus,\n.picker__button--close:focus {\n  background: #b1dcfb;\n  border-color: rgba(0, 0, 0, 0.05);\n  outline: none; }\n\n.picker__button--today:before,\n.picker__button--clear:before,\n.picker__button--close:before {\n  position: relative;\n  display: inline-block;\n  height: 0; }\n\n.picker__button--today:before,\n.picker__button--clear:before {\n  content: \" \";\n  margin-right: .45em; }\n\n.picker__button--today:before {\n  top: -0.05em;\n  width: 0;\n  border-top: 0.66em solid #0059bc;\n  border-left: .66em solid transparent; }\n\n.picker__button--clear:before {\n  top: -0.25em;\n  width: .66em;\n  border-top: 3px solid #ee2200; }\n\n.picker__button--close:before {\n  content: \"\\D7\";\n  top: -0.1em;\n  vertical-align: top;\n  font-size: 1.1em;\n  margin-right: .35em;\n  color: #777777; }\n\n.picker__button--today[disabled],\n.picker__button--today[disabled]:hover {\n  background: #f5f5f5;\n  border-color: #f5f5f5;\n  color: #dddddd;\n  cursor: default; }\n\n.picker__button--today[disabled]:before {\n  border-top-color: #aaaaaa; }\n\n/* ==========================================================================\n   CUSTOM MATERIALIZE STYLES\n   ========================================================================== */\n.picker__box {\n  border-radius: 2px;\n  overflow: hidden; }\n\n.picker__date-display {\n  text-align: center;\n  background-color: #26a69a;\n  color: #fff;\n  padding-bottom: 15px;\n  font-weight: 300; }\n\n.picker__nav--prev:hover,\n.picker__nav--next:hover {\n  cursor: pointer;\n  color: #000000;\n  background: #a1ded8; }\n\n.picker__weekday-display {\n  background-color: #1f897f;\n  padding: 10px;\n  font-weight: 200;\n  letter-spacing: .5;\n  font-size: 1rem;\n  margin-bottom: 15px; }\n\n.picker__month-display {\n  text-transform: uppercase;\n  font-size: 2rem; }\n\n.picker__day-display {\n  font-size: 4.5rem;\n  font-weight: 400; }\n\n.picker__year-display {\n  font-size: 1.8rem;\n  color: rgba(255, 255, 255, 0.4); }\n\n.picker__box {\n  padding: 0; }\n\n.picker__calendar-container {\n  padding: 0 1rem; }\n  .picker__calendar-container thead {\n    border: none; }\n\n.picker__table {\n  margin-top: 0;\n  margin-bottom: .5em; }\n\n.picker__day--infocus {\n  color: #595959;\n  letter-spacing: -.3;\n  padding: .75rem 0;\n  font-weight: 400;\n  border: 1px solid transparent; }\n\n.picker__day.picker__day--today {\n  color: #26a69a; }\n\n.picker__day.picker__day--today.picker__day--selected {\n  color: #fff; }\n\n.picker__weekday {\n  font-size: .9rem; }\n\n.picker__day--selected,\n.picker__day--selected:hover,\n.picker--focused .picker__day--selected {\n  border-radius: 50%;\n  -webkit-transform: scale(0.9);\n  -moz-transform: scale(0.9);\n  -ms-transform: scale(0.9);\n  -o-transform: scale(0.9);\n  transform: scale(0.9);\n  background-color: #26a69a;\n  color: #ffffff; }\n  .picker__day--selected.picker__day--outfocus,\n  .picker__day--selected:hover.picker__day--outfocus,\n  .picker--focused .picker__day--selected.picker__day--outfocus {\n    background-color: #a1ded8; }\n\n.picker__footer {\n  text-align: right;\n  padding: 5px 10px; }\n\n.picker__close, .picker__today {\n  font-size: 1.1rem;\n  padding: 0 1rem;\n  color: #26a69a; }\n\n.picker__nav--prev:before,\n.picker__nav--next:before {\n  content: \" \";\n  border-top: .5em solid transparent;\n  border-bottom: .5em solid transparent;\n  border-right: 0.75em solid #676767;\n  width: 0;\n  height: 0;\n  display: block;\n  margin: 0 auto; }\n\n.picker__nav--next:before {\n  border-right: 0;\n  border-left: 0.75em solid #676767; }\n\nbutton.picker__today:focus, button.picker__clear:focus, button.picker__close:focus {\n  background-color: #a1ded8; }\n\n/* ==========================================================================\n   $BASE-TIME-PICKER\n   ========================================================================== */\n/**\n * The list of times.\n */\n.picker__list {\n  list-style: none;\n  padding: 0.75em 0 4.2em;\n  margin: 0; }\n\n/**\n * The times on the clock.\n */\n.picker__list-item {\n  border-bottom: 1px solid #dddddd;\n  border-top: 1px solid #dddddd;\n  margin-bottom: -1px;\n  position: relative;\n  background: #ffffff;\n  padding: .75em 1.25em; }\n\n@media (min-height: 46.75em) {\n  .picker__list-item {\n    padding: .5em 1em; } }\n/* Hovered time */\n.picker__list-item:hover {\n  cursor: pointer;\n  color: #000000;\n  background: #b1dcfb;\n  border-color: #0089ec;\n  z-index: 10; }\n\n/* Highlighted and hovered/focused time */\n.picker__list-item--highlighted {\n  border-color: #0089ec;\n  z-index: 10; }\n\n.picker__list-item--highlighted:hover,\n.picker--focused .picker__list-item--highlighted {\n  cursor: pointer;\n  color: #000000;\n  background: #b1dcfb; }\n\n/* Selected and hovered/focused time */\n.picker__list-item--selected,\n.picker__list-item--selected:hover,\n.picker--focused .picker__list-item--selected {\n  background: #0089ec;\n  color: #ffffff;\n  z-index: 10; }\n\n/* Disabled time */\n.picker__list-item--disabled,\n.picker__list-item--disabled:hover,\n.picker--focused .picker__list-item--disabled {\n  background: #f5f5f5;\n  border-color: #f5f5f5;\n  color: #dddddd;\n  cursor: default;\n  border-color: #dddddd;\n  z-index: auto; }\n\n/**\n * The clear button\n */\n.picker--time .picker__button--clear {\n  display: block;\n  width: 80%;\n  margin: 1em auto 0;\n  padding: 1em 1.25em;\n  background: none;\n  border: 0;\n  font-weight: 500;\n  font-size: .67em;\n  text-align: center;\n  text-transform: uppercase;\n  color: #666; }\n\n.picker--time .picker__button--clear:hover,\n.picker--time .picker__button--clear:focus {\n  color: #000000;\n  background: #b1dcfb;\n  background: #ee2200;\n  border-color: #ee2200;\n  cursor: pointer;\n  color: #ffffff;\n  outline: none; }\n\n.picker--time .picker__button--clear:before {\n  top: -0.25em;\n  color: #666;\n  font-size: 1.25em;\n  font-weight: bold; }\n\n.picker--time .picker__button--clear:hover:before,\n.picker--time .picker__button--clear:focus:before {\n  color: #ffffff; }\n\n/* ==========================================================================\n   $DEFAULT-TIME-PICKER\n   ========================================================================== */\n/**\n * The frame the bounds the time picker.\n */\n.picker--time .picker__frame {\n  min-width: 256px;\n  max-width: 320px; }\n\n/**\n * The picker box.\n */\n.picker--time .picker__box {\n  font-size: 1em;\n  background: #f2f2f2;\n  padding: 0; }\n\n@media (min-height: 40.125em) {\n  .picker--time .picker__box {\n    margin-bottom: 5em; } }\n", ""]);

	// exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2f198897e99efe0341f785451113d7a2.eot";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3892a10d0a197cf23e4af7c2786a8177.woff2";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4c874dce20349e350c4aefa6474221c1.woff";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7f61c991ac6c7c7f2951191ffc5042e0.ttf";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c6e817fa4c0e9a14c2bc0e4d2a518695.svg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "954bbdeb86483e4ffea00c4591530ece.woff2";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7500519de3d82e33d1587f8042e2afcb.woff";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "94998475f6aea65f558494802416c1cf.ttf";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "69f8a0617ac472f78e45841323a3df9e.woff2";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3b813c2ae0d04909a33a18d792912ee7.woff";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "46e48ce0628835f68a7369d0254e4283.ttf";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2751ee43015f9884c3642f103b7f70c9.woff2";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ba3dcd8903e3d0af5de7792777f8ae0d.woff";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "df7b648ce5356ea1ebce435b3459fd60.ttf";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "574fd0b50367f886d359e8264938fc37.woff2";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fc78759e93a6cac50458610e3d9d63a0.woff";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "894a2ede85a483bf9bedefd4db45cdb9.ttf";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "39b2c3031be6b4ea96e2e3e95d307814.woff2";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dc81817def276b4f21395f7ea5e88dcd.woff";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e31fcf1885e371e19f5786c2bdfeae1b.ttf";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Materialize v0.97.1 (http://materializecss.com)
	 * Copyright 2014-2015 Materialize
	 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
	 */
	/*
	 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
	 *
	 * Uses the built in easing capabilities added In jQuery 1.1
	 * to offer multiple easing options
	 *
	 * TERMS OF USE - jQuery Easing
	 *
	 * Open source under the BSD License.
	 *
	 * Copyright © 2008 George McGinley Smith
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without modification,
	 * are permitted provided that the following conditions are met:
	 *
	 * Redistributions of source code must retain the above copyright notice, this list of
	 * conditions and the following disclaimer.
	 * Redistributions in binary form must reproduce the above copyright notice, this list
	 * of conditions and the following disclaimer in the documentation and/or other materials
	 * provided with the distribution.
	 *
	 * Neither the name of the author nor the names of contributors may be used to endorse
	 * or promote products derived from this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
	 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
	 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
	 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
	 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
	 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
	 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
	 * OF THE POSSIBILITY OF SUCH DAMAGE.
	 *
	*/

	// t: current time, b: begInnIng value, c: change In value, d: duration
	jQuery.easing['jswing'] = jQuery.easing['swing'];

	jQuery.extend( jQuery.easing,
	{
		def: 'easeOutQuad',
		swing: function (x, t, b, c, d) {
			//alert(jQuery.easing.default);
			return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
		},
		easeInQuad: function (x, t, b, c, d) {
			return c*(t/=d)*t + b;
		},
		easeOutQuad: function (x, t, b, c, d) {
			return -c *(t/=d)*(t-2) + b;
		},
		easeInOutQuad: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) return c/2*t*t + b;
			return -c/2 * ((--t)*(t-2) - 1) + b;
		},
		easeInCubic: function (x, t, b, c, d) {
			return c*(t/=d)*t*t + b;
		},
		easeOutCubic: function (x, t, b, c, d) {
			return c*((t=t/d-1)*t*t + 1) + b;
		},
		easeInOutCubic: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) return c/2*t*t*t + b;
			return c/2*((t-=2)*t*t + 2) + b;
		},
		easeInQuart: function (x, t, b, c, d) {
			return c*(t/=d)*t*t*t + b;
		},
		easeOutQuart: function (x, t, b, c, d) {
			return -c * ((t=t/d-1)*t*t*t - 1) + b;
		},
		easeInOutQuart: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
			return -c/2 * ((t-=2)*t*t*t - 2) + b;
		},
		easeInQuint: function (x, t, b, c, d) {
			return c*(t/=d)*t*t*t*t + b;
		},
		easeOutQuint: function (x, t, b, c, d) {
			return c*((t=t/d-1)*t*t*t*t + 1) + b;
		},
		easeInOutQuint: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
			return c/2*((t-=2)*t*t*t*t + 2) + b;
		},
		easeInSine: function (x, t, b, c, d) {
			return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
		},
		easeOutSine: function (x, t, b, c, d) {
			return c * Math.sin(t/d * (Math.PI/2)) + b;
		},
		easeInOutSine: function (x, t, b, c, d) {
			return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
		},
		easeInExpo: function (x, t, b, c, d) {
			return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
		},
		easeOutExpo: function (x, t, b, c, d) {
			return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
		},
		easeInOutExpo: function (x, t, b, c, d) {
			if (t==0) return b;
			if (t==d) return b+c;
			if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
			return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
		},
		easeInCirc: function (x, t, b, c, d) {
			return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
		},
		easeOutCirc: function (x, t, b, c, d) {
			return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
		},
		easeInOutCirc: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
			return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
		},
		easeInElastic: function (x, t, b, c, d) {
			var s=1.70158;var p=0;var a=c;
			if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
			if (a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		},
		easeOutElastic: function (x, t, b, c, d) {
			var s=1.70158;var p=0;var a=c;
			if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
			if (a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
		},
		easeInOutElastic: function (x, t, b, c, d) {
			var s=1.70158;var p=0;var a=c;
			if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
			if (a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
			return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
		},
		easeInBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c*(t/=d)*t*((s+1)*t - s) + b;
		},
		easeOutBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
		},
		easeInOutBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
			return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
		},
		easeInBounce: function (x, t, b, c, d) {
			return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
		},
		easeOutBounce: function (x, t, b, c, d) {
			if ((t/=d) < (1/2.75)) {
				return c*(7.5625*t*t) + b;
			} else if (t < (2/2.75)) {
				return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
			} else if (t < (2.5/2.75)) {
				return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
			} else {
				return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
			}
		},
		easeInOutBounce: function (x, t, b, c, d) {
			if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
			return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
		}
	});

	/*
	 *
	 * TERMS OF USE - EASING EQUATIONS
	 *
	 * Open source under the BSD License.
	 *
	 * Copyright © 2001 Robert Penner
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without modification,
	 * are permitted provided that the following conditions are met:
	 *
	 * Redistributions of source code must retain the above copyright notice, this list of
	 * conditions and the following disclaimer.
	 * Redistributions in binary form must reproduce the above copyright notice, this list
	 * of conditions and the following disclaimer in the documentation and/or other materials
	 * provided with the distribution.
	 *
	 * Neither the name of the author nor the names of contributors may be used to endorse
	 * or promote products derived from this software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
	 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
	 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
	 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
	 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
	 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
	 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
	 * OF THE POSSIBILITY OF SUCH DAMAGE.
	 *
	 */;    // Custom Easing
	    jQuery.extend( jQuery.easing,
	    {
	      easeInOutMaterial: function (x, t, b, c, d) {
	        if ((t/=d/2) < 1) return c/2*t*t + b;
	        return c/4*((t-=2)*t*t + 2) + b;
	      }
	    });

	;/*! VelocityJS.org (1.2.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
	/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
	!function(e){function t(e){var t=e.length,r=$.type(e);return"function"===r||$.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===r||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var $=function(e,t){return new $.fn.init(e,t)};$.isWindow=function(e){return null!=e&&e==e.window},$.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?a[o.call(e)]||"object":typeof e},$.isArray=Array.isArray||function(e){return"array"===$.type(e)},$.isPlainObject=function(e){var t;if(!e||"object"!==$.type(e)||e.nodeType||$.isWindow(e))return!1;try{if(e.constructor&&!n.call(e,"constructor")&&!n.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}for(t in e);return void 0===t||n.call(e,t)},$.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},$.data=function(e,t,a){if(void 0===a){var n=e[$.expando],o=n&&r[n];if(void 0===t)return o;if(o&&t in o)return o[t]}else if(void 0!==t){var n=e[$.expando]||(e[$.expando]=++$.uuid);return r[n]=r[n]||{},r[n][t]=a,a}},$.removeData=function(e,t){var a=e[$.expando],n=a&&r[a];n&&$.each(t,function(e,t){delete n[t]})},$.extend=function(){var e,t,r,a,n,o,i=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof i&&(u=i,i=arguments[s]||{},s++),"object"!=typeof i&&"function"!==$.type(i)&&(i={}),s===l&&(i=this,s--);l>s;s++)if(null!=(n=arguments[s]))for(a in n)e=i[a],r=n[a],i!==r&&(u&&r&&($.isPlainObject(r)||(t=$.isArray(r)))?(t?(t=!1,o=e&&$.isArray(e)?e:[]):o=e&&$.isPlainObject(e)?e:{},i[a]=$.extend(u,o,r)):void 0!==r&&(i[a]=r));return i},$.queue=function(e,r,a){function n(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){r=(r||"fx")+"queue";var o=$.data(e,r);return a?(!o||$.isArray(a)?o=$.data(e,r,n(a)):o.push(a),o):o||[]}},$.dequeue=function(e,t){$.each(e.nodeType?[e]:e,function(e,r){t=t||"fx";var a=$.queue(r,t),n=a.shift();"inprogress"===n&&(n=a.shift()),n&&("fx"===t&&a.unshift("inprogress"),n.call(r,function(){$.dequeue(r,t)}))})},$.fn=$.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),r=this.offset(),a=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:$(e).offset();return r.top-=parseFloat(t.style.marginTop)||0,r.left-=parseFloat(t.style.marginLeft)||0,e.style&&(a.top+=parseFloat(e.style.borderTopWidth)||0,a.left+=parseFloat(e.style.borderLeftWidth)||0),{top:r.top-a.top,left:r.left-a.left}}};var r={};$.expando="velocity"+(new Date).getTime(),$.uuid=0;for(var a={},n=a.hasOwnProperty,o=a.toString,i="Boolean Number String Function Array Date RegExp Object Error".split(" "),s=0;s<i.length;s++)a["[object "+i[s]+"]"]=i[s].toLowerCase();$.fn.init.prototype=$.fn,e.Velocity={Utilities:$}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return g.isWrapped(e)?e=[].slice.call(e):g.isNode(e)&&(e=[e]),e}function i(e){var t=$.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return g.isString(e)?v.Easings[e]||(r=!1):r=g.isArray(e)&&1===e.length?s.apply(null,e):g.isArray(e)&&2===e.length?b.apply(null,e.concat([t])):g.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=v.Easings[v.defaults.easing]?v.defaults.easing:h),r}function c(e){if(e){var t=(new Date).getTime(),r=v.State.calls.length;r>1e4&&(v.State.calls=n(v.State.calls));for(var o=0;r>o;o++)if(v.State.calls[o]){var s=v.State.calls[o],l=s[0],u=s[2],f=s[3],d=!!f,m=null;f||(f=v.State.calls[o][3]=t-16);for(var y=Math.min((t-f)/u.duration,1),h=0,b=l.length;b>h;h++){var S=l[h],w=S.element;if(i(w)){var V=!1;if(u.display!==a&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var C=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];$.each(C,function(e,t){x.setPropertyValue(w,"display",t)})}x.setPropertyValue(w,"display",u.display)}u.visibility!==a&&"hidden"!==u.visibility&&x.setPropertyValue(w,"visibility",u.visibility);for(var T in S)if("element"!==T){var k=S[T],A,F=g.isString(k.easing)?v.Easings[k.easing]:k.easing;if(1===y)A=k.endValue;else{var E=k.endValue-k.startValue;if(A=k.startValue+E*F(y,u,E),!d&&A===k.currentValue)continue}if(k.currentValue=A,"tween"===T)m=A;else{if(x.Hooks.registered[T]){var j=x.Hooks.getRoot(T),H=i(w).rootPropertyValueCache[j];H&&(k.rootPropertyValue=H)}var N=x.setPropertyValue(w,T,k.currentValue+(0===parseFloat(A)?"":k.unitType),k.rootPropertyValue,k.scrollData);x.Hooks.registered[T]&&(i(w).rootPropertyValueCache[j]=x.Normalizations.registered[j]?x.Normalizations.registered[j]("extract",null,N[1]):N[1]),"transform"===N[0]&&(V=!0)}}u.mobileHA&&i(w).transformCache.translate3d===a&&(i(w).transformCache.translate3d="(0px, 0px, 0px)",V=!0),V&&x.flushTransformCache(w)}}u.display!==a&&"none"!==u.display&&(v.State.calls[o][2].display=!1),u.visibility!==a&&"hidden"!==u.visibility&&(v.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],y,Math.max(0,f+u.duration-t),f,m),1===y&&p(o)}}v.State.isTicking&&P(c)}function p(e,t){if(!v.State.calls[e])return!1;for(var r=v.State.calls[e][0],n=v.State.calls[e][1],o=v.State.calls[e][2],s=v.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&x.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&x.setPropertyValue(p,"visibility",o.visibility)),o.loop!==!0&&($.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test($.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var f=!1;$.each(x.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(f=!0,delete i(p).transformCache[t])}),o.mobileHA&&(f=!0,delete i(p).transformCache.translate3d),f&&x.flushTransformCache(p),x.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(d){setTimeout(function(){throw d},1)}s&&o.loop!==!0&&s(n),i(p)&&o.loop===!0&&!t&&($.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),v(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&$.dequeue(p,o.queue)}v.State.calls[e]=!1;for(var g=0,m=v.State.calls.length;m>g;g++)if(v.State.calls[g]!==!1){l=!0;break}l===!1&&(v.State.isTicking=!1,delete v.State.calls,v.State.calls=[])}var f=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),d=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r=(new Date).getTime(),a;return a=Math.max(0,16-(r-e)),e=r+a,setTimeout(function(){t(r+a)},a)}}(),g={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},$,m=!1;if(e.fn&&e.fn.jquery?($=e,m=!0):$=t.Velocity.Utilities,8>=f&&!m)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=f)return void(jQuery.fn.velocity=jQuery.fn.animate);var y=400,h="swing",v={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:$,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:y,easing:h,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){$.data(e,"velocity",{isSVG:g.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};t.pageYOffset!==a?(v.State.scrollAnchor=t,v.State.scrollPropertyLeft="pageXOffset",v.State.scrollPropertyTop="pageYOffset"):(v.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,v.State.scrollPropertyLeft="scrollLeft",v.State.scrollPropertyTop="scrollTop");var b=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o={x:-1,v:0,tension:null,friction:null},i=[0],s=0,l=1e-4,u=.016,c,p,f;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,o.tension=e,o.friction=t,c=null!==n,c?(s=a(e,t),p=s/n*u):p=u;;)if(f=r(f||o,p),i.push(1+f.x),s+=16,!(Math.abs(f.x)>l&&Math.abs(f.v)>l))break;return c?function(e){return i[e*(i.length-1)|0]}:s}}();v.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},$.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){v.Easings[t[0]]=l.apply(null,t[1])});var x=v.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<x.Lists.colors.length;e++){var t="color"===x.Lists.colors[e]?"0 0 0 1":"255 255 255 1";x.Hooks.templates[x.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,n;if(f)for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");var o=a[1].match(x.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),x.Hooks.templates[r]=[n.join(" "),o.join(" ")])}for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");for(var e in n){var i=r+n[e],s=e;x.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=x.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return x.RegEx.valueUnwrap.test(t)&&(t=t.match(x.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(t)&&(t=x.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=x.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=x.Hooks.cleanRootPropertyValue(a,t),t.toString().match(x.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=x.Hooks.registered[e];if(a){var n=a[0],o=a[1],i,s;return r=x.Hooks.cleanRootPropertyValue(n,r),i=r.toString().match(x.RegEx.valueSplit),i[o]=t,s=i.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return x.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(x.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return v.State.isFirefox?"filter":"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=f)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=f||v.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(var e=0;e<x.Lists.transformsBase.length;e++)!function(){var t=x.Lists.transformsBase[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":v.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<x.Lists.colors.length;e++)!function(){var t=x.Lists.colors[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(x.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:x.RegEx.isHex.test(n)?i="rgb("+x.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=f||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=f?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=f?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(f||v.State.isAndroid&&!v.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(v.State.prefixMatches[e])return[v.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),g.isString(v.State.prefixElement.style[n]))return v.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,a;return e=e.replace(t,function(e,t,r,a){return t+t+r+r+a+a}),a=r.exec(e),a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&x.setPropertyValue(e,"display","none")}var l=0;if(8>=f)l=$.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===x.getPropertyValue(e,"display")&&(u=!0,x.setPropertyValue(e,"display",x.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(x.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(x.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var d;d=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===r&&(r="borderTopColor"),l=9===f&&"filter"===r?d.getPropertyValue(r):d[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var g=s(e,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(r))&&(l=$(e).position()[r]+"px")}return l}var l;if(x.Hooks.registered[r]){var u=r,c=x.Hooks.getRoot(u);n===a&&(n=x.getPropertyValue(e,x.Names.prefixCheck(c)[0])),x.Normalizations.registered[c]&&(n=x.Normalizations.registered[c]("extract",e,n)),l=x.Hooks.extractValue(u,n)}else if(x.Normalizations.registered[r]){var p,d;p=x.Normalizations.registered[r]("name",e),"transform"!==p&&(d=s(e,x.Names.prefixCheck(p)[0]),x.Values.isCSSNullValue(d)&&x.Hooks.templates[r]&&(d=x.Hooks.templates[r][1])),l=x.Normalizations.registered[r]("extract",e,d)}if(!/^[\d-]/.test(l))if(i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r))if(/^(height|width)$/i.test(r))try{l=e.getBBox()[r]}catch(g){l=0}else l=e.getAttribute(r);else l=s(e,x.Names.prefixCheck(r)[0]);return x.Values.isCSSNullValue(l)&&(l=0),v.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(x.Normalizations.registered[r]&&"transform"===x.Normalizations.registered[r]("name",e))x.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(x.Hooks.registered[r]){var l=r,u=x.Hooks.getRoot(r);n=n||x.getPropertyValue(e,u),a=x.Hooks.injectValue(l,a,n),r=u}if(x.Normalizations.registered[r]&&(a=x.Normalizations.registered[r]("inject",e,a),r=x.Normalizations.registered[r]("name",e)),s=x.Names.prefixCheck(r)[0],8>=f)try{e.style[s]=a}catch(c){v.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;v.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(x.getPropertyValue(e,t))}var r="";if((f||v.State.isAndroid&&!v.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};$.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;$.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===f&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}x.setPropertyValue(e,"transform",r)}};x.Hooks.register(),x.Normalizations.register(),v.hook=function(e,t,r){var n=a;return e=o(e),$.each(e,function(e,o){if(i(o)===a&&v.init(o),r===a)n===a&&(n=v.CSS.getPropertyValue(o,t));else{var s=v.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&v.CSS.flushTransformCache(o),n=s}}),n};var S=function(){function e(){return l?T.promise||null:f}function n(){function e(e){function p(e,t){var r=a,i=a,s=a;return g.isArray(e)?(r=e[0],!g.isArray(e[1])&&/^[\d-]/.test(e[1])||g.isFunction(e[1])||x.RegEx.isHex.test(e[1])?s=e[1]:(g.isString(e[1])&&!x.RegEx.isHex.test(e[1])||g.isArray(e[1]))&&(i=t?e[1]:u(e[1],o.duration),e[2]!==a&&(s=e[2]))):r=e,t||(i=i||o.easing),g.isFunction(r)&&(r=r.call(n,w,P)),g.isFunction(s)&&(s=s.call(n,w,P)),[r||0,i,s]}function f(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=x.Values.getUnitType(e)),[a,r]}function d(){var e={myParent:n.parentNode||r.body,position:x.getPropertyValue(n,"position"),fontSize:x.getPropertyValue(n,"fontSize")},a=e.position===N.lastPosition&&e.myParent===N.lastParent,o=e.fontSize===N.lastFontSize;N.lastParent=e.myParent,N.lastPosition=e.position,N.lastFontSize=e.fontSize;var s=100,l={};if(o&&a)l.emToPx=N.lastEmToPx,l.percentToPxWidth=N.lastPercentToPxWidth,l.percentToPxHeight=N.lastPercentToPxHeight;else{var u=i(n).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");v.init(u),e.myParent.appendChild(u),$.each(["overflow","overflowX","overflowY"],function(e,t){v.CSS.setPropertyValue(u,t,"hidden")}),v.CSS.setPropertyValue(u,"position",e.position),v.CSS.setPropertyValue(u,"fontSize",e.fontSize),v.CSS.setPropertyValue(u,"boxSizing","content-box"),$.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){v.CSS.setPropertyValue(u,t,s+"%")}),v.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=N.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=N.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=N.lastEmToPx=(parseFloat(x.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===N.remToPx&&(N.remToPx=parseFloat(x.getPropertyValue(r.body,"fontSize"))||16),null===N.vwToPx&&(N.vwToPx=parseFloat(t.innerWidth)/100,N.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=N.remToPx,l.vwToPx=N.vwToPx,l.vhToPx=N.vhToPx,v.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),n),l}if(o.begin&&0===w)try{o.begin.call(m,m)}catch(y){setTimeout(function(){throw y},1)}if("scroll"===k){var S=/^x$/i.test(o.axis)?"Left":"Top",V=parseFloat(o.offset)||0,C,A,F;o.container?g.isWrapped(o.container)||g.isNode(o.container)?(o.container=o.container[0]||o.container,C=o.container["scroll"+S],F=C+$(n).position()[S.toLowerCase()]+V):o.container=null:(C=v.State.scrollAnchor[v.State["scrollProperty"+S]],A=v.State.scrollAnchor[v.State["scrollProperty"+("Left"===S?"Top":"Left")]],F=$(n).offset()[S.toLowerCase()]+V),s={scroll:{rootPropertyValue:!1,startValue:C,currentValue:C,endValue:F,unitType:"",easing:o.easing,scrollData:{container:o.container,direction:S,alternateValue:A}},element:n},v.debug&&console.log("tweensContainer (scroll): ",s.scroll,n)}else if("reverse"===k){if(!i(n).tweensContainer)return void $.dequeue(n,o.queue);"none"===i(n).opts.display&&(i(n).opts.display="auto"),"hidden"===i(n).opts.visibility&&(i(n).opts.visibility="visible"),i(n).opts.loop=!1,i(n).opts.begin=null,i(n).opts.complete=null,b.easing||delete o.easing,b.duration||delete o.duration,o=$.extend({},i(n).opts,o);var E=$.extend(!0,{},i(n).tweensContainer);for(var j in E)if("element"!==j){var H=E[j].startValue;E[j].startValue=E[j].currentValue=E[j].endValue,E[j].endValue=H,g.isEmptyObject(b)||(E[j].easing=o.easing),v.debug&&console.log("reverse tweensContainer ("+j+"): "+JSON.stringify(E[j]),n)}s=E}else if("start"===k){var E;i(n).tweensContainer&&i(n).isAnimating===!0&&(E=i(n).tweensContainer),$.each(h,function(e,t){if(RegExp("^"+x.Lists.colors.join("$|^")+"$").test(e)){var r=p(t,!0),n=r[0],o=r[1],i=r[2];if(x.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=x.Values.hexToRgb(n),u=i?x.Values.hexToRgb(i):a,c=0;c<s.length;c++){var f=[l[c]];o&&f.push(o),u!==a&&f.push(u[c]),h[e+s[c]]=f}delete h[e]}}});for(var R in h){var O=p(h[R]),z=O[0],q=O[1],M=O[2];R=x.Names.camelCase(R);var I=x.Hooks.getRoot(R),B=!1;if(i(n).isSVG||"tween"===I||x.Names.prefixCheck(I)[1]!==!1||x.Normalizations.registered[I]!==a){(o.display!==a&&null!==o.display&&"none"!==o.display||o.visibility!==a&&"hidden"!==o.visibility)&&/opacity|filter/.test(R)&&!M&&0!==z&&(M=0),o._cacheValues&&E&&E[R]?(M===a&&(M=E[R].endValue+E[R].unitType),B=i(n).rootPropertyValueCache[I]):x.Hooks.registered[R]?M===a?(B=x.getPropertyValue(n,I),M=x.getPropertyValue(n,R,B)):B=x.Hooks.templates[I][1]:M===a&&(M=x.getPropertyValue(n,R));var W,G,D,X=!1;if(W=f(R,M),M=W[0],D=W[1],W=f(R,z),z=W[0].replace(/^([+-\/*])=/,function(e,t){return X=t,""}),G=W[1],M=parseFloat(M)||0,z=parseFloat(z)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(R)?(z/=100,G="em"):/^scale/.test(R)?(z/=100,G=""):/(Red|Green|Blue)$/i.test(R)&&(z=z/100*255,G="")),/[\/*]/.test(X))G=D;else if(D!==G&&0!==M)if(0===z)G=D;else{l=l||d();var Y=/margin|padding|left|right|width|text|word|letter/i.test(R)||/X$/.test(R)||"x"===R?"x":"y";switch(D){case"%":M*="x"===Y?l.percentToPxWidth:l.percentToPxHeight;break;case"px":break;default:M*=l[D+"ToPx"]}switch(G){case"%":M*=1/("x"===Y?l.percentToPxWidth:l.percentToPxHeight);break;case"px":break;default:M*=1/l[G+"ToPx"]}}switch(X){case"+":z=M+z;break;case"-":z=M-z;break;case"*":z=M*z;break;case"/":z=M/z}s[R]={rootPropertyValue:B,startValue:M,currentValue:M,endValue:z,unitType:G,easing:q},v.debug&&console.log("tweensContainer ("+R+"): "+JSON.stringify(s[R]),n)}else v.debug&&console.log("Skipping ["+I+"] due to a lack of browser support.")}s.element=n}s.element&&(x.Values.addClass(n,"velocity-animating"),L.push(s),""===o.queue&&(i(n).tweensContainer=s,i(n).opts=o),i(n).isAnimating=!0,w===P-1?(v.State.calls.push([L,m,o,null,T.resolver]),v.State.isTicking===!1&&(v.State.isTicking=!0,c())):w++)}var n=this,o=$.extend({},v.defaults,b),s={},l;switch(i(n)===a&&v.init(n),parseFloat(o.delay)&&o.queue!==!1&&$.queue(n,o.queue,function(e){v.velocityQueueEntryFlag=!0,i(n).delayTimer={setTimeout:setTimeout(e,parseFloat(o.delay)),next:e}}),o.duration.toString().toLowerCase()){case"fast":o.duration=200;break;case"normal":o.duration=y;break;case"slow":o.duration=600;break;default:o.duration=parseFloat(o.duration)||1}v.mock!==!1&&(v.mock===!0?o.duration=o.delay=1:(o.duration*=parseFloat(v.mock)||1,o.delay*=parseFloat(v.mock)||1)),o.easing=u(o.easing,o.duration),o.begin&&!g.isFunction(o.begin)&&(o.begin=null),o.progress&&!g.isFunction(o.progress)&&(o.progress=null),o.complete&&!g.isFunction(o.complete)&&(o.complete=null),o.display!==a&&null!==o.display&&(o.display=o.display.toString().toLowerCase(),"auto"===o.display&&(o.display=v.CSS.Values.getDisplayType(n))),o.visibility!==a&&null!==o.visibility&&(o.visibility=o.visibility.toString().toLowerCase()),o.mobileHA=o.mobileHA&&v.State.isMobile&&!v.State.isGingerbread,o.queue===!1?o.delay?setTimeout(e,o.delay):e():$.queue(n,o.queue,function(t,r){return r===!0?(T.promise&&T.resolver(m),!0):(v.velocityQueueEntryFlag=!0,void e(t))}),""!==o.queue&&"fx"!==o.queue||"inprogress"===$.queue(n)[0]||$.dequeue(n)}var s=arguments[0]&&(arguments[0].p||$.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||g.isString(arguments[0].properties)),l,f,d,m,h,b;if(g.isWrapped(this)?(l=!1,d=0,m=this,f=this):(l=!0,d=1,m=s?arguments[0].elements||arguments[0].e:arguments[0]),m=o(m)){s?(h=arguments[0].properties||arguments[0].p,b=arguments[0].options||arguments[0].o):(h=arguments[d],b=arguments[d+1]);var P=m.length,w=0;if(!/^(stop|finish)$/i.test(h)&&!$.isPlainObject(b)){var V=d+1;b={};for(var C=V;C<arguments.length;C++)g.isArray(arguments[C])||!/^(fast|normal|slow)$/i.test(arguments[C])&&!/^\d/.test(arguments[C])?g.isString(arguments[C])||g.isArray(arguments[C])?b.easing=arguments[C]:g.isFunction(arguments[C])&&(b.complete=arguments[C]):b.duration=arguments[C]}var T={promise:null,resolver:null,rejecter:null};l&&v.Promise&&(T.promise=new v.Promise(function(e,t){T.resolver=e,T.rejecter=t}));var k;switch(h){case"scroll":k="scroll";break;case"reverse":k="reverse";break;case"finish":case"stop":$.each(m,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var A=[];return $.each(v.State.calls,function(e,t){t&&$.each(t[1],function(r,n){var o=b===a?"":b;return o===!0||t[2].queue===o||b===a&&t[2].queue===!1?void $.each(m,function(r,a){a===n&&((b===!0||g.isString(b))&&($.each($.queue(a,g.isString(b)?b:""),function(e,t){g.isFunction(t)&&t(null,!0)}),$.queue(a,g.isString(b)?b:"",[])),"stop"===h?(i(a)&&i(a).tweensContainer&&o!==!1&&$.each(i(a).tweensContainer,function(e,t){t.endValue=t.currentValue
	}),A.push(e)):"finish"===h&&(t[2].duration=1))}):!0})}),"stop"===h&&($.each(A,function(e,t){p(t,!0)}),T.promise&&T.resolver(m)),e();default:if(!$.isPlainObject(h)||g.isEmptyObject(h)){if(g.isString(h)&&v.Redirects[h]){var F=$.extend({},b),E=F.duration,j=F.delay||0;return F.backwards===!0&&(m=$.extend(!0,[],m).reverse()),$.each(m,function(e,t){parseFloat(F.stagger)?F.delay=j+parseFloat(F.stagger)*e:g.isFunction(F.stagger)&&(F.delay=j+F.stagger.call(t,e,P)),F.drag&&(F.duration=parseFloat(E)||(/^(callout|transition)/.test(h)?1e3:y),F.duration=Math.max(F.duration*(F.backwards?1-e/P:(e+1)/P),.75*F.duration,200)),v.Redirects[h].call(t,t,F||{},e,P,m,T.promise?T:a)}),e()}var H="Velocity: First argument ("+h+") was not a property map, a known action, or a registered redirect. Aborting.";return T.promise?T.rejecter(new Error(H)):console.log(H),e()}k="start"}var N={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},L=[];$.each(m,function(e,t){g.isNode(t)&&n.call(t)});var F=$.extend({},v.defaults,b),R;if(F.loop=parseInt(F.loop),R=2*F.loop-1,F.loop)for(var O=0;R>O;O++){var z={delay:F.delay,progress:F.progress};O===R-1&&(z.display=F.display,z.visibility=F.visibility,z.complete=F.complete),S(m,"reverse",z)}return e()}};v=$.extend(S,v),v.animate=S;var P=t.requestAnimationFrame||d;return v.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(P=function(e){return setTimeout(function(){e(!0)},16)},c()):P=t.requestAnimationFrame||d}),e.Velocity=v,e!==t&&(e.fn.velocity=S,e.fn.velocity.defaults=v.defaults),$.each(["Down","Up"],function(e,t){v.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},f={};l.display===a&&(l.display="Down"===t?"inline"===v.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){f[r]=e.style[r];var a=v.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}f.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in f)e.style[t]=f[t];c&&c.call(i,i),s&&s.resolver(i)},v(e,p,l)}}),$.each(["In","Out"],function(e,t){v.Redirects["fade"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),v(this,u,l)}}),v}(window.jQuery||window.Zepto||window,window,document)});;!function(a,b,c,d){"use strict";function k(a,b,c){return setTimeout(q(a,c),b)}function l(a,b,c){return Array.isArray(a)?(m(a,c[b],c),!0):!1}function m(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function n(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function o(a,b){return n(a,b,!0)}function p(a,b,c){var e,d=b.prototype;e=a.prototype=Object.create(d),e.constructor=a,e._super=d,c&&n(e,c)}function q(a,b){return function(){return a.apply(b,arguments)}}function r(a,b){return typeof a==g?a.apply(b?b[0]||d:d,b):a}function s(a,b){return a===d?b:a}function t(a,b,c){m(x(b),function(b){a.addEventListener(b,c,!1)})}function u(a,b,c){m(x(b),function(b){a.removeEventListener(b,c,!1)})}function v(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function w(a,b){return a.indexOf(b)>-1}function x(a){return a.trim().split(/\s+/g)}function y(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function z(a){return Array.prototype.slice.call(a,0)}function A(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];y(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function B(a,b){for(var c,f,g=b[0].toUpperCase()+b.slice(1),h=0;h<e.length;){if(c=e[h],f=c?c+g:b,f in a)return f;h++}return d}function D(){return C++}function E(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function ab(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){r(a.options.enable,[a])&&c.handler(b)},this.init()}function bb(a){var b,c=a.options.inputClass;return b=c?c:H?wb:I?Eb:G?Gb:rb,new b(a,cb)}function cb(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&O&&0===d-e,g=b&(Q|R)&&0===d-e;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,db(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function db(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=gb(b)),e>1&&!c.firstMultiple?c.firstMultiple=gb(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=hb(d);b.timeStamp=j(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=lb(h,i),b.distance=kb(h,i),eb(c,b),b.offsetDirection=jb(b.deltaX,b.deltaY),b.scale=g?nb(g.pointers,d):1,b.rotation=g?mb(g.pointers,d):0,fb(c,b);var k=a.element;v(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function eb(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===O||f.eventType===Q)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function fb(a,b){var f,g,h,j,c=a.lastInterval||b,e=b.timeStamp-c.timeStamp;if(b.eventType!=R&&(e>N||c.velocity===d)){var k=c.deltaX-b.deltaX,l=c.deltaY-b.deltaY,m=ib(e,k,l);g=m.x,h=m.y,f=i(m.x)>i(m.y)?m.x:m.y,j=jb(k,l),a.lastInterval=b}else f=c.velocity,g=c.velocityX,h=c.velocityY,j=c.direction;b.velocity=f,b.velocityX=g,b.velocityY=h,b.direction=j}function gb(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:h(a.pointers[c].clientX),clientY:h(a.pointers[c].clientY)},c++;return{timeStamp:j(),pointers:b,center:hb(b),deltaX:a.deltaX,deltaY:a.deltaY}}function hb(a){var b=a.length;if(1===b)return{x:h(a[0].clientX),y:h(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:h(c/b),y:h(d/b)}}function ib(a,b,c){return{x:b/a||0,y:c/a||0}}function jb(a,b){return a===b?S:i(a)>=i(b)?a>0?T:U:b>0?V:W}function kb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function lb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function mb(a,b){return lb(b[1],b[0],_)-lb(a[1],a[0],_)}function nb(a,b){return kb(b[0],b[1],_)/kb(a[0],a[1],_)}function rb(){this.evEl=pb,this.evWin=qb,this.allow=!0,this.pressed=!1,ab.apply(this,arguments)}function wb(){this.evEl=ub,this.evWin=vb,ab.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function Ab(){this.evTarget=yb,this.evWin=zb,this.started=!1,ab.apply(this,arguments)}function Bb(a,b){var c=z(a.touches),d=z(a.changedTouches);return b&(Q|R)&&(c=A(c.concat(d),"identifier",!0)),[c,d]}function Eb(){this.evTarget=Db,this.targetIds={},ab.apply(this,arguments)}function Fb(a,b){var c=z(a.touches),d=this.targetIds;if(b&(O|P)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=z(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return v(a.target,i)}),b===O)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Q|R)&&delete d[g[e].identifier],e++;return h.length?[A(f.concat(h),"identifier",!0),h]:void 0}function Gb(){ab.apply(this,arguments);var a=q(this.handler,this);this.touch=new Eb(this.manager,a),this.mouse=new rb(this.manager,a)}function Pb(a,b){this.manager=a,this.set(b)}function Qb(a){if(w(a,Mb))return Mb;var b=w(a,Nb),c=w(a,Ob);return b&&c?Nb+" "+Ob:b||c?b?Nb:Ob:w(a,Lb)?Lb:Kb}function Yb(a){this.id=D(),this.manager=null,this.options=o(a||{},this.defaults),this.options.enable=s(this.options.enable,!0),this.state=Rb,this.simultaneous={},this.requireFail=[]}function Zb(a){return a&Wb?"cancel":a&Ub?"end":a&Tb?"move":a&Sb?"start":""}function $b(a){return a==W?"down":a==V?"up":a==T?"left":a==U?"right":""}function _b(a,b){var c=b.manager;return c?c.get(a):a}function ac(){Yb.apply(this,arguments)}function bc(){ac.apply(this,arguments),this.pX=null,this.pY=null}function cc(){ac.apply(this,arguments)}function dc(){Yb.apply(this,arguments),this._timer=null,this._input=null}function ec(){ac.apply(this,arguments)}function fc(){ac.apply(this,arguments)}function gc(){Yb.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function hc(a,b){return b=b||{},b.recognizers=s(b.recognizers,hc.defaults.preset),new kc(a,b)}function kc(a,b){b=b||{},this.options=o(b,hc.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=bb(this),this.touchAction=new Pb(this,this.options.touchAction),lc(this,!0),m(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function lc(a,b){var c=a.element;m(a.options.cssProps,function(a,d){c.style[B(c.style,d)]=b?a:""})}function mc(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var e=["","webkit","moz","MS","ms","o"],f=b.createElement("div"),g="function",h=Math.round,i=Math.abs,j=Date.now,C=1,F=/mobile|tablet|ip(ad|hone|od)|android/i,G="ontouchstart"in a,H=B(a,"PointerEvent")!==d,I=G&&F.test(navigator.userAgent),J="touch",K="pen",L="mouse",M="kinect",N=25,O=1,P=2,Q=4,R=8,S=1,T=2,U=4,V=8,W=16,X=T|U,Y=V|W,Z=X|Y,$=["x","y"],_=["clientX","clientY"];ab.prototype={handler:function(){},init:function(){this.evEl&&t(this.element,this.evEl,this.domHandler),this.evTarget&&t(this.target,this.evTarget,this.domHandler),this.evWin&&t(E(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&u(this.element,this.evEl,this.domHandler),this.evTarget&&u(this.target,this.evTarget,this.domHandler),this.evWin&&u(E(this.element),this.evWin,this.domHandler)}};var ob={mousedown:O,mousemove:P,mouseup:Q},pb="mousedown",qb="mousemove mouseup";p(rb,ab,{handler:function(a){var b=ob[a.type];b&O&&0===a.button&&(this.pressed=!0),b&P&&1!==a.which&&(b=Q),this.pressed&&this.allow&&(b&Q&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:L,srcEvent:a}))}});var sb={pointerdown:O,pointermove:P,pointerup:Q,pointercancel:R,pointerout:R},tb={2:J,3:K,4:L,5:M},ub="pointerdown",vb="pointermove pointerup pointercancel";a.MSPointerEvent&&(ub="MSPointerDown",vb="MSPointerMove MSPointerUp MSPointerCancel"),p(wb,ab,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=sb[d],f=tb[a.pointerType]||a.pointerType,g=f==J,h=y(b,a.pointerId,"pointerId");e&O&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Q|R)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var xb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},yb="touchstart",zb="touchstart touchmove touchend touchcancel";p(Ab,ab,{handler:function(a){var b=xb[a.type];if(b===O&&(this.started=!0),this.started){var c=Bb.call(this,a,b);b&(Q|R)&&0===c[0].length-c[1].length&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}});var Cb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},Db="touchstart touchmove touchend touchcancel";p(Eb,ab,{handler:function(a){var b=Cb[a.type],c=Fb.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}),p(Gb,ab,{handler:function(a,b,c){var d=c.pointerType==J,e=c.pointerType==L;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Q|R)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Hb=B(f.style,"touchAction"),Ib=Hb!==d,Jb="compute",Kb="auto",Lb="manipulation",Mb="none",Nb="pan-x",Ob="pan-y";Pb.prototype={set:function(a){a==Jb&&(a=this.compute()),Ib&&(this.manager.element.style[Hb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return m(this.manager.recognizers,function(b){r(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),Qb(a.join(" "))},preventDefaults:function(a){if(!Ib){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return b.preventDefault(),void 0;var d=this.actions,e=w(d,Mb),f=w(d,Ob),g=w(d,Nb);return e||f&&c&X||g&&c&Y?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var Rb=1,Sb=2,Tb=4,Ub=8,Vb=Ub,Wb=16,Xb=32;Yb.prototype={defaults:{},set:function(a){return n(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(l(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_b(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return l(a,"dropRecognizeWith",this)?this:(a=_b(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(l(a,"requireFailure",this))return this;var b=this.requireFail;return a=_b(a,this),-1===y(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(l(a,"dropRequireFailure",this))return this;a=_b(a,this);var b=y(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function d(d){b.manager.emit(b.options.event+(d?Zb(c):""),a)}var b=this,c=this.state;Ub>c&&d(!0),d(),c>=Ub&&d(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):(this.state=Xb,void 0)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(Xb|Rb)))return!1;a++}return!0},recognize:function(a){var b=n({},a);return r(this.options.enable,[this,b])?(this.state&(Vb|Wb|Xb)&&(this.state=Rb),this.state=this.process(b),this.state&(Sb|Tb|Ub|Wb)&&this.tryEmit(b),void 0):(this.reset(),this.state=Xb,void 0)},process:function(){},getTouchAction:function(){},reset:function(){}},p(ac,Yb,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(Sb|Tb),e=this.attrTest(a);return d&&(c&R||!e)?b|Wb:d||e?c&Q?b|Ub:b&Sb?b|Tb:Sb:Xb}}),p(bc,ac,{defaults:{event:"pan",threshold:10,pointers:1,direction:Z},getTouchAction:function(){var a=this.options.direction,b=[];return a&X&&b.push(Ob),a&Y&&b.push(Nb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&X?(e=0===f?S:0>f?T:U,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?S:0>g?V:W,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return ac.prototype.attrTest.call(this,a)&&(this.state&Sb||!(this.state&Sb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),p(cc,ac,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&Sb)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),p(dc,Yb,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Kb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Q|R)&&!e)this.reset();else if(a.eventType&O)this.reset(),this._timer=k(function(){this.state=Vb,this.tryEmit()},b.time,this);else if(a.eventType&Q)return Vb;return Xb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===Vb&&(a&&a.eventType&Q?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=j(),this.manager.emit(this.options.event,this._input)))}}),p(ec,ac,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&Sb)}}),p(fc,ac,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:X|Y,pointers:1},getTouchAction:function(){return bc.prototype.getTouchAction.call(this)},attrTest:function(a){var c,b=this.options.direction;return b&(X|Y)?c=a.velocity:b&X?c=a.velocityX:b&Y&&(c=a.velocityY),this._super.attrTest.call(this,a)&&b&a.direction&&a.distance>this.options.threshold&&i(c)>this.options.velocity&&a.eventType&Q},emit:function(a){var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),p(gc,Yb,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[Lb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime<b.time;if(this.reset(),a.eventType&O&&0===this.count)return this.failTimeout();if(d&&e&&c){if(a.eventType!=Q)return this.failTimeout();var f=this.pTime?a.timeStamp-this.pTime<b.interval:!0,g=!this.pCenter||kb(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,g&&f?this.count+=1:this.count=1,this._input=a;var h=this.count%b.taps;if(0===h)return this.hasRequireFailures()?(this._timer=k(function(){this.state=Vb,this.tryEmit()},b.interval,this),Sb):Vb}return Xb},failTimeout:function(){return this._timer=k(function(){this.state=Xb},this.options.interval,this),Xb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Vb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),hc.VERSION="2.0.4",hc.defaults={domEvents:!1,touchAction:Jb,enable:!0,inputTarget:null,inputClass:null,preset:[[ec,{enable:!1}],[cc,{enable:!1},["rotate"]],[fc,{direction:X}],[bc,{direction:X},["swipe"]],[gc],[gc,{event:"doubletap",taps:2},["tap"]],[dc]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ic=1,jc=2;kc.prototype={set:function(a){return n(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?jc:ic},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&Vb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===jc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(Sb|Tb|Ub)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Yb)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(l(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(l(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(y(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return m(x(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return m(x(a),function(a){b?c[a].splice(y(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&mc(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&lc(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},n(hc,{INPUT_START:O,INPUT_MOVE:P,INPUT_END:Q,INPUT_CANCEL:R,STATE_POSSIBLE:Rb,STATE_BEGAN:Sb,STATE_CHANGED:Tb,STATE_ENDED:Ub,STATE_RECOGNIZED:Vb,STATE_CANCELLED:Wb,STATE_FAILED:Xb,DIRECTION_NONE:S,DIRECTION_LEFT:T,DIRECTION_RIGHT:U,DIRECTION_UP:V,DIRECTION_DOWN:W,DIRECTION_HORIZONTAL:X,DIRECTION_VERTICAL:Y,DIRECTION_ALL:Z,Manager:kc,Input:ab,TouchAction:Pb,TouchInput:Eb,MouseInput:rb,PointerEventInput:wb,TouchMouseInput:Gb,SingleTouchInput:Ab,Recognizer:Yb,AttrRecognizer:ac,Tap:gc,Pan:bc,Swipe:fc,Pinch:cc,Rotate:ec,Press:dc,on:t,off:u,each:m,merge:o,extend:n,inherit:p,bindFn:q,prefixed:B}),"function"==g&&__webpack_require__(28)?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return hc}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!=typeof module&&module.exports?module.exports=hc:a[c]=hc}(window,document,"Hammer");;(function(factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__(29)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        factory(require('jquery'), require('hammerjs'));
	    } else {
	        factory(jQuery, Hammer);
	    }
	}(function($, Hammer) {
	    function hammerify(el, options) {
	        var $el = $(el);
	        if(!$el.data("hammer")) {
	            $el.data("hammer", new Hammer($el[0], options));
	        }
	    }

	    $.fn.hammer = function(options) {
	        return this.each(function() {
	            hammerify(this, options);
	        });
	    };

	    // extend the emit method to also trigger jQuery events
	    Hammer.Manager.prototype.emit = (function(originalEmit) {
	        return function(type, data) {
	            originalEmit.call(this, type, data);
	            $(this.element).trigger({
	                type: type,
	                gesture: data
	            });
	        };
	    })(Hammer.Manager.prototype.emit);
	}));
	;window.Materialize = {};

	// Unique ID
	Materialize.guid = (function() {
	  function s4() {
	    return Math.floor((1 + Math.random()) * 0x10000)
	      .toString(16)
	      .substring(1);
	  }
	  return function() {
	    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	           s4() + '-' + s4() + s4() + s4();
	  };
	})();

	Materialize.elementOrParentIsFixed = function(element) {
	    var $element = $(element);
	    var $checkElements = $element.add($element.parents());
	    var isFixed = false;
	    $checkElements.each(function(){
	        if ($(this).css("position") === "fixed") {
	            isFixed = true;
	            return false;
	        }
	    });
	    return isFixed;
	};

	// Velocity has conflicts when loaded with jQuery, this will check for it
	var Vel;
	if ($) {
	  Vel = $.Velocity;
	}
	else {
	  Vel = Velocity;
	}
	;(function ($) {
	  $.fn.collapsible = function(options) {
	    var defaults = {
	        accordion: undefined
	    };

	    options = $.extend(defaults, options);


	    return this.each(function() {

	      var $this = $(this);

	      var $panel_headers = $(this).find('> li > .collapsible-header');

	      var collapsible_type = $this.data("collapsible");

	      // Turn off any existing event handlers
	       $this.off('click.collapse', '.collapsible-header');
	       $panel_headers.off('click.collapse');


	       /****************
	       Helper Functions
	       ****************/

	      // Accordion Open
	      function accordionOpen(object) {
	        $panel_headers = $this.find('> li > .collapsible-header');
	        if (object.hasClass('active')) {
	            object.parent().addClass('active');
	        }
	        else {
	            object.parent().removeClass('active');
	        }
	        if (object.parent().hasClass('active')){
	          object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
	        }
	        else{
	          object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
	        }

	        $panel_headers.not(object).removeClass('active').parent().removeClass('active');
	        $panel_headers.not(object).parent().children('.collapsible-body').stop(true,false).slideUp(
	          {
	            duration: 350,
	            easing: "easeOutQuart",
	            queue: false,
	            complete:
	              function() {
	                $(this).css('height', '');
	              }
	          });
	      }

	      // Expandable Open
	      function expandableOpen(object) {
	        if (object.hasClass('active')) {
	            object.parent().addClass('active');
	        }
	        else {
	            object.parent().removeClass('active');
	        }
	        if (object.parent().hasClass('active')){
	          object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
	        }
	        else{
	          object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
	        }
	      }

	      /**
	       * Check if object is children of panel header
	       * @param  {Object}  object Jquery object
	       * @return {Boolean} true if it is children
	       */
	      function isChildrenOfPanelHeader(object) {

	        var panelHeader = getPanelHeader(object);

	        return panelHeader.length > 0;
	      }

	      /**
	       * Get panel header from a children element
	       * @param  {Object} object Jquery object
	       * @return {Object} panel header object
	       */
	      function getPanelHeader(object) {

	        return object.closest('li > .collapsible-header');
	      }

	      /*****  End Helper Functions  *****/



	      if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) { // Handle Accordion
	        // Add click handler to only direct collapsible header children
	        $panel_headers = $this.find('> li > .collapsible-header');
	        $panel_headers.on('click.collapse', function (e) {
	          var element = $(e.target);

	          if (isChildrenOfPanelHeader(element)) {
	            element = getPanelHeader(element);
	          }

	          element.toggleClass('active');
	          accordionOpen(element);
	        });
	        // Open first active
	        accordionOpen($panel_headers.filter('.active').first());
	      }
	      else { // Handle Expandables
	        $panel_headers.each(function () {
	          // Add click handler to only direct collapsible header children
	          $(this).on('click.collapse', function (e) {
	            var element = $(e.target);
	            if (isChildrenOfPanelHeader(element)) {
	              element = getPanelHeader(element);
	            }
	            element.toggleClass('active');
	            expandableOpen(element);
	          });
	          // Open any bodies that have the active class
	          if ($(this).hasClass('active')) {
	            expandableOpen($(this));
	          }

	        });
	      }

	    });
	  };

	  $(document).ready(function(){
	    $('.collapsible').collapsible();
	  });
	}( jQuery ));;(function ($) {

	  // Add posibility to scroll to selected option
	  // usefull for select for example
	  $.fn.scrollTo = function(elem) {
	    $(this).scrollTop($(this).scrollTop() - $(this).offset().top + $(elem).offset().top);
	    return this;
	  };

	  $.fn.dropdown = function (option) {
	    var defaults = {
	      inDuration: 300,
	      outDuration: 225,
	      constrain_width: true, // Constrains width of dropdown to the activator
	      hover: false,
	      gutter: 0, // Spacing from edge
	      belowOrigin: false,
	      alignment: 'left'
	    };

	    this.each(function(){
	    var origin = $(this);
	    var options = $.extend({}, defaults, option);

	    // Dropdown menu
	    var activates = $("#"+ origin.attr('data-activates'));

	    function updateOptions() {
	      if (origin.data('induration') !== undefined)
	        options.inDuration = origin.data('inDuration');
	      if (origin.data('outduration') !== undefined)
	        options.outDuration = origin.data('outDuration');
	      if (origin.data('constrainwidth') !== undefined)
	        options.constrain_width = origin.data('constrainwidth');
	      if (origin.data('hover') !== undefined)
	        options.hover = origin.data('hover');
	      if (origin.data('gutter') !== undefined)
	        options.gutter = origin.data('gutter');
	      if (origin.data('beloworigin') !== undefined)
	        options.belowOrigin = origin.data('beloworigin');
	      if (origin.data('alignment') !== undefined)
	        options.alignment = origin.data('alignment');
	    }

	    updateOptions();

	    // Attach dropdown to its activator
	    origin.after(activates);

	    /*
	      Helper function to position and resize dropdown.
	      Used in hover and click handler.
	    */
	    function placeDropdown() {
	      // Check html data attributes
	      updateOptions();

	      // Set Dropdown state
	      activates.addClass('active');

	      // Constrain width
	      if (options.constrain_width === true) {
	        activates.css('width', origin.outerWidth());
	      }
	      else {
	        activates.css('white-space', 'nowrap');
	      }
	      var offset = 0;
	      if (options.belowOrigin === true) {
	        offset = origin.height();
	      }

	      // Offscreen detection
	      var offsetLeft = origin.offset().left;
	      var activatesLeft, width_difference, gutter_spacing;
	      if (offsetLeft + activates.innerWidth() > $(window).width()) {
	        options.alignment = 'right';
	      }
	      else if (offsetLeft - activates.innerWidth() + origin.innerWidth() < 0) {
	        options.alignment = 'left';
	      }

	      // Handle edge alignment
	      if (options.alignment === 'left') {
	        width_difference = 0;
	        gutter_spacing = options.gutter;
	        activatesLeft = origin.position().left + width_difference + gutter_spacing;

	        // Position dropdown
	        activates.css({ left: activatesLeft });
	      }
	      else if (options.alignment === 'right') {
	        var offsetRight = $(window).width() - offsetLeft - origin.innerWidth();
	        width_difference = 0;
	        gutter_spacing = options.gutter;
	        activatesLeft =  ( $(window).width() - origin.position().left - origin.innerWidth() ) + gutter_spacing;

	        // Position dropdown
	        activates.css({ right: activatesLeft });
	      }
	      // Position dropdown
	      activates.css({
	        position: 'absolute',
	        top: origin.position().top + offset,
	      });



	      // Show dropdown
	      activates.stop(true, true).css('opacity', 0)
	        .slideDown({
	        queue: false,
	        duration: options.inDuration,
	        easing: 'easeOutCubic',
	        complete: function() {
	          $(this).css('height', '');
	        }
	      })
	        .animate( {opacity: 1}, {queue: false, duration: options.inDuration, easing: 'easeOutSine'});
	    }

	    function hideDropdown() {
	      activates.fadeOut(options.outDuration);
	      activates.removeClass('active');
	    }

	    // Hover
	    if (options.hover) {
	      var open = false;
	      origin.unbind('click.' + origin.attr('id'));
	      // Hover handler to show dropdown
	      origin.on('mouseenter', function(e){ // Mouse over
	        if (open === false) {
	          placeDropdown();
	          open = true;
	        }
	      });
	      origin.on('mouseleave', function(e){
	        // If hover on origin then to something other than dropdown content, then close
	        var toEl = e.toElement || e.relatedTarget; // added browser compatibility for target element
	        if(!$(toEl).closest('.dropdown-content').is(activates)) {
	          activates.stop(true, true);
	          hideDropdown();
	          open = false;
	        }
	      });

	      activates.on('mouseleave', function(e){ // Mouse out
	        var toEl = e.toElement || e.relatedTarget;
	        if(!$(toEl).closest('.dropdown-button').is(origin)) {
	          activates.stop(true, true);
	          hideDropdown();
	          open = false;
	        }
	      });

	    // Click
	    } else {

	      // Click handler to show dropdown
	      origin.unbind('click.' + origin.attr('id'));
	      origin.bind('click.'+origin.attr('id'), function(e){

	        if ( origin[0] == e.currentTarget && ($(e.target).closest('.dropdown-content').length === 0) ) {
	          e.preventDefault(); // Prevents button click from moving window
	          placeDropdown();

	        }
	        // If origin is clicked and menu is open, close menu
	        else {
	          if (origin.hasClass('active')) {
	            hideDropdown();
	            $(document).unbind('click.' + activates.attr('id'));
	          }
	        }
	        // If menu open, add click close handler to document
	        if (activates.hasClass('active')) {
	          $(document).bind('click.'+ activates.attr('id'), function (e) {
	            if (!activates.is(e.target) && !origin.is(e.target) && (!origin.find(e.target).length > 0) ) {
	              hideDropdown();
	              $(document).unbind('click.' + activates.attr('id'));
	            }
	          });
	        }
	      });

	    } // End else

	    // Listen to open and close event - useful for select component
	    origin.on('open', placeDropdown);
	    origin.on('close', hideDropdown);


	   });
	  }; // End dropdown plugin

	  $(document).ready(function(){
	    $('.dropdown-button').dropdown();
	  });
	}( jQuery ));
	;(function($) {
	    var _stack = 0,
	    _lastID = 0,
	    _generateID = function() {
	      _lastID++;
	      return 'materialize-lean-overlay-' + _lastID;
	    };

	  $.fn.extend({
	    openModal: function(options) {

	      $('body').css('overflow', 'hidden');

	      var defaults = {
	        opacity: 0.5,
	        in_duration: 350,
	        out_duration: 250,
	        ready: undefined,
	        complete: undefined,
	        dismissible: true,
	        starting_top: '4%'
	      },
	      overlayID = _generateID(),
	      $modal = $(this),
	      $overlay = $('<div class="lean-overlay"></div>'),
	      lStack = (++_stack);

	      // Store a reference of the overlay
	      $overlay.attr('id', overlayID).css('z-index', 1000 + lStack * 2);
	      $modal.data('overlay-id', overlayID).css('z-index', 1000 + lStack * 2 + 1);

	      $("body").append($overlay);

	      // Override defaults
	      options = $.extend(defaults, options);

	      if (options.dismissible) {
	        $overlay.click(function() {
	          $modal.closeModal(options);
	        });
	        // Return on ESC
	        $(document).on('keyup.leanModal' + overlayID, function(e) {
	          if (e.keyCode === 27) {   // ESC key
	            $modal.closeModal(options);
	          }
	        });
	      }

	      $modal.find(".modal-close").on('click.close', function(e) {
	        $modal.closeModal(options);
	      });

	      $overlay.css({ display : "block", opacity : 0 });

	      $modal.css({
	        display : "block",
	        opacity: 0
	      });

	      $overlay.velocity({opacity: options.opacity}, {duration: options.in_duration, queue: false, ease: "easeOutCubic"});
	      $modal.data('associated-overlay', $overlay[0]);

	      // Define Bottom Sheet animation
	      if ($modal.hasClass('bottom-sheet')) {
	        $modal.velocity({bottom: "0", opacity: 1}, {
	          duration: options.in_duration,
	          queue: false,
	          ease: "easeOutCubic",
	          // Handle modal ready callback
	          complete: function() {
	            if (typeof(options.ready) === "function") {
	              options.ready();
	            }
	          }
	        });
	      }
	      else {
	        $.Velocity.hook($modal, "scaleX", 0.7);
	        $modal.css({ top: options.starting_top });
	        $modal.velocity({top: "10%", opacity: 1, scaleX: '1'}, {
	          duration: options.in_duration,
	          queue: false,
	          ease: "easeOutCubic",
	          // Handle modal ready callback
	          complete: function() {
	            if (typeof(options.ready) === "function") {
	              options.ready();
	            }
	          }
	        });
	      }


	    }
	  });

	  $.fn.extend({
	    closeModal: function(options) {
	      var defaults = {
	        out_duration: 250,
	        complete: undefined
	      },
	      $modal = $(this),
	      overlayID = $modal.data('overlay-id'),
	      $overlay = $('#' + overlayID);

	      options = $.extend(defaults, options);

	      // Disable scrolling
	      $('body').css('overflow', '');

	      $modal.find('.modal-close').off('click.close');
	      $(document).off('keyup.leanModal' + overlayID);

	      $overlay.velocity( { opacity: 0}, {duration: options.out_duration, queue: false, ease: "easeOutQuart"});


	      // Define Bottom Sheet animation
	      if ($modal.hasClass('bottom-sheet')) {
	        $modal.velocity({bottom: "-100%", opacity: 0}, {
	          duration: options.out_duration,
	          queue: false,
	          ease: "easeOutCubic",
	          // Handle modal ready callback
	          complete: function() {
	            $overlay.css({display:"none"});

	            // Call complete callback
	            if (typeof(options.complete) === "function") {
	              options.complete();
	            }
	            $overlay.remove();
	            _stack--;
	          }
	        });
	      }
	      else {
	        $modal.velocity(
	          { top: options.starting_top, opacity: 0, scaleX: 0.7}, {
	          duration: options.out_duration,
	          complete:
	            function() {

	              $(this).css('display', 'none');
	              // Call complete callback
	              if (typeof(options.complete) === "function") {
	                options.complete();
	              }
	              $overlay.remove();
	              _stack--;
	            }
	          }
	        );
	      }
	    }
	  });

	  $.fn.extend({
	    leanModal: function(option) {
	      return this.each(function() {

	        var defaults = {
	          starting_top: '4%'
	        },
	        // Override defaults
	        options = $.extend(defaults, option);

	        // Close Handlers
	        $(this).click(function(e) {
	          options.starting_top = ($(this).offset().top - $(window).scrollTop()) /1.15;
	          var modal_id = $(this).attr("href") || '#' + $(this).data('target');
	          $(modal_id).openModal(options);
	          e.preventDefault();
	        }); // done set on click
	      }); // done return
	    }
	  });
	})(jQuery);
	;(function ($) {

	  $.fn.materialbox = function () {

	    return this.each(function() {

	      if ($(this).hasClass('initialized')) {
	        return;
	      }

	      $(this).addClass('initialized');

	      var overlayActive = false;
	      var doneAnimating = true;
	      var inDuration = 275;
	      var outDuration = 200;
	      var origin = $(this);
	      var placeholder = $('<div></div>').addClass('material-placeholder');
	      var originalWidth = 0;
	      var originalHeight = 0;
	      origin.wrap(placeholder);


	      origin.on('click', function(){
	        var placeholder = origin.parent('.material-placeholder');
	        var windowWidth = window.innerWidth;
	        var windowHeight = window.innerHeight;
	        var originalWidth = origin.width();
	        var originalHeight = origin.height();


	        // If already modal, return to original
	        if (doneAnimating === false) {
	          returnToOriginal();
	          return false;
	        }
	        else if (overlayActive && doneAnimating===true) {
	          returnToOriginal();
	          return false;
	        }


	        // Set states
	        doneAnimating = false;
	        origin.addClass('active');
	        overlayActive = true;

	        // Set positioning for placeholder

	        placeholder.css({
	          width: placeholder[0].getBoundingClientRect().width,
	          height: placeholder[0].getBoundingClientRect().height,
	          position: 'relative',
	          top: 0,
	          left: 0
	        });



	        // Set css on origin
	        origin.css({position: 'absolute', 'z-index': 1000})
	        .data('width', originalWidth)
	        .data('height', originalHeight);

	        // Add overlay
	        var overlay = $('<div id="materialbox-overlay"></div>')
	          .css({
	            opacity: 0
	          })
	          .click(function(){
	            if (doneAnimating === true)
	            returnToOriginal();
	          });
	          // Animate Overlay
	          $('body').append(overlay);
	          overlay.velocity({opacity: 1}, {duration: inDuration, queue: false, easing: 'easeOutQuad'}
	            );


	        // Add and animate caption if it exists
	        if (origin.data('caption') !== "") {
	          var $photo_caption = $('<div class="materialbox-caption"></div>');
	          $photo_caption.text(origin.data('caption'));
	          $('body').append($photo_caption);
	          $photo_caption.css({ "display": "inline" });
	          $photo_caption.velocity({opacity: 1}, {duration: inDuration, queue: false, easing: 'easeOutQuad'});
	        }



	        // Resize Image
	        var ratio = 0;
	        var widthPercent = originalWidth / windowWidth;
	        var heightPercent = originalHeight / windowHeight;
	        var newWidth = 0;
	        var newHeight = 0;

	        if (widthPercent > heightPercent) {
	          ratio = originalHeight / originalWidth;
	          newWidth = windowWidth * 0.9;
	          newHeight = windowWidth * 0.9 * ratio;
	        }
	        else {
	          ratio = originalWidth / originalHeight;
	          newWidth = (windowHeight * 0.9) * ratio;
	          newHeight = windowHeight * 0.9;
	        }

	        // Animate image + set z-index
	        if(origin.hasClass('responsive-img')) {
	          origin.velocity({'max-width': newWidth, 'width': originalWidth}, {duration: 0, queue: false,
	            complete: function(){
	              origin.css({left: 0, top: 0})
	              .velocity(
	                {
	                  height: newHeight,
	                  width: newWidth,
	                  left: $(document).scrollLeft() + windowWidth/2 - origin.parent('.material-placeholder').offset().left - newWidth/2,
	                  top: $(document).scrollTop() + windowHeight/2 - origin.parent('.material-placeholder').offset().top - newHeight/ 2
	                },
	                {
	                  duration: inDuration,
	                  queue: false,
	                  easing: 'easeOutQuad',
	                  complete: function(){doneAnimating = true;}
	                }
	              );
	            } // End Complete
	          }); // End Velocity
	        }
	        else {
	          origin.css('left', 0)
	          .css('top', 0)
	          .velocity(
	            {
	              height: newHeight,
	              width: newWidth,
	              left: $(document).scrollLeft() + windowWidth/2 - origin.parent('.material-placeholder').offset().left - newWidth/2,
	              top: $(document).scrollTop() + windowHeight/2 - origin.parent('.material-placeholder').offset().top - newHeight/ 2
	            },
	            {
	              duration: inDuration,
	              queue: false,
	              easing: 'easeOutQuad',
	              complete: function(){doneAnimating = true;}
	            }
	            ); // End Velocity
	        }

	    }); // End origin on click


	      // Return on scroll
	      $(window).scroll(function() {
	        if (overlayActive ) {
	          returnToOriginal();
	        }
	      });

	      // Return on ESC
	      $(document).keyup(function(e) {

	        if (e.keyCode === 27 && doneAnimating === true) {   // ESC key
	          if (overlayActive) {
	            returnToOriginal();
	          }
	        }
	      });


	      // This function returns the modaled image to the original spot
	      function returnToOriginal() {

	          doneAnimating = false;

	          var placeholder = origin.parent('.material-placeholder');
	          var windowWidth = window.innerWidth;
	          var windowHeight = window.innerHeight;
	          var originalWidth = origin.data('width');
	          var originalHeight = origin.data('height');

	          origin.velocity("stop", true);
	          $('#materialbox-overlay').velocity("stop", true);
	          $('.materialbox-caption').velocity("stop", true);


	          $('#materialbox-overlay').velocity({opacity: 0}, {
	            duration: outDuration, // Delay prevents animation overlapping
	            queue: false, easing: 'easeOutQuad',
	            complete: function(){
	              // Remove Overlay
	              overlayActive = false;
	              $(this).remove();
	            }
	          });

	          // Resize Image
	          origin.velocity(
	            {
	              width: originalWidth,
	              height: originalHeight,
	              left: 0,
	              top: 0
	            },
	            {
	              duration: outDuration,
	              queue: false, easing: 'easeOutQuad'
	            }
	          );

	          // Remove Caption + reset css settings on image
	          $('.materialbox-caption').velocity({opacity: 0}, {
	            duration: outDuration, // Delay prevents animation overlapping
	            queue: false, easing: 'easeOutQuad',
	            complete: function(){
	              placeholder.css({
	                height: '',
	                width: '',
	                position: '',
	                top: '',
	                left: ''
	              });

	              origin.css({
	                height: '',
	                top: '',
	                left: '',
	                width: '',
	                'max-width': '',
	                position: '',
	                'z-index': ''
	              });

	              // Remove class
	              origin.removeClass('active');
	              doneAnimating = true;
	              $(this).remove();
	            }
	          });

	        }
	        });
	};

	$(document).ready(function(){
	  $('.materialboxed').materialbox();
	});

	}( jQuery ));
	;(function ($) {

	    $.fn.parallax = function () {
	      var window_width = $(window).width();
	      // Parallax Scripts
	      return this.each(function(i) {
	        var $this = $(this);
	        $this.addClass('parallax');

	        function updateParallax(initial) {
	          var container_height;
	          if (window_width < 601) {
	            container_height = ($this.height() > 0) ? $this.height() : $this.children("img").height();
	          }
	          else {
	            container_height = ($this.height() > 0) ? $this.height() : 500;
	          }
	          var $img = $this.children("img").first();
	          var img_height = $img.height();
	          var parallax_dist = img_height - container_height;
	          var bottom = $this.offset().top + container_height;
	          var top = $this.offset().top;
	          var scrollTop = $(window).scrollTop();
	          var windowHeight = window.innerHeight;
	          var windowBottom = scrollTop + windowHeight;
	          var percentScrolled = (windowBottom - top) / (container_height + windowHeight);
	          var parallax = Math.round((parallax_dist * percentScrolled));

	          if (initial) {
	            $img.css('display', 'block');
	          }
	          if ((bottom > scrollTop) && (top < (scrollTop + windowHeight))) {
	            $img.css('transform', "translate3D(-50%," + parallax + "px, 0)");
	          }

	        }

	        // Wait for image load
	        $this.children("img").one("load", function() {
	          updateParallax(true);
	        }).each(function() {
	          if(this.complete) $(this).load();
	        });

	        $(window).scroll(function() {
	          window_width = $(window).width();
	          updateParallax(false);
	        });

	        $(window).resize(function() {
	          window_width = $(window).width();
	          updateParallax(false);
	        });

	      });

	    };
	}( jQuery ));;(function ($) {

	  var methods = {
	    init : function() {
	      return this.each(function() {

	      // For each set of tabs, we want to keep track of
	      // which tab is active and its associated content
	      var $this = $(this),
	          window_width = $(window).width();

	      $this.width('100%');
	      var $active, $content, $links = $this.find('li.tab a'),
	          $tabs_width = $this.width(),
	          $tab_width = $this.find('li').first().outerWidth(),
	          $index = 0;

	      // If the location.hash matches one of the links, use that as the active tab.
	      $active = $($links.filter('[href="'+location.hash+'"]'));

	      // If no match is found, use the first link or any with class 'active' as the initial active tab.
	      if ($active.length === 0) {
	          $active = $(this).find('li.tab a.active').first();
	      }
	      if ($active.length === 0) {
	        $active = $(this).find('li.tab a').first();
	      }

	      $active.addClass('active');
	      $index = $links.index($active);
	      if ($index < 0) {
	        $index = 0;
	      }

	      $content = $($active[0].hash);

	      // append indicator then set indicator width to tab width
	      $this.append('<div class="indicator"></div>');
	      var $indicator = $this.find('.indicator');
	      if ($this.is(":visible")) {
	        $indicator.css({"right": $tabs_width - (($index + 1) * $tab_width)});
	        $indicator.css({"left": $index * $tab_width});
	      }
	      $(window).resize(function () {
	        $tabs_width = $this.width();
	        $tab_width = $this.find('li').first().outerWidth();
	        if ($index < 0) {
	          $index = 0;
	        }
	        if ($tab_width !== 0 && $tabs_width !== 0) {
	          $indicator.css({"right": $tabs_width - (($index + 1) * $tab_width)});
	          $indicator.css({"left": $index * $tab_width});
	        }
	      });

	      // Hide the remaining content
	      $links.not($active).each(function () {
	        $(this.hash).hide();
	      });


	      // Bind the click event handler
	      $this.on('click', 'a', function(e){
	        if ($(this).parent().hasClass('disabled')) {
	          e.preventDefault();
	          return;
	        }

	        $tabs_width = $this.width();
	        $tab_width = $this.find('li').first().outerWidth();

	        // Make the old tab inactive.
	        $active.removeClass('active');
	        $content.hide();

	        // Update the variables with the new link and content
	        $active = $(this);
	        $content = $(this.hash);
	        $links = $this.find('li.tab a');

	        // Make the tab active.
	        $active.addClass('active');
	        var $prev_index = $index;
	        $index = $links.index($(this));
	        if ($index < 0) {
	          $index = 0;
	        }
	        // Change url to current tab
	        // window.location.hash = $active.attr('href');

	        $content.show();

	        // Update indicator
	        if (($index - $prev_index) >= 0) {
	          $indicator.velocity({"right": $tabs_width - (($index + 1) * $tab_width)}, { duration: 300, queue: false, easing: 'easeOutQuad'});
	          $indicator.velocity({"left": $index * $tab_width}, {duration: 300, queue: false, easing: 'easeOutQuad', delay: 90});

	        }
	        else {
	          $indicator.velocity({"left": $index * $tab_width}, { duration: 300, queue: false, easing: 'easeOutQuad'});
	          $indicator.velocity({"right": $tabs_width - (($index + 1) * $tab_width)}, {duration: 300, queue: false, easing: 'easeOutQuad', delay: 90});
	        }

	        // Prevent the anchor's default click action
	        e.preventDefault();
	      });
	    });

	    },
	    select_tab : function( id ) {
	      this.find('a[href="#' + id + '"]').trigger('click');
	    }
	  };

	  $.fn.tabs = function(methodOrOptions) {
	    if ( methods[methodOrOptions] ) {
	      return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
	    } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
	      // Default to "init"
	      return methods.init.apply( this, arguments );
	    } else {
	      $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );
	    }
	  };

	  $(document).ready(function(){
	    $('ul.tabs').tabs();
	  });
	}( jQuery ));
	;(function ($) {
	    $.fn.tooltip = function (options) {
	        var timeout = null,
	        counter = null,
	        started = false,
	        counterInterval = null,
	        margin = 5;

	      // Defaults
	      var defaults = {
	        delay: 350
	      };

	      // Remove tooltip from the activator
	      if (options === "remove") {
	        this.each(function(){
	          $('#' + $(this).attr('data-tooltip-id')).remove();
	        });
	        return false;
	      }

	      options = $.extend(defaults, options);


	      return this.each(function(){
	        var tooltipId = Materialize.guid();
	        var origin = $(this);
	        origin.attr('data-tooltip-id', tooltipId);

	        // Create Text span
	        var tooltip_text = $('<span></span>').text(origin.attr('data-tooltip'));

	        // Create tooltip
	        var newTooltip = $('<div></div>');
	        newTooltip.addClass('material-tooltip').append(tooltip_text)
	          .appendTo($('body'))
	          .attr('id', tooltipId);

	        var backdrop = $('<div></div>').addClass('backdrop');
	        backdrop.appendTo(newTooltip);
	        backdrop.css({ top: 0, left:0 });


	       //Destroy previously binded events
	      origin.off('mouseenter.tooltip mouseleave.tooltip');
	        // Mouse In
	      origin.on({
	        'mouseenter.tooltip': function(e) {
	          var tooltip_delay = origin.data("delay");
	          tooltip_delay = (tooltip_delay === undefined || tooltip_delay === '') ? options.delay : tooltip_delay;
	          counter = 0;
	          counterInterval = setInterval(function(){
	            counter += 10;
	            if (counter >= tooltip_delay && started === false) {
	              started = true;
	              newTooltip.css({ display: 'block', left: '0px', top: '0px' });

	              // Set Tooltip text
	              newTooltip.children('span').text(origin.attr('data-tooltip'));

	              // Tooltip positioning
	              var originWidth = origin.outerWidth();
	              var originHeight = origin.outerHeight();
	              var tooltipPosition =  origin.attr('data-position');
	              var tooltipHeight = newTooltip.outerHeight();
	              var tooltipWidth = newTooltip.outerWidth();
	              var tooltipVerticalMovement = '0px';
	              var tooltipHorizontalMovement = '0px';
	              var scale_factor = 8;

	              if (tooltipPosition === "top") {
	              // Top Position
	              newTooltip.css({
	                top: origin.offset().top - tooltipHeight - margin,
	                left: origin.offset().left + originWidth/2 - tooltipWidth/2
	              });
	              tooltipVerticalMovement = '-10px';
	              backdrop.css({
	                borderRadius: '14px 14px 0 0',
	                transformOrigin: '50% 90%',
	                marginTop: tooltipHeight,
	                marginLeft: (tooltipWidth/2) - (backdrop.width()/2)

	              });
	              }
	              // Left Position
	              else if (tooltipPosition === "left") {
	                newTooltip.css({
	                  top: origin.offset().top + originHeight/2 - tooltipHeight/2,
	                  left: origin.offset().left - tooltipWidth - margin
	                });
	                tooltipHorizontalMovement = '-10px';
	                backdrop.css({
	                  width: '14px',
	                  height: '14px',
	                  borderRadius: '14px 0 0 14px',
	                  transformOrigin: '95% 50%',
	                  marginTop: tooltipHeight/2,
	                  marginLeft: tooltipWidth
	                });
	              }
	              // Right Position
	              else if (tooltipPosition === "right") {
	                newTooltip.css({
	                  top: origin.offset().top + originHeight/2 - tooltipHeight/2,
	                  left: origin.offset().left + originWidth + margin
	                });
	                tooltipHorizontalMovement = '+10px';
	                backdrop.css({
	                  width: '14px',
	                  height: '14px',
	                  borderRadius: '0 14px 14px 0',
	                  transformOrigin: '5% 50%',
	                  marginTop: tooltipHeight/2,
	                  marginLeft: '0px'
	                });
	              }
	              else {
	                // Bottom Position
	                newTooltip.css({
	                  top: origin.offset().top + origin.outerHeight() + margin,
	                  left: origin.offset().left + originWidth/2 - tooltipWidth/2
	                });
	                tooltipVerticalMovement = '+10px';
	                backdrop.css({
	                  marginLeft: (tooltipWidth/2) - (backdrop.width()/2)
	                });
	              }

	              // Calculate Scale to fill
	              scale_factor = tooltipWidth / 8;
	              if (scale_factor < 8) {
	                scale_factor = 8;
	              }
	              if (tooltipPosition === "right" || tooltipPosition === "left") {
	                scale_factor = tooltipWidth / 10;
	                if (scale_factor < 6)
	                  scale_factor = 6;
	              }

	              newTooltip.velocity({ marginTop: tooltipVerticalMovement, marginLeft: tooltipHorizontalMovement}, { duration: 350, queue: false })
	                .velocity({opacity: 1}, {duration: 300, delay: 50, queue: false});
	              backdrop.css({ display: 'block' })
	              .velocity({opacity:1},{duration: 55, delay: 0, queue: false})
	              .velocity({scale: scale_factor}, {duration: 300, delay: 0, queue: false, easing: 'easeInOutQuad'});

	            }
	          }, 10); // End Interval

	        // Mouse Out
	        },
	        'mouseleave.tooltip': function(){
	          // Reset State
	          clearInterval(counterInterval);
	          counter = 0;

	          // Animate back
	          newTooltip.velocity({
	            opacity: 0, marginTop: 0, marginLeft: 0}, { duration: 225, queue: false, delay: 225 }
	          );
	          backdrop.velocity({opacity: 0, scale: 1}, {
	            duration:225,
	            delay: 275, queue: false,
	            complete: function(){
	              backdrop.css('display', 'none');
	              newTooltip.css('display', 'none');
	              started = false;}
	          });
	        }
	        });
	    });
	  };

	  $(document).ready(function(){
	     $('.tooltipped').tooltip();
	   });
	}( jQuery ));
	;/*!
	 * Waves v0.6.4
	 * http://fian.my.id/Waves
	 *
	 * Copyright 2014 Alfiana E. Sibuea and other contributors
	 * Released under the MIT license
	 * https://github.com/fians/Waves/blob/master/LICENSE
	 */

	;(function(window) {
	    'use strict';

	    var Waves = Waves || {};
	    var $$ = document.querySelectorAll.bind(document);

	    // Find exact position of element
	    function isWindow(obj) {
	        return obj !== null && obj === obj.window;
	    }

	    function getWindow(elem) {
	        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
	    }

	    function offset(elem) {
	        var docElem, win,
	            box = {top: 0, left: 0},
	            doc = elem && elem.ownerDocument;

	        docElem = doc.documentElement;

	        if (typeof elem.getBoundingClientRect !== typeof undefined) {
	            box = elem.getBoundingClientRect();
	        }
	        win = getWindow(doc);
	        return {
	            top: box.top + win.pageYOffset - docElem.clientTop,
	            left: box.left + win.pageXOffset - docElem.clientLeft
	        };
	    }

	    function convertStyle(obj) {
	        var style = '';

	        for (var a in obj) {
	            if (obj.hasOwnProperty(a)) {
	                style += (a + ':' + obj[a] + ';');
	            }
	        }

	        return style;
	    }

	    var Effect = {

	        // Effect delay
	        duration: 750,

	        show: function(e, element) {

	            // Disable right click
	            if (e.button === 2) {
	                return false;
	            }

	            var el = element || this;

	            // Create ripple
	            var ripple = document.createElement('div');
	            ripple.className = 'waves-ripple';
	            el.appendChild(ripple);

	            // Get click coordinate and element witdh
	            var pos         = offset(el);
	            var relativeY   = (e.pageY - pos.top);
	            var relativeX   = (e.pageX - pos.left);
	            var scale       = 'scale('+((el.clientWidth / 100) * 10)+')';

	            // Support for touch devices
	            if ('touches' in e) {
	              relativeY   = (e.touches[0].pageY - pos.top);
	              relativeX   = (e.touches[0].pageX - pos.left);
	            }

	            // Attach data to element
	            ripple.setAttribute('data-hold', Date.now());
	            ripple.setAttribute('data-scale', scale);
	            ripple.setAttribute('data-x', relativeX);
	            ripple.setAttribute('data-y', relativeY);

	            // Set ripple position
	            var rippleStyle = {
	                'top': relativeY+'px',
	                'left': relativeX+'px'
	            };

	            ripple.className = ripple.className + ' waves-notransition';
	            ripple.setAttribute('style', convertStyle(rippleStyle));
	            ripple.className = ripple.className.replace('waves-notransition', '');

	            // Scale the ripple
	            rippleStyle['-webkit-transform'] = scale;
	            rippleStyle['-moz-transform'] = scale;
	            rippleStyle['-ms-transform'] = scale;
	            rippleStyle['-o-transform'] = scale;
	            rippleStyle.transform = scale;
	            rippleStyle.opacity   = '1';

	            rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
	            rippleStyle['-moz-transition-duration']    = Effect.duration + 'ms';
	            rippleStyle['-o-transition-duration']      = Effect.duration + 'ms';
	            rippleStyle['transition-duration']         = Effect.duration + 'ms';

	            rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
	            rippleStyle['-moz-transition-timing-function']    = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
	            rippleStyle['-o-transition-timing-function']      = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
	            rippleStyle['transition-timing-function']         = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';

	            ripple.setAttribute('style', convertStyle(rippleStyle));
	        },

	        hide: function(e) {
	            TouchHandler.touchup(e);

	            var el = this;
	            var width = el.clientWidth * 1.4;

	            // Get first ripple
	            var ripple = null;
	            var ripples = el.getElementsByClassName('waves-ripple');
	            if (ripples.length > 0) {
	                ripple = ripples[ripples.length - 1];
	            } else {
	                return false;
	            }

	            var relativeX   = ripple.getAttribute('data-x');
	            var relativeY   = ripple.getAttribute('data-y');
	            var scale       = ripple.getAttribute('data-scale');

	            // Get delay beetween mousedown and mouse leave
	            var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
	            var delay = 350 - diff;

	            if (delay < 0) {
	                delay = 0;
	            }

	            // Fade out ripple after delay
	            setTimeout(function() {
	                var style = {
	                    'top': relativeY+'px',
	                    'left': relativeX+'px',
	                    'opacity': '0',

	                    // Duration
	                    '-webkit-transition-duration': Effect.duration + 'ms',
	                    '-moz-transition-duration': Effect.duration + 'ms',
	                    '-o-transition-duration': Effect.duration + 'ms',
	                    'transition-duration': Effect.duration + 'ms',
	                    '-webkit-transform': scale,
	                    '-moz-transform': scale,
	                    '-ms-transform': scale,
	                    '-o-transform': scale,
	                    'transform': scale,
	                };

	                ripple.setAttribute('style', convertStyle(style));

	                setTimeout(function() {
	                    try {
	                        el.removeChild(ripple);
	                    } catch(e) {
	                        return false;
	                    }
	                }, Effect.duration);
	            }, delay);
	        },

	        // Little hack to make <input> can perform waves effect
	        wrapInput: function(elements) {
	            for (var a = 0; a < elements.length; a++) {
	                var el = elements[a];

	                if (el.tagName.toLowerCase() === 'input') {
	                    var parent = el.parentNode;

	                    // If input already have parent just pass through
	                    if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {
	                        continue;
	                    }

	                    // Put element class and style to the specified parent
	                    var wrapper = document.createElement('i');
	                    wrapper.className = el.className + ' waves-input-wrapper';

	                    var elementStyle = el.getAttribute('style');

	                    if (!elementStyle) {
	                        elementStyle = '';
	                    }

	                    wrapper.setAttribute('style', elementStyle);

	                    el.className = 'waves-button-input';
	                    el.removeAttribute('style');

	                    // Put element as child
	                    parent.replaceChild(wrapper, el);
	                    wrapper.appendChild(el);
	                }
	            }
	        }
	    };


	    /**
	     * Disable mousedown event for 500ms during and after touch
	     */
	    var TouchHandler = {
	        /* uses an integer rather than bool so there's no issues with
	         * needing to clear timeouts if another touch event occurred
	         * within the 500ms. Cannot mouseup between touchstart and
	         * touchend, nor in the 500ms after touchend. */
	        touches: 0,
	        allowEvent: function(e) {
	            var allow = true;

	            if (e.type === 'touchstart') {
	                TouchHandler.touches += 1; //push
	            } else if (e.type === 'touchend' || e.type === 'touchcancel') {
	                setTimeout(function() {
	                    if (TouchHandler.touches > 0) {
	                        TouchHandler.touches -= 1; //pop after 500ms
	                    }
	                }, 500);
	            } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {
	                allow = false;
	            }

	            return allow;
	        },
	        touchup: function(e) {
	            TouchHandler.allowEvent(e);
	        }
	    };


	    /**
	     * Delegated click handler for .waves-effect element.
	     * returns null when .waves-effect element not in "click tree"
	     */
	    function getWavesEffectElement(e) {
	        if (TouchHandler.allowEvent(e) === false) {
	            return null;
	        }

	        var element = null;
	        var target = e.target || e.srcElement;

	        while (target.parentElement !== null) {
	            if (!(target instanceof SVGElement) && target.className.indexOf('waves-effect') !== -1) {
	                element = target;
	                break;
	            } else if (target.classList.contains('waves-effect')) {
	                element = target;
	                break;
	            }
	            target = target.parentElement;
	        }

	        return element;
	    }

	    /**
	     * Bubble the click and show effect if .waves-effect elem was found
	     */
	    function showEffect(e) {
	        var element = getWavesEffectElement(e);

	        if (element !== null) {
	            Effect.show(e, element);

	            if ('ontouchstart' in window) {
	                element.addEventListener('touchend', Effect.hide, false);
	                element.addEventListener('touchcancel', Effect.hide, false);
	            }

	            element.addEventListener('mouseup', Effect.hide, false);
	            element.addEventListener('mouseleave', Effect.hide, false);
	        }
	    }

	    Waves.displayEffect = function(options) {
	        options = options || {};

	        if ('duration' in options) {
	            Effect.duration = options.duration;
	        }

	        //Wrap input inside <i> tag
	        Effect.wrapInput($$('.waves-effect'));

	        if ('ontouchstart' in window) {
	            document.body.addEventListener('touchstart', showEffect, false);
	        }

	        document.body.addEventListener('mousedown', showEffect, false);
	    };

	    /**
	     * Attach Waves to an input element (or any element which doesn't
	     * bubble mouseup/mousedown events).
	     *   Intended to be used with dynamically loaded forms/inputs, or
	     * where the user doesn't want a delegated click handler.
	     */
	    Waves.attach = function(element) {
	        //FUTURE: automatically add waves classes and allow users
	        // to specify them with an options param? Eg. light/classic/button
	        if (element.tagName.toLowerCase() === 'input') {
	            Effect.wrapInput([element]);
	            element = element.parentElement;
	        }

	        if ('ontouchstart' in window) {
	            element.addEventListener('touchstart', showEffect, false);
	        }

	        element.addEventListener('mousedown', showEffect, false);
	    };

	    window.Waves = Waves;

	    document.addEventListener('DOMContentLoaded', function() {
	        Waves.displayEffect();
	    }, false);

	})(window);
	;Materialize.toast = function (message, displayLength, className, completeCallback) {
	    className = className || "";

	    var container = document.getElementById('toast-container');

	    // Create toast container if it does not exist
	    if (container === null) {
	        // create notification container
	        container = document.createElement('div');
	        container.id = 'toast-container';
	        document.body.appendChild(container);
	    }

	    // Select and append toast
	    var newToast = createToast(message);

	    // only append toast if message is not undefined
	    if(message){
	        container.appendChild(newToast);
	    }

	    newToast.style.top = '35px';
	    newToast.style.opacity = 0;

	    // Animate toast in
	    Vel(newToast, { "top" : "0px", opacity: 1 }, {duration: 300,
	      easing: 'easeOutCubic',
	      queue: false});

	    // Allows timer to be pause while being panned
	    var timeLeft = displayLength;
	    var counterInterval = setInterval (function(){


	      if (newToast.parentNode === null)
	        window.clearInterval(counterInterval);

	      // If toast is not being dragged, decrease its time remaining
	      if (!newToast.classList.contains('panning')) {
	        timeLeft -= 20;
	      }

	      if (timeLeft <= 0) {
	        // Animate toast out
	        Vel(newToast, {"opacity": 0, marginTop: '-40px'}, { duration: 375,
	            easing: 'easeOutExpo',
	            queue: false,
	            complete: function(){
	              // Call the optional callback
	              if(typeof(completeCallback) === "function")
	                completeCallback();
	              // Remove toast after it times out
	              this[0].parentNode.removeChild(this[0]);
	            }
	          });
	        window.clearInterval(counterInterval);
	      }
	    }, 20);



	    function createToast(html) {

	        // Create toast
	        var toast = document.createElement('div');
	        toast.classList.add('toast');
	        if (className) {
	            var classes = className.split(' ');

	            for (var i = 0, count = classes.length; i < count; i++) {
	                toast.classList.add(classes[i]);
	            }
	        }
	        // If type of parameter is HTML Element
	        if ( typeof HTMLElement === "object" ? html instanceof HTMLElement : html && typeof html === "object" && html !== null && html.nodeType === 1 && typeof html.nodeName==="string"
	) {
	          toast.appendChild(html);
	        }
	        else if (html instanceof jQuery) {
	          // Check if it is jQuery object
	          toast.appendChild(html[0]);
	        }
	        else {
	          // Insert as text;
	          toast.innerHTML = html; 
	        }
	        // Bind hammer
	        var hammerHandler = new Hammer(toast, {prevent_default: false});
	        hammerHandler.on('pan', function(e) {
	          var deltaX = e.deltaX;
	          var activationDistance = 80;

	          // Change toast state
	          if (!toast.classList.contains('panning')){
	            toast.classList.add('panning');
	          }

	          var opacityPercent = 1-Math.abs(deltaX / activationDistance);
	          if (opacityPercent < 0)
	            opacityPercent = 0;

	          Vel(toast, {left: deltaX, opacity: opacityPercent }, {duration: 50, queue: false, easing: 'easeOutQuad'});

	        });

	        hammerHandler.on('panend', function(e) {
	          var deltaX = e.deltaX;
	          var activationDistance = 80;

	          // If toast dragged past activation point
	          if (Math.abs(deltaX) > activationDistance) {
	            Vel(toast, {marginTop: '-40px'}, { duration: 375,
	                easing: 'easeOutExpo',
	                queue: false,
	                complete: function(){
	                  if(typeof(completeCallback) === "function") {
	                    completeCallback();
	                  }
	                  toast.parentNode.removeChild(toast);
	                }
	            });

	          } else {
	            toast.classList.remove('panning');
	            // Put toast back into original position
	            Vel(toast, { left: 0, opacity: 1 }, { duration: 300,
	              easing: 'easeOutExpo',
	              queue: false
	            });

	          }
	        });

	        return toast;
	    }
	};
	;(function ($) {

	  var methods = {
	    init : function(options) {
	      var defaults = {
	        menuWidth: 240,
	        edge: 'left',
	        closeOnClick: false
	      };
	      options = $.extend(defaults, options);

	      $(this).each(function(){
	        var $this = $(this);
	        var menu_id = $("#"+ $this.attr('data-activates'));

	        // Set to width
	        if (options.menuWidth != 240) {
	          menu_id.css('width', options.menuWidth);
	        }

	        // Add Touch Area
	        var dragTarget = $('<div class="drag-target"></div>');
	        $('body').append(dragTarget);

	        if (options.edge == 'left') {
	          menu_id.css('left', -1 * (options.menuWidth + 10));
	          dragTarget.css({'left': 0}); // Add Touch Area
	        }
	        else {
	          menu_id.addClass('right-aligned') // Change text-alignment to right
	            .css('right', -1 * (options.menuWidth + 10))
	            .css('left', '');
	          dragTarget.css({'right': 0}); // Add Touch Area
	        }

	        // If fixed sidenav, bring menu out
	        if (menu_id.hasClass('fixed')) {
	            if (window.innerWidth > 992) {
	              menu_id.css('left', 0);
	            }
	          }

	        // Window resize to reset on large screens fixed
	        if (menu_id.hasClass('fixed')) {
	          $(window).resize( function() {
	            if (window.innerWidth > 992) {
	              // Close menu if window is resized bigger than 992 and user has fixed sidenav
	              if ($('#sidenav-overlay').css('opacity') !== 0 && menuOut) {
	                removeMenu(true);
	              }
	              else {
	                menu_id.removeAttr('style');
	                menu_id.css('width', options.menuWidth);
	              }
	            }
	            else if (menuOut === false){
	              if (options.edge === 'left')
	                menu_id.css('left', -1 * (options.menuWidth + 10));
	              else
	                menu_id.css('right', -1 * (options.menuWidth + 10));
	            }

	          });
	        }

	        // if closeOnClick, then add close event for all a tags in side sideNav
	        if (options.closeOnClick === true) {
	          menu_id.on("click.itemclick", "a:not(.collapsible-header)", function(){
	            removeMenu();
	          });
	        }

	        function removeMenu(restoreNav) {
	          panning = false;
	          menuOut = false;

	          // Reenable scrolling
	          $('body').css('overflow', '');

	          $('#sidenav-overlay').velocity({opacity: 0}, {duration: 200, queue: false, easing: 'easeOutQuad',
	            complete: function() {
	              $(this).remove();
	            } });
	          if (options.edge === 'left') {
	            // Reset phantom div
	            dragTarget.css({width: '', right: '', left: '0'});
	            menu_id.velocity(
	              {left: -1 * (options.menuWidth + 10)},
	              { duration: 200,
	                queue: false,
	                easing: 'easeOutCubic',
	                complete: function() {
	                  if (restoreNav === true) {
	                    // Restore Fixed sidenav
	                    menu_id.removeAttr('style');
	                    menu_id.css('width', options.menuWidth);
	                  }
	                }

	            });
	          }
	          else {
	            // Reset phantom div
	            dragTarget.css({width: '', right: '0', left: ''});
	            menu_id.velocity(
	              {right: -1 * (options.menuWidth + 10)},
	              { duration: 200,
	                queue: false,
	                easing: 'easeOutCubic',
	                complete: function() {
	                  if (restoreNav === true) {
	                    // Restore Fixed sidenav
	                    menu_id.removeAttr('style');
	                    menu_id.css('width', options.menuWidth);
	                  }
	                }
	              });
	          }
	        }



	        // Touch Event
	        var panning = false;
	        var menuOut = false;

	        dragTarget.on('click', function(){
	          removeMenu();
	        });

	        dragTarget.hammer({
	          prevent_default: false
	        }).bind('pan', function(e) {

	          if (e.gesture.pointerType == "touch") {

	            var direction = e.gesture.direction;
	            var x = e.gesture.center.x;
	            var y = e.gesture.center.y;
	            var velocityX = e.gesture.velocityX;

	            // Disable Scrolling
	            $('body').css('overflow', 'hidden');

	            // If overlay does not exist, create one and if it is clicked, close menu
	            if ($('#sidenav-overlay').length === 0) {
	              var overlay = $('<div id="sidenav-overlay"></div>');
	              overlay.css('opacity', 0).click( function(){
	                removeMenu();
	              });
	              $('body').append(overlay);
	            }

	            // Keep within boundaries
	            if (options.edge === 'left') {
	              if (x > options.menuWidth) { x = options.menuWidth; }
	              else if (x < 0) { x = 0; }
	            }

	            if (options.edge === 'left') {
	              // Left Direction
	              if (x < (options.menuWidth / 2)) { menuOut = false; }
	              // Right Direction
	              else if (x >= (options.menuWidth / 2)) { menuOut = true; }

	              menu_id.css('left', (x - options.menuWidth));
	            }
	            else {
	              // Left Direction
	              if (x < (window.innerWidth - options.menuWidth / 2)) {
	                menuOut = true;
	              }
	              // Right Direction
	              else if (x >= (window.innerWidth - options.menuWidth / 2)) {
	               menuOut = false;
	             }
	              var rightPos = -1 *(x - options.menuWidth / 2);
	              if (rightPos > 0) {
	                rightPos = 0;
	              }

	              menu_id.css('right', rightPos);
	            }




	            // Percentage overlay
	            var overlayPerc;
	            if (options.edge === 'left') {
	              overlayPerc = x / options.menuWidth;
	              $('#sidenav-overlay').velocity({opacity: overlayPerc }, {duration: 50, queue: false, easing: 'easeOutQuad'});
	            }
	            else {
	              overlayPerc = Math.abs((x - window.innerWidth) / options.menuWidth);
	              $('#sidenav-overlay').velocity({opacity: overlayPerc }, {duration: 50, queue: false, easing: 'easeOutQuad'});
	            }
	          }

	        }).bind('panend', function(e) {

	          if (e.gesture.pointerType == "touch") {
	            var velocityX = e.gesture.velocityX;
	            panning = false;
	            if (options.edge === 'left') {
	              // If velocityX <= 0.3 then the user is flinging the menu closed so ignore menuOut
	              if ((menuOut && velocityX <= 0.3) || velocityX < -0.5) {
	                menu_id.velocity({left: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
	                $('#sidenav-overlay').velocity({opacity: 1 }, {duration: 50, queue: false, easing: 'easeOutQuad'});
	                dragTarget.css({width: '50%', right: 0, left: ''});
	              }
	              else if (!menuOut || velocityX > 0.3) {
	                // Enable Scrolling
	                $('body').css('overflow', '');
	                // Slide menu closed
	                menu_id.velocity({left: -1 * (options.menuWidth + 10)}, {duration: 200, queue: false, easing: 'easeOutQuad'});
	                $('#sidenav-overlay').velocity({opacity: 0 }, {duration: 200, queue: false, easing: 'easeOutQuad',
	                  complete: function () {
	                    $(this).remove();
	                  }});
	                dragTarget.css({width: '10px', right: '', left: 0});
	              }
	            }
	            else {
	              if ((menuOut && velocityX >= -0.3) || velocityX > 0.5) {
	                menu_id.velocity({right: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
	                $('#sidenav-overlay').velocity({opacity: 1 }, {duration: 50, queue: false, easing: 'easeOutQuad'});
	                dragTarget.css({width: '50%', right: '', left: 0});
	              }
	              else if (!menuOut || velocityX < -0.3) {
	                // Enable Scrolling
	                $('body').css('overflow', '');
	                // Slide menu closed
	                menu_id.velocity({right: -1 * (options.menuWidth + 10)}, {duration: 200, queue: false, easing: 'easeOutQuad'});
	                $('#sidenav-overlay').velocity({opacity: 0 }, {duration: 200, queue: false, easing: 'easeOutQuad',
	                  complete: function () {
	                    $(this).remove();
	                  }});
	                dragTarget.css({width: '10px', right: 0, left: ''});
	              }
	            }

	          }
	        });

	          $this.click(function() {
	            if (menuOut === true) {
	              menuOut = false;
	              panning = false;
	              removeMenu();
	            }
	            else {

	              // Disable Scrolling
	              $('body').css('overflow', 'hidden');
	              // Push current drag target on top of DOM tree
	              $('body').append(dragTarget);
	              
	              if (options.edge === 'left') {
	                dragTarget.css({width: '50%', right: 0, left: ''});
	                menu_id.velocity({left: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
	              }
	              else {
	                dragTarget.css({width: '50%', right: '', left: 0});
	                menu_id.velocity({right: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});
	                menu_id.css('left','');
	              }

	              var overlay = $('<div id="sidenav-overlay"></div>');
	              overlay.css('opacity', 0)
	              .click(function(){
	                menuOut = false;
	                panning = false;
	                removeMenu();
	                overlay.velocity({opacity: 0}, {duration: 300, queue: false, easing: 'easeOutQuad',
	                  complete: function() {
	                    $(this).remove();
	                  } });

	              });
	              $('body').append(overlay);
	              overlay.velocity({opacity: 1}, {duration: 300, queue: false, easing: 'easeOutQuad',
	                complete: function () {
	                  menuOut = true;
	                  panning = false;
	                }
	              });
	            }

	            return false;
	          });
	      });


	    },
	    show : function() {
	      this.trigger('click');
	    },
	    hide : function() {
	      $('#sidenav-overlay').trigger('click');
	    }
	  };


	    $.fn.sideNav = function(methodOrOptions) {
	      if ( methods[methodOrOptions] ) {
	        return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
	      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
	        // Default to "init"
	        return methods.init.apply( this, arguments );
	      } else {
	        $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.sideNav' );
	      }
	    }; // Plugin end
	}( jQuery ));
	;/**
	 * Extend jquery with a scrollspy plugin.
	 * This watches the window scroll and fires events when elements are scrolled into viewport.
	 *
	 * throttle() and getTime() taken from Underscore.js
	 * https://github.com/jashkenas/underscore
	 *
	 * @author Copyright 2013 John Smart
	 * @license https://raw.github.com/thesmart/jquery-scrollspy/master/LICENSE
	 * @see https://github.com/thesmart
	 * @version 0.1.2
	 */
	(function($) {

		var jWindow = $(window);
		var elements = [];
		var elementsInView = [];
		var isSpying = false;
		var ticks = 0;
		var unique_id = 1;
		var offset = {
			top : 0,
			right : 0,
			bottom : 0,
			left : 0,
		}

		/**
		 * Find elements that are within the boundary
		 * @param {number} top
		 * @param {number} right
		 * @param {number} bottom
		 * @param {number} left
		 * @return {jQuery}		A collection of elements
		 */
		function findElements(top, right, bottom, left) {
			var hits = $();
			$.each(elements, function(i, element) {
				if (element.height() > 0) {
					var elTop = element.offset().top,
						elLeft = element.offset().left,
						elRight = elLeft + element.width(),
						elBottom = elTop + element.height();

					var isIntersect = !(elLeft > right ||
						elRight < left ||
						elTop > bottom ||
						elBottom < top);

					if (isIntersect) {
						hits.push(element);
					}
				}
			});

			return hits;
		}


		/**
		 * Called when the user scrolls the window
		 */
		function onScroll() {
			// unique tick id
			++ticks;

			// viewport rectangle
			var top = jWindow.scrollTop(),
				left = jWindow.scrollLeft(),
				right = left + jWindow.width(),
				bottom = top + jWindow.height();

			// determine which elements are in view
	//        + 60 accounts for fixed nav
			var intersections = findElements(top+offset.top + 200, right+offset.right, bottom+offset.bottom, left+offset.left);
			$.each(intersections, function(i, element) {

				var lastTick = element.data('scrollSpy:ticks');
				if (typeof lastTick != 'number') {
					// entered into view
					element.triggerHandler('scrollSpy:enter');
				}

				// update tick id
				element.data('scrollSpy:ticks', ticks);
			});

			// determine which elements are no longer in view
			$.each(elementsInView, function(i, element) {
				var lastTick = element.data('scrollSpy:ticks');
				if (typeof lastTick == 'number' && lastTick !== ticks) {
					// exited from view
					element.triggerHandler('scrollSpy:exit');
					element.data('scrollSpy:ticks', null);
				}
			});

			// remember elements in view for next tick
			elementsInView = intersections;
		}

		/**
		 * Called when window is resized
		*/
		function onWinSize() {
			jWindow.trigger('scrollSpy:winSize');
		}

		/**
		 * Get time in ms
	   * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
		 * @type {function}
		 * @return {number}
		 */
		var getTime = (Date.now || function () {
			return new Date().getTime();
		});

		/**
		 * Returns a function, that, when invoked, will only be triggered at most once
		 * during a given window of time. Normally, the throttled function will run
		 * as much as it can, without ever going more than once per `wait` duration;
		 * but if you'd like to disable the execution on the leading edge, pass
		 * `{leading: false}`. To disable execution on the trailing edge, ditto.
		 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
		 * @param {function} func
		 * @param {number} wait
		 * @param {Object=} options
		 * @returns {Function}
		 */
		function throttle(func, wait, options) {
			var context, args, result;
			var timeout = null;
			var previous = 0;
			options || (options = {});
			var later = function () {
				previous = options.leading === false ? 0 : getTime();
				timeout = null;
				result = func.apply(context, args);
				context = args = null;
			};
			return function () {
				var now = getTime();
				if (!previous && options.leading === false) previous = now;
				var remaining = wait - (now - previous);
				context = this;
				args = arguments;
				if (remaining <= 0) {
					clearTimeout(timeout);
					timeout = null;
					previous = now;
					result = func.apply(context, args);
					context = args = null;
				} else if (!timeout && options.trailing !== false) {
					timeout = setTimeout(later, remaining);
				}
				return result;
			};
		};

		/**
		 * Enables ScrollSpy using a selector
		 * @param {jQuery|string} selector  The elements collection, or a selector
		 * @param {Object=} options	Optional.
	        throttle : number -> scrollspy throttling. Default: 100 ms
	        offsetTop : number -> offset from top. Default: 0
	        offsetRight : number -> offset from right. Default: 0
	        offsetBottom : number -> offset from bottom. Default: 0
	        offsetLeft : number -> offset from left. Default: 0
		 * @returns {jQuery}
		 */
		$.scrollSpy = function(selector, options) {
			var visible = [];
			selector = $(selector);
			selector.each(function(i, element) {
				elements.push($(element));
				$(element).data("scrollSpy:id", i);
				// Smooth scroll to section
			  $('a[href=#' + $(element).attr('id') + ']').click(function(e) {
			    e.preventDefault();
			    var offset = $(this.hash).offset().top + 1;

	//          offset - 200 allows elements near bottom of page to scroll
				
		    	$('html, body').animate({ scrollTop: offset - 200 }, {duration: 400, queue: false, easing: 'easeOutCubic'});
				
			  });
			});
			options = options || {
				throttle: 100
			};

			offset.top = options.offsetTop || 0;
			offset.right = options.offsetRight || 0;
			offset.bottom = options.offsetBottom || 0;
			offset.left = options.offsetLeft || 0;

			var throttledScroll = throttle(onScroll, options.throttle || 100);
			var readyScroll = function(){
				$(document).ready(throttledScroll);
			};

			if (!isSpying) {
				jWindow.on('scroll', readyScroll);
				jWindow.on('resize', readyScroll);
				isSpying = true;
			}

			// perform a scan once, after current execution context, and after dom is ready
			setTimeout(readyScroll, 0);


			selector.on('scrollSpy:enter', function() {
				visible = $.grep(visible, function(value) {
		      return value.height() != 0;
		    });

				var $this = $(this);

				if (visible[0]) {
					$('a[href=#' + visible[0].attr('id') + ']').removeClass('active');
					if ($this.data('scrollSpy:id') < visible[0].data('scrollSpy:id')) {
						visible.unshift($(this));
					}
					else {
						visible.push($(this));
					}
				}
				else {
					visible.push($(this));
				}


				$('a[href=#' + visible[0].attr('id') + ']').addClass('active');
			});
			selector.on('scrollSpy:exit', function() {
				visible = $.grep(visible, function(value) {
		      return value.height() != 0;
		    });

				if (visible[0]) {
					$('a[href=#' + visible[0].attr('id') + ']').removeClass('active');
					var $this = $(this);
					visible = $.grep(visible, function(value) {
		        return value.attr('id') != $this.attr('id');
		      });
		      if (visible[0]) { // Check if empty
						$('a[href=#' + visible[0].attr('id') + ']').addClass('active');
		      }
				}
			});

			return selector;
		};

		/**
		 * Listen for window resize events
		 * @param {Object=} options						Optional. Set { throttle: number } to change throttling. Default: 100 ms
		 * @returns {jQuery}		$(window)
		 */
		$.winSizeSpy = function(options) {
			$.winSizeSpy = function() { return jWindow; }; // lock from multiple calls
			options = options || {
				throttle: 100
			};
			return jWindow.on('resize', throttle(onWinSize, options.throttle || 100));
		};

		/**
		 * Enables ScrollSpy on a collection of elements
		 * e.g. $('.scrollSpy').scrollSpy()
		 * @param {Object=} options	Optional.
												throttle : number -> scrollspy throttling. Default: 100 ms
												offsetTop : number -> offset from top. Default: 0
												offsetRight : number -> offset from right. Default: 0
												offsetBottom : number -> offset from bottom. Default: 0
												offsetLeft : number -> offset from left. Default: 0
		 * @returns {jQuery}
		 */
		$.fn.scrollSpy = function(options) {
			return $.scrollSpy($(this), options);
		};

	})(jQuery);;(function ($) {
	  $(document).ready(function() {

	    // Function to update labels of text fields
	    Materialize.updateTextFields = function() {
	      var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';
	      $(input_selector).each(function(index, element) {
	        if ($(element).val().length > 0 || $(this).attr('placeholder') !== undefined || $(element)[0].validity.badInput === true) {
	          $(this).siblings('label').addClass('active');
	        }
	        else {
	          $(this).siblings('label, i').removeClass('active');
	        }
	      });
	    };

	    // Text based inputs
	    var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';

	    // Handle HTML5 autofocus
	    $('input[autofocus]').siblings('label, i').addClass('active');

	    // Add active if form auto complete
	    $(document).on('change', input_selector, function () {
	      if($(this).val().length !== 0 || $(this).attr('placeholder') !== undefined) {
	        $(this).siblings('label').addClass('active');
	      }
	      validate_field($(this));
	    });

	    // Add active if input element has been pre-populated on document ready
	    $(document).ready(function() {
	      Materialize.updateTextFields();
	    });

	    // HTML DOM FORM RESET handling
	    $(document).on('reset', function(e) {
	      var formReset = $(e.target);
	      if (formReset.is('form')) {
	        formReset.find(input_selector).removeClass('valid').removeClass('invalid');
	        formReset.find(input_selector).each(function () {
	          if ($(this).attr('value') === '') {
	            $(this).siblings('label, i').removeClass('active');
	          }
	        });

	        // Reset select
	        formReset.find('select.initialized').each(function () {
	          var reset_text = formReset.find('option[selected]').text();
	          formReset.siblings('input.select-dropdown').val(reset_text);
	        });
	      }
	    });

	    // Add active when element has focus
	    $(document).on('focus', input_selector, function () {
	      $(this).siblings('label, i').addClass('active');
	    });

	    $(document).on('blur', input_selector, function () {
	      var $inputElement = $(this);
	      if ($inputElement.val().length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') === undefined) {
	        $inputElement.siblings('label, i').removeClass('active');
	      }

	      if ($inputElement.val().length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') !== undefined) {
	        $inputElement.siblings('i').removeClass('active');
	      }
	      validate_field($inputElement);
	    });

	    window.validate_field = function(object) {
	      var hasLength = object.attr('length') !== undefined;
	      var lenAttr = parseInt(object.attr('length'));
	      var len = object.val().length;

	      if (object.val().length === 0 && object[0].validity.badInput === false) {
	        if (object.hasClass('validate')) {
	          object.removeClass('valid');
	          object.removeClass('invalid');
	        }
	      }
	      else {
	        if (object.hasClass('validate')) {
	          // Check for character counter attributes
	          if ((object.is(':valid') && hasLength && (len <= lenAttr)) || (object.is(':valid') && !hasLength)) {
	            object.removeClass('invalid');
	            object.addClass('valid');
	          }
	          else {
	            object.removeClass('valid');
	            object.addClass('invalid');
	          }
	        }
	      }
	    };


	    // Textarea Auto Resize
	    var hiddenDiv = $('.hiddendiv').first();
	    if (!hiddenDiv.length) {
	      hiddenDiv = $('<div class="hiddendiv common"></div>');
	      $('body').append(hiddenDiv);
	    }
	    var text_area_selector = '.materialize-textarea';

	    function textareaAutoResize($textarea) {
	      // Set font properties of hiddenDiv

	      var fontFamily = $textarea.css('font-family');
	      var fontSize = $textarea.css('font-size');

	      if (fontSize) { hiddenDiv.css('font-size', fontSize); }
	      if (fontFamily) { hiddenDiv.css('font-family', fontFamily); }

	      if ($textarea.attr('wrap') === "off") {
	        hiddenDiv.css('overflow-wrap', "normal")
	                 .css('white-space', "pre");
	      }




	      hiddenDiv.text($textarea.val() + '\n');
	      var content = hiddenDiv.html().replace(/\n/g, '<br>');
	      hiddenDiv.html(content);


	      // When textarea is hidden, width goes crazy.
	      // Approximate with half of window size

	      if ($textarea.is(':visible')) {
	        hiddenDiv.css('width', $textarea.width());
	      }
	      else {
	        hiddenDiv.css('width', $(window).width()/2);
	      }

	      $textarea.css('height', hiddenDiv.height());
	    }

	    $(text_area_selector).each(function () {
	      var $textarea = $(this);
	      if ($textarea.val().length) {
	        textareaAutoResize($textarea);
	      }
	    });

	    $('body').on('keyup keydown autoresize', text_area_selector, function () {
	      textareaAutoResize($(this));
	    });


	    // File Input Path

	    $(document).on('change', '.file-field input[type="file"]', function () {
	      var file_field = $(this).closest('.file-field');
	      var path_input = file_field.find('input.file-path');
	      var files      = $(this)[0].files;
	      var file_names = [];
	      for (var i = 0; i < files.length; i++) {
	        file_names.push(files[i].name);
	      }
	      path_input.val(file_names.join(", "));
	      path_input.trigger('change');
	    });


	    /****************
	    *  Range Input  *
	    ****************/

	    var range_type = 'input[type=range]';
	    var range_mousedown = false;
	    var left;

	    $(range_type).each(function () {
	      var thumb = $('<span class="thumb"><span class="value"></span></span>');
	      $(this).after(thumb);
	    });

	    var range_wrapper = '.range-field';
	    $(document).on('change', range_type, function(e) {
	      var thumb = $(this).siblings('.thumb');
	      thumb.find('.value').html($(this).val());
	    });

	    $(document).on('input mousedown touchstart', range_type, function(e) {
	      var thumb = $(this).siblings('.thumb');

	      // If thumb indicator does not exist yet, create it
	      if (thumb.length <= 0) {
	        thumb = $('<span class="thumb"><span class="value"></span></span>');
	        $(this).append(thumb);
	      }

	      // Set indicator value
	      thumb.find('.value').html($(this).val());

	      range_mousedown = true;
	      $(this).addClass('active');

	      if (!thumb.hasClass('active')) {
	        thumb.velocity({ height: "30px", width: "30px", top: "-20px", marginLeft: "-15px"}, { duration: 300, easing: 'easeOutExpo' });
	      }

	      if(e.pageX === undefined || e.pageX === null){//mobile
	         left = e.originalEvent.touches[0].pageX - $(this).offset().left;
	      }
	      else{ // desktop
	         left = e.pageX - $(this).offset().left;
	      }
	      var width = $(this).outerWidth();

	      if (left < 0) {
	        left = 0;
	      }
	      else if (left > width) {
	        left = width;
	      }
	      thumb.addClass('active').css('left', left);
	      thumb.find('.value').html($(this).val());


	    });

	    $(document).on('mouseup touchend', range_wrapper, function() {
	      range_mousedown = false;
	      $(this).removeClass('active');
	    });

	    $(document).on('mousemove touchmove', range_wrapper, function(e) {
	      var thumb = $(this).children('.thumb');
	      var left;
	      if (range_mousedown) {
	        if (!thumb.hasClass('active')) {
	          thumb.velocity({ height: '30px', width: '30px', top: '-20px', marginLeft: '-15px'}, { duration: 300, easing: 'easeOutExpo' });
	        }
	        if (e.pageX === undefined || e.pageX === null) { //mobile
	          left = e.originalEvent.touches[0].pageX - $(this).offset().left;
	        }
	        else{ // desktop
	          left = e.pageX - $(this).offset().left;
	        }
	        var width = $(this).outerWidth();

	        if (left < 0) {
	          left = 0;
	        }
	        else if (left > width) {
	          left = width;
	        }
	        thumb.addClass('active').css('left', left);
	        thumb.find('.value').html(thumb.siblings(range_type).val());
	      }
	    });

	    $(document).on('mouseout touchleave', range_wrapper, function() {
	      if (!range_mousedown) {

	        var thumb = $(this).children('.thumb');

	        if (thumb.hasClass('active')) {
	          thumb.velocity({ height: '0', width: '0', top: '10px', marginLeft: '-6px'}, { duration: 100 });
	        }
	        thumb.removeClass('active');
	      }
	    });

	  }); // End of $(document).ready




	  // Select Plugin
	  $.fn.material_select = function (callback) {
	    $(this).each(function(){
	      $select = $(this);

	      if ( $select.hasClass('browser-default')) {
	        return; // Continue to next (return false breaks out of entire loop)
	      }

	      // Tear down structure if Select needs to be rebuilt
	      var lastID = $select.data('select-id');
	      if (lastID) {
	        $select.parent().find('span.caret').remove();
	        $select.parent().find('input').remove();

	        $select.unwrap();
	        $('ul#select-options-'+lastID).remove();
	      }

	      // If destroying the select, remove the selelct-id and reset it to it's uninitialized state.
	      if(callback === 'destroy') {
	          $select.data('select-id', null).removeClass('initialized');
	          return;
	      }

	      var uniqueID = Materialize.guid();
	      $select.data('select-id', uniqueID);
	      var wrapper = $('<div class="select-wrapper"></div>');
	      wrapper.addClass($select.attr('class'));
	      var options = $('<ul id="select-options-' + uniqueID+'" class="dropdown-content select-dropdown"></ul>');
	      var selectOptions = $select.children('option');

	      var label;
	      if ($select.find('option:selected') !== undefined) {
	        label = $select.find('option:selected');
	      }
	      else {
	        label = options.first();
	      }


	      // Create Dropdown structure
	      selectOptions.each(function () {
	        // Add disabled attr if disabled
	        options.append($('<li class="' + (($(this).is(':disabled')) ? 'disabled' : '') + '"><span>' + $(this).html() + '</span></li>'));
	      });


	      options.find('li').each(function (i) {
	        var $curr_select = $select;
	        $(this).click(function () {
	          // Check if option element is disabled
	          if (!$(this).hasClass('disabled')) {
	            $curr_select.find('option').eq(i).prop('selected', true);
	            // Trigger onchange() event
	            $curr_select.trigger('change');
	            $curr_select.siblings('input.select-dropdown').val($(this).text());
	            if (typeof callback !== 'undefined') callback();
	          }
	        });

	      });

	      // Wrap Elements
	      $select.wrap(wrapper);
	      // Add Select Display Element
	      var dropdownIcon = $('<span class="caret">&#9660;</span>');
	      if ( $select.is(':disabled') )
	        dropdownIcon.addClass('disabled');

	      // escape double quotes
	      var sanitizedLabelHtml = label.html().replace(/"/g, '&quot;');

	      var $newSelect = $('<input type="text" class="select-dropdown" readonly="true" ' + (($select.is(':disabled')) ? 'disabled' : '') + ' data-activates="select-options-' + uniqueID +'" value="'+ sanitizedLabelHtml +'"/>');
	      $select.before($newSelect);
	      $newSelect.before(dropdownIcon);

	      $('body').append(options);
	      // Check if section element is disabled
	      if (!$select.is(':disabled')) {
	        $newSelect.dropdown({"hover": false});
	      }

	      // Copy tabindex
	      if ($select.attr('tabindex')) {
	        $($newSelect[0]).attr('tabindex', $select.attr('tabindex'));
	      }

	      $select.addClass('initialized');

	      $newSelect.on('focus', function(){
	        $(this).trigger('open');
	        label = $(this).val();
	        selectedOption = options.find('li').filter(function() {
	          return $(this).text().toLowerCase() === label.toLowerCase();
	        })[0];
	        activateOption(options, selectedOption);
	      });

	      $newSelect.on('blur', function(){
	        $(this).trigger('close');
	      });

	      // Make option as selected and scroll to selected position
	      activateOption = function(collection, newOption) {
	        collection.find('li.active').removeClass('active');
	        $(newOption).addClass('active');
	        collection.scrollTo(newOption);
	      };

	      // Allow user to search by typing
	      // this array is cleared after 1 second
	      filterQuery = [];

	      onKeyDown = function(event){
	        // TAB - switch to another input
	        if(event.which == 9){
	          $newSelect.trigger('close');
	          return;
	        }

	        // ARROW DOWN WHEN SELECT IS CLOSED - open select options
	        if(event.which == 40 && !options.is(":visible")){
	          $newSelect.trigger('open');
	          return;
	        }

	        // ENTER WHEN SELECT IS CLOSED - submit form
	        if(event.which == 13 && !options.is(":visible")){
	          return;
	        }

	        event.preventDefault();

	        // CASE WHEN USER TYPE LETTERS
	        letter = String.fromCharCode(event.which).toLowerCase();
	        var nonLetters = [9,13,27,38,40];
	        if (letter && (nonLetters.indexOf(event.which) === -1)){
	          filterQuery.push(letter);

	          string = filterQuery.join("");

	          newOption = options.find('li').filter(function() {
	            return $(this).text().toLowerCase().indexOf(string) === 0;
	          })[0];

	          if(newOption){
	            activateOption(options, newOption);
	          }
	        }

	        // ENTER - select option and close when select options are opened
	        if(event.which == 13){
	          activeOption = options.find('li.active:not(.disabled)')[0];
	          if(activeOption){
	            $(activeOption).trigger('click');
	            $newSelect.trigger('close');
	          }
	        }

	        // ARROW DOWN - move to next not disabled option
	        if(event.which == 40){
	          newOption = options.find('li.active').next('li:not(.disabled)')[0];
	          if(newOption){
	            activateOption(options, newOption);
	          }
	        }

	        // ESC - close options
	        if(event.which == 27){
	          $newSelect.trigger('close');
	        }

	        // ARROW UP - move to previous not disabled option
	        if(event.which == 38){
	          newOption = options.find('li.active').prev('li:not(.disabled)')[0];
	          if(newOption){
	            activateOption(options, newOption);
	          }
	        }

	        // Automaticaly clean filter query so user can search again by starting letters
	        setTimeout(function(){ filterQuery = []; }, 1000);
	      };

	      $newSelect.on('keydown', onKeyDown);
	    });
	  };

	}( jQuery ));
	;(function ($) {

	  var methods = {

	    init : function(options) {
	      var defaults = {
	        indicators: true,
	        height: 400,
	        transition: 500,
	        interval: 6000
	      };
	      options = $.extend(defaults, options);

	      return this.each(function() {

	        // For each slider, we want to keep track of
	        // which slide is active and its associated content
	        var $this = $(this);
	        var $slider = $this.find('ul.slides').first();
	        var $slides = $slider.find('li');
	        var $active_index = $slider.find('.active').index();
	        var $active;
	        if ($active_index != -1) { $active = $slides.eq($active_index); }

	        // Transitions the caption depending on alignment
	        function captionTransition(caption, duration) {
	          if (caption.hasClass("center-align")) {
	            caption.velocity({opacity: 0, translateY: -100}, {duration: duration, queue: false});
	          }
	          else if (caption.hasClass("right-align")) {
	            caption.velocity({opacity: 0, translateX: 100}, {duration: duration, queue: false});
	          }
	          else if (caption.hasClass("left-align")) {
	            caption.velocity({opacity: 0, translateX: -100}, {duration: duration, queue: false});
	          }
	        }

	        // This function will transition the slide to any index of the next slide
	        function moveToSlide(index) {
	          if (index >= $slides.length) index = 0;
	          else if (index < 0) index = $slides.length -1;

	          $active_index = $slider.find('.active').index();

	          // Only do if index changes
	          if ($active_index != index) {
	            $active = $slides.eq($active_index);
	            $caption = $active.find('.caption');

	            $active.removeClass('active');
	            $active.velocity({opacity: 0}, {duration: options.transition, queue: false, easing: 'easeOutQuad',
	                              complete: function() {
	                                $slides.not('.active').velocity({opacity: 0, translateX: 0, translateY: 0}, {duration: 0, queue: false});
	                              } });
	            captionTransition($caption, options.transition);


	            // Update indicators
	            if (options.indicators) {
	              $indicators.eq($active_index).removeClass('active');
	            }

	            $slides.eq(index).velocity({opacity: 1}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
	            $slides.eq(index).find('.caption').velocity({opacity: 1, translateX: 0, translateY: 0}, {duration: options.transition, delay: options.transition, queue: false, easing: 'easeOutQuad'});
	            $slides.eq(index).addClass('active');


	            // Update indicators
	            if (options.indicators) {
	              $indicators.eq(index).addClass('active');
	            }
	          }
	        }

	        // Set height of slider
	        // If fullscreen, do nothing
	        if (!$this.hasClass('fullscreen')) {
	          if (options.indicators) {
	            // Add height if indicators are present
	            $this.height(options.height + 40);
	          }
	          else {
	            $this.height(options.height);
	          }
	          $slider.height(options.height);
	        }


	        // Set initial positions of captions
	        $slides.find('.caption').each(function () {
	          captionTransition($(this), 0);
	        });

	        // Move img src into background-image
	        $slides.find('img').each(function () {
	          $(this).css('background-image', 'url(' + $(this).attr('src') + ')' );
	          $(this).attr('src', 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==');
	        });

	        // dynamically add indicators
	        if (options.indicators) {
	          var $indicators = $('<ul class="indicators"></ul>');
	          $slides.each(function( index ) {
	            var $indicator = $('<li class="indicator-item"></li>');

	            // Handle clicks on indicators
	            $indicator.click(function () {
	              var $parent = $slider.parent();
	              var curr_index = $parent.find($(this)).index();
	              moveToSlide(curr_index);

	              // reset interval
	              clearInterval($interval);
	              $interval = setInterval(
	                function(){
	                  $active_index = $slider.find('.active').index();
	                  if ($slides.length == $active_index + 1) $active_index = 0; // loop to start
	                  else $active_index += 1;

	                  moveToSlide($active_index);

	                }, options.transition + options.interval
	              );
	            });
	            $indicators.append($indicator);
	          });
	          $this.append($indicators);
	          $indicators = $this.find('ul.indicators').find('li.indicator-item');
	        }

	        if ($active) {
	          $active.show();
	        }
	        else {
	          $slides.first().addClass('active').velocity({opacity: 1}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});

	          $active_index = 0;
	          $active = $slides.eq($active_index);

	          // Update indicators
	          if (options.indicators) {
	            $indicators.eq($active_index).addClass('active');
	          }
	        }

	        // Adjust height to current slide
	        $active.find('img').each(function() {
	          $active.find('.caption').velocity({opacity: 1, translateX: 0, translateY: 0}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
	        });

	        // auto scroll
	        $interval = setInterval(
	          function(){
	            $active_index = $slider.find('.active').index();
	            moveToSlide($active_index + 1);

	          }, options.transition + options.interval
	        );


	        // HammerJS, Swipe navigation

	        // Touch Event
	        var panning = false;
	        var swipeLeft = false;
	        var swipeRight = false;

	        $this.hammer({
	            prevent_default: false
	        }).bind('pan', function(e) {
	          if (e.gesture.pointerType === "touch") {

	            // reset interval
	            clearInterval($interval);

	            var direction = e.gesture.direction;
	            var x = e.gesture.deltaX;
	            var velocityX = e.gesture.velocityX;

	            $curr_slide = $slider.find('.active');
	            $curr_slide.velocity({ translateX: x
	                }, {duration: 50, queue: false, easing: 'easeOutQuad'});

	            // Swipe Left
	            if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.65)) {
	              swipeRight = true;
	            }
	            // Swipe Right
	            else if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.65)) {
	              swipeLeft = true;
	            }

	            // Make Slide Behind active slide visible
	            var next_slide;
	            if (swipeLeft) {
	              next_slide = $curr_slide.next();
	              if (next_slide.length === 0) {
	                next_slide = $slides.first();
	              }
	              next_slide.velocity({ opacity: 1
	                  }, {duration: 300, queue: false, easing: 'easeOutQuad'});
	            }
	            if (swipeRight) {
	              next_slide = $curr_slide.prev();
	              if (next_slide.length === 0) {
	                next_slide = $slides.last();
	              }
	              next_slide.velocity({ opacity: 1
	                  }, {duration: 300, queue: false, easing: 'easeOutQuad'});
	            }


	          }

	        }).bind('panend', function(e) {
	          if (e.gesture.pointerType === "touch") {

	            $curr_slide = $slider.find('.active');
	            panning = false;
	            curr_index = $slider.find('.active').index();

	            if (!swipeRight && !swipeLeft) {
	              // Return to original spot
	              $curr_slide.velocity({ translateX: 0
	                  }, {duration: 300, queue: false, easing: 'easeOutQuad'});
	            }
	            else if (swipeLeft) {
	              moveToSlide(curr_index + 1);
	              $curr_slide.velocity({translateX: -1 * $this.innerWidth() }, {duration: 300, queue: false, easing: 'easeOutQuad',
	                                    complete: function() {
	                                      $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});
	                                    } });
	            }
	            else if (swipeRight) {
	              moveToSlide(curr_index - 1);
	              $curr_slide.velocity({translateX: $this.innerWidth() }, {duration: 300, queue: false, easing: 'easeOutQuad',
	                                    complete: function() {
	                                      $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});
	                                    } });
	            }
	            swipeLeft = false;
	            swipeRight = false;

	            // Restart interval
	            clearInterval($interval);
	            $interval = setInterval(
	              function(){
	                $active_index = $slider.find('.active').index();
	                if ($slides.length == $active_index + 1) $active_index = 0; // loop to start
	                else $active_index += 1;

	                moveToSlide($active_index);

	              }, options.transition + options.interval
	            );
	          }
	        });

	        $this.on('sliderPause', function() {
	          clearInterval($interval);
	        });

	        $this.on('sliderStart', function() {
	          clearInterval($interval);
	          $interval = setInterval(
	            function(){
	              $active_index = $slider.find('.active').index();
	              if ($slides.length == $active_index + 1) $active_index = 0; // loop to start
	              else $active_index += 1;

	              moveToSlide($active_index);

	            }, options.transition + options.interval
	          );
	        });

	      });



	    },
	    pause : function() {
	      $(this).trigger('sliderPause');
	    },
	    start : function() {
	      $(this).trigger('sliderStart');
	    }
	  };


	    $.fn.slider = function(methodOrOptions) {
	      if ( methods[methodOrOptions] ) {
	        return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
	      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
	        // Default to "init"
	        return methods.init.apply( this, arguments );
	      } else {
	        $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );
	      }
	    }; // Plugin end
	}( jQuery ));;(function ($) {
	  $(document).ready(function() {

	    $(document).on('click.card', '.card', function (e) {
	      if ($(this).find('> .card-reveal').length) {
	        if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
	          // Make Reveal animate down and display none
	          $(this).find('.card-reveal').velocity(
	            {translateY: 0}, {
	              duration: 225,
	              queue: false,
	              easing: 'easeInOutQuad',
	              complete: function() { $(this).css({ display: 'none'}); }
	            }
	          );
	        }
	        else if ($(e.target).is($('.card .activator')) ||
	                 $(e.target).is($('.card .activator i')) ) {
	          $(this).find('.card-reveal').css({ display: 'block'}).velocity("stop", false).velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeInOutQuad'});
	        }
	      }


	    });

	  });
	}( jQuery ));;(function ($) {
	  $(document).ready(function() {

	    $(document).on('click.chip', '.chip .material-icons', function (e) {
	      $(this).parent().remove();
	    });

	  });
	}( jQuery ));;(function ($) {
	  $(document).ready(function() {

	    $.fn.pushpin = function (options) {

	      var defaults = {
	        top: 0,
	        bottom: Infinity,
	        offset: 0
	      }
	      options = $.extend(defaults, options);

	      $index = 0;
	      return this.each(function() {
	        var $uniqueId = Materialize.guid(),
	            $this = $(this),
	            $original_offset = $(this).offset().top;

	        function removePinClasses(object) {
	          object.removeClass('pin-top');
	          object.removeClass('pinned');
	          object.removeClass('pin-bottom');
	        }

	        function updateElements(objects, scrolled) {
	          objects.each(function () {
	            // Add position fixed (because its between top and bottom)
	            if (options.top <= scrolled && options.bottom >= scrolled && !$(this).hasClass('pinned')) {
	              removePinClasses($(this));
	              $(this).css('top', options.offset);
	              $(this).addClass('pinned');
	            }

	            // Add pin-top (when scrolled position is above top)
	            if (scrolled < options.top && !$(this).hasClass('pin-top')) {
	              removePinClasses($(this));
	              $(this).css('top', 0);
	              $(this).addClass('pin-top');
	            }

	            // Add pin-bottom (when scrolled position is below bottom)
	            if (scrolled > options.bottom && !$(this).hasClass('pin-bottom')) {
	              removePinClasses($(this));
	              $(this).addClass('pin-bottom');
	              $(this).css('top', options.bottom - $original_offset);
	            }
	          });
	        }

	        updateElements($this, $(window).scrollTop());
	        $(window).on('scroll.' + $uniqueId, function () {
	          var $scrolled = $(window).scrollTop() + options.offset;
	          updateElements($this, $scrolled);
	        });

	      });

	    };


	  });
	}( jQuery ));;(function ($) {
	  $(document).ready(function() {

	    // jQuery reverse
	    $.fn.reverse = [].reverse;

	    $(document).on('mouseenter.fixedActionBtn', '.fixed-action-btn', function(e) {
	      var $this = $(this);
	      openFABMenu($this);

	    });

	    $(document).on('mouseleave.fixedActionBtn', '.fixed-action-btn', function(e) {
	      var $this = $(this);
	      closeFABMenu($this);
	    });

	  });

	  $.fn.extend({
	    openFAB: function() {
	      var $this = $(this);
	      openFABMenu($this);
	    },
	    closeFAB: function() {
	      closeFABMenu($this);
	    }
	  });


	  var openFABMenu = function (btn) {
	    $this = btn;
	    if ($this.hasClass('active') === false) {
	      $this.addClass('active');
	      $this.find('ul .btn-floating').velocity(
	        { scaleY: ".4", scaleX: ".4", translateY: "40px"},
	        { duration: 0 });

	      var time = 0;
	      $this.find('ul .btn-floating').reverse().each(function () {
	        $(this).velocity(
	          { opacity: "1", scaleX: "1", scaleY: "1", translateY: "0"},
	          { duration: 80, delay: time });
	        time += 40;
	      });
	    }
	  };

	  var closeFABMenu = function (btn) {
	    $this = btn;
	    $this.removeClass('active');
	    var time = 0;
	    $this.find('ul .btn-floating').velocity("stop", true);
	    $this.find('ul .btn-floating').velocity(
	      { opacity: "0", scaleX: ".4", scaleY: ".4", translateY: "40px"},
	      { duration: 80 }
	    );
	  };


	}( jQuery ));
	;(function ($) {
	  // Image transition function
	  Materialize.fadeInImage =  function(selector){
	    var element = $(selector);
	    element.css({opacity: 0});
	    $(element).velocity({opacity: 1}, {
	        duration: 650,
	        queue: false,
	        easing: 'easeOutSine'
	      });
	    $(element).velocity({opacity: 1}, {
	          duration: 1300,
	          queue: false,
	          easing: 'swing',
	          step: function(now, fx) {
	              fx.start = 100;
	              var grayscale_setting = now/100;
	              var brightness_setting = 150 - (100 - now)/1.75;

	              if (brightness_setting < 100) {
	                brightness_setting = 100;
	              }
	              if (now >= 0) {
	                $(this).css({
	                    "-webkit-filter": "grayscale("+grayscale_setting+")" + "brightness("+brightness_setting+"%)",
	                    "filter": "grayscale("+grayscale_setting+")" + "brightness("+brightness_setting+"%)"
	                });
	              }
	          }
	      });
	  };

	  // Horizontal staggered list
	  Materialize.showStaggeredList = function(selector) {
	    var time = 0;
	    $(selector).find('li').velocity(
	        { translateX: "-100px"},
	        { duration: 0 });

	    $(selector).find('li').each(function() {
	      $(this).velocity(
	        { opacity: "1", translateX: "0"},
	        { duration: 800, delay: time, easing: [60, 10] });
	      time += 120;
	    });
	  };


	  $(document).ready(function() {
	    // Hardcoded .staggered-list scrollFire
	    // var staggeredListOptions = [];
	    // $('ul.staggered-list').each(function (i) {

	    //   var label = 'scrollFire-' + i;
	    //   $(this).addClass(label);
	    //   staggeredListOptions.push(
	    //     {selector: 'ul.staggered-list.' + label,
	    //      offset: 200,
	    //      callback: 'showStaggeredList("ul.staggered-list.' + label + '")'});
	    // });
	    // scrollFire(staggeredListOptions);

	    // HammerJS, Swipe navigation

	    // Touch Event
	    var swipeLeft = false;
	    var swipeRight = false;


	    // Dismissible Collections
	    $('.dismissable').each(function() {
	      $(this).hammer({
	        prevent_default: false
	      }).bind('pan', function(e) {
	        if (e.gesture.pointerType === "touch") {
	          var $this = $(this);
	          var direction = e.gesture.direction;
	          var x = e.gesture.deltaX;
	          var velocityX = e.gesture.velocityX;

	          $this.velocity({ translateX: x
	              }, {duration: 50, queue: false, easing: 'easeOutQuad'});

	          // Swipe Left
	          if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.75)) {
	            swipeLeft = true;
	          }

	          // Swipe Right
	          if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.75)) {
	            swipeRight = true;
	          }
	        }
	      }).bind('panend', function(e) {
	        // Reset if collection is moved back into original position
	        if (Math.abs(e.gesture.deltaX) < ($(this).innerWidth() / 2)) {
	          swipeRight = false;
	          swipeLeft = false;
	        }

	        if (e.gesture.pointerType === "touch") {
	          var $this = $(this);
	          if (swipeLeft || swipeRight) {
	            var fullWidth;
	            if (swipeLeft) { fullWidth = $this.innerWidth(); }
	            else { fullWidth = -1 * $this.innerWidth(); }

	            $this.velocity({ translateX: fullWidth,
	              }, {duration: 100, queue: false, easing: 'easeOutQuad', complete:
	              function() {
	                $this.css('border', 'none');
	                $this.velocity({ height: 0, padding: 0,
	                  }, {duration: 200, queue: false, easing: 'easeOutQuad', complete:
	                    function() { $this.remove(); }
	                  });
	              }
	            });
	          }
	          else {
	            $this.velocity({ translateX: 0,
	              }, {duration: 100, queue: false, easing: 'easeOutQuad'});
	          }
	          swipeLeft = false;
	          swipeRight = false;
	        }
	      });

	    });


	    // time = 0
	    // // Vertical Staggered list
	    // $('ul.staggered-list.vertical li').velocity(
	    //     { translateY: "100px"},
	    //     { duration: 0 });

	    // $('ul.staggered-list.vertical li').each(function() {
	    //   $(this).velocity(
	    //     { opacity: "1", translateY: "0"},
	    //     { duration: 800, delay: time, easing: [60, 25] });
	    //   time += 120;
	    // });

	    // // Fade in and Scale
	    // $('.fade-in.scale').velocity(
	    //     { scaleX: .4, scaleY: .4, translateX: -600},
	    //     { duration: 0});
	    // $('.fade-in').each(function() {
	    //   $(this).velocity(
	    //     { opacity: "1", scaleX: 1, scaleY: 1, translateX: 0},
	    //     { duration: 800, easing: [60, 10] });
	    // });
	  });
	}( jQuery ));
	;(function($) {

	  // Input: Array of JSON objects {selector, offset, callback}

	  Materialize.scrollFire = function(options) {

	    var didScroll = false;

	    window.addEventListener("scroll", function() {
	      didScroll = true;
	    });

	    // Rate limit to 100ms
	    setInterval(function() {
	      if(didScroll) {
	          didScroll = false;

	          var windowScroll = window.pageYOffset + window.innerHeight;

	          for (var i = 0 ; i < options.length; i++) {
	            // Get options from each line
	            var value = options[i];
	            var selector = value.selector,
	                offset = value.offset,
	                callback = value.callback;

	            var currentElement = document.querySelector(selector);
	            if ( currentElement !== null) {
	              var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset;

	              if (windowScroll > (elementOffset + offset)) {
	                if (value.done !== true) {
	                  var callbackFunc = new Function(callback);
	                  callbackFunc();
	                  value.done = true;
	                }
	              }
	            }
	          }
	      }
	    }, 100);
	  };

	})(jQuery);;/*!
	 * pickadate.js v3.5.0, 2014/04/13
	 * By Amsul, http://amsul.ca
	 * Hosted on http://amsul.github.io/pickadate.js
	 * Licensed under MIT
	 */

	(function ( factory ) {

	    // AMD.
	    if ( true )
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_LOCAL_MODULE_0__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__))

	    // Node.js/browserify.
	    else if ( typeof exports == 'object' )
	        module.exports = factory( require('jquery') )

	    // Browser globals.
	    else this.Picker = factory( jQuery )

	}(function( $ ) {

	var $window = $( window )
	var $document = $( document )
	var $html = $( document.documentElement )


	/**
	 * The picker constructor that creates a blank picker.
	 */
	function PickerConstructor( ELEMENT, NAME, COMPONENT, OPTIONS ) {

	    // If there’s no element, return the picker constructor.
	    if ( !ELEMENT ) return PickerConstructor


	    var
	        IS_DEFAULT_THEME = false,


	        // The state of the picker.
	        STATE = {
	            id: ELEMENT.id || 'P' + Math.abs( ~~(Math.random() * new Date()) )
	        },


	        // Merge the defaults and options passed.
	        SETTINGS = COMPONENT ? $.extend( true, {}, COMPONENT.defaults, OPTIONS ) : OPTIONS || {},


	        // Merge the default classes with the settings classes.
	        CLASSES = $.extend( {}, PickerConstructor.klasses(), SETTINGS.klass ),


	        // The element node wrapper into a jQuery object.
	        $ELEMENT = $( ELEMENT ),


	        // Pseudo picker constructor.
	        PickerInstance = function() {
	            return this.start()
	        },


	        // The picker prototype.
	        P = PickerInstance.prototype = {

	            constructor: PickerInstance,

	            $node: $ELEMENT,


	            /**
	             * Initialize everything
	             */
	            start: function() {

	                // If it’s already started, do nothing.
	                if ( STATE && STATE.start ) return P


	                // Update the picker states.
	                STATE.methods = {}
	                STATE.start = true
	                STATE.open = false
	                STATE.type = ELEMENT.type


	                // Confirm focus state, convert into text input to remove UA stylings,
	                // and set as readonly to prevent keyboard popup.
	                ELEMENT.autofocus = ELEMENT == getActiveElement()
	                ELEMENT.readOnly = !SETTINGS.editable
	                ELEMENT.id = ELEMENT.id || STATE.id
	                if ( ELEMENT.type != 'text' ) {
	                    ELEMENT.type = 'text'
	                }


	                // Create a new picker component with the settings.
	                P.component = new COMPONENT(P, SETTINGS)


	                // Create the picker root with a holder and then prepare it.
	                P.$root = $( PickerConstructor._.node('div', createWrappedComponent(), CLASSES.picker, 'id="' + ELEMENT.id + '_root" tabindex="0"') )
	                prepareElementRoot()


	                // If there’s a format for the hidden input element, create the element.
	                if ( SETTINGS.formatSubmit ) {
	                    prepareElementHidden()
	                }


	                // Prepare the input element.
	                prepareElement()


	                // Insert the root as specified in the settings.
	                if ( SETTINGS.container ) $( SETTINGS.container ).append( P.$root )
	                else $ELEMENT.after( P.$root )


	                // Bind the default component and settings events.
	                P.on({
	                    start: P.component.onStart,
	                    render: P.component.onRender,
	                    stop: P.component.onStop,
	                    open: P.component.onOpen,
	                    close: P.component.onClose,
	                    set: P.component.onSet
	                }).on({
	                    start: SETTINGS.onStart,
	                    render: SETTINGS.onRender,
	                    stop: SETTINGS.onStop,
	                    open: SETTINGS.onOpen,
	                    close: SETTINGS.onClose,
	                    set: SETTINGS.onSet
	                })


	                // Once we’re all set, check the theme in use.
	                IS_DEFAULT_THEME = isUsingDefaultTheme( P.$root.children()[ 0 ] )


	                // If the element has autofocus, open the picker.
	                if ( ELEMENT.autofocus ) {
	                    P.open()
	                }


	                // Trigger queued the “start” and “render” events.
	                return P.trigger( 'start' ).trigger( 'render' )
	            }, //start


	            /**
	             * Render a new picker
	             */
	            render: function( entireComponent ) {

	                // Insert a new component holder in the root or box.
	                if ( entireComponent ) P.$root.html( createWrappedComponent() )
	                else P.$root.find( '.' + CLASSES.box ).html( P.component.nodes( STATE.open ) )

	                // Trigger the queued “render” events.
	                return P.trigger( 'render' )
	            }, //render


	            /**
	             * Destroy everything
	             */
	            stop: function() {

	                // If it’s already stopped, do nothing.
	                if ( !STATE.start ) return P

	                // Then close the picker.
	                P.close()

	                // Remove the hidden field.
	                if ( P._hidden ) {
	                    P._hidden.parentNode.removeChild( P._hidden )
	                }

	                // Remove the root.
	                P.$root.remove()

	                // Remove the input class, remove the stored data, and unbind
	                // the events (after a tick for IE - see `P.close`).
	                $ELEMENT.removeClass( CLASSES.input ).removeData( NAME )
	                setTimeout( function() {
	                    $ELEMENT.off( '.' + STATE.id )
	                }, 0)

	                // Restore the element state
	                ELEMENT.type = STATE.type
	                ELEMENT.readOnly = false

	                // Trigger the queued “stop” events.
	                P.trigger( 'stop' )

	                // Reset the picker states.
	                STATE.methods = {}
	                STATE.start = false

	                return P
	            }, //stop


	            /**
	             * Open up the picker
	             */
	            open: function( dontGiveFocus ) {

	                // If it’s already open, do nothing.
	                if ( STATE.open ) return P

	                // Add the “active” class.
	                $ELEMENT.addClass( CLASSES.active )
	                aria( ELEMENT, 'expanded', true )

	                // * A Firefox bug, when `html` has `overflow:hidden`, results in
	                //   killing transitions :(. So add the “opened” state on the next tick.
	                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
	                setTimeout( function() {

	                    // Add the “opened” class to the picker root.
	                    P.$root.addClass( CLASSES.opened )
	                    aria( P.$root[0], 'hidden', false )

	                }, 0 )

	                // If we have to give focus, bind the element and doc events.
	                if ( dontGiveFocus !== false ) {

	                    // Set it as open.
	                    STATE.open = true

	                    // Prevent the page from scrolling.
	                    if ( IS_DEFAULT_THEME ) {
	                        $html.
	                            css( 'overflow', 'hidden' ).
	                            css( 'padding-right', '+=' + getScrollbarWidth() )
	                    }

	                    // Pass focus to the root element’s jQuery object.
	                    // * Workaround for iOS8 to bring the picker’s root into view.
	                    P.$root[0].focus()

	                    // Bind the document events.
	                    $document.on( 'click.' + STATE.id + ' focusin.' + STATE.id, function( event ) {

	                        var target = event.target

	                        // If the target of the event is not the element, close the picker picker.
	                        // * Don’t worry about clicks or focusins on the root because those don’t bubble up.
	                        //   Also, for Firefox, a click on an `option` element bubbles up directly
	                        //   to the doc. So make sure the target wasn't the doc.
	                        // * In Firefox stopPropagation() doesn’t prevent right-click events from bubbling,
	                        //   which causes the picker to unexpectedly close when right-clicking it. So make
	                        //   sure the event wasn’t a right-click.
	                        if ( target != ELEMENT && target != document && event.which != 3 ) {

	                            // If the target was the holder that covers the screen,
	                            // keep the element focused to maintain tabindex.
	                            P.close( target === P.$root.children()[0] )
	                        }

	                    }).on( 'keydown.' + STATE.id, function( event ) {

	                        var
	                            // Get the keycode.
	                            keycode = event.keyCode,

	                            // Translate that to a selection change.
	                            keycodeToMove = P.component.key[ keycode ],

	                            // Grab the target.
	                            target = event.target


	                        // On escape, close the picker and give focus.
	                        if ( keycode == 27 ) {
	                            P.close( true )
	                        }


	                        // Check if there is a key movement or “enter” keypress on the element.
	                        else if ( target == P.$root[0] && ( keycodeToMove || keycode == 13 ) ) {

	                            // Prevent the default action to stop page movement.
	                            event.preventDefault()

	                            // Trigger the key movement action.
	                            if ( keycodeToMove ) {
	                                PickerConstructor._.trigger( P.component.key.go, P, [ PickerConstructor._.trigger( keycodeToMove ) ] )
	                            }

	                            // On “enter”, if the highlighted item isn’t disabled, set the value and close.
	                            else if ( !P.$root.find( '.' + CLASSES.highlighted ).hasClass( CLASSES.disabled ) ) {
	                                P.set( 'select', P.component.item.highlight ).close()
	                            }
	                        }


	                        // If the target is within the root and “enter” is pressed,
	                        // prevent the default action and trigger a click on the target instead.
	                        else if ( $.contains( P.$root[0], target ) && keycode == 13 ) {
	                            event.preventDefault()
	                            target.click()
	                        }
	                    })
	                }

	                // Trigger the queued “open” events.
	                return P.trigger( 'open' )
	            }, //open


	            /**
	             * Close the picker
	             */
	            close: function( giveFocus ) {

	                // If we need to give focus, do it before changing states.
	                if ( giveFocus ) {
	                    // ....ah yes! It would’ve been incomplete without a crazy workaround for IE :|
	                    // The focus is triggered *after* the close has completed - causing it
	                    // to open again. So unbind and rebind the event at the next tick.
	                    P.$root.off( 'focus.toOpen' )[0].focus()
	                    setTimeout( function() {
	                        P.$root.on( 'focus.toOpen', handleFocusToOpenEvent )
	                    }, 0 )
	                }

	                // Remove the “active” class.
	                $ELEMENT.removeClass( CLASSES.active )
	                aria( ELEMENT, 'expanded', false )

	                // * A Firefox bug, when `html` has `overflow:hidden`, results in
	                //   killing transitions :(. So remove the “opened” state on the next tick.
	                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
	                setTimeout( function() {

	                    // Remove the “opened” and “focused” class from the picker root.
	                    P.$root.removeClass( CLASSES.opened + ' ' + CLASSES.focused )
	                    aria( P.$root[0], 'hidden', true )

	                }, 0 )

	                // If it’s already closed, do nothing more.
	                if ( !STATE.open ) return P

	                // Set it as closed.
	                STATE.open = false

	                // Allow the page to scroll.
	                if ( IS_DEFAULT_THEME ) {
	                    $html.
	                        css( 'overflow', '' ).
	                        css( 'padding-right', '-=' + getScrollbarWidth() )
	                }

	                // Unbind the document events.
	                $document.off( '.' + STATE.id )

	                // Trigger the queued “close” events.
	                return P.trigger( 'close' )
	            }, //close


	            /**
	             * Clear the values
	             */
	            clear: function( options ) {
	                return P.set( 'clear', null, options )
	            }, //clear


	            /**
	             * Set something
	             */
	            set: function( thing, value, options ) {

	                var thingItem, thingValue,
	                    thingIsObject = $.isPlainObject( thing ),
	                    thingObject = thingIsObject ? thing : {}

	                // Make sure we have usable options.
	                options = thingIsObject && $.isPlainObject( value ) ? value : options || {}

	                if ( thing ) {

	                    // If the thing isn’t an object, make it one.
	                    if ( !thingIsObject ) {
	                        thingObject[ thing ] = value
	                    }

	                    // Go through the things of items to set.
	                    for ( thingItem in thingObject ) {

	                        // Grab the value of the thing.
	                        thingValue = thingObject[ thingItem ]

	                        // First, if the item exists and there’s a value, set it.
	                        if ( thingItem in P.component.item ) {
	                            if ( thingValue === undefined ) thingValue = null
	                            P.component.set( thingItem, thingValue, options )
	                        }

	                        // Then, check to update the element value and broadcast a change.
	                        if ( thingItem == 'select' || thingItem == 'clear' ) {
	                            $ELEMENT.
	                                val( thingItem == 'clear' ? '' : P.get( thingItem, SETTINGS.format ) ).
	                                trigger( 'change' )
	                        }
	                    }

	                    // Render a new picker.
	                    P.render()
	                }

	                // When the method isn’t muted, trigger queued “set” events and pass the `thingObject`.
	                return options.muted ? P : P.trigger( 'set', thingObject )
	            }, //set


	            /**
	             * Get something
	             */
	            get: function( thing, format ) {

	                // Make sure there’s something to get.
	                thing = thing || 'value'

	                // If a picker state exists, return that.
	                if ( STATE[ thing ] != null ) {
	                    return STATE[ thing ]
	                }

	                // Return the submission value, if that.
	                if ( thing == 'valueSubmit' ) {
	                    if ( P._hidden ) {
	                        return P._hidden.value
	                    }
	                    thing = 'value'
	                }

	                // Return the value, if that.
	                if ( thing == 'value' ) {
	                    return ELEMENT.value
	                }

	                // Check if a component item exists, return that.
	                if ( thing in P.component.item ) {
	                    if ( typeof format == 'string' ) {
	                        var thingValue = P.component.get( thing )
	                        return thingValue ?
	                            PickerConstructor._.trigger(
	                                P.component.formats.toString,
	                                P.component,
	                                [ format, thingValue ]
	                            ) : ''
	                    }
	                    return P.component.get( thing )
	                }
	            }, //get



	            /**
	             * Bind events on the things.
	             */
	            on: function( thing, method, internal ) {

	                var thingName, thingMethod,
	                    thingIsObject = $.isPlainObject( thing ),
	                    thingObject = thingIsObject ? thing : {}

	                if ( thing ) {

	                    // If the thing isn’t an object, make it one.
	                    if ( !thingIsObject ) {
	                        thingObject[ thing ] = method
	                    }

	                    // Go through the things to bind to.
	                    for ( thingName in thingObject ) {

	                        // Grab the method of the thing.
	                        thingMethod = thingObject[ thingName ]

	                        // If it was an internal binding, prefix it.
	                        if ( internal ) {
	                            thingName = '_' + thingName
	                        }

	                        // Make sure the thing methods collection exists.
	                        STATE.methods[ thingName ] = STATE.methods[ thingName ] || []

	                        // Add the method to the relative method collection.
	                        STATE.methods[ thingName ].push( thingMethod )
	                    }
	                }

	                return P
	            }, //on



	            /**
	             * Unbind events on the things.
	             */
	            off: function() {
	                var i, thingName,
	                    names = arguments;
	                for ( i = 0, namesCount = names.length; i < namesCount; i += 1 ) {
	                    thingName = names[i]
	                    if ( thingName in STATE.methods ) {
	                        delete STATE.methods[thingName]
	                    }
	                }
	                return P
	            },


	            /**
	             * Fire off method events.
	             */
	            trigger: function( name, data ) {
	                var _trigger = function( name ) {
	                    var methodList = STATE.methods[ name ]
	                    if ( methodList ) {
	                        methodList.map( function( method ) {
	                            PickerConstructor._.trigger( method, P, [ data ] )
	                        })
	                    }
	                }
	                _trigger( '_' + name )
	                _trigger( name )
	                return P
	            } //trigger
	        } //PickerInstance.prototype


	    /**
	     * Wrap the picker holder components together.
	     */
	    function createWrappedComponent() {

	        // Create a picker wrapper holder
	        return PickerConstructor._.node( 'div',

	            // Create a picker wrapper node
	            PickerConstructor._.node( 'div',

	                // Create a picker frame
	                PickerConstructor._.node( 'div',

	                    // Create a picker box node
	                    PickerConstructor._.node( 'div',

	                        // Create the components nodes.
	                        P.component.nodes( STATE.open ),

	                        // The picker box class
	                        CLASSES.box
	                    ),

	                    // Picker wrap class
	                    CLASSES.wrap
	                ),

	                // Picker frame class
	                CLASSES.frame
	            ),

	            // Picker holder class
	            CLASSES.holder
	        ) //endreturn
	    } //createWrappedComponent



	    /**
	     * Prepare the input element with all bindings.
	     */
	    function prepareElement() {

	        $ELEMENT.

	            // Store the picker data by component name.
	            data(NAME, P).

	            // Add the “input” class name.
	            addClass(CLASSES.input).

	            // Remove the tabindex.
	            attr('tabindex', -1).

	            // If there’s a `data-value`, update the value of the element.
	            val( $ELEMENT.data('value') ?
	                P.get('select', SETTINGS.format) :
	                ELEMENT.value
	            )


	        // Only bind keydown events if the element isn’t editable.
	        if ( !SETTINGS.editable ) {

	            $ELEMENT.

	                // On focus/click, focus onto the root to open it up.
	                on( 'focus.' + STATE.id + ' click.' + STATE.id, function( event ) {
	                    event.preventDefault()
	                    P.$root[0].focus()
	                }).

	                // Handle keyboard event based on the picker being opened or not.
	                on( 'keydown.' + STATE.id, handleKeydownEvent )
	        }


	        // Update the aria attributes.
	        aria(ELEMENT, {
	            haspopup: true,
	            expanded: false,
	            readonly: false,
	            owns: ELEMENT.id + '_root'
	        })
	    }


	    /**
	     * Prepare the root picker element with all bindings.
	     */
	    function prepareElementRoot() {

	        P.$root.

	            on({

	                // For iOS8.
	                keydown: handleKeydownEvent,

	                // When something within the root is focused, stop from bubbling
	                // to the doc and remove the “focused” state from the root.
	                focusin: function( event ) {
	                    P.$root.removeClass( CLASSES.focused )
	                    event.stopPropagation()
	                },

	                // When something within the root holder is clicked, stop it
	                // from bubbling to the doc.
	                'mousedown click': function( event ) {

	                    var target = event.target

	                    // Make sure the target isn’t the root holder so it can bubble up.
	                    if ( target != P.$root.children()[ 0 ] ) {

	                        event.stopPropagation()

	                        // * For mousedown events, cancel the default action in order to
	                        //   prevent cases where focus is shifted onto external elements
	                        //   when using things like jQuery mobile or MagnificPopup (ref: #249 & #120).
	                        //   Also, for Firefox, don’t prevent action on the `option` element.
	                        if ( event.type == 'mousedown' && !$( target ).is( 'input, select, textarea, button, option' )) {

	                            event.preventDefault()

	                            // Re-focus onto the root so that users can click away
	                            // from elements focused within the picker.
	                            P.$root[0].focus()
	                        }
	                    }
	                }
	            }).

	            // Add/remove the “target” class on focus and blur.
	            on({
	                focus: function() {
	                    $ELEMENT.addClass( CLASSES.target )
	                },
	                blur: function() {
	                    $ELEMENT.removeClass( CLASSES.target )
	                }
	            }).

	            // Open the picker and adjust the root “focused” state
	            on( 'focus.toOpen', handleFocusToOpenEvent ).

	            // If there’s a click on an actionable element, carry out the actions.
	            on( 'click', '[data-pick], [data-nav], [data-clear], [data-close]', function() {

	                var $target = $( this ),
	                    targetData = $target.data(),
	                    targetDisabled = $target.hasClass( CLASSES.navDisabled ) || $target.hasClass( CLASSES.disabled ),

	                    // * For IE, non-focusable elements can be active elements as well
	                    //   (http://stackoverflow.com/a/2684561).
	                    activeElement = getActiveElement()
	                    activeElement = activeElement && ( activeElement.type || activeElement.href )

	                // If it’s disabled or nothing inside is actively focused, re-focus the element.
	                if ( targetDisabled || activeElement && !$.contains( P.$root[0], activeElement ) ) {
	                    P.$root[0].focus()
	                }

	                // If something is superficially changed, update the `highlight` based on the `nav`.
	                if ( !targetDisabled && targetData.nav ) {
	                    P.set( 'highlight', P.component.item.highlight, { nav: targetData.nav } )
	                }

	                // If something is picked, set `select` then close with focus.
	                else if ( !targetDisabled && 'pick' in targetData ) {
	                    P.set( 'select', targetData.pick )
	                }

	                // If a “clear” button is pressed, empty the values and close with focus.
	                else if ( targetData.clear ) {
	                    P.clear().close( true )
	                }

	                else if ( targetData.close ) {
	                    P.close( true )
	                }

	            }) //P.$root

	        aria( P.$root[0], 'hidden', true )
	    }


	     /**
	      * Prepare the hidden input element along with all bindings.
	      */
	    function prepareElementHidden() {

	        var name

	        if ( SETTINGS.hiddenName === true ) {
	            name = ELEMENT.name
	            ELEMENT.name = ''
	        }
	        else {
	            name = [
	                typeof SETTINGS.hiddenPrefix == 'string' ? SETTINGS.hiddenPrefix : '',
	                typeof SETTINGS.hiddenSuffix == 'string' ? SETTINGS.hiddenSuffix : '_submit'
	            ]
	            name = name[0] + ELEMENT.name + name[1]
	        }

	        P._hidden = $(
	            '<input ' +
	            'type=hidden ' +

	            // Create the name using the original input’s with a prefix and suffix.
	            'name="' + name + '"' +

	            // If the element has a value, set the hidden value as well.
	            (
	                $ELEMENT.data('value') || ELEMENT.value ?
	                    ' value="' + P.get('select', SETTINGS.formatSubmit) + '"' :
	                    ''
	            ) +
	            '>'
	        )[0]

	        $ELEMENT.

	            // If the value changes, update the hidden input with the correct format.
	            on('change.' + STATE.id, function() {
	                P._hidden.value = ELEMENT.value ?
	                    P.get('select', SETTINGS.formatSubmit) :
	                    ''
	            })


	        // Insert the hidden input as specified in the settings.
	        if ( SETTINGS.container ) $( SETTINGS.container ).append( P._hidden )
	        else $ELEMENT.after( P._hidden )
	    }


	    // For iOS8.
	    function handleKeydownEvent( event ) {

	        var keycode = event.keyCode,

	            // Check if one of the delete keys was pressed.
	            isKeycodeDelete = /^(8|46)$/.test(keycode)

	        // For some reason IE clears the input value on “escape”.
	        if ( keycode == 27 ) {
	            P.close()
	            return false
	        }

	        // Check if `space` or `delete` was pressed or the picker is closed with a key movement.
	        if ( keycode == 32 || isKeycodeDelete || !STATE.open && P.component.key[keycode] ) {

	            // Prevent it from moving the page and bubbling to doc.
	            event.preventDefault()
	            event.stopPropagation()

	            // If `delete` was pressed, clear the values and close the picker.
	            // Otherwise open the picker.
	            if ( isKeycodeDelete ) { P.clear().close() }
	            else { P.open() }
	        }
	    }


	    // Separated for IE
	    function handleFocusToOpenEvent( event ) {

	        // Stop the event from propagating to the doc.
	        event.stopPropagation()

	        // If it’s a focus event, add the “focused” class to the root.
	        if ( event.type == 'focus' ) {
	            P.$root.addClass( CLASSES.focused )
	        }

	        // And then finally open the picker.
	        P.open()
	    }


	    // Return a new picker instance.
	    return new PickerInstance()
	} //PickerConstructor



	/**
	 * The default classes and prefix to use for the HTML classes.
	 */
	PickerConstructor.klasses = function( prefix ) {
	    prefix = prefix || 'picker'
	    return {

	        picker: prefix,
	        opened: prefix + '--opened',
	        focused: prefix + '--focused',

	        input: prefix + '__input',
	        active: prefix + '__input--active',
	        target: prefix + '__input--target',

	        holder: prefix + '__holder',

	        frame: prefix + '__frame',
	        wrap: prefix + '__wrap',

	        box: prefix + '__box'
	    }
	} //PickerConstructor.klasses



	/**
	 * Check if the default theme is being used.
	 */
	function isUsingDefaultTheme( element ) {

	    var theme,
	        prop = 'position'

	    // For IE.
	    if ( element.currentStyle ) {
	        theme = element.currentStyle[prop]
	    }

	    // For normal browsers.
	    else if ( window.getComputedStyle ) {
	        theme = getComputedStyle( element )[prop]
	    }

	    return theme == 'fixed'
	}



	/**
	 * Get the width of the browser’s scrollbar.
	 * Taken from: https://github.com/VodkaBears/Remodal/blob/master/src/jquery.remodal.js
	 */
	function getScrollbarWidth() {

	    if ( $html.height() <= $window.height() ) {
	        return 0
	    }

	    var $outer = $( '<div style="visibility:hidden;width:100px" />' ).
	        appendTo( 'body' )

	    // Get the width without scrollbars.
	    var widthWithoutScroll = $outer[0].offsetWidth

	    // Force adding scrollbars.
	    $outer.css( 'overflow', 'scroll' )

	    // Add the inner div.
	    var $inner = $( '<div style="width:100%" />' ).appendTo( $outer )

	    // Get the width with scrollbars.
	    var widthWithScroll = $inner[0].offsetWidth

	    // Remove the divs.
	    $outer.remove()

	    // Return the difference between the widths.
	    return widthWithoutScroll - widthWithScroll
	}



	/**
	 * PickerConstructor helper methods.
	 */
	PickerConstructor._ = {

	    /**
	     * Create a group of nodes. Expects:
	     * `
	        {
	            min:    {Integer},
	            max:    {Integer},
	            i:      {Integer},
	            node:   {String},
	            item:   {Function}
	        }
	     * `
	     */
	    group: function( groupObject ) {

	        var
	            // Scope for the looped object
	            loopObjectScope,

	            // Create the nodes list
	            nodesList = '',

	            // The counter starts from the `min`
	            counter = PickerConstructor._.trigger( groupObject.min, groupObject )


	        // Loop from the `min` to `max`, incrementing by `i`
	        for ( ; counter <= PickerConstructor._.trigger( groupObject.max, groupObject, [ counter ] ); counter += groupObject.i ) {

	            // Trigger the `item` function within scope of the object
	            loopObjectScope = PickerConstructor._.trigger( groupObject.item, groupObject, [ counter ] )

	            // Splice the subgroup and create nodes out of the sub nodes
	            nodesList += PickerConstructor._.node(
	                groupObject.node,
	                loopObjectScope[ 0 ],   // the node
	                loopObjectScope[ 1 ],   // the classes
	                loopObjectScope[ 2 ]    // the attributes
	            )
	        }

	        // Return the list of nodes
	        return nodesList
	    }, //group


	    /**
	     * Create a dom node string
	     */
	    node: function( wrapper, item, klass, attribute ) {

	        // If the item is false-y, just return an empty string
	        if ( !item ) return ''

	        // If the item is an array, do a join
	        item = $.isArray( item ) ? item.join( '' ) : item

	        // Check for the class
	        klass = klass ? ' class="' + klass + '"' : ''

	        // Check for any attributes
	        attribute = attribute ? ' ' + attribute : ''

	        // Return the wrapped item
	        return '<' + wrapper + klass + attribute + '>' + item + '</' + wrapper + '>'
	    }, //node


	    /**
	     * Lead numbers below 10 with a zero.
	     */
	    lead: function( number ) {
	        return ( number < 10 ? '0': '' ) + number
	    },


	    /**
	     * Trigger a function otherwise return the value.
	     */
	    trigger: function( callback, scope, args ) {
	        return typeof callback == 'function' ? callback.apply( scope, args || [] ) : callback
	    },


	    /**
	     * If the second character is a digit, length is 2 otherwise 1.
	     */
	    digits: function( string ) {
	        return ( /\d/ ).test( string[ 1 ] ) ? 2 : 1
	    },


	    /**
	     * Tell if something is a date object.
	     */
	    isDate: function( value ) {
	        return {}.toString.call( value ).indexOf( 'Date' ) > -1 && this.isInteger( value.getDate() )
	    },


	    /**
	     * Tell if something is an integer.
	     */
	    isInteger: function( value ) {
	        return {}.toString.call( value ).indexOf( 'Number' ) > -1 && value % 1 === 0
	    },


	    /**
	     * Create ARIA attribute strings.
	     */
	    ariaAttr: ariaAttr
	} //PickerConstructor._



	/**
	 * Extend the picker with a component and defaults.
	 */
	PickerConstructor.extend = function( name, Component ) {

	    // Extend jQuery.
	    $.fn[ name ] = function( options, action ) {

	        // Grab the component data.
	        var componentData = this.data( name )

	        // If the picker is requested, return the data object.
	        if ( options == 'picker' ) {
	            return componentData
	        }

	        // If the component data exists and `options` is a string, carry out the action.
	        if ( componentData && typeof options == 'string' ) {
	            return PickerConstructor._.trigger( componentData[ options ], componentData, [ action ] )
	        }

	        // Otherwise go through each matched element and if the component
	        // doesn’t exist, create a new picker using `this` element
	        // and merging the defaults and options with a deep copy.
	        return this.each( function() {
	            var $this = $( this )
	            if ( !$this.data( name ) ) {
	                new PickerConstructor( this, name, Component, options )
	            }
	        })
	    }

	    // Set the defaults.
	    $.fn[ name ].defaults = Component.defaults
	} //PickerConstructor.extend



	function aria(element, attribute, value) {
	    if ( $.isPlainObject(attribute) ) {
	        for ( var key in attribute ) {
	            ariaSet(element, key, attribute[key])
	        }
	    }
	    else {
	        ariaSet(element, attribute, value)
	    }
	}
	function ariaSet(element, attribute, value) {
	    element.setAttribute(
	        (attribute == 'role' ? '' : 'aria-') + attribute,
	        value
	    )
	}
	function ariaAttr(attribute, data) {
	    if ( !$.isPlainObject(attribute) ) {
	        attribute = { attribute: data }
	    }
	    data = ''
	    for ( var key in attribute ) {
	        var attr = (key == 'role' ? '' : 'aria-') + key,
	            attrVal = attribute[key]
	        data += attrVal == null ? '' : attr + '="' + attribute[key] + '"'
	    }
	    return data
	}

	// IE8 bug throws an error for activeElements within iframes.
	function getActiveElement() {
	    try {
	        return document.activeElement
	    } catch ( err ) { }
	}



	// Expose the picker constructor.
	return PickerConstructor


	}));


	;/*!
	 * Date picker for pickadate.js v3.5.0
	 * http://amsul.github.io/pickadate.js/date.htm
	 */

	(function ( factory ) {

	    // AMD.
	    if ( true )
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__, !(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

	    // Node.js/browserify.
	    else if ( typeof exports == 'object' )
	        module.exports = factory( require('./picker.js'), require('jquery') )

	    // Browser globals.
	    else factory( Picker, jQuery )

	}(function( Picker, $ ) {


	/**
	 * Globals and constants
	 */
	var DAYS_IN_WEEK = 7,
	    WEEKS_IN_CALENDAR = 6,
	    _ = Picker._



	/**
	 * The date picker constructor
	 */
	function DatePicker( picker, settings ) {

	    var calendar = this,
	        element = picker.$node[ 0 ],
	        elementValue = element.value,
	        elementDataValue = picker.$node.data( 'value' ),
	        valueString = elementDataValue || elementValue,
	        formatString = elementDataValue ? settings.formatSubmit : settings.format,
	        isRTL = function() {

	            return element.currentStyle ?

	                // For IE.
	                element.currentStyle.direction == 'rtl' :

	                // For normal browsers.
	                getComputedStyle( picker.$root[0] ).direction == 'rtl'
	        }

	    calendar.settings = settings
	    calendar.$node = picker.$node

	    // The queue of methods that will be used to build item objects.
	    calendar.queue = {
	        min: 'measure create',
	        max: 'measure create',
	        now: 'now create',
	        select: 'parse create validate',
	        highlight: 'parse navigate create validate',
	        view: 'parse create validate viewset',
	        disable: 'deactivate',
	        enable: 'activate'
	    }

	    // The component's item object.
	    calendar.item = {}

	    calendar.item.clear = null
	    calendar.item.disable = ( settings.disable || [] ).slice( 0 )
	    calendar.item.enable = -(function( collectionDisabled ) {
	        return collectionDisabled[ 0 ] === true ? collectionDisabled.shift() : -1
	    })( calendar.item.disable )

	    calendar.
	        set( 'min', settings.min ).
	        set( 'max', settings.max ).
	        set( 'now' )

	    // When there’s a value, set the `select`, which in turn
	    // also sets the `highlight` and `view`.
	    if ( valueString ) {
	        calendar.set( 'select', valueString, { format: formatString })
	    }

	    // If there’s no value, default to highlighting “today”.
	    else {
	        calendar.
	            set( 'select', null ).
	            set( 'highlight', calendar.item.now )
	    }


	    // The keycode to movement mapping.
	    calendar.key = {
	        40: 7, // Down
	        38: -7, // Up
	        39: function() { return isRTL() ? -1 : 1 }, // Right
	        37: function() { return isRTL() ? 1 : -1 }, // Left
	        go: function( timeChange ) {
	            var highlightedObject = calendar.item.highlight,
	                targetDate = new Date( highlightedObject.year, highlightedObject.month, highlightedObject.date + timeChange )
	            calendar.set(
	                'highlight',
	                targetDate,
	                { interval: timeChange }
	            )
	            this.render()
	        }
	    }


	    // Bind some picker events.
	    picker.
	        on( 'render', function() {
	            picker.$root.find( '.' + settings.klass.selectMonth ).on( 'change', function() {
	                var value = this.value
	                if ( value ) {
	                    picker.set( 'highlight', [ picker.get( 'view' ).year, value, picker.get( 'highlight' ).date ] )
	                    picker.$root.find( '.' + settings.klass.selectMonth ).trigger( 'focus' )
	                }
	            })
	            picker.$root.find( '.' + settings.klass.selectYear ).on( 'change', function() {
	                var value = this.value
	                if ( value ) {
	                    picker.set( 'highlight', [ value, picker.get( 'view' ).month, picker.get( 'highlight' ).date ] )
	                    picker.$root.find( '.' + settings.klass.selectYear ).trigger( 'focus' )
	                }
	            })
	        }, 1 ).
	        on( 'open', function() {
	            var includeToday = ''
	            if ( calendar.disabled( calendar.get('now') ) ) {
	                includeToday = ':not(.' + settings.klass.buttonToday + ')'
	            }
	            picker.$root.find( 'button' + includeToday + ', select' ).attr( 'disabled', false )
	        }, 1 ).
	        on( 'close', function() {
	            picker.$root.find( 'button, select' ).attr( 'disabled', true )
	        }, 1 )

	} //DatePicker


	/**
	 * Set a datepicker item object.
	 */
	DatePicker.prototype.set = function( type, value, options ) {

	    var calendar = this,
	        calendarItem = calendar.item

	    // If the value is `null` just set it immediately.
	    if ( value === null ) {
	        if ( type == 'clear' ) type = 'select'
	        calendarItem[ type ] = value
	        return calendar
	    }

	    // Otherwise go through the queue of methods, and invoke the functions.
	    // Update this as the time unit, and set the final value as this item.
	    // * In the case of `enable`, keep the queue but set `disable` instead.
	    //   And in the case of `flip`, keep the queue but set `enable` instead.
	    calendarItem[ ( type == 'enable' ? 'disable' : type == 'flip' ? 'enable' : type ) ] = calendar.queue[ type ].split( ' ' ).map( function( method ) {
	        value = calendar[ method ]( type, value, options )
	        return value
	    }).pop()

	    // Check if we need to cascade through more updates.
	    if ( type == 'select' ) {
	        calendar.set( 'highlight', calendarItem.select, options )
	    }
	    else if ( type == 'highlight' ) {
	        calendar.set( 'view', calendarItem.highlight, options )
	    }
	    else if ( type.match( /^(flip|min|max|disable|enable)$/ ) ) {
	        if ( calendarItem.select && calendar.disabled( calendarItem.select ) ) {
	            calendar.set( 'select', calendarItem.select, options )
	        }
	        if ( calendarItem.highlight && calendar.disabled( calendarItem.highlight ) ) {
	            calendar.set( 'highlight', calendarItem.highlight, options )
	        }
	    }

	    return calendar
	} //DatePicker.prototype.set


	/**
	 * Get a datepicker item object.
	 */
	DatePicker.prototype.get = function( type ) {
	    return this.item[ type ]
	} //DatePicker.prototype.get


	/**
	 * Create a picker date object.
	 */
	DatePicker.prototype.create = function( type, value, options ) {

	    var isInfiniteValue,
	        calendar = this

	    // If there’s no value, use the type as the value.
	    value = value === undefined ? type : value


	    // If it’s infinity, update the value.
	    if ( value == -Infinity || value == Infinity ) {
	        isInfiniteValue = value
	    }

	    // If it’s an object, use the native date object.
	    else if ( $.isPlainObject( value ) && _.isInteger( value.pick ) ) {
	        value = value.obj
	    }

	    // If it’s an array, convert it into a date and make sure
	    // that it’s a valid date – otherwise default to today.
	    else if ( $.isArray( value ) ) {
	        value = new Date( value[ 0 ], value[ 1 ], value[ 2 ] )
	        value = _.isDate( value ) ? value : calendar.create().obj
	    }

	    // If it’s a number or date object, make a normalized date.
	    else if ( _.isInteger( value ) || _.isDate( value ) ) {
	        value = calendar.normalize( new Date( value ), options )
	    }

	    // If it’s a literal true or any other case, set it to now.
	    else /*if ( value === true )*/ {
	        value = calendar.now( type, value, options )
	    }

	    // Return the compiled object.
	    return {
	        year: isInfiniteValue || value.getFullYear(),
	        month: isInfiniteValue || value.getMonth(),
	        date: isInfiniteValue || value.getDate(),
	        day: isInfiniteValue || value.getDay(),
	        obj: isInfiniteValue || value,
	        pick: isInfiniteValue || value.getTime()
	    }
	} //DatePicker.prototype.create


	/**
	 * Create a range limit object using an array, date object,
	 * literal “true”, or integer relative to another time.
	 */
	DatePicker.prototype.createRange = function( from, to ) {

	    var calendar = this,
	        createDate = function( date ) {
	            if ( date === true || $.isArray( date ) || _.isDate( date ) ) {
	                return calendar.create( date )
	            }
	            return date
	        }

	    // Create objects if possible.
	    if ( !_.isInteger( from ) ) {
	        from = createDate( from )
	    }
	    if ( !_.isInteger( to ) ) {
	        to = createDate( to )
	    }

	    // Create relative dates.
	    if ( _.isInteger( from ) && $.isPlainObject( to ) ) {
	        from = [ to.year, to.month, to.date + from ];
	    }
	    else if ( _.isInteger( to ) && $.isPlainObject( from ) ) {
	        to = [ from.year, from.month, from.date + to ];
	    }

	    return {
	        from: createDate( from ),
	        to: createDate( to )
	    }
	} //DatePicker.prototype.createRange


	/**
	 * Check if a date unit falls within a date range object.
	 */
	DatePicker.prototype.withinRange = function( range, dateUnit ) {
	    range = this.createRange(range.from, range.to)
	    return dateUnit.pick >= range.from.pick && dateUnit.pick <= range.to.pick
	}


	/**
	 * Check if two date range objects overlap.
	 */
	DatePicker.prototype.overlapRanges = function( one, two ) {

	    var calendar = this

	    // Convert the ranges into comparable dates.
	    one = calendar.createRange( one.from, one.to )
	    two = calendar.createRange( two.from, two.to )

	    return calendar.withinRange( one, two.from ) || calendar.withinRange( one, two.to ) ||
	        calendar.withinRange( two, one.from ) || calendar.withinRange( two, one.to )
	}


	/**
	 * Get the date today.
	 */
	DatePicker.prototype.now = function( type, value, options ) {
	    value = new Date()
	    if ( options && options.rel ) {
	        value.setDate( value.getDate() + options.rel )
	    }
	    return this.normalize( value, options )
	}


	/**
	 * Navigate to next/prev month.
	 */
	DatePicker.prototype.navigate = function( type, value, options ) {

	    var targetDateObject,
	        targetYear,
	        targetMonth,
	        targetDate,
	        isTargetArray = $.isArray( value ),
	        isTargetObject = $.isPlainObject( value ),
	        viewsetObject = this.item.view/*,
	        safety = 100*/


	    if ( isTargetArray || isTargetObject ) {

	        if ( isTargetObject ) {
	            targetYear = value.year
	            targetMonth = value.month
	            targetDate = value.date
	        }
	        else {
	            targetYear = +value[0]
	            targetMonth = +value[1]
	            targetDate = +value[2]
	        }

	        // If we’re navigating months but the view is in a different
	        // month, navigate to the view’s year and month.
	        if ( options && options.nav && viewsetObject && viewsetObject.month !== targetMonth ) {
	            targetYear = viewsetObject.year
	            targetMonth = viewsetObject.month
	        }

	        // Figure out the expected target year and month.
	        targetDateObject = new Date( targetYear, targetMonth + ( options && options.nav ? options.nav : 0 ), 1 )
	        targetYear = targetDateObject.getFullYear()
	        targetMonth = targetDateObject.getMonth()

	        // If the month we’re going to doesn’t have enough days,
	        // keep decreasing the date until we reach the month’s last date.
	        while ( /*safety &&*/ new Date( targetYear, targetMonth, targetDate ).getMonth() !== targetMonth ) {
	            targetDate -= 1
	            /*safety -= 1
	            if ( !safety ) {
	                throw 'Fell into an infinite loop while navigating to ' + new Date( targetYear, targetMonth, targetDate ) + '.'
	            }*/
	        }

	        value = [ targetYear, targetMonth, targetDate ]
	    }

	    return value
	} //DatePicker.prototype.navigate


	/**
	 * Normalize a date by setting the hours to midnight.
	 */
	DatePicker.prototype.normalize = function( value/*, options*/ ) {
	    value.setHours( 0, 0, 0, 0 )
	    return value
	}


	/**
	 * Measure the range of dates.
	 */
	DatePicker.prototype.measure = function( type, value/*, options*/ ) {

	    var calendar = this

	    // If it’s anything false-y, remove the limits.
	    if ( !value ) {
	        value = type == 'min' ? -Infinity : Infinity
	    }

	    // If it’s a string, parse it.
	    else if ( typeof value == 'string' ) {
	        value = calendar.parse( type, value )
	    }

	    // If it's an integer, get a date relative to today.
	    else if ( _.isInteger( value ) ) {
	        value = calendar.now( type, value, { rel: value } )
	    }

	    return value
	} ///DatePicker.prototype.measure


	/**
	 * Create a viewset object based on navigation.
	 */
	DatePicker.prototype.viewset = function( type, dateObject/*, options*/ ) {
	    return this.create([ dateObject.year, dateObject.month, 1 ])
	}


	/**
	 * Validate a date as enabled and shift if needed.
	 */
	DatePicker.prototype.validate = function( type, dateObject, options ) {

	    var calendar = this,

	        // Keep a reference to the original date.
	        originalDateObject = dateObject,

	        // Make sure we have an interval.
	        interval = options && options.interval ? options.interval : 1,

	        // Check if the calendar enabled dates are inverted.
	        isFlippedBase = calendar.item.enable === -1,

	        // Check if we have any enabled dates after/before now.
	        hasEnabledBeforeTarget, hasEnabledAfterTarget,

	        // The min & max limits.
	        minLimitObject = calendar.item.min,
	        maxLimitObject = calendar.item.max,

	        // Check if we’ve reached the limit during shifting.
	        reachedMin, reachedMax,

	        // Check if the calendar is inverted and at least one weekday is enabled.
	        hasEnabledWeekdays = isFlippedBase && calendar.item.disable.filter( function( value ) {

	            // If there’s a date, check where it is relative to the target.
	            if ( $.isArray( value ) ) {
	                var dateTime = calendar.create( value ).pick
	                if ( dateTime < dateObject.pick ) hasEnabledBeforeTarget = true
	                else if ( dateTime > dateObject.pick ) hasEnabledAfterTarget = true
	            }

	            // Return only integers for enabled weekdays.
	            return _.isInteger( value )
	        }).length/*,

	        safety = 100*/



	    // Cases to validate for:
	    // [1] Not inverted and date disabled.
	    // [2] Inverted and some dates enabled.
	    // [3] Not inverted and out of range.
	    //
	    // Cases to **not** validate for:
	    // • Navigating months.
	    // • Not inverted and date enabled.
	    // • Inverted and all dates disabled.
	    // • ..and anything else.
	    if ( !options || !options.nav ) if (
	        /* 1 */ ( !isFlippedBase && calendar.disabled( dateObject ) ) ||
	        /* 2 */ ( isFlippedBase && calendar.disabled( dateObject ) && ( hasEnabledWeekdays || hasEnabledBeforeTarget || hasEnabledAfterTarget ) ) ||
	        /* 3 */ ( !isFlippedBase && (dateObject.pick <= minLimitObject.pick || dateObject.pick >= maxLimitObject.pick) )
	    ) {


	        // When inverted, flip the direction if there aren’t any enabled weekdays
	        // and there are no enabled dates in the direction of the interval.
	        if ( isFlippedBase && !hasEnabledWeekdays && ( ( !hasEnabledAfterTarget && interval > 0 ) || ( !hasEnabledBeforeTarget && interval < 0 ) ) ) {
	            interval *= -1
	        }


	        // Keep looping until we reach an enabled date.
	        while ( /*safety &&*/ calendar.disabled( dateObject ) ) {

	            /*safety -= 1
	            if ( !safety ) {
	                throw 'Fell into an infinite loop while validating ' + dateObject.obj + '.'
	            }*/


	            // If we’ve looped into the next/prev month with a large interval, return to the original date and flatten the interval.
	            if ( Math.abs( interval ) > 1 && ( dateObject.month < originalDateObject.month || dateObject.month > originalDateObject.month ) ) {
	                dateObject = originalDateObject
	                interval = interval > 0 ? 1 : -1
	            }


	            // If we’ve reached the min/max limit, reverse the direction, flatten the interval and set it to the limit.
	            if ( dateObject.pick <= minLimitObject.pick ) {
	                reachedMin = true
	                interval = 1
	                dateObject = calendar.create([
	                    minLimitObject.year,
	                    minLimitObject.month,
	                    minLimitObject.date + (dateObject.pick === minLimitObject.pick ? 0 : -1)
	                ])
	            }
	            else if ( dateObject.pick >= maxLimitObject.pick ) {
	                reachedMax = true
	                interval = -1
	                dateObject = calendar.create([
	                    maxLimitObject.year,
	                    maxLimitObject.month,
	                    maxLimitObject.date + (dateObject.pick === maxLimitObject.pick ? 0 : 1)
	                ])
	            }


	            // If we’ve reached both limits, just break out of the loop.
	            if ( reachedMin && reachedMax ) {
	                break
	            }


	            // Finally, create the shifted date using the interval and keep looping.
	            dateObject = calendar.create([ dateObject.year, dateObject.month, dateObject.date + interval ])
	        }

	    } //endif


	    // Return the date object settled on.
	    return dateObject
	} //DatePicker.prototype.validate


	/**
	 * Check if a date is disabled.
	 */
	DatePicker.prototype.disabled = function( dateToVerify ) {

	    var
	        calendar = this,

	        // Filter through the disabled dates to check if this is one.
	        isDisabledMatch = calendar.item.disable.filter( function( dateToDisable ) {

	            // If the date is a number, match the weekday with 0index and `firstDay` check.
	            if ( _.isInteger( dateToDisable ) ) {
	                return dateToVerify.day === ( calendar.settings.firstDay ? dateToDisable : dateToDisable - 1 ) % 7
	            }

	            // If it’s an array or a native JS date, create and match the exact date.
	            if ( $.isArray( dateToDisable ) || _.isDate( dateToDisable ) ) {
	                return dateToVerify.pick === calendar.create( dateToDisable ).pick
	            }

	            // If it’s an object, match a date within the “from” and “to” range.
	            if ( $.isPlainObject( dateToDisable ) ) {
	                return calendar.withinRange( dateToDisable, dateToVerify )
	            }
	        })

	    // If this date matches a disabled date, confirm it’s not inverted.
	    isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function( dateToDisable ) {
	        return $.isArray( dateToDisable ) && dateToDisable[3] == 'inverted' ||
	            $.isPlainObject( dateToDisable ) && dateToDisable.inverted
	    }).length

	    // Check the calendar “enabled” flag and respectively flip the
	    // disabled state. Then also check if it’s beyond the min/max limits.
	    return calendar.item.enable === -1 ? !isDisabledMatch : isDisabledMatch ||
	        dateToVerify.pick < calendar.item.min.pick ||
	        dateToVerify.pick > calendar.item.max.pick

	} //DatePicker.prototype.disabled


	/**
	 * Parse a string into a usable type.
	 */
	DatePicker.prototype.parse = function( type, value, options ) {

	    var calendar = this,
	        parsingObject = {}

	    // If it’s already parsed, we’re good.
	    if ( !value || typeof value != 'string' ) {
	        return value
	    }

	    // We need a `.format` to parse the value with.
	    if ( !( options && options.format ) ) {
	        options = options || {}
	        options.format = calendar.settings.format
	    }

	    // Convert the format into an array and then map through it.
	    calendar.formats.toArray( options.format ).map( function( label ) {

	        var
	            // Grab the formatting label.
	            formattingLabel = calendar.formats[ label ],

	            // The format length is from the formatting label function or the
	            // label length without the escaping exclamation (!) mark.
	            formatLength = formattingLabel ? _.trigger( formattingLabel, calendar, [ value, parsingObject ] ) : label.replace( /^!/, '' ).length

	        // If there's a format label, split the value up to the format length.
	        // Then add it to the parsing object with appropriate label.
	        if ( formattingLabel ) {
	            parsingObject[ label ] = value.substr( 0, formatLength )
	        }

	        // Update the value as the substring from format length to end.
	        value = value.substr( formatLength )
	    })

	    // Compensate for month 0index.
	    return [
	        parsingObject.yyyy || parsingObject.yy,
	        +( parsingObject.mm || parsingObject.m ) - 1,
	        parsingObject.dd || parsingObject.d
	    ]
	} //DatePicker.prototype.parse


	/**
	 * Various formats to display the object in.
	 */
	DatePicker.prototype.formats = (function() {

	    // Return the length of the first word in a collection.
	    function getWordLengthFromCollection( string, collection, dateObject ) {

	        // Grab the first word from the string.
	        var word = string.match( /\w+/ )[ 0 ]

	        // If there's no month index, add it to the date object
	        if ( !dateObject.mm && !dateObject.m ) {
	            dateObject.m = collection.indexOf( word ) + 1
	        }

	        // Return the length of the word.
	        return word.length
	    }

	    // Get the length of the first word in a string.
	    function getFirstWordLength( string ) {
	        return string.match( /\w+/ )[ 0 ].length
	    }

	    return {

	        d: function( string, dateObject ) {

	            // If there's string, then get the digits length.
	            // Otherwise return the selected date.
	            return string ? _.digits( string ) : dateObject.date
	        },
	        dd: function( string, dateObject ) {

	            // If there's a string, then the length is always 2.
	            // Otherwise return the selected date with a leading zero.
	            return string ? 2 : _.lead( dateObject.date )
	        },
	        ddd: function( string, dateObject ) {

	            // If there's a string, then get the length of the first word.
	            // Otherwise return the short selected weekday.
	            return string ? getFirstWordLength( string ) : this.settings.weekdaysShort[ dateObject.day ]
	        },
	        dddd: function( string, dateObject ) {

	            // If there's a string, then get the length of the first word.
	            // Otherwise return the full selected weekday.
	            return string ? getFirstWordLength( string ) : this.settings.weekdaysFull[ dateObject.day ]
	        },
	        m: function( string, dateObject ) {

	            // If there's a string, then get the length of the digits
	            // Otherwise return the selected month with 0index compensation.
	            return string ? _.digits( string ) : dateObject.month + 1
	        },
	        mm: function( string, dateObject ) {

	            // If there's a string, then the length is always 2.
	            // Otherwise return the selected month with 0index and leading zero.
	            return string ? 2 : _.lead( dateObject.month + 1 )
	        },
	        mmm: function( string, dateObject ) {

	            var collection = this.settings.monthsShort

	            // If there's a string, get length of the relevant month from the short
	            // months collection. Otherwise return the selected month from that collection.
	            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
	        },
	        mmmm: function( string, dateObject ) {

	            var collection = this.settings.monthsFull

	            // If there's a string, get length of the relevant month from the full
	            // months collection. Otherwise return the selected month from that collection.
	            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
	        },
	        yy: function( string, dateObject ) {

	            // If there's a string, then the length is always 2.
	            // Otherwise return the selected year by slicing out the first 2 digits.
	            return string ? 2 : ( '' + dateObject.year ).slice( 2 )
	        },
	        yyyy: function( string, dateObject ) {

	            // If there's a string, then the length is always 4.
	            // Otherwise return the selected year.
	            return string ? 4 : dateObject.year
	        },

	        // Create an array by splitting the formatting string passed.
	        toArray: function( formatString ) { return formatString.split( /(d{1,4}|m{1,4}|y{4}|yy|!.)/g ) },

	        // Format an object into a string using the formatting options.
	        toString: function ( formatString, itemObject ) {
	            var calendar = this
	            return calendar.formats.toArray( formatString ).map( function( label ) {
	                return _.trigger( calendar.formats[ label ], calendar, [ 0, itemObject ] ) || label.replace( /^!/, '' )
	            }).join( '' )
	        }
	    }
	})() //DatePicker.prototype.formats




	/**
	 * Check if two date units are the exact.
	 */
	DatePicker.prototype.isDateExact = function( one, two ) {

	    var calendar = this

	    // When we’re working with weekdays, do a direct comparison.
	    if (
	        ( _.isInteger( one ) && _.isInteger( two ) ) ||
	        ( typeof one == 'boolean' && typeof two == 'boolean' )
	     ) {
	        return one === two
	    }

	    // When we’re working with date representations, compare the “pick” value.
	    if (
	        ( _.isDate( one ) || $.isArray( one ) ) &&
	        ( _.isDate( two ) || $.isArray( two ) )
	    ) {
	        return calendar.create( one ).pick === calendar.create( two ).pick
	    }

	    // When we’re working with range objects, compare the “from” and “to”.
	    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
	        return calendar.isDateExact( one.from, two.from ) && calendar.isDateExact( one.to, two.to )
	    }

	    return false
	}


	/**
	 * Check if two date units overlap.
	 */
	DatePicker.prototype.isDateOverlap = function( one, two ) {

	    var calendar = this,
	        firstDay = calendar.settings.firstDay ? 1 : 0

	    // When we’re working with a weekday index, compare the days.
	    if ( _.isInteger( one ) && ( _.isDate( two ) || $.isArray( two ) ) ) {
	        one = one % 7 + firstDay
	        return one === calendar.create( two ).day + 1
	    }
	    if ( _.isInteger( two ) && ( _.isDate( one ) || $.isArray( one ) ) ) {
	        two = two % 7 + firstDay
	        return two === calendar.create( one ).day + 1
	    }

	    // When we’re working with range objects, check if the ranges overlap.
	    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
	        return calendar.overlapRanges( one, two )
	    }

	    return false
	}


	/**
	 * Flip the “enabled” state.
	 */
	DatePicker.prototype.flipEnable = function(val) {
	    var itemObject = this.item
	    itemObject.enable = val || (itemObject.enable == -1 ? 1 : -1)
	}


	/**
	 * Mark a collection of dates as “disabled”.
	 */
	DatePicker.prototype.deactivate = function( type, datesToDisable ) {

	    var calendar = this,
	        disabledItems = calendar.item.disable.slice(0)


	    // If we’re flipping, that’s all we need to do.
	    if ( datesToDisable == 'flip' ) {
	        calendar.flipEnable()
	    }

	    else if ( datesToDisable === false ) {
	        calendar.flipEnable(1)
	        disabledItems = []
	    }

	    else if ( datesToDisable === true ) {
	        calendar.flipEnable(-1)
	        disabledItems = []
	    }

	    // Otherwise go through the dates to disable.
	    else {

	        datesToDisable.map(function( unitToDisable ) {

	            var matchFound

	            // When we have disabled items, check for matches.
	            // If something is matched, immediately break out.
	            for ( var index = 0; index < disabledItems.length; index += 1 ) {
	                if ( calendar.isDateExact( unitToDisable, disabledItems[index] ) ) {
	                    matchFound = true
	                    break
	                }
	            }

	            // If nothing was found, add the validated unit to the collection.
	            if ( !matchFound ) {
	                if (
	                    _.isInteger( unitToDisable ) ||
	                    _.isDate( unitToDisable ) ||
	                    $.isArray( unitToDisable ) ||
	                    ( $.isPlainObject( unitToDisable ) && unitToDisable.from && unitToDisable.to )
	                ) {
	                    disabledItems.push( unitToDisable )
	                }
	            }
	        })
	    }

	    // Return the updated collection.
	    return disabledItems
	} //DatePicker.prototype.deactivate


	/**
	 * Mark a collection of dates as “enabled”.
	 */
	DatePicker.prototype.activate = function( type, datesToEnable ) {

	    var calendar = this,
	        disabledItems = calendar.item.disable,
	        disabledItemsCount = disabledItems.length

	    // If we’re flipping, that’s all we need to do.
	    if ( datesToEnable == 'flip' ) {
	        calendar.flipEnable()
	    }

	    else if ( datesToEnable === true ) {
	        calendar.flipEnable(1)
	        disabledItems = []
	    }

	    else if ( datesToEnable === false ) {
	        calendar.flipEnable(-1)
	        disabledItems = []
	    }

	    // Otherwise go through the disabled dates.
	    else {

	        datesToEnable.map(function( unitToEnable ) {

	            var matchFound,
	                disabledUnit,
	                index,
	                isExactRange

	            // Go through the disabled items and try to find a match.
	            for ( index = 0; index < disabledItemsCount; index += 1 ) {

	                disabledUnit = disabledItems[index]

	                // When an exact match is found, remove it from the collection.
	                if ( calendar.isDateExact( disabledUnit, unitToEnable ) ) {
	                    matchFound = disabledItems[index] = null
	                    isExactRange = true
	                    break
	                }

	                // When an overlapped match is found, add the “inverted” state to it.
	                else if ( calendar.isDateOverlap( disabledUnit, unitToEnable ) ) {
	                    if ( $.isPlainObject( unitToEnable ) ) {
	                        unitToEnable.inverted = true
	                        matchFound = unitToEnable
	                    }
	                    else if ( $.isArray( unitToEnable ) ) {
	                        matchFound = unitToEnable
	                        if ( !matchFound[3] ) matchFound.push( 'inverted' )
	                    }
	                    else if ( _.isDate( unitToEnable ) ) {
	                        matchFound = [ unitToEnable.getFullYear(), unitToEnable.getMonth(), unitToEnable.getDate(), 'inverted' ]
	                    }
	                    break
	                }
	            }

	            // If a match was found, remove a previous duplicate entry.
	            if ( matchFound ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
	                if ( calendar.isDateExact( disabledItems[index], unitToEnable ) ) {
	                    disabledItems[index] = null
	                    break
	                }
	            }

	            // In the event that we’re dealing with an exact range of dates,
	            // make sure there are no “inverted” dates because of it.
	            if ( isExactRange ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
	                if ( calendar.isDateOverlap( disabledItems[index], unitToEnable ) ) {
	                    disabledItems[index] = null
	                    break
	                }
	            }

	            // If something is still matched, add it into the collection.
	            if ( matchFound ) {
	                disabledItems.push( matchFound )
	            }
	        })
	    }

	    // Return the updated collection.
	    return disabledItems.filter(function( val ) { return val != null })
	} //DatePicker.prototype.activate


	/**
	 * Create a string for the nodes in the picker.
	 */
	DatePicker.prototype.nodes = function( isOpen ) {

	    var
	        calendar = this,
	        settings = calendar.settings,
	        calendarItem = calendar.item,
	        nowObject = calendarItem.now,
	        selectedObject = calendarItem.select,
	        highlightedObject = calendarItem.highlight,
	        viewsetObject = calendarItem.view,
	        disabledCollection = calendarItem.disable,
	        minLimitObject = calendarItem.min,
	        maxLimitObject = calendarItem.max,


	        // Create the calendar table head using a copy of weekday labels collection.
	        // * We do a copy so we don't mutate the original array.
	        tableHead = (function( collection, fullCollection ) {

	            // If the first day should be Monday, move Sunday to the end.
	            if ( settings.firstDay ) {
	                collection.push( collection.shift() )
	                fullCollection.push( fullCollection.shift() )
	            }

	            // Create and return the table head group.
	            return _.node(
	                'thead',
	                _.node(
	                    'tr',
	                    _.group({
	                        min: 0,
	                        max: DAYS_IN_WEEK - 1,
	                        i: 1,
	                        node: 'th',
	                        item: function( counter ) {
	                            return [
	                                collection[ counter ],
	                                settings.klass.weekdays,
	                                'scope=col title="' + fullCollection[ counter ] + '"'
	                            ]
	                        }
	                    })
	                )
	            ) //endreturn

	        // Materialize modified
	        })( ( settings.showWeekdaysFull ? settings.weekdaysFull : settings.weekdaysLetter ).slice( 0 ), settings.weekdaysFull.slice( 0 ) ), //tableHead


	        // Create the nav for next/prev month.
	        createMonthNav = function( next ) {

	            // Otherwise, return the created month tag.
	            return _.node(
	                'div',
	                ' ',
	                settings.klass[ 'nav' + ( next ? 'Next' : 'Prev' ) ] + (

	                    // If the focused month is outside the range, disabled the button.
	                    ( next && viewsetObject.year >= maxLimitObject.year && viewsetObject.month >= maxLimitObject.month ) ||
	                    ( !next && viewsetObject.year <= minLimitObject.year && viewsetObject.month <= minLimitObject.month ) ?
	                    ' ' + settings.klass.navDisabled : ''
	                ),
	                'data-nav=' + ( next || -1 ) + ' ' +
	                _.ariaAttr({
	                    role: 'button',
	                    controls: calendar.$node[0].id + '_table'
	                }) + ' ' +
	                'title="' + (next ? settings.labelMonthNext : settings.labelMonthPrev ) + '"'
	            ) //endreturn
	        }, //createMonthNav


	        // Create the month label.
	        //Materialize modified
	        createMonthLabel = function(override) {

	            var monthsCollection = settings.showMonthsShort ? settings.monthsShort : settings.monthsFull

	             // Materialize modified
	            if (override == "short_months") {
	              monthsCollection = settings.monthsShort;
	            }

	            // If there are months to select, add a dropdown menu.
	            if ( settings.selectMonths  && override == undefined) {

	                return _.node( 'select',
	                    _.group({
	                        min: 0,
	                        max: 11,
	                        i: 1,
	                        node: 'option',
	                        item: function( loopedMonth ) {

	                            return [

	                                // The looped month and no classes.
	                                monthsCollection[ loopedMonth ], 0,

	                                // Set the value and selected index.
	                                'value=' + loopedMonth +
	                                ( viewsetObject.month == loopedMonth ? ' selected' : '' ) +
	                                (
	                                    (
	                                        ( viewsetObject.year == minLimitObject.year && loopedMonth < minLimitObject.month ) ||
	                                        ( viewsetObject.year == maxLimitObject.year && loopedMonth > maxLimitObject.month )
	                                    ) ?
	                                    ' disabled' : ''
	                                )
	                            ]
	                        }
	                    }),
	                    settings.klass.selectMonth + ' browser-default',
	                    ( isOpen ? '' : 'disabled' ) + ' ' +
	                    _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +
	                    'title="' + settings.labelMonthSelect + '"'
	                )
	            }

	            // Materialize modified
	            if (override == "short_months")
	                if (selectedObject != null)
	                return _.node( 'div', monthsCollection[ selectedObject.month ] );
	                else return _.node( 'div', monthsCollection[ viewsetObject.month ] );

	            // If there's a need for a month selector
	            return _.node( 'div', monthsCollection[ viewsetObject.month ], settings.klass.month )
	        }, //createMonthLabel


	        // Create the year label.
	        // Materialize modified
	        createYearLabel = function(override) {

	            var focusedYear = viewsetObject.year,

	            // If years selector is set to a literal "true", set it to 5. Otherwise
	            // divide in half to get half before and half after focused year.
	            numberYears = settings.selectYears === true ? 5 : ~~( settings.selectYears / 2 )

	            // If there are years to select, add a dropdown menu.
	            if ( numberYears ) {

	                var
	                    minYear = minLimitObject.year,
	                    maxYear = maxLimitObject.year,
	                    lowestYear = focusedYear - numberYears,
	                    highestYear = focusedYear + numberYears

	                // If the min year is greater than the lowest year, increase the highest year
	                // by the difference and set the lowest year to the min year.
	                if ( minYear > lowestYear ) {
	                    highestYear += minYear - lowestYear
	                    lowestYear = minYear
	                }

	                // If the max year is less than the highest year, decrease the lowest year
	                // by the lower of the two: available and needed years. Then set the
	                // highest year to the max year.
	                if ( maxYear < highestYear ) {

	                    var availableYears = lowestYear - minYear,
	                        neededYears = highestYear - maxYear

	                    lowestYear -= availableYears > neededYears ? neededYears : availableYears
	                    highestYear = maxYear
	                }

	                if ( settings.selectYears  && override == undefined ) {
	                    return _.node( 'select',
	                        _.group({
	                            min: lowestYear,
	                            max: highestYear,
	                            i: 1,
	                            node: 'option',
	                            item: function( loopedYear ) {
	                                return [

	                                    // The looped year and no classes.
	                                    loopedYear, 0,

	                                    // Set the value and selected index.
	                                    'value=' + loopedYear + ( focusedYear == loopedYear ? ' selected' : '' )
	                                ]
	                            }
	                        }),
	                        settings.klass.selectYear + ' browser-default',
	                        ( isOpen ? '' : 'disabled' ) + ' ' + _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +
	                        'title="' + settings.labelYearSelect + '"'
	                    )
	                }
	            }

	            // Materialize modified
	            if (override == "raw")
	                return _.node( 'div', focusedYear )

	            // Otherwise just return the year focused
	            return _.node( 'div', focusedYear, settings.klass.year )
	        } //createYearLabel


	        // Materialize modified
	        createDayLabel = function() {
	                if (selectedObject != null)
	                    return _.node( 'div', selectedObject.date)
	                else return _.node( 'div', nowObject.date)
	            }
	        createWeekdayLabel = function() {
	            var display_day;

	            if (selectedObject != null)
	                display_day = selectedObject.day;
	            else
	                display_day = nowObject.day;
	            var weekday = settings.weekdaysFull[ display_day ]
	            return weekday
	        }


	    // Create and return the entire calendar.
	return _.node(
	        // Date presentation View
	        'div',
	            _.node(
	                'div',
	                createWeekdayLabel(),
	                "picker__weekday-display"
	            )+
	            _.node(
	                // Div for short Month
	                'div',
	                createMonthLabel("short_months"),
	                settings.klass.month_display
	            )+
	            _.node(
	                // Div for Day
	                'div',
	                createDayLabel() ,
	                settings.klass.day_display
	            )+
	            _.node(
	                // Div for Year
	                'div',
	                createYearLabel("raw") ,
	                settings.klass.year_display
	            ),
	        settings.klass.date_display
	    )+
	    // Calendar container
	    _.node('div',
	        _.node('div',
	        ( settings.selectYears ?  createMonthLabel() + createYearLabel() : createMonthLabel() + createYearLabel() ) +
	        createMonthNav() + createMonthNav( 1 ),
	        settings.klass.header
	    ) + _.node(
	        'table',
	        tableHead +
	        _.node(
	            'tbody',
	            _.group({
	                min: 0,
	                max: WEEKS_IN_CALENDAR - 1,
	                i: 1,
	                node: 'tr',
	                item: function( rowCounter ) {

	                    // If Monday is the first day and the month starts on Sunday, shift the date back a week.
	                    var shiftDateBy = settings.firstDay && calendar.create([ viewsetObject.year, viewsetObject.month, 1 ]).day === 0 ? -7 : 0

	                    return [
	                        _.group({
	                            min: DAYS_IN_WEEK * rowCounter - viewsetObject.day + shiftDateBy + 1, // Add 1 for weekday 0index
	                            max: function() {
	                                return this.min + DAYS_IN_WEEK - 1
	                            },
	                            i: 1,
	                            node: 'td',
	                            item: function( targetDate ) {

	                                // Convert the time date from a relative date to a target date.
	                                targetDate = calendar.create([ viewsetObject.year, viewsetObject.month, targetDate + ( settings.firstDay ? 1 : 0 ) ])

	                                var isSelected = selectedObject && selectedObject.pick == targetDate.pick,
	                                    isHighlighted = highlightedObject && highlightedObject.pick == targetDate.pick,
	                                    isDisabled = disabledCollection && calendar.disabled( targetDate ) || targetDate.pick < minLimitObject.pick || targetDate.pick > maxLimitObject.pick,
	                                    formattedDate = _.trigger( calendar.formats.toString, calendar, [ settings.format, targetDate ] )

	                                return [
	                                    _.node(
	                                        'div',
	                                        targetDate.date,
	                                        (function( klasses ) {

	                                            // Add the `infocus` or `outfocus` classes based on month in view.
	                                            klasses.push( viewsetObject.month == targetDate.month ? settings.klass.infocus : settings.klass.outfocus )

	                                            // Add the `today` class if needed.
	                                            if ( nowObject.pick == targetDate.pick ) {
	                                                klasses.push( settings.klass.now )
	                                            }

	                                            // Add the `selected` class if something's selected and the time matches.
	                                            if ( isSelected ) {
	                                                klasses.push( settings.klass.selected )
	                                            }

	                                            // Add the `highlighted` class if something's highlighted and the time matches.
	                                            if ( isHighlighted ) {
	                                                klasses.push( settings.klass.highlighted )
	                                            }

	                                            // Add the `disabled` class if something's disabled and the object matches.
	                                            if ( isDisabled ) {
	                                                klasses.push( settings.klass.disabled )
	                                            }

	                                            return klasses.join( ' ' )
	                                        })([ settings.klass.day ]),
	                                        'data-pick=' + targetDate.pick + ' ' + _.ariaAttr({
	                                            role: 'gridcell',
	                                            label: formattedDate,
	                                            selected: isSelected && calendar.$node.val() === formattedDate ? true : null,
	                                            activedescendant: isHighlighted ? true : null,
	                                            disabled: isDisabled ? true : null
	                                        })
	                                    ),
	                                    '',
	                                    _.ariaAttr({ role: 'presentation' })
	                                ] //endreturn
	                            }
	                        })
	                    ] //endreturn
	                }
	            })
	        ),
	        settings.klass.table,
	        'id="' + calendar.$node[0].id + '_table' + '" ' + _.ariaAttr({
	            role: 'grid',
	            controls: calendar.$node[0].id,
	            readonly: true
	        })
	    )
	    , settings.klass.calendar_container) // end calendar

	     +

	    // * For Firefox forms to submit, make sure to set the buttons’ `type` attributes as “button”.
	    _.node(
	        'div',
	        _.node( 'button', settings.today, "btn-flat picker__today",
	            'type=button data-pick=' + nowObject.pick +
	            ( isOpen && !calendar.disabled(nowObject) ? '' : ' disabled' ) + ' ' +
	            _.ariaAttr({ controls: calendar.$node[0].id }) ) +
	        _.node( 'button', settings.clear, "btn-flat picker__clear",
	            'type=button data-clear=1' +
	            ( isOpen ? '' : ' disabled' ) + ' ' +
	            _.ariaAttr({ controls: calendar.$node[0].id }) ) +
	        _.node('button', settings.close, "btn-flat picker__close",
	            'type=button data-close=true ' +
	            ( isOpen ? '' : ' disabled' ) + ' ' +
	            _.ariaAttr({ controls: calendar.$node[0].id }) ),
	        settings.klass.footer
	    ) //endreturn
	} //DatePicker.prototype.nodes




	/**
	 * The date picker defaults.
	 */
	DatePicker.defaults = (function( prefix ) {

	    return {

	        // The title label to use for the month nav buttons
	        labelMonthNext: 'Next month',
	        labelMonthPrev: 'Previous month',

	        // The title label to use for the dropdown selectors
	        labelMonthSelect: 'Select a month',
	        labelYearSelect: 'Select a year',

	        // Months and weekdays
	        monthsFull: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
	        monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
	        weekdaysFull: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
	        weekdaysShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],

	        // Materialize modified
	        weekdaysLetter: [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],

	        // Today and clear
	        today: 'Today',
	        clear: 'Clear',
	        close: 'Close',

	        // The format to show on the `input` element
	        format: 'd mmmm, yyyy',

	        // Classes
	        klass: {

	            table: prefix + 'table',

	            header: prefix + 'header',


	            // Materialize Added klasses
	            date_display: prefix + 'date-display',
	            day_display: prefix + 'day-display',
	            month_display: prefix + 'month-display',
	            year_display: prefix + 'year-display',
	            calendar_container: prefix + 'calendar-container',
	            // end



	            navPrev: prefix + 'nav--prev',
	            navNext: prefix + 'nav--next',
	            navDisabled: prefix + 'nav--disabled',

	            month: prefix + 'month',
	            year: prefix + 'year',

	            selectMonth: prefix + 'select--month',
	            selectYear: prefix + 'select--year',

	            weekdays: prefix + 'weekday',

	            day: prefix + 'day',
	            disabled: prefix + 'day--disabled',
	            selected: prefix + 'day--selected',
	            highlighted: prefix + 'day--highlighted',
	            now: prefix + 'day--today',
	            infocus: prefix + 'day--infocus',
	            outfocus: prefix + 'day--outfocus',

	            footer: prefix + 'footer',

	            buttonClear: prefix + 'button--clear',
	            buttonToday: prefix + 'button--today',
	            buttonClose: prefix + 'button--close'
	        }
	    }
	})( Picker.klasses().picker + '__' )





	/**
	 * Extend the picker to add the date picker.
	 */
	Picker.extend( 'pickadate', DatePicker )


	}));


	;(function ($) {

	  $.fn.characterCounter = function(){
	    return this.each(function(){

	      var itHasLengthAttribute = $(this).attr('length') !== undefined;

	      if(itHasLengthAttribute){
	        $(this).on('input', updateCounter);
	        $(this).on('focus', updateCounter);
	        $(this).on('blur', removeCounterElement);

	        addCounterElement($(this));
	      }

	    });
	  };

	  function updateCounter(){
	    var maxLength     = +$(this).attr('length'),
	    actualLength      = +$(this).val().length,
	    isValidLength     = actualLength <= maxLength;

	    $(this).parent().find('span[class="character-counter"]')
	                    .html( actualLength + '/' + maxLength);

	    addInputStyle(isValidLength, $(this));
	  }

	  function addCounterElement($input){
	    var $counterElement = $('<span/>')
	                        .addClass('character-counter')
	                        .css('float','right')
	                        .css('font-size','12px')
	                        .css('height', 1);

	    $input.parent().append($counterElement);
	  }

	  function removeCounterElement(){
	    $(this).parent().find('span[class="character-counter"]').html('');
	  }

	  function addInputStyle(isValidLength, $input){
	    var inputHasInvalidClass = $input.hasClass('invalid');
	    if (isValidLength && inputHasInvalidClass) {
	      $input.removeClass('invalid');
	    }
	    else if(!isValidLength && !inputHasInvalidClass){
	      $input.removeClass('valid');
	      $input.addClass('invalid');
	    }
	  }

	  $(document).ready(function(){
	    $('input, textarea').characterCounter();
	  });

	}( jQuery ));


/***/ }),
/* 28 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
	 * http://hammerjs.github.io/
	 *
	 * Copyright (c) 2016 Jorik Tangelder;
	 * Licensed under the MIT license */
	(function(window, document, exportName, undefined) {
	  'use strict';

	var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
	var TEST_ELEMENT = document.createElement('div');

	var TYPE_FUNCTION = 'function';

	var round = Math.round;
	var abs = Math.abs;
	var now = Date.now;

	/**
	 * set a timeout with a given scope
	 * @param {Function} fn
	 * @param {Number} timeout
	 * @param {Object} context
	 * @returns {number}
	 */
	function setTimeoutContext(fn, timeout, context) {
	    return setTimeout(bindFn(fn, context), timeout);
	}

	/**
	 * if the argument is an array, we want to execute the fn on each entry
	 * if it aint an array we don't want to do a thing.
	 * this is used by all the methods that accept a single and array argument.
	 * @param {*|Array} arg
	 * @param {String} fn
	 * @param {Object} [context]
	 * @returns {Boolean}
	 */
	function invokeArrayArg(arg, fn, context) {
	    if (Array.isArray(arg)) {
	        each(arg, context[fn], context);
	        return true;
	    }
	    return false;
	}

	/**
	 * walk objects and arrays
	 * @param {Object} obj
	 * @param {Function} iterator
	 * @param {Object} context
	 */
	function each(obj, iterator, context) {
	    var i;

	    if (!obj) {
	        return;
	    }

	    if (obj.forEach) {
	        obj.forEach(iterator, context);
	    } else if (obj.length !== undefined) {
	        i = 0;
	        while (i < obj.length) {
	            iterator.call(context, obj[i], i, obj);
	            i++;
	        }
	    } else {
	        for (i in obj) {
	            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
	        }
	    }
	}

	/**
	 * wrap a method with a deprecation warning and stack trace
	 * @param {Function} method
	 * @param {String} name
	 * @param {String} message
	 * @returns {Function} A new function wrapping the supplied method.
	 */
	function deprecate(method, name, message) {
	    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
	    return function() {
	        var e = new Error('get-stack-trace');
	        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
	            .replace(/^\s+at\s+/gm, '')
	            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

	        var log = window.console && (window.console.warn || window.console.log);
	        if (log) {
	            log.call(window.console, deprecationMessage, stack);
	        }
	        return method.apply(this, arguments);
	    };
	}

	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} target
	 * @param {...Object} objects_to_assign
	 * @returns {Object} target
	 */
	var assign;
	if (typeof Object.assign !== 'function') {
	    assign = function assign(target) {
	        if (target === undefined || target === null) {
	            throw new TypeError('Cannot convert undefined or null to object');
	        }

	        var output = Object(target);
	        for (var index = 1; index < arguments.length; index++) {
	            var source = arguments[index];
	            if (source !== undefined && source !== null) {
	                for (var nextKey in source) {
	                    if (source.hasOwnProperty(nextKey)) {
	                        output[nextKey] = source[nextKey];
	                    }
	                }
	            }
	        }
	        return output;
	    };
	} else {
	    assign = Object.assign;
	}

	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} dest
	 * @param {Object} src
	 * @param {Boolean} [merge=false]
	 * @returns {Object} dest
	 */
	var extend = deprecate(function extend(dest, src, merge) {
	    var keys = Object.keys(src);
	    var i = 0;
	    while (i < keys.length) {
	        if (!merge || (merge && dest[keys[i]] === undefined)) {
	            dest[keys[i]] = src[keys[i]];
	        }
	        i++;
	    }
	    return dest;
	}, 'extend', 'Use `assign`.');

	/**
	 * merge the values from src in the dest.
	 * means that properties that exist in dest will not be overwritten by src
	 * @param {Object} dest
	 * @param {Object} src
	 * @returns {Object} dest
	 */
	var merge = deprecate(function merge(dest, src) {
	    return extend(dest, src, true);
	}, 'merge', 'Use `assign`.');

	/**
	 * simple class inheritance
	 * @param {Function} child
	 * @param {Function} base
	 * @param {Object} [properties]
	 */
	function inherit(child, base, properties) {
	    var baseP = base.prototype,
	        childP;

	    childP = child.prototype = Object.create(baseP);
	    childP.constructor = child;
	    childP._super = baseP;

	    if (properties) {
	        assign(childP, properties);
	    }
	}

	/**
	 * simple function bind
	 * @param {Function} fn
	 * @param {Object} context
	 * @returns {Function}
	 */
	function bindFn(fn, context) {
	    return function boundFn() {
	        return fn.apply(context, arguments);
	    };
	}

	/**
	 * let a boolean value also be a function that must return a boolean
	 * this first item in args will be used as the context
	 * @param {Boolean|Function} val
	 * @param {Array} [args]
	 * @returns {Boolean}
	 */
	function boolOrFn(val, args) {
	    if (typeof val == TYPE_FUNCTION) {
	        return val.apply(args ? args[0] || undefined : undefined, args);
	    }
	    return val;
	}

	/**
	 * use the val2 when val1 is undefined
	 * @param {*} val1
	 * @param {*} val2
	 * @returns {*}
	 */
	function ifUndefined(val1, val2) {
	    return (val1 === undefined) ? val2 : val1;
	}

	/**
	 * addEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function addEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.addEventListener(type, handler, false);
	    });
	}

	/**
	 * removeEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function removeEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.removeEventListener(type, handler, false);
	    });
	}

	/**
	 * find if a node is in the given parent
	 * @method hasParent
	 * @param {HTMLElement} node
	 * @param {HTMLElement} parent
	 * @return {Boolean} found
	 */
	function hasParent(node, parent) {
	    while (node) {
	        if (node == parent) {
	            return true;
	        }
	        node = node.parentNode;
	    }
	    return false;
	}

	/**
	 * small indexOf wrapper
	 * @param {String} str
	 * @param {String} find
	 * @returns {Boolean} found
	 */
	function inStr(str, find) {
	    return str.indexOf(find) > -1;
	}

	/**
	 * split string on whitespace
	 * @param {String} str
	 * @returns {Array} words
	 */
	function splitStr(str) {
	    return str.trim().split(/\s+/g);
	}

	/**
	 * find if a array contains the object using indexOf or a simple polyFill
	 * @param {Array} src
	 * @param {String} find
	 * @param {String} [findByKey]
	 * @return {Boolean|Number} false when not found, or the index
	 */
	function inArray(src, find, findByKey) {
	    if (src.indexOf && !findByKey) {
	        return src.indexOf(find);
	    } else {
	        var i = 0;
	        while (i < src.length) {
	            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
	                return i;
	            }
	            i++;
	        }
	        return -1;
	    }
	}

	/**
	 * convert array-like objects to real arrays
	 * @param {Object} obj
	 * @returns {Array}
	 */
	function toArray(obj) {
	    return Array.prototype.slice.call(obj, 0);
	}

	/**
	 * unique array with objects based on a key (like 'id') or just by the array's value
	 * @param {Array} src [{id:1},{id:2},{id:1}]
	 * @param {String} [key]
	 * @param {Boolean} [sort=False]
	 * @returns {Array} [{id:1},{id:2}]
	 */
	function uniqueArray(src, key, sort) {
	    var results = [];
	    var values = [];
	    var i = 0;

	    while (i < src.length) {
	        var val = key ? src[i][key] : src[i];
	        if (inArray(values, val) < 0) {
	            results.push(src[i]);
	        }
	        values[i] = val;
	        i++;
	    }

	    if (sort) {
	        if (!key) {
	            results = results.sort();
	        } else {
	            results = results.sort(function sortUniqueArray(a, b) {
	                return a[key] > b[key];
	            });
	        }
	    }

	    return results;
	}

	/**
	 * get the prefixed property
	 * @param {Object} obj
	 * @param {String} property
	 * @returns {String|Undefined} prefixed
	 */
	function prefixed(obj, property) {
	    var prefix, prop;
	    var camelProp = property[0].toUpperCase() + property.slice(1);

	    var i = 0;
	    while (i < VENDOR_PREFIXES.length) {
	        prefix = VENDOR_PREFIXES[i];
	        prop = (prefix) ? prefix + camelProp : property;

	        if (prop in obj) {
	            return prop;
	        }
	        i++;
	    }
	    return undefined;
	}

	/**
	 * get a unique id
	 * @returns {number} uniqueId
	 */
	var _uniqueId = 1;
	function uniqueId() {
	    return _uniqueId++;
	}

	/**
	 * get the window object of an element
	 * @param {HTMLElement} element
	 * @returns {DocumentView|Window}
	 */
	function getWindowForElement(element) {
	    var doc = element.ownerDocument || element;
	    return (doc.defaultView || doc.parentWindow || window);
	}

	var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

	var SUPPORT_TOUCH = ('ontouchstart' in window);
	var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
	var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

	var INPUT_TYPE_TOUCH = 'touch';
	var INPUT_TYPE_PEN = 'pen';
	var INPUT_TYPE_MOUSE = 'mouse';
	var INPUT_TYPE_KINECT = 'kinect';

	var COMPUTE_INTERVAL = 25;

	var INPUT_START = 1;
	var INPUT_MOVE = 2;
	var INPUT_END = 4;
	var INPUT_CANCEL = 8;

	var DIRECTION_NONE = 1;
	var DIRECTION_LEFT = 2;
	var DIRECTION_RIGHT = 4;
	var DIRECTION_UP = 8;
	var DIRECTION_DOWN = 16;

	var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
	var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
	var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

	var PROPS_XY = ['x', 'y'];
	var PROPS_CLIENT_XY = ['clientX', 'clientY'];

	/**
	 * create new input type manager
	 * @param {Manager} manager
	 * @param {Function} callback
	 * @returns {Input}
	 * @constructor
	 */
	function Input(manager, callback) {
	    var self = this;
	    this.manager = manager;
	    this.callback = callback;
	    this.element = manager.element;
	    this.target = manager.options.inputTarget;

	    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
	    // so when disabled the input events are completely bypassed.
	    this.domHandler = function(ev) {
	        if (boolOrFn(manager.options.enable, [manager])) {
	            self.handler(ev);
	        }
	    };

	    this.init();

	}

	Input.prototype = {
	    /**
	     * should handle the inputEvent data and trigger the callback
	     * @virtual
	     */
	    handler: function() { },

	    /**
	     * bind the events
	     */
	    init: function() {
	        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    },

	    /**
	     * unbind the events
	     */
	    destroy: function() {
	        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    }
	};

	/**
	 * create new input type manager
	 * called by the Manager constructor
	 * @param {Hammer} manager
	 * @returns {Input}
	 */
	function createInputInstance(manager) {
	    var Type;
	    var inputClass = manager.options.inputClass;

	    if (inputClass) {
	        Type = inputClass;
	    } else if (SUPPORT_POINTER_EVENTS) {
	        Type = PointerEventInput;
	    } else if (SUPPORT_ONLY_TOUCH) {
	        Type = TouchInput;
	    } else if (!SUPPORT_TOUCH) {
	        Type = MouseInput;
	    } else {
	        Type = TouchMouseInput;
	    }
	    return new (Type)(manager, inputHandler);
	}

	/**
	 * handle input events
	 * @param {Manager} manager
	 * @param {String} eventType
	 * @param {Object} input
	 */
	function inputHandler(manager, eventType, input) {
	    var pointersLen = input.pointers.length;
	    var changedPointersLen = input.changedPointers.length;
	    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
	    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

	    input.isFirst = !!isFirst;
	    input.isFinal = !!isFinal;

	    if (isFirst) {
	        manager.session = {};
	    }

	    // source event is the normalized value of the domEvents
	    // like 'touchstart, mouseup, pointerdown'
	    input.eventType = eventType;

	    // compute scale, rotation etc
	    computeInputData(manager, input);

	    // emit secret event
	    manager.emit('hammer.input', input);

	    manager.recognize(input);
	    manager.session.prevInput = input;
	}

	/**
	 * extend the data with some usable properties like scale, rotate, velocity etc
	 * @param {Object} manager
	 * @param {Object} input
	 */
	function computeInputData(manager, input) {
	    var session = manager.session;
	    var pointers = input.pointers;
	    var pointersLength = pointers.length;

	    // store the first input to calculate the distance and direction
	    if (!session.firstInput) {
	        session.firstInput = simpleCloneInputData(input);
	    }

	    // to compute scale and rotation we need to store the multiple touches
	    if (pointersLength > 1 && !session.firstMultiple) {
	        session.firstMultiple = simpleCloneInputData(input);
	    } else if (pointersLength === 1) {
	        session.firstMultiple = false;
	    }

	    var firstInput = session.firstInput;
	    var firstMultiple = session.firstMultiple;
	    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

	    var center = input.center = getCenter(pointers);
	    input.timeStamp = now();
	    input.deltaTime = input.timeStamp - firstInput.timeStamp;

	    input.angle = getAngle(offsetCenter, center);
	    input.distance = getDistance(offsetCenter, center);

	    computeDeltaXY(session, input);
	    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

	    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
	    input.overallVelocityX = overallVelocity.x;
	    input.overallVelocityY = overallVelocity.y;
	    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

	    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
	    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

	    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
	        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

	    computeIntervalInputData(session, input);

	    // find the correct target
	    var target = manager.element;
	    if (hasParent(input.srcEvent.target, target)) {
	        target = input.srcEvent.target;
	    }
	    input.target = target;
	}

	function computeDeltaXY(session, input) {
	    var center = input.center;
	    var offset = session.offsetDelta || {};
	    var prevDelta = session.prevDelta || {};
	    var prevInput = session.prevInput || {};

	    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
	        prevDelta = session.prevDelta = {
	            x: prevInput.deltaX || 0,
	            y: prevInput.deltaY || 0
	        };

	        offset = session.offsetDelta = {
	            x: center.x,
	            y: center.y
	        };
	    }

	    input.deltaX = prevDelta.x + (center.x - offset.x);
	    input.deltaY = prevDelta.y + (center.y - offset.y);
	}

	/**
	 * velocity is calculated every x ms
	 * @param {Object} session
	 * @param {Object} input
	 */
	function computeIntervalInputData(session, input) {
	    var last = session.lastInterval || input,
	        deltaTime = input.timeStamp - last.timeStamp,
	        velocity, velocityX, velocityY, direction;

	    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
	        var deltaX = input.deltaX - last.deltaX;
	        var deltaY = input.deltaY - last.deltaY;

	        var v = getVelocity(deltaTime, deltaX, deltaY);
	        velocityX = v.x;
	        velocityY = v.y;
	        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
	        direction = getDirection(deltaX, deltaY);

	        session.lastInterval = input;
	    } else {
	        // use latest velocity info if it doesn't overtake a minimum period
	        velocity = last.velocity;
	        velocityX = last.velocityX;
	        velocityY = last.velocityY;
	        direction = last.direction;
	    }

	    input.velocity = velocity;
	    input.velocityX = velocityX;
	    input.velocityY = velocityY;
	    input.direction = direction;
	}

	/**
	 * create a simple clone from the input used for storage of firstInput and firstMultiple
	 * @param {Object} input
	 * @returns {Object} clonedInputData
	 */
	function simpleCloneInputData(input) {
	    // make a simple copy of the pointers because we will get a reference if we don't
	    // we only need clientXY for the calculations
	    var pointers = [];
	    var i = 0;
	    while (i < input.pointers.length) {
	        pointers[i] = {
	            clientX: round(input.pointers[i].clientX),
	            clientY: round(input.pointers[i].clientY)
	        };
	        i++;
	    }

	    return {
	        timeStamp: now(),
	        pointers: pointers,
	        center: getCenter(pointers),
	        deltaX: input.deltaX,
	        deltaY: input.deltaY
	    };
	}

	/**
	 * get the center of all the pointers
	 * @param {Array} pointers
	 * @return {Object} center contains `x` and `y` properties
	 */
	function getCenter(pointers) {
	    var pointersLength = pointers.length;

	    // no need to loop when only one touch
	    if (pointersLength === 1) {
	        return {
	            x: round(pointers[0].clientX),
	            y: round(pointers[0].clientY)
	        };
	    }

	    var x = 0, y = 0, i = 0;
	    while (i < pointersLength) {
	        x += pointers[i].clientX;
	        y += pointers[i].clientY;
	        i++;
	    }

	    return {
	        x: round(x / pointersLength),
	        y: round(y / pointersLength)
	    };
	}

	/**
	 * calculate the velocity between two points. unit is in px per ms.
	 * @param {Number} deltaTime
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Object} velocity `x` and `y`
	 */
	function getVelocity(deltaTime, x, y) {
	    return {
	        x: x / deltaTime || 0,
	        y: y / deltaTime || 0
	    };
	}

	/**
	 * get the direction between two points
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Number} direction
	 */
	function getDirection(x, y) {
	    if (x === y) {
	        return DIRECTION_NONE;
	    }

	    if (abs(x) >= abs(y)) {
	        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
	    }
	    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
	}

	/**
	 * calculate the absolute distance between two points
	 * @param {Object} p1 {x, y}
	 * @param {Object} p2 {x, y}
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} distance
	 */
	function getDistance(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];

	    return Math.sqrt((x * x) + (y * y));
	}

	/**
	 * calculate the angle between two coordinates
	 * @param {Object} p1
	 * @param {Object} p2
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} angle
	 */
	function getAngle(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];
	    return Math.atan2(y, x) * 180 / Math.PI;
	}

	/**
	 * calculate the rotation degrees between two pointersets
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} rotation
	 */
	function getRotation(start, end) {
	    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
	}

	/**
	 * calculate the scale factor between two pointersets
	 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} scale
	 */
	function getScale(start, end) {
	    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
	}

	var MOUSE_INPUT_MAP = {
	    mousedown: INPUT_START,
	    mousemove: INPUT_MOVE,
	    mouseup: INPUT_END
	};

	var MOUSE_ELEMENT_EVENTS = 'mousedown';
	var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

	/**
	 * Mouse events input
	 * @constructor
	 * @extends Input
	 */
	function MouseInput() {
	    this.evEl = MOUSE_ELEMENT_EVENTS;
	    this.evWin = MOUSE_WINDOW_EVENTS;

	    this.pressed = false; // mousedown state

	    Input.apply(this, arguments);
	}

	inherit(MouseInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function MEhandler(ev) {
	        var eventType = MOUSE_INPUT_MAP[ev.type];

	        // on start we want to have the left mouse button down
	        if (eventType & INPUT_START && ev.button === 0) {
	            this.pressed = true;
	        }

	        if (eventType & INPUT_MOVE && ev.which !== 1) {
	            eventType = INPUT_END;
	        }

	        // mouse must be down
	        if (!this.pressed) {
	            return;
	        }

	        if (eventType & INPUT_END) {
	            this.pressed = false;
	        }

	        this.callback(this.manager, eventType, {
	            pointers: [ev],
	            changedPointers: [ev],
	            pointerType: INPUT_TYPE_MOUSE,
	            srcEvent: ev
	        });
	    }
	});

	var POINTER_INPUT_MAP = {
	    pointerdown: INPUT_START,
	    pointermove: INPUT_MOVE,
	    pointerup: INPUT_END,
	    pointercancel: INPUT_CANCEL,
	    pointerout: INPUT_CANCEL
	};

	// in IE10 the pointer types is defined as an enum
	var IE10_POINTER_TYPE_ENUM = {
	    2: INPUT_TYPE_TOUCH,
	    3: INPUT_TYPE_PEN,
	    4: INPUT_TYPE_MOUSE,
	    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
	};

	var POINTER_ELEMENT_EVENTS = 'pointerdown';
	var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

	// IE10 has prefixed support, and case-sensitive
	if (window.MSPointerEvent && !window.PointerEvent) {
	    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
	    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
	}

	/**
	 * Pointer events input
	 * @constructor
	 * @extends Input
	 */
	function PointerEventInput() {
	    this.evEl = POINTER_ELEMENT_EVENTS;
	    this.evWin = POINTER_WINDOW_EVENTS;

	    Input.apply(this, arguments);

	    this.store = (this.manager.session.pointerEvents = []);
	}

	inherit(PointerEventInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function PEhandler(ev) {
	        var store = this.store;
	        var removePointer = false;

	        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
	        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
	        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

	        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

	        // get index of the event in the store
	        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

	        // start and mouse must be down
	        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
	            if (storeIndex < 0) {
	                store.push(ev);
	                storeIndex = store.length - 1;
	            }
	        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	            removePointer = true;
	        }

	        // it not found, so the pointer hasn't been down (so it's probably a hover)
	        if (storeIndex < 0) {
	            return;
	        }

	        // update the event in the store
	        store[storeIndex] = ev;

	        this.callback(this.manager, eventType, {
	            pointers: store,
	            changedPointers: [ev],
	            pointerType: pointerType,
	            srcEvent: ev
	        });

	        if (removePointer) {
	            // remove from the store
	            store.splice(storeIndex, 1);
	        }
	    }
	});

	var SINGLE_TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};

	var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
	var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

	/**
	 * Touch events input
	 * @constructor
	 * @extends Input
	 */
	function SingleTouchInput() {
	    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
	    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
	    this.started = false;

	    Input.apply(this, arguments);
	}

	inherit(SingleTouchInput, Input, {
	    handler: function TEhandler(ev) {
	        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

	        // should we handle the touch events?
	        if (type === INPUT_START) {
	            this.started = true;
	        }

	        if (!this.started) {
	            return;
	        }

	        var touches = normalizeSingleTouches.call(this, ev, type);

	        // when done, reset the started state
	        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
	            this.started = false;
	        }

	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});

	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function normalizeSingleTouches(ev, type) {
	    var all = toArray(ev.touches);
	    var changed = toArray(ev.changedTouches);

	    if (type & (INPUT_END | INPUT_CANCEL)) {
	        all = uniqueArray(all.concat(changed), 'identifier', true);
	    }

	    return [all, changed];
	}

	var TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};

	var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

	/**
	 * Multi-user touch events input
	 * @constructor
	 * @extends Input
	 */
	function TouchInput() {
	    this.evTarget = TOUCH_TARGET_EVENTS;
	    this.targetIds = {};

	    Input.apply(this, arguments);
	}

	inherit(TouchInput, Input, {
	    handler: function MTEhandler(ev) {
	        var type = TOUCH_INPUT_MAP[ev.type];
	        var touches = getTouches.call(this, ev, type);
	        if (!touches) {
	            return;
	        }

	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});

	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function getTouches(ev, type) {
	    var allTouches = toArray(ev.touches);
	    var targetIds = this.targetIds;

	    // when there is only one touch, the process can be simplified
	    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
	        targetIds[allTouches[0].identifier] = true;
	        return [allTouches, allTouches];
	    }

	    var i,
	        targetTouches,
	        changedTouches = toArray(ev.changedTouches),
	        changedTargetTouches = [],
	        target = this.target;

	    // get target touches from touches
	    targetTouches = allTouches.filter(function(touch) {
	        return hasParent(touch.target, target);
	    });

	    // collect touches
	    if (type === INPUT_START) {
	        i = 0;
	        while (i < targetTouches.length) {
	            targetIds[targetTouches[i].identifier] = true;
	            i++;
	        }
	    }

	    // filter changed touches to only contain touches that exist in the collected target ids
	    i = 0;
	    while (i < changedTouches.length) {
	        if (targetIds[changedTouches[i].identifier]) {
	            changedTargetTouches.push(changedTouches[i]);
	        }

	        // cleanup removed touches
	        if (type & (INPUT_END | INPUT_CANCEL)) {
	            delete targetIds[changedTouches[i].identifier];
	        }
	        i++;
	    }

	    if (!changedTargetTouches.length) {
	        return;
	    }

	    return [
	        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
	        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
	        changedTargetTouches
	    ];
	}

	/**
	 * Combined touch and mouse input
	 *
	 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
	 * This because touch devices also emit mouse events while doing a touch.
	 *
	 * @constructor
	 * @extends Input
	 */

	var DEDUP_TIMEOUT = 2500;
	var DEDUP_DISTANCE = 25;

	function TouchMouseInput() {
	    Input.apply(this, arguments);

	    var handler = bindFn(this.handler, this);
	    this.touch = new TouchInput(this.manager, handler);
	    this.mouse = new MouseInput(this.manager, handler);

	    this.primaryTouch = null;
	    this.lastTouches = [];
	}

	inherit(TouchMouseInput, Input, {
	    /**
	     * handle mouse and touch events
	     * @param {Hammer} manager
	     * @param {String} inputEvent
	     * @param {Object} inputData
	     */
	    handler: function TMEhandler(manager, inputEvent, inputData) {
	        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
	            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

	        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
	            return;
	        }

	        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
	        if (isTouch) {
	            recordTouches.call(this, inputEvent, inputData);
	        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
	            return;
	        }

	        this.callback(manager, inputEvent, inputData);
	    },

	    /**
	     * remove the event listeners
	     */
	    destroy: function destroy() {
	        this.touch.destroy();
	        this.mouse.destroy();
	    }
	});

	function recordTouches(eventType, eventData) {
	    if (eventType & INPUT_START) {
	        this.primaryTouch = eventData.changedPointers[0].identifier;
	        setLastTouch.call(this, eventData);
	    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	        setLastTouch.call(this, eventData);
	    }
	}

	function setLastTouch(eventData) {
	    var touch = eventData.changedPointers[0];

	    if (touch.identifier === this.primaryTouch) {
	        var lastTouch = {x: touch.clientX, y: touch.clientY};
	        this.lastTouches.push(lastTouch);
	        var lts = this.lastTouches;
	        var removeLastTouch = function() {
	            var i = lts.indexOf(lastTouch);
	            if (i > -1) {
	                lts.splice(i, 1);
	            }
	        };
	        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
	    }
	}

	function isSyntheticEvent(eventData) {
	    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
	    for (var i = 0; i < this.lastTouches.length; i++) {
	        var t = this.lastTouches[i];
	        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
	        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
	            return true;
	        }
	    }
	    return false;
	}

	var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
	var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

	// magical touchAction value
	var TOUCH_ACTION_COMPUTE = 'compute';
	var TOUCH_ACTION_AUTO = 'auto';
	var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
	var TOUCH_ACTION_NONE = 'none';
	var TOUCH_ACTION_PAN_X = 'pan-x';
	var TOUCH_ACTION_PAN_Y = 'pan-y';
	var TOUCH_ACTION_MAP = getTouchActionProps();

	/**
	 * Touch Action
	 * sets the touchAction property or uses the js alternative
	 * @param {Manager} manager
	 * @param {String} value
	 * @constructor
	 */
	function TouchAction(manager, value) {
	    this.manager = manager;
	    this.set(value);
	}

	TouchAction.prototype = {
	    /**
	     * set the touchAction value on the element or enable the polyfill
	     * @param {String} value
	     */
	    set: function(value) {
	        // find out the touch-action by the event handlers
	        if (value == TOUCH_ACTION_COMPUTE) {
	            value = this.compute();
	        }

	        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
	            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
	        }
	        this.actions = value.toLowerCase().trim();
	    },

	    /**
	     * just re-set the touchAction value
	     */
	    update: function() {
	        this.set(this.manager.options.touchAction);
	    },

	    /**
	     * compute the value for the touchAction property based on the recognizer's settings
	     * @returns {String} value
	     */
	    compute: function() {
	        var actions = [];
	        each(this.manager.recognizers, function(recognizer) {
	            if (boolOrFn(recognizer.options.enable, [recognizer])) {
	                actions = actions.concat(recognizer.getTouchAction());
	            }
	        });
	        return cleanTouchActions(actions.join(' '));
	    },

	    /**
	     * this method is called on each input cycle and provides the preventing of the browser behavior
	     * @param {Object} input
	     */
	    preventDefaults: function(input) {
	        var srcEvent = input.srcEvent;
	        var direction = input.offsetDirection;

	        // if the touch action did prevented once this session
	        if (this.manager.session.prevented) {
	            srcEvent.preventDefault();
	            return;
	        }

	        var actions = this.actions;
	        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
	        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
	        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

	        if (hasNone) {
	            //do not prevent defaults if this is a tap gesture

	            var isTapPointer = input.pointers.length === 1;
	            var isTapMovement = input.distance < 2;
	            var isTapTouchTime = input.deltaTime < 250;

	            if (isTapPointer && isTapMovement && isTapTouchTime) {
	                return;
	            }
	        }

	        if (hasPanX && hasPanY) {
	            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
	            return;
	        }

	        if (hasNone ||
	            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
	            (hasPanX && direction & DIRECTION_VERTICAL)) {
	            return this.preventSrc(srcEvent);
	        }
	    },

	    /**
	     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
	     * @param {Object} srcEvent
	     */
	    preventSrc: function(srcEvent) {
	        this.manager.session.prevented = true;
	        srcEvent.preventDefault();
	    }
	};

	/**
	 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
	 * @param {String} actions
	 * @returns {*}
	 */
	function cleanTouchActions(actions) {
	    // none
	    if (inStr(actions, TOUCH_ACTION_NONE)) {
	        return TOUCH_ACTION_NONE;
	    }

	    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
	    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

	    // if both pan-x and pan-y are set (different recognizers
	    // for different directions, e.g. horizontal pan but vertical swipe?)
	    // we need none (as otherwise with pan-x pan-y combined none of these
	    // recognizers will work, since the browser would handle all panning
	    if (hasPanX && hasPanY) {
	        return TOUCH_ACTION_NONE;
	    }

	    // pan-x OR pan-y
	    if (hasPanX || hasPanY) {
	        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
	    }

	    // manipulation
	    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
	        return TOUCH_ACTION_MANIPULATION;
	    }

	    return TOUCH_ACTION_AUTO;
	}

	function getTouchActionProps() {
	    if (!NATIVE_TOUCH_ACTION) {
	        return false;
	    }
	    var touchMap = {};
	    var cssSupports = window.CSS && window.CSS.supports;
	    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

	        // If css.supports is not supported but there is native touch-action assume it supports
	        // all values. This is the case for IE 10 and 11.
	        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
	    });
	    return touchMap;
	}

	/**
	 * Recognizer flow explained; *
	 * All recognizers have the initial state of POSSIBLE when a input session starts.
	 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
	 * Example session for mouse-input: mousedown -> mousemove -> mouseup
	 *
	 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
	 * which determines with state it should be.
	 *
	 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
	 * POSSIBLE to give it another change on the next cycle.
	 *
	 *               Possible
	 *                  |
	 *            +-----+---------------+
	 *            |                     |
	 *      +-----+-----+               |
	 *      |           |               |
	 *   Failed      Cancelled          |
	 *                          +-------+------+
	 *                          |              |
	 *                      Recognized       Began
	 *                                         |
	 *                                      Changed
	 *                                         |
	 *                                  Ended/Recognized
	 */
	var STATE_POSSIBLE = 1;
	var STATE_BEGAN = 2;
	var STATE_CHANGED = 4;
	var STATE_ENDED = 8;
	var STATE_RECOGNIZED = STATE_ENDED;
	var STATE_CANCELLED = 16;
	var STATE_FAILED = 32;

	/**
	 * Recognizer
	 * Every recognizer needs to extend from this class.
	 * @constructor
	 * @param {Object} options
	 */
	function Recognizer(options) {
	    this.options = assign({}, this.defaults, options || {});

	    this.id = uniqueId();

	    this.manager = null;

	    // default is enable true
	    this.options.enable = ifUndefined(this.options.enable, true);

	    this.state = STATE_POSSIBLE;

	    this.simultaneous = {};
	    this.requireFail = [];
	}

	Recognizer.prototype = {
	    /**
	     * @virtual
	     * @type {Object}
	     */
	    defaults: {},

	    /**
	     * set options
	     * @param {Object} options
	     * @return {Recognizer}
	     */
	    set: function(options) {
	        assign(this.options, options);

	        // also update the touchAction, in case something changed about the directions/enabled state
	        this.manager && this.manager.touchAction.update();
	        return this;
	    },

	    /**
	     * recognize simultaneous with an other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    recognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
	            return this;
	        }

	        var simultaneous = this.simultaneous;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (!simultaneous[otherRecognizer.id]) {
	            simultaneous[otherRecognizer.id] = otherRecognizer;
	            otherRecognizer.recognizeWith(this);
	        }
	        return this;
	    },

	    /**
	     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRecognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
	            return this;
	        }

	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        delete this.simultaneous[otherRecognizer.id];
	        return this;
	    },

	    /**
	     * recognizer can only run when an other is failing
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    requireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
	            return this;
	        }

	        var requireFail = this.requireFail;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (inArray(requireFail, otherRecognizer) === -1) {
	            requireFail.push(otherRecognizer);
	            otherRecognizer.requireFailure(this);
	        }
	        return this;
	    },

	    /**
	     * drop the requireFailure link. it does not remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRequireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
	            return this;
	        }

	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        var index = inArray(this.requireFail, otherRecognizer);
	        if (index > -1) {
	            this.requireFail.splice(index, 1);
	        }
	        return this;
	    },

	    /**
	     * has require failures boolean
	     * @returns {boolean}
	     */
	    hasRequireFailures: function() {
	        return this.requireFail.length > 0;
	    },

	    /**
	     * if the recognizer can recognize simultaneous with an other recognizer
	     * @param {Recognizer} otherRecognizer
	     * @returns {Boolean}
	     */
	    canRecognizeWith: function(otherRecognizer) {
	        return !!this.simultaneous[otherRecognizer.id];
	    },

	    /**
	     * You should use `tryEmit` instead of `emit` directly to check
	     * that all the needed recognizers has failed before emitting.
	     * @param {Object} input
	     */
	    emit: function(input) {
	        var self = this;
	        var state = this.state;

	        function emit(event) {
	            self.manager.emit(event, input);
	        }

	        // 'panstart' and 'panmove'
	        if (state < STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }

	        emit(self.options.event); // simple 'eventName' events

	        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
	            emit(input.additionalEvent);
	        }

	        // panend and pancancel
	        if (state >= STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }
	    },

	    /**
	     * Check that all the require failure recognizers has failed,
	     * if true, it emits a gesture event,
	     * otherwise, setup the state to FAILED.
	     * @param {Object} input
	     */
	    tryEmit: function(input) {
	        if (this.canEmit()) {
	            return this.emit(input);
	        }
	        // it's failing anyway
	        this.state = STATE_FAILED;
	    },

	    /**
	     * can we emit?
	     * @returns {boolean}
	     */
	    canEmit: function() {
	        var i = 0;
	        while (i < this.requireFail.length) {
	            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
	                return false;
	            }
	            i++;
	        }
	        return true;
	    },

	    /**
	     * update the recognizer
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        // make a new copy of the inputData
	        // so we can change the inputData without messing up the other recognizers
	        var inputDataClone = assign({}, inputData);

	        // is is enabled and allow recognizing?
	        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
	            this.reset();
	            this.state = STATE_FAILED;
	            return;
	        }

	        // reset when we've reached the end
	        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
	            this.state = STATE_POSSIBLE;
	        }

	        this.state = this.process(inputDataClone);

	        // the recognizer has recognized a gesture
	        // so trigger an event
	        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
	            this.tryEmit(inputDataClone);
	        }
	    },

	    /**
	     * return the state of the recognizer
	     * the actual recognizing happens in this method
	     * @virtual
	     * @param {Object} inputData
	     * @returns {Const} STATE
	     */
	    process: function(inputData) { }, // jshint ignore:line

	    /**
	     * return the preferred touch-action
	     * @virtual
	     * @returns {Array}
	     */
	    getTouchAction: function() { },

	    /**
	     * called when the gesture isn't allowed to recognize
	     * like when another is being recognized or it is disabled
	     * @virtual
	     */
	    reset: function() { }
	};

	/**
	 * get a usable string, used as event postfix
	 * @param {Const} state
	 * @returns {String} state
	 */
	function stateStr(state) {
	    if (state & STATE_CANCELLED) {
	        return 'cancel';
	    } else if (state & STATE_ENDED) {
	        return 'end';
	    } else if (state & STATE_CHANGED) {
	        return 'move';
	    } else if (state & STATE_BEGAN) {
	        return 'start';
	    }
	    return '';
	}

	/**
	 * direction cons to string
	 * @param {Const} direction
	 * @returns {String}
	 */
	function directionStr(direction) {
	    if (direction == DIRECTION_DOWN) {
	        return 'down';
	    } else if (direction == DIRECTION_UP) {
	        return 'up';
	    } else if (direction == DIRECTION_LEFT) {
	        return 'left';
	    } else if (direction == DIRECTION_RIGHT) {
	        return 'right';
	    }
	    return '';
	}

	/**
	 * get a recognizer by name if it is bound to a manager
	 * @param {Recognizer|String} otherRecognizer
	 * @param {Recognizer} recognizer
	 * @returns {Recognizer}
	 */
	function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
	    var manager = recognizer.manager;
	    if (manager) {
	        return manager.get(otherRecognizer);
	    }
	    return otherRecognizer;
	}

	/**
	 * This recognizer is just used as a base for the simple attribute recognizers.
	 * @constructor
	 * @extends Recognizer
	 */
	function AttrRecognizer() {
	    Recognizer.apply(this, arguments);
	}

	inherit(AttrRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof AttrRecognizer
	     */
	    defaults: {
	        /**
	         * @type {Number}
	         * @default 1
	         */
	        pointers: 1
	    },

	    /**
	     * Used to check if it the recognizer receives valid input, like input.distance > 10.
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {Boolean} recognized
	     */
	    attrTest: function(input) {
	        var optionPointers = this.options.pointers;
	        return optionPointers === 0 || input.pointers.length === optionPointers;
	    },

	    /**
	     * Process the input and return the state for the recognizer
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {*} State
	     */
	    process: function(input) {
	        var state = this.state;
	        var eventType = input.eventType;

	        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
	        var isValid = this.attrTest(input);

	        // on cancel input and we've recognized before, return STATE_CANCELLED
	        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
	            return state | STATE_CANCELLED;
	        } else if (isRecognized || isValid) {
	            if (eventType & INPUT_END) {
	                return state | STATE_ENDED;
	            } else if (!(state & STATE_BEGAN)) {
	                return STATE_BEGAN;
	            }
	            return state | STATE_CHANGED;
	        }
	        return STATE_FAILED;
	    }
	});

	/**
	 * Pan
	 * Recognized when the pointer is down and moved in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PanRecognizer() {
	    AttrRecognizer.apply(this, arguments);

	    this.pX = null;
	    this.pY = null;
	}

	inherit(PanRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PanRecognizer
	     */
	    defaults: {
	        event: 'pan',
	        threshold: 10,
	        pointers: 1,
	        direction: DIRECTION_ALL
	    },

	    getTouchAction: function() {
	        var direction = this.options.direction;
	        var actions = [];
	        if (direction & DIRECTION_HORIZONTAL) {
	            actions.push(TOUCH_ACTION_PAN_Y);
	        }
	        if (direction & DIRECTION_VERTICAL) {
	            actions.push(TOUCH_ACTION_PAN_X);
	        }
	        return actions;
	    },

	    directionTest: function(input) {
	        var options = this.options;
	        var hasMoved = true;
	        var distance = input.distance;
	        var direction = input.direction;
	        var x = input.deltaX;
	        var y = input.deltaY;

	        // lock to axis?
	        if (!(direction & options.direction)) {
	            if (options.direction & DIRECTION_HORIZONTAL) {
	                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
	                hasMoved = x != this.pX;
	                distance = Math.abs(input.deltaX);
	            } else {
	                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
	                hasMoved = y != this.pY;
	                distance = Math.abs(input.deltaY);
	            }
	        }
	        input.direction = direction;
	        return hasMoved && distance > options.threshold && direction & options.direction;
	    },

	    attrTest: function(input) {
	        return AttrRecognizer.prototype.attrTest.call(this, input) &&
	            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
	    },

	    emit: function(input) {

	        this.pX = input.deltaX;
	        this.pY = input.deltaY;

	        var direction = directionStr(input.direction);

	        if (direction) {
	            input.additionalEvent = this.options.event + direction;
	        }
	        this._super.emit.call(this, input);
	    }
	});

	/**
	 * Pinch
	 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PinchRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}

	inherit(PinchRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'pinch',
	        threshold: 0,
	        pointers: 2
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },

	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
	    },

	    emit: function(input) {
	        if (input.scale !== 1) {
	            var inOut = input.scale < 1 ? 'in' : 'out';
	            input.additionalEvent = this.options.event + inOut;
	        }
	        this._super.emit.call(this, input);
	    }
	});

	/**
	 * Press
	 * Recognized when the pointer is down for x ms without any movement.
	 * @constructor
	 * @extends Recognizer
	 */
	function PressRecognizer() {
	    Recognizer.apply(this, arguments);

	    this._timer = null;
	    this._input = null;
	}

	inherit(PressRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PressRecognizer
	     */
	    defaults: {
	        event: 'press',
	        pointers: 1,
	        time: 251, // minimal time of the pointer to be pressed
	        threshold: 9 // a minimal movement is ok, but keep it low
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_AUTO];
	    },

	    process: function(input) {
	        var options = this.options;
	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTime = input.deltaTime > options.time;

	        this._input = input;

	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
	            this.reset();
	        } else if (input.eventType & INPUT_START) {
	            this.reset();
	            this._timer = setTimeoutContext(function() {
	                this.state = STATE_RECOGNIZED;
	                this.tryEmit();
	            }, options.time, this);
	        } else if (input.eventType & INPUT_END) {
	            return STATE_RECOGNIZED;
	        }
	        return STATE_FAILED;
	    },

	    reset: function() {
	        clearTimeout(this._timer);
	    },

	    emit: function(input) {
	        if (this.state !== STATE_RECOGNIZED) {
	            return;
	        }

	        if (input && (input.eventType & INPUT_END)) {
	            this.manager.emit(this.options.event + 'up', input);
	        } else {
	            this._input.timeStamp = now();
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});

	/**
	 * Rotate
	 * Recognized when two or more pointer are moving in a circular motion.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function RotateRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}

	inherit(RotateRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof RotateRecognizer
	     */
	    defaults: {
	        event: 'rotate',
	        threshold: 0,
	        pointers: 2
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },

	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
	    }
	});

	/**
	 * Swipe
	 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function SwipeRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}

	inherit(SwipeRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof SwipeRecognizer
	     */
	    defaults: {
	        event: 'swipe',
	        threshold: 10,
	        velocity: 0.3,
	        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
	        pointers: 1
	    },

	    getTouchAction: function() {
	        return PanRecognizer.prototype.getTouchAction.call(this);
	    },

	    attrTest: function(input) {
	        var direction = this.options.direction;
	        var velocity;

	        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
	            velocity = input.overallVelocity;
	        } else if (direction & DIRECTION_HORIZONTAL) {
	            velocity = input.overallVelocityX;
	        } else if (direction & DIRECTION_VERTICAL) {
	            velocity = input.overallVelocityY;
	        }

	        return this._super.attrTest.call(this, input) &&
	            direction & input.offsetDirection &&
	            input.distance > this.options.threshold &&
	            input.maxPointers == this.options.pointers &&
	            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
	    },

	    emit: function(input) {
	        var direction = directionStr(input.offsetDirection);
	        if (direction) {
	            this.manager.emit(this.options.event + direction, input);
	        }

	        this.manager.emit(this.options.event, input);
	    }
	});

	/**
	 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
	 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
	 * a single tap.
	 *
	 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
	 * multi-taps being recognized.
	 * @constructor
	 * @extends Recognizer
	 */
	function TapRecognizer() {
	    Recognizer.apply(this, arguments);

	    // previous time and center,
	    // used for tap counting
	    this.pTime = false;
	    this.pCenter = false;

	    this._timer = null;
	    this._input = null;
	    this.count = 0;
	}

	inherit(TapRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'tap',
	        pointers: 1,
	        taps: 1,
	        interval: 300, // max time between the multi-tap taps
	        time: 250, // max time of the pointer to be down (like finger on the screen)
	        threshold: 9, // a minimal movement is ok, but keep it low
	        posThreshold: 10 // a multi-tap can be a bit off the initial position
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_MANIPULATION];
	    },

	    process: function(input) {
	        var options = this.options;

	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTouchTime = input.deltaTime < options.time;

	        this.reset();

	        if ((input.eventType & INPUT_START) && (this.count === 0)) {
	            return this.failTimeout();
	        }

	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (validMovement && validTouchTime && validPointers) {
	            if (input.eventType != INPUT_END) {
	                return this.failTimeout();
	            }

	            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
	            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

	            this.pTime = input.timeStamp;
	            this.pCenter = input.center;

	            if (!validMultiTap || !validInterval) {
	                this.count = 1;
	            } else {
	                this.count += 1;
	            }

	            this._input = input;

	            // if tap count matches we have recognized it,
	            // else it has began recognizing...
	            var tapCount = this.count % options.taps;
	            if (tapCount === 0) {
	                // no failing requirements, immediately trigger the tap event
	                // or wait as long as the multitap interval to trigger
	                if (!this.hasRequireFailures()) {
	                    return STATE_RECOGNIZED;
	                } else {
	                    this._timer = setTimeoutContext(function() {
	                        this.state = STATE_RECOGNIZED;
	                        this.tryEmit();
	                    }, options.interval, this);
	                    return STATE_BEGAN;
	                }
	            }
	        }
	        return STATE_FAILED;
	    },

	    failTimeout: function() {
	        this._timer = setTimeoutContext(function() {
	            this.state = STATE_FAILED;
	        }, this.options.interval, this);
	        return STATE_FAILED;
	    },

	    reset: function() {
	        clearTimeout(this._timer);
	    },

	    emit: function() {
	        if (this.state == STATE_RECOGNIZED) {
	            this._input.tapCount = this.count;
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});

	/**
	 * Simple way to create a manager with a default set of recognizers.
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Hammer(element, options) {
	    options = options || {};
	    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
	    return new Manager(element, options);
	}

	/**
	 * @const {string}
	 */
	Hammer.VERSION = '2.0.7';

	/**
	 * default settings
	 * @namespace
	 */
	Hammer.defaults = {
	    /**
	     * set if DOM events are being triggered.
	     * But this is slower and unused by simple implementations, so disabled by default.
	     * @type {Boolean}
	     * @default false
	     */
	    domEvents: false,

	    /**
	     * The value for the touchAction property/fallback.
	     * When set to `compute` it will magically set the correct value based on the added recognizers.
	     * @type {String}
	     * @default compute
	     */
	    touchAction: TOUCH_ACTION_COMPUTE,

	    /**
	     * @type {Boolean}
	     * @default true
	     */
	    enable: true,

	    /**
	     * EXPERIMENTAL FEATURE -- can be removed/changed
	     * Change the parent input target element.
	     * If Null, then it is being set the to main element.
	     * @type {Null|EventTarget}
	     * @default null
	     */
	    inputTarget: null,

	    /**
	     * force an input class
	     * @type {Null|Function}
	     * @default null
	     */
	    inputClass: null,

	    /**
	     * Default recognizer setup when calling `Hammer()`
	     * When creating a new Manager these will be skipped.
	     * @type {Array}
	     */
	    preset: [
	        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
	        [RotateRecognizer, {enable: false}],
	        [PinchRecognizer, {enable: false}, ['rotate']],
	        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
	        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
	        [TapRecognizer],
	        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
	        [PressRecognizer]
	    ],

	    /**
	     * Some CSS properties can be used to improve the working of Hammer.
	     * Add them to this method and they will be set when creating a new Manager.
	     * @namespace
	     */
	    cssProps: {
	        /**
	         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userSelect: 'none',

	        /**
	         * Disable the Windows Phone grippers when pressing an element.
	         * @type {String}
	         * @default 'none'
	         */
	        touchSelect: 'none',

	        /**
	         * Disables the default callout shown when you touch and hold a touch target.
	         * On iOS, when you touch and hold a touch target such as a link, Safari displays
	         * a callout containing information about the link. This property allows you to disable that callout.
	         * @type {String}
	         * @default 'none'
	         */
	        touchCallout: 'none',

	        /**
	         * Specifies whether zooming is enabled. Used by IE10>
	         * @type {String}
	         * @default 'none'
	         */
	        contentZooming: 'none',

	        /**
	         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userDrag: 'none',

	        /**
	         * Overrides the highlight color shown when the user taps a link or a JavaScript
	         * clickable element in iOS. This property obeys the alpha value, if specified.
	         * @type {String}
	         * @default 'rgba(0,0,0,0)'
	         */
	        tapHighlightColor: 'rgba(0,0,0,0)'
	    }
	};

	var STOP = 1;
	var FORCED_STOP = 2;

	/**
	 * Manager
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Manager(element, options) {
	    this.options = assign({}, Hammer.defaults, options || {});

	    this.options.inputTarget = this.options.inputTarget || element;

	    this.handlers = {};
	    this.session = {};
	    this.recognizers = [];
	    this.oldCssProps = {};

	    this.element = element;
	    this.input = createInputInstance(this);
	    this.touchAction = new TouchAction(this, this.options.touchAction);

	    toggleCssProps(this, true);

	    each(this.options.recognizers, function(item) {
	        var recognizer = this.add(new (item[0])(item[1]));
	        item[2] && recognizer.recognizeWith(item[2]);
	        item[3] && recognizer.requireFailure(item[3]);
	    }, this);
	}

	Manager.prototype = {
	    /**
	     * set options
	     * @param {Object} options
	     * @returns {Manager}
	     */
	    set: function(options) {
	        assign(this.options, options);

	        // Options that need a little more setup
	        if (options.touchAction) {
	            this.touchAction.update();
	        }
	        if (options.inputTarget) {
	            // Clean up existing event listeners and reinitialize
	            this.input.destroy();
	            this.input.target = options.inputTarget;
	            this.input.init();
	        }
	        return this;
	    },

	    /**
	     * stop recognizing for this session.
	     * This session will be discarded, when a new [input]start event is fired.
	     * When forced, the recognizer cycle is stopped immediately.
	     * @param {Boolean} [force]
	     */
	    stop: function(force) {
	        this.session.stopped = force ? FORCED_STOP : STOP;
	    },

	    /**
	     * run the recognizers!
	     * called by the inputHandler function on every movement of the pointers (touches)
	     * it walks through all the recognizers and tries to detect the gesture that is being made
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        var session = this.session;
	        if (session.stopped) {
	            return;
	        }

	        // run the touch-action polyfill
	        this.touchAction.preventDefaults(inputData);

	        var recognizer;
	        var recognizers = this.recognizers;

	        // this holds the recognizer that is being recognized.
	        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
	        // if no recognizer is detecting a thing, it is set to `null`
	        var curRecognizer = session.curRecognizer;

	        // reset when the last recognizer is recognized
	        // or when we're in a new session
	        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
	            curRecognizer = session.curRecognizer = null;
	        }

	        var i = 0;
	        while (i < recognizers.length) {
	            recognizer = recognizers[i];

	            // find out if we are allowed try to recognize the input for this one.
	            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
	            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
	            //      that is being recognized.
	            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
	            //      this can be setup with the `recognizeWith()` method on the recognizer.
	            if (session.stopped !== FORCED_STOP && ( // 1
	                    !curRecognizer || recognizer == curRecognizer || // 2
	                    recognizer.canRecognizeWith(curRecognizer))) { // 3
	                recognizer.recognize(inputData);
	            } else {
	                recognizer.reset();
	            }

	            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
	            // current active recognizer. but only if we don't already have an active recognizer
	            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
	                curRecognizer = session.curRecognizer = recognizer;
	            }
	            i++;
	        }
	    },

	    /**
	     * get a recognizer by its event name.
	     * @param {Recognizer|String} recognizer
	     * @returns {Recognizer|Null}
	     */
	    get: function(recognizer) {
	        if (recognizer instanceof Recognizer) {
	            return recognizer;
	        }

	        var recognizers = this.recognizers;
	        for (var i = 0; i < recognizers.length; i++) {
	            if (recognizers[i].options.event == recognizer) {
	                return recognizers[i];
	            }
	        }
	        return null;
	    },

	    /**
	     * add a recognizer to the manager
	     * existing recognizers with the same event name will be removed
	     * @param {Recognizer} recognizer
	     * @returns {Recognizer|Manager}
	     */
	    add: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'add', this)) {
	            return this;
	        }

	        // remove existing
	        var existing = this.get(recognizer.options.event);
	        if (existing) {
	            this.remove(existing);
	        }

	        this.recognizers.push(recognizer);
	        recognizer.manager = this;

	        this.touchAction.update();
	        return recognizer;
	    },

	    /**
	     * remove a recognizer by name or instance
	     * @param {Recognizer|String} recognizer
	     * @returns {Manager}
	     */
	    remove: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'remove', this)) {
	            return this;
	        }

	        recognizer = this.get(recognizer);

	        // let's make sure this recognizer exists
	        if (recognizer) {
	            var recognizers = this.recognizers;
	            var index = inArray(recognizers, recognizer);

	            if (index !== -1) {
	                recognizers.splice(index, 1);
	                this.touchAction.update();
	            }
	        }

	        return this;
	    },

	    /**
	     * bind event
	     * @param {String} events
	     * @param {Function} handler
	     * @returns {EventEmitter} this
	     */
	    on: function(events, handler) {
	        if (events === undefined) {
	            return;
	        }
	        if (handler === undefined) {
	            return;
	        }

	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            handlers[event] = handlers[event] || [];
	            handlers[event].push(handler);
	        });
	        return this;
	    },

	    /**
	     * unbind event, leave emit blank to remove all handlers
	     * @param {String} events
	     * @param {Function} [handler]
	     * @returns {EventEmitter} this
	     */
	    off: function(events, handler) {
	        if (events === undefined) {
	            return;
	        }

	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            if (!handler) {
	                delete handlers[event];
	            } else {
	                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
	            }
	        });
	        return this;
	    },

	    /**
	     * emit event to the listeners
	     * @param {String} event
	     * @param {Object} data
	     */
	    emit: function(event, data) {
	        // we also want to trigger dom events
	        if (this.options.domEvents) {
	            triggerDomEvent(event, data);
	        }

	        // no handlers, so skip it all
	        var handlers = this.handlers[event] && this.handlers[event].slice();
	        if (!handlers || !handlers.length) {
	            return;
	        }

	        data.type = event;
	        data.preventDefault = function() {
	            data.srcEvent.preventDefault();
	        };

	        var i = 0;
	        while (i < handlers.length) {
	            handlers[i](data);
	            i++;
	        }
	    },

	    /**
	     * destroy the manager and unbinds all events
	     * it doesn't unbind dom events, that is the user own responsibility
	     */
	    destroy: function() {
	        this.element && toggleCssProps(this, false);

	        this.handlers = {};
	        this.session = {};
	        this.input.destroy();
	        this.element = null;
	    }
	};

	/**
	 * add/remove the css properties as defined in manager.options.cssProps
	 * @param {Manager} manager
	 * @param {Boolean} add
	 */
	function toggleCssProps(manager, add) {
	    var element = manager.element;
	    if (!element.style) {
	        return;
	    }
	    var prop;
	    each(manager.options.cssProps, function(value, name) {
	        prop = prefixed(element.style, name);
	        if (add) {
	            manager.oldCssProps[prop] = element.style[prop];
	            element.style[prop] = value;
	        } else {
	            element.style[prop] = manager.oldCssProps[prop] || '';
	        }
	    });
	    if (!add) {
	        manager.oldCssProps = {};
	    }
	}

	/**
	 * trigger dom event
	 * @param {String} event
	 * @param {Object} data
	 */
	function triggerDomEvent(event, data) {
	    var gestureEvent = document.createEvent('Event');
	    gestureEvent.initEvent(event, true, true);
	    gestureEvent.gesture = data;
	    data.target.dispatchEvent(gestureEvent);
	}

	assign(Hammer, {
	    INPUT_START: INPUT_START,
	    INPUT_MOVE: INPUT_MOVE,
	    INPUT_END: INPUT_END,
	    INPUT_CANCEL: INPUT_CANCEL,

	    STATE_POSSIBLE: STATE_POSSIBLE,
	    STATE_BEGAN: STATE_BEGAN,
	    STATE_CHANGED: STATE_CHANGED,
	    STATE_ENDED: STATE_ENDED,
	    STATE_RECOGNIZED: STATE_RECOGNIZED,
	    STATE_CANCELLED: STATE_CANCELLED,
	    STATE_FAILED: STATE_FAILED,

	    DIRECTION_NONE: DIRECTION_NONE,
	    DIRECTION_LEFT: DIRECTION_LEFT,
	    DIRECTION_RIGHT: DIRECTION_RIGHT,
	    DIRECTION_UP: DIRECTION_UP,
	    DIRECTION_DOWN: DIRECTION_DOWN,
	    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
	    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
	    DIRECTION_ALL: DIRECTION_ALL,

	    Manager: Manager,
	    Input: Input,
	    TouchAction: TouchAction,

	    TouchInput: TouchInput,
	    MouseInput: MouseInput,
	    PointerEventInput: PointerEventInput,
	    TouchMouseInput: TouchMouseInput,
	    SingleTouchInput: SingleTouchInput,

	    Recognizer: Recognizer,
	    AttrRecognizer: AttrRecognizer,
	    Tap: TapRecognizer,
	    Pan: PanRecognizer,
	    Swipe: SwipeRecognizer,
	    Pinch: PinchRecognizer,
	    Rotate: RotateRecognizer,
	    Press: PressRecognizer,

	    on: addEventListeners,
	    off: removeEventListeners,
	    each: each,
	    merge: merge,
	    extend: extend,
	    assign: assign,
	    inherit: inherit,
	    bindFn: bindFn,
	    prefixed: prefixed
	});

	// this prevents errors when Hammer is loaded in the presence of an AMD
	//  style loader but by script tag, not by the loader.
	var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
	freeGlobal.Hammer = Hammer;

	if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return Hammer;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module != 'undefined' && module.exports) {
	    module.exports = Hammer;
	} else {
	    window[exportName] = Hammer;
	}

	})(window, document, 'Hammer');


/***/ })
/******/ ]);