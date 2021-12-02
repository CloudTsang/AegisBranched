/**
 * 第一代机兵
 * 地面移动
 * 无视地形的小范围跳跃后圆形小范围内地面敌人中伤害（TODO：击退效果），cd快
 * HP高
 */
class KiheiGen1 extends Kihei{	
	/**攻击动作Tween，跳起砸地 */
	private _actionTween:egret.Tween;
	/**对空中地块发动攻击时回到最近的地面地块 */
	private _backCell:MapCell;
	public constructor() {
		super();
		this.HP = 500
		this.maxHP = 500;		
		this.skills = [
			new JumpAttack(this),
		]
	}

	public drawKihei():egret.DisplayObject{
		const size = this.mapCell.getSize();
		let bmp = new egret.Bitmap();		
		bmp.texture = RES.getRes('character_json#gen1');
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

	/**检查地块是否在攻击范围内 */
	private checkDistance(cell:MapCell, thisPoint:egret.Point, r:number):boolean{
		return egret.Point.distance(new egret.Point(cell.x, cell.y), thisPoint) <= r
	}
}