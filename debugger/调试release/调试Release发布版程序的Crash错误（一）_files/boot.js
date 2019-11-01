/**
 * @author stan | chaoliang@staff.sina.com.cn
 */
//- debug -
var __debug_mode = false;	//should be false
//- dev -
//- 1 : index.dev.js						|	引入小文件
//- 2 : index.dev.js & import decode file	|	引入小文件，且讲每一个小文件压缩，现阶段只是去除空白节点
//- 3 : index.php?dev_path=index.dev.js		|	引入实时合并的大文件，不做压缩
//- 4 : index.js							|	引入online目录下合并好的文件，需要sh 5切换到上线状态
var __dev_mode = 4;			//should be 4

//- globel scope
var scope = scope ? scope : {};
//- system message 
var $SYSMSG = {};
$SYSMSG.extend = function (info, override){
	for (var i in info) {
		$SYSMSG[i] = !!override == false ? info[i] : $SYSMSG[i];
	}
};

//- global
scope.$BASEJS  = "http://sjs.sinajs.cn/";
scope.$BASECSS = "http://simg.sinajs.cn/";
//scope.$BASECNF = "http://cnf5.sinajs.cn/";
scope.$BASECNF = "http://blogcnfv5.sinajs.cn/";
scope.imgPath  = "http://bj.static.photo.sina.com.cn/orignal/";

