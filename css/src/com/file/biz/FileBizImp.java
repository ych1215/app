package com.file.biz;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.apache.log4j.Logger;

import com.file.dao.FileDao;
import com.login.dao.UserDao;


@Repository
public class FileBizImp  implements FileBiz{

	@SuppressWarnings("unused")
	private Logger logger = Logger.getLogger(getClass());

	@Autowired
	public FileDao dao;

	// 로그인 검증
	public String saveFile(Map<String, String> map, MultipartHttpServletRequest mRequest) throws Exception {
		
		boolean isSuccess = false;
		//String uploadPath = "/file/";
		String uploadPath = "F:/file/";
		
		File dir = new File(uploadPath);

		if (!dir.isDirectory()) {
			dir.mkdirs();
		}
		
		Iterator<String> iter = mRequest.getFileNames();
		while(iter.hasNext()) {
			String uploadFileName = iter.next();
			
			MultipartFile mFile = mRequest.getFile(uploadFileName);
			String originalFileName = mFile.getOriginalFilename();
			String saveFileName = originalFileName;
			
			logger.info("uploadFileName : " + uploadFileName);
			
			logger.info("originalFileName : " + originalFileName);
			
			if(saveFileName != null && !saveFileName.equals("")) {
				if(new File(uploadPath + saveFileName).exists()) { // 기존 파일이 있는경우 시스템날자 붙인다.
					//saveFileName = saveFileName + "_" + System.currentTimeMillis();
				}
				
				try {
					mFile.transferTo(new File(uploadPath + saveFileName));
					
					logger.info("filegetSize : " + mFile.getSize());
					logger.info("saveFileName : " + saveFileName);
					
					isSuccess = true;				
				} catch (IllegalStateException e) {
					e.printStackTrace();
					isSuccess = false;
				} catch (IOException e) {
					e.printStackTrace();
					isSuccess = false;
				}
			}
		}
		
		
		
		
		return  (String) dao.saveFile(map);
	}
	
	
}
