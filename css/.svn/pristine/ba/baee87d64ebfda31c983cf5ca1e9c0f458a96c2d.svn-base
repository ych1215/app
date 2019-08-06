var pageUtil = function()
{
    this.dnExcel = function(_MenuId)
    {
        if(commUtil.isEmpty(_MenuId))
        {
            console.error("[DEV]MenuId 누락");
        }
        else
        {
            var _pageUtil = new pageUtil();
            var locOption = {};
            locOption.url = "/commLib/chkFile.do";
            locOption.ret = "Y";
            
            var locData = {};
            locData.dnType = "excel";
            locData.MenuId = _MenuId;
            
            locOption.data = locData;
            
            var retVal = JSON.parse(_pageUtil.location(locOption));
            
            if(retVal.ISOK == "T")
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
        // json : 파라미터로 사용할 JSON 데이터
        // target : 결과 값을 넣어줄 대상 디비전 Id
        // ret : 결과 값을 리턴할지 여부
        // indicator : 로딩 이미지를 보여줄지 여부
        // popup : 팝업창 생성 여부
        // popdata : 팝업창 CSS 속성으로 사용할 데이터 오브젝트
        var sUrl = _options.url;
        var sAsync = commUtil.isEqual(_options.async, "false") == true ? false : true;
        var sForm = _options.form;
        var sElement = _options.element;
        var sData = _options.data;
        var sJson = _options.json;
        var sTarget = commUtil.isEmpty(_options.target) ? "contents" : _options.target;
        var sReturn = commUtil.isEmpty(_options.ret) ? "N" : _options.ret;
        var sIndicator = commUtil.isEmpty(_options.indicator) ? "Y" : _options.indicator;
        var sPopup = commUtil.isEmpty(_options.popup) ? "N" : _options.popup;
        var sPopdata = _options.popdata;
        
        var sParams = new Object();
        sParams.TARGET = sTarget;
        
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
        
        if(!commUtil.isEmpty(sJson))
        {
            sParams = commUtil.mergeHashData(sParams, JSON.parse(sJson));
        }
        
        if(sReturn == "Y")
        {
            sParams.RETYN = sReturn;
            sAsync = false;
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
                    
                    // 결과 값에 대한 처리
                    pageUtil.parseReturn(retValue);
                }
                else
                {
                    $("#" + sTarget).html(sResult);
                    
                    var startRowNo = $("#startRowNo").eq(0).val();
                    var realStartRowNo = $("#realStartRowNo").eq(0).val();
                    
                    // 현재 페이지 순번이 실제 페이지 순번보다 크면 화면 갱신
                    if(startRowNo > realStartRowNo)
                    {
                        var _pageUtil = new pageUtil();
                        var locOption = {};
                        
                        var tmpData = JSON.parse(strJson);
                        tmpData.startRowNo = realStartRowNo;
                        
                        locOption.url = sUrl;
                        locOption.async = sAsync;
                        locOption.target = sTarget;
                        locOption.json = JSON.stringify(tmpData);
                        locOption.indicator = sIndicator;
                        
                        _pageUtil.location(locOption);
                    }
                }
            }
            else
            {
                commUtil.makePopup(sTarget, sResult, sPopdata);
            }
        },
        beforeSend : function()
        {
            if(sIndicator == "Y")
            {
                commUtil.ajaxIndicator("show");
            }
        },
        complete : function()
        {
            if(sIndicator == "Y")
            {
                commUtil.ajaxIndicator("hide");
            }
        },
        statusCode : {
        404 : function()
        {
            commUtil.alertMsg("[404] 해당 페이지를 찾을 수 없습니다.<BR>관리자에게 문의하시기 바랍니다.");
        },
        500 : function()
        {
            commUtil.alertMsg("[500] 오류가 발생하였습니다.<BR>관리자에게 문의하시기 바랍니다.");
        }
        }
        });
        
        return retValue;
    };
    
    /**
     * 파일 전송을 위한 함수
     * 
     * @author hwan lee
     * @since 2014. 6. 16.
     * @param _options
     * @returns retValue
     */
    this.formsubmit = function(_options)
    {
        // url : 처리를 위한 URL
        // form : 파라미터가 담긴 폼 오브젝트
        // element : 파라미터로 지정할 엘리먼트 Id(s)
        // data : 파라미터로 사용할 데이터 오브젝트
        // json : 파라미터로 사용할 JSON 데이터
        // target : 결과 값을 넣어줄 대상 디비전 Id
        // ret : 결과 값을 리턴할지 여부
        var sUrl = _options.url;
        var sForm = _options.form;
        var sElement = _options.element;
        var sData = _options.data;
        var sJson = _options.json;
        var sTarget = commUtil.isEmpty(_options.target) ? "contents" : _options.target;
        var sReturn = commUtil.isEmpty(_options.ret) ? "N" : _options.ret;
        
        var sParams = new Object();
        sParams.TARGET = sTarget;
        
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
        
        if(!commUtil.isEmpty(sJson))
        {
            sParams = commUtil.mergeHashData(sParams, JSON.parse(sJson));
        }
        
        if(sReturn == "Y")
        {
            sParams.RETYN = sReturn;
            sAsync = false;
        }
        
        var strJson = JSON.stringify(sParams);
        
        // 폼 오브젝트의 enctype 속성 지정
        $("#" + sForm).attr("enctype", "multipart/form-data");
        
        $("#" + sForm).ajaxSubmit({
        url : sUrl,
        data : {
            "JSON_DATA" : strJson
        },
        statusCode : {
        404 : function()
        {
            commUtil.alertMsg("[404] 해당 페이지를 찾을 수 없습니다.<BR>관리자에게 문의하시기 바랍니다.");
        },
        500 : function()
        {
            commUtil.alertMsg("[500] 오류가 발생하였습니다.<BR>관리자에게 문의하시기 바랍니다.");
        }
        },
        success : function(_result)
        {
            var sResult = _result;
            
            // 결과 값 리턴 여부에 따라 처리
            if(sReturn == "Y")
            {
                retValue = sResult;
                
                // 결과 값에 대한 처리
                pageUtil.parseReturn(retValue);
            }
            else
            {
                $("#" + sTarget).html(sResult);
                
                var startRowNo = $("#startRowNo").eq(0).val();
                var realStartRowNo = $("#realStartRowNo").eq(0).val();
                
                // 현재 페이지 순번이 실제 페이지 순번보다 크면 화면 갱신
                if(startRowNo > realStartRowNo)
                {
                    var _pageUtil = new pageUtil();
                    var locOption = {};
                    
                    var tmpData = JSON.parse(strJson);
                    tmpData.startRowNo = realStartRowNo;
                    
                    locOption.url = sUrl;
                    locOption.target = sTarget;
                    locOption.json = JSON.stringify(tmpData);
                    
                    _pageUtil.location(locOption);
                }
            }
            
            // enctype 속성 제거
            $("#" + sForm).removeAttr("enctype");
        }
        });
    };
};

