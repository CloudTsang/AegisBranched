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
/**机兵基类
 * 操作方式：
 * 点击：选中机兵，再点击地图移动
 * 拖动：向对应方向发动攻击
*/
var Kihei = (function (_super) {
    __extends(Kihei, _super);
    function Kihei() {
        return _super.call(this) || this;
    }
    Kihei.prototype.boot = function () {
        _super.prototype.boot.call(this);
        var sp = this.drawKihei();
        if (!sp) {
            return;
        }
        this.anchorOffsetX = sp.width / 2;
        this.anchorOffsetY = sp.height / 2;
        this.addChild(sp);
        this.sp = sp;
        this.maxCD = -1;
        this.cd = this.maxCD;
        this.mountSkill();
    };
    /**设置移动路径 */
    Kihei.prototype.startMove = function (route, targetPosition) {
        this.route = route;
        this.curRouteIndex = 1;
        this.targetPosition = targetPosition;
    };
    /**按照移动路径前进一单位，正在播放移动动画时直接返回 */
    Kihei.prototype.move = function () {
        if (this.route == null || this.moveTween) {
            return;
        }
        var mc = this.route[this.curRouteIndex];
        this.moveTween = egret.Tween.get(this)
            .to({
            x: mc.x,
            y: mc.y
        }, 100)
            .call(this.onMoveStep, this);
    };
    Kihei.prototype.onMoveStep = function () {
        this.curRouteIndex++;
        if (this.curRouteIndex >= this.route.length) {
            this.moveTween = egret.Tween.get(this)
                .to({
                x: this.targetPosition.x,
                y: this.targetPosition.y
            }, 50);
            this.mapCell = this.route[this.route.length - 1];
            this.moveTween = null;
            this.route = null;
            return;
        }
        this.mapCell = this.route[this.curRouteIndex];
        this.moveTween = null;
    };
    /**显示攻击范围 */
    Kihei.prototype.showAttackRange = function (v) {
        this.skills[0].showAttackRange(v);
    };
    /**
     * 显示伤害范围
     * @param x 显示位置，传入-1时不显示
     * @param y 显示位置，传入-1时不显示
     * @param cellArr 地块数组
     */
    Kihei.prototype.showDamageRange = function (x, y, cellArr) {
        // let sp = new egret.Shape();
        // 	sp.graphics.beginFill(0xFFFFFF);
        // 	sp.graphics.drawRect(this.x,this.y,this.width,this.height)
        // 	sp.graphics.endFill();
        // 	this.parent.addChild(sp);
        this.skills[0].showDamageRange(x, y, cellArr);
    };
    Kihei.prototype.checkKaijuInRange = function (kaiju) {
        return this.skills[0].checkInRange(kaiju);
    };
    Kihei.prototype.getActionTarget = function () {
        return this.skills[0].actionTarget;
    };
    Kihei.prototype.action = function () {
        this.skills[0].action();
    };
    Kihei.prototype.mountSkill = function (ty) {
        if (ty === void 0) { ty = null; }
        if (!this.skills || this.skills.length == 0) {
            throw new Error('Kihei has no skill');
        }
        return this.skills[0];
    };
    Kihei.prototype.drawKihei = function () {
        return null;
    };
    /** 是否在cd中*/
    Kihei.prototype.getAvaliable = function () {
        return this.cd == this.maxCD;
    };
    Kihei.prototype.startCD = function (v) {
        this.maxCD = v;
        this.cd = 0;
    };
    Kihei.prototype.onCD = function () {
        if (this.cd == this.maxCD) {
            this.maxCD = -1;
            this.cd = -1;
            return true;
        }
        this.cd++;
        return this.cd == this.maxCD;
    };
    /** 获取cd进度百分比 */
    Kihei.prototype.getCDRate = function () {
        return this.cd / this.maxCD;
    };
    Kihei.prototype.pause = function () {
        this.moveTween && this.moveTween.pause();
    };
    Kihei.prototype.resume = function () {
        this.moveTween && this.moveTween.play();
    };
    return Kihei;
}(BaseCharacter));
__reflect(Kihei.prototype, "Kihei");
