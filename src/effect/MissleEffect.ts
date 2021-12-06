class MissleEffect extends egret.Sprite implements IPoolObject{
	public activate:boolean

	private _start:egret.Point
	private _rotation:number
	private _cellSize:number
	private _distance:number
	private _distance2:number
	private _speed:number
	private _target:egret.Point
	private _delay:number

	private _missleSp:egret.DisplayObject
	private _trailSp:egret.DisplayObject
	private _particle:particle.GravityParticleSystem
	private _flyTween:egret.Tween

	public constructor() {
		super();
	}

	/**
	 * 导弹发射效果
	 * @param x 发射点x坐标
	 * @param y 发射点y坐标
	 * @param distance 飞行单位距离
	 * @param cellSize 单位长度
	 * @param speed 飞行速度
	 */
	public standby(x:number, y:number,  distance:number, cellSize:number, speed:number=6){
		this.removeChildren();
		this._missleSp = null;
		this._trailSp = null;
		this.activate = true;

		this._start = new egret.Point(x, y)
		this._distance = distance
		this._cellSize = cellSize
		this._distance2 = distance * cellSize
		this._speed = speed
		this._delay = this._distance2/speed
		this.draw()
		this.x = x
		this.y = y
		this.anchorOffsetX = this.width/2
		this.anchorOffsetY = this.height/2
	}

	public launch(){
		if(!this.activate){
			throw new egret.error("uninitialized MissleEffect");
		}
		let tw = egret.Tween.get(this._missleSp).to({
			y:-this._distance
		}, this._delay)
		.call(()=>{this.onBlast()}, this)
		
		tw.addEventListener(egret.Event.CHANGE, this.drawTrail, this)
		this._flyTween = tw
	}

	private onBlast(){
		this._flyTween.removeEventListener(egret.Event.CHANGE, this.drawTrail, this)
		this.removeChildren()
		SoundManager.instance().playBgs('bgs_impact_mp3')
		if(!this._particle){
			this._particle = new particle.GravityParticleSystem(RES.getRes('missleslice1_png'), RES.getRes('missleslice1_json'));
		}
		const ptc = this._particle
		const sp = this._missleSp
		ptc.x = sp.x
		ptc.y = sp.y
		this.addChild(ptc)
		ptc.start(200)
		this.dispatchEvent(new egret.Event(PlayEvent.MISSLE_BLAST))
	}

	private draw(){
		let bmp = new egret.Bitmap()
		bmp.texture = RES.getRes('missle_png')
		const scale = bmp.height/bmp.width
		bmp.width = 0.5*this._cellSize;
		bmp.height = scale * bmp.width;
		bmp.x = -bmp.width/2
		bmp.y = -bmp.height
		this._missleSp = bmp
		this.addChild(bmp)
	}

	/**导弹尾迹 */
	private drawTrail(){
		const missle = this._missleSp
		const h = missle.y+missle.height
		const w = 0.1*this._cellSize
		let sp = new egret.Shape()
		sp.graphics.beginFill(0xCFF4FD)
		sp.graphics.drawRect(-w/2,0,w,h )
		sp.graphics.endFill()
		if(this._trailSp){
			this.removeChild(this._trailSp)
		}
		this._trailSp = sp
		this.addChild(sp)
	}

	public static pool:Pool<MissleEffect> = new Pool<MissleEffect>(()=>{
		return new MissleEffect()
	})
}