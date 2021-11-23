/**
 * 地面杂兵
 */
class Ant extends Kaiju{		
	public constructor() {
		super();
		this.air = false
		this.maxHP = 60;
		this.speed = 500;
	}

	protected drawKaiju(){
		const size = this.mapCell.getSize();
		let sp = new egret.Sprite();			
		sp.graphics.beginFill(0xFF0000)
		sp.graphics.drawCircle(0,0, size/3)
		sp.graphics.endFill();
		return sp
	}
}