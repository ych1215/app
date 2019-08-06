package com.jsion.biz;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.apache.log4j.Logger;

import com.jsion.dao.JsionDao;
import com.login.dao.UserDao;


@Repository
public class JsionBizImp  implements JsionBiz{

	@SuppressWarnings("unused")
	private Logger logger = Logger.getLogger(getClass());

	@Autowired
	public JsionDao dao;

	// 로그인 검증
	public String getLogCk(Map<String, String> map) throws Exception {
		return  (String) dao.getLogCk(map);
	}
	
	public Map<String, Object> getJsionInfoMpa(Map<String, String> map) throws Exception {
	    Map<String, Object> jsionInfoMap = (Map<String, Object>) dao.getJsionInfoMpa(map);
		return jsionInfoMap;
	}
	
	public List<Map<String, Object>> getJsionInfoList(Map<String, String> map) throws Exception {
		ArrayList name = (ArrayList) dao.getJsionInfoList(map);
		return name;
	}
	
	
}
