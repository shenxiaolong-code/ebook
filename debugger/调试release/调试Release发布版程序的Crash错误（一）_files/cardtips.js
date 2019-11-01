/**
 * @fileoverview
 *	登录用户名输入自动匹配，从 Blog V5 移植
 * @author L.Ming | liming1@staff.sina.com.cn
 * @version 1.0
 * @since 2008
 */
(function () {
	/**
	 * 判断浏览器类型
	 * add by xs @ 2008-3-4
	 */
	var _ua = navigator.userAgent.toLowerCase();
	var $IE = /msie/.test(_ua);
	var $moz = /gecko/.test(_ua);
	var $Safari = /safari/.test(_ua);
	/**
	 * 根据元素的id获取对应节点的引用
	 * @author stan | chaoliang@staff.sina.com.cn
	 * @param {String} id 节点的id或者节点本身
	 */
	function $E(id) {
		return typeof(id) == 'string' ? _viewWindow.document.getElementById(id) : id;
	}
	/**
	 * 取得页面的scrollPos
	 * @return {Array} 滚动条居顶 居左值
	 * @author chaoliang@staff.sina.com.cn
	 *         fangchao@staff.sina.com.cn
	 * @update 08.02.13
	 */
	var getScrollPos = function(oDocument) {
		oDocument = oDocument || document;
		return [
				Math.max(oDocument.documentElement.scrollTop, oDocument.body.scrollTop), 
				Math.max(oDocument.documentElement.scrollLeft, oDocument.body.scrollLeft),
				Math.max(oDocument.documentElement.scrollWidth, oDocument.body.scrollWidth), 
				Math.max(oDocument.documentElement.scrollHeight, oDocument.body.scrollHeight)
				];
	};
	/**
	* 获取指定节点的样式
	* @method getStyle
	* @param {HTMLElement | Document} el 节点对象
	* @param {String} property 样式名
	* @return {String} 指定样式的值
	* @author FlashSoft | fangchao@staff.sina.com.cn
	* @update 08.02.23
	* @global $getStyle
	* @exception
	* 			getStyle(document.body, "left");
	* 			$getStyle(document.body, "left");
	*/ 
	var getStyle = function (el, property) {
		switch (property) {
			// 透明度
			case "opacity":
				var val = 100;
				try {
					val = el.filters['DXImageTransform.Microsoft.Alpha'].opacity;
				}
				catch(e) {
					try {
						val = el.filters('alpha').opacity;
					}catch(e){}
				}
					return val;
			 // 浮动
			 case "float":
				 property = "styleFloat";
			 default:
				 var value = el.currentStyle? el.currentStyle[property]: null;
				 return ( el.style[property] || value );
		}
	};
	if($moz) {
		getStyle = function (el, property) {
			// 浮动
			if(property == "float") {
				property = "cssFloat";
			}
			// 获取集合
			try{
				var computed = document.defaultView.getComputedStyle(el, "");
			}
			catch(e) {
				traceError(e);
			}
			return el.style[property] || computed? computed[property]: null;
		};
	}
	/**
	* 获取节点对象的距文档的XY值
	* @method getXY
	* @param {HTMLElement } el 节点对象
	* @return {Array} x,y的数组对象
	* @author FlashSoft | fangchao@staff.sina.com.cn
	* @update 08.02.23
	* @global $getXY
	* @exception
	* 			getXY($E("input"));
	* 			$getXY($E("input"));
	*/
	var getXY = function (el) {
		if ((el.parentNode == null || el.offsetParent == null || getStyle(el, "display") == "none") && el != document.body) {
			return false;
		}
		var parentNode = null;
		var pos = [];
		var box;
		var doc = el.ownerDocument;
		// IE
		box = el.getBoundingClientRect();
		var scrollPos = getScrollPos(el.ownerDocument);
		return [box.left + scrollPos[1], box.top + scrollPos[0]];
		// IE end
	};
	if($moz) {
		getXY = function (el) {
			if ((el.parentNode == null || el.offsetParent == null || getStyle(el, "display") == "none") && el != document.body) {
				return false;
			}
			var parentNode = null;
			var pos = [];
			var box;
			var doc = el.ownerDocument;
			// FF
			pos = [el.offsetLeft, el.offsetTop];
			parentNode = el.offsetParent;
			var hasAbs = getStyle(el, "position") == "absolute";
			if (parentNode != el) {
				while (parentNode) {
					pos[0] += parentNode.offsetLeft;
					pos[1] += parentNode.offsetTop;
					if ($Safari && !hasAbs && getStyle(parentNode,"position") == "absolute" ) {
						hasAbs = true;
					}
					parentNode = parentNode.offsetParent;
				}
			}
			if ($Safari && hasAbs) {
				pos[0] -= el.ownerDocument.body.offsetLeft;
				pos[1] -= el.ownerDocument.body.offsetTop;
			}
			parentNode = el.parentNode;
			// FF End
			while (parentNode.tagName && !(/^body|html$/i.test(parentNode.tagName))) {
				if (getStyle(parentNode, "display").search(/^inline|table-row.*$/i)) { 
					pos[0] -= parentNode.scrollLeft;
					pos[1] -= parentNode.scrollTop;
				}
				parentNode = parentNode.parentNode; 
			}
			return pos;
		};
	}
	/**
	 * 获取Event对象
	 * @method getEvent
	 * @return {Event} event对象
	 * @author FlashSoft | fangchao@staff.sina.com.cn
	 * @update 08.02.23
	 * @exception
	 * 			getEvent();
	 */
	var getEvent = function () {
		return window.event;
	};
	if($moz) {
		getEvent = function () {
			var o = arguments.callee.caller, e, n = 0;
			while(o != null && n < 40){
				e = o.arguments[0];
				if (e && (e.constructor == Event || e.constructor == MouseEvent)) {
					return e;
				}
				n ++;
				o = o.caller;
			}
			return e;
		};
	}
	/**
	 * 禁止Event事件冒泡
	 * @method stopEvent
	 * @author FlashSoft | fangchao@staff.sina.com.cn
	 * @update 08.02.23
	 * @exception
	 * 			stopEvent();
	 */
	var stopEvent = function() {
		var ev = getEvent();
		ev.cancelBubble = true;
		ev.returnValue = false;
	};
	if($moz) {
		stopEvent = function() {
			var ev = getEvent();
			ev.preventDefault();
			ev.stopPropagation();
		};
	}
	Function.prototype.bind3 = function(object, args) { 
		args = args == null? []: args;
		var __method = this; 
		return function() { 
			__method.apply(object, args); 
		};
	};
	/**
	* 在指定节点上绑定相应的事件
	* @method addEvent2
	* @param {String} elm 需要绑定的节点id
	* @param {Function} func 事件发生时相应的函数
	* @param {String} evType 事件的类型如:click, mouseover
	* @update 08.02.23
	* @author Stan | chaoliang@staff.sina.com.cn
	*         FlashSoft | fangchao@staff.sina.com.cn
	* @example
	* 		//鼠标点击testEle则alert "clicked"
	* 		addEvent2("testEle",function () {
	* 			alert("clicked")
	* 		},'click');
	*/
	function addEvent2 (elm, func, evType, useCapture) {
		elm = $E(elm);
		if (typeof useCapture == 'undefined') {useCapture = false;}
		if (typeof evType == 'undefined') {evType = 'click';}
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
	}
	/**
		初始化的一些变量
		@author FlashSoft | fangchao@staff.sina.com.cn
	*/
	var _inputNode;
	var _rndID = parseInt(Math.random() * 100);
	/** 当前显示的菜单集合 */
	var _showMenuItems = [];
	/** 当前显示的菜单索引 */
	var _selectMenuIndex = -1;
	/** 被选中行的文字 */
	var _selectMenuText = "";
	/** 相关CSS */
	var _css = '#userPosition {padding: 0;margin: 0;border: 0;position: absolute;z-index: 999;}\
				#sinaNote {position: absolute;z-index: 999999;width: auto;overflow: hidden;padding: 0;margin: 0;\
				border: 1px solid #CCCCCC;background: #ffffff;text-align:left;}\
				#sinaNote li {font-size: 12px;list-style: none;margin: 0 1px;height: 20px;padding: 0 5px;clear: both;\
				line-height: 20px;cursor: pointer;color: #999999;}\
				#sinaNote li.note {text-align: left;color: #999999;}';
				
	var _viewWindow = window;
	var passcardOBJ = {
		// 鼠标经过背景颜色
		overfcolor: "#999",
		// 鼠标经过背景颜色
		overbgcolor: "#e8f4fc",
		// 鼠标离开字体颜色
		outfcolor: "#000000",
		// 鼠标离开背景颜色
		outbgcolor: "",
		menuStatus: {
			// 是否显示Sina邮箱
			"sina.com": true,
			// 是否显示VIP邮箱 
			"vip.sina.com": true,
			// 是否显示Sina.cn邮箱
			"sina.cn": true,
			// 是否显示外域邮箱
			"非新浪邮箱": true
		}
	};
	/**
	 * 动态生成提示框
	 * add by xs @ 2008-3-4
	 */
	passcardOBJ.createNode = function(){
		var d = _viewWindow.document;
		var div = d.createElement('div');
		div.innerHTML = '<ul id="sinaNote" style="display:none;"></ul>';
		var obj = d.createElement("style");
		obj.setAttribute("type", "text/css")
		try{
			if ($IE) {
				obj.styleSheet.cssText = _css;
			}
			else{
				obj.innerHTML = _css;
			}
		}
		catch(e){trace(e.message);}
		var total = d.createElement("div");
		total.appendChild(div);
		total.appendChild(obj);
		d.body.appendChild(total);
	};
	/**
		快捷键选择菜单
		@author FlashSoft | fangchao@staff.sina.com.cn
	*/
	passcardOBJ.arrowKey = function (keyCodeNum) {
		if(keyCodeNum == 38) {// --
			if (_selectMenuIndex <= 0) {_selectMenuIndex = _showMenuItems.length;}
			_selectMenuIndex --;
			passcardOBJ.selectLi(_selectMenuIndex);
		}
		if(keyCodeNum == 40) {// ++
			if (_selectMenuIndex >= _showMenuItems.length - 1) {_selectMenuIndex = -1;}
			_selectMenuIndex ++;

			passcardOBJ.selectLi(_selectMenuIndex);
		}
	};
	passcardOBJ.showList = function(e)//显示列表
	{
		_selectMenuText = "";
		var keyCodeNum = getEvent().keyCode;
		if(keyCodeNum == 38 || keyCodeNum == 40)  {
			passcardOBJ.arrowKey(keyCodeNum);
			return false;
		}
		if (!$E('sinaNote')) {passcardOBJ.createNode();}
		var username = $E(e).value;
		var menuList = {};
		var atIndex = username.indexOf("@");
		var InputCase = "";
		var InputStr = "";
		if(atIndex > -1) {
			InputCase = username.substr(atIndex + 1);
			InputStr = username.substr(0, atIndex);
		}
		_showMenuItems = [];
		_selectMenuIndex = 0;
		_showMenuItems[_showMenuItems.length] = "sinaNote_MenuItem_Title_" + _rndID;
		for(var key in this.menuStatus) {
			this.menuStatus[key] = true;
			if(InputCase != "" && InputCase != key.substr(0, InputCase.length)) {
				this.menuStatus[key] = false;
			}
			else {
				_showMenuItems[_showMenuItems.length] = "sinaNote_MenuItem_" + key + "_" + _rndID;
			}
		}
		var listcontent = '<li class="note">请选择登录类型</li>';
		listcontent += '<li id="sinaNote_MenuItem_Title_'+_rndID+'">' + username + '</li>';
		var itemLabel;
		for(var mykey in this.menuStatus) {
			if(this.menuStatus[mykey] == true) {
				if(InputStr == "") {
					itemLabel = username + "@" + mykey;
				}
				else {
					itemLabel = InputStr + "@" + mykey;
				}
				listcontent += '<li id="sinaNote_MenuItem_' + mykey + '_' + _rndID + '" title="' + itemLabel + '">' + itemLabel + '</li>';
			}
		}
		$E("sinaNote").innerHTML = listcontent;
		for (var i = 0; i < username.length; i ++) {
			if (username.charCodeAt(i) < 0xA0) {
				$E("sinaNote").style.display = "";
				this.selectList(e);
			}
			else {
				this.hideList();
			}
		}
		/**
		 * 自动适应文本框的位置，及宽度
		 * add by xs @ 2008-3-3
		 */
		var el = $E(e);
		var note = $E("sinaNote");
		/**
			Iframe在父窗体的位置
			@author FlashSoft | fangchao@staff.sina.com.cn
		*/
		var frameLeft = 0;
		var frameTop = 0;
		var framePos;
		if(_viewWindow != window) {
			framePos = getXY(window.frameElement);
			frameLeft = framePos[0];
			frameTop = framePos[1];
		}
		var inputWidth = el.offsetWidth;
		if(inputWidth < 200) {
			inputWidth = 200;
		}
		note.style.width = inputWidth - 2 + 'px';
		var inputXY = getXY(el);
		note.style.left = (inputXY[0] - ($IE ? 2 : -1) + frameLeft) + 'px';
		note.style.top = (inputXY[1] + el.offsetHeight - ($IE ? 2 : -1) + frameTop) + 'px';
	};
	passcardOBJ.selectList = function(e)//选择列表
	{
		var unames = $E("sinaNote").getElementsByTagName("li");
		for (var i = 1; i < unames.length; i++) {
				unames[1].style.backgroundColor = passcardOBJ.overbgcolor;
				unames[1].style.color = passcardOBJ.outfcolor;//鼠标经过字体颜色
				unames[i].onmousedown = function(){
					var temp = this.innerHTML;
					if(temp.indexOf("非新浪邮箱")>-1){
						var pos=temp.split("@");
						$E(e).value=pos[0];
					}else{
						$E(e).value = this.innerHTML;
					}
					if (getEvent() != null) {
						stopEvent();
					}
				};
				unames[i].onmouseover = function(){
					if (i != 1) {
							unames[1].style.backgroundColor = passcardOBJ.outbgcolor;
							unames[1].style.color = passcardOBJ.overfcolor;//鼠标经过字体颜色
					}
					this.style.backgroundColor = passcardOBJ.overbgcolor;//鼠标经过背景颜色
					this.style.color = passcardOBJ.outfcolor;//鼠标经过字体颜色
				};
				unames[i].onmouseout = function(){
					this.style.backgroundColor = passcardOBJ.outbgcolor;//鼠标离开背景颜色
					this.style.color = passcardOBJ.overfcolor;//鼠标离开字体颜色
					unames[1].style.backgroundColor = passcardOBJ.overbgcolor;//鼠标经过背景颜色
					unames[1].style.color = passcardOBJ.outfcolor;//鼠标经过字体颜色
				};
		}
	};
	/**
		选中指定ID的li
		@author | fangchao@staff.sina.com.cn
	*/
	passcardOBJ.selectLi = function (nIndex) {
		var menuNode;
		$E("sinaNote_MenuItem_Title_"+_rndID).style.backgroundColor = passcardOBJ.outbgcolor;//鼠标离开背景颜色
		$E("sinaNote_MenuItem_Title_"+_rndID).style.color = passcardOBJ.overfcolor;//鼠标离开字体颜色
		for(var i = 0; i < _showMenuItems.length; i ++ ) {
			menuNode = $E(_showMenuItems[i]);
			menuNode.style.backgroundColor = passcardOBJ.outbgcolor;//鼠标离开背景颜色
			menuNode.style.color = passcardOBJ.overfcolor;//鼠标离开字体颜色
		}
		$E(_showMenuItems[nIndex]).style.backgroundColor = passcardOBJ.overbgcolor;//鼠标经过背景颜色
		$E(_showMenuItems[nIndex]).style.color = passcardOBJ.outfcolor;//鼠标经过字体颜色
		_selectMenuText = $E(_showMenuItems[nIndex]).innerHTML;
	};
	passcardOBJ.hideList = function()//隐藏列表
	{
		/**
		 * 如果没有找到页面中相应的对象，则自动创建
		 * add by xs @ 2008-3-3
		 */
		if (!$E('sinaNote')) {passcardOBJ.createNode();}
		$E("sinaNote").style.display = "none";
	};
	passcardOBJ.init = function (oNode, oColors, oFocusNode, oWindowTarget) {
		oWindowTarget = oWindowTarget || window;
		if(oWindowTarget.document.body == null){
			setTimeout(function () {
				this.init(oNode, oColors, oFocusNode, oWindowTarget);
			}.bind3(this), 100);
		}
		for(var key in oColors) {
			this[key] = oColors[key];
		}
		addEvent2(document, passcardOBJ.hideList, "click");
		addEvent2(oNode, passcardOBJ.hideList, "blur");
		addEvent2(oNode, passcardOBJ.showList.bind3(this, [oNode]), "keyup");
		addEvent2(oNode, function (e) {
			var keyCodeNum = getEvent().keyCode;
			if(keyCodeNum == 13 || keyCodeNum == 9) {
				if(_selectMenuText != "") {
						var temp = _selectMenuText;
							if(temp.indexOf("非新浪邮箱") > -1){
								var pos = temp.split("@");
								oNode.value=pos[0];
							}else{
								oNode.value = _selectMenuText;
							}
				}
				if (oFocusNode != null) {oFocusNode.focus();}
				stopEvent();
			}
		}, "keydown");
		if (oWindowTarget) {_viewWindow = oWindowTarget;}
	};
	window.passcardOBJ = passcardOBJ;
})();