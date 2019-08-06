var g_isDebugMode = true;
/**
 * @class 디버거
 */
debugUtil = function()
{
};

/**
 * 
 */
debugUtil.log = function()
{
    if(g_isDebugMode == false)
        return;
    console.log(arguments);
};

/**
 * 
 */
debugUtil.warn = function()
{
    if(g_isDebugMode == false)
        return;
    console.warn(arguments);
};

/**
 * 
 */
debugUtil.error = function()
{
    if(g_isDebugMode == false)
        return;
    console.error(arguments);
};

/**
 * 
 */
debugUtil.trace = function()
{
    if(g_isDebugMode == false)
        return;
    console.trace();
};