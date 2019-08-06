/**
 * @class 문자관련 함수
 */
var stringUtil = function()
{
};

/**
 * 입력받은 문자 왼쪽에 문자 길이를 재외한만큼 채움
 * 
 * @author hwan lee
 * @since 2014. 5. 15.
 * @param _str
 * @param _len
 * @param _pad
 * @returns
 */
stringUtil.LPad = function(_str, _len, _pad)
{
    var result = _str;
    var tempLen = parseInt(_len) - parseInt(_str.length);
    
    for( var i = 0; i < tempLen; i++)
    {
        result = _pad + result;
    }
    
    return result;
};

/**
 * 입력받은 문자 오른쪽에 문자 길이를 재외한만큼 채움
 * 
 * @author hwan lee
 * @since 2014. 5. 15.
 * @param _str
 * @param _len
 * @param _pad
 * @returns
 */
stringUtil.RPad = function(_str, _len, _pad)
{
    var result = _str;
    var tempLen = parseInt(_len) - result.length;
    
    for( var i = 0; i < tempLen; i++)
    {
        result = result + _pad;
    }
    
    return result;
};

/**
 * 입력받은 문자열이 숫자인지 아닌지 여부 체크
 * 
 * @author socuser219
 * @since 2014. 5. 20.
 * @param _str
 * @returns {Boolean}
 */
stringUtil.isNumber = function(_str)
{
    _str += '';
    _str = _str.replace(/^\s*|\s*$/g, '');
    
    if(_str == '' || isNaN(_str))
    {
        return false;
    }
    
    return true;
};
