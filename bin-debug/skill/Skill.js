var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Skill = (function () {
    function Skill(kihei) {
        /**攻击范围单位长度 */
        this.attackRange = 1;
        /**伤害范围单位长度 */
        this.damageRange = 1;
        this.kihei = kihei;
        this.rangeSp = new ActionRange(kihei, this);
    }
    Skill.prototype.action = function () {
    };
    /**显示攻击范围 */
    Skill.prototype.showAttackRange = function (v) {
        this.rangeSp.showAttackRange(v);
    };
    /**
     * 显示伤害范围
     * @param x 显示位置，传入-1时不显示
     * @param y 显示位置，传入-1时不显示
     * @param cellArr 地块数组
     */
    Skill.prototype.showDamageRange = function (x, y, cellArr) {
        if (x == -1 || y == -1) {
            this.rangeSp.showDamageRange(x, y);
            return;
        }
        var kihei = this.kihei;
        var size = kihei.mapCell.getSize();
        if (this.attackRange != -1) {
            var r = size * this.attackRange;
            var dis = egret.Point.distance(new egret.Point(x, y), new egret.Point(kihei.x, kihei.y));
            if (dis > r) {
                //拖动超出攻击范围
                var sin = (y - kihei.y + 0.1) / dis;
                var cos = (x - kihei.x + 0.1) / dis;
                y = kihei.y + (sin * r);
                x = kihei.x + (cos * r);
                var ry = Math.floor(y / size);
                var cx = Math.floor(x / size);
                this.actionTarget = cellArr[ry][cx];
                this.rangeSp.showDamageRange(x, y);
            }
            else {
                var ry = Math.floor(y / size);
                var cx = Math.floor(x / size);
                this.actionTarget = cellArr[ry][cx];
                this.rangeSp.showDamageRange(x, y);
            }
        }
        else {
            var ry = Math.floor(y / size);
            var cx = Math.floor(x / size);
            this.actionTarget = cellArr[ry][cx];
            this.rangeSp.showDamageRange(x, y);
        }
    };
    Skill.prototype.getAttackRange = function () {
        return this.attackRange;
    };
    Skill.prototype.getDamageRange = function () {
        return this.damageRange;
    };
    Skill.prototype.getRangeType = function () {
        return this.rangeType;
    };
    Skill.prototype.getATK = function () {
        return this.atk;
    };
    Skill.prototype.getCD = function () {
        return this.cd;
    };
    Skill.prototype.checkInRange = function (kaiju) {
        if (!this.distanceCheck(kaiju)) {
            return false;
        }
        return this.hitCheck(kaiju);
    };
    /**根据距离初步计算是否在范围内 */
    Skill.prototype.distanceCheck = function (kaiju) {
        var points = kaiju.getCollisionPoint();
        var damage = this.rangeSp.damageRange;
        var point0 = new egret.Point(damage.x, damage.y);
        // console.log(point0, points, this.kihei.mapCell.getSize())
        var dis = this.damageRange * this.kihei.mapCell.getSize();
        for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
            var p = points_1[_i];
            var dis2 = egret.Point.distance(p, point0);
            if (dis2 < dis) {
                // console.log('distance true : ', dis, dis2)
                return true;
            }
        }
        // console.log('distance false')
        return false;
    };
    /**碰撞检测是否在范围内 */
    Skill.prototype.hitCheck = function (kaiju) {
        var points = kaiju.getCollisionPoint();
        var sp = this.rangeSp.damageRange;
        for (var _i = 0, points_2 = points; _i < points_2.length; _i++) {
            var p = points_2[_i];
            if (sp.hitTestPoint(p.x, p.y)) {
                // console.log('hit test true')
                return true;
            }
        }
        // console.log('hit test false')
        return false;
    };
    return Skill;
}());
__reflect(Skill.prototype, "Skill");
