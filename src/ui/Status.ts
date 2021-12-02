class Status extends eui.Component{
	private _kihei:Kihei

	private kihei_icon:eui.Group;
	private hp_gauge:eui.ProgressBar;

	private _sp:egret.DisplayObject;
	private _cdProgress:egret.Shape;
	private _iscd:boolean;
	private _mask:egret.Shape;
	private _iconSize:number
	
	/**机兵状态图 */
	public constructor(kihei:Kihei) {
		super();
		this._kihei = kihei;
		this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, this.init, this);		
		this.skinName = 'resource/eui_skins/KiheiStatus.exml'				
		this._kihei.addEventListener(PlayEvent.GET_DAMAGE, this.refreshHP, this);
	}

	private init(e){
		if(this.kihei_icon){
			this._iconSize = this.width
		}
		this.refresh();
	}

	private refresh(e:any=null){
		const kihei = this._kihei;

		if(!this._sp){
			let sp = kihei.drawKihei();
			const scale = sp.width/sp.height;
			sp.width = this.width
			sp.height = sp.width/scale;
			sp.y = (this._iconSize-sp.height)/2
			this._sp = sp
			this.kihei_icon.addChild(sp)
		}	

		this.refreshHP();
		this.refreshCD();	

		// this.dispatchEvent(new egret.Event(PlayEvent.STATUS_INITED))
	}

	public refreshHP(e:any=null){
		if(!this.hp_gauge){
			return;
		}
		this.hp_gauge.value = this._kihei.getHP()/this._kihei.getMaxHP()*100		
	}

	public refreshCD() {
		if(!this.kihei_icon){
			return;
		}
		const angle = this._kihei.getCDRate() * 360;
		if(angle == 360){
			if(this._iscd && this._cdProgress){
				this._cdProgress.graphics.clear();
				this._iscd = false;
			}			
			return;
		}
		
		this._iscd = true;
		const d = this.width;
		const r = d/2		
		let shape = this._cdProgress;
		let mask = this._mask;
		if(!shape){
			shape = new egret.Shape();
			shape.x = 0;
			shape.y = 0;
			this._cdProgress = shape;
			this.kihei_icon.addChild(shape);
		}
		if(!mask){
			mask = new egret.Shape();
			mask.graphics.beginFill(0x000000)
			mask.graphics.drawRect(0,0,d,d);
			mask.graphics.endFill();
			this.kihei_icon.addChild(mask);
		}
		shape.graphics.clear();
		shape.graphics.beginFill(0x000000, 0.7);
		shape.graphics.moveTo(r, r);
		shape.graphics.lineTo(d, d);
		shape.graphics.drawArc(r, r, d, 0, angle * Math.PI / 180, true);
		shape.graphics.lineTo(r, r);
		shape.graphics.endFill();
		shape.mask = mask
		
	}	
}