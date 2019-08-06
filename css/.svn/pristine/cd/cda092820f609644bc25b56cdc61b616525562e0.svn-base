package com.file.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class FileDaoImp implements FileDao  {

	@Resource(name = "sqlSession")
    private SqlSession sqlSession;
	
	public String saveFile(Map<String, String> map) {
		return (String) sqlSession.selectOne("file.saveFile", map);
	}
	
}
