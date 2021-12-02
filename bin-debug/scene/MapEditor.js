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
var MapEditor = (function (_super) {
    __extends(MapEditor, _super);
    function MapEditor() {
        var _this = _super.call(this) || this;
        _this.ROW = 20;
        _this.COLUMN = 12;
        _this._stage = egret.MainContext.instance.stage;
        var stage = _this._stage;
        _this._cellSize = Math.floor(stage.stageWidth / _this.COLUMN);
        _this.x = 0;
        _this.y = 0;
        _this.graphics.beginFill(0x000000);
        _this.graphics.drawRect(0, 0, stage.stageWidth, _this._cellSize * _this.ROW);
        _this.graphics.endFill();
        _this.touchEnabled = true;
        return _this;
    }
    MapEditor.prototype.newMap = function () {
        var _this = this;
        var arr = [];
        var cz = this._cellSize;
        for (var r = 0; r < this.ROW; r++) {
            var tmpArr = [];
            for (var c = 0; c < this.COLUMN; c++) {
                var mc = new MapCell(c, r, cz, MapCellType.AIR, true);
                mc.x = c * cz + cz / 2;
                mc.y = r * cz + cz / 2;
                tmpArr.push(mc);
                this.addChild(mc);
            }
            arr.push(tmpArr);
        }
        this._cellArr = arr;
        document.addEventListener('keydown', function (e) { _this.keydown(e); });
    };
    MapEditor.prototype.loadMap = function (name) {
        var _this = this;
        var jsonData = RES.getRes(name + '_json');
        if (jsonData == null) {
            return;
        }
        var arr = [];
        var mapData = jsonData.data;
        var cz = this._cellSize;
        for (var r = 0; r < this.ROW; r++) {
            var tmpArr = [];
            for (var c = 0; c < this.COLUMN; c++) {
                var mc = new MapCell(c, r, cz, mapData[r][c], true);
                mc.x = c * cz + cz / 2;
                mc.y = r * cz + cz / 2;
                tmpArr.push(mc);
                this.addChild(mc);
            }
            arr.push(tmpArr);
        }
        this._cellArr = arr;
        document.addEventListener('keydown', function (e) { _this.keydown(e); });
    };
    MapEditor.prototype.keydown = function (e) {
        if (e.keyCode == 13) {
            this.generateMapData();
        }
    };
    MapEditor.prototype.generateMapData = function () {
        var data = [];
        var kihei = [];
        var kaiju = [];
        var nodesData = {};
        for (var r = 0; r < this.ROW; r++) {
            var tmpData = [];
            for (var c = 0; c < this.COLUMN; c++) {
                var cell = this._cellArr[r][c];
                var t = cell.getType();
                tmpData.push(t);
                if (t == MapCellType.AIR_KAIJU || t == MapCellType.LAND_KAIJU) {
                    kaiju.push([r, c]);
                }
                else if (t == MapCellType.LAND_KIHEI || t == MapCellType.AIR_KIHEI) {
                    kihei.push([r, c]);
                }
                if (cell.isLand()) {
                    var nodes = [];
                    if (this._cellArr[r - 1] && this._cellArr[r - 1][c].isLand())
                        nodes.push([r - 1, c]);
                    if (this._cellArr[r + 1] && this._cellArr[r + 1][c].isLand())
                        nodes.push([r + 1, c]);
                    if (this._cellArr[r][c - 1] && this._cellArr[r][c - 1].isLand())
                        nodes.push([r, c - 1]);
                    if (this._cellArr[r][c + 1] && this._cellArr[r][c + 1].isLand())
                        nodes.push([r, c + 1]);
                    nodesData[r + '_' + c] = nodes;
                }
            }
            data.push(tmpData);
        }
        var obj = {
            size: [this.ROW, this.COLUMN],
            data: data,
            nodes: nodesData,
            kihei: kihei,
            kaiju: kaiju
        };
        console.log(JSON.stringify(obj));
    };
    return MapEditor;
}(egret.Sprite));
__reflect(MapEditor.prototype, "MapEditor");
