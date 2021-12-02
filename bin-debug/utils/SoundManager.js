var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SoundManager = (function () {
    function SoundManager() {
        var _this = this;
        LifecycleCallback.addFunc('bgm', function () { _this.pause(); }, function () { _this.resume(); });
    }
    SoundManager.instance = function () {
        if (!SoundManager._ins) {
            SoundManager._ins = new SoundManager();
        }
        return SoundManager._ins;
    };
    SoundManager.prototype.play = function (name) {
        if (this._bgm) {
            this._bgmChannel.stop();
            this._bgm.close();
        }
        this._bgm = RES.getRes(name);
        this._bgm.type = egret.Sound.MUSIC;
        this._bgmChannel = this._bgm.play();
    };
    SoundManager.prototype.resume = function () {
        if (!this._bgm) {
            return;
        }
        this._bgmChannel = this._bgm.play(this._bgmPosition);
    };
    SoundManager.prototype.pause = function () {
        if (this._bgm) {
            this._bgmPosition = this._bgmChannel.position;
            this._bgmChannel.stop();
            // this._bgm.close();				
        }
    };
    return SoundManager;
}());
__reflect(SoundManager.prototype, "SoundManager");
