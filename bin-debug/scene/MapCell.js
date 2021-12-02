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
/**地块单元数据 */
var MapCell = (function (_super) {
    __extends(MapCell, _super);
    /**
     * @param size 地块尺寸
     * @param ty 地块类型
     * @param isEditor 是否使用编辑器，是的场合将标记出击点
     */
    function MapCell(cx, cy, size, ty, isEditor, nodedata) {
        if (ty === void 0) { ty = MapCellType.AIR; }
        if (isEditor === void 0) { isEditor = false; }
        if (nodedata === void 0) { nodedata = null; }
        var _this = _super.call(this) || this;
        _this._type = MapCellType.AIR;
        _this.cellX = cx;
        _this.cellY = cy;
        _this._size = size;
        _this._type = ty;
        _this._isEditor = isEditor;
        _this.nodes = nodedata;
        _this.touchEnabled = true;
        var txt = new egret.TextField();
        txt.width = size;
        txt.height = size;
        txt.size = size;
        _this.addChild(txt);
        _this._label = txt;
        _this.refreshSprite();
        if (isEditor) {
            _this.addEventListener('touchTap', _this.switchType, _this);
        }
        else {
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.getHitPoint, _this);
        }
        return _this;
    }
    MapCell.prototype.switchType = function (e) {
        if (e === void 0) { e = null; }
        var t = this._type;
        if (t == 5) {
            t = MapCellType.AIR;
        }
        else {
            t = t + 1;
        }
        this._type = t;
        this.refreshSprite();
    };
    MapCell.prototype.getType = function () {
        return this._type;
    };
    /**是否地面通行 */
    MapCell.prototype.isLand = function () {
        return this._type == MapCellType.LAND || this._type == MapCellType.LAND_KIHEI || this._type == MapCellType.LAND_KAIJU;
    };
    /**地块单位长度 */
    MapCell.prototype.getSize = function () {
        return this._size;
    };
    MapCell.prototype.refreshSprite = function () {
        this.graphics.clear();
        this._label.visible = false;
        if (this._isEditor) {
            switch (this._type) {
                case MapCellType.AIR:
                    this.graphics.beginFill(0x000000);
                    this.graphics.lineStyle(2, 0x32CD32);
                    break;
                case MapCellType.LAND:
                    this.graphics.beginFill(0x759d4d);
                    break;
                case MapCellType.LAND_KAIJU:
                    this.graphics.beginFill(0xa82931);
                    this._label.text = '陆';
                    this._label.visible = true;
                    break;
                case MapCellType.AIR_KAIJU:
                    this.graphics.beginFill(0xa82931);
                    this._label.text = '空';
                    this._label.visible = true;
                    break;
                case MapCellType.LAND_KIHEI:
                    this.graphics.beginFill(0x34a1e5);
                    this._label.text = '陆';
                    this._label.visible = true;
                    break;
                case MapCellType.AIR_KIHEI:
                    this.graphics.beginFill(0x34a1e5);
                    this._label.text = '空';
                    this._label.visible = true;
                    break;
            }
        }
        else {
            switch (this._type) {
                case MapCellType.AIR:
                case MapCellType.AIR_KAIJU:
                case MapCellType.AIR_KIHEI:
                    this.graphics.beginFill(0x000000);
                    this.graphics.lineStyle(2, 0x32CD32);
                    break;
                default:
                    this.graphics.beginFill(0x759d4d);
                    break;
            }
        }
        this.graphics.drawRect(0, 0, this._size, this._size);
        this.graphics.endFill();
        this.anchorOffsetX = this._size / 2;
        this.anchorOffsetY = this._size / 2;
    };
    /**获取碰撞检测点 */
    MapCell.prototype.getHitPoint = function (e) {
        if (e === void 0) { e = null; }
        if (!this._hitPoint) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.getHitPoint, this);
            var x = this.x;
            var y = this.y;
            var r = this._size / 2;
            this._hitPoint = [
                new egret.Point(x - r, y - r), new egret.Point(x, y - r), new egret.Point(x + r, y - r),
                new egret.Point(x - r, y), new egret.Point(x + r, y),
                new egret.Point(x - r, y + r), new egret.Point(x, y + r), new egret.Point(x + r, y + r)
            ];
        }
        return this._hitPoint;
    };
    MapCell.prototype.checkInRange = function (damageRange) {
        var pts = this.getHitPoint();
        for (var _i = 0, pts_1 = pts; _i < pts_1.length; _i++) {
            var pt = pts_1[_i];
            if (damageRange.hitTestPoint(pt.x, pt.y)) {
                return true;
            }
        }
        return false;
    };
    return MapCell;
}(egret.Sprite));
__reflect(MapCell.prototype, "MapCell");
