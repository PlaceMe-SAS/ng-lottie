'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LottieAnimationViewModule = undefined;

var _core = require('@angular/core');

var _common = require('@angular/common');

var _lottieAnimationView = require('./lottieAnimationView.component');

var LottieAnimationViewModule = function () {
    function LottieAnimationViewModule() {}
    LottieAnimationViewModule.forRoot = function () {
        return {
            ngModule: LottieAnimationViewModule
        };
    };
    return LottieAnimationViewModule;
}();
exports.LottieAnimationViewModule = LottieAnimationViewModule;

LottieAnimationViewModule.decorators = [{ type: _core.NgModule, args: [{
        declarations: [_lottieAnimationView.LottieAnimationViewComponent],
        imports: [_common.CommonModule],
        exports: [_lottieAnimationView.LottieAnimationViewComponent]
    }] }];
/** @nocollapse */
LottieAnimationViewModule.ctorParameters = function () {
    return [];
};
//# sourceMappingURL=lottieAnimationView.module.js.map