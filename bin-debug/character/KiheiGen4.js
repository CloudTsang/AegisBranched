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
 * 第四代机兵
 * 空中移动
 * 无视地形的大范围移动后原型大范围内敌人低伤害，cd中
 * HP低
 */
var KiheiGen4 = (function (_super) {
    __extends(KiheiGen4, _super);
    function KiheiGen4() {
        var _this = _super.call(this) || this;
        _this.maxHP = 250;
        _this.air = true;
        _this.skills = [
            new MultMissile(_this),
        ];
        return _this;
    }
    KiheiGen4.prototype.drawKihei = function () {
        var size = this.mapCell.getSize();
        var bmp = new egret.Bitmap();
        bmp.texture = RES.getRes('character_json#gen4');
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
    //重写移动方法实现直线飞行到目的地的效果
    /**设置移动路径 */
    KiheiGen4.prototype.startMove = function (route, targetPosition) {
        this.route = route;
        this.targetPosition = targetPosition;
        var cell = route[route.length - 1];
        var dis = egret.Point.distance(new egret.Point(this.x, this.y), new egret.Point(cell.x, cell.y));
        this._sin = (cell.y - this.y + 0.01) / dis;
        this._cos = (cell.x - this.x + 0.01) / dis;
    };
    /**按照移动路径前进一单位，正在播放移动动画时直接返回 */
    KiheiGen4.prototype.move = function () {
        if (this.targetPosition == null || this.moveTween) {
            return;
        }
        var d = this.mapCell.getSize();
        var newx = this.x + this._cos * d;
        var newy = this.y + this._sin * d;
        this.moveTween = egret.Tween.get(this)
            .to({
            x: newx,
            y: newy
        }, 100)
            .call(this.onMoveStep, this);
    };
    KiheiGen4.prototype.onMoveStep = function () {
        if (this.route == null) {
            return;
        }
        var cell = this.route[this.route.length - 1];
        var x = Math.floor(this.x / cell.getSize());
        var y = Math.floor(this.y / cell.getSize());
        var cellArr = World.getIns().cellArr;
        this.mapCell = cellArr[y][x];
        if (this.mapCell == cell) {
            this.moveTween = egret.Tween.get(this)
                .to({
                x: this.targetPosition.x,
                y: this.targetPosition.y
            }, 50);
            this.targetPosition = null;
            this.route = null;
            this.moveTween = null;
            return;
        }
        this.moveTween = null;
    };
    return KiheiGen4;
}(Kihei));
__reflect(KiheiGen4.prototype, "KiheiGen4");
