var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**移动方式 */
var Movement;
(function (Movement) {
    /**地面 */
    Movement[Movement["LAND"] = 0] = "LAND";
    /**空中 */
    Movement[Movement["AIR"] = 1] = "AIR";
})(Movement || (Movement = {}));
/**地图区块类型 */
var MapCellType = (function () {
    function MapCellType() {
    }
    /**空中 */
    MapCellType.AIR = 0;
    /**地面 */
    MapCellType.LAND = 1;
    /**地面出怪点 */
    MapCellType.LAND_KAIJU = 2;
    /**空中出怪点 */
    MapCellType.AIR_KAIJU = 3;
    /**地面出击点 */
    MapCellType.LAND_KIHEI = 4;
    /**空中出击点 */
    MapCellType.AIR_KIHEI = 5;
    return MapCellType;
}());
__reflect(MapCellType.prototype, "MapCellType");
/**攻击范围类型 */
var RangeType;
(function (RangeType) {
    RangeType[RangeType["CIRCLE"] = 0] = "CIRCLE";
    RangeType[RangeType["FAN"] = 1] = "FAN";
    RangeType[RangeType["LINE"] = 2] = "LINE";
})(RangeType || (RangeType = {}));
/**操作阶段 */
var PlayPhase;
(function (PlayPhase) {
    /**空闲 */
    PlayPhase[PlayPhase["SPARE"] = 0] = "SPARE";
    /**等待确认行动 */
    PlayPhase[PlayPhase["WAIT_CONFIRM"] = 1] = "WAIT_CONFIRM";
    /**机兵攻击中 */
    PlayPhase[PlayPhase["ACTION"] = 2] = "ACTION";
})(PlayPhase || (PlayPhase = {}));
var KiheiSkill;
(function (KiheiSkill) {
    /**跳跃攻击 */
    KiheiSkill[KiheiSkill["JUMP_ATTACK"] = 0] = "JUMP_ATTACK";
    /**电磁炮 */
    KiheiSkill[KiheiSkill["RAIL_GUN"] = 1] = "RAIL_GUN";
    /**导弹 */
    KiheiSkill[KiheiSkill["MISSILE"] = 2] = "MISSILE";
    /**多联导弹 */
    KiheiSkill[KiheiSkill["MULT_MISSILE"] = 3] = "MULT_MISSILE";
})(KiheiSkill || (KiheiSkill = {}));
var PlayEvent = (function () {
    function PlayEvent() {
    }
    PlayEvent.START = 'START';
    PlayEvent.RETRY = 'RETRY';
    PlayEvent.CLEAR = 'CLEAR';
    PlayEvent.GAME_OVER = 'GAME_OVER';
    PlayEvent.KIHEI_ACTION = 'KIHEI_ACTION';
    PlayEvent.KIHEI_ACTION_FINISH = 'KIHEI_ACTION_FINISH';
    PlayEvent.GET_DAMAGE = 'GET_DAMAGE';
    PlayEvent.KAIJU_EXIT = 'KAIJU_EXIT';
    PlayEvent.KAIJU_DESTROYED = 'KAIJU_DESTROYED';
    return PlayEvent;
}());
__reflect(PlayEvent.prototype, "PlayEvent");
