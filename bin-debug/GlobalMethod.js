var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GlobalMethod = (function () {
    function GlobalMethod() {
    }
    /**
     * 获取两个坐标的旋转角度，
     */
    GlobalMethod.getRotation = function (x1, y1, x2, y2) {
        var tan = Math.atan((y2 - y1 + 0.1) / (x2 - x1 + 0.1));
        var deg = tan / (Math.PI / 180);
        if (x2 < x1) {
            deg = -(180 - deg);
        }
        return deg;
    };
    GlobalMethod.random = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    /**
     * 获取一个mc帧动画
     * @param {stirng} name mc帧动画的文件名
     * @param {number} playNum 帧动画播放次数 -1为循环播放 默认循环播放
     */
    GlobalMethod.getMc = function (name, playNum) {
        if (playNum === void 0) { playNum = -1; }
        var data = RES.getRes(name + "_json");
        var txtr = RES.getRes(name + "_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        var mc = new egret.MovieClip(mcFactory.generateMovieClipData());
        // mc.play(playNum);
        return mc;
    };
    GlobalMethod.loadImage = function (url, listner, successFunc, failFunc) {
        var loader = new egret.ImageLoader();
        loader.crossOrigin = "anonymous"; // 跨域请求
        loader.load(url);
        loader.once(egret.Event.COMPLETE, successFunc, listner);
        loader.once(egret.IOErrorEvent.IO_ERROR, failFunc, listner);
    };
    GlobalMethod.httpReq = function (url, param, method, listner, successFunc, failFunc, contentType, token) {
        if (method == 'GET') {
            url = url + '?' + param;
        }
        var req = new egret.HttpRequest();
        req.open(url, method);
        req.setRequestHeader("Accept", "*/*");
        if (token)
            req.setRequestHeader("Authorization", token);
        req.setRequestHeader("Content-Type", contentType);
        if (method == 'GET') {
            req.send();
        }
        else {
            req.send(param);
        }
        req.addEventListener(egret.Event.COMPLETE, successFunc, listner);
        if (failFunc != null) {
            req.addEventListener(egret.IOErrorEvent.IO_ERROR, failFunc, listner);
            req.addEventListener(egret.HTTPStatusEvent.CLOSE, failFunc, listner);
        }
    };
    GlobalMethod.Loaded = function () {
        window.parent.postMessage({
            "isLoadComplete": true,
            "url": window.location.href
        }, '*');
    };
    return GlobalMethod;
}());
__reflect(GlobalMethod.prototype, "GlobalMethod");
