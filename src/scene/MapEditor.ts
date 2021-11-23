class MapEditor extends egret.Sprite{
	private readonly ROW:number = 20;
	private readonly COLUMN:number = 12;	
	private _stage:egret.Stage = egret.MainContext.instance.stage;

	private _cellSize:number;
	private _cellArr:MapCell[][];

	
	public constructor() {
		super();
		let stage = this._stage;
		this._cellSize = Math.floor(stage.stageWidth / this.COLUMN);

		this.x = 0;
		this.y = 0;				
		this.graphics.beginFill(0x000000);
		this.graphics.drawRect(0,0,stage.stageWidth,this._cellSize * this.ROW);
		this.graphics.endFill();
		this.touchEnabled = true;
		
	}

	public newMap(){
		let arr:MapCell[][] = []
		const cz = this._cellSize
		for(let r=0; r<this.ROW; r++){
			let tmpArr:MapCell[] = [];
			for(let c=0;c<this.COLUMN; c++){
				let mc = new MapCell(c, r, cz, MapCellType.AIR, true);
				mc.x = c * cz + cz/2;
				mc.y = r * cz + cz/2;
				tmpArr.push(mc);
				this.addChild(mc);
			}
			arr.push(tmpArr)
		}	
		this._cellArr = arr;			

		document.addEventListener('keydown', (e)=>{this.keydown(e)});
	}

	public loadMap(name:string){
		let jsonData = RES.getRes(name+'_json')
		if(jsonData==null){
			return 
		}
		let arr:MapCell[][] = []
		let mapData:number[][] = jsonData.data
		const cz = this._cellSize;
		for(let r=0; r<this.ROW; r++){
			let tmpArr:MapCell[] = [];
			for(let c=0;c<this.COLUMN; c++){
				let mc = new MapCell(c, r, cz, mapData[r][c], true);
				mc.x = c * cz + cz/2;
				mc.y = r * cz + cz/2;
				tmpArr.push(mc);
				this.addChild(mc);
			}
			arr.push(tmpArr)
		}
		this._cellArr = arr;			
		document.addEventListener('keydown', (e)=>{this.keydown(e)});
	}

	private keydown(e:any){
		if(e.keyCode == 13){
			this.generateMapData();
		}
	}

	public generateMapData(){	
		let data:MapCellType[][] = []
		let kihei:number[][] = []
		let kaiju:number[][] = []
		let nodesData:any = {}
		for(let r=0; r<this.ROW; r++){			
			let tmpData:MapCellType[] = []
			for(let c=0;c<this.COLUMN; c++){
				let cell:MapCell = this._cellArr[r][c];
				let t = cell.getType();
				tmpData.push(t);	
				if(t == MapCellType.AIR_KAIJU || t == MapCellType.LAND_KAIJU){
					kaiju.push([r,c])
				}else if(t == MapCellType.LAND_KIHEI || t == MapCellType.AIR_KIHEI){
					kihei.push([r,c])
				}
				if(cell.isLand()){
					let nodes:number[][] = []
					if(this._cellArr[r-1] && this._cellArr[r-1][c].isLand()) nodes.push([r-1,c])
					if(this._cellArr[r+1] && this._cellArr[r+1][c].isLand()) nodes.push([r+1,c])
					if(this._cellArr[r][c-1] && this._cellArr[r][c-1].isLand()) nodes.push([r,c-1])
					if(this._cellArr[r][c+1] && this._cellArr[r][c+1].isLand()) nodes.push([r,c+1])				
					nodesData[r+'_'+c] = nodes;
				}								
			}
			data.push(tmpData)			
		}	
		let obj = {
			size:[this.ROW, this.COLUMN],
			data:data,
			nodes:nodesData,
			kihei:kihei,
			kaiju:kaiju
		}
		console.log(JSON.stringify(obj));
	}
}