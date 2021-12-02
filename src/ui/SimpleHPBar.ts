class SimpleHPBar extends eui.ProgressBar{
	private _w:number
	public constructor(value:number, width:number, height:number=10) {
		super();
		// this.skinName = "resource/eui_skins/EnemyProgressBarSkin.exml",
		// this.value = value;
		this._w = width
		this.height = height
		this.width = width
		this.value = 100
		// this.tint = 0xFF0000
		this.drawBase();
	}

	private drawBase(){
		let sp:egret.Sprite = new egret.Sprite();
		sp.graphics.beginFill(0xFF0000, 0.1)
		sp.graphics.drawRect(0,0,this._w, this.height);
		sp.graphics.endFill()
		this.addChildAt(sp, 0)
	}
}