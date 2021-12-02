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
var RailGun = (function (_super) {
    __extends(RailGun, _super);
    function RailGun(kihei) {
        var _this = _super.call(this, kihei) || this;
        _this._k = 1;
        _this._b = 0;
        _this.attackRange = -1;
        //电磁炮伤害范围为长无限，宽damageRange的直线区域
        _this.damageRange = 2;
        _this.atk = 90;
        _this.rangeType = RangeType.LINE;
        _this.cd = egret.MainContext.instance.stage.frameRate * 5;
        _this.type = KiheiSkill.RAIL_GUN;
        return _this;
    }
    RailGun.prototype.showDamageRange = function (x, y, cellArr) {
        var kihei = this.kihei;
        if (kihei.x == x) {
            x += 0.1;
        }
        var quad13 = (kihei.y - y) * (kihei.x - x) > 0;
        this._k = Math.abs(kihei.y - y) / Math.abs(kihei.x - x);
        if (quad13)
            this._k *= -1;
        // console.log(kihei.x, kihei.y, x, y, this._k)	
        // this._b = y - this._k * x;
        // if(quad13) this._b *= -1
        _super.prototype.showDamageRange.call(this, x, y, cellArr);
    };
    /**根据距离初步计算是否在范围内 */
    RailGun.prototype.distanceCheck = function (kaiju) {
        var points = kaiju.getCollisionPoint();
        var kihei = this.kihei;
        var dis = this.damageRange * this.kihei.mapCell.getSize();
        /**点到直线距离计算的分母 */
        var denominator = Math.sqrt(Math.pow(this._k, 2) + 1);
        // console.log('===========')
        for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
            var p = points_1[_i];
            var tmpx = p.x - kihei.x;
            var tmpy = p.y - kihei.y;
            // const d = Math.abs(this._k*p.x + p.y) / denominator;
            var d = Math.abs(this._k * tmpx + tmpy) / denominator;
            // const d = Math.abs(this._k*p.x + p.y + this._b) / denominator;
            // console.log(`d=${d}, dis=${dis}, denominator=${denominator}, this._k=${this._k}, this._b=${this._b}, tmpx=${tmpx}, tmpy=${tmpy}`);
            if (d < dis) {
                // console.log("distanceCheck true");
                return true;
            }
        }
        return false;
    };
    RailGun.prototype.action = function () {
        var _this = this;
        var kihei = this.kihei;
        this.drawRailGun();
        if (kihei.parent) {
            kihei.parent.addChild(this._mask);
            kihei.parent.addChild(this._sp);
            this._sp.mask = this._mask;
            this.actionTween = egret.Tween.get(this._mask)
                .to({
                scaleX: 200
            }, 1250)
                .to({
                scaleY: 0
            }, 250)
                .call(function () {
                _this._mask.parent.removeChild(_this._mask);
                _this._sp.parent.removeChild(_this._sp);
                _this._mask = null;
                _this._sp = null;
                kihei.dispatchEvent(new egret.Event(PlayEvent.KIHEI_ACTION_FINISH));
            });
        }
    };
    RailGun.prototype.drawRailGun = function () {
        var kihei = this.kihei;
        var cellSize = kihei.mapCell.getSize();
        var ulength = cellSize * this.damageRange;
        var sp = new egret.Sprite();
        sp.graphics.beginFill(0xFFFFFF);
        sp.anchorOffsetY = cellSize / 2;
        sp.graphics.drawRect(0, 0, 2000, cellSize);
        sp.graphics.endFill();
        sp.x = kihei.x;
        sp.y = kihei.y;
        sp.rotation = this.rangeSp.damageRange.rotation;
        var mask = new egret.Shape();
        mask.graphics.beginFill(0xFFFFFF);
        mask.anchorOffsetY = cellSize / 2;
        mask.graphics.drawRoundRect(0, 0, 10, cellSize, ulength, ulength);
        mask.graphics.endFill();
        mask.x = kihei.x;
        mask.y = kihei.y;
        mask.rotation = this.rangeSp.damageRange.rotation;
        this._mask = mask;
        this._sp = sp;
        var filter = new egret.GlowFilter(0x87CEEB, 0.3, 20, 20, 20, 1, true, false);
        sp.filters = [filter];
    };
    return RailGun;
}(Skill));
__reflect(RailGun.prototype, "RailGun");
