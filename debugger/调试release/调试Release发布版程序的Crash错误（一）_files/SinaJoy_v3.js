
function SinaDotAdJs1(){
var pthis = this;
this.isIE=navigator.userAgent.indexOf("MSIE")==-1?false:true;
this.isOPER=navigator.userAgent.indexOf("Opera")==-1?false:true;
this.version=navigator.appVersion.split(";"); 
this.trim_Version=this.version[1].replace(/[ ]/g,""); 
this.isIE6=(navigator.appName=="Microsoft Internet Explorer" && this.trim_Version=="MSIE6.0")?true:false;
this.isXHTML = document.compatMode=="CSS1Compat"?true:false;

this.bdy = (document.documentElement && document.documentElement.clientWidth)?document.documentElement:document.body;

this.$ = function(id){if(document.getElementById){return eval('document.getElementById("'+id+'")')}else{return eval('document.all.'+id)}};

this.addEvent = function(obj,event,func){
  var MSIE=navigator.userAgent.indexOf("MSIE");
  var OPER=navigator.userAgent.indexOf("Opera");
  if(document.all && MSIE!=-1 && OPER==-1){
    obj.attachEvent("on"+event,func);
  }else{
    obj.addEventListener(event,func,false);
  }
};


this.initWrap = function(mod,id,v,w,h,po,l,r,t,b,z,m,p,bg,dsp){
  var lst='';
  if(mod == 0x01){lst += 'pthis.'+v+' = document.createElement("'+id+'");';}
  else if(mod == 0x02){lst += 'pthis.'+v+' = document.getElementById("'+id+'");';}
  else return;
  if(v!="" && mod == 0x01){lst+=v+'.id = "'+v+'";';}
  if(w!=""){lst+=v+'.style.width = '+w+' + "px";';}
  if(h!=""){lst+=v+'.style.height = '+h+' + "px";';}
  if(po!=""){
	  lst+=v+'.style.position = "'+po+'";';

      if(l!=""){lst+=v+'.style.left = '+l+' + "px";';}
      else if(l=="" && r!=""){lst+=v+'.style.right = '+r+' + "px";';}
	  if(t!=""){lst+=v+'.style.top = '+t+' + "px";';}
      else if(t=="" && b!=""){lst+=v+'.style.bottom = '+b+' + "px";';}
	  if(z!=""){lst+=v+'.style.zIndex = "'+z+'";';}
  }
  if(bg!=""){lst+=v+'.style.background = "'+bg+'";';}
  if(m!=""){lst+=v+'.style.margin = "'+m+'";';}
  if(p!=""){lst+=v+'.style.padding = "'+p+'";';}
  if(dsp!=""){lst+=v+'.style.display = "'+dsp+'";';}
  return lst;
};


this.initObj = function(id,s,u,w,h){
  var lst = s.substring(s.length-3).toLowerCase();
  switch(lst){
	 case "tml":
	 case "htm":
	 case "php":var to = document.createElement("iframe");
                     to.id=id;
	                 to.width=w;
	                 to.height=h;
                     to.src=s;
                     to.frameBorder = 0;
					 to.allowTransparency = "true";
                     to.scrolling = "no";
                     to.marginheight = 0;
                     to.marginwidth = 0;
					 break;
	 case "swf": var to = document.createElement("div");
					 var fo = new sinaFlash( s, id, w, h, "7", "", false, "High");
	                 fo.addParam("wmode", "transparent");
	                 fo.addParam("allowScriptAccess", "always");
	                 fo.addParam("menu", "false");
	                 fo.write(to);
				     break;
     case "jpg":
     case "gif":
	 case "png":if(u!=""){
		             var to = document.createElement("a");
					 to.href = u;
					 to.target = "_blank";
					 var io = new Image();
	                 io.id = id;
					 io.style.width = w+"px";
					 io.style.height = h+"px";
					 io.style.border = "none";
					 io.src = s;
					 to.appendChild(io);
				}else{
				     var to = new Image();
	                 to.id = id;
					 to.style.width = w+"px";
					 to.style.height = h+"px";
					 to.style.border = "none";
					 to.style.cursor = "pointer";
					 to.src = s;	 
				}
				     break;
	     default:var to = document.createElement("a");
		             to.id = id;
					 to.href = u;
					 to.target = "_blank";
                     to.innerText = s;
  }
  return to;
};


};


