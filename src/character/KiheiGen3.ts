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
		this.attackRange = 	-1;
		//第三代机兵伤害范围为长无限，宽damageRange的支线区域
		this.damageRange = 2;
		this.rangeType = RangeType.LINE;
		this.maxCD = egret.MainContext.instance.stage.frameRate * 5
	}

	public drawKihei():egret.Sprite{
		const size = this.mapCell.getSize();
		let sp = new egret.Sprite();			
		sp.graphics.beginFill(0x0000FF)
		sp.graphics.drawRect(0,0,size,size)
		sp.graphics.endFill();
		return sp
	}

	public action(){
	}
}