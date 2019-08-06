package com.jsion.dao;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class JsionDaoImp implements JsionDao  {

	@Resource(name = "sqlSession")
    private SqlSession sqlSession;
	
	// 로그인검증
	public String getLogCk(Map<String, String> map) {
		return (String) sqlSession.selectOne("jsion.getLogCk", map);
	}
	
	public Map<String, Object> getJsionInfoMpa(Map<String, String> map) {
		return (Map<String, Object>) sqlSession.selectOne("jsion.getJsionInfoMpa", map);
	}
	
	public List<Map<String, Object>> getJsionInfoList(Map<String, String> map)  {
		return (ArrayList) sqlSession.selectList("jsion.getJsionInfoList", map);
	}
}
