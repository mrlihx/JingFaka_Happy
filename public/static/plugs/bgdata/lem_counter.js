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

"use strict";
/*
 Version: 1.0.0
 Author: lemehovskiy
 Website: http://lemehovskiy.github.io
 Repo: https://github.com/lemehovskiy/lem_counter
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function ($) {
    var LemCounter = function () {
        function LemCounter(element, options) {
            _classCallCheck(this, LemCounter);

            var self = this;

            //extend by function call
            self.settings = $.extend(true, {
                value_from: 0,
                value_to: 0,
                locale: false,
                value_to_from_content: false,
                animate_duration: 2
            }, options);

            self.$element = $(element);

            self.to_fixed_digits = 0;

            //extend by data options
            self.data_options = self.$element.data('lem-counter');
            self.settings = $.extend(true, self.settings, self.data_options);

            //value to from content
            if (self.settings.value_to_from_content) {
                //check if number and remove commas
                if (!isNaN(self.$element.text().replace(/,/g, ''))) {
                    self.settings = $.extend(true, self.settings, {
                        value_to: Number(self.$element.text().replace(/,/g, ''))
                    });
                }
            }

            //set start value
            self.counter_helper = { val: self.settings.value_from };

            self.init();
        }

        _createClass(LemCounter, [{
            key: 'init',
            value: function init() {

                var self = this;

                var counter_to = self.settings.value_to;

                //check if number is float
                if (isFloat(counter_to)) {
                    var string_counter_val_to = counter_to.toString();

                    self.to_fixed_digits = string_counter_val_to.substr(string_counter_val_to.indexOf('.') + 1).length;
                }

                TweenLite.to(self.counter_helper, self.settings.animate_duration, {
                    val: counter_to,
                    onUpdate: updateHandler,
                    ease: Linear.easeNone,
                    onComplete: function onComplete() {
                        self.$element.trigger('onComplete.lc');
                    }
                });

                function isFloat(n) {
                    return Number(n) === n && n % 1 !== 0;
                }

                function updateHandler() {
                    var value = self.counter_helper.val;

                    var num = value.toFixed(self.to_fixed_digits);

                    var num_locale = 0;

                    if (self.to_fixed_digits == 0) {
                        num_locale = parseInt(num);
                    } else {
                        num_locale = parseFloat(num);
                    }

                    if (self.settings.locale) {
                        num_locale = num_locale.toLocaleString(self.settings.locale, { maximumFractionDigits: self.to_fixed_digits });
                    }

                    self.$element.text(num_locale);
                }
            }
        }]);

        return LemCounter;
    }();

    $.fn.lemCounter = function () {
        var $this = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            length = $this.length,
            i = void 0,
            ret = void 0;
        for (i = 0; i < length; i++) {
            if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) == 'object' || typeof opt == 'undefined') $this[i].lem_counter = new LemCounter($this[i], opt);else ret = $this[i].lem_counter[opt].apply($this[i].lem_counter, args);
            if (typeof ret != 'undefined') return ret;
        }
        return $this;
    };
})(jQuery);

/***/ })
/******/ ]);