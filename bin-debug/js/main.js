

var extendStatics = Object.setPrototypeOf ||
({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

var __extends = function (d, b) {
extendStatics(d, b);
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var __assign = Object.assign || function (t) {
for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
}
return t;
};

var __rest = function (s, e) {
var t = {};
for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
    }
return t;
};

var __decorate = function (decorators, target, key, desc) {
var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __param = function (paramIndex, decorator) {
return function (target, key) { decorator(target, key, paramIndex); }
};

var __metadata = function (metadataKey, metadataValue) {
if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
};

var __awaiter = function (thisArg, _arguments, P, generator) {
function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};

var __generator = function (thisArg, body) {
var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
function verb(n) { return function (v) { return step([n, v]); }; }
function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
            case 0: case 1: t = op; break;
            case 4: _.label++; return { value: op[1], done: false };
            case 5: _.label++; y = op[1]; op = [0]; continue;
            case 7: op = _.ops.pop(); _.trys.pop(); continue;
            default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                if (t[2]) _.ops.pop();
                _.trys.pop(); continue;
        }
        op = body.call(thisArg, _);
    } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
}
};

var __exportStar = function(m, exports) {
for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};

var __createBinding = Object.create ? (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
o[k2] = m[k];
});

var __values = function (o) {
var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
if (m) return m.call(o);
if (o && typeof o.length === "number") return {
    next: function () {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
    }
};
throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __read = function (o, n) {
var m = typeof Symbol === "function" && o[Symbol.iterator];
if (!m) return o;
var i = m.call(o), r, ar = [], e;
try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
}
catch (error) { e = { error: error }; }
finally {
    try {
        if (r && !r.done && (m = i["return"])) m.call(i);
    }
    finally { if (e) throw e.error; }
}
return ar;
};

var __spread = function () {
for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
return ar;
};

var __spreadArrays = function () {
for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
return r;
};

var __await = function (v) {
return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = function (thisArg, _arguments, generator) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var g = generator.apply(thisArg, _arguments || []), i, q = [];
return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
function fulfill(value) { resume("next", value); }
function reject(value) { resume("throw", value); }
function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};

var __asyncDelegator = function (o) {
var i, p;
return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
};

var __asyncValues = function (o) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var m = o[Symbol.asyncIterator], i;
return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};

var __makeTemplateObject = function (cooked, raw) {
if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
o["default"] = v;
};

var __importStar = function (mod) {
if (mod && mod.__esModule) return mod;
var result = {};
if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
__setModuleDefault(result, mod);
return result;
};

var __importDefault = function (mod) {
return (mod && mod.__esModule) ? mod : { "default": mod };
};

var __classPrivateFieldGet = function (receiver, privateMap) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
}
return privateMap.get(receiver);
};

var __classPrivateFieldSet = function (receiver, privateMap, value) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
}
privateMap.set(receiver, value);
return value;
};

var __reflect = function(p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Const.ts":
/***/ (function(module, exports) {

/**移动方式 */
var Movement;
(function (Movement) {
    /**地面 */
    Movement[Movement["LAND"] = 0] = "LAND";
    /**空中 */
    Movement[Movement["AIR"] = 1] = "AIR";
})(Movement || (Movement = {}));
window["Movement"] = Movement;
/**地图区块类型 */
var MapCellType = /** @class */ (function () {
    function MapCellType() {
    }
    /**空中 */
    MapCellType.AIR = 0;
    /**地面 */
    MapCellType.LAND = 1;
    /**地面出怪点 */
    MapCellType.LAND_KAIJU = 2;
    /**空中出怪点 */
    MapCellType.AIR_KAIJU = 3;
    /**地面出击点 */
    MapCellType.LAND_KIHEI = 4;
    /**空中出击点 */
    MapCellType.AIR_KIHEI = 5;
    return MapCellType;
}());
window["MapCellType"] = MapCellType;
__reflect(MapCellType.prototype,"MapCellType",[]); 
/**攻击范围类型 */
var RangeType;
(function (RangeType) {
    RangeType[RangeType["CIRCLE"] = 0] = "CIRCLE";
    RangeType[RangeType["FAN"] = 1] = "FAN";
    RangeType[RangeType["LINE"] = 2] = "LINE";
})(RangeType || (RangeType = {}));
window["RangeType"] = RangeType;
/**操作阶段 */
var PlayPhase;
(function (PlayPhase) {
    /**空闲 */
    PlayPhase[PlayPhase["SPARE"] = 0] = "SPARE";
    /**等待确认行动 */
    PlayPhase[PlayPhase["WAIT_CONFIRM"] = 1] = "WAIT_CONFIRM";
    /**机兵攻击中 */
    PlayPhase[PlayPhase["ACTION"] = 2] = "ACTION";
})(PlayPhase || (PlayPhase = {}));
window["PlayPhase"] = PlayPhase;
var KiheiSkill;
(function (KiheiSkill) {
    /**跳跃攻击 */
    KiheiSkill[KiheiSkill["JUMP_ATTACK"] = 0] = "JUMP_ATTACK";
    /**电磁炮 */
    KiheiSkill[KiheiSkill["RAIL_GUN"] = 1] = "RAIL_GUN";
    /**导弹 */
    KiheiSkill[KiheiSkill["MISSILE"] = 2] = "MISSILE";
    /**多联导弹 */
    KiheiSkill[KiheiSkill["MULT_MISSILE"] = 3] = "MULT_MISSILE";
})(KiheiSkill || (KiheiSkill = {}));
window["KiheiSkill"] = KiheiSkill;
var PlayEvent = /** @class */ (function () {
    function PlayEvent() {
    }
    PlayEvent.START = 'START';
    PlayEvent.RETRY = 'RETRY';
    PlayEvent.CLEAR = 'CLEAR';
    PlayEvent.GAME_OVER = 'GAME_OVER';
    PlayEvent.KIHEI_ACTION = 'KIHEI_ACTION';
    PlayEvent.KIHEI_ACTION_FINISH = 'KIHEI_ACTION_FINISH';
    PlayEvent.GET_DAMAGE = 'GET_DAMAGE';
    PlayEvent.KAIJU_EXIT = 'KAIJU_EXIT';
    PlayEvent.KAIJU_DESTROYED = 'KAIJU_DESTROYED';
    return PlayEvent;
}());
window["PlayEvent"] = PlayEvent;
__reflect(PlayEvent.prototype,"PlayEvent",[]); 


/***/ }),

/***/ "./src/GlobalMethod.ts":
/***/ (function(module, exports) {

var GlobalMethod = /** @class */ (function () {
    function GlobalMethod() {
    }
    /**
     * 获取两个坐标的旋转角度，
     */
    GlobalMethod.getRotation = function (x1, y1, x2, y2) {
        var tan = Math.atan((y2 - y1 + 0.1) / (x2 - x1 + 0.1));
        var deg = tan / (Math.PI / 180);
        if (x2 < x1) {
            deg = -(180 - deg);
        }
        return deg;
    };
    GlobalMethod.random = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    /**
     * 获取一个mc帧动画
     * @param {stirng} name mc帧动画的文件名
     * @param {number} playNum 帧动画播放次数 -1为循环播放 默认循环播放
     */
    GlobalMethod.getMc = function (name, playNum) {
        if (playNum === void 0) { playNum = -1; }
        var data = RES.getRes(name + "_json");
        var txtr = RES.getRes(name + "_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        var mc = new egret.MovieClip(mcFactory.generateMovieClipData());
        // mc.play(playNum);
        return mc;
    };
    GlobalMethod.loadImage = function (url, listner, successFunc, failFunc) {
        var loader = new egret.ImageLoader();
        loader.crossOrigin = "anonymous"; // 跨域请求
        loader.load(url);
        loader.once(egret.Event.COMPLETE, successFunc, listner);
        loader.once(egret.IOErrorEvent.IO_ERROR, failFunc, listner);
    };
    GlobalMethod.httpReq = function (url, param, method, listner, successFunc, failFunc, contentType, token) {
        if (method == 'GET') {
            url = url + '?' + param;
        }
        var req = new egret.HttpRequest();
        req.open(url, method);
        req.setRequestHeader("Accept", "*/*");
        if (token)
            req.setRequestHeader("Authorization", token);
        req.setRequestHeader("Content-Type", contentType);
        if (method == 'GET') {
            req.send();
        }
        else {
            req.send(param);
        }
        req.addEventListener(egret.Event.COMPLETE, successFunc, listner);
        if (failFunc != null) {
            req.addEventListener(egret.IOErrorEvent.IO_ERROR, failFunc, listner);
            req.addEventListener(egret.HTTPStatusEvent.CLOSE, failFunc, listner);
        }
    };
    GlobalMethod.Loaded = function () {
        window.parent.postMessage({
            "isLoadComplete": true,
            "url": window.location.href
        }, '*');
    };
    return GlobalMethod;
}());
window["GlobalMethod"] = GlobalMethod;
__reflect(GlobalMethod.prototype,"GlobalMethod",[]); 


/***/ }),

/***/ "./src/LoadingUI.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = /** @class */ (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
window["LoadingUI"] = LoadingUI;
__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]); 


/***/ }),

/***/ "./src/Main.ts":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/Const.ts");
__webpack_require__("./src/GlobalMethod.ts");
__webpack_require__("./src/LoadingUI.ts");
__webpack_require__("./src/Main.ts");
__webpack_require__("./src/Platform.ts");
__webpack_require__("./src/character/BaseCharacter.ts");
__webpack_require__("./src/utils/Pool.ts");
__webpack_require__("./src/character/Kaiju.ts");
__webpack_require__("./src/character/Ant.ts");
__webpack_require__("./src/character/Bull.ts");
__webpack_require__("./src/character/Mosquito.ts");
__webpack_require__("./src/character/Eagle.ts");
__webpack_require__("./src/character/Kihei.ts");
__webpack_require__("./src/character/KiheiGen1.ts");
__webpack_require__("./src/character/KiheiGen2.ts");
__webpack_require__("./src/character/KiheiGen3.ts");
__webpack_require__("./src/character/KiheiGen4.ts");
__webpack_require__("./src/scene/IMapData.ts");
__webpack_require__("./src/scene/MapCell.ts");
__webpack_require__("./src/scene/MapEditor.ts");
__webpack_require__("./src/scene/StageScene.ts");
__webpack_require__("./src/scene/TitleScene.ts");
__webpack_require__("./src/scene/World.ts");
__webpack_require__("./src/skill/Skill.ts");
__webpack_require__("./src/skill/JumpAttack.ts");
__webpack_require__("./src/skill/Missile.ts");
__webpack_require__("./src/skill/MultMissile.ts");
__webpack_require__("./src/skill/RailGun.ts");
__webpack_require__("./src/ui/ActionRange.ts");
__webpack_require__("./src/ui/ConfirmBtn.ts");
__webpack_require__("./src/ui/Status.ts");
__webpack_require__("./src/utils/Dialog.ts");
__webpack_require__("./src/utils/LifecycleCallback.ts");
__webpack_require__("./src/utils/RouteDict.ts");
__webpack_require__("./src/utils/SoundManager.ts");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.mapEditor = egret.getOption('map') != '';
        _this.stageName = egret.getOption('stage');
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
            context.onUpdate = function () {
            };
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.touchEnabled = true;
                        return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        this.startAnimation(result);
                        return [4 /*yield*/, platform.login()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 4:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    Main.prototype.createGameScene = function () {
        // let sp = new egret.Shape();
        // sp.graphics.beginFill(0x000000)
        // sp.graphics.drawRect(0,0,this.stage.stageWidth, this.stage.stageHeight);
        // sp.graphics.endFill();
        // this.addChild(sp);       
        if (this.mapEditor) {
            var me = new MapEditor();
            if (this.stageName != '') {
                me.loadMap(this.stageName);
            }
            else {
                me.newMap();
            }
            this.addChild(me);
            return;
        }
        if (this.stageName == '') {
            this.stageName = 'stage1';
        }
        var stageScene = new StageScene();
        stageScene.y = 0;
        this.addChild(stageScene);
        stageScene.play(this.stageName);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    Main.prototype.startAnimation = function (result) {
    };
    return Main;
}(egret.DisplayObjectContainer));
window["Main"] = Main;
__reflect(Main.prototype,"Main",[]); 


