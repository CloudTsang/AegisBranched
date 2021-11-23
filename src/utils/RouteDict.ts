/**缓存寻路路径，主要存放怪兽的移动路径 */
class RouteDict {
	private _dict:any = {};
	public constructor() {

	}

	public addRoute(x1:number, y1:number, x2:number, y2:number, route:MapCell[]){
		const key = `${x1}_${y1}_${x2}_${y2}`
		let arr = []
		for(let cell of route){
			arr.push([cell.cellX, cell.cellY]);
		}
		this._dict[key] == arr;
	}

	/**获取路径
	 * 
	 * @param cache 需要寻路的场合是否缓存结果，机兵的移动路劲不缓存
	 */
	public checkRoute(x1:number, y1:number, x2:number, y2:number, cache:boolean=false):{route:MapCell[], map:number[][]}{
		const key = `${x1}_${y1}_${x2}_${y2}`
		if(this._dict[key]){
			console.log('已缓存当前路径')
			return this._dict[key]
		}
		const cellArr = World.getIns().cellArr;
		const c1 = cellArr[y1][x1]
		const c2 = cellArr[y2][x2]
		const route = World.getIns().findPath(c1,c2,null)
		if(cache){
			this._dict[key] == route;
		}
		return route;		
	}

	/**获取路径
	 * 
	 * @param cache 需要寻路的场合是否缓存结果，机兵的移动路径不缓存
	 */
	public checkRoute2(mc1:MapCell, mc2:MapCell, cache:boolean=false):{route:MapCell[], map:number[][]}{
		const key = `${mc1.cellX}_${mc1.cellY}_${mc2.cellX}_${mc2.cellY}`
		if(this._dict[key]){
			console.log('已缓存当前路径')
			return this._dict[key]
		}	
		const route = World.getIns().findPath(mc1,mc2,null)
		if(cache){
			this._dict[key] == route;
		}
		return route;		
	}
}