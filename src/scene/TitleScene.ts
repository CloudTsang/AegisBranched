class TitleScene extends egret.Sprite{
	private _descript:eui.Component
	private _btn:eui.Button
	private _startBtn:eui.Button
	private _desIndex:number
	public constructor() {
		super();
		const stageW = egret.MainContext.instance.stage.stageWidth;
		const stageH = egret.MainContext.instance.stage.stageHeight;
		this._desIndex = 1

		let comp1 = new eui.Component()
		// comp1.width = egret.MainContext.instance.stage.stageWidth
		comp1.skinName = `resource/eui_skins/description${this._desIndex}.exml`
		this.addChild(comp1)
		this._descript = comp1
		

		let btn = new eui.Button()
		btn.width = 200
		btn.height = 100
		btn.x = (stageW - btn.width)/2
		btn.y = stageH - 300;
		btn.label = '下一页'
		btn.addEventListener('touchTap', this.onNextPage, this)
		this.addChild(btn)
		this._btn = btn

		btn = new eui.Button()
		btn.width = 200
		btn.height = 100
		btn.x = (stageW - btn.width)/2
		btn.y = stageH - 150;
		btn.label = '开始'
		btn.addEventListener('touchTap', this.onStart, this)
		this.addChild(btn)
		this._startBtn = btn

		SoundManager.instance().play('tofinalbattle_mp3')
	}

	private onNextPage(e){
		if(this._desIndex<4){
			this._desIndex++
		}
		if(this._desIndex>=4)this._btn.visible = false;
		
		this._descript.skinName = `resource/eui_skins/description${this._desIndex}.exml`
	}

	private onStart(e){
		this.dispatchEvent(new egret.Event(PlayEvent.START))
	}

	public dispose(){

	}
}