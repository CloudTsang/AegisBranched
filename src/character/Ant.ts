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
		let bmp = new egret.Bitmap();		
		bmp.texture = RES.getRes('character_json#ant');
		const scale = bmp.width/bmp.height
		bmp.height = size;
		bmp.width = bmp.height * scale
		// bmp.x = bmp.width/2
		// bmp.y = bmp.height/2
		if(!this.sp){
			this.addChild(bmp);				
		}		
		return bmp
	}
}