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
/**空中大型怪 */
var Eagle = (function (_super) {
    __extends(Eagle, _super);
    function Eagle() {
        var _this = _super.call(this) || this;
        _this.air = true;
        _this.maxHP = 100;
        _this.speed = 400;
        return _this;
    }
    Eagle.prototype.getCollisionPoint = function () {
        //空中大型怪检测点增加到左右各3个
        var x1 = this.x;
        var y1 = this.y;
        var x2 = x1 + this.width;
        var y2 = y1 + this.height;
        var y3 = y1 + this.height / 2;
        return [
            new egret.Point(x1, y1), new egret.Point(x2, y1),
            new egret.Point(x1, y3), new egret.Point(x2, y3),
            new egret.Point(x1, y2), new egret.Point(x2, y2),
        ];
    };
    Eagle.prototype.drawKaiju = function () {
        var size = this.mapCell.getSize();
        var bmp = new egret.Bitmap();
        bmp.texture = RES.getRes('character_json#eagle');
        var scale = bmp.width / bmp.height;
        bmp.height = size * 4;
        bmp.width = bmp.height * scale;
        bmp.x = -size / 2;
        bmp.y = -size / 2;
        if (!this.sp) {
            this.addChild(bmp);
        }
        return bmp;
    };
    return Eagle;
}(Mosquito));
__reflect(Eagle.prototype, "Eagle");
