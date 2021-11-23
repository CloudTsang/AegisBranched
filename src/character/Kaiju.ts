/**怪兽基类 */
class Kaiju extends BaseCharacter implements IPoolObject{
	public activate:boolean
	protected speed:number
	protected route:MapCell[];
	protected curRouteIndex:number

	protected moveTween:egret.Tween;
	protected arrived:boolean
	protected sp:egret.Sprite;
	protected aimTween:egret.Tween;
	public constructor() {
		super()
	}

	public boot(){
		super.boot();
		this.arrived = false;
		this.curRouteIndex = 1
		if(!this.sp){
			let sp = this.drawKaiju();			
			this.anchorOffsetX = sp.width/2;
			this.anchorOffsetY = sp.height/2;
			this.addChild(sp);	
			this.sp = sp;			
		}					
	}

	protected drawKaiju():egret.Sprite{
		return null
	}

	/**设置移动路径 */
	public startMove(route:MapCell[]){		
		this.route = route;
		this.curRouteIndex = 1;	
	}

	public move(){
		if(this.route == null || this.moveTween){
			return;
		}
		const mc:MapCell = this.route[this.curRouteIndex]
		//随机前进坐标防止挤在一起
		let x = mc.x + Math.random()*mc.width;
		let y = mc.y + Math.random()*mc.height;
		if(this.curRouteIndex == this.route.length-1){
			y += mc.getSize();
		}
		this.moveTween = egret.Tween.get(this)
		.to({
			x:x,
			y:y
		}, this.speed)
		.call(this.onMoveStep, this)
	}

	protected onMoveStep(){
		this.curRouteIndex ++;
		if(this.curRouteIndex >= this.route.length){			
			this.mapCell = this.route[this.route.length-1]
			this.moveTween = null;
			this.route = null;
			this.arrived = true;
			this.dispatchEvent(new egret.Event(PlayEvent.KAIJU_EXIT));
			return;
		}
		this.mapCell = this.route[this.curRouteIndex]
		this.moveTween = null;
	}

	/**进入机兵攻击范围的闪烁特效 */
	public aimed(v:boolean){
		if(v){
			if(this.aimTween){
				return;
			}
			let filter:egret.GlowFilter = new egret.GlowFilter(0xFFFFFF, 0.1, 20,20, 20, 1, true, false);			
			this.filters = [filter]
			this.aimTween = egret.Tween.get(filter,{loop:true})
			.to({
				alpha: 0.8
			}, 1000)
			.to({
				alpha: 0.1
			}, 1000)						
		}else{
			this.filters = []
			if(this.aimTween){
				this.aimTween.pause();
				this.aimTween = null
			}
		}
	}

	/**获取开始是否已到达目标点（用于判断KAIJU_EXIT事件的发出是由于被破坏还是到达目标点） */
	public getArrived(){
		return this.arrived
	}

	public dispose(){
		this.filters = []	
		this.parent && this.parent.removeChild(this)
		this.moveTween && this.moveTween.pause();
		this.moveTween = null;
		this.aimTween && this.aimTween.pause();
		this.aimTween = null
		this.route = null;
		this.activate = false;
	}

	public pause(){
		this.moveTween && this.moveTween.pause();
	}

	public resume(){
		this.moveTween && this.moveTween.play();
	}

	public static pool:Pool<Kaiju> = new Pool<Kaiju>(()=>{
		// return new Ant();		
		const air = Math.random()<=0.5
		const ty = false//Math.random()<=0.2
		if(air && ty){
			return new Eagle();
		}
		if(air && !ty){
			return new Mosquito();
		}
		if(!air && ty){
			return new Bull();
		}
		if(!air && !ty){
			return new Ant()
		}
	})	
}