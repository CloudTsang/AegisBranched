/**地图数据接口 */
interface IMapData{
	/**长宽单位数 */
	size:number[]
	/** 地块类型数组*/
	data:number[][]
	/**节点数组 */
	nodes:any
	/**机兵出击点 */
	kihei:number[][]
	/**怪兽出击点 */
	kaiju:number[][]


}