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
/**
 * 第三代机兵
 * 地面移动
 * 直线范围内地面空中敌人高伤害，cd慢
 * HP中
 */
var KiheiGen3 = (function (_super) {
    __extends(KiheiGen3, _super);
    function KiheiGen3() {
        var _this = _super.call(this) || this;
        _this.maxHP = 300;
        _this.skills = [
            new RailGun(_this),
        ];
        return _this;
    }
    KiheiGen3.prototype.drawKihei = function () {
        var size = this.mapCell.getSize();
        var bmp = new egret.Bitmap();
        bmp.texture = RES.getRes('character_json#gen3');
        var scale = bmp.width / bmp.height;
        // bmp.width = size*2;
        bmp.height = size * 1.5;
        bmp.width = bmp.height * scale;
        bmp.x = 0;
        bmp.y = 0;
        if (!this.sp) {
            this.addChild(bmp);
        }
        return bmp;
    };
    return KiheiGen3;
}(Kihei));
__reflect(KiheiGen3.prototype, "KiheiGen3");
