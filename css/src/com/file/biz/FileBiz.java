package com.file.biz;

import java.util.List;
import java.util.Map;

import org.springframework.web.multipart.MultipartHttpServletRequest;


public interface FileBiz {

	// 로그인 검증
	public String saveFile(Map<String, String> map , MultipartHttpServletRequest mRequest)  throws Exception;
	
}
