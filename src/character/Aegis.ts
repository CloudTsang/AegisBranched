class Aegis  extends BaseCharacter{
	private _empTimer:number
	private _fps:number = egret.MainContext.instance.stage.frameRate
	private _empKaijus:Kaiju[];
	public constructor() {
		super();
		this.maxHP = 800
	}

	public damage(atk:number){
		this.HP -= atk;
		if(this.HP <= 0){
			this.HP = 0
			this.dispatchEvent(new egret.Event(PlayEvent.GAME_OVER))
		}else{
			this.dispatchEvent(new egret.Event(PlayEvent.AEGIS_DAMAGE))
		}
	}


	public emp(kaijus:Kaiju[]){
		this._empTimer = this._fps*15
		let empKaijus = []
		for(let kaiju of kaijus){
			kaiju.stun()
			empKaijus.push(kaiju)
		}
		this._empKaijus = empKaijus;
		this.dispatchEvent(new egret.Event(PlayEvent.AEGIS_EMP_DID))
	}

	public refresh(){
		this._empTimer -= 1
		if(this._empTimer == 0 && this._empKaijus){
			for(let kaiju of this._empKaijus){
				kaiju.stunFree()
			}
			this.dispatchEvent(new egret.Event(PlayEvent.AEGIS_EMP_FINISH))
		}
	}

	public maintain(kiheis:Kihei[]){
		for(let kihei of kiheis){
			let hp = kihei.getHP()+200;
			const maxHP = kihei.getMaxHP();
			if(hp > maxHP){
				hp = maxHP
			}
			kihei.setHP(hp)
		}
		this.dispatchEvent(new egret.Event(PlayEvent.AEGIS_MAINTAIN_FINISH))
	}
}