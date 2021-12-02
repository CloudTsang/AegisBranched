class World {
    private static _ins:World;
	public cellArr:MapCell[][];

	/** 地面怪兽得分点（空中怪兽为地图最下一行全部）*/
	private kaijuExit:MapCell[];
	/**空中怪兽刷新点 */
	private kaijuEntryAir:MapCell[];
	/**地面怪兽刷新点 */
	private kaijuEntryLand:MapCell[];
	
    public static getIns():World{
        if(!World._ins){
            World._ins = new World();
        }
        return World._ins
		
    }
    constructor(){

    }
	public dipose(){

	}

    public initMap(mapData:number[][], mapSize:number[], nodeData:any, cellSize:number, kaiju:number[][]){			
		let cellArr:MapCell[][] = []
		let land:MapCell[] = [];		
		for(let r=0; r<mapSize[0]; r++){
			let tmpArr:MapCell[] = [];
			for(let c=0;c<mapSize[1]; c++){
				let mc = new MapCell(c, r, cellSize, mapData[r][c], false, nodeData[r+'_'+c]);
				mc.x = c * cellSize + cellSize/2;
				mc.y = r * cellSize + cellSize/2;
				tmpArr.push(mc);
				if(r == mapSize[0]-1 && mc.isLand()){
					land.push(mc);
				}
			}
			cellArr.push(tmpArr)			
		}	
		this.cellArr = cellArr	
		this.kaijuExit = land;

		let kaijuA:MapCell[] = [];
		let kaijuL:MapCell[] = [];
		for(let tmp of kaiju){
			const c = cellArr[tmp[0]][tmp[1]]
			if(c.isLand()){
				kaijuL.push(c)
			}else{
				kaijuA.push(c)
			}			
		}
		this.kaijuEntryLand = kaijuL
		this.kaijuEntryAir = kaijuA

	}

	/**怪兽得分的目标点（最下一行地块） */
	public getKaijuExit(){
		return this.kaijuExit
	}

	/**随机获取一个刷新点 */
	public randomEntry(air:boolean):MapCell{
		let cellArr:MapCell[];
		if(air){
			cellArr = this.kaijuEntryAir;
		}else{
			cellArr = this.kaijuEntryLand;			
		}
		return cellArr[Math.floor(Math.random()*cellArr.length)]
	}

	public randomExit(air:boolean):MapCell{
		let cellArr:MapCell[]
		if(air){
			cellArr = this.cellArr[this.cellArr.length-1]
		}else{
			cellArr = this.kaijuExit
		}
		// return cellArr[0]
		return cellArr[Math.floor(Math.random()*cellArr.length)]
	}

	/**地面单位移动路径查找*/
	public findPath(start:MapCell, target:MapCell, map:number[][]=null):{route:MapCell[], map:number[][]}{						
		if(!map){
			map = []	
			for(let r of this.cellArr){
				let tmpArr = [];
				for(let c of r){
					tmpArr.push(0)
				}
				map.push(tmpArr);
			}
			map[start.cellY][start.cellX] = 1;					
		}
		let nextNodes:MapCell[] = []		
		for(let node of start.nodes){					
			if(map[node[0]][node[1]] == 1){
				//已计算过该节点
				continue
			}			
			if(node[1] == target.cellX && node[0] == target.cellY){
				//到达目的节点
				return {route:[start].concat(...[this.cellArr[node[0]][node[1]]]), map:map};
			}
			map[node[0]][node[1]] = 1;
			nextNodes.push(this.cellArr[node[0]][node[1]]);
		}
		if(nextNodes.length == 0){
			//死路			
			return {route:null, map:map}
		}
		let finalRet = null;	
		let tmpMap = []
		for(let r of map){
			let tmp = []
			for(let c of r){
				tmp.push(c)
			}
			tmpMap.push(tmp)
		}	
		for(let node of nextNodes){
			let ret = this.findPath(node, target, tmpMap)
			if(ret.route){
				if(!finalRet){					
					finalRet = [start].concat(...ret.route);
					map = ret.map;
				}else if(ret.route.length < finalRet.length){
					finalRet = [start].concat(...ret.route);
					map = ret.map
				}
			}
										
		}
		return {route:finalRet, map:map, };
	}
}