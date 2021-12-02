class JumpAttack extends Skill{
	/**对空中地块发动攻击时回到最近的地面地块 */
	private _backCell:MapCell;

	public constructor(kihei:Kihei) {
		super(kihei);
		this.attackRange = 	4;
		this.damageRange = 2;
		this.atk = 70
		this.rangeType = RangeType.CIRCLE;
		this.cd = egret.MainContext.instance.stage.frameRate * 2
		this.type = KiheiSkill.JUMP_ATTACK;
	}

	public action(objs:BaseCharacter[]){
		if(!this.actionTarget){
			return;
		}
		const kihei = this.kihei;
		const actTgt = this.actionTarget;
		let tw = egret.Tween.get(kihei)
		.to({
			scaleX:1.5,
			scaleY:1.5,
			x:kihei.x+(actTgt.x-kihei.x)/2,
			y:kihei.y+(actTgt.y-kihei.y)/2
		}, 400)
		.wait(200)
		.to({
			scaleX:1,
			scaleY:1,
			x:actTgt.x,
			y:actTgt.y
		}, 200)
		.call(()=>{
			SoundManager.instance().playBgs('bgs_impact_mp3')
		})
		.wait(500)
		.to({
			scaleX:1,
			scaleY:1,
			x:this._backCell.x,
			y:this._backCell.y
		}, 200)
		.call(()=>{
			kihei.mapCell = this.actionTarget
			this.actionTarget = null;
			this.actionTween = null;
			kihei.startCD(this.cd);
			kihei.dispatchEvent(new egret.Event(PlayEvent.KIHEI_ACTION_FINISH));
			super.action(objs)
		}, this)
		this.actionTween = tw
	}

	public showDamageRange(x:number, y:number, cellArr:MapCell[][]){
		if(x == -1 || y == 1){
			this.rangeSp.showDamageRange(-1,-1) 
			return;
		}
		const kihei = this.kihei
		const thisPoint = new egret.Point(kihei.x, kihei.y)
		const size = kihei.mapCell.getSize();
		const r = size * this.attackRange;	
		const dis = egret.Point.distance(new egret.Point(x, y), new egret.Point(kihei.x, kihei.y));		
		if(dis > r){
			const sin = (y-kihei.y+0.1) / dis;
			const cos = (x-kihei.x+0.1) / dis;
			y = kihei.y + (sin*r);
			x = kihei.x + (cos*r);		
		}		
		let ry = Math.floor(y / size);
		let cx = Math.floor(x / size);
		this.actionTarget = cellArr[ry][cx];
		let curCell = cellArr[ry][cx];

		if(!curCell.isLand()){			
			curCell = this.getClosetLandCell(cx, ry, cellArr);
		}		
		this.rangeSp.showDamageRange(x,y) 		
		this._backCell = curCell;
	}

	/**跳到非地面格时寻找最近一格地面设为_backCell*/
	private getClosetLandCell(x:number, y:number, cellArr:MapCell[][]):MapCell{
		const mapH = cellArr.length;
		const mapW = cellArr[0].length;
		let round = 1

		while(true){
			if(y-round>=0){
				//最上一行
				const tmpy = y-round;
				for(let i=-round; i<round+1;i++){
					const tmpx = x+i
					if(tmpx<0 || tmpx>=mapW){
						continue
					}
					if(cellArr[tmpy][tmpx].isLand()){
						return cellArr[tmpy][tmpx]
					}
				}
			}
			if(y+round<mapH){
				//最下一行
				const tmpy = y+round;
				for(let i=-round; i<round+1;i++){
					const tmpx = x+i
					if(tmpx<0 || tmpx>=mapW){
						continue
					}
					if(cellArr[tmpy][tmpx].isLand()){
						return cellArr[tmpy][tmpx]
					}
				}
			}
			if(x-round>=0){
				//最左一列
				const tmpx = x-round;
				for(let i=-round; i<round+1;i++){
					const tmpy = y+i
					if(tmpy<0 || tmpy>=mapH){
						continue
					}
					if(cellArr[tmpy][tmpx].isLand()){
						return cellArr[tmpy][tmpx]
					}
				}
			}
			if(x+round<mapW){
				//最右一列
				const tmpx = x+round;
				for(let i=-round; i<round+1;i++){
					const tmpy = y+i
					if(tmpy<0 || tmpy>=mapH){
						continue
					}
					if(cellArr[tmpy][tmpx].isLand()){
						return cellArr[tmpy][tmpx]
					}
				}
			}
			round ++;
		}	
	}
}