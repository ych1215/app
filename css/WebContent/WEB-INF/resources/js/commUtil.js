/**
 * @class 공통 함수
 */
var commUtil = function()
{
};

// 로그인 화면 디버그 모드 활성화 코드(절대 변경 금지! 서버 코드 동기화시 필요)
commUtil.adminLogin_code = 11;

/**
 * 값이 비어있는지를 판별하기 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 4. 10.
 * @param _value
 * @returns {boolean}
 */
commUtil.isEmpty = function(_value)
{
    var retValue = false;
    if(_value == undefined || _value == '')
    {
        retValue = true;
    }
    
    return retValue;
};

/**
 * 두 값이 같은지를 비교하기 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 4. 10.
 * @param _key1
 * @param _key2
 * @returns {boolean}
 */
commUtil.isEqual = function(_key1, _key2)
{
    if(commUtil.isEmpty(_key1) || commUtil.isEmpty(_key2))
    {
        return false;
    }
    
    if(_key1 == _key2)
    {
        return true;
    }
    
    return false;
};

/**
 * 소스 문자열을 포함해 원하는 위치에 공백 또는 '0'을 자리수만큼 채운 문자열
 * 
 * @param strSrc
 *            소스 문자열을 포함해 원하는 위치에 공백 또는 '0'을 자리수만큼 채운 문자열
 * @param nSize
 *            총 자릿수
 * @param 대체문자
 * @param bLeft
 *            왼쪽에 위치할 것인지? (옵션 default : true )
 * @author 정재열
 * @returns {String}
 */
commUtil.packValue = function(strSrc, nSize, strReplace, bLeft)
{
    var retValue = "";
    var preValue = "";
    var postValue = "";
    var nLen = 0;
    var i = 0;
    
    if(bLeft == null)
    {
        bLeft = true;
    }
    
    if(strReplace == undefined)
    {
        strReplace = '0';
    }
    
    strSrc = "" + strSrc;
    nLen = strSrc.length;
    retValue = strSrc;
    
    for(i = nLen; i < nSize; i++)
    {
        if(bLeft)
        {
            preValue += strReplace;
        }
        else
        {
            postValue += strReplace;
        }
    }
    
    retValue = preValue + retValue + postValue;
    
    return retValue;
};

/**
 * 문자열에 포함된 포멧문자 ", . - / :"를 제거
 * 
 * @param strSrc
 *            소스 문자열
 * @returns
 * @author 정재열
 */
commUtil.removeFormat = function(strSrc)
{
    if(strSrc != undefined)
        return strSrc.replace(/(\,|\.|\-|\/|\:)/g, "");
    else
        return;
};

/**
 * 문자열에 포함된 ','를 제거
 * 
 * @param strSrc
 *            소스 문자열
 * @returns
 * @author 정재열
 */
commUtil.removeComma = function(strSrc)
{
    return strSrc.replace(/,/gi, "");
};

/**
 * 숫자이외 제거 type : NULL (+)정수타입 type : float 실수형태를 제공 type : dash (-) 허용
 * 
 * @author Toby Kim
 * @param val :
 *            String
 * @param type :
 *            적용형태
 * @returns val : 숫자이외 제거된 String
 * @since 2013-01-14
 */
commUtil.getOnlyNumber = function(val, type)
{
    if(commUtil.isEmpty(val))
    {
        return "";
    }
    
    switch(type)
    {
        case "float": // 실수 ex) -10.0001
            val = val.replace(/[^-\.0-9]/g, "");
            break;
        case "dash":
            val = val.replace(/[^0-9\-]/g, "");
            break;
        default: // 10000
            val = val.replace(/\D/g, "");
            break;
    }
    ;
    return val;
};

/**
 * 포멧 문자열 변환
 * 
 * @param strSrc
 *            변환하고자 하는 문자열
 * @param strFormat
 *            포멧 구분자 문자
 * @returns {String}
 */
commUtil.formatString = function(_strSrc, _strFormat)
{
    var retValue = "";
    var j = 0;
    
    var strSrc = _strSrc.replace(/(\$|\^|\*|\(|\)|\+|\.|\?|\\|\{|\}|\||\[|\]|\-|\/|\:)/g, "");
    
    for( var i = 0; i < strSrc.length; i++)
    {
        retValue += strSrc.charAt(i);
        j++;
        
        if((j < _strSrc.length && j < _strFormat.length) && (_strFormat.charAt(j) != "Y" && _strFormat.charAt(j) != "M" && _strFormat.charAt(j) != "D" && _strFormat.charAt(j) != "9" && _strFormat
                .charAt(j).toLowerCase() != "x" && _strFormat.charAt(j) != "#" && _strFormat.charAt(j) != "~"))
        {
            retValue += _strFormat.charAt(j++);
        }
    }
    return retValue;
};

/**
 * 문자열에 포함된 공백, 개행문자 제거
 * 
 * @param strTarget
 *            문자열에 포함된 공백, 개행문자를 제거하고자하는 문자열
 * @returns {String}
 * @author 정재열
 */
commUtil.removeWhiteSpace = function(_str)
{
    
    return _str.replace(/\s+/g, "");
};

/**
 * 글자수 체크
 * 
 * @author Toby Kim
 * @param _str :
 *            String
 * @returns {Number}
 * @since 2013-01-14
 */
commUtil.getStrLen = function(_str)
{
    var n = 0;
    for( var i = 0; i < _str.length; i++)
    {
        var c = _str.charAt(i);
        if(escape(c).length > 4)
        {
            n += 1;
        }
        else if(c == "\n")
        {
            if(_str.charAt(i - 1) != "\r")
                n += 1;
        }
        else if(c == "<" || c == ">")
        {
            n += 4;
        }
        else
        {
            n += 1;
        }
    }
    return n;
};

/**
 * 금액 문자열 반환하기
 */
commUtil.addComma = function(_val)
{
    var reg = /(^[+-]?\d+)(\d{3})/;
    _val += "";
    while(reg.test(_val))
    {
        _val = _val.replace(reg, "$1" + "," + "$2");
    }
    return _val;
};

commUtil.convertHTML = function(_src)
{
    _src = _src.replace(/\r\n/g, "<br/>").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
    
    return _src;
};

/**
 * 엘리먼트의 속성 값 변경을 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 4. 10.
 * @param _attrOption
 *            속성 옵션이 담긴 값
 */
commUtil.setAttribute = function(_attrOption)
{
    // object : 대상 오브젝트 (ex. $("#form").find("input"))
    // element : 대상 엘리먼트 Id(s)
    // type : 변경할 속성 타입
    // attr : 대상 엘리먼트의 속성
    // value : 대상 엘리먼트의 속성 값
    var sObject = _attrOption.object;
    var sElement = _attrOption.element;
    var sType = _attrOption.type;
    var sAttr = _attrOption.attr;
    var sValue = _attrOption.value;
    
    var __applyFunc = function(_element, _type, _attr, _value)
    {
        if(sType == "attr")
        {
            _element.attr(_attr, _value);
        }
        else if(sType == "removeAttr")
        {
            _element.removeAttr(_attr);
        }
        else if(sType == "prop")
        {
            _element.prop(_attr, _value);
        }
        else if(sType == "css")
        {
            _element.css(_attr, _value);
        }
        else if(sType == "addClass")
        {
            _element.addClass(_attr);
        }
        else if(sType == "removeClass")
        {
            _element.removeClass(_attr);
        }
    };
    
    if(!commUtil.isEmpty(sObject))
    {
        __applyFunc($(sObject), sType, sAttr, sValue);
    }
    
    if(sElement instanceof Array)
    {
        for(str in sElement)
        {
            __applyFunc($("#" + sElement[str]), sType, sAttr, sValue);
        }
    }
    else
    {
        __applyFunc($("#" + sElement), sType, sAttr, sValue);
    }
};

/**
 * Input 엘리먼트를 생성하기 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 4. 10.
 * @param _elOption
 */
commUtil.setInputElement = function(_elOption)
{
    // form : 엘리먼트를 생성할 폼 Id
    // type : 엘리먼트 Type (text, hidden, radio, checkbox, etc...)
    // id : 엘리먼트 Id
    // value : 엘리먼트 값
    var sForm = _elOption.form;
    var sType = _elOption.type;
    var sId = _elOption.id;
    var sValue = _elOption.value;
    
    var sObject = $("#" + sForm + " > #" + sId);
    
    if(sObject.length > 0)
    {
        $("#" + sForm + " > #" + sId).val(sValue);
    }
    else
    {
        $("#" + sForm).append("<input type=\"" + sType + "\" id=\"" + sId + "\" name=\"" + sId + "\" value=\"" + sValue + "\"/>");
    }
};

/**
 * Alert 메세지를 작성하기 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 4. 11.
 * @param _msg
 */
commUtil.alert = function(_msg)
{
    var title = _msg.title;
    var content = _msg.content;
    
    var msg = "";
    
    if(title instanceof Array)
    {
        for(str in title)
        {
            msg += "\n" + title[str] + " : " + content[str];
        }
    }
    else
    {
        msg = title + " : " + content;
    }
    
    alert(msg);
};

