class StageScene extends egret.Sprite{
	private _statusBar:StatusBar
	private _aegis:Aegis;
	private _kiheis:Kihei[];
	// private _kiheiStatus:Status[];
	private _curSelectedKihei:Kihei;

	private _kaijus:Kaiju[];

	private _stage:egret.Stage = egret.MainContext.instance.stage;	
	private _fps:number = egret.MainContext.instance.stage.frameRate;
	private _cellSize:number;
	private _cellArr:MapCell[][];

	private _pause:boolean;
	private _isAction:boolean;
	private _actConfirmButton:ConfirmBtn;
	private _playPhase:PlayPhase;
	private _routeDict:RouteDict;

	/**最多同时存在怪兽数 */
	private MAX_KAIJU_NUM:number = 20;
	/**空中怪兽图层 */
	private _airKaijuLayer:egret.DisplayObjectContainer;
	/**地面怪兽图层 */
	private _landKaijuLayer:egret.DisplayObjectContainer;

	/**空中机兵图层 */
	private _airKiheiLayer:egret.DisplayObjectContainer;
	/**地面机兵图层 */
	private _landKiheiLayer:egret.DisplayObjectContainer;

	private _kaijuGenTicker:number;
	private _kaijuGenInterval:number;	
	/**攻击对象怪兽 */
	private _curAimedKaiju:Kaiju[];

	/**剩余时间 */
	private _timeLimit:number
	/**经过时间-记秒用 */
	private _timePassed:number

	private _destroyedKaijuNumber:number
		
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

		this._kaijuGenTicker = 0;
		this._kaijuGenInterval = this._stage.frameRate 
		this._playPhase = PlayPhase.SPARE		
		this._destroyedKaijuNumber = 0;		

		this._timeLimit = this._fps * (3 * 60+10);
		// this._timeLimit = this._fps * (30);
		this._timePassed = 0;

