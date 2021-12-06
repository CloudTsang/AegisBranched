/**机兵基类
 * 操作方式：
 * 点击：选中机兵，再点击地图移动
 * 拖动：向对应方向发动攻击
*/
class Kihei extends BaseCharacter{
	protected cd:number;
	protected maxCD:number;		

	/**移动路径 */
	protected route:MapCell[]
	/**移动目标位置 */
	protected targetPosition:egret.Point;
	/**当前区块在移动路径中的索引 */
	protected curRouteIndex:number
	/**移动tween */
	protected moveTween:egret.Tween;

	/**机兵图形 */
	protected sp:egret.DisplayObject;	
	
	protected skills:Skill[]

	public constructor() {
		super();				
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
		this.maxCD = -1;
		this.cd = this.maxCD
		this.mountSkill();
	}

	/**设置移动路径 */
	public startMove(route:MapCell[], targetPosition:egret.Point){		
		this.route = route;
		this.curRouteIndex = 1;	
		this.targetPosition = targetPosition;	
	}

	public stopMove(){
		if(!this.route){
			return
		}
		this.mapCell = this.route[this.curRouteIndex]
		this.route = null;
		this.curRouteIndex = 0;
		this.targetPosition = null;
		this.moveTween && this.moveTween.pause();
		this.moveTween = null
	}

	/**按照移动路径前进一单位，正在播放移动动画时直接返回 */
	public move(){
		if(this.route == null || this.moveTween ){
			return;
		}
		let mc:MapCell = this.route[this.curRouteIndex]
		this.moveTween = egret.Tween.get(this)
		.to({
			x:mc.x,
			y:mc.y
		}, 100)
		.call(this.onMoveStep, this)
	}

	protected onMoveStep(){
		this.curRouteIndex ++;
		if(this.curRouteIndex >= this.route.length){
			this.moveTween = egret.Tween.get(this)
			.to({
				x:this.targetPosition.x,
				y:this.targetPosition.y
			}, 50)
			this.mapCell = this.route[this.route.length-1]
			this.moveTween = null;
			this.route = null	
			return;
		}
		this.mapCell = this.route[this.curRouteIndex]
		this.moveTween = null;
	}	

	/**显示攻击范围 */
	public showAttackRange(v:boolean){	
		this.skills[0].showAttackRange(v);
	}
	/**
	 * 显示伤害范围
	 * @param x 显示位置，传入-1时不显示
	 * @param y 显示位置，传入-1时不显示
	 * @param cellArr 地块数组
	 */
	public showDamageRange(x:number, y:number, cellArr:MapCell[][]){
		this.skills[0].showDamageRange(x, y, cellArr)
	}

	public checkKaijuInRange(kaiju:Kaiju):boolean{
		return this.skills[0].checkInRange(kaiju)
	}

	public getActionTarget():MapCell{
		return this.skills[0].actionTarget
	}

	public action(objs:BaseCharacter[]){
		this.skills[0].action(objs);
	}

	public getAtk(){
		return this.skills[0].getATK();
	}

	public mountSkill(ty:KiheiSkill=null){
		if(!this.skills || this.skills.length == 0){
			throw new Error('Kihei has no skill');
		}
		return this.skills[0];
	}

	public drawKihei():egret.DisplayObject{
		return null
	}	

	/** 是否在cd中*/
	public getAvaliable():boolean{
		return this.cd == this.maxCD;
	}

	public startCD(v:number){
		this.maxCD = v;
		this.cd = 0;
	}

	public onCD():boolean{
		if(this.cd == this.maxCD){
			this.maxCD = -1;
			this.cd = -1;
			return true;
		}
		this.cd ++;
		return this.cd == this.maxCD;
	}

	/** 获取cd进度百分比 */
	public getCDRate():number{
		return this.cd/this.maxCD;
	}	

	public pause(){
		this.moveTween && this.moveTween.pause();
	}

	public resume(){
		this.moveTween && this.moveTween.play();
	}	

	public onSelect(v:boolean){
		if(v){
			let filter = new  egret.GlowFilter(0xFFD700, 0.8, 10,10,10,1,false)
			this.sp.filters = [filter]
		}else{
			this.sp.filters = []
		}
	}
}