/**
 * 엘리먼트에 이벤트를 생성하는 함수
 * 
 * @author hwan lee
 * @since 2014.04.14.
 * @param _element
 *            대상 엘리먼트의 id(or class) 값
 * @param _event
 *            이벤트 유형(click, change, select, etc.)
 * @param _func
 *            실행할 함수
 */
commUtil.setEvent = function(_element, _event, _func)
{
    // console.log("[Set Event] %s > %s", _element, _event);
    
    $(_element).off(_event);
    $(_element).on(_event, _func);
};

/**
 * SELECT BOX를 생성하기 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 4. 25.
 * @param _selOption
 */
commUtil.setSelectElement = function(_selOption)
{
    var sTarget = _selOption.target;
    var sId = _selOption.id;
    var sClass = _selOption.clss;
    var sAttr = _selOption.attr;
    
    // 생성하고자 할 SELECT BOX의 존재여부를 판별하고, 존재하지 않는다면 생성
    if($("#" + sId).length < 1)
    {
        $(sTarget).append("<select id=\"" + sId + "\" name=\"" + sId + "\" class=\"" + sClass + "\" " + sAttr + "></select>");
    }
};

/**
 * SELECT BOX의 옵션을 정렬하기 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 5. 14.
 * @param _elementId
 * @param _order
 */
commUtil.sortSelectBox = function(_elementId, _order)
{
    if(_order == undefined)
    {
        _order = "asc";
    }
    
    var sort = $(_elementId + " option").sort(function(a, b)
    {
        if("asc" == _order.toLowerCase())
        {
            return $(a).val().toLowerCase() > $(b).val().toLowerCase() ? 1 : -1;
        }
        else
        {
            return $(a).val().toLowerCase() > $(b).val().toLowerCase() ? -1 : 1;
        }
    });
    
    $(_elementId).empty().append(sort);
};

/**
 * SELECT BOX의 옵션을 생성하기 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 4. 22.
 * @param _element
 *            대상 엘리먼트의 id 값
 * @param _object
 *            옵션 정보가 들어 있는 JSON 오브젝트
 * @param _select
 *            선택한 옵션 값
 */
commUtil.setSelectBox = function(_element, _object, _select, _reset)
{
    var element = $(_element);
    
    if(_reset == true)
    {
        element.children().remove();
        element.append("<option value=\"\">선택</option>");
    }
    
    var keys = new Array();
    var values = new Array();
    var sups = new Array();
    var subs = new Array();
    
    if(_object instanceof Array)
    {
        for( var i = 0; i < _object.length; i++)
        {
            for(key in _object[i])
            {
                if(key == "CD_NM")
                {
                    keys[i] = _object[i][key];
                }
                else if(key == "CD_VAL")
                {
                    values[i] = _object[i][key];
                }
                else if(key == "SUP_CD_ID")
                {
                    sups[i] = _object[i][key];
                }
                else if(key == "SUB_CD_ID")
                {
                    subs[i] = _object[i][key];
                }
            }
        }
    }
    else
    {
        for(key in _object)
        {
            if(key == "CD_NM")
            {
                keys.push(_object[key]);
            }
            else if(key == "CD_VAL")
            {
                values.push(_object[key]);
            }
            else if(key == "SUP_CD_ID")
            {
                sups.push(_object[key]);
            }
            else if(key == "SUB_CD_ID")
            {
                subs.push(_object[key]);
            }
        }
    }
    
    commUtil.insertOptions(_element, keys, values, sups, subs, _select);
};

/**
 * 다중 SELECT BOX 옵션을 생성하기 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 4. 25.
 * @param _element
 *            대상 엘리먼트의 id 값
 * @param _keys
 *            옵션의 text 값
 * @param _values
 *            옵션의 value 값
 * @param _sups
 *            옵션의 data-sup 값
 * @param _subs
 *            옵션의 data-sub 값
 * @param _select
 *            선택한 옵션 값
 */
commUtil.insertOptions = function(_element, _keys, _values, _sups, _subs, _select)
{
    var element = $(_element);
    var optHtml = "";
    
    for( var i = 0; i < _keys.length; i++)
    {
        optHtml += "<option value=\"" + _values[i] + "\"";
        if(!this.isEmpty(_sups[i]))
        {
            optHtml += " data-sup=\"" + _sups[i] + "\"";
        }
        if(!this.isEmpty(_subs[i]))
        {
            optHtml += " data-sub=\"" + _subs[i] + "\"";
        }
        optHtml += _values[i] == _select ? " selected=\"selected\"" : "";
        optHtml += ">" + _keys[i] + "</option>";
    }
    
    element.append(optHtml);
};

/**
 * 단일 SELECT BOX 옵션을 생성하기 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 4. 22.
 * @param _element
 *            대상 엘리먼트의 id 값
 * @param _key
 *            옵션의 text 값
 * @param _value
 *            옵션의 value 값
 * @param _select
 *            선택한 옵션 값
 */
commUtil.insertOption = function(_element, _key, _value, _select, _reset)
{
    var element = $(_element);
    
    if(_reset == true)
    {
        element.children().remove();
    }
    
    var optHtml = "<option";
    
    if(_value instanceof Object)
    {
        for(obj in _value)
        {
            optHtml += " " + obj + "=\"" + _value[obj] + "\"";
            optHtml += _value[obj] == _select ? " selected=\"selected\"" : "";
        }
    }
    else
    {
        optHtml += " value=\"" + _value + "\"";
        optHtml += _value == _select ? " selected=\"selected\"" : "";
    }
    
    optHtml += ">" + _key + "</option>";
    
    element.append(optHtml);
};

/**
 * 선택 영역에 엘리먼트를 생성하기 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 5. 23.
 * @param _element
 * @param _type
 * @param _key
 * @param _value
 * @param _select
 * @param _reset
 */
commUtil.insertElement = function(_element, _type, _key, _value, _select, _reset)
{
    var element = $(_element);
    
    if(_reset == true)
    {
        element.children().remove();
    }
    
    var optHtml = "<" + _type;
    
    if(_value instanceof Object)
    {
        for(obj in _value)
        {
            optHtml += " " + obj + "=\"" + _value[obj] + "\"";
            optHtml += _value[obj] == _select ? " class=\"on selected\"" : "";
        }
    }
    else
    {
        optHtml += " value=\"" + _value + "\"";
        optHtml += _value == _select ? " class=\"on selected\"" : "";
    }
    
    optHtml += "><span>" + _key + "</span></" + _type + ">";
    
    element.append(optHtml);
};

/**
 * 폼 데이터를 오브젝트로 생성하는 함수
 * 
 * @author 정재열
 * @since 2014. 4. 14.
 * @param _formId
 * @returns 해당 _formId에서 serializeArray한 Object
 */
commUtil.serializeArray = function(_formId)
{
    var formJson = $(_formId).serializeArray();
    var sndData = new Object();
    
    $.each(formJson, function(index, entry)
    {
        if(sndData[entry.name])
        {
            if(!$.isArray(sndData[entry.name]))
            {
                sndData[entry.name] = [sndData[entry.name]];
            }
            sndData[entry.name].push(entry.value);
        }
        else
        {
            if($('#' + entry.name).data('dtpicker') || $('#' + entry.name).data('formattype'))
            {
                sndData[entry.name] = commUtil.removeFormat(entry.value);
            }
            else
            {
                sndData[entry.name] = entry.value;
            }
        }
    });
    
    return sndData;
};

/**
 * 엘리먼트 객체를 오브젝트로 생성하는 함수
 * 
 * @author hwan lee
 * @since 2014. 4. 17.
 * @param _object
 * @returns 엘리먼트 Id(s) serializeArray한 Object
 */
commUtil.serializeObject = function(_object)
{
    var sndData = new Object();
    
    if(_object instanceof Array)
    {
        for(str in _object)
        {
            sndData[_object[str]] = $("#" + _object[str]).val();
        }
    }
    else
    {
        sndData[_object] = $("#" + _object).val();
    }
    
    return sndData;
};

/**
 * 2개의 hash object 병합하기
 * 
 * @author 정재열
 * @since 2014. 4. 14.
 * @param _sourceData
 *            소스 데이터
 * @param _targetData
 *            타켓 데이터
 * @returns _sourceData와 _targetData를 병합한 Object
 */
commUtil.mergeHashData = function(_sourceData, _targetData)
{
    var retValue = null;
    
    if(_sourceData instanceof Array)
    {
        retValue = new Array();
    }
    else if(_sourceData instanceof Object)
    {
        retValue = new Object();
    }
    else
    {
        retValue = new Object();
    }
    
    if(_sourceData != undefined)
    {
        for(key in _sourceData)
        {
            retValue[key] = _sourceData[key];
        }
    }
    
    if(_targetData != undefined)
    {
        for(key in _targetData)
        {
            if(retValue[key] != undefined && retValue[key] instanceof Object)
            {
                $.each(_targetData[key], function(_key, _value)
                {
                    retValue[key][_key] = _targetData[key][_key];
                });
            }
            else
            {
                retValue[key] = _targetData[key];
            }
        }
    }
    
    return retValue;
};

