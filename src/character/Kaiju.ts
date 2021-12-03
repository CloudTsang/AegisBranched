/**怪兽基类 */
class Kaiju extends BaseCharacter implements IPoolObject{
	public activate:boolean
	protected speed:number
	protected route:MapCell[];
	protected curRouteIndex:number

	protected moveTween:egret.Tween;
	protected arrived:boolean
	protected sp:egret.DisplayObject;

	protected hpBar:eui.ProgressBar

	/**测试用碰撞区域显示对象 */
	private _collisionArea:egret.Shape
	/**怪兽自带一层红色边滤镜 */
	private redFilter:egret.Filter;
	/**空中怪兽的阴影滤镜 */
	private shadowFilter:egret.Filter;

	//滤镜导致this.width/height改变？提前保存尺寸
	protected _w:number;
	protected _h:number;

	private _blastPartical:particle.GravityParticleSystem;

	protected _stun:boolean=false
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
			this._w = this.width;
			this._h = this.height;		
		}	

		// this.x = this.mapCell.x - this.anchorOffsetX;
		// this.y = this.mapCell.y - this.anchorOffsetY;
		this.x = this.mapCell.x 
		this.y = this.mapCell.y 
		// this.x = 0;
		// this.y = 0;
		this.createFilter();				
	}

	protected drawKaiju():egret.DisplayObject{
		return null
	}

	/**设置移动路径 */
	public startMove(route:MapCell[]){		
		this.route = route;
		this.curRouteIndex = 1;	
		
		// for(let mc of route){
		// 	console.log(mc.cellX, mc.cellY, mc.x, mc.y, mc.getSize())
		// }
	}

	public move(){
		if(this.route == null || this.moveTween || this._stun){
			return;
		}
		
		const mc:MapCell = this.route[this.curRouteIndex]
		//随机前进坐标防止挤在一起
		let x = mc.x + Math.random()*mc.width - mc.width/2 - this.anchorOffsetX;
		let y = mc.y + Math.random()*mc.height - mc.height/2 -this.anchorOffsetY;
		if(this.curRouteIndex == this.route.length-1){
			y += mc.getSize();
		}
		this.moveTween = egret.Tween.get(this)
		.to({
			x:x+this.anchorOffsetX,
			y:y+this.anchorOffsetY
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
			// if(this.aimTween){
			// 	return;
			// }
			let filter:egret.GlowFilter = KaijuFilters.getInstance().aimFilter;//new egret.GlowFilter(0xFFFFFF, 0.1, 20,20, 25, 1, true, false);
			if(this.air && !this.stun){
				this.filters = [this.redFilter, this.shadowFilter, filter]
			}else{
				this.filters = [this.redFilter, filter]
			}			
								
		}else{
			if(this.air && !this._stun){
				this.filters = [this.redFilter, this.shadowFilter]
			}else{
				this.filters = [this.redFilter]
			}		
		}
	}

	/**获取开始是否已到达目标点（用于判断KAIJU_EXIT事件的发出是由于被破坏还是到达目标点） */
	public getArrived(){
		return this.arrived
	}

	public dispose(){
		this.filters = []	
		this.hpBar && this.hpBar.parent && this.hpBar.parent.removeChild(this.hpBar)
		this.parent && this.parent.removeChild(this)
		this.moveTween && this.moveTween.pause();
		this.moveTween = null;
		this.route = null;
		this.activate = false;
	}

	public pause(){
		this.moveTween && this.moveTween.pause();
	}

	public resume(){
		if(this._stun){
			return;
		}
		this.moveTween && this.moveTween.play();
	}

	public getCollisionPoint():egret.Point[]{
		//碰撞检测点四角
		const x1 = this.x - this.anchorOffsetX;
		const y1 = this.y - this.anchorOffsetY;
		const x2 = x1 + this._w;
		const y2 = y1 + this._h;

		// let sp = new egret.Shape();
		// sp.graphics.beginFill(0xFFFFFF, 0.1)
		// sp.graphics.drawRect(x1, y1 ,this._w, this._h);
		// sp.graphics.endFill()
		// this.parent.addChild(sp)

		return [
			new egret.Point(x1, y1),new egret.Point(x2, y1),
			new egret.Point(x1, y2),new egret.Point(x2, y2)				
		]
	}

	
	public damage(atk:number){
		this.HP -= atk;

		if(!this.hpBar){
			this.hpBar = new SimpleHPBar(this.getHPrate(), this._w);				
			this.hpBar.x = 0;
			this.hpBar.y = this._h +3;
		}
		this.addChild(this.hpBar)
		this.hpBar.value = this.getHPrate()

		if(this.HP <= 0){			
			let ptcle = BlastParticles.pool.getOne()
			ptcle.x = this.x
			ptcle.y = this.y
			this.parent.addChild(ptcle);
			ptcle.start(200);
			ptcle.addEventListener(egret.Event.COMPLETE, (e)=>{
				ptcle.activate = false
				ptcle.parent && ptcle.parent.removeChild(ptcle)
				this.hpBar.parent && this.hpBar.parent.removeChild(this.hpBar)
			}, this)
			this.dispatchEvent(new egret.Event(PlayEvent.KAIJU_DESTROYED))
		}else{
			let ptcle = DamageParticle.pool.getOne()
			ptcle.x = this.x
			ptcle.y = this.y
			this.parent.addChild(ptcle);
			
			ptcle.start(5);
			ptcle.addEventListener(egret.Event.COMPLETE, (e)=>{
				ptcle.activate = false
				ptcle.parent && ptcle.parent.removeChild(ptcle)
			}, this)
			setTimeout(()=>{
				this.hpBar.parent && this.hpBar.parent.removeChild(this.hpBar)
			}, 2000)
			
		}
	}

	public stun(){
		this._stun = true;
		if(this.air){
			this.filters = [this.redFilter]
		}
		this.pause();
	}

	public stunFree(){
		this._stun = false;
		if(this.air){
			this.filters = [this.redFilter, this.shadowFilter]
		}
		this.resume()
	}


	private createFilter(){
		let filter = KaijuFilters.getInstance().redFilter//new egret.GlowFilter(0xDD0000, 1, 5, 5, 5);
		this.redFilter = filter
		if(this.air){
			let filter2 = KaijuFilters.getInstance().shadowFilter//new egret.DropShadowFilter(10,45,null,0.5)
			this.shadowFilter = filter2
			this.filters = [filter, filter2]			
			return
		}
		this.filters = [filter]		
	}

	public static pool:Pool<Kaiju> = new Pool<Kaiju>(()=>{
		const air = Math.random()<=0.5
		const ty = Math.random()<=0.15
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