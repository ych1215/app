/**
 * @class 일자관련 함수
 */
var dateUtil = function()
{
};
/**
 * @param _date :
 *            일자형태 20120101 , 2012-01-01
 */
dateUtil.isValidDate = function(_date)
{
    // 입력된 Date 를 숫자만 남김
    _date = _date.replace(/\D/g, "");
    
    // 입력된 글자수가 8자 이하 일경우 오류
    if(_date.length != 8)
    {
        return false;
    }
    
    var nYear = Number(_date.substring(0, 4));
    var nMonth = Number(_date.substring(4, 6));
    var nDate = Number(_date.substring(6));
    
    // 유효일자 체크
    var date = new Date(nYear, nMonth - 1, nDate);
    
    if((date.getFullYear() != nYear) || (date.getMonth() + 1 != nMonth) || (date.getDate() != nDate))
    {
        return false;
    }
    return true;
};

/**
 * 월의마지막 일자 가져오기
 * 
 * @param _date :
 *            YYYY-MM-DD
 */
dateUtil.getLastDay = function(_date)
{
    var dateVal = _date.replace(/(\,|\.|\-|\/|\:)/g, "");
    
    var year = dateVal.toString().substring(0, 4);
    var month = Number(dateVal.toString().substring(4, 6)) - 1;
    
    if(dateVal.length != 8)
    {
        console.error('날짜 타입 오류!!');
        return false;
    }
    
    var is_leapYear = false;
    if((((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)))
    {
        is_leapYear = true;
    }
    
    return [31, (is_leapYear ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};

dateUtil.getDate = function(_diff, _date)
{
    var year = '';
    var month = '';
    var day = '';
    var date = null;
    
    if(_date == undefined)
    {
        date = dateUtil.getObjDate();
    }
    else
    {
        date = dateUtil.getObjDate(_date);
    }
    
    if(_diff == undefined)
    {
        _diff = "x+0";
    }
    
    var DateType = _diff.substring(0, 1).toUpperCase();
    var DateDiff = Number(_diff.substring(1));
    
    switch(DateType)
    {
        case "D": // 일
            year = date.getFullYear();
            month = date.getMonth();
            day = date.getDate() + DateDiff;
            break;
        
        case "M": // 월
            year = date.getFullYear();
            month = (date.getMonth() + DateDiff);
            day = date.getDate();
            break;
        
        case "Y": // 년
            year = date.getFullYear() + DateDiff;
            month = date.getMonth();
            day = date.getDate();
            break;
        
        default:
            year = date.getFullYear();
            month = date.getMonth();
            day = date.getDate();
            break;
    }
    var objDate = dateUtil.getObjDate(year, month, day);
    
    var retValue = commUtil.packValue(objDate.getFullYear(), 4, '0') + commUtil.packValue(objDate.getMonth() + 1, 2, '0') + commUtil.packValue(objDate.getDate(), 2, '0');
    
    return retValue;
};

/**
 * 현재 날짜 정보를 가져오기 위한 함수
 * 
 * @author hwan lee
 * @since 2014. 5. 15.
 * @param _format
 *            YYYY : 연 <BR>
 *            YYYYMM : 연월 <BR>
 *            YYYYMMDD : 연월일 (default) <BR>
 *            YYYYMMDDHH : 연월일시 <BR>
 *            YYYYMMDDHHMM : 연월일시분 <BR>
 *            YYYYMMDDHHMMSS : 연월일시분초
 * @returns
 */
dateUtil.getNowDate = function(_format, _prefix)
{
    if(_format == undefined)
    {
        _format = "YYYYMMDD";
    }
    
    if(_prefix == undefined)
    {
        _prefix = "";
    }
    
    var _suffix = "";
    var _timefix = "";
    if(_prefix != "")
    {
        _suffix = " ";
        _timefix = ":";
    }
    
    var date = new Date();
    var year = date.getFullYear();
    var month = stringUtil.LPad((date.getMonth() + 1).toString(), "2", "0");
    var day = stringUtil.LPad(date.getDate().toString(), "2", "0");
    var hour = stringUtil.LPad(date.getHours().toString(), "2", "0");
    var min = stringUtil.LPad(date.getMinutes().toString(), "2", "0");
    var sec = stringUtil.LPad(date.getSeconds().toString(), "2", "0");
    
    _format = _format.toUpperCase();
    
    if("YYYY" == _format)
    {
        return year;
    }
    else if("YYYYMM" == _format)
    {
        return year + _prefix + month;
    }
    else if("YYYYMMDD" == _format)
    {
        return year + _prefix + month + _prefix + day;
    }
    else if("YYYYMMDDHH" == _format)
    {
        return year + _prefix + month + _prefix + day + _suffix + hour;
    }
    else if("YYYYMMDDHHMM" == _format)
    {
        return year + _prefix + month + _prefix + day + _suffix + hour + _timefix + min;
    }
    else if("YYYYMMDDHHMMSS" == _format)
    {
        return year + _prefix + month + _prefix + day + _suffix + hour + _timefix + min + _timefix + sec;
    }
};

/**
 * 지정한 날짜의 Date Object 객체 가져오기
 * 
 * @param strYYYYMMDD
 *            날짜 문자열
 */
dateUtil.getObjDate = function()
{
    var retValue = null;
    var cntArg = arguments.length;
    
    if(cntArg == 0)
    {
        return new Date();
    }
    else if(cntArg == 1)
    {
        var _strYYYYMMDD = arguments[0].replace(/(\,|\.|\-|\/|\:)/g, "");
        
        if(_strYYYYMMDD.length == 8)
        {
            var strYear = _strYYYYMMDD.substring(0, 4);
            var strMonth = _strYYYYMMDD.substring(4, 6) - 1;
            var strDay = _strYYYYMMDD.substring(6, 8);
            
            retValue = new Date(strYear, strMonth, strDay);
        }
    }
    else if(cntArg == 3)
    {
        return new Date(arguments[0], arguments[1], arguments[2]);
    }
    return retValue;
};

dateUtil.getFirstDate = function(_diff, _date)
{
    var date = dateUtil.getDate(_diff, _date);
    
    return date.substring(0, 6) + '01';
};

dateUtil.getLastDate = function(_diff, _date)
{
    var date = dateUtil.getDate(_diff, _date);
    
    return date.substring(0, 6) + dateUtil.getLastDay(date);
};
/**
 * 해당 년월 세팅
 * 
 * @param _elementID :
 *            월표시앨리먼트
 */
dateUtil.getThisMonth = function()
{
    var date = dateUtil.getDate();
    
    return date.substring(0, 6);
};

/**
 * 해당 년월 세팅
 * 
 * @param _elementID :
 *            월표시앨리먼트일자 차이 FromDate,ToDate,Diff Month: 1 1개월 2개월 ... 1개월은 무조건
 *            31일로 함...
 */
dateUtil.isValidDiffDate = function(_fromDate, _toDate, _diffMonth)
{
    var fromDate = _fromDate.val();
    var toDate = _toDate.val();
    
    if(dateUtil.isValidDate(fromDate) && dateUtil.isValidDate(toDate))
    {
        fromDate = dateUtil.getObjDate(fromDate);
        toDate = dateUtil.getObjDate(toDate);
        
        var dateDiff = Math.abs(toDate - fromDate) / (1000 * 60 * 60 * 24);
        
        if(!_diffMonth)
        {
            _diffMonth = 1;
        }
        
        if(Number(dateDiff) * Number(_diffMonth) > 31 * Number(_diffMonth))
        {
            var ErrObj = new Object();
            ErrObj.errMsg = "검색조건이 " + diffMonth + "개월 이상 차이가 납니다.<BR>" + _diffMonth + "개월 이내로 입력하세요";
            ErrObj.elementID = sDate;
            CommLib_alertMsg.setErrorMsg(ErrObj);
            
            return false;
        }
    }
    else
    {
        var ErrObj = new Object();
        ErrObj.errMsg = '일자가 유효하지 않습니다.';
        ErrObj.elementID = sDate;
        CommLib_alertMsg.setErrorMsg(ErrObj);
        
        return false;
    }
    
    return true;
};

/**
 * 일자포멧변경.... return IF [6자리,8자리] --> YYYY-MM-DD ELSE 입력된값 그대로
 */
dateUtil.formatDate = function(_date, _format, _prefix)
{
    if(_prefix == undefined)
    {
        _prefix = "-";
    }
    
    var retStrDate = $.trim(_date.replace(/(\,|\.|\-|\/|\:)/g, ""));
    switch(retStrDate.length)
    {
        case 6:
            if(_format == "YYMMDD")
            {
                retStrDate = '20' + retStrDate;
            }
            else
            {
                retStrDate = retStrDate.substring(0, 4) + _prefix + retStrDate.substring(4, 6);
            }
            break;
        case 8:
            retStrDate = retStrDate.substring(0, 4) + _prefix + retStrDate.substring(4, 6) + _prefix + retStrDate.substring(6);
            break;
        case 14:
            retStrDate = retStrDate.substring(0, 4) + _prefix + retStrDate.substring(4, 6) + _prefix + retStrDate.substring(6, 8) + " " + retStrDate.substring(8, 10) + ":" + retStrDate
                    .substring(10, 12) + ":" + retStrDate.substring(12);
            break;
        default:
            retStrDate = _date;
            break;
    }
    return retStrDate;
};

dateUtil.formatMonth = function(_date)
{
    var retStrDate = $.trim(_date.replace(/(\,|\.|\-|\/|\:)/g, ""));
    
    switch(retStrDate.length)
    {
        case 6:
        case 8:
            retStrDate = retStrDate.substring(0, 4) + '-' + retStrDate.substring(4, 6);
            break;
        
        default:
            retStrDate = _date;
            break;
    }
    return retStrDate;
};

/**
 * _yyyymmdd : 20120101 or 2012-01-01
 */
dateUtil.getAddDay = function(_yyyymmdd, _addDay)
{
    var date = _yyyymmdd.replace(/\D/g, "");
    
    var yy = parseInt(date.substr(0, 4));
    var mm = parseInt(date.substr(4, 2));
    var dd = parseInt(date.substr(6, 2));
    
    var newDay = new Date(yy, mm - 1, dd + _addDay);
    
    yy = newDay.getFullYear();
    mm = newDay.getMonth() + 1;
    mm = (mm < 10) ? '0' + mm : mm;
    dd = newDay.getDate();
    dd = (dd < 10) ? '0' + dd : dd;
    
    if(!dateUtil.isValidDate(yy + '' + mm + '' + dd))
    {
        return '';
    }
    
    return(yy + '' + mm + '' + dd);
};

/**
 * 기준 시간에서 초단위로 가감
 * 
 * @param _yyyymmddhhmmss :
 *            20120101000000
 */
dateUtil.getAddTime = function(_yyyymmddhhmmss, _addTime)
{
    var date = _yyyymmddhhmmss.replace(/\D/g, "");
    
    var yy = parseInt(date.substr(0, 4));
    var mm = parseInt(date.substr(4, 2));
    var dd = parseInt(date.substr(6, 2));
    var hh = parseInt(date.substr(8, 2));
    var mi = parseInt(date.substr(10, 2));
    var ss = parseInt(date.substr(12, 2));
    
    var newTime = new Date(yy, mm - 1, dd, hh, mi, ss + _addTime);
    
    yy = newTime.getFullYear();
    mm = newTime.getMonth() + 1;
    mm = (mm < 10) ? '0' + mm : mm;
    dd = newTime.getDate();
    dd = (dd < 10) ? '0' + dd : dd;
    hh = newTime.getHours();
    hh = (hh < 10) ? '0' + hh : hh;
    mi = newTime.getMinutes();
    mi = (mi < 10) ? '0' + mi : mi;
    ss = newTime.getSeconds();
    ss = (ss < 10) ? '0' + ss : ss;
    
    if(!dateUtil.isValidDate(yy + '' + mm + '' + dd))
    {
        return '';
    }
    
    return(yy + '' + mm + '' + dd + '' + hh + '' + mi + '' + ss);
};

dateUtil.getDiffTime = function(_from, _to, _type)
{
    var sDate = _from.replace(/\D/g, "");
    var eDate = _to.replace(/\D/g, "");
    
    var s_yy = 0;
    var s_mm = 0;
    var s_dd = 0;
    var s_hh = 0;
    var s_mi = 0;
    var s_ss = 0;
    var e_yy = 0;
    var e_mm = 0;
    var e_dd = 0;
    var e_hh = 0;
    var e_mi = 0;
    var e_ss = 0;
    
    if(eDate.length == 8)
    {
        s_yy = parseInt(sDate.substr(0, 4));
        s_mm = parseInt(sDate.substr(4, 2));
        s_dd = parseInt(sDate.substr(6, 2));
        
        e_yy = parseInt(eDate.substr(0, 4));
        e_mm = parseInt(eDate.substr(4, 2));
        e_dd = parseInt(eDate.substr(6, 2));
    }
    else if(eDate.length == 10)
    {
        s_yy = parseInt(sDate.substr(0, 4));
        s_mm = parseInt(sDate.substr(4, 2));
        s_dd = parseInt(sDate.substr(6, 2));
        s_hh = parseInt(sDate.substr(8, 2));
        
        e_yy = parseInt(eDate.substr(0, 4));
        e_mm = parseInt(eDate.substr(4, 2));
        e_dd = parseInt(eDate.substr(6, 2));
        e_hh = parseInt(eDate.substr(8, 2));
    }
    else if(eDate.length == 12)
    {
        s_yy = parseInt(sDate.substr(0, 4));
        s_mm = parseInt(sDate.substr(4, 2));
        s_dd = parseInt(sDate.substr(6, 2));
        s_hh = parseInt(sDate.substr(8, 2));
        s_mi = parseInt(sDate.substr(10, 2));
        
        e_yy = parseInt(eDate.substr(0, 4));
        e_mm = parseInt(eDate.substr(4, 2));
        e_dd = parseInt(eDate.substr(6, 2));
        e_hh = parseInt(eDate.substr(8, 2));
        e_mi = parseInt(eDate.substr(10, 2));
    }
    else if(eDate.length == 14)
    {
        s_yy = parseInt(sDate.substr(0, 4));
        s_mm = parseInt(sDate.substr(4, 2));
        s_dd = parseInt(sDate.substr(6, 2));
        s_hh = parseInt(sDate.substr(8, 2));
        s_mi = parseInt(sDate.substr(10, 2));
        s_ss = parseInt(sDate.substr(12, 2));
        
        e_yy = parseInt(eDate.substr(0, 4));
        e_mm = parseInt(eDate.substr(4, 2));
        e_dd = parseInt(eDate.substr(6, 2));
        e_hh = parseInt(eDate.substr(8, 2));
        e_mi = parseInt(eDate.substr(10, 2));
        e_ss = parseInt(eDate.substr(12, 2));
    }
    
    var from_dt = new Date(s_yy, s_mm, s_dd, s_hh, s_mi, s_ss);
    var end_dt = new Date(e_yy, e_mm, e_dd, e_hh, e_mi, e_ss);
    
    var diff_dt = (end_dt.getTime() - from_dt.getTime());
    
    if(_type == undefined)
    {
        _type = "DAY";
    }
    _type = _type.toUpperCase();
    
    if(_type == "SEC")
    {
        diff_dt = diff_dt / 1000;
    }
    else if(_type == "MIN")
    {
        diff_dt = diff_dt / 1000 / 60;
    }
    else if(_type == "HOUR")
    {
        diff_dt = diff_dt / 1000 / 60 / 60;
    }
    else if(_type == "DAY")
    {
        diff_dt = diff_dt / 1000 / 60 / 60 / 24;
    }
    
    return diff_dt;
};
