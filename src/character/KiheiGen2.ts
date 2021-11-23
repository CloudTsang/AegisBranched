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
		this.attackRange = 	-1;
		this.damageRange = 4;
		this.maxCD = egret.MainContext.instance.stage.frameRate * 3;
		this.rangeType = RangeType.FAN;
	}

	public drawKihei():egret.Sprite{
		const size = this.mapCell.getSize();
		let sp = new egret.Sprite();			
		sp.graphics.beginFill(0xFF0000)
		sp.graphics.drawRect(0,0,size,size)
		sp.graphics.endFill();
		return sp
	}

	public action(){
	}
}