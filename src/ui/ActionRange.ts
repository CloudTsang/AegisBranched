/**机兵动作范围显示对象 */
class ActionRange {
	/**动作范围 */
	public attackRange:egret.Sprite;
	/**伤害范围 */
	public damageRange:egret.Sprite;
	/**选择攻击目标时的半透明件 */
	public alphaKihei:egret.DisplayObject;
	private _kihei:Kihei;
	private _skill:Skill;
	private _isShowAttackRange:boolean
	
	public constructor(kihei:Kihei, skill:Skill) {
		this._kihei = kihei;
		this._skill = skill;
	}

	public showAttackRange(v:boolean){
		if(this._skill.getAttackRange()==-1){
			return;
		}
		if(this._isShowAttackRange == v){
			return;
		}		
		if(!this.attackRange){
			this.drawRange1();
		}
		if(v && !this.attackRange.parent){
			this._kihei.addChild(this.attackRange);
		}else if(!v && this.attackRange.parent){
			this._kihei.removeChild(this.attackRange);
		}	
		this._isShowAttackRange = v;	
	}

	public showDamageRange(x:number, y:number){
		if((x == -1 || y == 1) && this.damageRange){
			this.damageRange.parent && this.damageRange.parent.removeChild(this.damageRange);		
			return;	
		}
		
		if(!this.damageRange){
			this.drawRange2();
		}		
		const kihei = this._kihei
		const skill = this._skill
		const reach = skill.getAttackRange();	
		const damageRange = this.damageRange;
		//攻击范围=-1即为第二三代机兵，不需要显示透明件,xy用于计算方向
		//攻击范围!=-1即为第一四代机兵，显示透明件,xy用于计算位置
		if(reach!=-1){	
			let sp = this.alphaKihei;
			if(!sp){				
				sp = kihei.drawKihei();
				sp.alpha = 0.5;
				this.alphaKihei = sp;
			}
			sp.anchorOffsetX = sp.width/2
			sp.anchorOffsetY = sp.height/2
			sp.x = 0; 
			sp.y = 0;
			damageRange.x = x;
			damageRange.y = y;
			damageRange.addChild(sp);
			kihei.parent && kihei.parent.addChild(damageRange);			
		}else{
			damageRange.x = kihei.x;
			damageRange.y = kihei.y;
			let deg = GlobalMethod.getRotation(kihei.x, kihei.y, x, y)
			if(skill.getRangeType()==RangeType.FAN)  deg-=60
			damageRange.rotation = deg
			kihei.parent && kihei.parent.addChild(damageRange);			
		}
	}

	private drawRange1(){				
		const reach = this._skill.getAttackRange();		
		if(reach == -1){
			return;
		}		
		const size = this._kihei.mapCell.getSize();
		let sp = new egret.Sprite();
		sp.graphics.beginFill(0xCD2626, 0.2);
		sp.graphics.drawCircle(size/2,size/2,size*reach);
		sp.graphics.endFill();
		this.attackRange = sp;
	}	

	private drawRange2(){
		const kihei = this._kihei
		const skill = this._skill
		const size = kihei.mapCell.getSize();
		const reach = skill.getDamageRange();
		const type = skill.getRangeType();
		
		let sp = new egret.Sprite();		
		switch(type){
			case RangeType.CIRCLE:				
				sp.graphics.beginFill(0xEE2C2C, 0.5);		
				sp.graphics.drawCircle(0,0,size*reach);
				break;
			case RangeType.FAN:
				const r = size*reach
				sp.graphics.beginGradientFill(egret.GradientType.RADIAL, [0xEE2C2C,0xEE2C2C], [0, 0.6], [100,255]);		
				sp.graphics.moveTo(0,0);
				sp.graphics.lineTo(r, 0);
				sp.graphics.drawArc(0,0,r,0,120*Math.PI/180);
				sp.graphics.lineTo(0,0)				
				break;
			case RangeType.LINE:				
				sp.graphics.beginGradientFill(egret.GradientType.LINEAR, [0xEE2C2C,0xEE2C2C], [0, 0.6], [150,255]);		
				sp.anchorOffsetY = reach*size/2;
				sp.graphics.drawRect(0,0,50*size, reach*size);
				
				break;
		}
		sp.graphics.endFill();		
		this.damageRange = sp;
	}	
}