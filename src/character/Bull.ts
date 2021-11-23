/**地面大型怪 */
class Bull extends Kaiju{
	public constructor() {
		super()
		this.air = false;
		this.maxHP = 120;
		this.speed = 400;
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