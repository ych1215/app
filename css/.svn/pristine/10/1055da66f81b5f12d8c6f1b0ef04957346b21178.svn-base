package com.file.cmd;

import java.io.File;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.sf.json.JSONObject;

import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.file.biz.FileBiz;
import com.login.biz.UserBiz;

@Controller
public class FileCmd {

	@Autowired 
	public FileBiz biz;
	
	private Logger logger = Logger.getLogger(getClass());
	
    // 로그인 검증
	@RequestMapping("/file/fileup")
	public ModelAndView ckLog(HttpServletRequest request, HttpSession session, @RequestParam Map<String, String> params) throws Exception {
		
		ModelAndView mnv = new ModelAndView();
		
		logger.info("fileup....");
		
		String logCkYn = "N";
		//logCkYn = biz.getLogCk(params);
		mnv.setViewName("/jsp/file/fileup.jsp");
		
		return mnv;
	}
	
	
    // 파일 업로드 
	@RequestMapping("/file/fileupsave")
	public ModelAndView fileupsave(MultipartHttpServletRequest mRequest, HttpServletRequest request, HttpSession session, @RequestParam Map<String, String> params) throws Exception {
		
		ModelAndView mnv = new ModelAndView();
		
		logger.info("fileup....save");
		
		logger.info("YCH_ckLog" + request.getParameter("USER_ID"));
		logger.info("user_id: " + mRequest.getParameter("USER_ID"));
		
		String logCkYn = "N";
		logCkYn = biz.saveFile(params, mRequest);
		mnv.setViewName("/jsp/file/fileup.jsp");
		
		return mnv;
	}
	
    // jquery 파일 업로드
	@RequestMapping("/ajxfile/fileupsave.do")
	@ResponseBody
	public String saveajxFile(MultipartHttpServletRequest mRequest, HttpServletRequest request, HttpSession session, @RequestParam Map<String, String> params) throws Exception {
		
		ModelAndView mnv = new ModelAndView();
		
		logger.info("fileup....save");
		
		logger.info("YCH_ckLog" + request.getParameter("USER_ID"));
		logger.info("user_id: " + mRequest.getParameter("USER_ID"));
		
		
		logger.info("USER_ID2" + request.getParameter("USER_ID2"));
		
		
		
		String logCkYn = "N";
		logCkYn = biz.saveFile(params, mRequest);
		
		String retValue3 = "{xxxxx:777777}";
        retValue3 = String.valueOf(JSONObject.fromObject(retValue3));  
		
		
		return retValue3;
	}
	
	
    // 파일 다운로드
	@RequestMapping("/file/downFile.do")
	@ResponseBody
	public String downFile(HttpServletResponse response , HttpServletRequest request, HttpSession session, @RequestParam Map<String, String> params) throws Exception {
		
		ModelAndView mnv = new ModelAndView();
		
		logger.info("fileup....down");
		
		logger.info("YCH_ckLog" + request.getParameter("USER_ID"));
		
		    String storedFileName = "C_2016.03.25.txt";
		    String originalFileName = "C_2016.03.25.txt";
		     
		    byte fileByte[] = FileUtils.readFileToByteArray(new File("F:\\file\\"+storedFileName));
		    
		    // 파일이 실제 존재하는지 파일 삭제 처럼 체크 필요.
		     
		    response.setContentType("application/octet-stream");
		    response.setContentLength(fileByte.length);
		    response.setHeader("Content-Disposition", "attachment; fileName=\"" + URLEncoder.encode(originalFileName,"UTF-8")+"\";");
		    response.setHeader("Content-Transfer-Encoding", "binary");
		    response.getOutputStream().write(fileByte);
		     
		    response.getOutputStream().flush();
		    response.getOutputStream().close();
		
		
		
		String retValue3 = "{xxxxx:777777}";
        retValue3 = String.valueOf(JSONObject.fromObject(retValue3));  
		
		
		return retValue3;
	}
	
	
	// 파일 삭제
	@RequestMapping("/file/delFile.do")
	@ResponseBody
	public ModelAndView delFile(HttpServletRequest request, HttpSession session, @RequestParam Map<String, String> params) throws Exception {

		ModelAndView mnv = new ModelAndView();

		String s = "F:\\file\\C_2016.03.25.txt";
		File f = new File(s);

		if (f.exists()) {
			if (f.delete()) {
				System.out.println("파일 또는 디렉토리를 성공적으로 지웠습니다: " + s);
			} else {
				System.err.println("파일 또는 디렉토리 지우기 실패: " + s);
			}

		} else {
			System.out.println("파일이 존재하지 않습니다.");
		}

		
		mnv.setViewName("/file/fileup.do");
		
		return mnv;
		
		
		
	}

}

	