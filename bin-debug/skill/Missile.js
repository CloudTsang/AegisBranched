var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Missile = (function (_super) {
    __extends(Missile, _super);
    function Missile(kihei) {
        var _this = _super.call(this, kihei) || this;
        _this.attackRange = -1;
        _this.damageRange = 4;
        _this.atk = 55;
        _this.rangeType = RangeType.FAN;
        _this.cd = egret.MainContext.instance.stage.frameRate * 3;
        _this.type = KiheiSkill.MISSILE;
        return _this;
    }
    Missile.prototype.action = function () {
        var _this = this;
        if (!this.actionTarget) {
            return;
        }
        var tw = egret.Tween.get(this.kihei)
            .wait(1000)
            .call(function () {
            var kihei = _this.kihei;
            kihei.mapCell = _this.actionTarget;
            _this.actionTarget = null;
            _this.actionTween = null;
            kihei.startCD(_this.cd);
            kihei.dispatchEvent(new egret.Event(PlayEvent.KIHEI_ACTION_FINISH));
        }, this);
        this.actionTween = tw;
    };
    return Missile;
}(Skill));
__reflect(Missile.prototype, "Missile");