//- 
var Boot = {
	getCookie : function (name) {
		var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
		if (arr != null) {
			return unescape(arr[2]);
		}
		return null;
	},
	setCookie : function (sName,sValue,objHours,sPath,sDomain,bSecure){
		var sCookie = sName + "=" + encodeURIComponent(sValue);
		if (objHours) {
			var date = new Date();
			var ms = objHours * 3600 * 1000;
			date.setTime(date.getTime() + ms);
			sCookie += ";expires=" + date.toGMTString();
		}
		if (sPath) {
			sCookie += ";path=" + sPath;
		}
		if (sDomain) {
			sCookie += ";domain=" + sDomain;
		}
		if (bSecure) {
			sCookie += ";secure";
		}
		document.cookie=sCookie;
	},
	keyValue:function(string,key){
		var arr = string.match(new RegExp("(\\?|&)"+key+"=([^&]*)(&|$)"));
		if(arr != null) return arr[2]; return null;
	},
	checkAuthor : function (){
		var AuthorInfo = unescape(this.getCookie("SUP"));
		if (AuthorInfo && AuthorInfo != "") {
        $UID = this.keyValue(AuthorInfo, "uid");
        window.$isLogin = !!($UID);
        if (typeof scope.$uid == "undefined") {
            window.$isAdmin = false;
        }
        else {
            window.$isAdmin = (scope.$uid == $UID);
        }
		}
		else {
			$UID = null;
			window.$isLogin = false;
			window.$isAdmin = false;
		}
	},
	dw : function (s) {
		window.document.write(s);
	},
	dwSwf : function (_sName, _sSrc, _sWidth, _sHeight, _sMode, _aValue) {
		var sValue = "", aFlashVars = [];
		if (_aValue) {
			for (var key in _aValue) {
				aFlashVars[aFlashVars.length] = key + "=" + _aValue[key];
			}
			sValue = aFlashVars.join('&');
		}
		_sMode = _sMode ? 'wmode="transparent"' : '';
		if(_sName == "calendar" || _sName =="musicFlash2" ){
			return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="' + _sWidth + '" height="' + _sHeight + '" id="' + _sName + '" align="middle" ><param name="movie" value="' + _sSrc + '?' + sValue + '" /><param name=allowScriptAccess value=always><param name=wmode value=transparent><embed name="' + _sName + '" src="' + _sSrc + '" ' + _sMode + ' quality="high" align="top" salign="lt" allowScriptAccess="always" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + _sWidth + '" height="' + _sHeight + '" flashVars="' + sValue + '" \/><\/object>';
		}else{
			return '<embed id="' + _sName + '" name="' + _sName + '" src="' + _sSrc + '" ' + _sMode + ' quality="high" align="top" salign="lt" allowScriptAccess="always" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + _sWidth + '" height="' + _sHeight + '" flashVars="' + sValue + '" \/>';
		}
	},
	dwScript : function(o){
		o.id = o.id || "";
		o.charset = o.charset || "utf-8";
		var def = "";
		if(o.defer != null){
			def = "defer='true'"; 
		} 
		if (o.script && o.script != "") {
			this.dw("<script id='" + o.id + "' " + def + ">" + o.script + "<\/script>");
		}
		else if (o.url && o.url != "") {
			this.dw("<script id='" + o.id + "' src='" + o.url + "' charset='" + o.charset + "' " + def + "><\/script>");
		}
		else {
			throw new Error("no script content or url specified");
		}
	},
	loadScript : function (url, callback, encode){  
		var script = document.createElement('script');
		script.type = 'text/javascript';
		if (encode) {
			script.charset = encode;
		}
		if (callback) {
			script.onload = script.onreadystatechange = function(){
				if (script.readyState && script.readyState != 'loaded' &&
				script.readyState != 'complete') {
					return;
				}
				script.onreadystatechange = script.onload = null;
				callback();
			};
		}
		script.src = url;
		document.getElementsByTagName('head')[0].appendChild(script);  
	},
	dwCSS : function(o){
		o.id = o.id || "";
		if (o.url){
			this.dw('<link id="' + o.id + '" rel="stylesheet" type="text/css" href="' + o.url + '" />');
		}
		else if (o.styles){
			this.dw('<style id="' + o.id + '" >' + o.styles + '<\/style>');
		}
	},
	$addEvent2:	function (elm, func, evType, useCapture) {
		if (typeof useCapture == 'undefined') {
			useCapture = false;
		}
		if (typeof evType == 'undefined') {
			evType = 'click';
		}
		if (elm.addEventListener) {
			elm.addEventListener(evType, func, useCapture);
			return true;
		}
		else if (elm.attachEvent) {
			var r = elm.attachEvent('on' + evType, func);
			return true;
		}
		else {
			elm['on' + evType] = func;
		}
	},
	$removeEvent2 : function  (oElement, fHandler, sName) {
		if (typeof fHandler != "function") {
			return;
		}
		if (oElement.addEventListener) {
			oElement.removeEventListener(sName, fHandler, false);
		}
		else if (oElement.attachEvent) {
			oElement.detachEvent("on" + sName, fHandler);
		}
		fHandler[sName] = null;
	},
	loadCnf : function (){
		scope.pid_map = {
			"blog":   "0x00000001",
			"icp" :   "0x02000002",
			"photo":  "0x00000008",
			"vblog":  "0x00000002",
			"tiezi":  "0x00000040",
			"quanzi": "0x00000004",
			"music":  "0x00000400"
		};
		scope.cfgbak = typeof config != "undefined" ? config : {};
		scope.p_key = scope.pid_map[scope.$PRODUCT_NAME];
		if(scope.$loadconf && scope.$loadconf == true){
			var cnf = scope.$BASECNF + "combine?uid=" + scope.$uid + "&varname=config&productid=" + scope.pid_map[scope.$PRODUCT_NAME] + "&common=1&private=1&component=1&product=1&.js";
			this.dwScript({
				url		: cnf,
				charset : "utf-8"
			});
		}
		// 如果是小页面，就不加载 Conf 数据了
		/*
		if(scope.$uid != "0000000000"){
			this.dwScript({
				url		: "http://uic.sinajs.cn/uic?type=nick&uids=" + scope.$uid + "&varname=nick",
				charset : "UTF-8"
			});
		}
		*/
		// 如果页面没定义 loadPromote 或者 loadPromote 设置为 true，载入推广位 JS；
		// 如果页面特别定义 loadPromote 为 false，则不载入，主要是针对小页面
		if(typeof loadPromote == "undefined" || loadPromote == true){
			this.dwScript({
				url		: scope.$BASEJS  + "common/js/config.js",
				charset : "UTF-8"
			});
		}
		if (__debug_mode) {
			this.dwScript({
				url: scope.$BASEJS + "sina/trace.js"
			});
		}
		else{
			window.trace = function () {};
		}
	},
	fixConfig : function(){
		if(typeof config == "undefined"){
			trace("conf 接口挂了", "#F00");
			return false;
		}
		else{
			if(scope.cfgbak && scope.cfgbak.common){
				config.common = config.common || scope.cfgbak.common;
			}
			if (scope.cfgbak && scope.cfgbak.product) {
				config.product = config.product || scope.cfgbak.product;
			}
			//2009-03-05 fix config by dongguang
			if(config.common && typeof config.common.t == "undefined"){
				if(config.common.head && scope.cfgbak.common.head){
					if(config.common.head.constructor!=Object &&  scope.cfgbak.common.head.constructor==Object){
						config.common.head=scope.cfgbak.common.head;
					}
				}
				if(config.common.bg && scope.cfgbak.common.bg){
					if(config.common.bg.constructor!=Object &&  scope.cfgbak.common.bg.constructor==Object){
						config.common.bg=scope.cfgbak.common.bg;
					}
				}
				if(typeof config.common.t == "undefined" && scope.cfgbak.common.t){
					config.common.t = scope.cfgbak.common.t;
				}
			}
			if (config.component) {
				if (typeof config.component.c1 == "undefined") {
					config.component = scope.cfgbak.component;
				}
			}
			if(scope.$PRODUCT_NAME == "blog"){
				if(typeof(config["private"]) != "undefined" && typeof(config["private"].adver) != "undefined"){
					var _bak_adver = config["private"].adver || 0;
				}
				else{
				}
				this.fixObject(config,scope.cfgbak);
				if(typeof(config["private"]) != "undefined" && typeof(config["private"].adver) != "undefined"){
					config["private"].adver = _bak_adver;
				}
				else{
				}
			}
			if(typeof config.common =="undefined" && typeof scope.cfgbak.common != "undefined"){
				config.common = scope.cfgbak.common;
				return false;
			}
			return true;
		}
	},
    fixObject:function(srcObj,extendObj){
		for(var name in extendObj){
			if(srcObj[name]){
				if(srcObj[name].constructor==Object){
						if(this.objIsEmpty(srcObj[name])){
							srcObj[name]=extendObj[name];
						}else{
							this.fixObject(srcObj[name],extendObj[name]);
						}
					}else{
						if(srcObj[name]=="" && extendObj[name]!=""){
							srcObj[name]=extendObj[name];
						}
						if(srcObj[name].constructor==Array && srcObj[name].length<=0){
							srcObj[name]=extendObj[name];
						}
					}
				}else{
					srcObj[name]=extendObj[name];
				}
			}
	},
    objIsEmpty:function(obj){
			var isTrue=true;
			for(var name in obj){
				isTrue=false;
				break;
			}
			return isTrue;
	},
	/**
	 * @desc add DOM onload Event
	 */
	addDOMLoadEvent : function (func) {
		var __load_events;
		var __load_timer;
		if (!__load_events) {
			var init = function () {
				// quit if this function has already been called
				if (arguments.callee.done) {
					return;
				}
				// flag this function so we don't do the same thing twice
				arguments.callee.done = true;
				// kill the timer
				if (__load_timer) {
					clearInterval(__load_timer);
					__load_timer = null;
				}
				// execute each function in the stack in the order they were added
				for (var i=0;i < __load_events.length;i++) {
					__load_events[i]();
				}
				__load_events = null;
			};
			// for Mozilla/Opera9
			if (document.addEventListener) {
				document.addEventListener("DOMContentLoaded", init, false);
			}
			// for Internet Explorer
			/*@cc_on @*/
			/*@if (@_win32)
				var domlen = document.getElementsByTagName("*").length;
				var domnum = 0;
				(function () {
					if(domnum != domlen) {
						setTimeout(arguments.callee, 500);
					}
					else {
						setTimeout(init, 500);
					}
					domnum = domlen;
				})();
			@end @*/
			// for Safari
			if (/WebKit/i.test(navigator.userAgent)) { // sniff
				__load_timer = setInterval(function() {
					if (/loaded|complete/.test(document.readyState)) {
						init(); // call the onload handler
					}
				}, 10);
			}
			// for other browsers
			window.onload = init;

			// create event function stack
			__load_events = [];
		}
		// add function to event stack
		__load_events.push(func);
	},
	$debug : function (){
		if (__debug_mode) {
			//trace("dev_mode : " + __dev_mode);
		}
	},
	loadCss : function(){
		if (scope.$version && scope.$version == '7') {
		}
		else {
			var cssVer = (typeof config != "undefined" ? config.product.c : "-1") + ".css";
			this.dwCSS({
				url: scope.$BASECSS + 'common/css/default.css?' + cssVer
			});
			this.dwCSS({
				url: scope.$BASECSS + scope.$PRODUCT_NAME + '/css/' + scope.$PRODUCT_NAME + '.css?' + cssVer
			});
			if (this.fixConfig() == true) {
				trace(123);
				var cfg = config;
				var tempArray = cfg.common.t.split("_");
				scope.theme_id = (cfg.common.r == 1) ? this.randomTheme(tempArray[0]) : cfg.common.t;
				this.dwCSS({
					url: scope.$BASECSS + 'tpl/' + scope.theme_id + '/t.css?' + cssVer,
					id: "themeLink"
				});
				this.writeDiyCss();
			}
		}
	},
	loadMiniCss : function (){
		var cssVer = (typeof config != "undefined" ? config.product.c : "-1") + ".css";
		this.dwCSS({url : scope.$BASECSS + 'common/css/default.css?' + cssVer});
		this.dwCSS({url : scope.$BASECSS + scope.$PRODUCT_NAME+'/css/'+scope.$PRODUCT_NAME+'.css?' + cssVer});
	},
	writeDiyCss:function (){
//		var path = ($isAdmin) ? scope.imgPath : "http://static.photo.sina.com.cn/orignal/", diycss = "";
		var diycss = "";
		if(config.common.t && config.common.t.split("_")[0]=="13"){
			return;
		}
		if(config.common.head && config.common.head.usepic * 1 == 1 && typeof config.common.head.currpic != "undefined"){
		//修改访问头图方式
		var height=parseInt(config.common.head.height);
		var num=parseInt(config.common.head.currpic.substring(config.common.head.currpic.length-2,config.common.head.currpic.length),16)%16+1;
		
//		alert("path="+path);
		var diycss = {id:"diy_banner"};
		diycss.styles = '.headpic950{background:url('+this.getImgStaticPath(config.common.head.currpic)+') '+
		scope.cssReapetConf[config.common.head.tiled] + ' ' + scope.cssPositionXConf[config.common.head.align_h] + ' ' + scope.cssPositionYConf[config.common.head.align_v] + ';height:' + height + 'px}.headpic100{height:' +height+ 'px}.ntoptitle{height:' + height + 'px}';
		this.dwCSS(diycss);
		}
		
		if(config.common.bg && config.common.bg.usepic * 1 == 1 && typeof config.common.bg.currpic != "undefined"){
			
			//背景图向下移动托盘高度的偏移量
			var offsetY=scope.cssPositionYConf[config.common.bg.align_v]=="top"?"43px":scope.cssPositionYConf[config.common.bg.align_v];
			
		//修改头图访问方式
			var num=parseInt(config.common.bg.currpic.substring(config.common.bg.currpic.length-2,config.common.bg.currpic.length),16)%16+1;
			var diycss = {id:"diy_bg"};
			diycss.styles = 'body{background-image:url(' + this.getImgStaticPath(config.common.bg.currpic) + ');background-repeat: ' + 
			scope.cssReapetConf[config.common.bg.tiled] + '; background-position:' + scope.cssPositionXConf[config.common.bg.align_h] + ' ' + offsetY + '} .sinaBottom {background:transparent;background-image:none;}';
			this.dwCSS(diycss);
		}
	},
	getPageId : function (){
		return scope.$pageid ;
	},
	loadResource : function(){
		this.fixConfig();
		var page = this.getPageId();
		var jsVer = (typeof config != "undefined" ? config.product.j : "-1") + ".js";
		switch(__dev_mode){
			case 1:
				var url = scope.$BASEJS + 'bind/import.php?url=conf/' + page + '.dev.js&product=' + scope.$PRODUCT_NAME + "&rnd=" + jsVer;
				break;
			case 2: 
				var url = scope.$BASEJS + 'bind/import.php?url=conf/' + page + '.dev.js&product=' + scope.$PRODUCT_NAME + "&decode=1&rnd=" + jsVer;
				break;
			case 3:
				var url = scope.$BASEJS + "bind/index.php?dev_path=/" + scope.$PRODUCT_NAME + "/js/conf/" + page + ".dev.js&dev_prefix=/" + scope.$PRODUCT_NAME + "&" + jsVer;
				break;
			case 4: 
			default:
				var url = scope.$BASEJS + scope.$PRODUCT_NAME + "/js/" + page + ".js?" + jsVer;
				break;
		}
		this.dwScript({url : url});			
	},
	runMain : function () {
		if(this.mainInit == false) {
			this.mainInit = true;
			this.$removeEvent2(document.body, this.runMain, "focus");
			this.$removeEvent2(window, this.runMain, "scroll");
			this.$removeEvent2(document.body, this.runMain, "mousemove");
			this.$removeEvent2(document.body, this.runMain, "mouseover");
			if(typeof(exeute)=='function')
			    exeute();
		}
	},
	start : function(){
		try{
		    main();
//			this.$debug();
			this.mainInit = false;
		  	if(scope.$PRODUCT_NAME == 'blog' && (scope.$pageid == "index" || scope.$pageid == "indexM" || scope.$pageid == "article" || scope.$pageid == "articleM") && ($MOZ || $IE)) {
				this.$addEvent2(document.body, this.runMain.bind2(this), "focus");
				this.$addEvent2(window, this.runMain.bind2(this), "scroll");
				this.$addEvent2(document.body, this.runMain.bind2(this), "mousemove");
				this.$addEvent2(document.body, this.runMain.bind2(this), "mouseover");
			}
			else {
			    this.runMain();
			}
		 }catch(e){
			trace(e);
		}
	},
	renderPage : function () {
			this.addDOMLoadEvent(this.start.bind2(this));
	},
	randomTheme:function(themeNum){
		var data = scope.theme_cnf[themeNum].data;
		var theme, length = data.length - 1,cookieTheme = this.getCookie("sina_blog_random_theme1");
		if((/quanzi_index/.test(scope.$pageid) && scope.$PRODUCT_NAME == "icp") ||(/index/.test(scope.$pageid) && scope.$PRODUCT_NAME != "icp")|| cookieTheme == null){
			theme = this.getRandomNum(0, length - 1);
			this.setCookie("sina_blog_random_theme1", theme, 2, "/", "sina.com.cn", false);
		}else{
			theme = cookieTheme;
		}
		
		//个人中心首页变化随机模板，非首页则不用变化
		if (scope.$PRODUCT_NAME == "icp") {
			if (/wall/.test(scope.$pageid) || cookieTheme == null) {
				theme = this.getRandomNum(0, length - 1);
				this.setCookie("sina_blog_random_theme1", theme, 2, "/", "sina.com.cn", false);
			}
			else {
				return data[cookieTheme];
			}
		}
		
		return data[theme];
	},
	getRandomNum:function(min, max){
		 return min + Math.floor(Math.random() * (max - min + 1));  
	},
	getImgStaticPath:function (pid,type){
		if(!pid){
			return "";
		}
		var type=type||"orignal";
		var num=(eval("0X" +pid.substring(pid.length-2))%16)+1;
		return "http://static"+num+".photo.sina.com.cn/"+type+"/"+pid;
	}
};
Function.prototype.bind2 = function(object) { 
	var __method = this; 
	return function() { 
		return __method.apply(object, arguments); 
	};
};

