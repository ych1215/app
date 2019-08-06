var validation = function()
{
};

/**
 * Validation 체크
 */
validation.doValidation = function(_formId)
{
    var rtnVal = true;
    /**
     * Input Parameter Check
     */
    if(_formId == undefined)
    {
        console.error("Validation 체크할 Element ID를 찾을 수 없습니다.");
        return false;
    }
    
    /**
     * Find Form
     */
    var formId = $(_formId);
    if(!formId.is("form"))
    {
        if(formId.find("form").first().length)
        {
            formId = formId.find("form").first();
        }
    }
    
    /**
     * Is Form Check
     */
    if(!formId.is("form"))
    {
        console.error("Validation 체크할 <form> Tag 를 찾을 수 없습니다.");
        return false;
    }
    
    /**
     * Get Elements
     */
    var elements = $(':input', formId).not(":disabled");
    
    if(elements.length == 0)
    {
        return true;
    }
    
    elements.each(function()
    {
        var objElement = $(this);
        var elementValue = objElement.val();
        var val_length = 0;
        var element_type = objElement.prop("tagName");
        
        if(objElement.data("req") == "Y")
        {
            if("INPUT" == element_type)
            {
                element_type = objElement.attr("type").toUpperCase();
            }
            
            switch(element_type)
            {
                case "CHECKBOX":
                case "RADIO":
                case "SELECT":
                    if(elementValue != '')
                    {
                        val_length = 1;
                    }
                    
                    break;
                case "SPAN":
                    val_length = objElement.children().length;
                    break;
                default:
                    val_length = commUtil.getStrLen(commUtil.removeWhiteSpace(elementValue.toString()));
                    break;
            }
            
            var retval = validation.__isValidationErr(formId, objElement, element_type, val_length);
            
            if(retval.message != undefined)
            {
                var objErr = {};
                objErr.elementId = formId.find(':input[name=' + retval.attribute + ']:first, span[name=' + retval.attribute + ']');
                // $(':input[name=' + retval.attribute + ']:first');
                objErr.errMsg = retval.message;
                
                if(!commUtil.isEmpty(objErr.errMsg))
                {
                    commUtil.alertMsg(objErr.errMsg);
                }
                rtnVal = false;
                objElement.focus();
                return false;
                
            }
        }
        else
        {
            // 길이체크
            if(objElement.attr("maxlength") > 0)
            {
                if(commUtil.getStrLen(elementValue) > objElement.attr("maxlength"))
                {
                    commUtil.alertMsg(validation.__getDataName(objElement) + "은(는) " + objElement.attr("maxlength") + "글자 까지 입력 가능 합니다.");
                    rtnVal = false;
                    objElement.focus();
                    return false;
                }
            }
        }
    });
    
    // if($('.alert', formId).length > 0) rtnVal = false;
    
    return rtnVal;
};

