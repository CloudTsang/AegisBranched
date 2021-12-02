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
var JumpAttack = (function (_super) {
    __extends(JumpAttack, _super);
    function JumpAttack(kihei) {
        var _this = _super.call(this, kihei) || this;
        _this.attackRange = 4;
        _this.damageRange = 2;
        _this.atk = 70;
        _this.rangeType = RangeType.CIRCLE;
        _this.cd = egret.MainContext.instance.stage.frameRate * 2;
        _this.type = KiheiSkill.JUMP_ATTACK;
        return _this;
    }
    JumpAttack.prototype.action = function () {
        var _this = this;
        if (!this.actionTarget) {
            return;
        }
        var kihei = this.kihei;
        var actTgt = this.actionTarget;
        var tw = egret.Tween.get(kihei)
            .to({
            scaleX: 1.5,
            scaleY: 1.5,
            x: kihei.x + (actTgt.x - kihei.x) / 2,
            y: kihei.y + (actTgt.y - kihei.y) / 2
        }, 400)
            .wait(200)
            .to({
            scaleX: 1,
            scaleY: 1,
            x: actTgt.x,
            y: actTgt.y
        }, 200)
            .wait(500)
            .to({
            scaleX: 1,
            scaleY: 1,
            x: this._backCell.x,
            y: this._backCell.y
        }, 200)
            .call(function () {
            kihei.mapCell = _this.actionTarget;
            _this.actionTarget = null;
            _this.actionTween = null;
            kihei.startCD(_this.cd);
            kihei.dispatchEvent(new egret.Event(PlayEvent.KIHEI_ACTION_FINISH));
        }, this);
        this.actionTween = tw;
    };
    JumpAttack.prototype.showDamageRange = function (x, y, cellArr) {
        if (x == -1 || y == 1) {
            this.rangeSp.showDamageRange(-1, -1);
            return;
        }
        var kihei = this.kihei;
        var thisPoint = new egret.Point(kihei.x, kihei.y);
        var size = kihei.mapCell.getSize();
        var r = size * this.attackRange;
        var dis = egret.Point.distance(new egret.Point(x, y), new egret.Point(kihei.x, kihei.y));
        if (dis > r) {
            var sin = (y - kihei.y + 0.1) / dis;
            var cos = (x - kihei.x + 0.1) / dis;
            y = kihei.y + (sin * r);
            x = kihei.x + (cos * r);
        }
        var ry = Math.floor(y / size);
        var cx = Math.floor(x / size);
        this.actionTarget = cellArr[ry][cx];
        var curCell = cellArr[ry][cx];
        if (!curCell.isLand()) {
            curCell = this.getClosetLandCell(cx, ry, cellArr);
        }
        this.rangeSp.showDamageRange(x, y);
        this._backCell = curCell;
    };
    /**跳到非地面格时寻找最近一格地面设为_backCell*/
    JumpAttack.prototype.getClosetLandCell = function (x, y, cellArr) {
        var mapH = cellArr.length;
        var mapW = cellArr[0].length;
        var round = 1;
        while (true) {
            if (y - round >= 0) {
                //最上一行
                var tmpy = y - round;
                for (var i = -round; i < round + 1; i++) {
                    var tmpx = x + i;
                    if (tmpx < 0 || tmpx >= mapW) {
                        continue;
                    }
                    if (cellArr[tmpy][tmpx].isLand()) {
                        return cellArr[tmpy][tmpx];
                    }
                }
            }
            if (y + round < mapH) {
                //最下一行
                var tmpy = y + round;
                for (var i = -round; i < round + 1; i++) {
                    var tmpx = x + i;
                    if (tmpx < 0 || tmpx >= mapW) {
                        continue;
                    }
                    if (cellArr[tmpy][tmpx].isLand()) {
                        return cellArr[tmpy][tmpx];
                    }
                }
            }
            if (x - round >= 0) {
                //最左一列
                var tmpx = x - round;
                for (var i = -round; i < round + 1; i++) {
                    var tmpy = y + i;
                    if (tmpy < 0 || tmpy >= mapH) {
                        continue;
                    }
                    if (cellArr[tmpy][tmpx].isLand()) {
                        return cellArr[tmpy][tmpx];
                    }
                }
            }
            if (x + round < mapW) {
                //最右一列
                var tmpx = x + round;
                for (var i = -round; i < round + 1; i++) {
                    var tmpy = y + i;
                    if (tmpy < 0 || tmpy >= mapH) {
                        continue;
                    }
                    if (cellArr[tmpy][tmpx].isLand()) {
                        return cellArr[tmpy][tmpx];
                    }
                }
            }
            round++;
        }
    };
    return JumpAttack;
}(Skill));
__reflect(JumpAttack.prototype, "JumpAttack");
