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
var StageScene = (function (_super) {
    __extends(StageScene, _super);
    function StageScene() {
        var _this = _super.call(this) || this;
        _this._stage = egret.MainContext.instance.stage;
        /**最多同时存在怪兽数 */
        _this.MAX_KAIJU_NUM = 40;
        /**上次触发拖动事件的次数 */
        _this.lastCalcPoint = 4;
        _this._routeDict = new RouteDict();
        return _this;
    }
    StageScene.prototype.play = function (stageName) {
        var jsonData = RES.getRes(stageName + '_json');
        if (jsonData == null) {
            return;
        }
        console.log('关卡数据：', jsonData);
        this.initMap(jsonData.data, jsonData.size, jsonData.nodes, jsonData.kaiju);
        this.initKihei(jsonData.kihei);
        this.initKaiju();
        this.initUI();
        this._kaijuGenTicker = 0;
        this._kaijuGenInterval = this._stage.frameRate * 0.5;
        this._playPhase = PlayPhase.SPARE;
        this.addEventListener(egret.Event.ENTER_FRAME, this.refreshStage, this);
        this.addEventListener('touchTap', this.onClick, this);
        this.addEventListener('touchBegin', this.onMouseDown, this);
        this.addEventListener('touchMove', this.onMouseMove, this);
        this.addEventListener('touchEnd', this.onMouseUp, this);
        // this.addEventListener('touchReleaseOutside', this.onMouseUp, this)
    };
    StageScene.prototype.initMap = function (mapData, mapSize, nodeData, kaiju) {
        var cellSize = this._stage.stageWidth / mapSize[1];
        World.getIns().initMap(mapData, mapSize, nodeData, cellSize, kaiju);
        var cellArr = World.getIns().cellArr;
        for (var r = 0; r < mapSize[0]; r++) {
            for (var c = 0; c < mapSize[1]; c++) {
                this.addChild(cellArr[r][c]);
            }
        }
        this._cellArr = cellArr;
        this._cellSize = cellSize;
        var landL = new egret.Sprite();
        landL.graphics.drawRect(0, 0, this._stage.stageWidth, this._stage.stageHeight);
        this.addChild(landL);
        this._landLayer = landL;
        var airL = new egret.Sprite();
        airL.graphics.drawRect(0, 0, this._stage.stageWidth, this._stage.stageHeight);
        this.addChild(airL);
        this._airLayer = airL;
    };
    StageScene.prototype.initKihei = function (data) {
        var kiheis = [];
        var cz = this._cellSize;
        if (data[0]) {
            var gen1 = new KiheiGen1();
            var tmpCell = this._cellArr[data[0][0]][data[0][1]];
            gen1.x = tmpCell.x;
            gen1.y = tmpCell.y;
            gen1.mapCell = tmpCell;
            gen1.boot();
            this.addChild(gen1);
            kiheis.push(gen1);
        }
        if (data[1]) {
            var gen2 = new KiheiGen2();
            var tmpCell = this._cellArr[data[1][0]][data[1][1]];
            gen2.x = tmpCell.x;
            gen2.y = tmpCell.y;
            gen2.mapCell = tmpCell;
            gen2.boot();
            this.addChild(gen2);
            kiheis.push(gen2);
        }
        if (data[2]) {
            var gen4 = new KiheiGen4();
            var tmpCell = this._cellArr[data[2][0]][data[2][1]];
            gen4.x = tmpCell.x;
            gen4.y = tmpCell.y;
            gen4.mapCell = tmpCell;
            gen4.boot();
            this.addChild(gen4);
            kiheis.push(gen4);
        }
        if (data[3]) {
            var gen3 = new KiheiGen3();
            var tmpCell = this._cellArr[data[3][0]][data[3][1]];
            gen3.x = tmpCell.x;
            gen3.y = tmpCell.y;
            gen3.mapCell = tmpCell;
            gen3.boot();
            this.addChild(gen3);
            kiheis.push(gen3);
        }
        this._kiheis = kiheis;
    };
    /**生成怪兽， */
    StageScene.prototype.initKaiju = function () {
        this._kaijus = [];
        // for(let i=0; i<this.MAX_KAIJU_NUM/2; i++){
        for (var i = 0; i < 10; i++) {
            this.generateKaiju();
        }
    };
    StageScene.prototype.generateKaiju = function () {
        if (this._kaijus.length >= this.MAX_KAIJU_NUM) {
            return;
        }
        var kaiju = Kaiju.pool.getOne();
        var tmpCell = World.getIns().randomEntry(kaiju.isAir());
        var tmpCell2 = World.getIns().randomExit(kaiju.isAir());
        kaiju.mapCell = tmpCell;
        kaiju.x = tmpCell.x;
        kaiju.y = tmpCell.y;
        if (kaiju.isAir()) {
            kaiju.startMove([tmpCell2]);
        }
        else {
            var r = this._routeDict.checkRoute2(tmpCell, tmpCell2, true);
            kaiju.startMove(r.route);
        }
        kaiju.boot();
        kaiju.addEventListener(PlayEvent.KAIJU_EXIT, this.onKaijuExit, this);
        this._kaijus.push(kaiju);
        if (kaiju.isAir()) {
            this._airLayer.addChild(kaiju);
        }
        else {
            this._landLayer.addChild(kaiju);
        }
    };
    StageScene.prototype.initUI = function () {
        this._actConfirmButton = new ConfirmBtn();
        var stat = [];
        var kiheis = this._kiheis;
        var tmpW = (this._stage.stageWidth - 20) / 4;
        var tmpH = tmpW * 1.2;
        var tmpY = this._stage.stageHeight - tmpH;
        for (var i = 0; i < kiheis.length; i++) {
            var kihei = kiheis[i];
            var s = new Status(kihei);
            stat.push(s);
            s.width = tmpW;
            s.height = tmpH;
            s.y = tmpY;
            s.x = (tmpW + 5) * i;
            this.parent.addChild(s);
        }
        this._kiheiStatus = stat;
    };
    StageScene.prototype.onClick = function (e) {
        if (this._playPhase != PlayPhase.SPARE) {
            return;
        }
        if (e.target instanceof MapCell && this._curSelectedKihei) {
            //选中移动格子
            var mc = e.target;
            var kihei = this._curSelectedKihei;
            if (!mc.isLand() && !kihei.isAir()) {
                console.log("地面单位无法移动到空中");
                this._curSelectedKihei = null;
                this._pause = false;
                return;
            }
            if (kihei.isAir()) {
                kihei.startMove([mc], new egret.Point(e.stageX, e.stageY));
            }
            else {
                var ret = this._routeDict.checkRoute2(kihei.mapCell, mc, false); //World.getIns().findPath(kihei.mapCell, mc)			
                if (ret.route.length > 0) {
                    kihei.startMove(ret.route, new egret.Point(e.stageX, e.stageY));
                }
            }
            this._curSelectedKihei = null;
            this._pause = false;
        }
    };
    StageScene.prototype.onMouseDown = function (e) {
        if (this._playPhase != PlayPhase.SPARE) {
            return;
        }
        if (e.target instanceof Kihei) {
            //选中机兵
            this._curSelectedKihei = e.target;
            this._pause = true;
        }
    };
    StageScene.prototype.onMouseMove = function (e) {
        if (this._playPhase != PlayPhase.SPARE) {
            return;
        }
        if (this.lastCalcPoint % 4 != 0) {
            this.lastCalcPoint++;
            return;
        }
        this.lastCalcPoint = 1;
        if (this._curSelectedKihei) {
            var kihei = this._curSelectedKihei;
            if (this._isAction) {
                kihei.showDamageRange(e.stageX, e.stageY, this._cellArr);
                //检测被瞄准的怪兽，开启闪烁特效	
                for (var _i = 0, _a = this._kaijus; _i < _a.length; _i++) {
                    var kaiju = _a[_i];
                    kaiju.aimed(kihei.checkKaijuInRange(kaiju));
                }
            }
            else if (Math.abs(e.stageX - kihei.x) > this._cellSize / 2 || Math.abs(e.stageY - kihei.y) > this._cellSize / 2) {
                //拖动手势设置机兵攻击
                kihei.showAttackRange(true);
                this._isAction = true;
            }
        }
    };
    StageScene.prototype.onMouseUp = function (e) {
        this.lastCalcPoint = 1;
        if (this._playPhase == PlayPhase.ACTION) {
            //机兵动作中
            return;
        }
        if (this._playPhase == PlayPhase.WAIT_CONFIRM) {
            if (e.target != this._actConfirmButton) {
                //取消行动
                this._curSelectedKihei && this._curSelectedKihei.showDamageRange(-1, -1, null);
                this._actConfirmButton.parent && this._actConfirmButton.parent.removeChild(this._actConfirmButton);
                this._pause = false;
                this._isAction = false;
                this._playPhase = PlayPhase.SPARE;
                this._curSelectedKihei = null;
                return;
            }
            else {
                //确认行动
                this._actConfirmButton.parent && this._actConfirmButton.parent.removeChild(this._actConfirmButton);
                var kihei = this._curSelectedKihei;
                kihei.showDamageRange(-1, -1, this._cellArr);
                kihei.addEventListener(PlayEvent.KIHEI_ACTION_FINISH, this.onKiheiActionFinished, this);
                kihei.action();
                this._playPhase = PlayPhase.ACTION;
                return;
            }
        }
        if (this._curSelectedKihei) {
            var kihei = this._curSelectedKihei;
            kihei.showAttackRange(false);
            if (this._isAction) {
                //机兵选择攻击位置				
                this._playPhase = PlayPhase.WAIT_CONFIRM;
                var tp = kihei.getActionTarget();
                if (tp == null) {
                    this._curSelectedKihei = null;
                    this._pause = false;
                    this._isAction = false;
                    this._playPhase = PlayPhase.SPARE;
                    return;
                }
                var btn = this._actConfirmButton;
                btn.x = (this._stage.stageWidth - btn.measuredWidth) / 2;
                btn.y = (this._stage.stageHeight - btn.measuredHeight) / 2;
                this.addChild(this._actConfirmButton);
            }
        }
    };
    /** 机兵结束攻击回调 */
    StageScene.prototype.onKiheiActionFinished = function (e) {
        this._playPhase = PlayPhase.SPARE;
        this._curSelectedKihei && this._curSelectedKihei.removeEventListener(PlayEvent.KIHEI_ACTION_FINISH, this.onKiheiActionFinished, this);
        this._pause = false;
        this._curSelectedKihei = null;
        this._isAction = false;
    };
    /**怪兽退场回调 */
    StageScene.prototype.onKaijuExit = function (e) {
        var kaiju = e.target;
        kaiju.dispose();
        kaiju.removeEventListener(PlayEvent.KAIJU_EXIT, this.onKaijuExit, this);
        for (var i = 0; i < this._kaijus.length; i++) {
            if (kaiju == this._kaijus[i]) {
                this._kaijus.splice(i, 1);
            }
        }
    };
    StageScene.prototype.refreshStage = function (e) {
        if (e === void 0) { e = null; }
        if (this._pause) {
            return;
        }
        // if(this._kaijuGenTicker == this._kaijuGenInterval){
        // 	this._kaijuGenTicker = 0;
        // 	this.generateKaiju();
        // }
        // this._kaijuGenTicker++;
        for (var _i = 0, _a = this._kiheis; _i < _a.length; _i++) {
            var kihei = _a[_i];
            kihei.move();
            kihei.onCD();
        }
        for (var _b = 0, _c = this._kiheiStatus; _b < _c.length; _b++) {
            var status_1 = _c[_b];
            status_1.refreshCD();
        }
        for (var _d = 0, _e = this._kaijus; _d < _e.length; _d++) {
            var kaiju = _e[_d];
            kaiju.move();
        }
    };
    return StageScene;
}(egret.Sprite));
__reflect(StageScene.prototype, "StageScene");