//- navigator
scope._ua = navigator.userAgent.toLowerCase();
scope.$IE = /msie/.test(scope._ua);
scope.$OPERA = /opera/.test(scope._ua);
scope.$MOZ = /gecko/.test(scope._ua);
scope.$IE5 = /msie 5 /.test(scope._ua);
scope.$IE55 = /msie 5.5/.test(scope._ua);
scope.$IE6 = /msie 6/.test(scope._ua);
scope.$IE7 = /msie 7/.test(scope._ua);
scope.$SAFARI = /safari/.test(scope._ua);
scope.$winXP=/windows nt 5.1/.test(scope._ua);
scope.$winVista=/windows nt 6.0/.test(scope._ua);
// 常用的判断
var $IE = scope.$IE, $MOZ = scope.$MOZ, $IE6 = scope.$IE6;

// 预定义
/**
 * 返回相应的提示文案内容
 * @method showError
 * @param {String} msgline 文案所在索引
 * @param {String} ico 图标索引, 具体见windwoDialog
 * @param {Array} btn 按钮集合
 *		[
 *      		//按钮1设置
 *      		{
 *      		label:	"xxxx",		按钮1文本，默认值“确定”
 *      		func:	"xxxxx",	按钮1函数，默认为空
 *      		focus:	true,		按钮1为默认聚焦，默认第一个按钮聚焦
 *      		css:	""			按钮1样式，默认样式为
 *      		}
 *      		//如果有多个按钮，就用逗号分隔多个按钮对象的定义
 *      ]
 * @param {String} target 调用哪个窗口的showError 可选值
 * @exception
 *      showError("提示信息", "01");
 *      showError("提示信息", null, [{label: "确定按钮"}], "parent");
 */