/***/ }),

/***/ "./src/Platform.ts":
/***/ (function(module, exports) {

var DebugPlatform = /** @class */ (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
window["DebugPlatform"] = DebugPlatform;
__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]); 
if (!window.platform) {
    window.platform = new DebugPlatform();
}


/***/ }),

/***/ "./src/character/Ant.ts":
/***/ (function(module, exports) {

/**
 * 地面杂兵
 */
var Ant = /** @class */ (function (_super) {
    __extends(Ant, _super);
    function Ant() {
        var _this = _super.call(this) || this;
        _this.air = false;
        _this.maxHP = 60;
        _this.speed = 500;
        return _this;
    }
    Ant.prototype.drawKaiju = function () {
        var size = this.mapCell.getSize();
        var bmp = new egret.Bitmap();
        bmp.texture = RES.getRes('character_json#ant');
        var scale = bmp.width / bmp.height;
        // bmp.width = size*2;
        bmp.height = size;
        bmp.width = bmp.height * scale;
        bmp.x = size / 2;
        bmp.y = size / 2;
        if (!this.sp) {
            this.addChild(bmp);
        }
        return bmp;
    };
    return Ant;
}(Kaiju));
window["Ant"] = Ant;
__reflect(Ant.prototype,"Ant",[]); 


/***/ }),

/***/ "./src/character/BaseCharacter.ts":
/***/ (function(module, exports) {

var BaseCharacter = /** @class */ (function (_super) {
    __extends(BaseCharacter, _super);
    function BaseCharacter() {
        var _this = _super.call(this) || this;
        _this.touchEnabled = true;
        return _this;
    }
    /** 初始化*/
    BaseCharacter.prototype.boot = function () {
        this.HP = this.maxHP;
    };
    BaseCharacter.prototype.move = function () {
    };
    BaseCharacter.prototype.action = function () {
    };
    BaseCharacter.prototype.damage = function () {
    };
    BaseCharacter.prototype.isAir = function () {
        return this.air;
    };
    BaseCharacter.prototype.getHP = function () {
        return this.HP;
    };
    BaseCharacter.prototype.getMaxHP = function () {
        return this.maxHP;
    };
    return BaseCharacter;
}(egret.Sprite));
window["BaseCharacter"] = BaseCharacter;
__reflect(BaseCharacter.prototype,"BaseCharacter",[]); 


/***/ }),

/***/ "./src/character/Bull.ts":
/***/ (function(module, exports) {

/**地面大型怪 */
var Bull = /** @class */ (function (_super) {
    __extends(Bull, _super);
    function Bull() {
        var _this = _super.call(this) || this;
        _this.air = false;
        _this.maxHP = 120;
        _this.speed = 400;
        return _this;
    }
    Bull.prototype.drawKaiju = function () {
        var size = this.mapCell.getSize();
        var bmp = new egret.Bitmap();
        bmp.texture = RES.getRes('character_json#bull');
        var scale = bmp.width / bmp.height;
        bmp.height = size * 1.5;
        bmp.width = bmp.height * scale;
        bmp.x = -size / 2;
        bmp.y = -size / 2;
        if (!this.sp) {
            this.addChild(bmp);
        }
        return bmp;
    };
    return Bull;
}(Kaiju));
window["Bull"] = Bull;
__reflect(Bull.prototype,"Bull",[]); 


/***/ }),

/***/ "./src/character/Eagle.ts":
/***/ (function(module, exports) {

/**空中大型怪 */
var Eagle = /** @class */ (function (_super) {
    __extends(Eagle, _super);
    function Eagle() {
        var _this = _super.call(this) || this;
        _this.air = true;
        _this.maxHP = 100;
        _this.speed = 400;
        return _this;
    }
    Eagle.prototype.getCollisionPoint = function () {
        //空中大型怪检测点增加到左右各3个
        var x1 = this.x;
        var y1 = this.y;
        var x2 = x1 + this.width;
        var y2 = y1 + this.height;
        var y3 = y1 + this.height / 2;
        return [
            new egret.Point(x1, y1), new egret.Point(x2, y1),
            new egret.Point(x1, y3), new egret.Point(x2, y3),
            new egret.Point(x1, y2), new egret.Point(x2, y2),
        ];
    };
    Eagle.prototype.drawKaiju = function () {
        var size = this.mapCell.getSize();
        var bmp = new egret.Bitmap();
        bmp.texture = RES.getRes('character_json#eagle');
        var scale = bmp.width / bmp.height;
        bmp.height = size * 4;
        bmp.width = bmp.height * scale;
        bmp.x = -size / 2;
        bmp.y = -size / 2;
        if (!this.sp) {
            this.addChild(bmp);
        }
        return bmp;
    };
    return Eagle;
}(Mosquito));
window["Eagle"] = Eagle;
__reflect(Eagle.prototype,"Eagle",[]); 


/***/ }),

/***/ "./src/character/Kaiju.ts":
/***/ (function(module, exports) {

/**怪兽基类 */
var Kaiju = /** @class */ (function (_super) {
    __extends(Kaiju, _super);
    function Kaiju() {
        return _super.call(this) || this;
    }
    Kaiju.prototype.boot = function () {
        _super.prototype.boot.call(this);
        this.arrived = false;
        this.curRouteIndex = 1;
        if (!this.sp) {
            var sp = this.drawKaiju();
            this.anchorOffsetX = sp.width / 2;
            this.anchorOffsetY = sp.height / 2;
            this.addChild(sp);
            this.sp = sp;
            this._w = this.width;
            this._h = this.height;
        }
        this.createRedFilter();
    };
    Kaiju.prototype.drawKaiju = function () {
        return null;
    };
    /**设置移动路径 */
    Kaiju.prototype.startMove = function (route) {
        this.route = route;
        this.curRouteIndex = 1;
        // for(let mc of route){
        // 	console.log(mc.cellX, mc.cellY, mc.x, mc.y, mc.getSize())
        // }
    };
    Kaiju.prototype.move = function () {
        if (this.route == null || this.moveTween) {
            return;
        }
        var mc = this.route[this.curRouteIndex];
        //随机前进坐标防止挤在一起
        var x = mc.x + Math.random() * mc.width - mc.width / 2;
        var y = mc.y + Math.random() * mc.height - mc.height / 2;
        if (this.curRouteIndex == this.route.length - 1) {
            y += mc.getSize();
        }
        this.moveTween = egret.Tween.get(this)
            .to({
            x: x,
            y: y
        }, this.speed)
            .call(this.onMoveStep, this);
    };
    Kaiju.prototype.onMoveStep = function () {
        this.curRouteIndex++;
        if (this.curRouteIndex >= this.route.length) {
            this.mapCell = this.route[this.route.length - 1];
            this.moveTween = null;
            this.route = null;
            this.arrived = true;
            this.dispatchEvent(new egret.Event(PlayEvent.KAIJU_EXIT));
            return;
        }
        this.mapCell = this.route[this.curRouteIndex];
        this.moveTween = null;
    };
    /**进入机兵攻击范围的闪烁特效 */
    Kaiju.prototype.aimed = function (v) {
        if (v) {
            if (this.aimTween) {
                return;
            }
            var filter = new egret.GlowFilter(0xFFFFFF, 0.1, 20, 20, 25, 1, true, false);
            this.filters = [this.redFilter, filter];
            this.aimTween = egret.Tween.get(filter, { loop: true })
                .to({
                alpha: 0.8
            }, 500)
                .to({
                alpha: 0.1
            }, 500);
        }
        else {
            if (!this.aimTween) {
                return;
            }
            this.filters = [this.redFilter];
            this.aimTween.pause();
            this.aimTween = null;
        }
    };
    /**获取开始是否已到达目标点（用于判断KAIJU_EXIT事件的发出是由于被破坏还是到达目标点） */
    Kaiju.prototype.getArrived = function () {
        return this.arrived;
    };
    Kaiju.prototype.dispose = function () {
        this.filters = [];
        this.parent && this.parent.removeChild(this);
        this.moveTween && this.moveTween.pause();
        this.moveTween = null;
        this.aimTween && this.aimTween.pause();
        this.aimTween = null;
        this.route = null;
        this.activate = false;
    };
    Kaiju.prototype.pause = function () {
        this.moveTween && this.moveTween.pause();
    };
    Kaiju.prototype.resume = function () {
        this.moveTween && this.moveTween.play();
    };
    Kaiju.prototype.getCollisionPoint = function () {
        //碰撞检测点四角
        var x1 = this.x;
        var y1 = this.y;
        var x2 = x1 + this._w;
        var y2 = y1 + this._h;
        // if(this._collisionArea){
        // 	this._collisionArea.parent && this._collisionArea.parent.removeChild(this._collisionArea)
        // 	this._collisionArea = null
        // }
        // if(!this._collisionArea){
        // 	let sp = new egret.Shape();
        // 	sp.graphics.beginFill(0xFFFFFF);
        // 	sp.graphics.drawRect(this.x,this.y,this._w,this._h)
        // 	sp.graphics.endFill();
        // 	this.parent.addChild(sp);
        // 	this._collisionArea = sp
        // }
        return [
            new egret.Point(x1, y1), new egret.Point(x2, y1),
            new egret.Point(x1, y2), new egret.Point(x2, y2)
        ];
    };
    Kaiju.prototype.createRedFilter = function () {
        var filter = new egret.GlowFilter(0xDD0000, 1, 5, 5, 5);
        this.redFilter = filter;
        this.filters = [filter];
    };
    Kaiju.pool = new Pool(function () {
        return new Ant();
        // return new Eagle();		
        var air = Math.random() <= 0.5;
        var ty = Math.random() <= 0.2;
        // const ty = false
        if (air && ty) {
            return new Eagle();
        }
        if (air && !ty) {
            return new Mosquito();
        }
        if (!air && ty) {
            return new Bull();
        }
        if (!air && !ty) {
            return new Ant();
        }
    });
    return Kaiju;
}(BaseCharacter));
window["Kaiju"] = Kaiju;
__reflect(Kaiju.prototype,"Kaiju",["IPoolObject"]); 


/***/ }),

