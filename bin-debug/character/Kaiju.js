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
/**怪兽基类 */
var Kaiju = (function (_super) {
    __extends(Kaiju, _super);
    function Kaiju() {
        return _super.call(this) || this;
    }
    Kaiju.prototype.boot = function () {
        _super.prototype.boot.call(this);
        this.arrived = false;
        this.curRouteIndex = 1;
        if (!this.sp) {
            var sp = this.drawKaiju();
            this.anchorOffsetX = sp.width / 2;
            this.anchorOffsetY = sp.height / 2;
            this.addChild(sp);
            this.sp = sp;
            this._w = this.width;
            this._h = this.height;
        }
        this.createRedFilter();
    };
    Kaiju.prototype.drawKaiju = function () {
        return null;
    };
    /**设置移动路径 */
    Kaiju.prototype.startMove = function (route) {
        this.route = route;
        this.curRouteIndex = 1;
        // for(let mc of route){
        // 	console.log(mc.cellX, mc.cellY, mc.x, mc.y, mc.getSize())
        // }
    };
    Kaiju.prototype.move = function () {
        if (this.route == null || this.moveTween) {
            return;
        }
        var mc = this.route[this.curRouteIndex];
        //随机前进坐标防止挤在一起
        var x = mc.x + Math.random() * mc.width - mc.width / 2;
        var y = mc.y + Math.random() * mc.height - mc.height / 2;
        if (this.curRouteIndex == this.route.length - 1) {
            y += mc.getSize();
        }
        this.moveTween = egret.Tween.get(this)
            .to({
            x: x,
            y: y
        }, this.speed)
            .call(this.onMoveStep, this);
    };
    Kaiju.prototype.onMoveStep = function () {
        this.curRouteIndex++;
        if (this.curRouteIndex >= this.route.length) {
            this.mapCell = this.route[this.route.length - 1];
            this.moveTween = null;
            this.route = null;
            this.arrived = true;
            this.dispatchEvent(new egret.Event(PlayEvent.KAIJU_EXIT));
            return;
        }
        this.mapCell = this.route[this.curRouteIndex];
        this.moveTween = null;
    };
    /**进入机兵攻击范围的闪烁特效 */
    Kaiju.prototype.aimed = function (v) {
        if (v) {
            if (this.aimTween) {
                return;
            }
            var filter = new egret.GlowFilter(0xFFFFFF, 0.1, 20, 20, 25, 1, true, false);
            this.filters = [this.redFilter, filter];
            this.aimTween = egret.Tween.get(filter, { loop: true })
                .to({
                alpha: 0.8
            }, 500)
                .to({
                alpha: 0.1
            }, 500);
        }
        else {
            if (!this.aimTween) {
                return;
            }
            this.filters = [this.redFilter];
            this.aimTween.pause();
            this.aimTween = null;
        }
    };
    /**获取开始是否已到达目标点（用于判断KAIJU_EXIT事件的发出是由于被破坏还是到达目标点） */
    Kaiju.prototype.getArrived = function () {
        return this.arrived;
    };
    Kaiju.prototype.dispose = function () {
        this.filters = [];
        this.parent && this.parent.removeChild(this);
        this.moveTween && this.moveTween.pause();
        this.moveTween = null;
        this.aimTween && this.aimTween.pause();
        this.aimTween = null;
        this.route = null;
        this.activate = false;
    };
    Kaiju.prototype.pause = function () {
        this.moveTween && this.moveTween.pause();
    };
    Kaiju.prototype.resume = function () {
        this.moveTween && this.moveTween.play();
    };
    Kaiju.prototype.getCollisionPoint = function () {
        //碰撞检测点四角
        var x1 = this.x;
        var y1 = this.y;
        var x2 = x1 + this._w;
        var y2 = y1 + this._h;
        // if(this._collisionArea){
        // 	this._collisionArea.parent && this._collisionArea.parent.removeChild(this._collisionArea)
        // 	this._collisionArea = null
        // }
        // if(!this._collisionArea){
        // 	let sp = new egret.Shape();
        // 	sp.graphics.beginFill(0xFFFFFF);
        // 	sp.graphics.drawRect(this.x,this.y,this._w,this._h)
        // 	sp.graphics.endFill();
        // 	this.parent.addChild(sp);
        // 	this._collisionArea = sp
        // }
        return [
            new egret.Point(x1, y1), new egret.Point(x2, y1),
            new egret.Point(x1, y2), new egret.Point(x2, y2)
        ];
    };
    Kaiju.prototype.createRedFilter = function () {
        var filter = new egret.GlowFilter(0xDD0000, 1, 5, 5, 5);
        this.redFilter = filter;
        this.filters = [filter];
    };
    Kaiju.pool = new Pool(function () {
        return new Ant();
        // return new Eagle();		
        var air = Math.random() <= 0.5;
        var ty = Math.random() <= 0.2;
        // const ty = false
        if (air && ty) {
            return new Eagle();
        }
        if (air && !ty) {
            return new Mosquito();
        }
        if (!air && ty) {
            return new Bull();
        }
        if (!air && !ty) {
            return new Ant();
        }
    });
    return Kaiju;
}(BaseCharacter));
__reflect(Kaiju.prototype, "Kaiju", ["IPoolObject", "egret.IEventDispatcher"]);