/**
 * 지정한 오브젝트에 속한 엘리먼트들의 권한이 없다(data-disabled="Y")면 해당 엘리먼트들과 연결된 모든 엘리먼트를 제거 하는
 * 함수
 * 
 * @author hwan lee
 * @since 2014. 4. 21.
 * @param _obj
 */
commUtil.removeNullObject = function(_obj)
{
    if(commUtil.isEmpty(_obj))
    {
        _obj = "body";
    }
    
    $(_obj).find("[data-disabled]").each(function()
    {
        var $that = $(this);
        var objId = $that.attr("id");
        
        $(_obj).find("[data-link='" + objId + "']").each(function()
        {
            $(this).remove();
        });
        
        $that.remove();
    });
};

/**
 * Confirm Message를 생성하여 선택 결과를 반환하기 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 4. 28.
 * @param _msg
 * @param _confirm
 * @param _cancel
 * @returns
 */
commUtil.confirmMsg = function(_msg, _confirm, _cancel)
{
    var __makeConfirm = function(_msg)
    {
        var popData = {};
        
        popData.width = "300";
        popData.height = "0";
        popData.backClose = "Y";
        
        var strHtml = "<div class=\"layer_pop_top\"><h3>확인</h3><span class=\"close\"><a></a></span></div>";
        strHtml += "<div class=\"layer_pop_inner\"><span id=\"CONFIRM_MSG\" class=\"innertxt\">" + _msg + "</span>";
        strHtml += "<div class=\"btn_wrap\">";
        strHtml += "<input type=\"button\" id=\"btn_pop_cancel\" name=\"btn_pop_cancel\" class=\"btn_big btn_gray btn_right\" value=\"취소\"/>&nbsp;";
        strHtml += "<input type=\"button\" id=\"btn_confirm_msg_popup\" name=\"btn_confirm_msg_popup\" class=\"btn_big btn_red btn_left\" value=\"확인\"/>";
        strHtml += "</div></div>";
        
        commUtil.makePopup("confirm_msg_popup", strHtml, popData);
        $("#btn_pop_cancel").focus();
        
        // 중앙 정렬
        $("#confirm_msg_popup #CONFIRM_MSG").css({
            "padding-top" : (($("#confirm_msg_popup .layer_pop_inner").height() - $("#confirm_msg_popup #CONFIRM_MSG").height()) / 2)
        });
    };
    
    var __click_btn_pop_cancel = function()
    {
        commUtil.removePopup("confirm_msg_popup");
        if(_cancel != undefined)
        {
            _cancel();
        }
    };
    
    var __click_btn_confirm_msg_popup = function()
    {
        commUtil.removePopup("confirm_msg_popup");
        _confirm();
    };
    
    __makeConfirm(_msg);
    
    // 이벤트 핸들러
    commUtil.setEvent("#btn_pop_cancel", "click", __click_btn_pop_cancel);
    commUtil.setEvent("#btn_confirm_msg_popup", "click", __click_btn_confirm_msg_popup);
};

/**
 * Alert Message를 생성하기 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 4. 15.
 * @param _msg
 *            화면에 표시할 메세지 내용
 * @param _close
 *            메세지 자동 사라짐 끄기(default:false)
 * @returns
 */
commUtil.timeout = 3000;
commUtil.alertMsg = function(_msg, _close)
{
    var pop_time = commUtil.timeout;
    if(!this.isEmpty(_msg))
    {
        pop_time = parseInt((_msg.length / 10) + 1) * 2000;
    }
    
    var init_login = function()
    {
        var _pageUtil = new pageUtil();
        var locOption = {};
        var popdataObj = {};
        
        popdataObj.width = "500"; // 팝업창 너비
        popdataObj.height = "0"; // 팝업창 높이
        popdataObj.backClose = "N"; // 바탕화면 클릭 닫기 허용여부
        
        locOption.url = "/com/com010/get_com010_initPwd.do";
        locOption.target = "popup_init_pwd";
        locOption.popup = "Y";
        locOption.popdata = popdataObj;
        _pageUtil.location(locOption);
    };
    
    var init_set_menu = function()
    {
        var _pageUtil = new pageUtil();
        var locOption = {};
        var popdataObj = {};
        
        popdataObj.width = "900"; // 팝업창 너비
        popdataObj.height = "0"; // 팝업창 높이
        popdataObj.backClose = "Y"; // 바탕화면 클릭 닫기 허용여부
        
        locOption.url = "/adm/adm010/adm0102100.do";
        locOption.target = "popup_init_pwd";
        locOption.popup = "Y";
        locOption.popdata = popdataObj;
        _pageUtil.location(locOption);
    };
    
    if(!commUtil.isEmpty(_msg))
    {
        // console.log("[Alert Message] %s", _msg);
        
        if(_msg == "INIT_LOGIN")
        {
            $("#leftmenu").hide();
            commUtil.alertMsg("최초 로그인입니다.<BR>비밀번호를 변경하여 주시기 바랍니다.");
            setTimeout(function()
            {
                init_login();
            }, 1500);
        }
        else if(_msg == "CHG_PWD")
        {
            $("#leftmenu").hide();
            commUtil.alertMsg("비밀번호가 만료되었습니다.<BR>비밀번호를 변경하여 주시기 바랍니다.");
            setTimeout(function()
            {
                init_login();
            }, 1500);
        }
        else if(_msg == "NO_MENU")
        {
            if(!g_INDEX.isMobile)
            {
                // init_set_menu();
            }
        }
        else
        {
            var popData = {};
            
            popData.width = "300";
            popData.height = "0";
            popData.backClose = "Y";
            
            var strHtml = "<div class=\"layer_pop_top\"><h3>알림</h3><span class=\"close\"><a></a></span></div>";
            strHtml += "<div class=\"layer_pop_inner\"><span id=\"ALERT_MSG\" class=\"innertxt\">" + _msg + "</span></div>";
            
            commUtil.makePopup("alert_msg_popup", strHtml, popData);
            
            // 중앙 정렬
            $("#alert_msg_popup #ALERT_MSG").css({
                "padding-top" : (($("#alert_msg_popup .layer_pop_inner").height() - $("#alert_msg_popup #ALERT_MSG").height()) / 2)
            });
            
            if(_close == undefined)
            {
                _close = false;
            }
            if(!_close)
            {
                setTimeout(function()
                {
                    commUtil.removePopup("alert_msg_popup", 100);
                }, pop_time);
            }
        }
    }
};

/**
 * 팝업창을 생성하기 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 4. 11.
 * @param _target
 * @param _str
 * @param _data
 * @returns
 */
commUtil.pop_class = "layer_pop";
commUtil.pop_mask = "mask_wrap";
commUtil.makePopup = function(_target, _str, _data)
{
    // 화면의 높이와 너비
    var doc_width = $(document).width();
    var doc_height = $(document).height();
    var win_width = $(window).width();
    var win_height = $(window).height();
    
    // 이미 동일한 창이 열려 있다면 제거
    var prevMask = $("#" + _target + "_mask");
    var prevPop = $("#" + _target);
    
    if(prevMask.length > 0)
    {
        prevMask.remove();
    }
    if(prevPop.length > 0)
    {
        prevPop.remove();
    }
    
    // ///////////////////////////////////////////////////////////////////////
    // 마스크 영역
    // ///////////////////////////////////////////////////////////////////////
    // 마스크 생성
    $("body").append("<div id=\"" + _target + "_mask\" class=\"mask_wrap\" data-order=\"" + ($(".mask_wrap").length) + "\"></div>");
    
    // 마스크의 CSS 속성 설정
    $("#" + _target + "_mask").css({
    "width" : doc_width,
    "height" : doc_height
    });
    
    $("#" + _target + "_mask").fadeIn(100);
    $("#" + _target + "_mask").fadeTo(100, 0.8);
    // ///////////////////////////////////////////////////////////////////////
    // 마스크 영역
    // ///////////////////////////////////////////////////////////////////////
    // ///////////////////////////////////////////////////////////////////////
    // 팝업창 영역
    // ///////////////////////////////////////////////////////////////////////
    var strHtml = "<div id=\"" + _target + "\" class=\"" + commUtil.pop_class + "\" data-order=\"" + ($("." + commUtil.pop_class).length) + "\">" + _str + "</div>";
    
    $("body").append(strHtml);
    
    var pop_width = doc_width;
    var pop_height = doc_height;
    var pop_back_close = "Y";
    
    if(!commUtil.isEmpty(_data))
    {
        if(_data instanceof Object)
        {
            for(key in _data)
            {
                if(key == "height")
                {
                    $("#" + _target).css("min-height", _data[key]);
                    pop_height = _data[key] == "0" ? $("#" + _target).height() : _data[key];
                }
                else
                {
                    $("#" + _target).css(key, _data[key]);
                    
                    if(key == "width")
                    {
                        pop_width = _data[key];
                    }
                    if(key = "backClose")
                    {
                        pop_back_close = _data[key];
                    }
                }
            }
        }
    }
    
    // 팝업창 CSS 속성 설정
    $("#" + _target).css({
    "position" : "fixed",
    "top" : (win_height - pop_height < 0 ? 0 : (win_height - pop_height) / 2),
    "left" : (win_width - pop_width < 0 ? 0 : (win_width - pop_width) / 2)
    });
    // ///////////////////////////////////////////////////////////////////////
    // 팝업창 영역
    // ///////////////////////////////////////////////////////////////////////
    
    // 팝업 추가 속성 설정
    commUtil.setPopupProperty();
    
    // 닫기 버튼 클릭 이벤트
    $("#" + _target + " .close").on("click", function(e)
    {
        e.preventDefault();
        commUtil.removePopup(_target);
    });
    
    // 바탕화면 클릭 이벤트
    if(pop_back_close == "Y")
    {
        $("#" + _target + "_mask").on("click", function()
        {
            $(this).hide();
            commUtil.removePopup(_target);
        });
    }
};

