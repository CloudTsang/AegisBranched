class Skill {
	/**攻击范围单位长度 */
	protected attackRange:number=1;
	/**伤害范围单位长度 */
	protected damageRange:number=1;
	/**伤害范围形状 */
	protected rangeType:RangeType;
	/**伤害范围显示对象 */
	protected rangeSp:ActionRange;

	protected cd:number;
	protected atk:number;	
	protected kihei:Kihei
	protected actionTween:egret.Tween;

	/**攻击目标，以该目标区块生成的rangeType范围内的怪兽将受到伤害 */
	public actionTarget:MapCell;
	public type:KiheiSkill;

	constructor(kihei:Kihei){
		this.kihei = kihei;
		this.rangeSp = new ActionRange(kihei, this);
	}

	/**向BaseCharacter对象发动技能  */
	public action(objs:BaseCharacter[]){
		// for(let obj of objs){
		// 	obj.damage(this.atk)
		// }
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
		const kihei = this.kihei
		const size = kihei.mapCell.getSize()
		if(this.attackRange != -1){			
			const r = size * this.attackRange
			const dis = egret.Point.distance(new egret.Point(x, y), new egret.Point(kihei.x, kihei.y));
			if(dis > r){
				//拖动超出攻击范围
				const sin = (y-kihei.y+0.1) / dis;
				const cos = (x-kihei.x+0.1) / dis;
				y = kihei.y + (sin*r);
				x = kihei.x + (cos*r);				
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

	public getAttackRange():number{
		return this.attackRange;
	}

	public getDamageRange():number{
		return this.damageRange;
	}

	public getRangeType():RangeType{
		return this.rangeType;
	}

	public getATK(){
		return this.atk;
	}

	public getCD(){
		return this.cd;
	}

	public checkInRange(kaiju:Kaiju){
		if(!this.distanceCheck(kaiju)){
			return false;
		}
		return this.hitCheck(kaiju)
	}

	/**根据距离初步计算是否在范围内 */
	protected distanceCheck(kaiju:Kaiju):boolean{
		const points = kaiju.getCollisionPoint();
		const damage = this.rangeSp.damageRange;
		const point0 = new egret.Point(damage.x, damage.y)
		// console.log(point0, points, this.kihei.mapCell.getSize())
		const dis = this.damageRange * this.kihei.mapCell.getSize()
		for(let p of points){
			const dis2 = egret.Point.distance(p, point0)
			if(dis2<dis){
				// console.log('distance true : ', dis, dis2)
				return true;
			} 
		}
		// console.log('distance false')
		return false;
	}

	/**碰撞检测是否在范围内 */
	protected hitCheck(kaiju:Kaiju):boolean{
		const points = kaiju.getCollisionPoint();
		const sp = this.rangeSp.damageRange;
		for(let p of points){
			if(sp.hitTestPoint(p.x, p.y)){
				// console.log('hit test true')
				return true;
			}
		}
		// console.log('hit test false')
		return false;
	}
	
}