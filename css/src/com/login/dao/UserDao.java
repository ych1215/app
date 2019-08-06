package com.login.dao;

import java.util.ArrayList;
import java.util.Map;


public interface UserDao   {

	public ArrayList geta(Map<String, String> map) throws Exception;
	
	public String getLogCk(Map<String, String> map) throws Exception;
	
	public Map<String, Object> getUserInfoMap(Map<String, String> map) throws Exception;
	
	public ArrayList getUserInfoList(Map<String, String> map)  throws Exception;
	
	public String getUserId(Map<String, String> map) throws Exception;
	
	public int setUser(Map<String, String> map) throws Exception;
	
	public int setUser2(Map<String, String> map) throws Exception;
	
	public int upateUser(Map<String, String> map) throws Exception;
	
	public int delUser(Map<String, String> map) throws Exception;
	
}