/**
 * 팝업창 속성을 설정하기 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 5. 16.
 * @param _cmd
 */
commUtil.setPopupProperty = function()
{
    var _maskDepth = 9000;
    var _mainDepth = 10000;
    var _opacity = 0.8;
    var popups = $(".layer_pop");
    
    if(popups.length > 1)
    {
        popups.each(function()
        {
            var id = $(this).attr("id");
            var order = parseInt($(this).data("order"));
            
            _maskDepth = _mainDepth + ((order + 1) * 10);
            _mainDepth = _maskDepth + ((order + 1) * 10);
            
            if(popups.length - 1 != order)
            {
                _opacity = 0;
            }
            else
            {
                _opacity = 0.8;
            }
            
            $("#" + id + "_mask").css({
            "z-index" : _maskDepth,
            "opacity" : _opacity
            });
            
            $("#" + id).css({
                "z-index" : _mainDepth
            });
        });
    }
    else
    {
        $(".mask_wrap").css({
        "z-index" : _maskDepth,
        "opacity" : _opacity
        });
        
        $("." + commUtil.pop_class).css({
            "z-index" : _mainDepth
        });
    }
};

/**
 * 팝업창을 제거하기 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 4. 11.
 * @param
 * @returns
 */
commUtil.removePopup = function(_target, _time, _callback)
{
    var mask = "";
    if(_target == undefined)
    {
        _target = "." + commUtil.pop_class;
        mask = "." + commUtil.pop_mask;
    }
    else
    {
        _target = "#" + _target;
        mask = _target + "_mask";
    }
    
    if(_time == undefined)
    {
        _time = 0;
    }
    
    setTimeout(function()
    {
        $(mask).fadeOut(100);
        $(_target).fadeOut(100);
        $(mask).remove();
        $(_target).remove();
        
        commUtil.setPopupProperty();
        
        if(_callback != undefined)
        {
            _callback();
        }
    }, _time);
};

/**
 * 데스크탑에서 좌측 메뉴에 대한 높이를 설정하기 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 5. 30.
 */
commUtil.resizeLeftMenu = function()
{
    var snb_top = $(".snb_top");
    
    if(snb_top.length > 0)
    {
        var snb_height = snb_top.height();
        var snb_top_ptop = parseInt(snb_top.css("padding-top").replace("px", ""));
        var list_area = $("#list_area").height();
        
        if(commUtil.isMobile() || commUtil.mobileMode)
        {
            $("#snb").height(snb_height + snb_top_ptop + list_area);
        }
        else
        {
            $("#snb").height(list_area);
        }
    }
};

/**
 * 모바일에서 좌측 메뉴를 생성하기 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 5. 27.
 * @param _elementId
 * @param _reset
 */
commUtil.makeLeftMenu = function()
{
    // 화면의 높이와 너비
    var doc_width = $(document).width();
    var win_height = $(window).height();
    
    // ////////////////////////////////////////////////////////////////////////////////////
    // 마스크 영역
    // ///////////////////////////////////////////////////////////////////////
    // 마스크의 CSS 속성 설정
    $("#snb_mask").css({
    "width" : doc_width,
    "height" : win_height
    });
    
    $("#snb_mask").fadeIn(100);
    $("#snb_mask").fadeTo(100, 0.8);
    // 마스크 영역
    // ///////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
    // 메뉴 영역
    // ///////////////////////////////////////////////////////////////////////
    // 메뉴 CSS 속성 설정
    
    var snb_top = $(".snb_top").height();
    
    $("#snb").css({
        "min-height" : win_height
    });
    
    $("#list_area").css({
        "height" : (win_height - snb_top)
    });
    
    $("#snb").fadeIn(100);
    $("#wrap").css("overflow", "hidden");
    // 메뉴 영역
    // ///////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////
};

/**
 * 모바일에서 좌측 메뉴를 제거하기 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 5. 27.
 */
commUtil.removeLeftMenu = function()
{
    $("#snb").fadeOut(100);
    $("#snb_mask").fadeOut(100);
    $("#wrap").css("overflow", "auto");
};

/**
 * 페이지 접근 URL 검사를 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 4. 11.
 * @param
 * @returns
 */
