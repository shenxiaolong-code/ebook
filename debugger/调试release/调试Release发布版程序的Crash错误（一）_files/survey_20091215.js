function getAeSurveyCookie(name) {
  var search;
  search = name + "="
  offset = document.cookie.indexOf(search) 
  if (offset != -1) {
    offset += search.length ;
    end = document.cookie.indexOf(";", offset) ;
    if (end == -1)
      end = document.cookie.length;
    return document.cookie.substring(offset, end);
  }
  else
    return "";
}
function aesurvey(sid,sh,ratio,wd,hg)
{
	var pn_refer = document.location.toString().toLowerCase().replace('http://','');
	if(pn_refer.lastIndexOf('/')==pn_refer.length-1) pn_refer = pn_refer.substr(0, pn_refer.length-1);
	pn_refer = escape(pn_refer);
	var url = 'http://survey.client.sina.com.cn/survey.php?sid='+sid+'&pn_refer='+pn_refer;
	tag = "aesurvey"+sid;
	bsurvey = getAeSurveyCookie(tag);
	if (bsurvey=="Y" && sh=="0") return ;
	tag = "aesurveynum"+sid;
	aesurveynum = Math.round(getAeSurveyCookie(tag));	
	if (aesurveynum>=2) return ;
	pp= Math.round((Math.random()) * 100);
	if (pp>ratio && ratio>0) return ;
	window.open(url,'', 'menubar=no,status=no,toolbar=no,resizable=yes,width='+wd+',height='+hg+',scrollbars=no');
}

var sina_user_monitor_ckname="user_survey";
var sina_user_monitor_ckexpires=30;
var sina_user_monitor_samplerate=3;
var sina_user_monitor_popuprate=3;
var sina_user_monitor_topageurl="";
var sina_user_monitor_openckname="";
var survey_window_high=600;
var survey_window_width=500;
var sina_user_monitor_beanurl="http://beacon.sina.com.cn/e.gif";
var survey_ids = new Array();
survey_ids=[255];
function setSinaMonitorCookie(setValue)
{
	var ckValue=_S_gUCk(sina_user_monitor_ckname);
	if(ckValue!=""){
		ckValue=(parseInt(ckValue)+1)+"";
	}else{
		ckValue="1";
	}
	if(setValue!="" && setValue!="undefined" && setValue!=null){
		ckValue=setValue;
	}
	_S_sUCk(sina_user_monitor_ckname, ckValue, sina_user_monitor_ckexpires);
}

function isExistSinaMonitorCookie(ckName)
{
	if(_S_gUCk(ckName)==""){
		return false;
	}
	return true;
}
function isSinaMonitorSampled(rate)
{
	var sampleValue=Math.floor(Math.random()*1000);
	if(rate>sampleValue)
		return true;
	else
		return false;
}

function popupSinaMonitorPage()
{
	var r1=/[\/|.]t.sina.com.cn/;
	var purl=document.location.href.toLowerCase();
	if((survey_ids.length>0)&&(!purl.match(r1))){
		var rid = Math.floor(Math.random()*survey_ids.length);
		var ws=aesurvey(survey_ids[rid],0,100,survey_window_high,survey_window_width);
		putSinaMonitorBeanInfo(rid,ws);
	}
}

function putSinaMonitorBeanInfo(survey_id,ws)
{
	var putInfo="";
	var globalId=_S_gsGID();
	var uidStr=_S_gUCk(_S_UNA_);

	putInfo="Survey||"+globalId+"||"+uidStr+"||"+survey_id+"||"+ws+"||";
	_S_p2Bcn(putInfo,sina_user_monitor_beanurl);
}

function init_SinaMonitorJS(firstSampleRate,secondSampleRate,ckName,ckExpires,openCkName)
{
	var argsLen=arguments.length;
	if(argsLen>0){
		for(var i=0;i<argsLen;i++){
			switch (i)
			{
				case 0:
					sina_user_monitor_samplerate=arguments[i];
					break;
				case 1:
					sina_user_monitor_popuprate=arguments[i];
				case 2:
					sina_user_monitor_ckname=arguments[i];
					break;
				case 3:
					sina_user_monitor_ckexpires=arguments[i];
					break;
				case 4:
					sina_user_monitor_openckname=arguments[i];
					break;
			}
		}
	}
	try{
		var ckValue=_S_gUCk(sina_user_monitor_ckname);
		var ckQuest=_S_gUCk(sina_user_monitor_openckname);
		if(ckValue==""){
			if(isSinaMonitorSampled(sina_user_monitor_samplerate)){
				//第一轮抽中
				setSinaMonitorCookie("0");
				if(isSinaMonitorSampled(sina_user_monitor_popuprate)){
					//第二轮抽中
					setSinaMonitorCookie("1");
					popupSinaMonitorPage();
				}
			}else{
				//第一轮没有抽中
				setSinaMonitorCookie("-1");
			}
		}else{
		//参加过第一轮抽样
			if(ckValue!="-1"){
				//被第一轮抽中过并且没有被第二轮抽中
				if(ckValue=="0"){
					if(isSinaMonitorSampled(sina_user_monitor_popuprate)){
						//第二轮抽中
						setSinaMonitorCookie("1");
						popupSinaMonitorPage();
					}
				}
			}
		}
	}catch(e){}
}