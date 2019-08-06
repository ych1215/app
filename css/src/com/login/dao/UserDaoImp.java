package com.login.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDaoImp implements UserDao  {

	@Resource(name = "sqlSession")
    private SqlSession sqlSession;
	
	public ArrayList geta(Map<String, String> map) {
		return (ArrayList)sqlSession.selectList("user.getList", map);
	}
	
	// 로그인검증
	public String getLogCk(Map<String, String> map) {
		return (String) sqlSession.selectOne("user.getLogCk", map);
	}
	
	public Map<String, Object> getUserInfoMap(Map<String, String> map) {
		return (Map<String, Object>) sqlSession.selectOne("user.getUserInfoMap", map);
	}
	
	public ArrayList getUserInfoList(Map<String, String> map)  {
		return (ArrayList) sqlSession.selectList("user.getUserInfoList", map);
	}
	
	public String getUserId(Map<String, String> map)  {
		return (String) sqlSession.selectOne("user.getUser", map);
	}
	
	public int setUser(Map<String, String> map) {
		return (Integer) sqlSession.update("user.setUser",map);
	}
	
	public int setUser2(Map<String, String> map){
		return (Integer) sqlSession.update("user.setUser2",map);
	}
	
	public int upateUser(Map<String, String> map) {
		return (Integer) sqlSession.update("user.upateUser",map);
	}
	
	public int delUser(Map<String, String> map) {
		return (Integer) sqlSession.update("user.delUser",map);
	}
	
}
