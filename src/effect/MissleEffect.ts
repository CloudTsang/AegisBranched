class MissleEffect extends egret.Sprite {
	private _start:egret.Point
	private _rotation:number
	private _cellSize:number
	private _distance:number
	private _distance2:number
	private _speed:number
	private _target:egret.Point
	/**
	 * 导弹发射效果
	 * @param x 发射点x坐标
	 * @param y 发射点y坐标
	 * @param rotation 飞行角度
	 * @param distance 飞行单位距离
	 * @param cellSize 单位长度
	 * @param speed 飞行速度
	 */
	public constructor(x:number, y:number, rotation:number, distance:number, cellSize:number, speed?:number) {
		super();
		this._start = new egret.Point(x, y)
		this._rotation = rotation
		this._distance = distance
		this._cellSize = cellSize
		this._distance2 = distance * cellSize
		this._speed = speed?speed:72 
		this.draw()
		this.x = x
		this.y = y
		this.anchorOffsetX = this.width/2
		this.anchorOffsetY = this.height/2
		this.rotation = rotation+90

		const newX = Math.cos(rotation) * this._distance2 + x;
		const newY = Math.sin(rotation) * this._distance2 + y;
		this._target = new egret.Point(newX, newY);
		console.log(this._target, Math.sin(rotation), Math.cos(rotation))
		this.launch()
	}

	public launch(){
		egret.Tween.get(this).to({
			x:this._target.x,
			y:this._target.y
		}, 5000)
	}

	private draw(){
		let bmp = new egret.Bitmap()
		bmp.texture = RES.getRes('missle_png')

		const scale = bmp.height/bmp.width
		bmp.width = 0.5*this._cellSize;
		bmp.height = scale * bmp.width
		console.log(bmp.width, bmp.height, scale, bmp.height, bmp.width, this._cellSize)
		this.addChild(bmp)
	}

	/**导弹尾迹小方块 */
	private drawTinyCube(){

	}
}