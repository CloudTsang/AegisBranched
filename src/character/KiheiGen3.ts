/**
 * 第三代机兵
 * 地面移动
 * 直线范围内地面空中敌人高伤害，cd慢
 * HP中
 */
class KiheiGen3 extends Kihei{

	public constructor() {
		super();
		this.maxHP = 300;
		this.skills = [
			new RailGun(this),
		]								
	}

	public drawKihei():egret.DisplayObject{
		const size = this.mapCell.getSize();
		let bmp = new egret.Bitmap();		
		bmp.texture = RES.getRes('character_json#gen3');
		const scale = bmp.width/bmp.height
		// bmp.width = size*2;
		bmp.height = size*1.5;
		bmp.width = bmp.height * scale
		bmp.x = 0
		bmp.y = 0;
		if(!this.sp){
			this.addChild(bmp);				
		}
		return bmp
	}
	
}