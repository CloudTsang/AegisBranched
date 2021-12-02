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
var MultMissile = (function (_super) {
    __extends(MultMissile, _super);
    function MultMissile(kihei) {
        var _this = _super.call(this, kihei) || this;
        _this.attackRange = 30;
        _this.damageRange = 5;
        _this.atk = 40;
        _this.rangeType = RangeType.CIRCLE;
        _this.cd = egret.MainContext.instance.stage.frameRate * 2;
        _this.type = KiheiSkill.MULT_MISSILE;
        return _this;
    }
    MultMissile.prototype.action = function () {
        var _this = this;
        if (!this.actionTarget) {
            return;
        }
        var tw = egret.Tween.get(this.kihei)
            .to({
            x: this.actionTarget.x,
            y: this.actionTarget.y
        }, 1000)
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
    return MultMissile;
}(Skill));
__reflect(MultMissile.prototype, "MultMissile");
