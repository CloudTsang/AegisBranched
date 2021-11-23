/**空中杂兵 */
class Mosquito extends Kaiju{
	private _sin:number;
	private _cos:number;
	public constructor() {
		super();
		this.air = true;
		this.maxHP = 50;
		this.speed = 350
	}

	protected drawKaiju(){
		const size = this.mapCell.getSize();
		let sp = new egret.Sprite();			
		sp.graphics.beginFill(0xFF0000)
		sp.graphics.drawCircle(0,0, size/3)
		sp.graphics.endFill();
		return sp
	}

	public startMove(route:MapCell[]){		
		this.route = route;		

		const cell = route[route.length-1];
		const dis = egret.Point.distance(new egret.Point(this.x, this.y), new egret.Point(cell.x, cell.y));
		this._sin = (cell.y - this.y + 0.01)/dis
		this._cos = (cell.x - this.x + 0.01)/dis		
	}

	/**按照移动路径前进一单位，正在播放移动动画时直接返回 */
	public move(){
		if(this.moveTween){
			return;
		}
		const d = this.mapCell.getSize();
		const newx = this.x + this._cos*d;
		const newy = this.y + this._sin*d;
		this.moveTween = egret.Tween.get(this)
		.to({
			x:newx,
			y:newy
		}, this.speed)
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
			this.route = null	
			this.moveTween = null;
			this.arrived = true;
			this.dispatchEvent(new egret.Event(PlayEvent.KAIJU_EXIT));
			return;
		}
		this.moveTween = null;
	}
}