commUtil.mobileMode = false;
commUtil.testMode = false;
commUtil.urlValidation = function()
{
    var rUrl = (location.href).replace(/^(http?|https):\/\//gi, "");
    var sUrl = rUrl.split("/");
    var protocol = location.host.indexOf('localhost') != -1 ? "http://" : "https://";
    
    if(sUrl.length > 1 && !commUtil.isEmpty(sUrl[1]) && sUrl[1] != "?m" && sUrl[1] != "?t" && sUrl[1] != "popup")
    {
        $("body").empty();
        commUtil.alertMsg("잘못된 경로로 접근하여 다음 경로로 이동합니다.\n\nhttp://" + sUrl[0]);
        
        parent.location.replace(protocol + sUrl[0]);
    }
    
    // 모바일 모드
    if(sUrl[1] == "?m")
    {
        commUtil.mobileMode = true;
    }
    
    // 테스트 모드
    if(sUrl[1] == "?t")
    {
        commUtil.testMode = true;
    }
    else
    {
        commUtil.testMode = false;
    }
    
    commUtil.setInputLabel();
    commUtil.resizeHeight();
};

/**
 * Input에 입력되는 키 이벤트 처리를 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 7. 10.
 */
commUtil.inputKeyEvent = function()
{
    $("input").each(function()
    {
        $(this).on("keypress", function(event)
        {
            if(event.keyCode == 13)
            {
                return false;
            }
        });
    });
};

/**
 * 체크박스, 라디오박스에 대한 CSS 적용을 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 5. 20.
 */
commUtil.setInputLabel = function()
{
    var __click_input = function()
    {
        var that = $(this);
        var type = that.attr("type");
        var name = that.attr("name");
        
        // checked
        if(type == "radio")
        {
            $("input[type=" + type + "][name=" + name + "]").next().removeClass("check");
        }
        
        if(that.prop("checked"))
        {
            that.next().addClass("check");
        }
        else
        {
            that.next().removeClass("check");
        }
        
        // disabled
        if(that.prop("disabled"))
        {
            that.next().addClass("disabled");
        }
        else
        {
            that.next().removeClass("disabled");
        }
    };
    
    $(".checkbox input[type=checkbox], .radio input[type=radio]").each(__click_input);
    
    commUtil.setEvent(".checkbox input[type=checkbox], .radio input[type=radio]", "click", __click_input);
};

/**
 * 화면 크기 변경시 자동으로 CSS 속성을 설정하기 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 5. 22.
 */
commUtil.screenMode = "landscape";
$(window).resize(function()
{
    var doc_width = $(document).width();
    var doc_height = $(document).height();
    var win_width = $(window).width();
    var win_height = $(window).height();
    
    // 화면 모드 설정
    if(win_width > win_height)
    {
        // console.log("[Screen Mode] Landscape");
        
        commUtil.screenMode = "landscape";
    }
    else
    {
        // console.log("[Screen Mode] Portrait");
        
        commUtil.screenMode = "portrait";
    }
    
    // 모바일 메뉴 마스크의 CSS 속성 설정
    $("#snb_mask").css({
    "width" : doc_width,
    "height" : win_height
    });
    
    // 마스크의 CSS 속성 설정
    $(".mask_wrap").css({
    "width" : doc_width,
    "height" : doc_height
    });
    
    // 팝업창 CSS 속성 설정
    $(".layer_pop").each(function()
    {
        var pop_width = $(this).width();
        var pop_height = $(this).height();
        
        $(this).css({
        "position" : "fixed",
        "top" : (win_height - pop_height < 0 ? 0 : (win_height - pop_height) / 2),
        "left" : (win_width - pop_width < 0 ? 0 : (win_width - pop_width) / 2)
        });
    });
    
    // 화면 높이 설정
    commUtil.resizeHeight();
    commUtil.resizeLeftMenu();
    
    // Ajax 로딩 이미지 설정
    commUtil.ajaxIndicator();
});

/**
 * 화면의 높이를 자동 조절하기 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 4. 28.
 */
commUtil.resizeHeight = function(_top)
{
    var win_height = $(window).height();
    
    if(commUtil.isMobile() || commUtil.mobileMode)
    {
        // 좌측 메뉴 영역
        $("#snb").css("min-height", win_height);
        
        var snb_top = $(".snb_top");
        if(snb_top.length > 0)
        {
            var snb_top_height = snb_top.height();
            if(snb_top_height < 60)
            {
                snb_top_height = 60;
            }
            
            $("#list_area").css("height", (win_height - snb_top_height));
        }
        
        // Contents 영역
        var container = $("#container");
        if(container.length > 0)
        {
            $("#contents").css("min-height", "0");
            
            var container_ptop = parseInt(container.css("padding-top").replace("px", ""));
            if(container_ptop == 0)
            {
                container_ptop = 68;
            }
            var container_pbottom = parseInt(container.css("padding-bottom").replace("px", ""));
            if(container_pbottom == 0)
            {
                container_pbottom = 20;
            }
            var footer_height = $("#footer_wrap").height();
            var contents_height = $("#contents").height();
            var re_contents_height = win_height - (container_ptop + container_pbottom + footer_height + 50);
            if(re_contents_height > contents_height)
            {
                $("#contents").css("min-height", re_contents_height);
            }
        }
    }
    else
    {
        var contents = $("#contents");
        if(contents.length > 0)
        {
            $("#contents").css("min-height", "0");
            
            var header_height = $("#header").height();
            var footer_height = $("#footer_wrap").height();
            var contents_height = $("#contents").height();
            var contents_ptop = parseInt(contents.css("padding-top").replace("px", ""));
            var contents_pbottom = parseInt(contents.css("padding-bottom").replace("px", ""));
            var re_contents_height = win_height - (header_height + footer_height + contents_ptop + contents_pbottom);
            
            if(re_contents_height > contents_height)
            {
                $("#contents").css("min-height", re_contents_height);
            }
            
            contents_height = contents.height();
            
            // 좌측 메뉴 영역
            $("#snb").css("min-height", (contents_height + contents_ptop + contents_pbottom));
        }
    }
    
    if(_top == undefined)
    {
        $("body, #wrap").animate({
            scrollTop : "1px"
        }, 0);
    }
};

/**
 * 브라우저 종류를 체크하는 함수
 * 
 * @author hwan lee
 * @since 2014. 4. 24.
 * @returns {String}
 */
commUtil.checkBrowserType = function()
{
    var agt = navigator.userAgent.toLowerCase();
    
    if(agt.indexOf("chrome") != -1)
    {
        return "Chrome";
    }
    
    if(agt.indexOf("opera") != -1)
    {
        return "Opera";
    }
    
    if(agt.indexOf("safari") != -1)
    {
        return "Safari";
    }
    
    if(agt.indexOf("firefox") != -1)
    {
        return "Firefox";
    }
    
    if(agt.indexOf("msie") != -1)
    {
        return "Internet Explorer";
    }
    
    if(agt.indexOf("mozilla/5.0") != -1)
    {
        return "Mozilla";
    }
};

commUtil.checkMobileType = function()
{
    var agt = navigator.userAgent.toLowerCase();
    var plf = navigator.platform.toLowerCase();
    var ret = "";
    
    if(/ipad/i.test(plf))
    {
        ret = "ipad";
    }
    else if(/iphone/i.test(plf))
    {
        ret = "iphone";
    }
    else if(/linux armv7/i.test(plf))
    {
        ret = "android";
    }
    
    if(/iphone/i.test(agt))
    {
        ret = "iphone";
    }
    else if(/ipad/i.test(agt))
    {
        ret = "ipad";
    }
    else if(/android/i.test(agt))
    {
        ret = "android";
    }
    
    return ret;
};

commUtil.isMobile = function(_cmd)
{
    var filter = "win16|win32|win64|mac";
    var pf = navigator.platform.toLowerCase();
    
    if(_cmd == "web")
    {
        filter = "win16|win32|win64|mac";
    }
    else if(_cmd == "mobile")
    {
        filter = "|";
    }
    else
    {
        filter = "win16|win32|win64|mac";
    }
    
    if(pf)
    {
        if(filter.indexOf(pf) < 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    
    return false;
};

commUtil.rowSpan = function()
{
    var tableElt = document.querySelector(".list_table_type01");
    var cntArg = arguments.length;
    var rows = tableElt.getElementsByTagName("tr");
    var cntRows = rows.length;
    var arrPrevious = new Array(cntArg);
    var arrCompare = new Array(cntArg);
    var arrPreCol = new Array(cntArg);
    var arrCurCol = new Array(cntArg);
    var arrColumnNo = new Array(cntArg);
    
    for( var idx = 0; idx < cntArg; idx++)
    {
        arrPrevious[idx] = -1;
        arrColumnNo[idx] = arguments[idx];
    }
    
    for( var i = 1; i < cntRows; i++)
    {
        for( var cols = 0; cols < cntArg; cols++)
        {
            arrCompare[cols] = (arrPrevious[cols] < 0) ? (i - 1) : arrPrevious[cols];
            arrPreCol[cols] = rows[arrCompare[cols]].getElementsByTagName("td")[arrColumnNo[cols]];
            arrCurCol[cols] = rows[i].getElementsByTagName("td")[arrColumnNo[cols]];
            
            if((arrPreCol[cols] != undefined && arrCurCol[cols] != undefined) && (arrPreCol[cols].innerHTML == arrCurCol[cols].innerHTML) && (arrPreCol[cols].style.display != 'none'))
            {
                arrPreCol[cols].rowSpan = arrPreCol[cols].rowSpan + 1;
                arrCurCol[cols].style.display = 'none';
                arrPrevious[cols] = arrCompare[cols];
            }
            else
            {
                arrPrevious[cols] = -1;
            }
        }
    }
};

/**
 * Ajax 로딩 이미지 설정에 대한 함수
 * 
 * @author hwan lee
 * @since 2014. 5. 29.
 * @param _mode
 */
commUtil.ajaxIndicator = function(_mode)
{
    if(_mode == "show")
    {
        var win_width = $(window).width();
        var win_height = $(window).height();
        var doc_height = $(document).height();
        var pos_x = (win_width - 32) / 2;
        var pos_y = (win_height - 32) / 2;
        
        $("#ajax_indicator").css({
        "width" : win_width,
        "height" : doc_height,
        "background-position" : pos_x + "px " + pos_y + "px"
        });
        
        $("#ajax_indicator").show().fadeIn("fast");
    }
    else
    {
        $("#ajax_indicator").fadeOut();
    }
};

commUtil.serverTime = function(_options)
{
    var _pageUtil = new pageUtil();
    var locOption = {};
    
    locOption.url = "/com/com010/get_com010_date.do";
    locOption.ret = "Y";
    if(_options != undefined)
    {
        locOption.data = _options;
    }
    locOption.indicator = "N";
    var result = JSON.parse(_pageUtil.location(locOption));
    
    if(result.DATA.SCR_LEVEL != undefined)
    {
        // console.log("[LEVEL] %s", result.DATA.SCR_LEVEL);
        
        if(result.DATA.SCR_LEVEL == "DISABLE")
        {
            if(g_INDEX.interval != null)
            {
                window.clearInterval(g_INDEX.interval);
            }
            
            var _pageUtil = new pageUtil();
            var locOption = {};
            var dataObj = {};
            
            dataObj.MSG_ID = "LOG00012";
            
            locOption.url = "/com/com010/get_com010_logout.do";
            locOption.target = "wrap";
            locOption.data = dataObj;
            locOption.ret = "Y";
            _pageUtil.location(locOption);
        }
    }
    
    return result;
};

commUtil.noticeMessage = function(_mode, _msg)
{
    var message_wrap = $("#message_wrap");
    
    if(_mode.toUpperCase() == "ON")
    {
        if(!message_wrap.hasClass("on"))
        {
            message_wrap.addClass("on");
            
            message_wrap.html(_msg);
            
            message_wrap.css({
            "top" : ($(window).height() + message_wrap.height()),
            "opacity" : "0.7"
            });
            
            message_wrap.animate({
                "top" : ($(window).height() - message_wrap.height())
            }, 1000);
        }
        else
        {
            commUtil.noticeMessage("off");
        }
    }
    else
    {
        message_wrap.animate({
            "top" : ($(window).height() + message_wrap.height())
        }, 1000, function()
        {
            message_wrap.css({
                "opacity" : "0"
            });
            
            message_wrap.empty();
            
            message_wrap.removeClass("on");
        });
    }
};

commUtil.isBank = function(_bnkCd, _value)
{
    var jsonData = {
    "039" : {
        "12_1" : {
        "SUBJECT" : "07,09,21,22,03,01,35,20,32,",
        "FORMAT" : "###-##-#######",
        "SUBSTR" : "3,5"
        }
    },
    "037" : {
        "12_1" : {
        "SUBJECT" : "02,13,15,21,22,35,37,03,12,01,11,23,36,",
        "FORMAT" : "###-##-#######",
        "SUBSTR" : "3,5"
        }
    },
    "055" : {
        "10_1" : {
        "SUBJECT" : ",",
        "FORMAT" : "##########",
        "SUBSTR" : ""
        }
    },
    "035" : {
        "10_1" : {
        "SUBJECT" : "01,02,03,04,05,13,",
        "FORMAT" : "##-##-#######",
        "SUBSTR" : "3,5"
        }
    },
    "034" : {
    "12_2" : {
    "SUBJECT" : "731,",
    "FORMAT" : "###-###-######",
    "SUBSTR" : "0,3"
    },
    "12_1" : {
    "SUBJECT" : "107,108,109,121,123,124,122,103,101,127,",
    "FORMAT" : "###-##-######-#",
    "SUBSTR" : "0,3"
    }
    },
    "011" : {
    "12_1" : {
    "SUBJECT" : "01,02,12,06,05,17,04,10,14,21,24,34,45,47,49,59,80,28,31,43,46,79,81,86,87,88,",
    "FORMAT" : "####-##-#####-#",
    "SUBSTR" : "4,6"
    },
    "13_1" : {
    "SUBJECT" : "301,302,312,306,305,317,304,310,314,321,324,334,345,347,349,359,380,",
    "FORMAT" : "###-####-####-#-#",
    "SUBSTR" : "0,3"
    },
    "14_2" : {
    "SUBJECT" : "790,791,",
    "FORMAT" : "###-####-####-##-#",
    "SUBSTR" : "0,3"
    },
    "11_1" : {
    "SUBJECT" : "01,02,12,06,05,17,04,10,14,21,24,34,45,47,49,59,80,28,31,43,46,79,81,86,87,88,",
    "FORMAT" : "###-##-#####-#",
    "SUBSTR" : "3,5"
    },
    "14_1" : {
    "SUBJECT" : "64,65,",
    "FORMAT" : "######-##-#####-#",
    "SUBSTR" : "6,8"
    }
    },
    "218" : {
    "09_2" : {
    "SUBJECT" : ",",
    "FORMAT" : "###-###-###",
    "SUBSTR" : ""
    },
    "11_1" : {
    "SUBJECT" : "01,06,07,10,11,12,16,30,40,45,50,55,61,62,63,64,65,66,67,68,69,",
    "FORMAT" : "###-##-######",
    "SUBSTR" : "3,5"
    },
    "11_2" : {
    "SUBJECT" : ",",
    "FORMAT" : "###-##-######",
    "SUBSTR" : ""
    }
    },
    "012" : {
    "13_1" : {
    "SUBJECT" : "351,352,356,355,354,360,384,394,398,028,",
    "FORMAT" : "###-####-####-#-#",
    "SUBSTR" : "0,3"
    },
    "14_2" : {
    "SUBJECT" : "66,67,",
    "FORMAT" : "######-##-#####-#",
    "SUBSTR" : "6,8"
    },
    "14_3" : {
    "SUBJECT" : "792,",
    "FORMAT" : "###-####-####-##-#",
    "SUBSTR" : "0,3"
    },
    "14_1" : {
    "SUBJECT" : "51,52,56,55,",
    "FORMAT" : "######-##-#####-#",
    "SUBSTR" : "6,8"
    }
    },
    "031" : {
    "12_2" : {
    "SUBJECT" : "505,508,502,501,504,",
    "FORMAT" : "###-##-######-#",
    "SUBSTR" : "0,3"
    },
    "12_1" : {
    "SUBJECT" : "05,07,08,02,01,04,",
    "FORMAT" : "###-##-######-#",
    "SUBSTR" : "3,5"
    },
    "11_1" : {
    "SUBJECT" : "05,10,07,08,02,01,04,12,06,13,14,",
    "FORMAT" : "###-##-######",
    "SUBSTR" : "3,5"
    },
    "14_1" : {
    "SUBJECT" : "05,06,07,08,02,01,04,",
    "FORMAT" : "###-##-######-###",
    "SUBSTR" : "3,5"
    }
    },
    "032" : {
    "12_1" : {
    "SUBJECT" : "01,02,12,03,09,13,",
    "FORMAT" : "###-##-######-#",
    "SUBSTR" : "3,5"
    },
    "13_1" : {
    "SUBJECT" : "101,102,112,103,109,113,",
    "FORMAT" : "###-####-####-##",
    "SUBSTR" : "0,3"
    }
    },
    "050" : {
        "14_1" : {
        "SUBJECT" : "13,21,22,23,",
        "FORMAT" : "###-##-##-######",
        "SUBSTR" : "3,5"
        }
    },
    "053" : {
        "10_1" : {
        "SUBJECT" : "20,21,32,34,36,37,38,42,46,70,71,73,74,75,76,77,78,80,81,83,84,85,86,87,88,91,92,93,94,95,96,99,30,33,35,41,43,44,45,50,51,52,53,54,55,56,57,58,63,64,60,61,62,63,64,65,66,67,68,69,00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,59,40,48,",
        "FORMAT" : "##-##-######-#",
        "SUBSTR" : "2,4"
        }
    },
    "054" : {
        "14_1" : {
        "SUBJECT" : "021,030,296,297,711,712,900,901,902,985,986,987,988,989,990,991,992,993,994,066,067,068,069,072,073,083,221,222,223,306,307,407,461,462,463,464,465,702,703,863,001,002,003,004,005,006,007,008,009,010,076,077,078,079,086,087,088,089,",
        "FORMAT" : "###-#####-#-###",
        "SUBSTR" : "3,5"
        }
    },
    "048" : {
    "12_1" : {
    "SUBJECT" : "110,131,132,134,731,137,177,133,136,135,170,171,172,173,174,178,910,",
    "FORMAT" : "###-###-#####-#",
    "SUBSTR" : "0,3"
    },
    "13_1" : {
    "SUBJECT" : "12,13,",
    "FORMAT" : "#####-##-#####-#",
    "SUBSTR" : "5,7"
    },
    "11_1" : {
    "SUBJECT" : ",",
    "FORMAT" : "###-####-####",
    "SUBSTR" : ""
    },
    "10_1" : {
    "SUBJECT" : ",",
    "FORMAT" : "###-###-####",
    "SUBSTR" : ""
    },
    "14_1" : {
    "SUBJECT" : "14,",
    "FORMAT" : "#####-##-######-#",
    "SUBSTR" : "5,7"
    }
    },
    "084" : {
    "12_1" : {
    "SUBJECT" : "01,21,24,05,04,25,09,",
    "FORMAT" : "###-##-######-#",
    "SUBSTR" : "3,5"
    },
    "13_1" : {
    "SUBJECT" : "006,007,002,004,003,005",
    "FORMAT" : "####-###-######",
    "SUBSTR" : "4,7"
    },
    "14_2" : {
    "SUBJECT" : "01,15,02,12,04,03,13,",
    "FORMAT" : "###-######-##-##-#",
    "SUBSTR" : "9,11"
    },
    "11_1" : {
    "SUBJECT" : "05,06,07,08,02,01,04,",
    "FORMAT" : "###-##-#####-#",
    "SUBSTR" : "3,5"
    },
    "14_1" : {
    "SUBJECT" : "18,92,",
    "FORMAT" : "###-######-##-##-#",
    "SUBSTR" : "10,12"
    }
    },
    "045" : {
    "13_1" : {
    "SUBJECT" : "09,10,13,37,",
    "FORMAT" : "####-##-######-#",
    "SUBSTR" : "4,6"
    },
    "13_2" : {
    "SUBJECT" : "9002,9003,9004,9072,9090,9091,9092,9093,9005,9200,9202,9205,9207,9208,9209,9210,9212,",
    "FORMAT" : "####-########-#",
    "SUBSTR" : "0,4"
    },
    "14_1" : {
    "SUBJECT" : "801,802,803,804,805,806,807,808,809,810,851,852,853,854,855,856,857,858,859,860,",
    "FORMAT" : "####-###-######-#",
    "SUBSTR" : "4,7"
    }
    },
    "081" : {
        "14_1" : {
        "SUBJECT" : "05,07,08,02,01,04,94,",
        "FORMAT" : "###-#########-##",
        "SUBSTR" : "12,14"
        }
    },
    "004" : {
    "12_1" : {
    "SUBJECT" : "01,21,24,05,04,25,26,",
    "FORMAT" : "###-##-####-###",
    "SUBSTR" : "3,5"
    },
    "11_1" : {
    "SUBJECT" : "9,",
    "FORMAT" : "###########",
    "SUBSTR" : "0,1"
    },
    "14_1" : {
    "SUBJECT" : "92,",
    "FORMAT" : "####-##-#######-#",
    "SUBSTR" : "4,6"
    }
    },
    "023" : {
    "12_1" : {
    "SUBJECT" : "25,41,24,18,",
    "FORMAT" : "#-######-#-##-##",
    "SUBSTR" : "9,11"
    },
    "13_1" : {
    "SUBJECT" : "01,11,21,25,31,42,51,71,81,23,05,06,15,26,29,07,27,55,03,13,33,41,43,53,63,24,99,91,92,",
    "FORMAT" : "###-#####-##-#-##",
    "SUBSTR" : "8,10"
    },
    "10_1" : {
    "SUBJECT" : "5,",
    "FORMAT" : "#-######-##-#",
    "SUBSTR" : "0,1"
    },
    "11_1" : {
    "SUBJECT" : "01,11,21,25,31,42,51,71,81,23,05,06,15,26,29,07,27,55,03,13,33,41,43,53,63,24,99,91,92,",
    "FORMAT" : "###-#####-##-#",
    "SUBSTR" : "8,10"
    }
    },
    "005" : {
    "12_1" : {
    "SUBJECT" : "610,611,620,600,601,630,621,631,",
    "FORMAT" : "###-######-###",
    "SUBSTR" : "0,3"
    },
    "11_1" : {
    "SUBJECT" : "13,33,18,38,19,39,26,11,22,",
    "FORMAT" : "###-##-#####-#",
    "SUBSTR" : "3,5"
    }
    },
    "006" : {
    "12_1" : {
    "SUBJECT" : "06,18,",
    "FORMAT" : "######-##-####",
    "SUBSTR" : "6,8"
    },
    "14_1" : {
    "SUBJECT" : "01,02,25,37,90,",
    "FORMAT" : "####-##-#######-#",
    "SUBSTR" : "4,6"
    }
    },
    "007" : {
    "12_2" : {
    "SUBJECT" : "0,",
    "FORMAT" : "#-###########",
    "SUBSTR" : "0,1"
    },
    "12_1" : {
    "SUBJECT" : "101,201,102,202,209,103,208,106,108,113,114,206,",
    "FORMAT" : "###-########-#",
    "SUBSTR" : "0,3"
    },
    "11_1" : {
    "SUBJECT" : "01,02,06,08,03,13,61,62,63,67,",
    "FORMAT" : "###-##-#####-#",
    "SUBSTR" : "3,5"
    },
    "14_1" : {
    "SUBJECT" : ",",
    "FORMAT" : "###-##-########-#",
    "SUBSTR" : ""
    }
    },
    "002" : {
    "14_2" : {
    "SUBJECT" : "010,",
    "FORMAT" : "###-########-###",
    "SUBSTR" : "0,3"
    },
    "11_1" : {
    "SUBJECT" : "13,20,19,11,22,",
    "FORMAT" : "###-##-#####-#",
    "SUBSTR" : "3,5"
    },
    "14_1" : {
    "SUBJECT" : "013,202,019,011,022,",
    "FORMAT" : "###-#######-#-###",
    "SUBSTR" : "0,3"
    }
    },
    "209" : {
    "12_1" : {
    "SUBJECT" : ",",
    "FORMAT" : "####-####-######",
    "SUBSTR" : ""
    },
    "11_1" : {
    "SUBJECT" : "01,06,53,71,76,",
    "FORMAT" : "###-##-######",
    "SUBSTR" : "3,5"
    }
    },
    "003" : {
    "12_1" : {
    "SUBJECT" : "01,02,03,13,07,06,04,",
    "FORMAT" : "###-##-####-###",
    "SUBSTR" : "3,5"
    },
    "11_1" : {
    "SUBJECT" : ",",
    "FORMAT" : "###-########",
    "SUBSTR" : ""
    },
    "10_1" : {
    "SUBJECT" : ",",
    "FORMAT" : "########-##",
    "SUBSTR" : ""
    },
    "14_1" : {
    "SUBJECT" : "01,02,03,13,07,06,04,",
    "FORMAT" : "###-######-##-##-#",
    "SUBSTR" : "9,11"
    }
    },
    "021" : {
    "13_1" : {
    "SUBJECT" : "81,",
    "FORMAT" : "###-##-#######-#",
    "SUBSTR" : "3,5"
    },
    "13_2" : {
    "SUBJECT" : "82,",
    "FORMAT" : "###-##-########",
    "SUBSTR" : "3,5"
    },
    "11_1" : {
    "SUBJECT" : "01,09,61,04,05,06,08,02,07,03,07,",
    "FORMAT" : "###-##-#####-#",
    "SUBSTR" : "3,5"
    }
    },
    "020" : {
    "12_1" : {
    "SUBJECT" : "01,21,24,05,04,25,09,",
    "FORMAT" : "###-##-######-#",
    "SUBSTR" : "3,5"
    },
    "13_1" : {
    "SUBJECT" : "006,007,002,004,003,005",
    "FORMAT" : "####-###-######",
    "SUBSTR" : "4,7"
    },
    "14_2" : {
    "SUBJECT" : "01,15,02,12,04,03,13,",
    "FORMAT" : "###-######-##-##-#",
    "SUBSTR" : "9,11"
    },
    "11_1" : {
    "SUBJECT" : "05,06,07,08,02,01,04,",
    "FORMAT" : "###-##-#####-#",
    "SUBSTR" : "3,5"
    },
    "14_1" : {
    "SUBJECT" : "18,92,",
    "FORMAT" : "###-######-##-##-#",
    "SUBSTR" : "10,12"
    }
    },
    "060" : {
    "12_1" : {
    "SUBJECT" : ",",
    "FORMAT" : "####-#####-##-#",
    "SUBSTR" : ""
    },
    "14_1" : {
    "SUBJECT" : ",",
    "FORMAT" : "####-##########",
    "SUBSTR" : ""
    }
    },
    "088" : {
    "12_1" : {
    "SUBJECT" : "100,101,102,103,104,105,106,107,108,109,160,161,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,155,156,157,158,159,150,151,153,154,140,141,142,143,144,145,146,147,148,149,",
    "FORMAT" : "###-########-#",
    "SUBSTR" : "0,3"
    },
    "14_1" : {
    "SUBJECT" : "560,561,562,",
    "FORMAT" : "###-###-#######-#",
    "SUBSTR" : "0,3"
    }
    },
    "064" : {
        "14_1" : {
        "SUBJECT" : "01,03,02,52,06,05,",
        "FORMAT" : "######-##-######",
        "SUBSTR" : "6,8"
        }
    }
    };
    var flag = false;
    
    if(jsonData[_bnkCd] == undefined)
        return;
    
    $.each(jsonData[_bnkCd], function(bnkType, idx)
    {
        var sLen = stringUtil.LPad(_value.length + '', 2, '0');
        
        if(bnkType.substring(0, 2) == sLen)
        {
            var subStr = jsonData[_bnkCd][bnkType].SUBSTR;
            var format = jsonData[_bnkCd][bnkType].FORMAT;
            var subject = jsonData[_bnkCd][bnkType].SUBJECT;
            if(subStr == ",")
            {
                flag = false;
                return commUtil.formatString(_value, format);
            }
            else
            {
                var arrSubStr = subStr.split(",");
                var srcSubject = _value.substring(arrSubStr[0], arrSubStr[1]);
                if(subject.indexOf(srcSubject + ",") != -1)
                {
                    flag = false;
                    return commUtil.formatString(_value, format);
                }
                else
                {
                    flag = true;
                }
            }
        }
        if(flag)
            commUtil.alertMsg("계정과목이 존재하지 않습니다.");
    });
};

/**
 * 주민번호/사업자번호 유효성을 체크하기 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 6. 11.
 * @param _type
 * @param _ssn
 * @param _nowDate
 * @returns {Boolean}
 */
commUtil.checkSSN = function(_type, _ssn, _nowDate)
{
    _ssn = _ssn.replace(/[\-|\/]/g, "");
    
    var sum = 0;
    
    if(_type == "jumin")
    {
        var year = parseInt(_ssn.substr(0, 2));
        var month = parseInt(_ssn.substr(2, 2));
        var day = parseInt(_ssn.substr(4, 2));
        
        // 자리수 체크
        if(_ssn.length != 13)
        {
            return false;
        }
        
        // 앞자리 유효성 체크
        if(year >= 0 && year <= 99 && month < 13 && month > 0 && day > 0)
        {
            // 2월 29일 이내
            if(month == 2 && day > 29)
            {
                return false;
            }
            // 4,6,9,11월 30일 이내
            else if((month == 4 || month == 6 || month == 9 || month == 11) && day > 30)
            {
                return false;
            }
            // 31일 이내
            else if(day > 31)
            {
                return false;
            }
        }
        else
        {
            return false;
        }
        
        // 뒷자리 연산을 위한 합
        for( var i = 0; i < 12; i++)
        {
            sum += parseInt(_ssn.substr(i, 1)) * ((i % 8) + 2);
        }
        
        // 내국인
        if(_ssn.substr(6, 1) == 1 || _ssn.substr(6, 1) == 2 || _ssn.substr(6, 1) == 3 || _ssn.substr(6, 1) == 4 || _ssn.substr(6, 1) == 9 || _ssn.substr(6, 1) == 0)
        {
            if(((11 - (sum % 11)) % 10) != parseInt(_ssn.substr(12, 1)))
            {
                return false;
            }
        }
        // 외국인
        else if(_ssn.substr(6, 1) == 5 || _ssn.substr(6, 1) == 6 || _ssn.substr(6, 1) == 7 || _ssn.substr(6, 1) == 8)
        {
            if(parseInt(_ssn.substr(8, 1)) % 2 != 0)
            {
                return false;
            }
            
            if((((11 - (sum % 11)) % 10 + 2) % 10) != parseInt(_ssn.substr(12, 1)))
            {
                return false;
            }
        }
        
        return true;
    }
    else if(_type == "birth")
    {
        var now_year = parseInt(_nowDate.substr(0, 4));
        var now_month = parseInt(_nowDate.substr(4, 2));
        var now_day = parseInt(_nowDate.substr(6, 2));
        
        if(_ssn.length == 6)
        {
            if(parseInt(now_year.toString().substr(2, 2)) <= parseInt(_ssn.substr(0, 2)))
            {
                _ssn = (parseInt(now_year.toString().substr(0, 2)) - 1).toString() + _ssn;
            }
            else
            {
                _ssn = now_year.toString().substr(0, 2) + _ssn;
            }
        }
        else if(_ssn.legnth == 8)
        {
        }
        else if(_ssn.length == 13)
        {
            var type = _ssn.substr(6, 1);
            
            if(type == 1 || type == 2)
            {
                _ssn = "19" + _ssn.substr(0, 6);
            }
            else if(type == 3 || type == 4)
            {
                _ssn = "20" + _ssn.substr(0, 6);
            }
            else if(type == 0 || type == 9)
            {
                _ssn = "18" + _ssn.substr(0, 6);
            }
            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
        
        var in_year = parseInt(_ssn.substr(0, 4));
        var in_month = parseInt(_ssn.substr(4, 2));
        var in_day = parseInt(_ssn.substr(6, 2));
        
        var diff_year = parseInt(now_year - in_year);
        var diff_month = parseInt(now_month - in_month);
        var diff_day = parseInt(now_day - in_day);
        
        if(diff_year < 19)
        {
            return false;
        }
        else if(diff_year == 19)
        {
            if(diff_month < 0)
            {
                return false;
            }
            else if(diff_month == 0 && diff_day < 0)
            {
                return false;
            }
        }
        
        return true;
    }
    else if(_type == "busi")
    {
        var bList = new Array(10);
        var chkValue = new Array("1", "3", "7", "1", "3", "7", "1", "3", "5");
        
        // 자리수 체크
        if(_ssn.length != 10)
        {
            return false;
        }
        
        // 입력받은 문자열을 배열에 설정
        for( var i = 0; i < 10; i++)
        {
            bList[i] = _ssn.substring(i, i + 1);
        }
        
        // 연산을 위한 합
        for( var i = 0; i < 9; i++)
        {
            sum += bList[i] * chkValue[i];
        }
        
        sum = sum + parseInt((bList[8] * 5) / 10);
        
        var sidliy = sum % 10;
        var sidchk = 0;
        
        if(sidliy != 0)
        {
            sidchk = 10 - sidliy;
        }
        else
        {
            sidchk = 0;
        }
        
        if(sidchk != bList[9])
        {
            return false;
        }
        
        return true;
    }
    
    return false;
};

/**
 * 전화번호 체크
 */
commUtil.checkTelNum = function(_parm)
{
    var regFxp = /^(070|02|031|032|033|041|042|043|044|051|052|053|054|055|061|062|063|064|)\d{3,4}\d{4}$/;
    var retValue = false;
    
    if(regFxp.test(commUtil.getOnlyNumber(_parm)))
    {
        retValue = true;
    }
    
    return retValue;
};

/**
 * 핸드폰번호 체크
 */
commUtil.checkHpNum = function(_parm)
{
    var regFxp = /^((01[1|6|7|8|9|])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/;
    // var regFxp = /^(010|011|016|017|018|019)\d{3,4}\d{4}$/;
    var retValue = false;
    
    if(regFxp.test(commUtil.getOnlyNumber(_parm)))
    {
        retValue = true;
    }
    
    return retValue;
};

/**
 * 이메일 체크
 */
commUtil.checkEmail = function(_parm)
{
    var regFxp = /^[a-zA-Z0-9._%+~]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var retValue = false;
    
    if(regFxp.test(_parm))
    {
        retValue = true;
    }
    
    return retValue;
};

/**
 * 우편번호 체크
 */
commUtil.checkZipNo = function(_parm)
{
    var regFxp = /^\d{3}-?\d{3}$/;
    var retValue = false;
    
    if(regFxp.test(_parm))
    {
        retValue = true;
    }
    
    return retValue;
};

/**
 * 문자 SIZE 체크. 한글 : 3
 */
commUtil.getStrSize = function(_parm)
{
    var len = 0;
    
    for( var i = 0; i < _parm.length; i++)
    {
        (_parm.charCodeAt(i) > 127) ? len += 3 : len++;
    }
    
    return len;
};

/**
 * 페이징 관련 속성 값을 자동으로 설정하기 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 7. 14.
 * @param _options
 */
commUtil.setPagingProp = function(_options)
{
    var startRowNo = _options.startRowNo;
    var totalCount = _options.totalCount;
    
    if(startRowNo > totalCount)
    {
        // startRowNo = 1;
    }
    
    $("form").not("#header_form").each(function()
    {
        var srn = $(this).find("#startRowNo");
        
        if(srn.length > 0)
        {
            srn.val(startRowNo);
        }
        else
        {
            var elOption = {};
            elOption.form = $(this).attr("id");
            elOption.type = "hidden";
            elOption.id = "startRowNo";
            elOption.value = startRowNo;
            commUtil.setInputElement(elOption);
        }
    });
};

commUtil.onChangeFile = function(_event, _func)
{
    var objElement = _event.target;
    var accept = objElement.getAttribute('accept');
    if(!commUtil.isFileExt(objElement.value, accept))
    {
        _func();
        objElement.value = '';
    }
};

commUtil.isFileExt = function(_file, _type)
{
    var fileExt = _file.substring(_file.lastIndexOf('.'));
    
    var retValue = false;
    if(_type.indexOf(fileExt) != -1)
        retValue = true;
    
    return retValue;
};

/**
 * 쿠키 정보 가져오기 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 7. 25.
 * @param _name
 * @returns
 */
commUtil.getCookie = function(_name)
{
    var nameOfCookie = _name + "=";
    var x = 0;
    
    while(x <= document.cookie.length)
    {
        var y = (x + nameOfCookie.length);
        
        if(document.cookie.substring(x, y) == nameOfCookie)
        {
            if((endOfCookie = document.cookie.indexOf(";", y)) == -1)
            {
                endOfCookie = document.cookie.length;
            }
            
            return unescape(document.cookie.substring(y, endOfCookie));
        }
        
        x = document.cookie.indexOf(" ", x) + 1;
        
        if(x == 0)
        {
            break;
        }
    }
    
    return "";
};

/**
 * 쿠키 정보 설정하기 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 7. 25.
 * @param _name
 * @param _value
 * @param _expiretype
 * @param _expireamount
 */
commUtil.setCookie = function(_name, _value, _expiretype, _expireamount)
{
    var todayDate = new Date();
    
    if(_expiretype == undefined)
    {
        _expiretype = "DAY";
    }
    _expiretype = _expiretype.toUpperCase();
    
    if(_expireamount == undefined)
    {
        _expireamount = 1;
    }
    
    if(_expiretype == "SEC")
    {
        todayDate.setSeconds(todayDate.getSeconds() + _expireamount, 0);
    }
    else if(_expiretype == "MIN")
    {
        todayDate.setMinutes(todayDate.getMinutes() + _expireamount, 0, 0);
    }
    else if(_expiretype == "HOUR")
    {
        todayDate.setHours(todayDate.getHours() + _expireamount, 0, 0, 0);
    }
    else if(_expiretype == "DAY")
    {
        todayDate.setDate(todayDate.getDate() + _expireamount);
    }
    else if(_expiretype == "MONTH")
    {
        todayDate.setMonth(todayDate.getMonth() + _expireamount, 0);
    }
    else if(_expiretype == "YEAR")
    {
        todayDate.setFullYear(todayDate.getFullYear() + _expireamount, 0, 0);
    }
    
    document.cookie = _name + "=" + escape(_value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
};