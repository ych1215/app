package com.login.biz;

import java.util.List;
import java.util.Map;


public interface UserBiz {

	// �α��� ����
	public String getLogCk(Map<String, String> map)  throws Exception;
	
	// ����� ���� ��ȸ
	public Map<String, Object> getUserInfoMpa(Map<String, String> map)  throws Exception;
	
	public List<Map<String, Object>> getUserInfoList(Map<String, String> map)  throws Exception;
	
	public List<Map<String, Object>> geta(Map<String, String> map) throws Exception;
	
	public String getUserId(Map<String, String> map) throws Exception;
	
	public int setUser(Map<String, String> map) throws Exception;
	
	public int upateUser(Map<String, String> map) throws Exception;
	
	public int delUser(Map<String, String> map) throws Exception; 
	
}
