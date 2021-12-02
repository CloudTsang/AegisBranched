var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Pool = (function () {
    function Pool(func) {
        this._arr = [];
        this._func = func;
    }
    Pool.prototype.getOne = function () {
        var ret = null;
        for (var _i = 0, _a = this._arr; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (!obj.activate) {
                ret = obj;
                break;
            }
        }
        if (!ret) {
            ret = this._func();
            this._arr.push(ret);
        }
        ret.activate = true;
        return ret;
    };
    Pool.prototype.recycle = function (e) {
        if (e === void 0) { e = null; }
        var obj = e.target;
        obj.activate = false;
    };
    Pool.prototype.dispose = function () {
        this._arr = null;
        this._func = null;
    };
    return Pool;
}());
__reflect(Pool.prototype, "Pool");