/***/ "./src/character/Kihei.ts":
/***/ (function(module, exports) {

/**机兵基类
 * 操作方式：
 * 点击：选中机兵，再点击地图移动
 * 拖动：向对应方向发动攻击
*/
var Kihei = /** @class */ (function (_super) {
    __extends(Kihei, _super);
    function Kihei() {
        return _super.call(this) || this;
    }
    Kihei.prototype.boot = function () {
        _super.prototype.boot.call(this);
        var sp = this.drawKihei();
        if (!sp) {
            return;
        }
        this.anchorOffsetX = sp.width / 2;
        this.anchorOffsetY = sp.height / 2;
        this.addChild(sp);
        this.sp = sp;
        this.maxCD = -1;
        this.cd = this.maxCD;
        this.mountSkill();
    };
    /**设置移动路径 */
    Kihei.prototype.startMove = function (route, targetPosition) {
        this.route = route;
        this.curRouteIndex = 1;
        this.targetPosition = targetPosition;
    };
    /**按照移动路径前进一单位，正在播放移动动画时直接返回 */
    Kihei.prototype.move = function () {
        if (this.route == null || this.moveTween) {
            return;
        }
        var mc = this.route[this.curRouteIndex];
        this.moveTween = egret.Tween.get(this)
            .to({
            x: mc.x,
            y: mc.y
        }, 100)
            .call(this.onMoveStep, this);
    };
    Kihei.prototype.onMoveStep = function () {
        this.curRouteIndex++;
        if (this.curRouteIndex >= this.route.length) {
            this.moveTween = egret.Tween.get(this)
                .to({
                x: this.targetPosition.x,
                y: this.targetPosition.y
            }, 50);
            this.mapCell = this.route[this.route.length - 1];
            this.moveTween = null;
            this.route = null;
            return;
        }
        this.mapCell = this.route[this.curRouteIndex];
        this.moveTween = null;
    };
    /**显示攻击范围 */
    Kihei.prototype.showAttackRange = function (v) {
        this.skills[0].showAttackRange(v);
    };
    /**
     * 显示伤害范围
     * @param x 显示位置，传入-1时不显示
     * @param y 显示位置，传入-1时不显示
     * @param cellArr 地块数组
     */
    Kihei.prototype.showDamageRange = function (x, y, cellArr) {
        // let sp = new egret.Shape();
        // 	sp.graphics.beginFill(0xFFFFFF);
        // 	sp.graphics.drawRect(this.x,this.y,this.width,this.height)
        // 	sp.graphics.endFill();
        // 	this.parent.addChild(sp);
        this.skills[0].showDamageRange(x, y, cellArr);
    };
    Kihei.prototype.checkKaijuInRange = function (kaiju) {
        return this.skills[0].checkInRange(kaiju);
    };
    Kihei.prototype.getActionTarget = function () {
        return this.skills[0].actionTarget;
    };
    Kihei.prototype.action = function () {
        this.skills[0].action();
    };
    Kihei.prototype.mountSkill = function (ty) {
        if (ty === void 0) { ty = null; }
        if (!this.skills || this.skills.length == 0) {
            throw new Error('Kihei has no skill');
        }
        return this.skills[0];
    };
    Kihei.prototype.drawKihei = function () {
        return null;
    };
    /** 是否在cd中*/
    Kihei.prototype.getAvaliable = function () {
        return this.cd == this.maxCD;
    };
    Kihei.prototype.startCD = function (v) {
        this.maxCD = v;
        this.cd = 0;
    };
    Kihei.prototype.onCD = function () {
        if (this.cd == this.maxCD) {
            this.maxCD = -1;
            this.cd = -1;
            return true;
        }
        this.cd++;
        return this.cd == this.maxCD;
    };
    /** 获取cd进度百分比 */
    Kihei.prototype.getCDRate = function () {
        return this.cd / this.maxCD;
    };
    Kihei.prototype.pause = function () {
        this.moveTween && this.moveTween.pause();
    };
    Kihei.prototype.resume = function () {
        this.moveTween && this.moveTween.play();
    };
    return Kihei;
}(BaseCharacter));
window["Kihei"] = Kihei;
__reflect(Kihei.prototype,"Kihei",[]); 


/***/ }),

/***/ "./src/character/KiheiGen1.ts":
/***/ (function(module, exports) {

/**
 * 第一代机兵
 * 地面移动
 * 无视地形的小范围跳跃后圆形小范围内地面敌人中伤害（TODO：击退效果），cd快
 * HP高
 */
var KiheiGen1 = /** @class */ (function (_super) {
    __extends(KiheiGen1, _super);
    function KiheiGen1() {
        var _this = _super.call(this) || this;
        _this.HP = 500;
        _this.maxHP = 500;
        _this.skills = [
            new JumpAttack(_this),
        ];
        return _this;
    }
    KiheiGen1.prototype.drawKihei = function () {
        var size = this.mapCell.getSize();
        var bmp = new egret.Bitmap();
        bmp.texture = RES.getRes('character_json#gen1');
        var scale = bmp.width / bmp.height;
        // bmp.width = size*2;
        bmp.height = size * 1.5;
        bmp.width = bmp.height * scale;
        bmp.x = 0;
        bmp.y = 0;
        if (!this.sp) {
            this.addChild(bmp);
        }
        return bmp;
    };
    /**检查地块是否在攻击范围内 */
    KiheiGen1.prototype.checkDistance = function (cell, thisPoint, r) {
        return egret.Point.distance(new egret.Point(cell.x, cell.y), thisPoint) <= r;
    };
    return KiheiGen1;
}(Kihei));
window["KiheiGen1"] = KiheiGen1;
__reflect(KiheiGen1.prototype,"KiheiGen1",[]); 


/***/ }),

/***/ "./src/character/KiheiGen2.ts":
/***/ (function(module, exports) {

/**
 * 第二代机兵
 * 地面移动
 * 扇形范围内的地面空中敌人中伤害，cd中
 * HP中
 */
var KiheiGen2 = /** @class */ (function (_super) {
    __extends(KiheiGen2, _super);
    function KiheiGen2() {
        var _this = _super.call(this) || this;
        _this.maxHP = 350;
        _this.skills = [
            new Missile(_this),
        ];
        return _this;
    }
    KiheiGen2.prototype.drawKihei = function () {
        var size = this.mapCell.getSize();
        var bmp = new egret.Bitmap();
        bmp.texture = RES.getRes('character_json#gen2');
        var scale = bmp.width / bmp.height;
        // bmp.width = size*2;
        bmp.height = size * 1.5;
        bmp.width = bmp.height * scale;
        bmp.x = 0;
        bmp.y = 0;
        if (!this.sp) {
            this.addChild(bmp);
        }
        return bmp;
    };
    return KiheiGen2;
}(Kihei));
window["KiheiGen2"] = KiheiGen2;
__reflect(KiheiGen2.prototype,"KiheiGen2",[]); 


/***/ }),

/***/ "./src/character/KiheiGen3.ts":
/***/ (function(module, exports) {

/**
 * 第三代机兵
 * 地面移动
 * 直线范围内地面空中敌人高伤害，cd慢
 * HP中
 */
var KiheiGen3 = /** @class */ (function (_super) {
    __extends(KiheiGen3, _super);
    function KiheiGen3() {
        var _this = _super.call(this) || this;
        _this.maxHP = 300;
        _this.skills = [
            new RailGun(_this),
        ];
        return _this;
    }
    KiheiGen3.prototype.drawKihei = function () {
        var size = this.mapCell.getSize();
        var bmp = new egret.Bitmap();
        bmp.texture = RES.getRes('character_json#gen3');
        var scale = bmp.width / bmp.height;
        // bmp.width = size*2;
        bmp.height = size * 1.5;
        bmp.width = bmp.height * scale;
        bmp.x = 0;
        bmp.y = 0;
        if (!this.sp) {
            this.addChild(bmp);
        }
        return bmp;
    };
    return KiheiGen3;
}(Kihei));
window["KiheiGen3"] = KiheiGen3;
__reflect(KiheiGen3.prototype,"KiheiGen3",[]); 


/***/ }),

/***/ "./src/character/KiheiGen4.ts":
/***/ (function(module, exports) {

/**
 * 第四代机兵
 * 空中移动
 * 无视地形的大范围移动后原型大范围内敌人低伤害，cd中
 * HP低
 */
var KiheiGen4 = /** @class */ (function (_super) {
    __extends(KiheiGen4, _super);
    function KiheiGen4() {
        var _this = _super.call(this) || this;
        _this.maxHP = 250;
        _this.air = true;
        _this.skills = [
            new MultMissile(_this),
        ];
        return _this;
    }
    KiheiGen4.prototype.drawKihei = function () {
        var size = this.mapCell.getSize();
        var bmp = new egret.Bitmap();
        bmp.texture = RES.getRes('character_json#gen4');
        var scale = bmp.width / bmp.height;
        // bmp.width = size*2;
        bmp.height = size * 1.5;
        bmp.width = bmp.height * scale;
        bmp.x = 0;
        bmp.y = 0;
        if (!this.sp) {
            this.addChild(bmp);
        }
        return bmp;
    };
    //重写移动方法实现直线飞行到目的地的效果
    /**设置移动路径 */
    KiheiGen4.prototype.startMove = function (route, targetPosition) {
        this.route = route;
        this.targetPosition = targetPosition;
        var cell = route[route.length - 1];
        var dis = egret.Point.distance(new egret.Point(this.x, this.y), new egret.Point(cell.x, cell.y));
        this._sin = (cell.y - this.y + 0.01) / dis;
        this._cos = (cell.x - this.x + 0.01) / dis;
    };
    /**按照移动路径前进一单位，正在播放移动动画时直接返回 */
    KiheiGen4.prototype.move = function () {
        if (this.targetPosition == null || this.moveTween) {
            return;
        }
        var d = this.mapCell.getSize();
        var newx = this.x + this._cos * d;
        var newy = this.y + this._sin * d;
        this.moveTween = egret.Tween.get(this)
            .to({
            x: newx,
            y: newy
        }, 100)
            .call(this.onMoveStep, this);
    };
    KiheiGen4.prototype.onMoveStep = function () {
        if (this.route == null) {
            return;
        }
        var cell = this.route[this.route.length - 1];
        var x = Math.floor(this.x / cell.getSize());
        var y = Math.floor(this.y / cell.getSize());
        var cellArr = World.getIns().cellArr;
        this.mapCell = cellArr[y][x];
        if (this.mapCell == cell) {
            this.moveTween = egret.Tween.get(this)
                .to({
                x: this.targetPosition.x,
                y: this.targetPosition.y
            }, 50);
            this.targetPosition = null;
            this.route = null;
            this.moveTween = null;
            return;
        }
        this.moveTween = null;
    };
    return KiheiGen4;
}(Kihei));
window["KiheiGen4"] = KiheiGen4;
__reflect(KiheiGen4.prototype,"KiheiGen4",[]); 


/***/ }),

