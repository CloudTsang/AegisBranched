class Missile extends Skill{
	public constructor(kihei:Kihei) {
		super(kihei);
		this.attackRange = 	-1;
		this.damageRange = 4;
		this.atk = 55
		this.rangeType = RangeType.FAN;
		this.cd = egret.MainContext.instance.stage.frameRate * 3;
		this.type = KiheiSkill.MISSILE;
	}

	public action(objs:BaseCharacter[]){
		if(!this.actionTarget){
			return;
		}
		let tw = egret.Tween.get(this.kihei)		
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