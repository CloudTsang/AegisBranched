class StatusBar extends eui.Component{
	private aegis_hp:eui.ProgressBar
	private txt_time:eui.Label
	private status_container:eui.Group
	private txt_tips:eui.Label
	private btn_maintain:eui.Image
	private btn_emp:eui.Image

	private _aegis:Aegis
	private _kiheis:Kihei[]
	private _kiheiStatus:Status[]
	private _fps = egret.MainContext.instance.stage.frameRate

	private contain:eui.Component
	public constructor(aegis:Aegis, kiheis:Kihei[]) {
		super()
		this._aegis = aegis;
		aegis.addEventListener(PlayEvent.AEGIS_DAMAGE, this.onAegisDamage, this);
		aegis.addEventListener(PlayEvent.AEGIS_MAINTAIN_FINISH, this.onAegisAction, this);
		aegis.addEventListener(PlayEvent.AEGIS_EMP_DID, this.onAegisAction, this);
		this._kiheis = kiheis;
		this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.onAdded, this);
		
		this.skinName = 'resource/eui_skins/TotalStatus.exml'
	}
	private onAdded(e){	
		this.alpha = 0;
		setTimeout(()=> {
			this.init()
		}, 1000);
	}
	private init(e:any=null){
		let stat:Status[] = []
		const stageH = egret.MainContext.instance.stage.stageHeight
		const stageW = egret.MainContext.instance.stage.stageWidth
		const kiheis = this._kiheis;
		const tmpW:number = (stageW-20)/5;
		const tmpH:number = tmpW*1.2;		
		for(let i=0;i<kiheis.length;i++){
			const kihei = kiheis[i]
			let s = new Status(kihei);			
			stat.push(s);		
			s.width = tmpW;
			s.height = tmpH;	
			this.status_container.addChild(s)
		}
		this._kiheiStatus = stat
		this.x = 0
		this.height = stageH

		this.btn_emp.addEventListener("touchTap", (e)=>{
			this.dispatchEvent(new egret.Event(PlayEvent.AEGIS_EMP))
		}, this)

		this.btn_maintain.addEventListener("touchTap", (e)=>{
			this.dispatchEvent(new egret.Event(PlayEvent.AEGIS_MAINTAIN))
		}, this)
		this.alpha = 1
		// egret.stopTick(this.init, this)
		return true
	}

	public refreshHP(){
		if(this._kiheiStatus){
			for(let status of this._kiheiStatus){
				status.refreshHP();
			}
		}
	}

	public refreshCD(){
		if(this._kiheiStatus){
			for(let status of this._kiheiStatus){
				status.refreshCD();
			}
		}
	}

	public refreshTime(time:number){
		const sec = time/this._fps;
		const min = Math.floor(sec / 60);
		const sec2 = sec % 60;
		this.txt_time.text = `${min}:${sec2<10?`0${sec2}`:sec2}`;
	}

	public setTips(s:string){
		this.txt_tips.text = s
	}

	private onAegisDamage(e){
		const hp = this._aegis.getHPrate()
		this.aegis_hp.value = hp
		if(hp < 30){
			this.aegis_hp.tint = 0xFF0000
		}
	}

	private onAegisAction(e:egret.Event){
		if(e.type == PlayEvent.AEGIS_MAINTAIN_FINISH){
			this.btn_maintain.visible = false;
			this.refreshHP();
		}else if(e.type ==PlayEvent.AEGIS_EMP_DID){
			this.btn_emp.visible = false;
		}
	}
	
}