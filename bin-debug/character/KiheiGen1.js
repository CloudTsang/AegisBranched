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
 * 第一代机兵
 * 地面移动
 * 无视地形的小范围跳跃后圆形小范围内地面敌人中伤害（TODO：击退效果），cd快
 * HP高
 */
var KiheiGen1 = (function (_super) {
    __extends(KiheiGen1, _super);
    function KiheiGen1() {
        var _this = _super.call(this) || this;
        _this.HP = 500;
        _this.maxHP = 500;
        _this.skills = [
            new JumpAttack(_this),
        ];
        return _this;
    }
    KiheiGen1.prototype.drawKihei = function () {
        var size = this.mapCell.getSize();
        var bmp = new egret.Bitmap();
        bmp.texture = RES.getRes('character_json#gen1');
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
    /**检查地块是否在攻击范围内 */
    KiheiGen1.prototype.checkDistance = function (cell, thisPoint, r) {
        return egret.Point.distance(new egret.Point(cell.x, cell.y), thisPoint) <= r;
    };
    return KiheiGen1;
}(Kihei));
__reflect(KiheiGen1.prototype, "KiheiGen1");
