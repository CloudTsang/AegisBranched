/**机兵基类
 * 操作方式：
 * 点击：选中机兵，再点击地图移动
 * 拖动：向对应方向发动攻击
*/
class Kihei extends BaseCharacter{
	protected cd:number;
	protected maxCD:number;		

	/**攻击范围单位长度 */
	protected attackRange:number=1;
	/**伤害范围单位长度 */
	protected damageRange:number=1;
	protected rangeType:RangeType;
	protected rangeSp:ActionRange;

	protected _route:MapCell[]
	protected _targetPosition:egret.Point;
	protected _curRouteIndex:number
	protected _moveTween:egret.Tween;

	protected sp:egret.Sprite;
	public actionTarget:MapCell;
	

	
	public constructor() {
		super();		
		this.rangeSp = new ActionRange(this);
	}

	public boot(){
		super.boot();
		let sp = this.drawKihei();
		if(!sp){
			return;
		}	
		this.anchorOffsetX = sp.width/2;
		this.anchorOffsetY = sp.height/2;
		this.addChild(sp);		
		this.sp = sp;

		this.cd = this.maxCD
	}

	/**显示攻击范围 */
	public showAttackRange(v:boolean){	
		this.rangeSp.showAttackRange(v);
	}

	/**
	 * 显示伤害范围
	 * @param x 显示位置，传入-1时不显示
	 * @param y 显示位置，传入-1时不显示
	 * @param cellArr 地块数组
	 */
	public showDamageRange(x:number, y:number, cellArr:MapCell[][]){
		if(x == -1 || y == -1){
			this.rangeSp.showDamageRange(x,y)
			return;
		}
		const size = this.mapCell.getSize()
		if(this.attackRange != -1){			
			const r = size * this.attackRange
			const dis = egret.Point.distance(new egret.Point(x, y), new egret.Point(this.x, this.y));
			if(dis > r){
				//拖动超出攻击范围
				const sin = (y-this.y+0.1) / dis;
				const cos = (x-this.x+0.1) / dis;
				y = this.y + (sin*r);
				x = this.x + (cos*r);				
				const ry = Math.floor(y/size)
				const cx = Math.floor(x/size)
				this.actionTarget = cellArr[ry][cx];	
				this.rangeSp.showDamageRange(x,y) 			
			}else{				
				const ry = Math.floor(y/size)
				const cx = Math.floor(x/size)
				this.actionTarget = cellArr[ry][cx];	
				this.rangeSp.showDamageRange(x,y)			
			}			
		}else{			
			const ry = Math.floor(y/size)
			const cx = Math.floor(x/size)
			this.actionTarget = cellArr[ry][cx];
			this.rangeSp.showDamageRange(x,y)			
		}		
	}

	/**设置移动路径 */
	public startMove(route:MapCell[], targetPosition:egret.Point){		
		this._route = route;
		this._curRouteIndex = 1;	
		this._targetPosition = targetPosition;	
	}

	/**按照移动路径前进一单位，正在播放移动动画时直接返回 */
	public move(){
		if(this._route == null || this._moveTween){
			return;
		}
		let mc:MapCell = this._route[this._curRouteIndex]
		this._moveTween = egret.Tween.get(this)
		.to({
			x:mc.x,
			y:mc.y
		}, 100)
		.call(this.onMoveStep, this)
	}

	protected onMoveStep(){
		this._curRouteIndex ++;
		if(this._curRouteIndex >= this._route.length){
			this._moveTween = egret.Tween.get(this)
			.to({
				x:this._targetPosition.x,
				y:this._targetPosition.y
			}, 50)
			this.mapCell = this._route[this._route.length-1]
			this._moveTween = null;
			this._route = null	
			return;
		}
		this.mapCell = this._route[this._curRouteIndex]
		this._moveTween = null;
	}	

	public drawKihei():egret.Sprite{
		return null
	}	

	/** 是否在cd中*/
	public getAvaliable():boolean{
		return this.cd == this.maxCD;
	}

	public onCD():boolean{
		if(this.cd == this.maxCD){
			return true;
		}
		this.cd ++;
		return this.cd == this.maxCD;
	}

	/** 获取cd进度百分比 */
	public getCDRate():number{
		return this.cd/this.maxCD;
	}	

	public getAttackRange():number{
		return this.attackRange;
	}

	public getDamageRange():number{
		return this.damageRange;
	}

	public getRangeType():RangeType{
		return this.rangeType;
	}
}