validation.__isValidationErr = function(_form, _element, element_type, CHK_CNT)
{
    var err_type = 0;
    var errCheck = false;
    var setMsg = "";
    
    var dataObj = new Array();
    $.each(_element.data(), function(key, value)
    {
        dataObj[key] = value;
    });
    
    var data_name = validation.__getDataName(_element);
    var retObj = {};
    retObj['attribute'] = _element.attr("name");
    
    /**
     * Attribute data-isnull
     */
    if(dataObj.isnull == "Y" && CHK_CNT == 0)
    {
        return retObj;
    }
    
    /**
     * Attribute data-isnumber
     */
    if(dataObj.isnumber == undefined)
    {
        dataObj.isnumber = "N";
    }
    
    if(dataObj.isnumber == "Y")
    {
        if(!stringUtil.isNumber(_element.val()))
        {
            errCheck = true;
            setMsg = "[필수] " + data_name + "은(는) 숫자만 입력이 가능합니다.";
        }
    }
    
    /**
     * Attribute data-sameval
     */
    if(dataObj.sameval == undefined)
    {
        dataObj.sameval = "";
    }
    
    if(dataObj.sameval.toString().length > 0)
    {
        if(_element.val() != _form.find('#' + dataObj.sameval).val())
        {
            errCheck = true;
            same_val_data_name = validation.__getDataName(_form.find('#' + dataObj.sameval));
            setMsg = "[필수] " + same_val_data_name + " 과(와) " + data_name + " 값이 다릅니다.";
        }
    }
    
    /**
     * Attribute data-diffval
     */
    if(dataObj.diffval == undefined)
    {
        dataObj.diffval = "";
    }
    
    if(dataObj.diffval.toString().length > 0)
    {
        if(_element.val() == _form.find('#' + dataObj.diffval).val())
        {
            errCheck = true;
            same_val_data_name = validation.__getDataName(_form.find('#' + dataObj.diffval));
            setMsg = "[필수] " + same_val_data_name + " 과(와) " + data_name + " 값이 같습니다.";
        }
    }
    
    /**
     * Attribute data-id
     */
    if(dataObj.id == "Y")
    {
        var checkId = validation.checkId(_element.val());
        if(!commUtil.isEmpty(checkId))
        {
            errCheck = true;
            setMsg = checkId;
        }
    }
    
    /**
     * Attribute data-pwd
     */
    if(dataObj.pwd == undefined)
    {
        dataObj.pwd = "";
    }
    
    if(dataObj.diffval.toString().length > 0)
    {
        var checkPwd = validation.checkPwd(_element.val());
        if(!commUtil.isEmpty(checkPwd))
        {
            errCheck = true;
            setMsg = checkPwd;
        }
    }
    
    /**
     * Attribute data-max Attribute data-min
     */
    /* 기본 Define */
    var MINCHK = 1;
    var MAXCHK = 99999999;
    
    var maxlength = _element.attr("maxlength");
    if(maxlength > 0)
    {
        MAXCHK = maxlength;
    }
    
    if(dataObj.min == undefined)
    {
        dataObj.min = MINCHK;
        err_type = 1;
    }
    
    if(dataObj.max == undefined)
    {
        dataObj.max = MAXCHK;
    }
    
    if(CHK_CNT < dataObj.min || CHK_CNT > dataObj.max)
    {
        errCheck = true;
    }
    
    /**
     * DataPicker
     */
    if(dataObj.datepicker)
    {
        if(_element.val().trim().length <= 0)
        {
            errCheck = true;
            
            // var targetName = validation.__getDataName($('#' +
            // dataObj.datelink));
            setMsg = "[필수] " + data_name + "을(를) 선택하세요.";
            
        }
        if((dataObj.datelink) && (dataObj.datelink.trim().length > 0))
        {
            var strDate = _form.find('#' + dataObj.datelink).val().split('-');
            var endDate = _element.val().split('-');
            var linkDate = new Date(strDate[0], strDate[1], strDate[2]);
            var currDate = new Date(endDate[0], endDate[1], endDate[2]);
            
            // 시작일자와 종료일자 체크(시작일자 < 종료일자)
            if((linkDate - currDate) > 0)
            {
                errCheck = true;
                
                var targetName = validation.__getDataName($('#' + dataObj.datelink));
                if(targetName == data_name)
                {
                    setMsg = "[필수] " + data_name + "의 종료 일자가 시작 일자보다 이전입니다.";
                }
                else
                {
                    setMsg = "[필수] " + data_name + "은(는) " + targetName + " 보다 이전일자를 선택 하였습니다.";
                }
            }
            // 동일 년월 체크
            if((strDate[0] != endDate[0]) || (strDate[1] != endDate[1]))
            {
                errCheck = true;
                setMsg = "[필수] " + data_name + "은(는) " + "동일 월에 한해 검색 가능합니다.";
            }
        }
    }
    
    if(!errCheck)
    {
        return retObj;
    }
    
    /**
     * Attribute data-usermsg
     */
    if(dataObj.usermsg)
    {
        retObj['message'] = dataObj.usermsg;
        return retObj;
    }
    
    if(setMsg.length > 0)
    {
        retObj['message'] = setMsg;
        return retObj;
    }
    
    retObj['message'] = "[필수] " + data_name + "은(는) ";
    
    switch(element_type)
    {
        case "CHECKBOX":
        case "RADIO":
        case "SELECT":
        {
            if(dataObj.min > CHK_CNT)
            {
                if(err_type == 1)
                {
                    retObj['message'] += "반드시 입력되어야합니다.";
                }
                else
                {
                    retObj['message'] += dataObj.min + " 개 이상 선택 되어야 합니다.";
                }
            }
            
            if(dataObj.max < CHK_CNT)
            {
                retObj['message'] += dataObj.max + " 개 까지 선택 가능 합니다.";
            }
            
            break;
        }
        default:
        {
            if(dataObj.min > CHK_CNT)
            {
                retObj['message'] += dataObj.min + " 글자 이상 입력 되어야 합니다.";
            }
            
            if(dataObj.max < CHK_CNT)
            {
                retObj['message'] += dataObj.max + " 글자 까지 입력 가능 합니다.";
            }
            break;
        }
    }
    
    return retObj;
};

