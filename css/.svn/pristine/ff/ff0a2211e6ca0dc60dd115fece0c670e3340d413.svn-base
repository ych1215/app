package com.login.biz;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.apache.log4j.Logger;

import com.login.dao.UserDao;


@Repository
public class UserBizImp  implements UserBiz{

	@SuppressWarnings("unused")
	private Logger logger = Logger.getLogger(getClass());

	@Autowired
	public UserDao dao;

	// 로그인 검증
	public String getLogCk(Map<String, String> map) throws Exception {
		return  (String) dao.getLogCk(map);
	}
	
	// 사용자 정보 조회
	public Map<String, Object> getUserInfoMpa(Map<String, String> map) throws Exception {
	    Map<String, Object> userInfoMap = (Map<String, Object>) dao.getUserInfoMap(map);
		return userInfoMap;
	}
	
	public List<Map<String, Object>> getUserInfoList(Map<String, String> map) throws Exception {
		ArrayList name = (ArrayList) dao.getUserInfoList(map);
		return name;
	}
	
	public List<Map<String, Object>> geta(Map<String, String> map) throws Exception {
		ArrayList name = (ArrayList) dao.getUserInfoList(map);
		return name;
	}
	
	public String getUserId(Map<String, String> map) throws Exception {
		String isUserId = (String) dao.getUserId(map);
		return isUserId;
	}
	
	
	public int setUser(Map<String, String> map) throws Exception{
		int s = dao.setUser(map);
		return s;
	}
	
	public int upateUser(Map<String, String> map) throws Exception{
		int s = dao.upateUser(map);
		return s;
	}
	
	public int delUser(Map<String, String> map) throws Exception{
		int s = dao.delUser(map);
		return s;
	}
	
}
