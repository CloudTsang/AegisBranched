class World {
    private static _ins:World;
	public cellArr:MapCell[][]
    public static getIns():World{
        if(!World._ins){
            World._ins = new World();
        }
        return World._ins
    }
    constructor(){

    }

    public initMap(mapData:number[][], mapSize:number[], nodeData:any, cellSize:number){			
		let cellArr:MapCell[][] = []
		for(let r=0; r<mapSize[0]; r++){
			let tmpArr:MapCell[] = [];
			for(let c=0;c<mapSize[1]; c++){
				let mc = new MapCell(c, r, cellSize, mapData[r][c], false, nodeData[r+'_'+c]);
				mc.x = c * cellSize + cellSize/2;
				mc.y = r * cellSize + cellSize/2;
				tmpArr.push(mc);				
			}
			cellArr.push(tmpArr)			
		}	
		this.cellArr = cellArr	
	}
}