/***/ "./src/character/Mosquito.ts":
/***/ (function(module, exports) {

/**空中杂兵 */
var Mosquito = /** @class */ (function (_super) {
    __extends(Mosquito, _super);
    function Mosquito() {
        var _this = _super.call(this) || this;
        _this.air = true;
        _this.maxHP = 50;
        _this.speed = 350;
        return _this;
    }
    Mosquito.prototype.drawKaiju = function () {
        var size = this.mapCell.getSize();
        var bmp = new egret.Bitmap();
        bmp.texture = RES.getRes('character_json#mosqito');
        var scale = bmp.width / bmp.height;
        // bmp.width = size*2;
        bmp.height = size;
        bmp.width = bmp.height * scale;
        // bmp.x = -size/2
        // bmp.y = -size/2;
        if (!this.sp) {
            this.addChild(bmp);
        }
        return bmp;
    };
    Mosquito.prototype.startMove = function (route) {
        this.route = route;
        var cell = route[route.length - 1];
        var dis = egret.Point.distance(new egret.Point(this.x, this.y), new egret.Point(cell.x, cell.y));
        this._sin = (cell.y - this.y + 0.01) / dis;
        this._cos = (cell.x - this.x + 0.01) / dis;
    };
    /**按照移动路径前进一单位，正在播放移动动画时直接返回 */
    Mosquito.prototype.move = function () {
        if (this.moveTween) {
            return;
        }
        var d = this.mapCell.getSize();
        var newx = this.x + this._cos * d;
        var newy = this.y + this._sin * d;
        this.moveTween = egret.Tween.get(this)
            .to({
            x: newx,
            y: newy
        }, this.speed)
            .call(this.onMoveStep, this);
    };
    Mosquito.prototype.onMoveStep = function () {
        if (this.route == null) {
            return;
        }
        var cell = this.route[this.route.length - 1];
        var x = Math.floor(this.x / cell.getSize());
        var y = Math.floor(this.y / cell.getSize());
        var cellArr = World.getIns().cellArr;
        this.mapCell = cellArr[y][x];
        if (this.mapCell == cell) {
            this.route = null;
            this.moveTween = null;
            this.arrived = true;
            this.dispatchEvent(new egret.Event(PlayEvent.KAIJU_EXIT));
            return;
        }
        this.moveTween = null;
    };
    return Mosquito;
}(Kaiju));
window["Mosquito"] = Mosquito;
__reflect(Mosquito.prototype,"Mosquito",[]); 


/***/ }),

/***/ "./src/scene/IMapData.ts":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/scene/MapCell.ts":
/***/ (function(module, exports) {

/**地块单元数据 */
var MapCell = /** @class */ (function (_super) {
    __extends(MapCell, _super);
    /**
     * @param size 地块尺寸
     * @param ty 地块类型
     * @param isEditor 是否使用编辑器，是的场合将标记出击点
     */
    function MapCell(cx, cy, size, ty, isEditor, nodedata) {
        if (ty === void 0) { ty = MapCellType.AIR; }
        if (isEditor === void 0) { isEditor = false; }
        if (nodedata === void 0) { nodedata = null; }
        var _this = _super.call(this) || this;
        _this._type = MapCellType.AIR;
        _this.cellX = cx;
        _this.cellY = cy;
        _this._size = size;
        _this._type = ty;
        _this._isEditor = isEditor;
        _this.nodes = nodedata;
        _this.touchEnabled = true;
        var txt = new egret.TextField();
        txt.width = size;
        txt.height = size;
        txt.size = size;
        _this.addChild(txt);
        _this._label = txt;
        _this.refreshSprite();
        if (isEditor) {
            _this.addEventListener('touchTap', _this.switchType, _this);
        }
        else {
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.getHitPoint, _this);
        }
        return _this;
    }
    MapCell.prototype.switchType = function (e) {
        if (e === void 0) { e = null; }
        var t = this._type;
        if (t == 5) {
            t = MapCellType.AIR;
        }
        else {
            t = t + 1;
        }
        this._type = t;
        this.refreshSprite();
    };
    MapCell.prototype.getType = function () {
        return this._type;
    };
    /**是否地面通行 */
    MapCell.prototype.isLand = function () {
        return this._type == MapCellType.LAND || this._type == MapCellType.LAND_KIHEI || this._type == MapCellType.LAND_KAIJU;
    };
    /**地块单位长度 */
    MapCell.prototype.getSize = function () {
        return this._size;
    };
    MapCell.prototype.refreshSprite = function () {
        this.graphics.clear();
        this._label.visible = false;
        if (this._isEditor) {
            switch (this._type) {
                case MapCellType.AIR:
                    this.graphics.beginFill(0x000000);
                    this.graphics.lineStyle(2, 0x32CD32);
                    break;
                case MapCellType.LAND:
                    this.graphics.beginFill(0x759d4d);
                    break;
                case MapCellType.LAND_KAIJU:
                    this.graphics.beginFill(0xa82931);
                    this._label.text = '陆';
                    this._label.visible = true;
                    break;
                case MapCellType.AIR_KAIJU:
                    this.graphics.beginFill(0xa82931);
                    this._label.text = '空';
                    this._label.visible = true;
                    break;
                case MapCellType.LAND_KIHEI:
                    this.graphics.beginFill(0x34a1e5);
                    this._label.text = '陆';
                    this._label.visible = true;
                    break;
                case MapCellType.AIR_KIHEI:
                    this.graphics.beginFill(0x34a1e5);
                    this._label.text = '空';
                    this._label.visible = true;
                    break;
            }
        }
        else {
            switch (this._type) {
                case MapCellType.AIR:
                case MapCellType.AIR_KAIJU:
                case MapCellType.AIR_KIHEI:
                    this.graphics.beginFill(0x000000);
                    this.graphics.lineStyle(2, 0x32CD32);
                    break;
                default:
                    this.graphics.beginFill(0x759d4d);
                    break;
            }
        }
        this.graphics.drawRect(0, 0, this._size, this._size);
        this.graphics.endFill();
        this.anchorOffsetX = this._size / 2;
        this.anchorOffsetY = this._size / 2;
    };
    /**获取碰撞检测点 */
    MapCell.prototype.getHitPoint = function (e) {
        if (e === void 0) { e = null; }
        if (!this._hitPoint) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.getHitPoint, this);
            var x = this.x;
            var y = this.y;
            var r = this._size / 2;
            this._hitPoint = [
                new egret.Point(x - r, y - r), new egret.Point(x, y - r), new egret.Point(x + r, y - r),
                new egret.Point(x - r, y), new egret.Point(x + r, y),
                new egret.Point(x - r, y + r), new egret.Point(x, y + r), new egret.Point(x + r, y + r)
            ];
        }
        return this._hitPoint;
    };
    MapCell.prototype.checkInRange = function (damageRange) {
        var pts = this.getHitPoint();
        for (var _i = 0, pts_1 = pts; _i < pts_1.length; _i++) {
            var pt = pts_1[_i];
            if (damageRange.hitTestPoint(pt.x, pt.y)) {
                return true;
            }
        }
        return false;
    };
    return MapCell;
}(egret.Sprite));
window["MapCell"] = MapCell;
__reflect(MapCell.prototype,"MapCell",[]); 


/***/ }),

/***/ "./src/scene/MapEditor.ts":
/***/ (function(module, exports) {

var MapEditor = /** @class */ (function (_super) {
    __extends(MapEditor, _super);
    function MapEditor() {
        var _this = _super.call(this) || this;
        _this.ROW = 20;
        _this.COLUMN = 12;
        _this._stage = egret.MainContext.instance.stage;
        var stage = _this._stage;
        _this._cellSize = Math.floor(stage.stageWidth / _this.COLUMN);
        _this.x = 0;
        _this.y = 0;
        _this.graphics.beginFill(0x000000);
        _this.graphics.drawRect(0, 0, stage.stageWidth, _this._cellSize * _this.ROW);
        _this.graphics.endFill();
        _this.touchEnabled = true;
        return _this;
    }
    MapEditor.prototype.newMap = function () {
        var _this = this;
        var arr = [];
        var cz = this._cellSize;
        for (var r = 0; r < this.ROW; r++) {
            var tmpArr = [];
            for (var c = 0; c < this.COLUMN; c++) {
                var mc = new MapCell(c, r, cz, MapCellType.AIR, true);
                mc.x = c * cz + cz / 2;
                mc.y = r * cz + cz / 2;
                tmpArr.push(mc);
                this.addChild(mc);
            }
            arr.push(tmpArr);
        }
        this._cellArr = arr;
        document.addEventListener('keydown', function (e) { _this.keydown(e); });
    };
    MapEditor.prototype.loadMap = function (name) {
        var _this = this;
        var jsonData = RES.getRes(name + '_json');
        if (jsonData == null) {
            return;
        }
        var arr = [];
        var mapData = jsonData.data;
        var cz = this._cellSize;
        for (var r = 0; r < this.ROW; r++) {
            var tmpArr = [];
            for (var c = 0; c < this.COLUMN; c++) {
                var mc = new MapCell(c, r, cz, mapData[r][c], true);
                mc.x = c * cz + cz / 2;
                mc.y = r * cz + cz / 2;
                tmpArr.push(mc);
                this.addChild(mc);
            }
            arr.push(tmpArr);
        }
        this._cellArr = arr;
        document.addEventListener('keydown', function (e) { _this.keydown(e); });
    };
    MapEditor.prototype.keydown = function (e) {
        if (e.keyCode == 13) {
            this.generateMapData();
        }
    };
    MapEditor.prototype.generateMapData = function () {
        var data = [];
        var kihei = [];
        var kaiju = [];
        var nodesData = {};
        for (var r = 0; r < this.ROW; r++) {
            var tmpData = [];
            for (var c = 0; c < this.COLUMN; c++) {
                var cell = this._cellArr[r][c];
                var t = cell.getType();
                tmpData.push(t);
                if (t == MapCellType.AIR_KAIJU || t == MapCellType.LAND_KAIJU) {
                    kaiju.push([r, c]);
                }
                else if (t == MapCellType.LAND_KIHEI || t == MapCellType.AIR_KIHEI) {
                    kihei.push([r, c]);
                }
                if (cell.isLand()) {
                    var nodes = [];
                    if (this._cellArr[r - 1] && this._cellArr[r - 1][c].isLand())
                        nodes.push([r - 1, c]);
                    if (this._cellArr[r + 1] && this._cellArr[r + 1][c].isLand())
                        nodes.push([r + 1, c]);
                    if (this._cellArr[r][c - 1] && this._cellArr[r][c - 1].isLand())
                        nodes.push([r, c - 1]);
                    if (this._cellArr[r][c + 1] && this._cellArr[r][c + 1].isLand())
                        nodes.push([r, c + 1]);
                    nodesData[r + '_' + c] = nodes;
                }
            }
            data.push(tmpData);
        }
        var obj = {
            size: [this.ROW, this.COLUMN],
            data: data,
            nodes: nodesData,
            kihei: kihei,
            kaiju: kaiju
        };
        console.log(JSON.stringify(obj));
    };
    return MapEditor;
}(egret.Sprite));
window["MapEditor"] = MapEditor;
__reflect(MapEditor.prototype,"MapEditor",[]); 


/***/ }),

