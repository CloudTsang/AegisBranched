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
var BaseCharacter = (function (_super) {
    __extends(BaseCharacter, _super);
    function BaseCharacter() {
        var _this = _super.call(this) || this;
        _this.touchEnabled = true;
        return _this;
    }
    /** 初始化*/
    BaseCharacter.prototype.boot = function () {
        this.HP = this.maxHP;
    };
    BaseCharacter.prototype.move = function () {
    };
    BaseCharacter.prototype.action = function () {
    };
    BaseCharacter.prototype.damage = function () {
    };
    BaseCharacter.prototype.isAir = function () {
        return this.air;
    };
    BaseCharacter.prototype.getHP = function () {
        return this.HP;
    };
    BaseCharacter.prototype.getMaxHP = function () {
        return this.maxHP;
    };
    return BaseCharacter;
}(egret.Sprite));
__reflect(BaseCharacter.prototype, "BaseCharacter");
