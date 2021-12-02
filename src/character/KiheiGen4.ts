/**
 * 第四代机兵
 * 空中移动
 * 无视地形的大范围移动后原型大范围内敌人低伤害，cd中
 * HP低
 */
class KiheiGen4 extends Kihei{	
	
	private _sin:number;
	private _cos:number;
	
	public constructor() {
		super();
		this.maxHP = 250;				
		this.air = true;		
		this.skills = [
			new MultMissile(this),
		]
	}

	public drawKihei():egret.DisplayObject{
		const size = this.mapCell.getSize();
		let bmp = new egret.Bitmap();		
		bmp.texture = RES.getRes('character_json#gen4');
		const scale = bmp.width/bmp.height
		// bmp.width = size*2;
		bmp.height = size*1.5;
		bmp.width = bmp.height * scale
		bmp.x = 0
		bmp.y = 0;
		if(!this.sp){
			this.addChild(bmp);				
		}
		return bmp
	}


	//重写移动方法实现直线飞行到目的地的效果

	/**设置移动路径 */
	public startMove(route:MapCell[], targetPosition:egret.Point){		
		this.route = route;
		this.targetPosition = targetPosition;		

		const cell = route[route.length-1];
		const dis = egret.Point.distance(new egret.Point(this.x, this.y), new egret.Point(cell.x, cell.y));
		this._sin = (cell.y - this.y + 0.01)/dis
		this._cos = (cell.x - this.x + 0.01)/dis		
	}

	/**按照移动路径前进一单位，正在播放移动动画时直接返回 */
	public move(){
		if(this.targetPosition == null || this.moveTween){
			return;
		}
		const d = this.mapCell.getSize();
		const newx = this.x + this._cos*d;
		const newy = this.y + this._sin*d;
		this.moveTween = egret.Tween.get(this)
		.to({
			x:newx,
			y:newy
		}, 100)
		.call(this.onMoveStep, this)
	}

	protected onMoveStep(){	
		if(this.route == null){
			return;
		}
		const cell = this.route[this.route.length-1];
		const x = Math.floor(this.x/cell.getSize());
		const y = Math.floor(this.y/cell.getSize());	
		const cellArr = World.getIns().cellArr;
		this.mapCell = cellArr[y][x]	
		if(this.mapCell == cell){
			this.moveTween = egret.Tween.get(this)
			.to({
				x:this.targetPosition.x,
				y:this.targetPosition.y
			}, 50)
			this.targetPosition = null;
			this.route = null	
			this.moveTween = null;
			return;
		}
		this.moveTween = null;
	}	
}