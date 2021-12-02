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
		let bmp = new egret.Bitmap();		
		bmp.texture = RES.getRes('character_json#bull');
		const scale = bmp.width/bmp.height	
		bmp.height = size*1.5;
		bmp.width = bmp.height * scale
		// bmp.x = bmp.width/2
		// bmp.y = bmp.height/2
		if(!this.sp){
			this.addChild(bmp);				
		}
		return bmp
	}
}