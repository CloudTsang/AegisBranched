/**
 * 第二代机兵
 * 地面移动
 * 扇形范围内的地面空中敌人中伤害，cd中
 * HP中
 */
class KiheiGen2 extends Kihei{
	public constructor() {
		super();
		this.maxHP = 350;		
		this.skills = [
			new Missile(this),
		]		
	}

	public drawKihei():egret.DisplayObject{
		const size = this.mapCell.getSize();
		let bmp = new egret.Bitmap();		
		bmp.texture = RES.getRes('character_json#gen2');
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