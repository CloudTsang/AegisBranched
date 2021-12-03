window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.Button":"resource/eui_skins/ButtonSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","resource/assets/Button/button_down.png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "resource/assets/Button/button_up.png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 50;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/confirmbtn.exml'] = window.confirmbtn = (function (_super) {
	__extends(confirmbtn, _super);
	function confirmbtn() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 100;
		this.width = 300;
		this.elementsContent = [];
		this._Image1_i();
		
		this._Image2_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image2","",1,"")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image1","",0,"")
				])
		];
	}
	var _proto = confirmbtn.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.source = "resource/assets/confirmbtn_down.png";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.source = "resource/assets/confirmbtn.png";
		t.width = 300;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return confirmbtn;
})(eui.Skin);generateEUI.paths['resource/eui_skins/description1.exml'] = window.skins.description1 = (function (_super) {
	__extends(description1, _super);
	function description1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 600;
		this.width = 400;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Group1_i(),this._Image2_i()];
	}
	var _proto = description1.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "scale";
		t.height = 117;
		t.source = "resource/assets/gen2.png";
		t.width = 159.842;
		t.x = 27.267;
		t.y = 449.235;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.multiline = true;
		t.percentHeight = 90;
		t.percentWidth = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "通过点击机兵移动，拖动机兵攻击，击破不断袭来的坏兽。\n坏兽穿过地图最下方将会对万物中枢造成伤害，在限制时间内若万物中枢的耐久度降到0则Game Over。\n机兵与地面坏兽、空中大型坏兽相撞时，如果机兵处于移动中则会停止，此外耐久度将下降，如果降至0则不能再行动。";
		t.wordWrap = true;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 116;
		t.source = "resource/assets/bull.png";
		t.width = 151;
		t.x = 229.136;
		t.y = 453.671;
		return t;
	};
	return description1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/description2.exml'] = window.skins.description2 = (function (_super) {
	__extends(description2, _super);
	function description2() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 600;
		this.width = 400;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this._Image1_i(),this._Image2_i()];
	}
	var _proto = description2.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.visible = true;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.multiline = true;
		t.percentHeight = 90;
		t.percentWidth = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "第一代机兵[地面型]：\n使用跳跃对目标地点小范围内的地面敌人造成较高伤害。\n耐久：高  冷却时间：短\n\n\n\n\n第二代机兵[地面型]:\n对扇形范围内的地面及空中敌人发射导弹，造成中等伤害。\n耐久：中  冷却时间：中";
		t.wordWrap = true;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 116;
		t.source = "resource/assets/gen1.png";
		t.width = 151;
		t.x = 115.722;
		t.y = 177.186;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 98.324;
		t.source = "resource/assets/gen2.png";
		t.width = 144.406;
		t.x = 119.019;
		t.y = 471.676;
		return t;
	};
	return description2;
})(eui.Skin);generateEUI.paths['resource/eui_skins/description3.exml'] = window.skins.description3 = (function (_super) {
	__extends(description3, _super);
	function description3() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 600;
		this.width = 400;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this._Image1_i(),this._Image2_i()];
	}
	var _proto = description3.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.visible = true;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.multiline = true;
		t.percentHeight = 90;
		t.percentWidth = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "第三代机兵[地面型]：\n发射电磁轨道炮对直线范围内的地面及空中敌人造成高伤害。\n耐久：中  冷却时间：长\n\n\n\n\n第四代机兵[空中型]:\n对目标地点的大范围内的地面及空中敌人发射多联导弹造成小量伤害\n耐久：低  冷却时间：中";
		t.wordWrap = true;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 108.06;
		t.source = "resource/assets/gen3.png";
		t.width = 151;
		t.x = 115.722;
		t.y = 185.126;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 98.324;
		t.source = "resource/assets/gen4.png";
		t.width = 180.931;
		t.x = 99.963;
		t.y = 471.676;
		return t;
	};
	return description3;
})(eui.Skin);generateEUI.paths['resource/eui_skins/description4.exml'] = window.skins.description4 = (function (_super) {
	__extends(description4, _super);
	function description4() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 600;
		this.width = 400;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Group1_i(),this._Image2_i()];
	}
	var _proto = description4.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 39.078;
		t.source = "resource/assets/maintain.png";
		t.width = 68.888;
		t.x = 87.307;
		t.y = 174.057;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.lineSpacing = 20;
		t.multiline = true;
		t.percentHeight = 90;
		t.percentWidth = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "万物中枢的2种支援：\n每次游戏各有1次可以发动万物中枢的2种支援。\n点击          开始维修，使全部机兵回复一定耐久度。\n点击          发动电磁攻击，使场上的敌人在15秒间停止移动，并使空中敌人坠落到地面。";
		t.wordWrap = true;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 40.271;
		t.source = "resource/assets/emp.png";
		t.width = 68.292;
		t.x = 88.559;
		t.y = 271.249;
		return t;
	};
	return description4;
})(eui.Skin);generateEUI.paths['resource/eui_skins/EnemyProgressBarSkin.exml'] = window.skins.EnemyProgressBarSkin = (function (_super) {
	__extends(EnemyProgressBarSkin, _super);
	function EnemyProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb_enemy"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this.thumb_enemy_i()];
	}
	var _proto = EnemyProgressBarSkin.prototype;

	_proto.thumb_enemy_i = function () {
		var t = new eui.Image();
		this.thumb_enemy = t;
		t.percentHeight = 100;
		t.source = "resource/assets/ProgressBar/thumb_pb_enemy.png";
		t.percentWidth = 100;
		return t;
	};
	return EnemyProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameResult.exml'] = window.skins.GameResult = (function (_super) {
	__extends(GameResult, _super);
	function GameResult() {
		_super.call(this);
		this.skinParts = ["txt_type","txt_type2","txt_kaiju_num","txt_aegis_hp","btn_retry"];
		
		this.height = 800;
		this.width = 600;
		this.elementsContent = [this._Rect1_i(),this.txt_type_i(),this._Group1_i(),this.btn_retry_i()];
	}
	var _proto = GameResult.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.height = 800;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txt_type_i = function () {
		var t = new eui.Label();
		this.txt_type = t;
		t.size = 80;
		t.text = "Stage Clear";
		t.width = 425.438;
		t.x = 87.281;
		t.y = 62.336;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 465;
		t.width = 600;
		t.x = 0;
		t.y = 177.76;
		t.elementsContent = [this._Label1_i(),this.txt_type2_i(),this.txt_kaiju_num_i(),this.txt_aegis_hp_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "击破坏兽数：";
		t.x = 60;
		t.y = 89;
		return t;
	};
	_proto.txt_type2_i = function () {
		var t = new eui.Label();
		this.txt_type2 = t;
		t.text = "中枢损坏程度：";
		t.x = 55.055;
		t.y = 291;
		return t;
	};
	_proto.txt_kaiju_num_i = function () {
		var t = new eui.Label();
		this.txt_kaiju_num = t;
		t.x = 279.515;
		t.y = 89;
		return t;
	};
	_proto.txt_aegis_hp_i = function () {
		var t = new eui.Label();
		this.txt_aegis_hp = t;
		t.x = 271.403;
		t.y = 291;
		return t;
	};
	_proto.btn_retry_i = function () {
		var t = new eui.Button();
		this.btn_retry = t;
		t.height = 66.683;
		t.label = "再玩";
		t.width = 170.902;
		t.x = 219.323;
		t.y = 696.659;
		return t;
	};
	return GameResult;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "resource/assets/ProgressBar/thumb_pb.png";
		t.percentWidth = 100;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/KiheiStatus.exml'] = window.skins.KiheiStatus = (function (_super) {
	__extends(KiheiStatus, _super);
	function KiheiStatus() {
		_super.call(this);
		this.skinParts = ["kihei_icon","hp_gauge","base_group"];
		
		this.height = 250;
		this.width = 200;
		this.elementsContent = [this.base_group_i()];
	}
	var _proto = KiheiStatus.prototype;

	_proto.base_group_i = function () {
		var t = new eui.Group();
		this.base_group = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Group1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.3;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.kihei_icon_i(),this.hp_gauge_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		return t;
	};
	_proto.kihei_icon_i = function () {
		var t = new eui.Group();
		this.kihei_icon = t;
		t.percentHeight = 80;
		t.percentWidth = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.hp_gauge_i = function () {
		var t = new eui.ProgressBar();
		this.hp_gauge = t;
		t.percentHeight = 20;
		t.percentWidth = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "skins.ProgressBarSkin";
		t.value = 100;
		t.x = 0;
		t.y = 200;
		return t;
	};
	return KiheiStatus;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TotalStatus.exml'] = window.skins.TotalStatus = (function (_super) {
	__extends(TotalStatus, _super);
	function TotalStatus() {
		_super.call(this);
		this.skinParts = ["txt_tips","status_container","btn_maintain","btn_emp","aegis_hp","txt_time","contain"];
		
		this.elementsContent = [this.contain_i()];
	}
	var _proto = TotalStatus.prototype;

	_proto.contain_i = function () {
		var t = new eui.Group();
		this.contain = t;
		t.bottom = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.touchEnabled = false;
		t.layout = this._VerticalLayout3_i();
		t.elementsContent = [this._Group5_i()];
		return t;
	};
	_proto._VerticalLayout3_i = function () {
		var t = new eui.VerticalLayout();
		t.verticalAlign = "bottom";
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.percentWidth = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Group4_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.percentWidth = 100;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this.txt_tips_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.txt_tips_i = function () {
		var t = new eui.Label();
		this.txt_tips = t;
		t.size = 24;
		t.text = "";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.status_container_i(),this._Group1_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.status_container_i = function () {
		var t = new eui.Group();
		this.status_container = t;
		t.percentWidth = 80;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentWidth = 20;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.btn_maintain_i(),this.btn_emp_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		t.paddingLeft = 0;
		t.verticalAlign = "top";
		return t;
	};
	_proto.btn_maintain_i = function () {
		var t = new eui.Image();
		this.btn_maintain = t;
		t.height = 30;
		t.source = "resource/assets/maintain.png";
		t.width = 60;
		return t;
	};
	_proto.btn_emp_i = function () {
		var t = new eui.Image();
		this.btn_emp = t;
		t.height = 30;
		t.source = "resource/assets/emp.png";
		t.width = 60;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentWidth = 100;
		t.x = 0;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this.aegis_hp_i(),this.txt_time_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto.aegis_hp_i = function () {
		var t = new eui.ProgressBar();
		this.aegis_hp = t;
		t.percentWidth = 80;
		t.value = 100;
		return t;
	};
	_proto.txt_time_i = function () {
		var t = new eui.Label();
		this.txt_time = t;
		t.text = "3:00";
		return t;
	};
	return TotalStatus;
})(eui.Skin);