validation.__getDataName = function(_elementId)
{
    var data_name = _elementId.data("name");
    if(data_name == undefined || data_name == '')
    {
        // data_name = _elementId.closest('tr').find('thl').text();
        data_name = _elementId.closest('td').prev().text();
    }
    return data_name;
};

validation.initDataReq = function(_formId)
{
    /**
     * Find Form
     */
    var formId = $(_formId);
    if(!formId.is("form"))
    {
        if(formId.find("form").first().length)
        {
            formId = formId.find("form").first();
        }
    }
    
    /**
     * Is Form Check
     */
    if(!formId.is("form"))
    {
        console.error("Validation 체크할 <form> Tag 를 찾을 수 없습니다.");
        return false;
    }
    
    /**
     * Get Elements
     */
    var elements = $(':input', formId).not(":disabled");
    
    if(elements.length == 0)
    {
        return true;
    }
    
    elements.each(function()
    {
        var objElement = $(this);
        if(objElement.data("req") == "Y")
        {
            objElement.data("req", "N");
        }
    });
};

validation.checkId = function(_id)
{
    var bKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(_id);
    
    if(bKorean)
    {
        return "아이디는 한글 입력이 불가능합니다.";
    }
    
    return "";
};

validation.checkPwd = function(_pwd)
{
    var pwd_length = _pwd.length;
    var bLowCase = /[a-z]/.test(_pwd);
    var bNumber = /\d/.test(_pwd);
    var bUperCase = /[A-Z]/.test(_pwd);
    var bSpecCase = /[^a-zA-Z0-9]/.test(_pwd);
    var nCntApy = 0;
    
    if(bLowCase)
    {
        nCntApy++;
    }
    if(bNumber)
    {
        nCntApy++;
    }
    if(bUperCase)
    {
        nCntApy++;
    }
    if(bSpecCase)
    {
        nCntApy++;
    }
    
    if(pwd_length < 8 || pwd_length > 15)
    {
        return "비밀번호는 8~15자 이내로 입력하세요.";
    }
    
    if(nCntApy > 2)
    {
        if(pwd_length < 8 || pwd_length > 9)
        {
            return "영소문자, 영대문자, 숫자, 특수문자 중 3가지 이상 조합시 8~9자리를 입력하세요.";
        }
    }
    else if(nCntApy == 2)
    {
        if(pwd_length < 10)
        {
            return "영소문자, 영대문자, 숫자, 특수문자 중 2가지 이상 조합시 10자리이상 입력하세요.";
        }
    }
    else
    {
        return "영소문자, 영대문자, 숫자, 특수문자 중 2가지 이상 조합 입력하세요.";
    }
    
    var tmp = '';
    var nCntChar = 0;
    var bCntChar = false;
    
    for( var i = 0; i < pwd_length; i++)
    {
        var ch = _pwd.charAt(i);
        
        if(tmp != ch)
        {
            nCntChar = 1;
        }
        else
        {
            nCntChar++;
            if(nCntChar >= 3)
            {
                bCntChar = true;
                break;
            }
        }
        tmp = ch;
    }
    
    if(bCntChar)
    {
        return "동일한 문자를 연속 3회 이상 사용하실 수 없습니다.";
    }
    
    return "";
};