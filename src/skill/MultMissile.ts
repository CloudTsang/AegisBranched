class MultMissile extends Skill{

	public constructor(kihei:Kihei) {
		super(kihei);
		this.attackRange = 	30;		
		this.damageRange = 5;
		this.atk = 40;		
		this.rangeType = RangeType.CIRCLE;
		this.cd = egret.MainContext.instance.stage.frameRate * 2
		this.type = KiheiSkill.MULT_MISSILE;
	}

	public action(objs:BaseCharacter[]){
		if(!this.actionTarget){
			return;
		}
		let tw = egret.Tween.get(this.kihei)
		.to({			
			x:this.actionTarget.x,
			y:this.actionTarget.y
		}, 1000)
		//播放攻击动画
		.wait(1000)
		.call(()=>{
			const kihei = this.kihei;
			kihei.mapCell = this.actionTarget
			this.actionTarget = null;	
			this.actionTween = null		
			kihei.startCD(this.cd);
			kihei.dispatchEvent(new egret.Event(PlayEvent.KIHEI_ACTION_FINISH));
			super.action(objs)
		}, this)
		this.actionTween = tw
	}
}