/**
 * 로그아웃
 * 
 * @author hwan lee
 * @since 2014. 7. 17.
 */
pageUtil.logout = function()
{
    if(g_INDEX.interval != null)
    {
        window.clearInterval(g_INDEX.interval);
    }
    
    var _pageUtil = new pageUtil();
    var locOption = {};

    locOption.url = "/com/com010/get_com010_logout.do";
    locOption.target = "wrap";
    locOption.ret = "Y";
    _pageUtil.location(locOption);
};

/**
 * Ajax 처리 결과 값에 대한 처리
 * 
 * @author socuser219
 * @since 2014. 5. 15.
 * @param _retValue
 */
pageUtil.parseReturn = function(_retValue)
{
    try
    {
        var retVal = JSON.parse(_retValue);
        
        if(retVal.MSG != undefined)
        {
            commUtil.alertMsg(retVal.MSG);
        }
        
        if(retVal.URL != undefined)
        {
            if(retVal.URL == "")
            {
                return false;
            }
            
            var _pageUtil = new pageUtil();
            var locOption = {};
            
            if(retVal.DATA != undefined)
            {
                locOption.data = retVal.DATA;
            }
            
            if(retVal.TARGET != undefined)
            {
                locOption.target = retVal.TARGET;
            }
            
            locOption.url = retVal.URL;
            _pageUtil.location(locOption);
        }
        
        return true;
    }
    catch(e)
    {
        return false;
    }
    ;
};

var g_zipPopUp = null;
pageUtil.openPopup = function(_zipPopUp)
{
    g_zipPopUp = _zipPopUp;
    
    var url = "";
    // 아래 url은 둘중 하나만 적용함
    // url = "http:// 주소센터를 호출하는 시스템 /convpopup/openPopup.jsp"; // jsp로 호출할 경우
    url = "/extPopUp.ext"; // 컨트롤러를 작성한 경우
    var target = "frmHidden";
    var left = 100;
    var top = 100;
    popup = window.open("", target, "top=" + top + ", left=" + left + ", width=453, height=480, toolbar=false, menubar=no, scrollbars=no, status=no, resizable=no");
    popup.focus();
    
    var popPostForm = $('<form/>');
    popPostForm.attr("id", target);
    popPostForm.attr("action", url);
    popPostForm.attr("target", target);
    popPostForm.attr("method", "post");
    popPostForm.submit();
};

// 적용버튼 v 2.2
function resultData(returnData)
{
    if(returnData != null)
    {
        // 우편번호
        document.getElementById(g_zipPopUp.ZIPCD).value = commUtil.formatString(returnData[0].ZIP_NUM, "XXX-XXX");
        // 지번주소
        document.getElementById(g_zipPopUp.ADDR1).value = returnData[0].ADDR_AFTR1;
        document.getElementById(g_zipPopUp.ADDR2).value = returnData[0].ADDR_AFTR2;
        
        if(g_zipPopUp.RDAddr1 != undefined)
        { // 도로명 기본주소
            document.getElementById(g_zipPopUp.RDAddr1).value = returnData[0].RD_ADDR1;
            document.getElementById(g_zipPopUp.RDAddr2).value = returnData[0].RD_ADDR2;
        }
        if(g_zipPopUp.B_DNG_CD != undefined)
        { // 가용시 사용
            document.getElementById(g_zipPopUp.B_DNG_CD).value = returnData[0].B_DNG_CD;
            document.getElementById(g_zipPopUp.LOT_CLS).value = returnData[0].LOT_CLS;
            document.getElementById(g_zipPopUp.LOT_MB).value = returnData[0].LOT_SB;
            document.getElementById(g_zipPopUp.LOT_SB).value = returnData[0].LOT_MB;
            document.getElementById(g_zipPopUp.RD_CD).value = returnData[0].RD_CD;
            document.getElementById(g_zipPopUp.BLD_MB).value = returnData[0].BLD_MB;
            document.getElementById(g_zipPopUp.BLD_SB).value = returnData[0].BLD_SB;
            document.getElementById(g_zipPopUp.BLD_DNG).value = returnData[0].BLD_DNG;
            document.getElementById(g_zipPopUp.BLD_HO).value = returnData[0].BLD_HO;
            
            // 우편번호 팝업창에서 주소 선택 여부
            document.getElementById(g_zipPopUp.ZIP_POPUP_SCH_YN).value = "Y";
        }
    }
};