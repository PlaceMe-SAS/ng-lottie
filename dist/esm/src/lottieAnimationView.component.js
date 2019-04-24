'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LottieAnimationViewComponent = undefined;

var _core = require('@angular/core');

var _common = require('@angular/common');

var lottie = require('lottie-web/build/player/lottie.js');
var LottieAnimationViewComponent = function () {
    function LottieAnimationViewComponent(platformId) {
        this.platformId = platformId;
        this.animCreated = new _core.EventEmitter();
    }
    LottieAnimationViewComponent.prototype.ngOnInit = function () {
        if ((0, _common.isPlatformServer)(this.platformId)) {
            return;
        }
        this._options = {
            container: this.lavContainer.nativeElement,
            renderer: this.options.renderer || 'svg',
            loop: this.options.loop !== false,
            autoplay: this.options.autoplay !== false,
            autoloadSegments: this.options.autoloadSegments !== false,
            animationData: this.options.animationData,
            path: this.options.path || '',
            rendererSettings: this.options.rendererSettings || {}
        };
        this.viewWidth = this.width + 'px' || '100%';
        this.viewHeight = this.height + 'px' || '100%';
        var anim = lottie.loadAnimation(this._options);
        this.animCreated.emit(anim);
    };
    return LottieAnimationViewComponent;
}();
exports.LottieAnimationViewComponent = LottieAnimationViewComponent;

LottieAnimationViewComponent.decorators = [{ type: _core.Component, args: [{
        selector: 'lottie-animation-view',
        template: "<div #lavContainer \n                    [ngStyle]=\"{'width': viewWidth, 'height': viewHeight, 'overflow':'hidden', 'margin': '0 auto'}\">    \n               </div>"
    }] }];
/** @nocollapse */
LottieAnimationViewComponent.ctorParameters = function () {
    return [{ type: undefined, decorators: [{ type: _core.Inject, args: [_core.PLATFORM_ID] }] }];
};
LottieAnimationViewComponent.propDecorators = {
    'options': [{ type: _core.Input }],
    'width': [{ type: _core.Input }],
    'height': [{ type: _core.Input }],
    'animCreated': [{ type: _core.Output }],
    'lavContainer': [{ type: _core.ViewChild, args: ['lavContainer'] }]
};
//# sourceMappingURL=lottieAnimationView.component.js.map