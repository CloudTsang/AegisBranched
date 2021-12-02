var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var LifecycleCallback = (function () {
    function LifecycleCallback() {
    }
    LifecycleCallback.regist = function () {
        egret.lifecycle.onPause = this.onPause;
        egret.lifecycle.onResume = this.onResume;
    };
    LifecycleCallback.addFunc = function (key, f1, f2) {
        LifecycleCallback.map[key] = new LcyObj(f1, f2);
    };
    LifecycleCallback.removeFunc = function (key) {
        delete LifecycleCallback.map[key];
    };
    LifecycleCallback.onPause = function () {
        for (var i in LifecycleCallback.map) {
            LifecycleCallback.map[i].onPause();
        }
    };
    LifecycleCallback.onResume = function () {
        for (var i in LifecycleCallback.map) {
            LifecycleCallback.map[i].onResume();
        }
    };
    LifecycleCallback.map = {};
    return LifecycleCallback;
}());
__reflect(LifecycleCallback.prototype, "LifecycleCallback");
var LcyObj = (function () {
    function LcyObj(f1, f2) {
        this.onPause = f1;
        this.onResume = f2;
    }
    return LcyObj;
}());
__reflect(LcyObj.prototype, "LcyObj");