/***/ "./src/scene/StageScene.ts":
/***/ (function(module, exports) {

var StageScene = /** @class */ (function (_super) {
    __extends(StageScene, _super);
    function StageScene() {
        var _this = _super.call(this) || this;
        _this._stage = egret.MainContext.instance.stage;
        /**最多同时存在怪兽数 */
        _this.MAX_KAIJU_NUM = 40;
        /**上次触发拖动事件的次数 */
        _this.lastCalcPoint = 4;
        _this._routeDict = new RouteDict();
        return _this;
    }
    StageScene.prototype.play = function (stageName) {
        var jsonData = RES.getRes(stageName + '_json');
        if (jsonData == null) {
            return;
        }
        console.log('关卡数据：', jsonData);
        this.initMap(jsonData.data, jsonData.size, jsonData.nodes, jsonData.kaiju);
        this.initKihei(jsonData.kihei);
        this.initKaiju();
        this.initUI();
        this._kaijuGenTicker = 0;
        this._kaijuGenInterval = this._stage.frameRate * 0.5;
        this._playPhase = PlayPhase.SPARE;
        this.addEventListener(egret.Event.ENTER_FRAME, this.refreshStage, this);
        this.addEventListener('touchTap', this.onClick, this);
        this.addEventListener('touchBegin', this.onMouseDown, this);
        this.addEventListener('touchMove', this.onMouseMove, this);
        this.addEventListener('touchEnd', this.onMouseUp, this);
        // this.addEventListener('touchReleaseOutside', this.onMouseUp, this)
    };
    StageScene.prototype.initMap = function (mapData, mapSize, nodeData, kaiju) {
        var cellSize = this._stage.stageWidth / mapSize[1];
        World.getIns().initMap(mapData, mapSize, nodeData, cellSize, kaiju);
        var cellArr = World.getIns().cellArr;
        for (var r = 0; r < mapSize[0]; r++) {
            for (var c = 0; c < mapSize[1]; c++) {
                this.addChild(cellArr[r][c]);
            }
        }
        this._cellArr = cellArr;
        this._cellSize = cellSize;
        var landL = new egret.Sprite();
        landL.graphics.drawRect(0, 0, this._stage.stageWidth, this._stage.stageHeight);
        this.addChild(landL);
        this._landLayer = landL;
        var airL = new egret.Sprite();
        airL.graphics.drawRect(0, 0, this._stage.stageWidth, this._stage.stageHeight);
        this.addChild(airL);
        this._airLayer = airL;
    };
    StageScene.prototype.initKihei = function (data) {
        var kiheis = [];
        var cz = this._cellSize;
        if (data[0]) {
            var gen1 = new KiheiGen1();
            var tmpCell = this._cellArr[data[0][0]][data[0][1]];
            gen1.x = tmpCell.x;
            gen1.y = tmpCell.y;
            gen1.mapCell = tmpCell;
            gen1.boot();
            this.addChild(gen1);
            kiheis.push(gen1);
        }
        if (data[1]) {
            var gen2 = new KiheiGen2();
            var tmpCell = this._cellArr[data[1][0]][data[1][1]];
            gen2.x = tmpCell.x;
            gen2.y = tmpCell.y;
            gen2.mapCell = tmpCell;
            gen2.boot();
            this.addChild(gen2);
            kiheis.push(gen2);
        }
        if (data[2]) {
            var gen4 = new KiheiGen4();
            var tmpCell = this._cellArr[data[2][0]][data[2][1]];
            gen4.x = tmpCell.x;
            gen4.y = tmpCell.y;
            gen4.mapCell = tmpCell;
            gen4.boot();
            this.addChild(gen4);
            kiheis.push(gen4);
        }
        if (data[3]) {
            var gen3 = new KiheiGen3();
            var tmpCell = this._cellArr[data[3][0]][data[3][1]];
            gen3.x = tmpCell.x;
            gen3.y = tmpCell.y;
            gen3.mapCell = tmpCell;
            gen3.boot();
            this.addChild(gen3);
            kiheis.push(gen3);
        }
        this._kiheis = kiheis;
    };
    /**生成怪兽， */
    StageScene.prototype.initKaiju = function () {
        this._kaijus = [];
        // for(let i=0; i<this.MAX_KAIJU_NUM/2; i++){
        for (var i = 0; i < 10; i++) {
            this.generateKaiju();
        }
    };
    StageScene.prototype.generateKaiju = function () {
        if (this._kaijus.length >= this.MAX_KAIJU_NUM) {
            return;
        }
        var kaiju = Kaiju.pool.getOne();
        var tmpCell = World.getIns().randomEntry(kaiju.isAir());
        var tmpCell2 = World.getIns().randomExit(kaiju.isAir());
        kaiju.mapCell = tmpCell;
        kaiju.x = tmpCell.x;
        kaiju.y = tmpCell.y;
        if (kaiju.isAir()) {
            kaiju.startMove([tmpCell2]);
        }
        else {
            var r = this._routeDict.checkRoute2(tmpCell, tmpCell2, true);
            kaiju.startMove(r.route);
        }
        kaiju.boot();
        kaiju.addEventListener(PlayEvent.KAIJU_EXIT, this.onKaijuExit, this);
        this._kaijus.push(kaiju);
        if (kaiju.isAir()) {
            this._airLayer.addChild(kaiju);
        }
        else {
            this._landLayer.addChild(kaiju);
        }
    };
    StageScene.prototype.initUI = function () {
        this._actConfirmButton = new ConfirmBtn();
        var stat = [];
        var kiheis = this._kiheis;
        var tmpW = (this._stage.stageWidth - 20) / 4;
        var tmpH = tmpW * 1.2;
        var tmpY = this._stage.stageHeight - tmpH;
        for (var i = 0; i < kiheis.length; i++) {
            var kihei = kiheis[i];
            var s = new Status(kihei);
            stat.push(s);
            s.width = tmpW;
            s.height = tmpH;
            s.y = tmpY;
            s.x = (tmpW + 5) * i;
            this.parent.addChild(s);
        }
        this._kiheiStatus = stat;
    };
    StageScene.prototype.onClick = function (e) {
        if (this._playPhase != PlayPhase.SPARE) {
            return;
        }
        if (e.target instanceof MapCell && this._curSelectedKihei) {
            //选中移动格子
            var mc = e.target;
            var kihei = this._curSelectedKihei;
            if (!mc.isLand() && !kihei.isAir()) {
                console.log("地面单位无法移动到空中");
                this._curSelectedKihei = null;
                this._pause = false;
                return;
            }
            if (kihei.isAir()) {
                kihei.startMove([mc], new egret.Point(e.stageX, e.stageY));
            }
            else {
                var ret = this._routeDict.checkRoute2(kihei.mapCell, mc, false); //World.getIns().findPath(kihei.mapCell, mc)			
                if (ret.route.length > 0) {
                    kihei.startMove(ret.route, new egret.Point(e.stageX, e.stageY));
                }
            }
            this._curSelectedKihei = null;
            this._pause = false;
        }
    };
    StageScene.prototype.onMouseDown = function (e) {
        if (this._playPhase != PlayPhase.SPARE) {
            return;
        }
        if (e.target instanceof Kihei) {
            //选中机兵
            this._curSelectedKihei = e.target;
            this._pause = true;
        }
    };
    StageScene.prototype.onMouseMove = function (e) {
        if (this._playPhase != PlayPhase.SPARE) {
            return;
        }
        if (this.lastCalcPoint % 4 != 0) {
            this.lastCalcPoint++;
            return;
        }
        this.lastCalcPoint = 1;
        if (this._curSelectedKihei) {
            var kihei = this._curSelectedKihei;
            if (this._isAction) {
                kihei.showDamageRange(e.stageX, e.stageY, this._cellArr);
                //检测被瞄准的怪兽，开启闪烁特效	
                for (var _i = 0, _a = this._kaijus; _i < _a.length; _i++) {
                    var kaiju = _a[_i];
                    kaiju.aimed(kihei.checkKaijuInRange(kaiju));
                }
            }
            else if (Math.abs(e.stageX - kihei.x) > this._cellSize / 2 || Math.abs(e.stageY - kihei.y) > this._cellSize / 2) {
                //拖动手势设置机兵攻击
                kihei.showAttackRange(true);
                this._isAction = true;
            }
        }
    };
    StageScene.prototype.onMouseUp = function (e) {
        this.lastCalcPoint = 1;
        if (this._playPhase == PlayPhase.ACTION) {
            //机兵动作中
            return;
        }
        if (this._playPhase == PlayPhase.WAIT_CONFIRM) {
            if (e.target != this._actConfirmButton) {
                //取消行动
                this._curSelectedKihei && this._curSelectedKihei.showDamageRange(-1, -1, null);
                this._actConfirmButton.parent && this._actConfirmButton.parent.removeChild(this._actConfirmButton);
                this._pause = false;
                this._isAction = false;
                this._playPhase = PlayPhase.SPARE;
                this._curSelectedKihei = null;
                return;
            }
            else {
                //确认行动
                this._actConfirmButton.parent && this._actConfirmButton.parent.removeChild(this._actConfirmButton);
                var kihei = this._curSelectedKihei;
                kihei.showDamageRange(-1, -1, this._cellArr);
                kihei.addEventListener(PlayEvent.KIHEI_ACTION_FINISH, this.onKiheiActionFinished, this);
                kihei.action();
                this._playPhase = PlayPhase.ACTION;
                return;
            }
        }
        if (this._curSelectedKihei) {
            var kihei = this._curSelectedKihei;
            kihei.showAttackRange(false);
            if (this._isAction) {
                //机兵选择攻击位置				
                this._playPhase = PlayPhase.WAIT_CONFIRM;
                var tp = kihei.getActionTarget();
                if (tp == null) {
                    this._curSelectedKihei = null;
                    this._pause = false;
                    this._isAction = false;
                    this._playPhase = PlayPhase.SPARE;
                    return;
                }
                var btn = this._actConfirmButton;
                btn.x = (this._stage.stageWidth - btn.measuredWidth) / 2;
                btn.y = (this._stage.stageHeight - btn.measuredHeight) / 2;
                this.addChild(this._actConfirmButton);
            }
        }
    };
    /** 机兵结束攻击回调 */
    StageScene.prototype.onKiheiActionFinished = function (e) {
        this._playPhase = PlayPhase.SPARE;
        this._curSelectedKihei && this._curSelectedKihei.removeEventListener(PlayEvent.KIHEI_ACTION_FINISH, this.onKiheiActionFinished, this);
        this._pause = false;
        this._curSelectedKihei = null;
        this._isAction = false;
    };
    /**怪兽退场回调 */
    StageScene.prototype.onKaijuExit = function (e) {
        var kaiju = e.target;
        kaiju.dispose();
        kaiju.removeEventListener(PlayEvent.KAIJU_EXIT, this.onKaijuExit, this);
        for (var i = 0; i < this._kaijus.length; i++) {
            if (kaiju == this._kaijus[i]) {
                this._kaijus.splice(i, 1);
            }
        }
    };
    StageScene.prototype.refreshStage = function (e) {
        if (e === void 0) { e = null; }
        if (this._pause) {
            return;
        }
        // if(this._kaijuGenTicker == this._kaijuGenInterval){
        // 	this._kaijuGenTicker = 0;
        // 	this.generateKaiju();
        // }
        // this._kaijuGenTicker++;
        for (var _i = 0, _a = this._kiheis; _i < _a.length; _i++) {
            var kihei = _a[_i];
            kihei.move();
            kihei.onCD();
        }
        for (var _b = 0, _c = this._kiheiStatus; _b < _c.length; _b++) {
            var status_1 = _c[_b];
            status_1.refreshCD();
        }
        for (var _d = 0, _e = this._kaijus; _d < _e.length; _d++) {
            var kaiju = _e[_d];
            kaiju.move();
        }
    };
    return StageScene;
}(egret.Sprite));
window["StageScene"] = StageScene;
__reflect(StageScene.prototype,"StageScene",[]); 


/***/ }),

