'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lottieAnimationView = require('./lottieAnimationView.module');

Object.keys(_lottieAnimationView).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _lottieAnimationView[key];
    }
  });
});