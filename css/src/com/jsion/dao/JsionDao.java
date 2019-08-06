package com.jsion.dao;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;


public interface JsionDao   {

	public String getLogCk(Map<String, String> map)  throws Exception;
	
	public Map<String, Object> getJsionInfoMpa(Map<String, String> map)   throws Exception;
	
	public List<Map<String, Object>>  getJsionInfoList(Map<String, String> map)   throws Exception;
}