function lyhnb(u){
  this.edata = {
    "u":"http://play.sina.com.cn/swf/gift.swf",
	"l":"",
	"w":320,
    "h":210
  };
  this.edata.u=u;

  var pthis = this;
  var o = new SinaDotAdJs1();
  
  this.timerSJ = null;
  this.timerSJ_pos = null;
  this.heightSJ = 0;
  this.topSJ = o.bdy.scrollTop+o.bdy.offsetHeight;

  this.showSJ = function(){
  	 pthis.timerSJ = setInterval(function(){
	   if(pthis.heightSJ<pthis.edata.h){
         pthis.heightSJ+=20;
		 pthis.SJmWrap.style.height = pthis.heightSJ + "px";
	   }else{
	     clearInterval(pthis.timerSJ);
		 pthis.SJmWrap.style.height = pthis.edata.h + 22 + "px";
	   }
	 },10); 
  };

  this.hideSJ = function(){
  	 pthis.timerSJ = setInterval(function(){
	   if(pthis.heightSJ>0){
         pthis.heightSJ-=20;
		 pthis.SJmWrap.style.height = pthis.heightSJ + "px";
	   }else{
	     clearInterval(pthis.timerSJ);
		 clearInterval(pthis.timerSJ_pos);
		 pthis.SJmWrap.style.height = 0;
	   }
	 },10);
  };

  this.initSJ = function(d){
      eval(o.initWrap(0x02,"sinaJoy","SJmWrap",d.w,0,"fixed","0","","","0","99","0","0","none","block"));
      pthis.SJmWrap = SJmWrap;
	  pthis.SJmWrap.style.height = pthis.heightSJ + "px";
	  pthis.SJmWrap.style.overflow = "hidden";
      if(o.isIE6 || !o.isXHTML){
	    pthis.SJmWrap.style.position = "absolute";
		pthis.SJmWrap.style.bottom = "";
		pthis.timerSJ_pos = setInterval(function(){
		  pthis.topSJ = o.bdy.scrollTop+o.bdy.offsetHeight - pthis.heightSJ;
		  pthis.SJmWrap.style.top = pthis.topSJ + "px";
		},10);
	  }
	  eval(o.initWrap(0x01,"div","SJcWrap",66,22,"absolute","","22","0","","2","0","0","url(http://d1.sina.com.cn/shh/demo/091216/cls_66x22.gif) no-repeat","block"));
	  pthis.SJcWrap = SJcWrap;
      pthis.SJcWrap.style.cursor = "pointer";
	  pthis.SJmWrap.appendChild(pthis.SJcWrap);
      o.addEvent(pthis.SJcWrap,"click",pthis.hideSJ);
      pthis.mObj = o.initObj("",d.u,d.l,d.w,d.h);
	  pthis.mObj.style.position = "absolute";
      pthis.mObj.style.top = 22 + "px";
      pthis.mObj.style.left = 0;
      pthis.mObj.style.zIndex = 1;
	  pthis.SJmWrap.appendChild(pthis.mObj);
	  pthis.showSJ();
  };
  pthis.initSJ(pthis.edata);
  
}


function popSinaJoy(){
	var e1=/[\/|.]t.sina.com.cn/;
	var r1=/[\/|.]news.sina.com.cn/;
	var r2=/[\/|.]video.sina.com.cn/;
	var r3=/[\/|.]v.sina.com.cn/;
	var r4=/[\/|.]music.sina.com.cn/;
	var r5=/[\/|.]travel.sina.com.cn/;
	var r6=/[\/|.]book.sina.com.cn/;

	var purl=document.location.href.toLowerCase();
	if (purl.match(e1)){return(0);}
	var cpop=_S_gUCk("_u_sinajoy_post");
	if(purl.match(r1)||purl.match(r2)||purl.match(r3)||purl.match(r4)||purl.match(r5)||purl.match(r6)){
		  ld=new Date();
		  if (""!=cpop)
		  { ld.setTime(cpop); }
		  nd = new Date();

		  if(""==cpop||nd.getDate()!=ld.getDate()||(nd.getDate()==ld.getDate()&&ld.getHours()<12&&nd.getHours()>=12)){
			_S_sUCk("_u_sinajoy_post",nd.getTime(),1);			
			lyhnb("http://play.sina.com.cn/swf/chinapost_lucky.swf");
			_S_uaTrack("sinajoy","chinapost");
		  }
	}else{
		var isBounce=_S_gUCk("_u_polld");
		if (isBounce!="1"){
			var userPoll=_S_gUCk("_u_poll");
			if(userPoll!=""){
				var arrUserPoll=userPoll.split(",");
				if (arrUserPoll.length==3){
					var cid = arrUserPoll[0];
					var bid = arrUserPoll[1];
					var srate = arrUserPoll[2];
					if (srate==""){srate=50;}
		
					var rnum = Math.random()*100;
					if ((rnum<srate) && (cid!="") && (bid!=""))	{
						_S_sUCk("_u_polld","1",1);
						lyhnb("http://play.sina.com.cn/swf/gift.swf")
						_S_uaTrack("sinajoy","gift");
					}
				}
			}else{
					var atp = _S_gUCk("_s_upa");
					atp%=1000;
					if (atp>=29){
						_S_sUCk("_u_poll","visitor,30,50",1);
						_S_sUCk("_u_polld","1",1);
						lyhnb("http://play.sina.com.cn/swf/gift.swf")
						_S_uaTrack("sinajoy","gift");
					}
			}
		}		
	}
}

document.write('<span id="sinaJoy"></span>');
