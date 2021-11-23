class BaseCharacter extends egret.Sprite{
	protected HP:number;
	protected maxHP:number;	
	protected air:boolean;
	
	public mapCell:MapCell;
	public constructor() {
		super();
		this.touchEnabled = true;
	}	

	/** 初始化*/
	public boot(){
		this.HP = this.maxHP;
	}

	public move(){

	}	

	public action(){

	}

	public damage(){

	}

	public isAir(){
		return this.air;
	}

	public getHP(){
		return this.HP;
	}

	public getMaxHP(){
		return this.maxHP;
	}
}