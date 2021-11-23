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

class PlayEvent{
	public static readonly START = 'START';
    public static readonly RETRY = 'RETRY';
    public static readonly CLEAR = 'CLEAR';
    public static readonly GAME_OVER = 'GAME_OVER';

	public static readonly KIHEI_ACTION = 'KIHEI_ACTION';
	public static readonly KIHEI_ACTION_FINISH = 'KIHEI_ACTION_FINISH';

	public static readonly GET_DAMAGE = 'GET_DAMAGE'

	public static readonly KAIJU_EXIT = 'KAIJU_EXIT'
	public static readonly KAIJU_DESTROYED = 'KAIJU_DESTROYED'
}