/***/ "./src/scene/TitleScene.ts":
/***/ (function(module, exports) {

var TitleScene = /** @class */ (function (_super) {
    __extends(TitleScene, _super);
    function TitleScene() {
        return _super.call(this) || this;
    }
    return TitleScene;
}(egret.Sprite));
window["TitleScene"] = TitleScene;
__reflect(TitleScene.prototype,"TitleScene",[]); 


/***/ }),

/***/ "./src/scene/World.ts":
/***/ (function(module, exports) {

var World = /** @class */ (function () {
    function World() {
    }
    World.getIns = function () {
        if (!World._ins) {
            World._ins = new World();
        }
        return World._ins;
    };
    World.prototype.dipose = function () {
    };
    World.prototype.initMap = function (mapData, mapSize, nodeData, cellSize, kaiju) {
        var cellArr = [];
        var land = [];
        for (var r = 0; r < mapSize[0]; r++) {
            var tmpArr = [];
            for (var c = 0; c < mapSize[1]; c++) {
                var mc = new MapCell(c, r, cellSize, mapData[r][c], false, nodeData[r + '_' + c]);
                mc.x = c * cellSize + cellSize / 2;
                mc.y = r * cellSize + cellSize / 2;
                tmpArr.push(mc);
                if (r == mapSize[0] - 1 && mc.isLand()) {
                    land.push(mc);
                }
            }
            cellArr.push(tmpArr);
        }
        this.cellArr = cellArr;
        this.kaijuExit = land;
        var kaijuA = [];
        var kaijuL = [];
        for (var _i = 0, kaiju_1 = kaiju; _i < kaiju_1.length; _i++) {
            var tmp = kaiju_1[_i];
            var c = cellArr[tmp[0]][tmp[1]];
            if (c.isLand()) {
                kaijuL.push(c);
            }
            else {
                kaijuA.push(c);
            }
        }
        this.kaijuEntryLand = kaijuL;
        this.kaijuEntryAir = kaijuA;
    };
    /**怪兽得分的目标点（最下一行地块） */
    World.prototype.getKaijuExit = function () {
        return this.kaijuExit;
    };
    /**随机获取一个刷新点 */
    World.prototype.randomEntry = function (air) {
        var cellArr;
        if (air) {
            cellArr = this.kaijuEntryAir;
        }
        else {
            cellArr = this.kaijuEntryLand;
        }
        return cellArr[Math.floor(Math.random() * cellArr.length)];
    };
    World.prototype.randomExit = function (air) {
        var cellArr;
        if (air) {
            cellArr = this.cellArr[this.cellArr.length - 1];
        }
        else {
            cellArr = this.kaijuExit;
        }
        return cellArr[Math.floor(Math.random() * cellArr.length)];
    };
    /**地面单位移动路径查找*/
    World.prototype.findPath = function (start, target, map) {
        var _a, _b, _c;
        if (map === void 0) { map = null; }
        if (!map) {
            map = [];
            for (var _i = 0, _d = this.cellArr; _i < _d.length; _i++) {
                var r = _d[_i];
                var tmpArr = [];
                for (var _e = 0, r_1 = r; _e < r_1.length; _e++) {
                    var c = r_1[_e];
                    tmpArr.push(0);
                }
                map.push(tmpArr);
            }
            map[start.cellY][start.cellX] = 1;
        }
        var nextNodes = [];
        for (var _f = 0, _g = start.nodes; _f < _g.length; _f++) {
            var node = _g[_f];
            if (map[node[0]][node[1]] == 1) {
                //已计算过该节点
                continue;
            }
            if (node[1] == target.cellX && node[0] == target.cellY) {
                //到达目的节点
                return { route: (_a = [start]).concat.apply(_a, [this.cellArr[node[0]][node[1]]]), map: map };
            }
            map[node[0]][node[1]] = 1;
            nextNodes.push(this.cellArr[node[0]][node[1]]);
        }
        if (nextNodes.length == 0) {
            //死路			
            return { route: null, map: map };
        }
        var finalRet = null;
        var tmpMap = [];
        for (var _h = 0, map_1 = map; _h < map_1.length; _h++) {
            var r = map_1[_h];
            var tmp = [];
            for (var _j = 0, r_2 = r; _j < r_2.length; _j++) {
                var c = r_2[_j];
                tmp.push(c);
            }
            tmpMap.push(tmp);
        }
        for (var _k = 0, nextNodes_1 = nextNodes; _k < nextNodes_1.length; _k++) {
            var node = nextNodes_1[_k];
            var ret = this.findPath(node, target, tmpMap);
            if (ret.route) {
                if (!finalRet) {
                    finalRet = (_b = [start]).concat.apply(_b, ret.route);
                    map = ret.map;
                }
                else if (ret.route.length < finalRet.length) {
                    finalRet = (_c = [start]).concat.apply(_c, ret.route);
                    map = ret.map;
                }
            }
        }
        return { route: finalRet, map: map, };
    };
    return World;
}());
window["World"] = World;
__reflect(World.prototype,"World",[]); 


/***/ }),

/***/ "./src/skill/JumpAttack.ts":
/***/ (function(module, exports) {

var JumpAttack = /** @class */ (function (_super) {
    __extends(JumpAttack, _super);
    function JumpAttack(kihei) {
        var _this = _super.call(this, kihei) || this;
        _this.attackRange = 4;
        _this.damageRange = 2;
        _this.atk = 70;
        _this.rangeType = RangeType.CIRCLE;
        _this.cd = egret.MainContext.instance.stage.frameRate * 2;
        _this.type = KiheiSkill.JUMP_ATTACK;
        return _this;
    }
    JumpAttack.prototype.action = function () {
        var _this = this;
        if (!this.actionTarget) {
            return;
        }
        var kihei = this.kihei;
        var actTgt = this.actionTarget;
        var tw = egret.Tween.get(kihei)
            .to({
            scaleX: 1.5,
            scaleY: 1.5,
            x: kihei.x + (actTgt.x - kihei.x) / 2,
            y: kihei.y + (actTgt.y - kihei.y) / 2
        }, 400)
            .wait(200)
            .to({
            scaleX: 1,
            scaleY: 1,
            x: actTgt.x,
            y: actTgt.y
        }, 200)
            .wait(500)
            .to({
            scaleX: 1,
            scaleY: 1,
            x: this._backCell.x,
            y: this._backCell.y
        }, 200)
            .call(function () {
            kihei.mapCell = _this.actionTarget;
            _this.actionTarget = null;
            _this.actionTween = null;
            kihei.startCD(_this.cd);
            kihei.dispatchEvent(new egret.Event(PlayEvent.KIHEI_ACTION_FINISH));
        }, this);
        this.actionTween = tw;
    };
    JumpAttack.prototype.showDamageRange = function (x, y, cellArr) {
        if (x == -1 || y == 1) {
            this.rangeSp.showDamageRange(-1, -1);
            return;
        }
        var kihei = this.kihei;
        var thisPoint = new egret.Point(kihei.x, kihei.y);
        var size = kihei.mapCell.getSize();
        var r = size * this.attackRange;
        var dis = egret.Point.distance(new egret.Point(x, y), new egret.Point(kihei.x, kihei.y));
        if (dis > r) {
            var sin = (y - kihei.y + 0.1) / dis;
            var cos = (x - kihei.x + 0.1) / dis;
            y = kihei.y + (sin * r);
            x = kihei.x + (cos * r);
        }
        var ry = Math.floor(y / size);
        var cx = Math.floor(x / size);
        this.actionTarget = cellArr[ry][cx];
        var curCell = cellArr[ry][cx];
        if (!curCell.isLand()) {
            curCell = this.getClosetLandCell(cx, ry, cellArr);
        }
        this.rangeSp.showDamageRange(x, y);
        this._backCell = curCell;
    };
    /**跳到非地面格时寻找最近一格地面设为_backCell*/
    JumpAttack.prototype.getClosetLandCell = function (x, y, cellArr) {
        var mapH = cellArr.length;
        var mapW = cellArr[0].length;
        var round = 1;
        while (true) {
            if (y - round >= 0) {
                //最上一行
                var tmpy = y - round;
                for (var i = -round; i < round + 1; i++) {
                    var tmpx = x + i;
                    if (tmpx < 0 || tmpx >= mapW) {
                        continue;
                    }
                    if (cellArr[tmpy][tmpx].isLand()) {
                        return cellArr[tmpy][tmpx];
                    }
                }
            }
            if (y + round < mapH) {
                //最下一行
                var tmpy = y + round;
                for (var i = -round; i < round + 1; i++) {
                    var tmpx = x + i;
                    if (tmpx < 0 || tmpx >= mapW) {
                        continue;
                    }
                    if (cellArr[tmpy][tmpx].isLand()) {
                        return cellArr[tmpy][tmpx];
                    }
                }
            }
            if (x - round >= 0) {
                //最左一列
                var tmpx = x - round;
                for (var i = -round; i < round + 1; i++) {
                    var tmpy = y + i;
                    if (tmpy < 0 || tmpy >= mapH) {
                        continue;
                    }
                    if (cellArr[tmpy][tmpx].isLand()) {
                        return cellArr[tmpy][tmpx];
                    }
                }
            }
            if (x + round < mapW) {
                //最右一列
                var tmpx = x + round;
                for (var i = -round; i < round + 1; i++) {
                    var tmpy = y + i;
                    if (tmpy < 0 || tmpy >= mapH) {
                        continue;
                    }
                    if (cellArr[tmpy][tmpx].isLand()) {
                        return cellArr[tmpy][tmpx];
                    }
                }
            }
            round++;
        }
    };
    return JumpAttack;
}(Skill));
window["JumpAttack"] = JumpAttack;
__reflect(JumpAttack.prototype,"JumpAttack",[]); 


/***/ }),

/***/ "./src/skill/Missile.ts":
/***/ (function(module, exports) {

var Missile = /** @class */ (function (_super) {
    __extends(Missile, _super);
    function Missile(kihei) {
        var _this = _super.call(this, kihei) || this;
        _this.attackRange = -1;
        _this.damageRange = 4;
        _this.atk = 55;
        _this.rangeType = RangeType.FAN;
        _this.cd = egret.MainContext.instance.stage.frameRate * 3;
        _this.type = KiheiSkill.MISSILE;
        return _this;
    }
    Missile.prototype.action = function () {
        var _this = this;
        if (!this.actionTarget) {
            return;
        }
        var tw = egret.Tween.get(this.kihei)
            //播放攻击动画
            .wait(1000)
            .call(function () {
            var kihei = _this.kihei;
            kihei.mapCell = _this.actionTarget;
            _this.actionTarget = null;
            _this.actionTween = null;
            kihei.startCD(_this.cd);
            kihei.dispatchEvent(new egret.Event(PlayEvent.KIHEI_ACTION_FINISH));
        }, this);
        this.actionTween = tw;
    };
    return Missile;
}(Skill));
window["Missile"] = Missile;
__reflect(Missile.prototype,"Missile",[]); 


/***/ }),

