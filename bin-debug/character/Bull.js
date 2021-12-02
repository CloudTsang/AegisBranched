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
/**地面大型怪 */
var Bull = (function (_super) {
    __extends(Bull, _super);
    function Bull() {
        var _this = _super.call(this) || this;
        _this.air = false;
        _this.maxHP = 120;
        _this.speed = 400;
        return _this;
    }
    Bull.prototype.drawKaiju = function () {
        var size = this.mapCell.getSize();
        var bmp = new egret.Bitmap();
        bmp.texture = RES.getRes('character_json#bull');
        var scale = bmp.width / bmp.height;
        bmp.height = size * 1.5;
        bmp.width = bmp.height * scale;
        bmp.x = -size / 2;
        bmp.y = -size / 2;
        if (!this.sp) {
            this.addChild(bmp);
        }
        return bmp;
    };
    return Bull;
}(Kaiju));
__reflect(Bull.prototype, "Bull");
