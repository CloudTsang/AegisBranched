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
/**空中杂兵 */
var Mosquito = (function (_super) {
    __extends(Mosquito, _super);
    function Mosquito() {
        var _this = _super.call(this) || this;
        _this.air = true;
        _this.maxHP = 50;
        _this.speed = 350;
        return _this;
    }
    Mosquito.prototype.drawKaiju = function () {
        var size = this.mapCell.getSize();
        var bmp = new egret.Bitmap();
        bmp.texture = RES.getRes('character_json#mosqito');
        var scale = bmp.width / bmp.height;
        // bmp.width = size*2;
        bmp.height = size;
        bmp.width = bmp.height * scale;
        // bmp.x = -size/2
        // bmp.y = -size/2;
        if (!this.sp) {
            this.addChild(bmp);
        }
        return bmp;
    };
    Mosquito.prototype.startMove = function (route) {
        this.route = route;
        var cell = route[route.length - 1];
        var dis = egret.Point.distance(new egret.Point(this.x, this.y), new egret.Point(cell.x, cell.y));
        this._sin = (cell.y - this.y + 0.01) / dis;
        this._cos = (cell.x - this.x + 0.01) / dis;
    };
    /**按照移动路径前进一单位，正在播放移动动画时直接返回 */
    Mosquito.prototype.move = function () {
        if (this.moveTween) {
            return;
        }
        var d = this.mapCell.getSize();
        var newx = this.x + this._cos * d;
        var newy = this.y + this._sin * d;
        this.moveTween = egret.Tween.get(this)
            .to({
            x: newx,
            y: newy
        }, this.speed)
            .call(this.onMoveStep, this);
    };
    Mosquito.prototype.onMoveStep = function () {
        if (this.route == null) {
            return;
        }
        var cell = this.route[this.route.length - 1];
        var x = Math.floor(this.x / cell.getSize());
        var y = Math.floor(this.y / cell.getSize());
        var cellArr = World.getIns().cellArr;
        this.mapCell = cellArr[y][x];
        if (this.mapCell == cell) {
            this.route = null;
            this.moveTween = null;
            this.arrived = true;
            this.dispatchEvent(new egret.Event(PlayEvent.KAIJU_EXIT));
            return;
        }
        this.moveTween = null;
    };
    return Mosquito;
}(Kaiju));
__reflect(Mosquito.prototype, "Mosquito");
