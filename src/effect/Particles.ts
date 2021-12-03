class BlastParticles extends particle.GravityParticleSystem implements IPoolObject{
	public activate:boolean;	
	public constructor() {
		super(RES.getRes('kaijuslice1_png'), RES.getRes('kaijuslice1_json'))
	}
	public static pool:Pool<BlastParticles> = new Pool<BlastParticles>(()=>{
		return new BlastParticles()
	})	
}

class DamageParticle extends particle.GravityParticleSystem implements IPoolObject{
	public activate:boolean;	
	public constructor() {
		super(RES.getRes('kaijuslice1_png'), RES.getRes('kaijuslice2_json'))
	}
	public static pool:Pool<DamageParticle> = new Pool<DamageParticle>(()=>{
		return new DamageParticle()
	})	
}