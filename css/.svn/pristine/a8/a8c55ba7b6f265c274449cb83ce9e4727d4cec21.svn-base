var datepicker = function(_elementId)
{
    /**
     * 달력 초기화
     */
    var __initFunC = function()
    {
        $("#ui-datepicker-div").remove();
    };
    
    /**
     * 날짜 설정
     * 
     * @param _element
     * @param _date
     */
    var __setDate = function(_element, _date)
    {
        if(commUtil.isEmpty(_element.val()))
        {
            _element.val(_date);
        }
        else
        {
            var date = __convertDate(_element.val());
            
            _element.val(date);
        }
        
        _element.attr("data-prev-date", _element.val().replace(/(\,|\.|\-|\/|\:)/g, ""));
    };
    
    /**
     * 달력 붙이기
     * 
     * @param _elementId
     */
    var __setDtpicker = function(_elementId)
    {
        var elements = $("#" + _elementId);
        
        for( var i = 0, cnt = elements.length; i < cnt; i++)
        {
            var element = elements.eq(i);
            var eleDatePicker = element.data("dtpicker").toUpperCase();
            var initDate = element.data("initdate");
            var redraw = element.data("redraw");
            
            if(redraw == "Y")
            {
                __initFunC();
            }
            
            if(commUtil.isEmpty(initDate))
            {
                __setDate(element, dateUtil.formatDate(dateUtil.getDate()));
                /*
                 * if(element.val() == undefined || element.val() == '') {
                 * element.val(dateUtil.formatDate(dateUtil.getDate())); }
                 */
            }
            else
            {
                initDate = initDate.toUpperCase();
                
                if(initDate == 'FIRST')
                {
                    __setDate(element, dateUtil.formatDate(dateUtil.getFirstDate()));
                    /*
                     * if(element.val() == undefined || element.val() == '') {
                     * element.val(dateUtil.formatDate(dateUtil.getFirstDate())); }
                     */
                }
                else if(initDate == 'LAST')
                {
                    __setDate(element, dateUtil.formatDate(dateUtil.getLastDate()));
                    /*
                     * if(element.val() == undefined || element.val() == '') {
                     * element.val(dateUtil.formatDate(dateUtil.getLastDate())); }
                     */
                }
                else if(initDate == 'EMPTY')
                {
                    __setDate(element, "");
                }
                else
                {
                    __setDate(element, dateUtil.formatDate(dateUtil.getDate("", initDate)));
                    /*
                     * if(element.val() == undefined || element.val() == '') {
                     * element.val(dateUtil.formatDate(dateUtil.getDate(initDate))); }
                     */
                }
            }
            
            element.prop("readonly", true);
            
            if(eleDatePicker == "DAY")
            {
                __datepicker(element);
            }
            else if(eleDatePicker == "MONTH")
            {
                if(initDate == 'EMPTY')
                {
                    __setDate(element, "");
                }
                else
                {
                    __setDate(element, dateUtil.formatDate(dateUtil.getThisMonth()));
                    /*
                     * if(element.val() == undefined || element.val() == '') {
                     * element.val(dateUtil.formatMonth(dateUtil.getThisMonth())); }
                     */
                }
                
                __monthpicker(element);
            }
        }
    };
    
    /**
     * 일 validation 체크 [data-mindate="yyyymm[dd]"] 입력가능 최소일
     * [data-maxdate="yyyymm[dd]"] 입력가능 최대일 [data-datelink="_elementId"]
     * _elementId 일보다 이후 일만 가능(같은일 포함)
     * 
     * @param _elementId
     * @param _dayMonthType
     */
    var isValidMinMaxDate = function(_elementId, _dayMonthType)
    {
        var retValue = true;
        var validVal = "";
        var errMsg = "";
        var isErr = true;
        var thisVal = commUtil.removeFormat(_elementId.val());
        var lastDate = dateUtil.getLastDate(thisVal);
        
        if(_dayMonthType.toString().toUpperCase() == "MONTH")
            validVal = lastDate;
        else
            validVal = thisVal;
        
        if(validVal.replace(/\s+/g, "") != "" && validVal != 'undefined')
        {
            if(dateUtil.isValidDate(validVal) == true)
            {
                var initDate = _elementId.data("initdate");
                if(!commUtil.isEmpty(initDate))
                {
                    initDate = initDate.toUpperCase();
                }
                
                var datelink = _elementId.data("datelink");
                minDate = __convertDate(_elementId.data('mindate'));
                maxDate = __convertDate(_elementId.data('maxdate'));
                
                var objData = new Object();
                objData.elementId = _elementId;
                objData.dayMonthType = 'day';
                objData.validVal = validVal;
                
                if(maxDate != undefined && maxDate != '')
                {
                    objData.checkDate = maxDate;
                    objData.typeData = 'maxDate';
                    __validValCheck(objData);
                }
                
                if(minDate != undefined && minDate != '')
                {
                    objData.checkDate = minDate;
                    objData.typeData = 'minDate';
                    __validValCheck(objData);
                }
                
                if((initDate == undefined || initDate == '') && datelink != undefined && datelink != '')
                {
                    var target_val = commUtil.removeFormat($('#' + datelink).val());
                    var sndData = new Object();
                    sndData.target_val = target_val;
                    sndData.datelink = datelink;
                    sndData._elementId = _elementId;
                    sndData.strEndSelect = 'str';
                    
                    if(validVal < target_val)
                    {
                        isErr = __minMaxCheckDate(sndData);
                    }
                    
                    /*
                     * if((target_val == undefined) || (target_val == '')) {
                     * isErr = __strEndCheckDate(sndData); }
                     */

                    /*
                     * if(target_val.substring(0, 6) != validVal.substring(0,
                     * 6)) { __matchMonth(_elementId); }
                     */
                }
                else
                {
                    if($('[data-datelink=' + _elementId.attr('id') + ']').length > 0)
                    {
                        var target_val = $('[data-datelink=' + _elementId.attr('id') + ']').val().replace(/(\,|\.|\-|\/|\:)/g, "");
                        
                        var sndData = new Object();
                        sndData.target_val = target_val;
                        sndData.datelink = datelink;
                        sndData._elementId = _elementId;
                        sndData.strEndSelect = 'end';
                        
                        /*
                         * if((validVal > target_val) && (target_val != "")) {
                         * isErr = __minMaxCheckDate(sndData); }
                         */

                        /*
                         * if((target_val == undefined) || (target_val == '')) {
                         * isErr = __strEndCheckDate(sndData); }
                         */

                        /*
                         * if((target_val.substring(0, 6) !=
                         * validVal.substring(0, 6)) && (target_val != "")) {
                         * __matchMonth(_elementId); }
                         */
                    }
                }
            }
            else
            {
                errMsg = "입력된 [" + _elementId.val() + "]는 유효한 날짜가 아닙니다.\n날짜를 확인하세요.!!!";
                isErr = false;
                
                var objErr = new Object();
                objErr.elementId = _elementId;
                objErr.errMsg = errMsg;
                
                commUtil.alertMsg(objErr.errMsg);
                
                _elementId.val("");
            }
        }
        if(isErr == false)
        {
            retValue = false;
        }
        
        return retValue;
    };
    
    /**
     * 날짜 형식 변환 [data-mindate="yyyymm[dd]" or D-dd, D+dd]
     * 
     * @param _data
     */
    var __convertDate = function(_data)
    {
        if(_data == undefined)
            return;
        
        _data = _data.toString();
        var retValue = null;
        var flag = _data.substring(0, 1);
        
        if(flag == 'D' || flag == 'M')
        {
            retValue = dateUtil.formatDate(dateUtil.getDate(_data));
        }
        else
        {
            retValue = dateUtil.formatDate(_data);
        }
        
        return retValue;
    };
    
    /**
     * 최소일, 최대일 체크 후 메세지 출력 [data-maxDate="elementID"
     * 
     * @param _data
     */
    var __minMaxCheckDate = function(_sndData)
    {
        datepicker.test = _sndData;
        var prev_date = _sndData._elementId.data("prev-date");
        var isErr = true;
        
        if(_sndData.datelink == 'last_date')
        {
            errMsg = "최종이력날짜";
        }
        else
        {
            errMsg = "";
        }
        
        errMsg += dateUtil.formatDate(_sndData.target_val);
        if(_sndData.strEndSelect == 'str')
        {
            errMsg += "보다 이전 날짜를 선택 하였습니다.";
        }
        else
        {
            errMsg += "보다 이후 날짜를 선택 하였습니다.";
        }
        console.log(prev_date);
        _sndData._elementId.val(__convertDate(prev_date));
        
        isErr = false;
        
        var objErr = new Object();
        objErr.elementId = _sndData._elementId;
        objErr.errMsg = errMsg;
        
        commUtil.alertMsg(objErr.errMsg);
        
        return isErr;
    };
    
    /**
     * 시작일, 마지막일 체크 후 메세지 출력 [data-maxDate="elementID"
     * 
     * @param _data
     */
    var __strEndCheckDate = function(_sndData)
    {
        var isErr = false;
        if(_sndData.strEndSelect == 'str')
            errMsg = "시작 ";
        else
            errMsg = "마지막 ";
        
        errMsg += "날짜가 입력되지 않았습니다.";
        
        var objErr = new Object();
        objErr.elementId = _sndData._elementId;
        objErr.errMsg = errMsg;
        
        commUtil.alertMsg(objErr.errMsg);
        
        return isErr;
    };
    
    /**
     * 최소일, 최대일 체크 [data-maxDate="elementID"
     * 
     * @param _data
     */
    var __validValCheck = function(_objData)
    {
        var errMsg = '';
        var typeData = _objData.typeData;
        var isOk = true;
        
        if((typeData != undefined) && (_objData.validVal != undefined))
        {
            if(typeData == 'minDate')
            {
                if(_objData.checkDate > _objData.validVal)
                {
                    isOk = false;
                }
            }
            else
            {
                if(_objData.checkDate < _objData.validVal)
                {
                    isOk = false;
                }
            }
            if(!isOk)
            {
                errMsg = "입력가능날짜 [";
                errMsg += dateUtil.formatMonth(_objData.checkDate);
                
                if(_objData.dayMonthType.toString().toUpperCase() == "DAY")
                {
                    errMsg += dateUtil.formatDate(_objData.checkDate).substring(7, 10);
                }
                errMsg += "]";
                errMsg += "보다 선택 날짜가 ";
                
                if(typeData == 'mindate')
                    errMsg += "이전 입니다.";
                else
                    errMsg += "이후 입니다.";
                
                var objErr = new Object();
                objErr.elementId = _objData.elementId;
                objErr.errMsg = errMsg;
                
                commUtil.alertMsg(objErr.errMsg);
            }
            return;
        }
        
    };
    
    /**
     * 시작일, 종료일 동일한 달이 아닌 경우 메세지 출력 [data-maxDate="_elementId"]
     * 
     * @param _data
     */
    var __matchMonth = function(_elementId)
    {
        var objErr = new Object();
        objErr.elementId = _elementId;
        objErr.errMsg = '시작일과 종료일은 동일한 달이어야 합니다.';
        
        commUtil.alertMsg(objErr.errMsg);
        
        return;
    };
    
    /**
     * 일 달력
     * 
     * @param _elementId
     */
    var __datepicker = function(_elementId)
    {
        // minDate = 오늘 날짜에서 가감
        // ex) 60일전 : D-60
        // maxDate = 최대일은 오늘까지
        var minDate = _elementId.data('mindate');
        var maxDate = "";
        var initDate = _elementId.data('initdate');
        var dateLink = _elementId.data('datelink');
        var autoamount = _elementId.data("autoamount");
        if(autoamount == undefined)
        {
            autoamount = "Y";
        }
        var bCase = /[-+]/.test(minDate);
        
        if(minDate != undefined && bCase)
        {
            minDate = dateUtil.getDate(minDate, dateUtil.getDate());
        }
        else
        {
            minDate = "";
        }
        
        if(!commUtil.isEmpty(initDate))
        {
            initDate = initDate.toUpperCase();
        }
        
        if(initDate == "FIRST")
        {
            if(autoamount == "Y")
            {
                maxDate = dateUtil.getDate();
            }
        }
        else
        {
            if(dateLink != undefined)
            {
                minDate = $("#" + dateLink).val().replace(/(\,|\.|\-|\/|\:)/g, "");
                if(autoamount == "Y")
                {
                    // maxDate = dateUtil.getDate(__amount, minDate);
                    maxDate = dateUtil.getDate("D+" + (parseInt(dateUtil.getLastDay(minDate)) - 1), minDate);
                }
            }
        }
        
        var datepicker_options = {
        dateFormat : "yymmdd",
        showOn : "both",
        // buttonImage : "/resources/images/common/icon_calendar.gif",
        // buttonImageOnly : true,
        // buttonText : '',
        minDate : minDate,
        maxDate : maxDate,
        yearRange : "c-2:c+2",
        shortYearCutoff : "+3",
        changeYear : true,
        changeMonth : true,
        showOtherMonths : true,
        selectOtherMonths : true,
        dayNamesMin : ["일", "월", "화", "수", "목", "금", "토"],
        monthNamesShort : ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        onSelect : function()
        {
            var selDate = $(this).val();
            $(this).val(__convertDate(selDate));
            
            // [2014-05-13][hwan lee] 날짜 선택시 연결된 달력의 min. max 값 자동 설정 부분 추가
            var initDate = $(this).data('initdate');
            var dateLink = $(this).data('datelink');
            
            if(!commUtil.isEmpty(initDate))
            {
                initDate = initDate.toUpperCase();
            }
            
            if(dateLink != undefined && initDate == "FIRST")
            {
                var autoamount = $("#" + dateLink).data("autoamount");
                if(autoamount == undefined)
                {
                    autoamount = "Y";
                }
                var tarDate = $("#" + dateLink).val().replace(/(\,|\.|\-|\/|\:)/g, "");
                var nowDate = dateUtil.getNowDate();
                var minDate = selDate;
                var maxDate = dateUtil.getDate("D+" + (parseInt(dateUtil.getLastDay(minDate)) - 1), minDate);
                // var maxDate = minDate.substr(0,6) + "" +
                // dateUtil.getLastDay(minDate);
                
                // 대상의 날짜가 최대 날짜보다 크다면 변경
                if(nowDate > maxDate)
                {
                    nowDate = maxDate;
                }
                // 대상의 날짜가 선택한 날짜보다 작다면 변경
                if(selDate > nowDate)
                {
                    nowDate = selDate;
                }
                
                $("#" + dateLink).datepicker("option", "minDate", minDate);
                if(autoamount == "Y")
                {
                    $("#" + dateLink).datepicker("option", "maxDate", maxDate);
                    $("#" + dateLink).val(__convertDate(nowDate));
                }
                else
                {
                    $("#" + dateLink).datepicker("option", "maxDate", "");
                    if(tarDate < minDate)
                    {
                        tarDate = minDate;
                    }
                    $("#" + dateLink).val(__convertDate(tarDate));
                }
                
                $("#" + dateLink).attr("data-prev-date", $("#" + dateLink).val().replace(/(\,|\.|\-|\/|\:)/g, ""));
            }
        },
        onClose : function()
        {
            var flag = isValidMinMaxDate(_elementId, "day");
            if(flag)
            {
                _elementId.attr("data-prev-date", _elementId.val().replace(/(\,|\.|\-|\/|\:)/g, ""));
            }
            
            return flag;
        }
        };
        
        _elementId.datepicker(datepicker_options);
    };
    
    /**
     * 월 달력
     * 
     * @param _elementId
     */
    var __monthpicker = function(_elementId)
    {
        var monthpicker_option = {
        dateFormat : "yy-mm",
        showOn : "both",
        // buttonImage : "/resources/images/common/icon_calendar.gif",
        // buttonImageOnly : true,
        // buttonText : '',
        yearRange : "c-5:c+10",
        shortYearCutoff : "+3",
        monthNamesShort : ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        onClose : function()
        {
            return isValidMinMaxDate(_elementId, "month");
        }
        };
        
        _elementId.monthpicker(monthpicker_option);
    };
    
    __setDtpicker(_elementId);
};
