class RailGun extends Skill{
	private _mask:egret.Shape;
	private _sp:egret.DisplayObject;
	private _k:number=1;
	private _b:number=0;
	public constructor(kihei:Kihei) {
		super(kihei);
		this.attackRange = 	-1;
		//电磁炮伤害范围为长无限，宽damageRange的直线区域
		this.damageRange = 2;
		this.atk = 90
		this.rangeType = RangeType.LINE;
		this.cd = egret.MainContext.instance.stage.frameRate * 5
		this.type = KiheiSkill.RAIL_GUN;
	}


	public showDamageRange(x:number, y:number, cellArr:MapCell[][]){
		const kihei = this.kihei;
		if(kihei.x == x){
			x+=0.1
		}
		const quad13 = (kihei.y-y)*(kihei.x-x)>0;
		this._k = Math.abs(kihei.y-y)/Math.abs(kihei.x-x)
		if(quad13) this._k *= -1
		// console.log(kihei.x, kihei.y, x, y, this._k)	
		// this._b = y - this._k * x;
		// if(quad13) this._b *= -1
		super.showDamageRange(x, y, cellArr)
	}

	/**根据距离初步计算是否在范围内 */
	protected distanceCheck(kaiju:Kaiju):boolean{
		const points = kaiju.getCollisionPoint();
		const kihei = this.kihei;
		const dis = this.damageRange * this.kihei.mapCell.getSize()
		/**点到直线距离计算的分母 */
		const denominator = Math.sqrt(Math.pow(this._k, 2) + 1)
		// console.log('===========')
		for(let p of points){
			const tmpx = p.x - kihei.x;
			const tmpy = p.y - kihei.y;
			// const d = Math.abs(this._k*p.x + p.y) / denominator;
			const d = Math.abs(this._k*tmpx + tmpy) / denominator;
			// const d = Math.abs(this._k*p.x + p.y + this._b) / denominator;
			// console.log(`d=${d}, dis=${dis}, denominator=${denominator}, this._k=${this._k}, this._b=${this._b}, tmpx=${tmpx}, tmpy=${tmpy}`);
			if(d < dis){
				// console.log("distanceCheck true");
				return true;
			}
		}
		return false
	}

	public action(objs:BaseCharacter[]){
		const kihei = this.kihei;
		this.drawRailGun()
		if(kihei.parent){
			kihei.parent.addChild(this._mask)
			kihei.parent.addChild(this._sp)
			this._sp.mask = this._mask;			
			SoundManager.instance().playBgs('bgs_railgun_mp3')
			this.actionTween = egret.Tween.get(this._mask)
			.to({
				scaleX:200
			}, 1250)
			.to({
				scaleY:0
			}, 250)
			.call(()=>{
				this._mask.parent.removeChild(this._mask)
				this._sp.parent.removeChild(this._sp)
				this._mask = null;
				this._sp = null;
				kihei.startCD(this.cd);
				kihei.dispatchEvent(new egret.Event(PlayEvent.KIHEI_ACTION_FINISH));
				super.action(objs)
			})
		}
	}
	
	private drawRailGun(){		
		const kihei = this.kihei;
		const cellSize = kihei.mapCell.getSize();
		const ulength = cellSize*1.5;

		let sp:egret.Sprite = new egret.Sprite();
		sp.graphics.beginFill(0xFFFFFF);
		sp.anchorOffsetY = cellSize/2		
		sp.graphics.drawRect(0,0 , 2000, cellSize );		
		sp.graphics.endFill();		
		sp.x = kihei.x;
		sp.y = kihei.y;
		sp.rotation = this.rangeSp.damageRange.rotation;		

		let mask:egret.Shape = new egret.Shape();
		mask.graphics.beginFill(0xFFFFFF);
		mask.anchorOffsetY = cellSize/2
		mask.graphics.drawRoundRect(0,0 , 10, cellSize, ulength, ulength);		
		mask.graphics.endFill();		
		mask.x = kihei.x;
		mask.y = kihei.y;
		mask.rotation = this.rangeSp.damageRange.rotation;	
		this._mask = mask
		this._sp = sp;		
		let filter = new egret.GlowFilter(0x87CEEB, 0.3, 20, 20, 20, 1, true, false);
		sp.filters = [filter]				
	}
}