function showError(msgline, ico, btn, target) {
	// 如果是播客用户被封杀，跳转到播客 404 页
	if(msgline == "A00008"){
		if(scope.$PRODUCT_NAME == "vblog"){
			window.location.href = "http:///you.video.sina.com.cn/web/notFound.php";
		}
	}
	if(msgline == "00007" || msgline == "00008" || msgline == "00009" || msgline == "00010"){
		var go2Url = {
			"00007": "http://blog.sina.com.cn/main_v5/ria/auto_signup.html?uid=" + $UID,
			"00008": "http://blog.sina.com.cn/main_v5/ria/auto_signup.html?uid=" + $UID,
			"00009": "http://control.blog.sina.com.cn/admin/reg/signup.php?pro=blog",
			"00010": "http://blog.sina.com.cn/main_v5/ria/notopen.html"
			};
		window.location.href = go2Url[msgline];
		return false;
	}
	// 新的调用方法
	if (typeof ico == "object" && ico != null) {
		ico.target = ico.target || window;
		ico.type = ico.type || 0;
		ico.ico = ico.ico || "03";
		// 新增关闭按钮的显示与否
		//ico.close = ico.close == null? true: ico.close;
		var str = "";
		if(ico.type == 1) {
			str = msgline;
		}
		else {
			str = $SYSMSG[msgline || "00001"];
		}
		ico.target.windowDialog.alert(str,{
			icon: ico.ico || "03",
			close: ico.close,
			btns : [
				{
					text : "确定"
				}
			]
		});
	}
	// 兼容老调用方法
	else {
		var msgStr = "";
		if (target != "window") {
			msgStr = $SYSMSG[msgline];
			msgStr = msgStr ? msgStr : $SYSMSG["00001"];
		}
		if (target == "parent") {
			parent.showError(msgStr, ico, btn, "window");
		}
		if (target == "window") {
			windowDialog.alert(msgline,{
				icon: ico || "03",
				btns : [
				{
					text : "确定"
				}
			]
			});
		}
		if (target == null) {
			showError(msgStr, ico, btn, "window");
		}
	}
}
/**
 * @author stan | chaoliang@staff.sina.com.cn
 *         fangchao | fangchao@staff.sina.com.cn
 * @param {Object} url
 * @desc load the souce files
 * 
 * @modify 相同文件载入一份
 */
