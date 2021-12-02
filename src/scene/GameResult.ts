class GameResult extends eui.Component{
	private txt_type:eui.Label
	private txt_type2:eui.Label
	private txt_kaiju_num:eui.Label
	private txt_aegis_hp:eui.Label

	private btn_retry:eui.Button

	private _kaijuNum:number
	private _aegisHP:number
	
	private _clear:boolean
	private _callBack:(e)=>void
	/**
	 * 结果面板
	 * @param clear 是否通关
	 * @param kaijuNum 击破坏兽数量
	 * @param aegisHP 中枢损坏百分比
	 */
	public constructor(clear:boolean, kaijuNum:number, aegisHP:number,  retryCb:(e)=>void=null) {
		super();
		this.skinName = 'resource/eui_skins/GameResult.exml'
		this.addEventListener(eui.UIEvent.CREATION_COMPLETE, this.initData, this);
		this._clear = clear;
		this._kaijuNum = kaijuNum
		this._aegisHP = aegisHP
		this._callBack = retryCb;
	}
	private initData(){
		if(this._clear){
			this.txt_type.text = 'Stage Clear'
			this.txt_kaiju_num.text = ''+this._kaijuNum
			this.txt_aegis_hp.text = this._aegisHP + '%'
		}else{
			this.txt_type.text = 'Game Over'
			this.txt_kaiju_num.text = ''+this._kaijuNum
			this.txt_type2.visible = false;
		}
		
		this.btn_retry.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		this.width = egret.MainContext.instance.stage.stageWidth
	}

	public dispose(){
		this.btn_retry.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
		this.parent && this.parent.removeChild(this)
	}

	private onClick(e:any){
		if(this._callBack){
			this._callBack(e);
		}else{
			this.dispatchEvent(new egret.Event(PlayEvent.CLEAR));
		}
	}
}