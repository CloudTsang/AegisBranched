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
var Status = (function (_super) {
    __extends(Status, _super);
    /**机兵状态图 */
    function Status(kihei) {
        var _this = _super.call(this) || this;
        _this._kihei = kihei;
        _this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, _this.init, _this);
        _this.skinName = 'resource/eui_skins/KiheiStatus.exml';
        _this._kihei.addEventListener(PlayEvent.GET_DAMAGE, _this.refreshHP, _this);
        return _this;
    }
    Status.prototype.init = function (e) {
        if (this.kihei_icon) {
            this._iconSize = this.width;
        }
        this.refresh();
    };
    Status.prototype.refresh = function (e) {
        if (e === void 0) { e = null; }
        var kihei = this._kihei;
        if (!this._sp) {
            var sp = kihei.drawKihei();
            var scale = sp.width / sp.height;
            sp.width = this.width;
            sp.height = sp.width / scale;
            sp.y = (this._iconSize - sp.height) / 2;
            this._sp = sp;
            this.kihei_icon.addChild(sp);
        }
        this.refreshHP();
        this.refreshCD();
    };
    Status.prototype.refreshHP = function (e) {
        if (e === void 0) { e = null; }
        if (!this.hp_gauge) {
            return;
        }
        this.hp_gauge.value = this._kihei.getHP() / this._kihei.getMaxHP() * 100;
    };
    Status.prototype.refreshCD = function () {
        if (!this.kihei_icon) {
            return;
        }
        var angle = this._kihei.getCDRate() * 360;
        if (angle == 360) {
            if (this._iscd && this._cdProgress) {
                this._cdProgress.graphics.clear();
                this._iscd = false;
            }
            return;
        }
        this._iscd = true;
        var d = this.width;
        var r = d / 2;
        var shape = this._cdProgress;
        var mask = this._mask;
        if (!shape) {
            shape = new egret.Shape();
            shape.x = 0;
            shape.y = 0;
            this._cdProgress = shape;
            this.kihei_icon.addChild(shape);
        }
        if (!mask) {
            mask = new egret.Shape();
            mask.graphics.beginFill(0x000000);
            mask.graphics.drawRect(0, 0, d, d);
            mask.graphics.endFill();
            this.kihei_icon.addChild(mask);
        }
        shape.graphics.clear();
        shape.graphics.beginFill(0x000000, 0.7);
        shape.graphics.moveTo(r, r);
        shape.graphics.lineTo(d, d);
        shape.graphics.drawArc(r, r, d, 0, angle * Math.PI / 180, true);
        shape.graphics.lineTo(r, r);
        shape.graphics.endFill();
        shape.mask = mask;
    };
    return Status;
}(eui.Component));
__reflect(Status.prototype, "Status");