/***/ "./src/skill/MultMissile.ts":
/***/ (function(module, exports) {

var MultMissile = /** @class */ (function (_super) {
    __extends(MultMissile, _super);
    function MultMissile(kihei) {
        var _this = _super.call(this, kihei) || this;
        _this.attackRange = 30;
        _this.damageRange = 5;
        _this.atk = 40;
        _this.rangeType = RangeType.CIRCLE;
        _this.cd = egret.MainContext.instance.stage.frameRate * 2;
        _this.type = KiheiSkill.MULT_MISSILE;
        return _this;
    }
    MultMissile.prototype.action = function () {
        var _this = this;
        if (!this.actionTarget) {
            return;
        }
        var tw = egret.Tween.get(this.kihei)
            .to({
            x: this.actionTarget.x,
            y: this.actionTarget.y
        }, 1000)
            //播放攻击动画
            .wait(1000)
            .call(function () {
            var kihei = _this.kihei;
            kihei.mapCell = _this.actionTarget;
            _this.actionTarget = null;
            _this.actionTween = null;
            kihei.startCD(_this.cd);
            kihei.dispatchEvent(new egret.Event(PlayEvent.KIHEI_ACTION_FINISH));
        }, this);
        this.actionTween = tw;
    };
    return MultMissile;
}(Skill));
window["MultMissile"] = MultMissile;
__reflect(MultMissile.prototype,"MultMissile",[]); 


/***/ }),

/***/ "./src/skill/RailGun.ts":
/***/ (function(module, exports) {

var RailGun = /** @class */ (function (_super) {
    __extends(RailGun, _super);
    function RailGun(kihei) {
        var _this = _super.call(this, kihei) || this;
        _this._k = 1;
        _this._b = 0;
        _this.attackRange = -1;
        //电磁炮伤害范围为长无限，宽damageRange的直线区域
        _this.damageRange = 2;
        _this.atk = 90;
        _this.rangeType = RangeType.LINE;
        _this.cd = egret.MainContext.instance.stage.frameRate * 5;
        _this.type = KiheiSkill.RAIL_GUN;
        return _this;
    }
    RailGun.prototype.showDamageRange = function (x, y, cellArr) {
        var kihei = this.kihei;
        if (kihei.x == x) {
            x += 0.1;
        }
        var quad13 = (kihei.y - y) * (kihei.x - x) > 0;
        this._k = Math.abs(kihei.y - y) / Math.abs(kihei.x - x);
        if (quad13)
            this._k *= -1;
        // console.log(kihei.x, kihei.y, x, y, this._k)	
        // this._b = y - this._k * x;
        // if(quad13) this._b *= -1
        _super.prototype.showDamageRange.call(this, x, y, cellArr);
    };
    /**根据距离初步计算是否在范围内 */
    RailGun.prototype.distanceCheck = function (kaiju) {
        var points = kaiju.getCollisionPoint();
        var kihei = this.kihei;
        var dis = this.damageRange * this.kihei.mapCell.getSize();
        /**点到直线距离计算的分母 */
        var denominator = Math.sqrt(Math.pow(this._k, 2) + 1);
        // console.log('===========')
        for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
            var p = points_1[_i];
            var tmpx = p.x - kihei.x;
            var tmpy = p.y - kihei.y;
            // const d = Math.abs(this._k*p.x + p.y) / denominator;
            var d = Math.abs(this._k * tmpx + tmpy) / denominator;
            // const d = Math.abs(this._k*p.x + p.y + this._b) / denominator;
            // console.log(`d=${d}, dis=${dis}, denominator=${denominator}, this._k=${this._k}, this._b=${this._b}, tmpx=${tmpx}, tmpy=${tmpy}`);
            if (d < dis) {
                // console.log("distanceCheck true");
                return true;
            }
        }
        return false;
    };
    RailGun.prototype.action = function () {
        var _this = this;
        var kihei = this.kihei;
        this.drawRailGun();
        if (kihei.parent) {
            kihei.parent.addChild(this._mask);
            kihei.parent.addChild(this._sp);
            this._sp.mask = this._mask;
            this.actionTween = egret.Tween.get(this._mask)
                .to({
                scaleX: 200
            }, 1250)
                .to({
                scaleY: 0
            }, 250)
                .call(function () {
                _this._mask.parent.removeChild(_this._mask);
                _this._sp.parent.removeChild(_this._sp);
                _this._mask = null;
                _this._sp = null;
                kihei.dispatchEvent(new egret.Event(PlayEvent.KIHEI_ACTION_FINISH));
            });
        }
    };
    RailGun.prototype.drawRailGun = function () {
        var kihei = this.kihei;
        var cellSize = kihei.mapCell.getSize();
        var ulength = cellSize * this.damageRange;
        var sp = new egret.Sprite();
        sp.graphics.beginFill(0xFFFFFF);
        sp.anchorOffsetY = cellSize / 2;
        sp.graphics.drawRect(0, 0, 2000, cellSize);
        sp.graphics.endFill();
        sp.x = kihei.x;
        sp.y = kihei.y;
        sp.rotation = this.rangeSp.damageRange.rotation;
        var mask = new egret.Shape();
        mask.graphics.beginFill(0xFFFFFF);
        mask.anchorOffsetY = cellSize / 2;
        mask.graphics.drawRoundRect(0, 0, 10, cellSize, ulength, ulength);
        mask.graphics.endFill();
        mask.x = kihei.x;
        mask.y = kihei.y;
        mask.rotation = this.rangeSp.damageRange.rotation;
        this._mask = mask;
        this._sp = sp;
        var filter = new egret.GlowFilter(0x87CEEB, 0.3, 20, 20, 20, 1, true, false);
        sp.filters = [filter];
    };
    return RailGun;
}(Skill));
window["RailGun"] = RailGun;
__reflect(RailGun.prototype,"RailGun",[]); 


/***/ }),

/***/ "./src/skill/Skill.ts":
/***/ (function(module, exports) {

var Skill = /** @class */ (function () {
    function Skill(kihei) {
        /**攻击范围单位长度 */
        this.attackRange = 1;
        /**伤害范围单位长度 */
        this.damageRange = 1;
        this.kihei = kihei;
        this.rangeSp = new ActionRange(kihei, this);
    }
    Skill.prototype.action = function () {
    };
    /**显示攻击范围 */
    Skill.prototype.showAttackRange = function (v) {
        this.rangeSp.showAttackRange(v);
    };
    /**
     * 显示伤害范围
     * @param x 显示位置，传入-1时不显示
     * @param y 显示位置，传入-1时不显示
     * @param cellArr 地块数组
     */
    Skill.prototype.showDamageRange = function (x, y, cellArr) {
        if (x == -1 || y == -1) {
            this.rangeSp.showDamageRange(x, y);
            return;
        }
        var kihei = this.kihei;
        var size = kihei.mapCell.getSize();
        if (this.attackRange != -1) {
            var r = size * this.attackRange;
            var dis = egret.Point.distance(new egret.Point(x, y), new egret.Point(kihei.x, kihei.y));
            if (dis > r) {
                //拖动超出攻击范围
                var sin = (y - kihei.y + 0.1) / dis;
                var cos = (x - kihei.x + 0.1) / dis;
                y = kihei.y + (sin * r);
                x = kihei.x + (cos * r);
                var ry = Math.floor(y / size);
                var cx = Math.floor(x / size);
                this.actionTarget = cellArr[ry][cx];
                this.rangeSp.showDamageRange(x, y);
            }
            else {
                var ry = Math.floor(y / size);
                var cx = Math.floor(x / size);
                this.actionTarget = cellArr[ry][cx];
                this.rangeSp.showDamageRange(x, y);
            }
        }
        else {
            var ry = Math.floor(y / size);
            var cx = Math.floor(x / size);
            this.actionTarget = cellArr[ry][cx];
            this.rangeSp.showDamageRange(x, y);
        }
    };
    Skill.prototype.getAttackRange = function () {
        return this.attackRange;
    };
    Skill.prototype.getDamageRange = function () {
        return this.damageRange;
    };
    Skill.prototype.getRangeType = function () {
        return this.rangeType;
    };
    Skill.prototype.getATK = function () {
        return this.atk;
    };
    Skill.prototype.getCD = function () {
        return this.cd;
    };
    Skill.prototype.checkInRange = function (kaiju) {
        if (!this.distanceCheck(kaiju)) {
            return false;
        }
        return this.hitCheck(kaiju);
    };
    /**根据距离初步计算是否在范围内 */
    Skill.prototype.distanceCheck = function (kaiju) {
        var points = kaiju.getCollisionPoint();
        var damage = this.rangeSp.damageRange;
        var point0 = new egret.Point(damage.x, damage.y);
        // console.log(point0, points, this.kihei.mapCell.getSize())
        var dis = this.damageRange * this.kihei.mapCell.getSize();
        for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
            var p = points_1[_i];
            var dis2 = egret.Point.distance(p, point0);
            if (dis2 < dis) {
                // console.log('distance true : ', dis, dis2)
                return true;
            }
        }
        // console.log('distance false')
        return false;
    };
    /**碰撞检测是否在范围内 */
    Skill.prototype.hitCheck = function (kaiju) {
        var points = kaiju.getCollisionPoint();
        var sp = this.rangeSp.damageRange;
        for (var _i = 0, points_2 = points; _i < points_2.length; _i++) {
            var p = points_2[_i];
            if (sp.hitTestPoint(p.x, p.y)) {
                // console.log('hit test true')
                return true;
            }
        }
        // console.log('hit test false')
        return false;
    };
    return Skill;
}());
window["Skill"] = Skill;
__reflect(Skill.prototype,"Skill",[]); 


/***/ }),

/***/ "./src/ui/ActionRange.ts":
/***/ (function(module, exports) {

/**机兵动作范围显示对象 */
var ActionRange = /** @class */ (function () {
    function ActionRange(kihei, skill) {
        this._kihei = kihei;
        this._skill = skill;
    }
    ActionRange.prototype.showAttackRange = function (v) {
        if (this._skill.getAttackRange() == -1) {
            return;
        }
        if (this._isShowAttackRange == v) {
            return;
        }
        if (!this.attackRange) {
            this.drawRange1();
        }
        if (v && !this.attackRange.parent) {
            this._kihei.addChild(this.attackRange);
        }
        else if (!v && this.attackRange.parent) {
            this._kihei.removeChild(this.attackRange);
        }
        this._isShowAttackRange = v;
    };
    ActionRange.prototype.showDamageRange = function (x, y) {
        if ((x == -1 || y == 1) && this.damageRange) {
            this.damageRange.parent && this.damageRange.parent.removeChild(this.damageRange);
            return;
        }
        if (!this.damageRange) {
            this.drawRange2();
        }
        var kihei = this._kihei;
        var skill = this._skill;
        var reach = skill.getAttackRange();
        var damageRange = this.damageRange;
        //攻击范围=-1即为第二三代机兵，不需要显示透明件,xy用于计算方向
        //攻击范围!=-1即为第一四代机兵，显示透明件,xy用于计算位置
        if (reach != -1) {
            var sp = this.alphaKihei;
            if (!sp) {
                sp = kihei.drawKihei();
                sp.alpha = 0.5;
                this.alphaKihei = sp;
            }
            sp.anchorOffsetX = sp.width / 2;
            sp.anchorOffsetY = sp.height / 2;
            sp.x = 0;
            sp.y = 0;
            damageRange.x = x;
            damageRange.y = y;
            damageRange.addChild(sp);
            kihei.parent && kihei.parent.addChild(damageRange);
        }
        else {
            damageRange.x = kihei.x;
            damageRange.y = kihei.y;
            var deg = GlobalMethod.getRotation(kihei.x, kihei.y, x, y);
            if (skill.getRangeType() == RangeType.FAN)
                deg -= 60;
            damageRange.rotation = deg;
            kihei.parent && kihei.parent.addChild(damageRange);
        }
    };
    ActionRange.prototype.drawRange1 = function () {
        var reach = this._skill.getAttackRange();
        if (reach == -1) {
            return;
        }
        var size = this._kihei.mapCell.getSize();
        var sp = new egret.Sprite();
        sp.graphics.beginFill(0xCD2626, 0.2);
        sp.graphics.drawCircle(size / 2, size / 2, size * reach);
        sp.graphics.endFill();
        this.attackRange = sp;
    };
    ActionRange.prototype.drawRange2 = function () {
        var kihei = this._kihei;
        var skill = this._skill;
        var size = kihei.mapCell.getSize();
        var reach = skill.getDamageRange();
        var type = skill.getRangeType();
        var sp = new egret.Sprite();
        switch (type) {
            case RangeType.CIRCLE:
                sp.graphics.beginFill(0xEE2C2C, 0.5);
                sp.graphics.drawCircle(0, 0, size * reach);
                break;
            case RangeType.FAN:
                var r = size * reach;
                sp.graphics.beginGradientFill(egret.GradientType.RADIAL, [0xEE2C2C, 0xEE2C2C], [0, 0.6], [100, 255]);
                sp.graphics.moveTo(0, 0);
                sp.graphics.lineTo(r, 0);
                sp.graphics.drawArc(0, 0, r, 0, 120 * Math.PI / 180);
                sp.graphics.lineTo(0, 0);
                break;
            case RangeType.LINE:
                sp.graphics.beginGradientFill(egret.GradientType.LINEAR, [0xEE2C2C, 0xEE2C2C], [0, 0.6], [150, 255]);
                sp.anchorOffsetY = reach * size / 2;
                sp.graphics.drawRect(0, 0, 50 * size, reach * size);
                break;
        }
        sp.graphics.endFill();
        this.damageRange = sp;
    };
    return ActionRange;
}());
window["ActionRange"] = ActionRange;
__reflect(ActionRange.prototype,"ActionRange",[]); 


/***/ }),

