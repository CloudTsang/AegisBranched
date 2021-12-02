/**地块单元数据 */
class MapCell extends egret.Sprite{
	private _type:MapCellType = MapCellType.AIR;
	private _size:number;	
	private _label:egret.TextField;
	private _isEditor:boolean;
	public nodes:number[][]
	public cellX:number;
	public cellY:number;
	private _hitPoint:egret.Point[]
	/**
	 * @param size 地块尺寸
	 * @param ty 地块类型
	 * @param isEditor 是否使用编辑器，是的场合将标记出击点
	 */
	constructor(cx:number, cy:number, size:number, ty:MapCellType=MapCellType.AIR, isEditor:boolean=false, nodedata:number[][]=null){
		super();
		this.cellX = cx;
		this.cellY = cy;
		this._size = size;
		this._type = ty;
		this._isEditor = isEditor;
		this.nodes = nodedata
		this.touchEnabled = true
		let txt = new egret.TextField();
		txt.width = size;
		txt.height = size;
		txt.size = size;
		this.addChild(txt);
		this._label = txt;
		this.refreshSprite();
		if(isEditor){
			this.addEventListener('touchTap', this.switchType, this);
		}else{
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.getHitPoint, this)
		}	
	}

	public switchType(e:any=null){
		let t = this._type 
		if(t == 5){
			t = MapCellType.AIR;
		}else{
			t = (t as number) + 1
		}		
		this._type = t;
		this.refreshSprite();
	}

	public getType(){
		return this._type
	}

	/**是否地面通行 */
	public isLand(){
		return this._type == MapCellType.LAND || this._type == MapCellType.LAND_KIHEI || this._type == MapCellType.LAND_KAIJU
	}

/**地块单位长度 */
	public getSize(){
		return this._size;
	}

	private refreshSprite(){
		this.graphics.clear()
		this._label.visible = false;
		if(this._isEditor){
			switch(this._type){
				case MapCellType.AIR:
					this.graphics.beginFill(0x000000);
					this.graphics.lineStyle(2, 0x32CD32);
					break
				case MapCellType.LAND:
					this.graphics.beginFill(0x759d4d);
					break;
				case MapCellType.LAND_KAIJU:
					this.graphics.beginFill(0xa82931);
					this._label.text = '陆'
					this._label.visible = true;
					break;
				case MapCellType.AIR_KAIJU:			
					this.graphics.beginFill(0xa82931);				
					this._label.text = '空'
					this._label.visible = true;
					break;
				case MapCellType.LAND_KIHEI:
					this.graphics.beginFill(0x34a1e5);
					this._label.text = '陆'
					this._label.visible = true;
					break;
				case MapCellType.AIR_KIHEI:
					this.graphics.beginFill(0x34a1e5);
					this._label.text = '空'
					this._label.visible = true;
					break;
			}
		}else{
			switch(this._type){
				case MapCellType.AIR:
				case MapCellType.AIR_KAIJU:
				case MapCellType.AIR_KIHEI:
					this.graphics.beginFill(0x000000, 0.5);
					this.graphics.lineStyle(2, 0x32CD32);
					break
				default:
					this.graphics.beginFill(0x00FA9A);
					break;
			}
		}	
		this.graphics.drawRect(0,0,this._size,this._size)		
		this.graphics.endFill();		
		this.anchorOffsetX = this._size/2;
		this.anchorOffsetY = this._size/2;
		
	}

	/**获取碰撞检测点 */
	public getHitPoint(e:any=null):egret.Point[]{
		if(!this._hitPoint){
			this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.getHitPoint, this)
			const x = this.x;
			const y = this.y;
			const r = this._size/2;
			this._hitPoint = [
				new egret.Point(x-r, y-r), new egret.Point(x, y-r), new egret.Point(x+r, y-r),
				new egret.Point(x-r, y),                          	new egret.Point(x+r, y),
				new egret.Point(x-r, y+r), new egret.Point(x, y+r), new egret.Point(x+r, y+r)
			]
		}
		return this._hitPoint
	}

	public checkInRange(damageRange:egret.Sprite):boolean{
		let pts = this.getHitPoint();
		for(let pt of pts){
			if(damageRange.hitTestPoint(pt.x, pt.y)){
				return true
			}
		}
		return false;
	}
}
