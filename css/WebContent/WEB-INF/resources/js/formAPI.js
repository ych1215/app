
var formAPI = function()
{
    var m_formId    = '';
    var m_divId     = '';
    
    this.setFormId = function(_formId)
    {
        m_formId = _formId;
    };
    
    this.setDiv = function(_divId)
    {
        m_divId = _divId;
    };
    
    this.getFormOrDivId = function()
    {
        if(m_formId != undefined && m_divId != undefined)
        {
            return m_formId; 
        }
            
        return m_formId|_divId;
    };
    
    /**
     * Form Id 또는 화면 활성화된 Div Id 유효성 검사
     */
    this.isValid = function()
    {
        return CommLib_validataion.doValidation(this.getFormOrDivId);
    };
    
    
    
    /**
     * Form Id 또는 화면 활성화된 Div Id 유효성 검사
     */
    this.setPlaceHolder = function(_elementId, _strText)
    {
        this.getElementById(_elementId).attr('placeholder', _strText);
    };    
    
    /**
     * 현재 Document의 FormId 가져오기
     * 
     * @return FormId 문자열 반환
     */
    this.getFormString = function()
    {
        return (m_formId == '')?'':'#' + m_formId;
    };
    
    
    /**
     * 현재 Document의 FormId 가져오기
     * 
     * @return FormId Object
     */
    this.getForm = function()
    {
        return $(getFormString());
    };
    

    this.getStrElementById = function(_elementId)
    {
        return (_elementId == '')?'':'#' + _elementId;
    };
    
    this.getElementById = function(_elementId)
    {
        return $(this.getStrElementById());
    };
    
    /**
     * 해당 Form 데이터를 서버로 보낼 데이터를 해쉬화하여 가져오기
     * 
     * @return Form 내 :input 앨리먼트들의 데이터를 해쉬화하여 반환
     */
    this.getFormData = function()
    {
        return CommLib_util.serializeArray(__getFormString());
    };
    
    
    /**
     * 지정한 Div Element에 속한 입력 Element의 데이터 가져오기
     * 
     * @return Element Data
     */
    this.getDivData = function(_divElement)
    {
        var retValue    = new Object();
        var divElements = null;
        var objElement = _divElement? $('#' + _divElement + ' :input'):$('#' + m_divId + ' :input');
        divElements = objElement.not('[type=button]');        
        for( var i = 0, cnt = divElements.length; i < cnt; i++)
        {
            retValue[divElements[i].name] = this.getValue(divElements[i].name);
        }
        return retValue;
    };
    
    
    /**
     * HTML의 FormId 내 지정한 selector로 조회된 Element 객체 가져오기
     * 
     * @param _selector jQuery Selector
     * @return selector한 앨리먼트 객체 반환
     */
    this.querySelector = function(_selector)
    {
        return (__getFormOrDivId() == _selector)?$(_selector):$(__getFormOrDivId() + ' ' + _selector);
    };
    
    
    /**
     * HTML의 FormId + 입력한 selector 조합 문자열 반환
     * 
     * @param _selector jQuery Selector
     * @return FormId + 입력한 selector 문자열 반환
     */
    this.querySelectorStr = function(_selector)
    {
        return (__getFormOrDivId() == _selector)?_selector:__getFormOrDivId() + ' ' + _selector;
    };
    
    
    
    /**
     * 지정한 Element 보이기/숨기기
     * 
     * @param argument
     */
    this.show = function(_elementId, _isShow)
    {
        if(_elementId.length == 0)
        {
            elements = this.querySelector(":input");
        }
        else
        {
            elements = this.getElementById(_elementId);
        }        
        _isShow?elements.hide():elements.show();
    };
    
    
    /**
     * 지정한 Element 보이기
     * 
     * @param argument
     */
    this.readonly = function(_elementId, _isReadOnly)
    {
        if(_elementId.length == 0)
        {
            elements = this.querySelector(":input");
        }
        else
        {
            elements = this.getElementById(_elementId);
        }
        
        elements.prop("readonly", isReadOnly);
    };
    /**
     * [arguments] 지정한 ElementId 또는 Name을 disabled
     * 
     * @param disabled 하고자 하는 Element
     * @param disabled 여부
     */
    this.disabled = function()
    {
        if(_elementId.length == 0)
        {
            elements = this.querySelector(":input");
        }
        else
        {
            elements = this.getElementById(_elementId);
        }
        
        elements.prop("disabled", isReadOnly);
    };
    
    this.disabledCheckRadio = function(element, isDisabled)
    {
    };
    
    
    /**
     * 지정한 Element 값 설정하기
     * 
     * @param _element 값 설정할 ElementId 또는 Element Name
     */
    this.setValue = function(_elementId, _value)
    {
        var elements    = this.getElementById(_elementId);
        var tagName     = elements.prop('tagName');
        var elementType = elements.prop('type'   );
        switch(tagName)
        {
            case 'INPUT':
            {
                switch(elementType)
                {
                    case 'text':
                        var dtPickerType = elements.data('dtpicker');
                        if(dtPickerType != undefined)
                        {
                            dtPickerType = dtPickerType.toLowerCase();
                            if(dtPickerType == 'month')
                            {
                                if(_value.length == 6)
                                {
                                    _value = CommLib_util.formatString(_value,'xxxx-xx');
                                }
                            }
                            else if(dtPickerType == 'day')
                            {
                                if(_value.length == 8)
                                {
                                    _value = CommLib_util.formatString(_value,'xxxx-xx-xx');
                                }                                
                            }
                            else
                            {
                            }
                        }
                    case 'hidden':
                    case 'password':
                    case 'tel':
                    case 'number':
                        elements.val(_value);
                        break;
                    case 'checkbox':
                    case 'radio':
                        for( var i = 0, cnt = elements.length; i < cnt; i++)
                        {
                            var element = $(elements[i]);
                            element.prop("checked", (element.val() == _value));
                        }
                        break;
                    default:
                        break;
                }
                break;
            }
            
            case 'TEXTAREA':
            case 'SELECT':
                elements.val(_value);
                break;
                
            case 'SPAN':
            case 'EM':
                elements.text(_value);
                break;
                
            default:
                // console.log('[DEV] %s 지정한 테그일 경우 추가 작업이 필요할 수 있습니다..', tagName);
                break;
        }
    };
    /**
     * 지정한 Element 값 가져오기
     * 
     * @param _element 값 가져올 Element id 또는 name
     */
    this.getValue = function(_elementId)
    {
        var retValue    = null;
        var elements    = this.getElementById(_element);
        var tagName     = elements.prop('tagName');
        var elementType = elements.prop('type'   );
        switch(tagName)
        {
            case 'INPUT':
            {
                switch(elementType)
                {
                    case 'text'    :
                    case 'hidden'  :
                    case 'password':
                    case 'tel'     :
                    case 'number'  :
                        retValue = elements.val();
                        break;
                    case 'checkbox':
                    case 'radio':
                        var arrValue = new Array();
                        for( var i = 0, cnt = elements.length; i < cnt; i++)
                        {
                            var element = $(elements[i]);
                            if(element.prop("checked") == true)
                            {
                                arrValue.push(element.val());
                                if(elementType == 'radio') break;
                            }
                        }
                        var cntVal = arrValue.length;
                        if     (cntVal == 0) retValue = "";                        
                        else if(cntVal == 1) retValue = arrValue[0];
                        else                 retValue = arrValue;
                        break;
                    default:
                        break;
                }
            }
                break;
            case 'TEXTAREA':
            case 'SELECT':
                retValue = elements.val();
                break;
            default:
                // console.error('[DEV] 지정한 테그일 경우 추가 작업이 필요할 수 있습니다..');
                break;
        }
        return retValue;
    };
    
    this.selectedIndex = function(_elementId, _idx)
    {
        this.getElementById(_elementId).children().eq(_idx).prop('selected', true);
    };    
    
    /**
     * 지정한 Element 값 초기화
     * 
     * @param _element 값 가져올 Element id 또는 name
     */
    this.clear = function(_elementId)
    {
        var elements    = this.getElementById(_elementId);
        var tagName     = elements.prop('tagName');
        var elementType = elements.prop('type'   );
        
        switch(tagName)
        {
            case 'INPUT':
            {
                switch(elementType)
                {
                    case 'text'    :
                    case 'hidden'  :
                    case 'password':
                    case 'tel'     :
                    case 'number'  :
                        elements.val('');
                        break;
                        
                    case 'checkbox':
                    case 'radio'   :
                        elements.checked = elements.defaultChecked;
                        for( var i = 0, cnt = elements.length; i < cnt; i++)
                        {
                            var element = $(elements[i]);
                            element.prop("checked", element.prop("defaultChecked"));
                        }
                        break;
                        
                    default:
                        break;
                }
            }
                break;
            case 'TEXTAREA':
                elements.val('');
                break;
                
            case 'SELECT':
                elements.selectedIndex = 0;
                break;
                
            default:
                // console.log('[DEV] 지정한 테그일 경우 추가 작업이 필요할 수 있습니다..');
                break;
        }

    };
    /**
     * Element에 동적 이벤트 설정하기
     * 
     * @param _element 값 가져올 Element id 또는 name
     */
    this.setEvent = function(_args)
    {
        for( var i = 0, cnt = _args.length; i < cnt; i++)
        {
            var elements = this.querySelector(_args[i][0]);
            if(_args[i][3] == undefined || _args[i][3] == false)
            {
                var type = elements.prop('type');
                if((type == 'tel' || type == 'number' || type == 'text') && elements.data('dtpicker') == undefined)
                {
                    if(_args[i][1] == 'change') _args[i][1] = 'input';
                }
                elements.on(_args[i][1], _args[i][2]);
            }
            else
            {
                $(document).off(_args[i][1], this.querySelector(_args[i][0])).on(_args[i][1], this.querySelector(_args[i][0]), _args[i][2]);
            }
        }
    };


    /**
     * Element Require Setting
     */
    this.setRequire = function(_elementId, _bool)
    {
        this.getElementById(_elementId).attr('data-req', _bool?"Y":"N");
    };
    
    
    this.dnExcel = function(_MenuId)
    {
        if(commUtil.isEmpty(_MenuId))
        {
            console.error("[DEV]MenuId 누락");
        }
        else
        {
            var url = "/commLib/download.do";
            
            var dnExcelForm = $('<form/>');
            dnExcelForm.attr("id", "dnExcelForm");
            dnExcelForm.attr("action", url);
            dnExcelForm.attr("method", "post");
            
            var dnType = $('<input/>');
            dnType.attr("name", "dnType");
            dnType.attr("type", "hidden");
            dnType.val("excel");
            
            var MenuId = $('<input/>');
            MenuId.attr("name", "MenuId");
            MenuId.attr("type", "hidden");
            MenuId.val(_MenuId);
            
            dnExcelForm.append(dnType);
            dnExcelForm.append(MenuId);
            
            dnExcelForm.submit();
        }
    };
    
    /**
     * 페이지 이동을 위한 함수
     * 
     * @author hwan lee
     * @since 2014. 4. 7.
     * @param _options
     * @returns retValue
     */
    this.location = function(_options)
    {
        // url : Ajax 처리를 위한 URL
        // async : Ajax 동기화 여부
        // form : 파라미터가 담긴 폼 오브젝트
        // element : 파라미터로 지정할 엘리먼트 Id(s)
        // data : 파라미터로 사용할 데이터 오브젝트
        // target : 결과 값을 넣어줄 대상 디비전 Id
        // ret : 결과 값을 리턴할지 여부
        // popup : 팝업창 생성 여부
        // popdata : 팝업창 CSS 속성으로 사용할 데이터 오브젝트
        var sUrl = _options.url;
        var sAsync = commUtil.isEqual(_options.async, "false") == true ? false : true;
        var sForm = _options.form;
        var sElement = _options.element;
        var sData = _options.data;
        var sTarget = commUtil.isEmpty(_options.target) ? "contents" : _options.target;
        var sReturn = commUtil.isEmpty(_options.ret) ? "N" : _options.ret;
        var sPopup = commUtil.isEmpty(_options.popup) ? "N" : _options.popup;
        var sPopdata = _options.popdata;
        
        var sParams = new Object();
        
        if(!commUtil.isEmpty(sForm))
        {
            sParams = commUtil.mergeHashData(sParams, commUtil.serializeArray("#" + sForm));
        }
        
        if(!commUtil.isEmpty(sElement))
        {
            sParams = commUtil.mergeHashData(sParams, commUtil.serializeObject(sElement));
        }
        
        if(!commUtil.isEmpty(sData))
        {
            sParams = commUtil.mergeHashData(sParams, sData);
        }
        
        var strJson = JSON.stringify(sParams);
        var retValue = null;
        
        $.ajax({
        type : "POST",
        url : sUrl,
        cache : false,
        headers : {
        "cache-control" : "no-cache",
        "pragma" : "no-cache"
        },
        data : {
            "JSON_DATA" : strJson
        },
        async : sAsync,
        success : function(_result)
        {
            var sResult = _result;
            
            // 팝업창 생성 여부에 따라 처리
            if(sPopup == "N")
            {
                // 결과 값 리턴 여부에 따라 처리
                if(sReturn == "Y")
                {
                    retValue = sResult;
                }
                else
                {
                    $("#" + sTarget).html(sResult);
                }
            }
            else
            {
                commUtil.makePopup(sTarget, sResult, sPopdata);
            }
        },
        error : function(_result)
        {
            alert("page loading error...");
        }
        });
        
        return retValue;
    };    
};