/***/ "./src/ui/ConfirmBtn.ts":
/***/ (function(module, exports) {

var ConfirmBtn = /** @class */ (function (_super) {
    __extends(ConfirmBtn, _super);
    function ConfirmBtn() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/confirmbtn.exml";
        return _this;
    }
    return ConfirmBtn;
}(eui.Button));
window["ConfirmBtn"] = ConfirmBtn;
__reflect(ConfirmBtn.prototype,"ConfirmBtn",[]); 


/***/ }),

/***/ "./src/ui/Status.ts":
/***/ (function(module, exports) {

var Status = /** @class */ (function (_super) {
    __extends(Status, _super);
    /**机兵状态图 */
    function Status(kihei) {
        var _this = _super.call(this) || this;
        _this._kihei = kihei;
        _this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, _this.init, _this);
        _this.skinName = 'resource/eui_skins/KiheiStatus.exml';
        _this._kihei.addEventListener(PlayEvent.GET_DAMAGE, _this.refreshHP, _this);
        return _this;
    }
    Status.prototype.init = function (e) {
        if (this.kihei_icon) {
            this._iconSize = this.width;
        }
        this.refresh();
    };
    Status.prototype.refresh = function (e) {
        if (e === void 0) { e = null; }
        var kihei = this._kihei;
        if (!this._sp) {
            var sp = kihei.drawKihei();
            var scale = sp.width / sp.height;
            sp.width = this.width;
            sp.height = sp.width / scale;
            sp.y = (this._iconSize - sp.height) / 2;
            this._sp = sp;
            this.kihei_icon.addChild(sp);
        }
        this.refreshHP();
        this.refreshCD();
    };
    Status.prototype.refreshHP = function (e) {
        if (e === void 0) { e = null; }
        if (!this.hp_gauge) {
            return;
        }
        this.hp_gauge.value = this._kihei.getHP() / this._kihei.getMaxHP() * 100;
    };
    Status.prototype.refreshCD = function () {
        if (!this.kihei_icon) {
            return;
        }
        var angle = this._kihei.getCDRate() * 360;
        if (angle == 360) {
            if (this._iscd && this._cdProgress) {
                this._cdProgress.graphics.clear();
                this._iscd = false;
            }
            return;
        }
        this._iscd = true;
        var d = this.width;
        var r = d / 2;
        var shape = this._cdProgress;
        var mask = this._mask;
        if (!shape) {
            shape = new egret.Shape();
            shape.x = 0;
            shape.y = 0;
            this._cdProgress = shape;
            this.kihei_icon.addChild(shape);
        }
        if (!mask) {
            mask = new egret.Shape();
            mask.graphics.beginFill(0x000000);
            mask.graphics.drawRect(0, 0, d, d);
            mask.graphics.endFill();
            this.kihei_icon.addChild(mask);
        }
        shape.graphics.clear();
        shape.graphics.beginFill(0x000000, 0.7);
        shape.graphics.moveTo(r, r);
        shape.graphics.lineTo(d, d);
        shape.graphics.drawArc(r, r, d, 0, angle * Math.PI / 180, true);
        shape.graphics.lineTo(r, r);
        shape.graphics.endFill();
        shape.mask = mask;
    };
    return Status;
}(eui.Component));
window["Status"] = Status;
__reflect(Status.prototype,"Status",[]); 


/***/ }),

/***/ "./src/utils/Dialog.ts":
/***/ (function(module, exports) {

var Dialog = /** @class */ (function () {
    function Dialog() {
    }
    return Dialog;
}());
window["Dialog"] = Dialog;
__reflect(Dialog.prototype,"Dialog",[]); 


/***/ }),

/***/ "./src/utils/LifecycleCallback.ts":
/***/ (function(module, exports) {

// TypeScript file
var LifecycleCallback = /** @class */ (function () {
    function LifecycleCallback() {
    }
    LifecycleCallback.regist = function () {
        egret.lifecycle.onPause = this.onPause;
        egret.lifecycle.onResume = this.onResume;
    };
    LifecycleCallback.addFunc = function (key, f1, f2) {
        LifecycleCallback.map[key] = new LcyObj(f1, f2);
    };
    LifecycleCallback.removeFunc = function (key) {
        delete LifecycleCallback.map[key];
    };
    LifecycleCallback.onPause = function () {
        for (var i in LifecycleCallback.map) {
            LifecycleCallback.map[i].onPause();
        }
    };
    LifecycleCallback.onResume = function () {
        for (var i in LifecycleCallback.map) {
            LifecycleCallback.map[i].onResume();
        }
    };
    LifecycleCallback.map = {};
    return LifecycleCallback;
}());
window["LifecycleCallback"] = LifecycleCallback;
__reflect(LifecycleCallback.prototype,"LifecycleCallback",[]); 
var LcyObj = /** @class */ (function () {
    function LcyObj(f1, f2) {
        this.onPause = f1;
        this.onResume = f2;
    }
    return LcyObj;
}());
window["LcyObj"] = LcyObj;
__reflect(LcyObj.prototype,"LcyObj",[]); 


/***/ }),

/***/ "./src/utils/Pool.ts":
/***/ (function(module, exports) {

var Pool = /** @class */ (function () {
    function Pool(func) {
        this._arr = [];
        this._func = func;
    }
    Pool.prototype.getOne = function () {
        var ret = null;
        for (var _i = 0, _a = this._arr; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (!obj.activate) {
                ret = obj;
                break;
            }
        }
        if (!ret) {
            ret = this._func();
            this._arr.push(ret);
        }
        ret.activate = true;
        return ret;
    };
    Pool.prototype.recycle = function (e) {
        if (e === void 0) { e = null; }
        var obj = e.target;
        obj.activate = false;
    };
    Pool.prototype.dispose = function () {
        this._arr = null;
        this._func = null;
    };
    return Pool;
}());
window["Pool"] = Pool;
__reflect(Pool.prototype,"Pool",[]); 


/***/ }),

/***/ "./src/utils/RouteDict.ts":
/***/ (function(module, exports) {

/**缓存寻路路径，主要存放怪兽的移动路径 */
var RouteDict = /** @class */ (function () {
    function RouteDict() {
        this._dict = {};
    }
    RouteDict.prototype.addRoute = function (x1, y1, x2, y2, route) {
        var key = x1 + "_" + y1 + "_" + x2 + "_" + y2;
        var arr = [];
        for (var _i = 0, route_1 = route; _i < route_1.length; _i++) {
            var cell = route_1[_i];
            arr.push([cell.cellX, cell.cellY]);
        }
        this._dict[key] == arr;
    };
    /**获取路径
     *
     * @param cache 需要寻路的场合是否缓存结果，机兵的移动路劲不缓存
     */
    RouteDict.prototype.checkRoute = function (x1, y1, x2, y2, cache) {
        if (cache === void 0) { cache = false; }
        var key = x1 + "_" + y1 + "_" + x2 + "_" + y2;
        if (this._dict[key]) {
            console.log('已缓存当前路径');
            return this._dict[key];
        }
        var cellArr = World.getIns().cellArr;
        var c1 = cellArr[y1][x1];
        var c2 = cellArr[y2][x2];
        var route = World.getIns().findPath(c1, c2, null);
        if (cache) {
            this._dict[key] == route;
        }
        return route;
    };
    /**获取路径
     *
     * @param cache 需要寻路的场合是否缓存结果，机兵的移动路径不缓存
     */
    RouteDict.prototype.checkRoute2 = function (mc1, mc2, cache) {
        if (cache === void 0) { cache = false; }
        var key = mc1.cellX + "_" + mc1.cellY + "_" + mc2.cellX + "_" + mc2.cellY;
        if (this._dict[key]) {
            console.log('已缓存当前路径');
            return this._dict[key];
        }
        var route = World.getIns().findPath(mc1, mc2, null);
        if (cache) {
            this._dict[key] == route;
        }
        return route;
    };
    return RouteDict;
}());
window["RouteDict"] = RouteDict;
__reflect(RouteDict.prototype,"RouteDict",[]); 


/***/ }),

/***/ "./src/utils/SoundManager.ts":
/***/ (function(module, exports) {

var SoundManager = /** @class */ (function () {
    function SoundManager() {
        var _this = this;
        LifecycleCallback.addFunc('bgm', function () { _this.pause(); }, function () { _this.resume(); });
    }
    SoundManager.instance = function () {
        if (!SoundManager._ins) {
            SoundManager._ins = new SoundManager();
        }
        return SoundManager._ins;
    };
    SoundManager.prototype.play = function (name) {
        if (this._bgm) {
            this._bgmChannel.stop();
            this._bgm.close();
        }
        this._bgm = RES.getRes(name);
        this._bgm.type = egret.Sound.MUSIC;
        this._bgmChannel = this._bgm.play();
    };
    SoundManager.prototype.resume = function () {
        if (!this._bgm) {
            return;
        }
        this._bgmChannel = this._bgm.play(this._bgmPosition);
    };
    SoundManager.prototype.pause = function () {
        if (this._bgm) {
            this._bgmPosition = this._bgmChannel.position;
            this._bgmChannel.stop();
            // this._bgm.close();				
        }
    };
    return SoundManager;
}());
window["SoundManager"] = SoundManager;
__reflect(SoundManager.prototype,"SoundManager",[]); 


/***/ })

/******/ });