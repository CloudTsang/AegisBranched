/**
 * 第一代机兵
 * 地面移动
 * 无视地形的小范围跳跃后圆形小范围内地面敌人中伤害（TODO：击退效果），cd快
 * HP高
 */
class KiheiGen1 extends Kihei{	
	/**攻击动作Tween，跳起砸地 */
	private _actionTween:egret.Tween;
	/**对空中地块发动攻击时回到最近的地面地块 */
	private _backCell:MapCell;
	public constructor() {
		super();
		// this.cd = 0;
		this.HP = 500
		this.maxHP = 500;		
		this.attackRange = 	4;
		this.damageRange = 2;
		this.atk = 70
		this.rangeType = RangeType.CIRCLE;
		this.maxCD = egret.MainContext.instance.stage.frameRate * 2
	}

	public drawKihei():egret.Sprite{
		const size = this.mapCell.getSize();
		let sp = new egret.Sprite();			
		sp.graphics.beginFill(0xFFFFFF)
		sp.graphics.drawRect(0,0,size,size)
		sp.graphics.endFill();
		return sp
	}
	
	public showDamageRange(x:number, y:number, cellArr:MapCell[][]){
		if(x == -1 || y == 1){
			this.rangeSp.showDamageRange(-1,-1) 
			return;
		}
		const thisPoint = new egret.Point(this.x, this.y)
		const size = this.mapCell.getSize();
		const r = size * this.attackRange;	
		const dis = egret.Point.distance(new egret.Point(x, y), new egret.Point(this.x, this.y));		
		if(dis > r){
			const sin = (y-this.y+0.1) / dis;
			const cos = (x-this.x+0.1) / dis;
			y = this.y + (sin*r);
			x = this.x + (cos*r);		
		}		
		let ry = Math.floor(y / size);
		let cx = Math.floor(x / size);
		this.actionTarget = cellArr[ry][cx];
		let curCell = cellArr[ry][cx];

		if(!curCell.isLand()){			
			curCell = this.getClosetLandCell(cx, ry, cellArr);
		}
		
		this.rangeSp.showDamageRange(x,y) 		
		this._backCell = curCell;
	}

	/**跳到非地面格时寻找最近一格地面设为_backCell*/
	private getClosetLandCell(x:number, y:number, cellArr:MapCell[][]):MapCell{
		const mapH = cellArr.length;
		const mapW = cellArr[0].length;
		let round = 1

		while(true){
			if(y-round>=0){
				//最上一行
				const tmpy = y-round;
				for(let i=-round; i<round+1;i++){
					const tmpx = x+i
					if(tmpx<0 || tmpx>=mapW){
						continue
					}
					if(cellArr[tmpy][tmpx].isLand()){
						return cellArr[tmpy][tmpx]
					}
				}
			}
			if(y+round<mapH){
				//最下一行
				const tmpy = y+round;
				for(let i=-round; i<round+1;i++){
					const tmpx = x+i
					if(tmpx<0 || tmpx>=mapW){
						continue
					}
					if(cellArr[tmpy][tmpx].isLand()){
						return cellArr[tmpy][tmpx]
					}
				}
			}
			if(x-round>=0){
				//最左一列
				const tmpx = x-round;
				for(let i=-round; i<round+1;i++){
					const tmpy = y+i
					if(tmpy<0 || tmpy>=mapH){
						continue
					}
					if(cellArr[tmpy][tmpx].isLand()){
						return cellArr[tmpy][tmpx]
					}
				}
			}
			if(x+round<mapW){
				//最右一列
				const tmpx = x+round;
				for(let i=-round; i<round+1;i++){
					const tmpy = y+i
					if(tmpy<0 || tmpy>=mapH){
						continue
					}
					if(cellArr[tmpy][tmpx].isLand()){
						return cellArr[tmpy][tmpx]
					}
				}
			}
			round ++;
		}	
	
			
		
	}

	public action(){
		if(!this.actionTarget){
			return;
		}

		let tw = egret.Tween.get(this)
		.to({
			scaleX:1.5,
			scaleY:1.5,
			x:this.x+(this.actionTarget.x-this.x)/2,
			y:this.y+(this.actionTarget.y-this.y)/2
		}, 400)
		.wait(200)
		.to({
			scaleX:1,
			scaleY:1,
			x:this.actionTarget.x,
			y:this.actionTarget.y
		}, 200)
		.wait(500)
		.to({
			scaleX:1,
			scaleY:1,
			x:this._backCell.x,
			y:this._backCell.y
		}, 200)
		.call(()=>{
			this.mapCell = this.actionTarget
			this.actionTarget = null;
			this._actionTween = null;
			this.cd = 0;
			this.dispatchEvent(new egret.Event(PlayEvent.KIHEI_ACTION_FINISH));
		}, this)
	}

	/**检查地块是否在攻击范围内 */
	private checkDistance(cell:MapCell, thisPoint:egret.Point, r:number):boolean{
		return egret.Point.distance(new egret.Point(cell.x, cell.y), thisPoint) <= r
	}
}