function $import(url){
}
//globle
loadResource = Boot.loadResource.bind2(Boot);
loadCss = Boot.loadCss.bind2(Boot);
loadMiniCss = Boot.loadMiniCss.bind2(Boot);
renderPage = Boot.renderPage.bind2(Boot);
getCookie = Boot.getCookie.bind2(Boot);
dw = Boot.dw;
dwSwf = Boot.dwSwf;
dwScript = Boot.dwScript;
loadScript = Boot.loadScript;
checkAuthor = Boot.checkAuthor.bind2(Boot);
getImgStaticPath=Boot.getImgStaticPath;
checkAuthor();
if(typeof scope.$uid == "undefined") {
	// 如果页面未输出 $uid，先检查地址中是否包含 uid 参数
	if (/\d+(#\w+)?$/.test(location.href)) {
		var _uid = location.href.match(/(\d+)(#\w+)?$/);
		uid = $uid = scope.$uid = (_uid != null) ? _uid[1] : "0000000000";
	}
	else {
		uid = $uid = scope.$uid = "0000000000";
	}
}
else{
	uid = $uid = scope.$uid;
}
var $uidhex = window.parseInt($uid).toString(16);
// 将不足8位数长度的十六进制 UID 进行补全
$uidhex = ($uidhex.length < 8) ? ("00000000" + $uidhex).match(/(\w{8})$/i)[1] : $uidhex;  
/**
 * 提供$setDomain变量,用来标明是否需要设置domain
 * 如果不想设置domain,请在跟$pageid变量一起设置$setDomain = false;
 */
if (typeof(scope.$setDomain) == "undefined" || scope.$setDomain == true) {
	document.domain = "sina.com.cn";
}

//引入suggest的定义文件
Boot.loadScript("http://sjs.sinajs.cn/common/js/cardtips.js",null,"UTF-8");

//- start -
Boot.loadCnf();