		this.initMap(jsonData.data, jsonData.size, jsonData.nodes, jsonData.kaiju);
		this.initKihei(jsonData.kihei);
		this.initKaiju();
		this.initUI();
		setTimeout(()=>{
			this.start()
		}, 1500)
	}

	private start(){
		SoundManager.instance().play('edgebranched_mp3', false)
		this.addEventListener('touchTap', this.onClick, this)	
		this.addEventListener('touchBegin', this.onMouseDown, this)
		this.addEventListener('touchMove', this.onMouseMove, this)
		this.addEventListener('touchEnd', this.onMouseUp, this)
		this.addEventListener(egret.Event.ENTER_FRAME, this.refreshStage, this)	
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
		this._cellSize = cellSize;

		let landL = new egret.Sprite();
		landL.graphics.drawRect(0,0,this._stage.stageWidth, this._stage.stageHeight);
		this.addChild(landL);
		this._landKaijuLayer = landL;

		let landL2 = new egret.Sprite();
		landL2.graphics.drawRect(0,0,this._stage.stageWidth, this._stage.stageHeight);
		this.addChild(landL2);
		this._landKiheiLayer = landL2;

		let airL = new egret.Sprite();
		airL.graphics.drawRect(0,0,this._stage.stageWidth, this._stage.stageHeight);
		this.addChild(airL);
		this._airKaijuLayer = airL;		

		let airL2 = new egret.Sprite();
		airL2.graphics.drawRect(0,0,this._stage.stageWidth, this._stage.stageHeight);
		this.addChild(airL2);
		this._airKiheiLayer = airL2;		

	}

	private initKihei(data:number[][]){
		let aegis = new Aegis()
		aegis.boot()
		aegis.addEventListener(PlayEvent.GAME_OVER, this.onGameOver, this);
		this._aegis = aegis
		
		let kiheis:Kihei[] = []
		let cz:number = this._cellSize;
		if(data[0]){
			let gen1 = new KiheiGen1();			
			let tmpCell = this._cellArr[data[0][0]][data[0][1]]
			gen1.x = tmpCell.x;
			gen1.y = tmpCell.y;
			gen1.mapCell = tmpCell;
			gen1.boot();
			this._landKiheiLayer.addChild(gen1);
			kiheis.push(gen1);
		}
		if(data[1]){
			let gen2 = new KiheiGen2();			
			let tmpCell = this._cellArr[data[1][0]][data[1][1]]
			gen2.x = tmpCell.x;
			gen2.y = tmpCell.y;
			gen2.mapCell = tmpCell;
			gen2.boot();
			this._landKiheiLayer.addChild(gen2);
			kiheis.push(gen2);
		}
		
		if(data[3]){
			let gen3 = new KiheiGen3();			
			let tmpCell = this._cellArr[data[3][0]][data[3][1]]
			gen3.x = tmpCell.x;
			gen3.y = tmpCell.y;
			gen3.mapCell = tmpCell;
			gen3.boot();
			this._landKiheiLayer.addChild(gen3);
			kiheis.push(gen3);			
		}

		if(data[2]){
			let gen4 = new KiheiGen4();			
			let tmpCell = this._cellArr[data[2][0]][data[2][1]]
			gen4.x = tmpCell.x;
			gen4.y = tmpCell.y;
			gen4.mapCell = tmpCell;
			gen4.boot();
			this._airKiheiLayer.addChild(gen4);
			kiheis.push(gen4);			
		}
		this._kiheis = kiheis;			
	}

	/**生成怪兽， */
	private initKaiju(){
		this._kaijus = []		
		for(let i=0; i<10; i++){
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
		kaiju.boot();		
		if(kaiju.isAir()){
			kaiju.startMove([tmpCell2])
		}else{ 
			const r = this._routeDict.checkRoute2(tmpCell, tmpCell2, true);		
			kaiju.startMove(r.route);
		}			
		kaiju.addEventListener(PlayEvent.KAIJU_DESTROYED, this.onKaijuExit, this);
		kaiju.addEventListener(PlayEvent.KAIJU_EXIT, this.onKaijuExit, this);
		this._kaijus.push(kaiju);	
		if(kaiju.isAir())	{
			this._airKaijuLayer.addChild(kaiju);
		}else{
			this._landKaijuLayer.addChild(kaiju);
		}
	}

	private initUI(){
		this._actConfirmButton = new ConfirmBtn();
		
		let sbar = new StatusBar(this._aegis, this._kiheis)
		sbar.width = this._stage.stageWidth;
		sbar.refreshTime(this._timeLimit)
		this.addChild(sbar);
		sbar.height = this._stage.stageHeight - sbar.height
		sbar.addEventListener(PlayEvent.AEGIS_EMP, this.onAegisAction, this);
		sbar.addEventListener(PlayEvent.AEGIS_MAINTAIN, this.onAegisAction, this);
		this._statusBar = sbar
	}

	private onClick(e:egret.TouchEvent){
		if(this._playPhase != PlayPhase.SPARE){
			return;
		}
		let mc:MapCell
		if(e.target instanceof MapCell){
			mc = e.target as MapCell
		}else if(e.target instanceof BaseCharacter){
			mc = (e.target as BaseCharacter).mapCell
		}
		
		if(mc  && this._curSelectedKihei && mc != this._curSelectedKihei.mapCell){
			//选中移动格子
			let kihei = this._curSelectedKihei;
			if(!mc.isLand() && !kihei.isAir()){
				console.log("地面单位无法移动到空中")	
				this._curSelectedKihei.onSelect(false);	
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
			this._curSelectedKihei.onSelect(false)		
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
			if(this._curSelectedKihei){
				this._curSelectedKihei.onSelect(false);
			}
			const kihei = e.target as Kihei
			if(!kihei.getAvaliable()){
				SoundManager.instance().playBgs('bgs_forbid_mp3')
				return
			}
			this._curSelectedKihei = e.target as Kihei;
			this._curSelectedKihei.onSelect(true)
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
				let tmpArr:Kaiju[] = []
				//检测被瞄准的怪兽，开启闪烁特效	
				for(let kaiju of this._kaijus){
					const v = kihei.checkKaijuInRange(kaiju)
					if(v){
						tmpArr.push(kaiju)
					}
					kaiju.aimed(v)
				}
				this._curAimedKaiju = tmpArr;

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
				this._curSelectedKihei.onSelect(false)	
				this._curSelectedKihei = null
				if(this._curAimedKaiju){
					for(let kaiju of this._curAimedKaiju){
						kaiju.aimed(false)
					}
				}
				this._curAimedKaiju = []
				return;
			}else{
				//确认行动
				this._actConfirmButton.parent && this._actConfirmButton.parent.removeChild(this._actConfirmButton)
				const kihei = this._curSelectedKihei;
				kihei.onSelect(false)		
				kihei.showDamageRange(-1,-1, this._cellArr)		
				kihei.addEventListener(PlayEvent.KIHEI_ACTION_FINISH, this.onKiheiActionFinished, this);
				kihei.action(this._curAimedKaiju);
				this._playPhase = PlayPhase.ACTION
				if(this._curAimedKaiju){
					for(let kaiju of this._curAimedKaiju){
						kaiju.aimed(false)
					}
				}

				//播放攻击动画&计算伤害
				return;
			}
		}		
		
		if(this._curSelectedKihei){	
			const kihei = this._curSelectedKihei;			
			kihei.showAttackRange(false);			
			if(this._isAction){
				//机兵选择攻击位置				
				this._playPhase = PlayPhase.WAIT_CONFIRM
				const tp = kihei.getActionTarget();
				if(tp == null){
					this._curSelectedKihei.onSelect(false)	
					this._curSelectedKihei = null
					this._pause = false;			
					this._isAction = false;
					this._playPhase = PlayPhase.SPARE
					return;
				}
				const btn = this._actConfirmButton;
				btn.x = (this._stage.stageWidth - btn.width)/2
				btn.y = (this._stage.stageHeight - btn.height)/2	
				console.log(this._stage.stageWidth, btn.width, btn.x)			
				this.addChild(this._actConfirmButton);				
			}
		}
	}

	private _kaijuBlastTimer = new egret.Timer(300)
	/** 机兵结束攻击回调 */
	private onKiheiActionFinished(e:any){
		this._kaijuBlastTimer.addEventListener("timer", this.onKaijuBlast, this);
		this._kaijuBlastTimer.start();
	}

		/**怪兽相继爆炸处理事件 */
	private onKaijuBlast(){
		const kaijus = this._curAimedKaiju;
		const kihei = this._curSelectedKihei
		if(kaijus && kaijus.length>0 && kihei){
			const kaiju = kaijus.pop();
			kaiju.damage(kihei.getAtk())
		}else{
			this._kaijuBlastTimer.removeEventListener("timer", this.onKaijuBlast, this);
			this._kaijuBlastTimer.stop()
			this.onResumeStage()
		}
	}

	/**动画全部播放完毕 */
	private onResumeStage(){
		this._playPhase = PlayPhase.SPARE;
		this._curSelectedKihei && this._curSelectedKihei.removeEventListener(PlayEvent.KIHEI_ACTION_FINISH, this.onKiheiActionFinished, this);
		this._pause = false;
		this._curSelectedKihei = null
		this._isAction = false;
	}

	/**怪兽退场回调 */
	private onKaijuExit(e:egret.Event){
		const kaiju:Kaiju = e.target;
		if(e.type == PlayEvent.KAIJU_DESTROYED){
			this._destroyedKaijuNumber ++
		}else if(e.type == PlayEvent.KAIJU_EXIT){
			this._aegis.damage(kaiju.getHP())
		}
		kaiju.dispose();
		kaiju.removeEventListener(PlayEvent.KAIJU_DESTROYED, this.onKaijuExit, this)		
		kaiju.removeEventListener(PlayEvent.KAIJU_EXIT, this.onKaijuExit, this)		
		for(let i=0;i<this._kaijus.length; i++){
			if(kaiju == this._kaijus[i]){
				this._kaijus.splice(i,1);
				kaiju.dispose();
			}
		}
	}

	private onAegisAction(e:egret.Event){
		if(e.type == PlayEvent.AEGIS_EMP){
			this._aegis.emp(this._kaijus)
		}else if(e.type == PlayEvent.AEGIS_MAINTAIN){
			this._aegis.maintain(this._kiheis)
		}
	}

	private _crashCheckCounter:number = 0;
	private refreshStage(e:any=null){
		if(this._pause){
			return;
		}		
		
		this._timeLimit -= 1;
		if(this._timeLimit <= 0){
			this._statusBar.refreshTime(this._timeLimit);
			this.onStageClear()
			return
		}

		if(this._timeLimit < this._fps*30){
			//最后x秒加快出怪速度
			this.MAX_KAIJU_NUM = 40;
			this._kaijuGenInterval = this._stage.frameRate * 0.5
		}
		this._timePassed += 1;

		if(this._kaijuGenTicker == this._kaijuGenInterval){
			this._kaijuGenTicker = 0;
			this.generateKaiju();
		}
		this._kaijuGenTicker++;

		
		
		this._crashCheckCounter += 1
		let shouldCrashCheck:boolean = false;
		// if(this._crashCheckCounter == this._fps && this._kaijus && this._kiheis){
		if(this._crashCheckCounter == 10 && this._kaijus && this._kiheis){
			//每x帧进行一次机兵怪兽的碰撞检测
			this._crashCheckCounter = 0
			shouldCrashCheck = true
		}
		if(this._kiheis){
			for(let kihei of this._kiheis){
				if(shouldCrashCheck && this._kaijus){
					for(let kaiju of this._kaijus){
						const r=this.crashCheck(kihei, kaiju)
						if(r){
							kihei.damage(2)
							kaiju.damage(2)
							kihei.stopMove()
							continue
						}
					}
				}
				kihei.move();
				kihei.onCD();
			}
		}

		if(shouldCrashCheck){
			this._statusBar.refreshHP()
		}

		this._statusBar.refreshCD()
		if(this._timePassed == this._fps && this._timeLimit >=0){
			this._statusBar.refreshTime(this._timeLimit);
			this._timePassed = 0;
		}

		if(this._kaijus){
			for(let kaiju of this._kaijus){						
				kaiju.move();
			}
		}
		this._aegis.refresh();
	}

	private crashCheck(kihei:Kihei, kaiju:Kaiju){
		if(kihei.isAir()){
			if(kaiju instanceof Eagle){

			}else{
				return false
			}
		}else{
			if(kaiju.isAir()){
				return false
			}
		}
		const dis = egret.Point.distance(new egret.Point(kihei.x, kihei.y), new egret.Point(kaiju.x, kaiju.y));
		if(dis > 3*this._cellSize){
			return false
		}

		const pts = kaiju.getCollisionPoint()
		for(let pt of pts){
			if(kihei.hitTestPoint(pt.x, pt.y)){
				return true
			}
		}
		return false
	}

	private onStageClear(e:any=null){
		this.removeEventListener(egret.Event.ENTER_FRAME, this.refreshStage, this)
		const gameResult = new GameResult(true, this._destroyedKaijuNumber, 100 - this._aegis.getHPrate())
		this.addChild(gameResult)
	}

	private onGameOver(e:any=null){
		this.removeEventListener(egret.Event.ENTER_FRAME, this.refreshStage, this)	
		const gameResult = new GameResult(false, this._destroyedKaijuNumber, 100 - this._aegis.getHPrate())
		this.addChild(gameResult)
	}

	
}
