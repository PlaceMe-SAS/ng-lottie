'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function webpackUniversalModuleDefinition(root, factory) {
	if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object') module.exports = factory(require("@angular/core"), require("@angular/common"));else if (typeof define === 'function' && define.amd) define(["@angular/core", "@angular/common"], factory);else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["LottieAnimationView"] = factory(require("@angular/core"), require("@angular/common"));else root["LottieAnimationView"] = factory(root["ng"]["core"], root["ng"]["common"]);
})(undefined, function (__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};
			/******/
			/******/ // The require function
			/******/function __webpack_require__(moduleId) {
				/******/
				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;
				/******/
				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/exports: {},
					/******/id: moduleId,
					/******/loaded: false
					/******/ };
				/******/
				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
				/******/
				/******/ // Flag the module as loaded
				/******/module.loaded = true;
				/******/
				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}
			/******/
			/******/
			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;
			/******/
			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;
			/******/
			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";
			/******/
			/******/ // Load entry module and return exports
			/******/return __webpack_require__(0);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			function __export(m) {
				for (var p in m) {
					if (!exports.hasOwnProperty(p)) exports[p] = m[p];
				}
			}
			__export(__webpack_require__(1));

			/***/
		},
		/* 1 */
		/***/function (module, exports, __webpack_require__) {

			"use strict";

			var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
				var c = arguments.length,
				    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
				    d;
				if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
					if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
				}return c > 3 && r && Object.defineProperty(target, key, r), r;
			};
			var core_1 = __webpack_require__(2);
			var common_1 = __webpack_require__(3);
			var lottieAnimationView_component_1 = __webpack_require__(!function webpackMissingModule() {
				var e = new Error("Cannot find module \"./lottieAnimationView.component\"");e.code = 'MODULE_NOT_FOUND';throw e;
			}());
			var LottieAnimationViewModule = LottieAnimationViewModule_1 = function () {
				function LottieAnimationViewModule() {
					_classCallCheck(this, LottieAnimationViewModule);
				}

				_createClass(LottieAnimationViewModule, null, [{
					key: 'forRoot',
					value: function forRoot() {
						return {
							ngModule: LottieAnimationViewModule_1
						};
					}
				}]);

				return LottieAnimationViewModule;
			}();
			LottieAnimationViewModule = LottieAnimationViewModule_1 = __decorate([core_1.NgModule({
				declarations: [lottieAnimationView_component_1.LottieAnimationViewComponent],
				imports: [common_1.CommonModule],
				exports: [lottieAnimationView_component_1.LottieAnimationViewComponent]
			})], LottieAnimationViewModule);
			exports.LottieAnimationViewModule = LottieAnimationViewModule;
			var LottieAnimationViewModule_1;

			/***/
		},
		/* 2 */
		/***/function (module, exports) {

			module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

			/***/
		},
		/* 3 */
		/***/function (module, exports) {

			module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

			/***/
		}]
		/******/)
	);
});
;
//# sourceMappingURL=LottieAnimationView.js.map