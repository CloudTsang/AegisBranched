/**移动方式 */
enum Movement{	
	/**地面 */
	LAND,
	/**空中 */
	AIR,
}

/**地图区块类型 */
class MapCellType{
	/**空中 */
	public static readonly AIR = 0
	/**地面 */
	public static readonly LAND = 1	
	/**地面出怪点 */
	public static readonly LAND_KAIJU = 2
	/**空中出怪点 */
	public static readonly AIR_KAIJU = 3
	/**地面出击点 */
	public static readonly LAND_KIHEI = 4
	/**空中出击点 */
	public static readonly AIR_KIHEI = 5
}

/**攻击范围类型 */
enum RangeType{
	CIRCLE,
	FAN,
	LINE
}

/**操作阶段 */
enum PlayPhase{
	/**空闲 */
	SPARE,
	/**等待确认行动 */
	WAIT_CONFIRM,
	/**机兵攻击中 */
	ACTION,
}

enum KiheiSkill{
	/**跳跃攻击 */
	JUMP_ATTACK,
	/**电磁炮 */
	RAIL_GUN,
	/**导弹 */
	MISSILE,
	/**多联导弹 */
	MULT_MISSILE,

}

class PlayEvent{
	public static readonly START = 'START';
    public static readonly RETRY = 'RETRY';
    public static readonly CLEAR = 'CLEAR';
    public static readonly GAME_OVER = 'GAME_OVER';

	/**机兵开始行动 */
	public static readonly KIHEI_ACTION = 'KIHEI_ACTION';
	/**机兵已行动（伤害计算阶段） */
	public static readonly KIHEI_ACTION_DID = 'KIHEI_ACTION_DID';
	/**机兵行动结束（怪兽爆炸阶段） */
	public static readonly KIHEI_ACTION_FINISH = 'KIHEI_ACTION_FINISH';

	public static readonly GET_DAMAGE = 'GET_DAMAGE'

	public static readonly KAIJU_EXIT = 'KAIJU_EXIT'
	public static readonly KAIJU_DESTROYED = 'KAIJU_DESTROYED'

	public static readonly AEGIS_EMP = 'AEGIS_EMP';
	public static readonly AEGIS_MAINTAIN = 'AEGIS_MAINTAIN';
	public static readonly AEGIS_EMP_DID = 'AEGIS_EMP_DID';
	public static readonly AEGIS_EMP_FINISH = 'AEGIS_EMP_FINISH';
	public static readonly AEGIS_MAINTAIN_FINISH = 'AEGIS_MAINTAIN_FINISH';
	public static readonly AEGIS_DAMAGE = 'AEGIS_DAMAGE';

	public static readonly STATUS_INITED = 'STATUS_INITED';
}
