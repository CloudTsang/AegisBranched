# AegisBranched
 Egret引擎做的模仿简化十三机兵战斗系统的小游戏，使用一二三四代机兵各一机抵抗坏兽入侵。


![pic](https://raw.githubusercontent.com/CloudTsang/AegisBranched/main/pic2.png)


操作也简化了，点击移动，拖动攻击，每体机兵简化到只有一种攻击：

第一代：跳跃 ~~链锯？那是什么~~

第二代：导弹 ~~哨戒炮？在梦里吧~~

第三代：电磁炮 ~~核弹？怎么可能~~

第四代：导弹 ~~小飞机？不存在的~~

坏兽只做了4种，地面空中大小型各1种，但实际上没什么大区别，只是朝着底线前进，原作的防护罩和导弹攻击都没做出来。


---
TODO：

攻击特效：导弹攻击的效果完全没做，一三代机兵的攻击都只有很简单的图形tween，EMP效果，一代机兵的击退效果没做出来。

更多的技能和关卡

Egret的beginGradientFill（显示攻击范围用的渐变填充方法）在安卓上疑似有bug，最后一个matrix参数在api里显示为可选，但真的不传会报错，传了也不能正常显示，找时间处理一下。

反正想在做得到的范围内尽可能还原原作系统的。

---

- 寻路

地面机兵和坏兽的移动路径计算，由于地面地图是有道路的，在生成地图数据时就把上下一个节点记录好了，相当于省略了计算F值的部分，循着节点找出最短路径即可。~~原作里面几乎没有移动需求，第一代是用跳的。~~

```
    public findPath(start:MapCell, target:MapCell, map:number[][]=null):{route:MapCell[], map:number[][]}{

        ...

        for(let node of start.nodes){					
			if(map[node[0]][node[1]] == 1){
				//已计算过该节点
				continue
			}			
			if(node[1] == target.cellX && node[0] == target.cellY){
				//到达目的节点
				return {route:[start].concat(...[this.cellArr[node[0]][node[1]]]), map:map};
			}
			map[node[0]][node[1]] = 1;
			nextNodes.push(this.cellArr[node[0]][node[1]]);
		}

        ...

        for(let node of nextNodes){
			let ret = this.findPath(node, target, tmpMap)
			if(ret.route){
				if(!finalRet){					
					finalRet = [start].concat(...ret.route);
					map = ret.map;
				}else if(ret.route.length < finalRet.length){
					finalRet = [start].concat(...ret.route);
					map = ret.map
				}
			}
										
		}
		return {route:finalRet, map:map, };
	}
```

- 碰撞

机兵和坏兽对撞会停止移动并扣血，在刷新舞台的ENTER_FRAME事件里，每隔几帧进行一次先用distance粗略判断距离再hitTestPoint碰撞检测

```
    private refreshStage(e:any=null){

        ...

        if(this._kiheis){
			for(let kihei of this._kiheis){
				if(shouldCrashCheck && this._kaijus){
					for(let kaiju of this._kaijus){
						const r=this.crashCheck(kihei, kaiju)
						if(r){
							kihei.damage(2)
							kaiju.damage(2)
							kihei.stopMove()
							continue
						}
					}
				}
				kihei.move();
				kihei.onCD();
			}
		}

        ...

    }

    private crashCheck(kihei:Kihei, kaiju:Kaiju){
		if(kihei.isAir()){
			if(kaiju instanceof Eagle){

			}else{
				return false
			}
		}else{
			if(kaiju.isAir()){
				return false
			}
		}
		const dis = egret.Point.distance(new egret.Point(kihei.x, kihei.y), new egret.Point(kaiju.x, kaiju.y));
		if(dis > 3*this._cellSize){
			return false
		}

		const pts = kaiju.getCollisionPoint()
		for(let pt of pts){
			if(kihei.hitTestPoint(pt.x, pt.y)){
				return true
			}
		}
		return false
	}
```

- 坏兽

坏兽的生成间隔和移动路径都是随机的，没有做出塔防游戏那种安排好的波次感和队列感，地面坏兽的出击点和目标点都是几种组合，因此可以缓存下来。

```
    private generateKaiju(){
		if(this._kaijus.length >= this.MAX_KAIJU_NUM){
			return;
		}
		const kaiju  = Kaiju.pool.getOne(); 
		const tmpCell = World.getIns().randomEntry(kaiju.isAir());
		const tmpCell2 = World.getIns().randomExit(kaiju.isAir());
		kaiju.mapCell = tmpCell;	
		kaiju.boot();		
		if(kaiju.isAir()){
			kaiju.startMove([tmpCell2])
		}else{ 
			const r = this._routeDict.checkRoute2(tmpCell, tmpCell2, true);		
			kaiju.startMove(r.route);
		}			
		kaiju.addEventListener(PlayEvent.KAIJU_DESTROYED, this.onKaijuExit, this);
		kaiju.addEventListener(PlayEvent.KAIJU_EXIT, this.onKaijuExit, this);
		this._kaijus.push(kaiju);	
		if(kaiju.isAir())	{
			this._airKaijuLayer.addChild(kaiju);
		}else{
			this._landKaijuLayer.addChild(kaiju);
		}
	}

    /**获取路径
	 * @param cache 需要寻路的场合是否缓存结果，机兵的移动路径不缓存
	 */
	public checkRoute2(mc1:MapCell, mc2:MapCell, cache:boolean=false):{route:MapCell[], map:number[][]}{
		const key = `${mc1.cellX}_${mc1.cellY}_${mc2.cellX}_${mc2.cellY}`
		if(this._dict[key]){
			console.log('已缓存当前路径')
			return this._dict[key]
		}	
		const route = World.getIns().findPath(mc1,mc2,null)
		if(cache){
			this._dict[key] == route;
		}
		return route;		
	}
```


- 移动
地面单位的移动路径是一个节点数组，空中则是算的距离和角度直线移动过去的

```
    //地面
    public move(){
		if(this.route == null || this.moveTween ){
			return;
		}
		let mc:MapCell = this.route[this.curRouteIndex]
		this.moveTween = egret.Tween.get(this)
		.to({
			x:mc.x,
			y:mc.y
		}, 100)
		.call(this.onMoveStep, this)
	}

    //空中
    public move(){
		if(this.targetPosition == null || this.moveTween){
			return;
		}
		const d = this.mapCell.getSize();
		const newx = this.x + this._cos*d;
		const newy = this.y + this._sin*d;
		this.moveTween = egret.Tween.get(this)
		.to({
			x:newx,
			y:newy
		}, 100)
		.call(this.onMoveStep, this)
	}
```


---
十三机兵的战斗系统由于作品内容侧重点等原因没有做得很出彩，但是完成度还是很高的，所以个人才想做个小作品来练习一下。标题的Branched取自官方第二章音乐集，坊间普遍认为是前几次轮回走BE路线用的音乐，所以机兵只有4台也放不出多少技能。~~做不出来的接口~~