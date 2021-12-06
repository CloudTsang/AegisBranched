class BaseCharacter extends egret.Sprite{
	protected HP:number;
	protected maxHP:number;	
	protected air:boolean;
	protected weight:number;
	
	public mapCell:MapCell;
	public constructor() {
		super();
		this.touchEnabled = true;
		this.weight = 1
	}	

	/** 初始化*/
	public boot(){
		this.HP = this.maxHP;
	}

	public move(){

	}	

	public action(objs:BaseCharacter[]){

	}

	public damage(atk:number){
		this.HP -= atk;
		if(this.HP <= 0){
			//
		}
	}

	public isAir(){
		return this.air;
	}

	public setHP(v:number){
		this.HP = v
	}

	public changeHP(v:number){
		let hp = this.HP+v;
		if(hp < 0) hp=0
		else if(hp>this.maxHP) hp = this.maxHP
		this.HP = hp
	}

	public getHP(){
		return this.HP;
	}

	public getMaxHP(){
		return this.maxHP;
	}

	public getHPrate(){
		return Math.floor((this.HP/this.maxHP)*100)
	}

	public getWeight(){
		return this.weight
	}
}