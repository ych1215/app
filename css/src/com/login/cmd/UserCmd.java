package com.login.cmd;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.login.biz.UserBiz;

@Controller
public class UserCmd {

	@Autowired 
	public UserBiz biz;
	
	private Logger logger = Logger.getLogger(getClass());
	
    // 로그인 검증
	@RequestMapping("/cklog")
	public ModelAndView ckLog(HttpServletRequest request, HttpSession session, @RequestParam Map<String, String> params) throws Exception {
		
		ModelAndView mnv = new ModelAndView();
		
		logger.info("YCH_ckLog" + request.getParameter("USER_ID"));
		
		String logCkYn = "N";
		logCkYn = biz.getLogCk(params);
		
		if (logCkYn != null) {
			logCkYn = "Y";
		}

		mnv.addObject("lgoCk", logCkYn);
		mnv.setViewName("/jsp/cklog.jsp");
		
		return mnv;
	}
	
	// 로그인 처리
	@RequestMapping("/cust/main")
	public ModelAndView login(String id, String pw ,HttpServletRequest request, HttpSession session, @RequestParam Map<String, String> params) throws Exception {
		
		ModelAndView mnv = new ModelAndView();
		Map<String, Object> userInfoMap = new HashMap<String, Object>();
		List<Map<String, Object>> userInfoList = new ArrayList<Map<String, Object>>();
		
		logger.info("YCH_login" + request.getParameter("USER_ID"));
		 
		userInfoMap = biz.getUserInfoMpa(params);
	    userInfoList = biz.getUserInfoList(params);
	    
		mnv.addObject("userMap", userInfoMap);
		mnv.addObject("userList", userInfoList);
		
		setSession(userInfoMap, session);
		
		mnv.setViewName("/jsp/main.jsp");
		
		return mnv;
	}
	
	// 사용자 등록
	@RequestMapping("/regist")
	@Transactional(rollbackFor=Exception.class)
	public ModelAndView regist(String id, String pw ,HttpServletRequest request, HttpSession session, @RequestParam Map<String, String> params) throws Exception{
		
		ModelAndView mnv = new ModelAndView();
		Map<String, Object> userInfoMap = new HashMap<String, Object>();
		String reistMsg = "";
		String url = "/main";
		 
		// 기 등록 사용자 ID조회
		String userId =  biz.getUserId(params);
		
		if (userId == null) {
			// 사용자 등록
			int cnt = biz.setUser(params);
			logger.info("저장건수: ====>>" + cnt);
			userInfoMap = biz.getUserInfoMpa(params);
			mnv.addObject("userMap", userInfoMap);
			setSession(userInfoMap, session);
			
		} else {
			reistMsg = "기 등록된ID 입니다.다른 ID로 등록하세요";
			url = "/regist";
		}
		
		mnv.setViewName(url);
		
		return mnv;
	}
	
	// 세션등록
	public void setSession(Map<String, Object> userInfoMap, HttpSession session) {
		
		session.setMaxInactiveInterval(-1); // 창을 닫을때까지 세션 유지.
	    session.setAttribute("USER_ID",userInfoMap.get("USER_ID"));
	    session.setAttribute("USER_NM",userInfoMap.get("USER_NM"));
	}
	
	
	//////////////////////////////////
	
	// 회원등록 뷰 페이지
	@RequestMapping("/cust/cust_rgst")
	public ModelAndView cust_rgst(String id, String pw ,HttpServletRequest request, HttpSession session, @RequestParam Map<String, String> params) throws Exception {
		
		logger.info("회원등록!!!!!!!!!!!!");
		
		ModelAndView mnv = new ModelAndView();
		mnv.setViewName("/jsp/cust/cust_rgst.jsp");
		
		return mnv;
	}
	
	// 고객 등록
	@RequestMapping("/cust/cust_save")
	@Transactional(rollbackFor = Exception.class)
	public ModelAndView cust_save(String id, String pw,
			HttpServletRequest request, HttpSession session,
			@RequestParam Map<String, String> params) throws Exception {

		ModelAndView mnv = new ModelAndView();
		Map<String, Object> userInfoMap = new HashMap<String, Object>();

		int cnt = biz.setUser(params);
		
		if (cnt > 0) {
			logger.info("등록 성공 oooooooooooooooo");
		} else {
			logger.info("등로 유류  xxxxxxxxxxxxxxxx");
		}
		
		mnv.setViewName("/jsp/cust/cust_rgst.jsp");

		return mnv;
	}	
	
	// 고객 수정
	@RequestMapping("/cust/cust_update")
	@Transactional(rollbackFor = Exception.class)
	public ModelAndView cust_update(String id, String pw,
			HttpServletRequest request, HttpSession session,
			@RequestParam Map<String, String> params) throws Exception {

		ModelAndView mnv = new ModelAndView();
		Map<String, Object> userInfoMap = new HashMap<String, Object>();

		int cnt = biz.upateUser(params);
		
		if (cnt > 0) {
			logger.info("수정 성공 oooooooooooooooo");
		} else {
			logger.info("수정 유류  xxxxxxxxxxxxxxxx");
		}
		
		mnv.setViewName("/jsp/cust/cust_rgst.jsp");

		return mnv;
	}
	
	// 고객 삭제
	@RequestMapping("/cust/cust_del")
	@Transactional(rollbackFor = Exception.class)
	public ModelAndView cust_del(String id, String pw,
			HttpServletRequest request, HttpSession session,
			@RequestParam Map<String, String> params) throws Exception {

		ModelAndView mnv = new ModelAndView();
		Map<String, Object> userInfoMap = new HashMap<String, Object>();

		int cnt = biz.delUser(params);
		
		if (cnt > 0) {
			logger.info("삭제 성공 oooooooooooooooo");
		} else {
			logger.info("삭제 유류  xxxxxxxxxxxxxxxx");
		}
		
		mnv.setViewName("/jsp/cust/cust_rgst.jsp");

		return mnv;
	}
	
}

	