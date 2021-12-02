var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**缓存寻路路径，主要存放怪兽的移动路径 */
var RouteDict = (function () {
    function RouteDict() {
        this._dict = {};
    }
    RouteDict.prototype.addRoute = function (x1, y1, x2, y2, route) {
        var key = x1 + "_" + y1 + "_" + x2 + "_" + y2;
        var arr = [];
        for (var _i = 0, route_1 = route; _i < route_1.length; _i++) {
            var cell = route_1[_i];
            arr.push([cell.cellX, cell.cellY]);
        }
        this._dict[key] == arr;
    };
    /**获取路径
     *
     * @param cache 需要寻路的场合是否缓存结果，机兵的移动路劲不缓存
     */
    RouteDict.prototype.checkRoute = function (x1, y1, x2, y2, cache) {
        if (cache === void 0) { cache = false; }
        var key = x1 + "_" + y1 + "_" + x2 + "_" + y2;
        if (this._dict[key]) {
            console.log('已缓存当前路径');
            return this._dict[key];
        }
        var cellArr = World.getIns().cellArr;
        var c1 = cellArr[y1][x1];
        var c2 = cellArr[y2][x2];
        var route = World.getIns().findPath(c1, c2, null);
        if (cache) {
            this._dict[key] == route;
        }
        return route;
    };
    /**获取路径
     *
     * @param cache 需要寻路的场合是否缓存结果，机兵的移动路径不缓存
     */
    RouteDict.prototype.checkRoute2 = function (mc1, mc2, cache) {
        if (cache === void 0) { cache = false; }
        var key = mc1.cellX + "_" + mc1.cellY + "_" + mc2.cellX + "_" + mc2.cellY;
        if (this._dict[key]) {
            console.log('已缓存当前路径');
            return this._dict[key];
        }
        var route = World.getIns().findPath(mc1, mc2, null);
        if (cache) {
            this._dict[key] == route;
        }
        return route;
    };
    return RouteDict;
}());
__reflect(RouteDict.prototype, "RouteDict");
