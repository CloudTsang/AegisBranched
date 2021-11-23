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
		this.attackRange = 	30;		
		this.damageRange = 5;
		this.air = true
		this.rangeType = RangeType.CIRCLE;
		this.maxCD = egret.MainContext.instance.stage.frameRate * 3
	}

	public drawKihei():egret.Sprite{
		const size = this.mapCell.getSize();
		let sp = new egret.Sprite();			
		sp.graphics.beginFill(0x00FF00)
		sp.graphics.drawRect(0,0,size,size)
		sp.graphics.endFill();
		return sp
	}


	//重写移动方法实现直线飞行到目的地的效果

	/**设置移动路径 */
	public startMove(route:MapCell[], targetPosition:egret.Point){		
		this._route = route;
		this._targetPosition = targetPosition;		

		const cell = route[route.length-1];
		const dis = egret.Point.distance(new egret.Point(this.x, this.y), new egret.Point(cell.x, cell.y));
		this._sin = (cell.y - this.y + 0.01)/dis
		this._cos = (cell.x - this.x + 0.01)/dis
		
	}

	/**按照移动路径前进一单位，正在播放移动动画时直接返回 */
	public move(){
		if(this._targetPosition == null || this._moveTween){
			return;
		}
		const d = this.mapCell.getSize();
		const newx = this.x + this._cos*d;
		const newy = this.y + this._sin*d;
		this._moveTween = egret.Tween.get(this)
		.to({
			x:newx,
			y:newy
		}, 100)
		.call(this.onMoveStep, this)
	}

	protected onMoveStep(){	
		if(this._route == null){
			return;
		}
		const cell = this._route[this._route.length-1];
		const x = Math.floor(this.x/cell.getSize());
		const y = Math.floor(this.y/cell.getSize());	
		const cellArr = World.getIns().cellArr;
		this.mapCell = cellArr[y][x]	
		if(this.mapCell == cell){
			this._moveTween = egret.Tween.get(this)
			.to({
				x:this._targetPosition.x,
				y:this._targetPosition.y
			}, 50)
			this._targetPosition = null;
			this._route = null	
			this._moveTween = null;
			return;
		}
		this._moveTween = null;
	}

	public action(){
		if(!this.actionTarget){
			return;
		}

		let tw = egret.Tween.get(this)
		.to({			
			x:this.actionTarget.x,
			y:this.actionTarget.y
		}, 1000)
		//播放攻击动画
		.call(()=>{
			this.mapCell = this.actionTarget
			this.actionTarget = null;			
			this.cd = 0;
			this.dispatchEvent(new egret.Event(PlayEvent.KIHEI_ACTION_FINISH));
		}, this)
	}
}