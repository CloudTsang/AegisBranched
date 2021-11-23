class StageScene extends egret.Sprite{
	private _kiheis:Kihei[];
	private _kiheiStatus:Status[];
	private _curSelectedKihei:Kihei;

	private _kaijus:Kaiju[];

	private _stage:egret.Stage = egret.MainContext.instance.stage;	
	private _cellSize:number;
	private _cellArr:MapCell[][];

	private _pause:boolean;
	private _isAction:boolean;
	private _actConfirmButton:ConfirmBtn;
	private _playPhase:PlayPhase;
	private _routeDict:RouteDict;

	/**最多同时存在怪兽数 */
	private readonly MAX_KAIJU_NUM:number = 20;
	
		
	public constructor() {
		super();		
		this._routeDict = new RouteDict();
	}

	public play(stageName:string){
		let jsonData:IMapData = RES.getRes(stageName+'_json')
		if(jsonData == null){
			return;
		}
		console.log('关卡数据：',jsonData);				
		this.initMap(jsonData.data, jsonData.size, jsonData.nodes, jsonData.kaiju);
		this.initKihei(jsonData.kihei);
		this.initKaiju();
		this.initUI();

		this._playPhase = PlayPhase.SPARE
		this.addEventListener(egret.Event.ENTER_FRAME, this.refreshStage, this)	
		this.addEventListener('touchTap', this.onClick, this)	
		this.addEventListener('touchBegin', this.onMouseDown, this)
		this.addEventListener('touchMove', this.onMouseMove, this)
		this.addEventListener('touchEnd', this.onMouseUp, this)
		// this.addEventListener('touchReleaseOutside', this.onMouseUp, this)
	}

	private initMap(mapData:number[][], mapSize:number[], nodeData:any, kaiju:number[][]){	
		let cellSize = this._stage.stageWidth / mapSize[1]	
		World.getIns().initMap(mapData, mapSize, nodeData, cellSize, kaiju);
		let cellArr = World.getIns().cellArr;
		for(let r=0; r<mapSize[0]; r++){			
			for(let c=0;c<mapSize[1]; c++){
				this.addChild(cellArr[r][c])
			}
		}		
		this._cellArr = cellArr;
		this._cellSize = cellSize
	}

	private initKihei(data:number[][]){
		let kiheis:Kihei[] = []
		let cz:number = this._cellSize;
		if(data[0]){
			let gen1 = new KiheiGen1();			
			let tmpCell = this._cellArr[data[0][0]][data[0][1]]
			gen1.x = tmpCell.x;
			gen1.y = tmpCell.y;
			gen1.mapCell = tmpCell;
			gen1.boot();
			this.addChild(gen1);
			kiheis.push(gen1);
		}
		if(data[1]){
			let gen2 = new KiheiGen2();			
			let tmpCell = this._cellArr[data[1][0]][data[1][1]]
			gen2.x = tmpCell.x;
			gen2.y = tmpCell.y;
			gen2.mapCell = tmpCell;
			gen2.boot();
			this.addChild(gen2);
			kiheis.push(gen2);
		}
		if(data[2]){
			let gen4 = new KiheiGen4();			
			let tmpCell = this._cellArr[data[2][0]][data[2][1]]
			gen4.x = tmpCell.x;
			gen4.y = tmpCell.y;
			gen4.mapCell = tmpCell;
			gen4.boot();
			this.addChild(gen4);
			kiheis.push(gen4);
			
		}
		if(data[3]){
			let gen3 = new KiheiGen3();			
			let tmpCell = this._cellArr[data[3][0]][data[3][1]]
			gen3.x = tmpCell.x;
			gen3.y = tmpCell.y;
			gen3.mapCell = tmpCell;
			gen3.boot();
			this.addChild(gen3);
			kiheis.push(gen3);			
		}
		this._kiheis = kiheis;			
	}

	/**生成怪兽， */
	private initKaiju(){
		this._kaijus = []		
		// for(let i=0; i<this.MAX_KAIJU_NUM/2; i++){
		for(let i=0; i<1; i++){
			this.generateKaiju();
		}
	}

	private generateKaiju(){
		if(this._kaijus.length >= this.MAX_KAIJU_NUM){
			return;
		}
		const kaiju  = Kaiju.pool.getOne();
		const tmpCell = World.getIns().randomEntry(kaiju.isAir());
		const tmpCell2 = World.getIns().randomExit(kaiju.isAir());
		kaiju.mapCell = tmpCell;
		kaiju.x = tmpCell.x;
		kaiju.y = tmpCell.y;
		if(kaiju.isAir()){
			kaiju.startMove([tmpCell2])
		}else{
			const r = this._routeDict.checkRoute2(tmpCell, tmpCell2, true);		
			kaiju.startMove(r.route);
		}			
		kaiju.boot();		
		kaiju.addEventListener(PlayEvent.KAIJU_EXIT, this.onKaijuExit, this);
		this._kaijus.push(kaiju);		
		this.addChild(kaiju)
	}

	private initUI(){
		this._actConfirmButton = new ConfirmBtn();

		let stat:Status[] = []
		const kiheis = this._kiheis;
		const tmpW:number = (this._stage.stageWidth-20)/4;
		const tmpH:number = tmpW*1.2;		
		const tmpY:number = this._stage.stageHeight-tmpH
		for(let i=0;i<kiheis.length;i++){
			const kihei = kiheis[i]
			let s = new Status(kihei);			
			stat.push(s);		
			s.width = tmpW;
			s.height = tmpH
			s.y = tmpY;
			s.x = (tmpW+5)*i
			this.addChild(s);
		}
		this._kiheiStatus = stat
	}

	private onClick(e:egret.TouchEvent){
		if(this._playPhase != PlayPhase.SPARE){
			return;
		}	
		if(e.target instanceof MapCell && this._curSelectedKihei){
			//选中移动格子
			let mc = e.target as MapCell;
			let kihei = this._curSelectedKihei;
			if(!mc.isLand() && !kihei.isAir()){
				console.log("地面单位无法移动到空中")		
				this._curSelectedKihei = null;
				this._pause = false;		
				return;
			}
			if(kihei.isAir()){
				kihei.startMove([mc], new egret.Point(e.stageX, e.stageY));					
			}else{
				let ret = this._routeDict.checkRoute2(kihei.mapCell, mc, false) //World.getIns().findPath(kihei.mapCell, mc)			
				if(ret.route.length > 0){				
					kihei.startMove(ret.route, new egret.Point(e.stageX, e.stageY));
				}							
			}					
			this._curSelectedKihei = null;
			this._pause = false;
		}		
	}
	private onMouseDown(e:egret.TouchEvent){
		if(this._playPhase != PlayPhase.SPARE){
			return;
		}
		if(e.target instanceof Kihei){
			//选中机兵
			this._curSelectedKihei = e.target as Kihei;
			this._pause = true;
		}
	}
	/**上次触发拖动事件的次数 */
	private lastCalcPoint:number = 4;
	private onMouseMove(e:egret.TouchEvent){
		if(this._playPhase != PlayPhase.SPARE){
			return;
		}		
		if(this.lastCalcPoint%4 != 0){
			this.lastCalcPoint ++
			return;
		}
		this.lastCalcPoint = 1;
		if(this._curSelectedKihei){
			let kihei = this._curSelectedKihei;					
			if(this._isAction){
				kihei.showDamageRange(e.stageX, e.stageY, this._cellArr);
			}else if(Math.abs(e.stageX - kihei.x) > this._cellSize/2 || Math.abs(e.stageY - kihei.y) > this._cellSize/2){
				//拖动手势设置机兵攻击
				kihei.showAttackRange(true);				
				this._isAction = true;								
			}
		}
	}
	private onMouseUp(e:egret.TouchEvent){	
		this.lastCalcPoint =  1
		if(this._playPhase == PlayPhase.ACTION){
			//机兵动作中
			return;
		}

		if(this._playPhase == PlayPhase.WAIT_CONFIRM){
			if(e.target!=this._actConfirmButton){
				//取消行动
				this._curSelectedKihei && this._curSelectedKihei.showDamageRange(-1,-1, null)								
				this._actConfirmButton.parent && this._actConfirmButton.parent.removeChild(this._actConfirmButton)
				this._pause = false;			
				this._isAction = false;
				this._playPhase = PlayPhase.SPARE
				return;
			}else{
				//确认行动
				this._actConfirmButton.parent && this._actConfirmButton.parent.removeChild(this._actConfirmButton)
				const kihei = this._curSelectedKihei;	
				kihei.showDamageRange(-1,-1, this._cellArr)		
				kihei.addEventListener(PlayEvent.KIHEI_ACTION_FINISH, this.onKiheiActionFinished, this);
				kihei.action();
				this._playPhase = PlayPhase.ACTION
				return;
			}
		}		
		
		if(this._curSelectedKihei){	
			const kihei = this._curSelectedKihei;			
			kihei.showAttackRange(false);			
			if(this._isAction){
				//机兵选择攻击位置				
				this._playPhase = PlayPhase.WAIT_CONFIRM
				const tp = kihei.actionTarget
				if(tp == null){
					this._curSelectedKihei = null
					this._pause = false;			
					this._isAction = false;
					this._playPhase = PlayPhase.SPARE
					return;
				}
				const btn = this._actConfirmButton;
				btn.x = tp.x				
				btn.y = tp.y
				if(btn.x-btn.width/2<0){
					btn.x = tp.x+btn.width/2
				}else if(btn.x-btn.width/2>this._stage.stageWidth){
					btn.x = tp.x-btn.width/2
				}
				this.addChild(this._actConfirmButton);				
			}
		}
	}

	/** 机兵结束攻击回调 */
	private onKiheiActionFinished(e:any){
		this._playPhase = PlayPhase.SPARE;
		this._curSelectedKihei && this._curSelectedKihei.removeEventListener(PlayEvent.KIHEI_ACTION_FINISH, this.onKiheiActionFinished, this);
		this._pause = false;
		this._curSelectedKihei = null
		this._isAction = false;
	}

	/**怪兽退场回调 */
	private onKaijuExit(e:egret.Event){
		const kaiju:Kaiju = e.target;
		kaiju.dispose();
		kaiju.removeEventListener(PlayEvent.KAIJU_EXIT, this.onKaijuExit, this)
		
		for(let i=0;i<this._kaijus.length; i++){
			if(kaiju == this._kaijus[i]){
				this._kaijus.splice(i,1);
			}
		}
	}

	private refreshStage(e:any=null){
		if(this._pause){
			return;
		}
		for(let kihei of this._kiheis){
			kihei.move();
			kihei.onCD();
		}
		for(let status of this._kiheiStatus){
			status.refreshCD();
		}
		for(let kaiju of this._kaijus){
			kaiju.move();
		}
	}


}