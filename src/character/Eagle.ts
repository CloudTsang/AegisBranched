/**空中大型怪 */
class Eagle extends Mosquito{	
	public constructor() {
		super()
		this.air = true;
		this.maxHP = 100
		this.speed = 400
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