var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var World = (function () {
    function World() {
    }
    World.getIns = function () {
        if (!World._ins) {
            World._ins = new World();
        }
        return World._ins;
    };
    World.prototype.dipose = function () {
    };
    World.prototype.initMap = function (mapData, mapSize, nodeData, cellSize, kaiju) {
        var cellArr = [];
        var land = [];
        for (var r = 0; r < mapSize[0]; r++) {
            var tmpArr = [];
            for (var c = 0; c < mapSize[1]; c++) {
                var mc = new MapCell(c, r, cellSize, mapData[r][c], false, nodeData[r + '_' + c]);
                mc.x = c * cellSize + cellSize / 2;
                mc.y = r * cellSize + cellSize / 2;
                tmpArr.push(mc);
                if (r == mapSize[0] - 1 && mc.isLand()) {
                    land.push(mc);
                }
            }
            cellArr.push(tmpArr);
        }
        this.cellArr = cellArr;
        this.kaijuExit = land;
        var kaijuA = [];
        var kaijuL = [];
        for (var _i = 0, kaiju_1 = kaiju; _i < kaiju_1.length; _i++) {
            var tmp = kaiju_1[_i];
            var c = cellArr[tmp[0]][tmp[1]];
            if (c.isLand()) {
                kaijuL.push(c);
            }
            else {
                kaijuA.push(c);
            }
        }
        this.kaijuEntryLand = kaijuL;
        this.kaijuEntryAir = kaijuA;
    };
    /**怪兽得分的目标点（最下一行地块） */
    World.prototype.getKaijuExit = function () {
        return this.kaijuExit;
    };
    /**随机获取一个刷新点 */
    World.prototype.randomEntry = function (air) {
        var cellArr;
        if (air) {
            cellArr = this.kaijuEntryAir;
        }
        else {
            cellArr = this.kaijuEntryLand;
        }
        return cellArr[Math.floor(Math.random() * cellArr.length)];
    };
    World.prototype.randomExit = function (air) {
        var cellArr;
        if (air) {
            cellArr = this.cellArr[this.cellArr.length - 1];
        }
        else {
            cellArr = this.kaijuExit;
        }
        return cellArr[Math.floor(Math.random() * cellArr.length)];
    };
    /**地面单位移动路径查找*/
    World.prototype.findPath = function (start, target, map) {
        if (map === void 0) { map = null; }
        if (!map) {
            map = [];
            for (var _i = 0, _a = this.cellArr; _i < _a.length; _i++) {
                var r = _a[_i];
                var tmpArr = [];
                for (var _b = 0, r_1 = r; _b < r_1.length; _b++) {
                    var c = r_1[_b];
                    tmpArr.push(0);
                }
                map.push(tmpArr);
            }
            map[start.cellY][start.cellX] = 1;
        }
        var nextNodes = [];
        for (var _c = 0, _d = start.nodes; _c < _d.length; _c++) {
            var node = _d[_c];
            if (map[node[0]][node[1]] == 1) {
                //已计算过该节点
                continue;
            }
            if (node[1] == target.cellX && node[0] == target.cellY) {
                //到达目的节点
                return { route: (_e = [start]).concat.apply(_e, [this.cellArr[node[0]][node[1]]]), map: map };
            }
            map[node[0]][node[1]] = 1;
            nextNodes.push(this.cellArr[node[0]][node[1]]);
        }
        if (nextNodes.length == 0) {
            //死路			
            return { route: null, map: map };
        }
        var finalRet = null;
        var tmpMap = [];
        for (var _f = 0, map_1 = map; _f < map_1.length; _f++) {
            var r = map_1[_f];
            var tmp = [];
            for (var _g = 0, r_2 = r; _g < r_2.length; _g++) {
                var c = r_2[_g];
                tmp.push(c);
            }
            tmpMap.push(tmp);
        }
        for (var _h = 0, nextNodes_1 = nextNodes; _h < nextNodes_1.length; _h++) {
            var node = nextNodes_1[_h];
            var ret = this.findPath(node, target, tmpMap);
            if (ret.route) {
                if (!finalRet) {
                    finalRet = (_j = [start]).concat.apply(_j, ret.route);
                    map = ret.map;
                }
                else if (ret.route.length < finalRet.length) {
                    finalRet = (_k = [start]).concat.apply(_k, ret.route);
                    map = ret.map;
                }
            }
        }
        return { route: finalRet, map: map, };
        var _e, _j, _k;
    };
    return World;
}());
__reflect(World.prototype, "World");
