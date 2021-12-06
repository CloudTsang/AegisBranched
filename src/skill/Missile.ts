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
		if(objs.length == 0){
			const kihei = this.kihei;
			kihei.dispatchEvent(new egret.Event(PlayEvent.KIHEI_ACTION_FINISH));
			return
		}
		let tw = egret.Tween.get(this.kihei)		
		//播放攻击动画
		.call(()=>{
			this.launchMissles(objs as Kaiju[])
		})
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

	private launchMissles(kaijus:Kaiju[]){
		const kihei = this.kihei
		for(let kaiju of kaijus){
			let missle = this.genMissle(kaiju)
			kihei.parent.addChild(missle)
			missle.launch()
		}
		
		
	}

	private genMissle(kaiju:Kaiju){
		const kihei = this.kihei
		const rotate = GlobalMethod.getRotation(kihei.x, kihei.y, kaiju.x, kaiju.y)
		const dis = GlobalMethod.getDistance(kihei.x, kihei.y, kaiju.x, kaiju.y)
		let missle = MissleEffect.pool.getOne()
		missle.standby(kihei.x, kihei.y, dis, kihei.mapCell.getSize())
		missle.rotation = 90+rotate
		return missle
	}
}