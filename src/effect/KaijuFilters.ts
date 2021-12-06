// TypeScript file

class FiltersTool{
    public static instance:FiltersTool;
    public static getInstance():FiltersTool{
        if(!FiltersTool.instance){
            FiltersTool.instance = new FiltersTool();
        }
        return FiltersTool.instance
    }
    public redFilter:egret.GlowFilter = new egret.GlowFilter(0xDD0000, 1, 5, 5, 5);
    public shadowFilter:egret.DropShadowFilter = new egret.DropShadowFilter(10,45,null,0.5)
    public aimFilter:egret.GlowFilter = new egret.GlowFilter(0xFFFFFF, 0.1, 20,20, 25, 1, true, false);

    private aimTween:egret.Tween;
    constructor(){
        this.onAimed();
    }

    public onAimed(v:boolean=true){
        if(!this.aimTween){
            this.aimTween = egret.Tween.get(this.aimFilter,{loop:true})
                            .to({
                                alpha: 0.8
                            }, 500)
                            .to({
                                alpha: 0.1
                            }, 500)		
        }
    }

    
}