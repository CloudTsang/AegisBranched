/**空中大型怪 */
class Eagle extends Mosquito{	
	public constructor() {
		super()
		this.air = true;
		this.maxHP = 100
		this.speed = 400
		this.weight = 5
	}

	public getCollisionPoint():egret.Point[]{
		//空中大型怪检测点增加到左右各3个
		const x1 = this.x - this.anchorOffsetX;
		const y1 = this.y - this.anchorOffsetY;
		const x2 = x1 + this._w;
		const y2 = y1 + this._h;
		const y3 = y1 + this._h/2;

		// let sp = new egret.Shape();
		// sp.graphics.beginFill(0xFFFFFF, 0.5)
		// sp.graphics.drawRect(x1, y1 ,this._w, this._h);
		// sp.graphics.endFill()
		// this.parent.addChild(sp)

		return [
			new egret.Point(x1, y1),new egret.Point(x2, y1),
			new egret.Point(x1, y3),new egret.Point(x2, y3),
			new egret.Point(x1, y2),new egret.Point(x2, y2),			
		]
	}


	protected drawKaiju(){
		const size = this.mapCell.getSize();
		let bmp = new egret.Bitmap();		
		bmp.texture = RES.getRes('character_json#eagle');
		const scale = bmp.width/bmp.height	
		bmp.height = size*4;
		bmp.width = bmp.height * scale
		// bmp.x = bmp.width/2
		// bmp.y = bmp.height/2
		if(!this.sp){
			this.addChild(bmp);				
		}
		return bmp
	}
}