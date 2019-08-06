package com.jsion.cmd;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.sf.json.JSON;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.JSONSerializer;

import org.apache.log4j.Logger;

import javassist.bytecode.Descriptor.Iterator;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jsion.biz.JsionBiz;


@Controller
public class JsionCmd {

	@Autowired 
	public JsionBiz biz;
	
	private Logger logger = Logger.getLogger(getClass());
	
    // 로그인 검증
	@RequestMapping("/xxx")
	public ModelAndView ckLog(HttpServletRequest request, HttpSession session, @RequestParam Map<String, String> params) throws Exception {
		ModelAndView mnv = new ModelAndView();
		
		String logCkYn = "N";
		logCkYn = biz.getLogCk(params);

		mnv.addObject("lgoCk", logCkYn);
		mnv.setViewName("/jsp/xxx.jsp");
		
		return mnv;
	}
	
	@RequestMapping("/jsion/jsion")
	public ModelAndView jsion(HttpServletRequest request, HttpSession session, @RequestParam Map<String, String> params) throws Exception {
		ModelAndView mnv = new ModelAndView();
		
		logger.info("jsion !!!!!!!!!!!");
		
		mnv.setViewName("/jsp/jsion/jsion.jsp");
		return mnv;
	}
	
	// JSION1 문자열1건 가져오기.
	@RequestMapping("/jsion/jsion1")
	@ResponseBody
	public String jsion1(String id, String pw ,HttpServletRequest request, HttpSession session, @RequestParam Map<String, String> params) throws Exception {
		
		logger.info("문자열1건 가져오기 !!!!!!!!!!!");
		
		String retValue3 = "{xxxxx:777777}";
        retValue3 = String.valueOf(JSONObject.fromObject(retValue3));  
        logger.info("문자열1건:" + retValue3);
        // retValue3 = "gggggg"; // 그냥 문자만 보낼때.
        
        /* 자바스크립트에서 쓰기.
        alert(a);
		var a = JSON.parse(a);
		alert(a.xxxxx);
		console.log(a);
         */
        
		return retValue3;
	}
	
	
	// JSION1 List 가져오기.
	@RequestMapping("/jsion/jsion2")
	@ResponseBody
	public List<Map<String, Object>> jsion2(String id, String pw ,HttpServletRequest request, HttpSession session, @RequestParam Map<String, String> params) throws Exception {
		
		 ArrayList<Map<String, Object>> arrList = new ArrayList<Map<String, Object>>();
		 HashMap data =	new HashMap();
		 data.put("aa", "11");
		 data.put("bb", "22");
		 
		 HashMap data1 =	new HashMap();
		 data1.put("aa", "44");
		 data1.put("bb", "55");

		 //arrList.add(0, data); // 위와 결과는 동일함.
		 //arrList.add(1, data1);
		 
		 arrList.add(data);
		 arrList.add(data1);
		 
		  /* 자바스크립트에서 쓰기.
		    var a = JSON.parse(a);

			console.log(a);

			$.each(a, function(i, n) {
				console.log(n.aa);
				console.log(n.bb);
			});
		  */
		 
		return arrList;
	}
	
	// db조회후 Map를 JSION으로 변환하여 가져오기.
	@RequestMapping("/jsion/jsion3")
	@ResponseBody
	public String jsion3(String id, String pw, HttpServletRequest request,
			HttpSession session, @RequestParam Map<String, String> params)
			throws Exception {

		logger.info("jsion3 !!!!!!!!!!!");
		String jsionString = "";
		HashMap data = new HashMap();

		Map<String, Object> userInfoMap = biz.getJsionInfoMpa(params);

		if (userInfoMap instanceof ArrayList) {
			jsionString = String.valueOf(JSONArray.fromObject(userInfoMap));
		} else {
			jsionString = String.valueOf(JSONObject.fromObject(userInfoMap));
		}

		logger.info("jsion data : " + jsionString);

		return jsionString;
	}
		
	// db조회후 List를 JSION으로 변환하여 가져오기.
	@RequestMapping("/jsion/jsion4")
	@ResponseBody
	public String jsion4(String id, String pw, HttpServletRequest request,
			HttpSession session, @RequestParam Map<String, String> params)
			throws Exception {

		logger.info("jsion3 !!!!!!!!!!!");
		String jsionString = "";

		ArrayList<Map<String, Object>> arrList = (ArrayList<Map<String, Object>>) biz
				.getJsionInfoList(params);

		if (arrList instanceof ArrayList) {
			jsionString = String.valueOf(JSONArray.fromObject(arrList));
		} else {
			jsionString = String.valueOf(JSONObject.fromObject(arrList));
		}

		logger.info("jsion data : " + jsionString);

		return jsionString;
	}
	
	
	// JS의 오브잭트, 어레이 를 자바에서 MAP List로 변환
	@RequestMapping("/jsion/jsion6")
	@ResponseBody
	public String jsion6(String id, String pw, HttpServletRequest request, HttpSession session, @RequestParam Map<String, String> params) throws Exception {
		
		/* 요점
		   1. 화면에서 JSON 데이터를 전달한것은 JSONObject 로 받고, 에레이는 JSONArray 로 받음 되고
		         복함적으로 오는것은 JSONObject 받은 다음 루프 돌면서 JSONArray 에 담는다.
		   
		   2. DB조회후 화면으로 JSON으로 보낼때는 JSONArray.fromObject(객체명) 변환하여 보낸다. 이때는 @ResponseBody 꼭 써야하고 , 화면에서 JSON 받을땐 안써도 됨.
		*/ 
		
		
		/*
		// JSONObject 값 넣기, String 변환하기. 
		JSONObject jsonObj = new JSONObject();
		jsonObj.put("sender", "홍길동");
		jsonObj.put("receiver", "Smith");
		jsonObj.put("msg", "감사합니다");
		String jsonSt = jsonObj.toJSONString();
		
		console 로 jsonSt찍어보면
		{sender:"홍길동",receiver:"Smith" - - } 형식으로 찍힙니다. 
		*/
		
		/*
		// JSONArray에 값 셋팅하기.         returnList 는 db조회후 List에 담긴것임.
		JSONObject jsonObj = new JSONObject();
		JSONArray jArray = new JSONArray();
				
		for(int i=0;i<returnList.size();i++){
			jsonObj.put("empNo",   returnList.get(i).getEmpNo());
			jsonObj.put("empName", returnList.get(i).getEmpName());
			jsonObj.put("deptNo",  returnList.get(i).getDeptNo());
			jsonObj.put("empSal",  returnList.get(i).getSal());
					
			jArray.add(jsonObj);
		}
				
		String jsonSt = jArray.toJSONString();
		[{"empName":"andy","empNo":3333,"empSal":1111,"deptNo":3000}]
		*/
		
		//----------------------------------- 1 START -------------------------
		logger.info("==============================================================");
		// 1. 변수값 1개만 보낸 경우.
		/*
		data : {
		EMP_NO  : '7369'
	    }
	    */
		logger.info("EMP_NO" + request.getParameter("EMP_NO"));
		logger.info("1번 :"+request.getParameter("EMP_NO"));
		//----------------------------------- 1 END ---------------------------
		
		
		//----------------------------------- 2 START -------------------------
		logger.info("==============================================================");
		/*
		// 2 오브잭트로 보낸경우.
		var obj = new Object();
        obj["USER_ID"] = "eeeeeeee";
        obj["LOGIN_ID"] = "fffffff";
        */
        
        // 화면에서 오브잭트를 -> 자바에서 JSONObject 로 받아서 맵에 담은 경우.
     	JSONObject JBOJ = (JSONObject) JSONSerializer.toJSON(request.getParameterValues("OBJ")[0]);
     	logger.info("2번 :"+JBOJ);
     	
     	
     	logger.info("OBJ==>JSONObject:" + JBOJ.get("USER_ID"));
     	logger.info("OBJ==>JSONObject:" + JBOJ.get("LOGIN_ID"));
     		
     	Map<String, Object> ABC = (Map<String, Object>) JBOJ;
     	logger.info("OBJ==>MAP:" + ABC.get("USER_ID"));
     	logger.info("OBJ==>MAP:" + ABC.get("LOGIN_ID"));
        
        // 화면에서 오브잭트를 -> 자바에서 JSON 로 받은 경우.
        JSON OBJ = (JSON) JSONSerializer.toJSON(request.getParameterValues("OBJ")[0]);
		logger.info("OBJ==>JSON:"+OBJ);
		
		// 화면에서 오브잭트를 -> 자바에서 String 로 받은 경우.
		String a  = request.getParameterValues("OBJ")[0];
		logger.info("OBJ==>String:"+a);
		//----------------------------------- 2 END ---------------------------
		
		
		//----------------------------------- 3 START -------------------------
		logger.info("==============================================================");
		/*
		// 오브젝트를 배열에 넣어서 보내경우.
		var tempObj = new Array();
        var objs = new Object();
        var objs2 = new Object();
        
        objs["USER_ID"] = "aaaaaa";
        objs["LOGIN_ID"] = "bbbbb";
        tempObj[0] = objs;
        
        objs2["USER_ID"] = "cccccccc";
        objs2["LOGIN_ID"] = "ddddddd";
        tempObj[1] = objs2;
        */
        
		JSONArray OBJ_ARR = (JSONArray) JSONSerializer.toJSON(request.getParameterValues("OBJ_ARR")[0]);
		logger.info("3번 :"+OBJ_ARR);
		
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		if( OBJ_ARR != null )
		{
			int jsonSize = OBJ_ARR.size();
			for( int i = 0; i < jsonSize; i++ )
			{
				Map<String, Object> AB = (Map<String, Object>) OBJ_ARR.get(i);
				list.add( AB );
			}
		}
		logger.info("Array==>JSONArray==>Map==>List :"+list.get(0).get("USER_ID"));
		//----------------------------------- 3 END ---------------------------
		
		
		//----------------------------------- 4 START -------------------------
		
		// 3 번과 동일함 다만 자바스크립트의 push 를 함수를 이용해서 Array에 넣어을뿐.
		logger.info("==============================================================");
        /*
		var jArray = new Array();
        var jobj = new Object();
        var job2 = new Object();
        jobj.name = "송강호";
        jobj.age = "25";
        jobj.gender = "남자";
        jobj.nickname = "남궁민수";
        jArray.push(jobj );
        
        job2.name = "송강호2";
        job2.age = "252";
        job2.gender = "남자2";
        job2.nickname = "남궁민수2";
        jArray.push(job2 );
        */
		JSONArray jsonArray = (JSONArray) JSONSerializer.toJSON(request.getParameterValues("ARRONE")[0]);
		logger.info("4번 :"+jsonArray);
		
		List<Map<String, Object>> list2 = new ArrayList<Map<String, Object>>();
		if( jsonArray != null )
		{
			int jsonSize = jsonArray.size();
			for( int i = 0; i < jsonSize; i++ )
			{
				Map<String, Object> AB = (Map<String, Object>) jsonArray.get(i);
				list2.add( AB );
			}
		}
		logger.info("Array,push==>JSONArray==>Map==>List :"+list2.get(0).get("name"));
		
		//----------------------------------- 4 END ---------------------------
		
		//----------------------------------- 5 -------------------------------
		logger.info("==============================================================");
		/* 구조
		 var abc =  {
               "books": [
                         {
                             "genre": "소설",
                             "price": "100",
                             "name": "사람은 무엇으로 사는가?",
                             "writer": "톨스토이",
                             "publisher": "톨스토이 출판사"
                         },
                         {
                             "genre": "소설",
                             "price": "300",
                             "name": "홍길동전",
                             "writer": "허균",
                             "publisher": "허균 출판사"
                         },
                         {
                             "genre": "소설",
                             "price": "900",
                             "name": "레미제라블",
                             "writer": "빅토르 위고",
                             "publisher": "빅토르 위고 출판사"
                         }
                     ],
                     "persons": [
                         {
                             "nickname": "남궁민수",
                             "age": "25",
                             "name": "송강호",
                             "gender": "남자"
                         },
                         {
                             "nickname": "예니콜",
                             "age": "21",
                             "name": "전지현",
                             "gender": "여자"
                         }
                     ]
                 };
		 */
		
		JSONObject cc = (JSONObject) JSONSerializer.toJSON(request.getParameterValues("ABCA")[0]);
		logger.info("5번 :"+cc);
		JSONArray bookInfoArray = (JSONArray) cc.get("books");
		
		for(int i=0; i<bookInfoArray.size(); i++){
            //배열 안에 있는것도 JSON형식 이기 때문에 JSON Object 로 추출
            JSONObject bookObject = (JSONObject) bookInfoArray.get(i);
             
            //JSON name으로 추출
            logger.info("bookInfo: name==>"+bookObject.get("name"));
            logger.info("bookInfo: writer==>"+bookObject.get("writer"));
            logger.info("bookInfo: price==>"+bookObject.get("price"));
            logger.info("bookInfo: genre==>"+bookObject.get("genre"));
            logger.info("bookInfo: publisher==>"+bookObject.get("publisher"));
        }
		
		//----------------------------------- 5 END ---------------------------
		
		//----------------------------------- 6 -------------------------------
		logger.info("==============================================================");
		/* 구조
		 var form2 = {
       	    "id": "123",
       	    "name": "456",
       	    "xxx": {"aa": "xxxx", "bb": "yyyyy"} ,
       	    "testTags": [{"id": "1111", "tag": "2222"} , {"id": "33333", "tag": "4444"}]
       	};
	    */
		
		JSONObject zz = (JSONObject) JSONSerializer.toJSON(request.getParameterValues("FORM")[0]);
		logger.info("6번 :"+zz);
		logger.info("form2 전체갯수 :" + zz.size());
		logger.info("form2 전체이름 :" + zz.names());
		JSONArray keyname = zz.names();

		for (int i = 0; i < keyname.size(); i++) {

			//logger.info("form2 키명: " + keyname.get(i));

			Object tt = (Object) zz.get(keyname.get(i));
			//logger.info(tt);

			if (tt instanceof JSONArray) {
				logger.info("arr 맞음");
				JSONArray aarr = (JSONArray) zz.get(keyname.get(i));

				for (int k = 0; k < aarr.size(); k++) {
					Map<String, Object> AB = (Map<String, Object>) aarr.get(k);
					//logger.info("ABABABABABAB 맞음" + AB);
					for (String key : AB.keySet()) {
						//System.out.println(String.format("키 : %s, 값 : %s", key, AB.get(key)));
						logger.info("Array키:"+ key + " " + "Array벨류:" + AB.get(key));
					}
				}

				/*
				  // 키 벨류값 알려 아래 처럼 뽑아서 쓰면됨. 
				  for(int k=0; k<aarr.size(); k++) {
					  //배열 안에 있는것도 JSON형식 이기 때문에 JSON Object 로 추출 JSONObject
					  bookObject = (JSONObject) aarr.get(k);
					  //JSON name으로 추출
					  System.out.println("testTags: id==>"+bookObject.get("id"));
					  System.out.println("testTags: tag==>"+bookObject.get("tag"));
				  }
				 */
			}  else if (tt instanceof JSONObject) {
				
				logger.info("JSONObject 이당.....");
				
				Map<String, Object> AB = (Map<String, Object>)  zz.get(keyname.get(i));
				//logger.info("ABABABABABAB 맞음" + AB);
				
				for (String key : AB.keySet()) {
					//System.out.println(String.format("obj키 : %s, obj값 : %s", key, AB.get(key)));
					logger.info("Obj키:"+ key + " " + "Obj벨류:" + AB.get(key));
				}
			} else {
				logger.info("arr 아님.");
				Object objj = (Object) zz.get(keyname.get(i));
				// JSON name으로 추출
				//System.out.println(keyname.get(i) + " : " + objj.toString());
				logger.info("일반키:"+ keyname.get(i) + " " + "일반벨류:" + objj.toString());
			}
		}
		//----------------------------------- 6 END ---------------------------
		
		
		//----------------------------------- 7 ------------------------------
		logger.info("==============================================================");
		/*
		 var arr = new Array();
	        arr[0] = "ggggggg";
	        arr[1] = "hhhhhhh";
	    */  
	     JSONArray ARR = (JSONArray) JSONSerializer.toJSON(request.getParameterValues("ARR")[0]);
	     logger.info("7번 :"+ARR);
	     
	     for (int k = 0; k < ARR.size(); k++) {
	    	 logger.info("배열 : " + ARR.get(k) );
		 }
	        
	   //----------------------------------- 7 END ---------------------------
	     
	   //----------------------------------- 8 ------------------------------  
	   logger.info("==============================================================");
	   /*
	    var one = "kkkkkkk";
        var one2 = JSON.stringify(one); // 이렇게 할 필요 없지만 TEST삼아서 해봄. 
	    */
	   logger.info("8번 : "+ request.getParameter("ONE")); // 이렇게 받아야 에러 안남, 근대 이렇게 할 필요 없음;;
	   //----------------------------------- 8 END ---------------------------  
	     
		
		return "o";
	}
	
	
}



/*
 // 자바스크립트 오브잭트를 json으로 변환
	$("input:button[name='jsion5']").click(function() {
		
		// 오브잭트를 배열에 넣어서 사용한경우 start
		var tempObj = new Array();
        var objs = new Object();
        var objs2 = new Object();
        
        objs["USER_ID"] = "aaaaaa";
        objs["LOGIN_ID"] = "bbbbb";
        tempObj[0] = objs;
        
        objs2["USER_ID"] = "cccccccc";
        objs2["LOGIN_ID"] = "ddddddd";
        tempObj[1] = objs2;
        
        var obj_arr = JSON.stringify(tempObj);
        console.log( obj_arr);
     	// 오브잭트를 배열에 넣어서 사용한경우 end
     	
     	// 오브잭트만
        var obj = new Object();
        obj["USER_ID"] = "eeeeeeee";
        obj["LOGIN_ID"] = "fffffff";
        console.log(JSON.stringify(obj));
        
        // arry 만
        var arr = new Array();
        arr[0] = "ggggggg";
        arr[1] = "hhhhhhh";
        console.log(JSON.stringify(arr));
		
	});
	
	// JS의 오브잭트, 어레이 를 자바에서 MAP List로 변환
	$("input:button[name='jsion6']").click(function() {
		
		// 오브잭트를 배열에 넣어서 사용한경우 start
		var tempObj = new Array();
        var objs = new Object();
        var objs2 = new Object();
        
        objs["USER_ID"] = "aaaaaa";
        objs["LOGIN_ID"] = "bbbbb";
        tempObj[0] = objs;
        
        objs2["USER_ID"] = "cccccccc";
        objs2["LOGIN_ID"] = "ddddddd";
        tempObj[1] = objs2;
        
        var obj_arr = JSON.stringify(tempObj);
        console.log( obj_arr);
     	// 오브잭트를 배열에 넣어서 사용한경우 end
     	
     	// 오브잭트만
        var obj = new Object();
        obj["USER_ID"] = "eeeeeeee";
        obj["LOGIN_ID"] = "fffffff";
        console.log(JSON.stringify(obj));
        var fobj = JSON.stringify(obj); // 이렇게 안하면 스프링에서 못받음.
        
        // arry 만 (키없음)
        var arr = new Array();
        arr[0] = "ggggggg";
        arr[1] = "hhhhhhh";
        console.log(JSON.stringify(arr));
        var arrj = JSON.stringify(arr); // 이렇게 안하면 스프링에서 못받음.
        
        //////////////
         // arry 만 
        var jArray = new Array();
        var jobj = new Object();
        var job2 = new Object();
        jobj.name = "송강호";
        jobj.age = "25";
        jobj.gender = "남자";
        jobj.nickname = "남궁민수";
        jArray.push(jobj );
        
        job2.name = "송강호2";
        job2.age = "252";
        job2.gender = "남자2";
        job2.nickname = "남궁민수2";
        jArray.push(job2 );
        
        var arro = JSON.stringify(jArray);
        console.log(arro);
        ///////////////////////
        
        
        ////////////////////////
        var abc =  {
                "books": [
                          {
                              "genre": "소설",
                              "price": "100",
                              "name": "사람은 무엇으로 사는가?",
                              "writer": "톨스토이",
                              "publisher": "톨스토이 출판사"
                          },
                          {
                              "genre": "소설",
                              "price": "300",
                              "name": "홍길동전",
                              "writer": "허균",
                              "publisher": "허균 출판사"
                          },
                          {
                              "genre": "소설",
                              "price": "900",
                              "name": "레미제라블",
                              "writer": "빅토르 위고",
                              "publisher": "빅토르 위고 출판사"
                          }
                      ],
                      "persons": [
                          {
                              "nickname": "남궁민수",
                              "age": "25",
                              "name": "송강호",
                              "gender": "남자"
                          },
                          {
                              "nickname": "예니콜",
                              "age": "21",
                              "name": "전지현",
                              "gender": "여자"
                          }
                      ]
                  };
        
        var abca = JSON.stringify(abc);
        ///////////////////////
        
        var form2 = {
        	    "id": "123",
        	    "name": "456",
        	    "xxx": {"aa": "xxxx", "bb": "yyyyy"} ,
        	    "testTags": [{"id": "1111", "tag": "2222"} , {"id": "33333", "tag": "4444"}]
        	};
        var objform = JSON.stringify(form2); // 이렇게 안하면 스프링에서 못받음.
        
        
        var one = "kkkkkkk";
        var one2 = JSON.stringify(one); // 이렇게 안하면 스프링에서 못받음.
        
        $.ajax({
			type : "POST",
			url : "/jsion6.do",
			async : true,
			dataType : "text", 
			timeout : 10000,
			cache : false,
			data : {
				OBJ_ARR : obj_arr  ,
				OBJ     : fobj     ,
				ARR     : arrj     ,
				FORM    : objform  ,
				ARRONE  : arro     ,
				ABCA    : abca     ,
				ONE     : one2     , 
				EMP_NO  : '7369'
			},

			success : jsion6_s,
			error : jsion6_e
		});
		
	});
				
	function jsion6_s(a) {
		alert('성공');
	}

	function jsion6_e(b) {
		alert("Ajax에러.");
		alert(b);
		console.log(b);
	}
 
 
 */

	

/*
	// JSION1 문자열 가져오기.
	$("input:button[name='jsion1']").click(function() {
		
		$.ajax({
			type : "POST",
			url : "/jsion1.do",
			async : true,
			dataType : "text",
			timeout : 10000,
			cache : false,
			data : {
				USER_ID : $("#USER_ID").val(),
				USER_PW : $('#USER_PW').val()
			},

			success : jsion1_s,
			error : jsion1_e
		});
		
	})
	
	function jsion1_s(a) {
		alert(a);
		var a = JSON.parse(a);
		alert(a.xxxxx);
		
		console.log(a);
	}

	function jsion1_e(b) {
		alert("Ajax에러.");
		alert(b);
		console.log(b);
	}
	
	
	// JSION1 arr 가져오기.
	$("input:button[name='jsion2']").click(function() {
		
		$.ajax({
			type : "POST",
			url : "/jsion2.do",
			async : true,
			dataType : "text",
			timeout : 10000,
			cache : false,
			data : {
				USER_ID : $("#USER_ID").val(),
				USER_PW : $('#USER_PW').val()
			},

			success : jsion2_s,
			error : jsion2_e
		});
		
	});

	function jsion2_s(a) {
			alert(a);
			var a = JSON.parse(a);

			console.log(a);

			$.each(a, function(i, n) {
				console.log(n.aa);
				console.log(n.bb);
			});
		}

		function jsion2_e(b) {
			alert("Ajax에러.");
			alert(b);
			console.log(b);
		}
		
		
		// db조회후 Map를  JSION으로 변환하여 가져오기.
		$("input:button[name='jsion3']").click(function() {
			
			// dataType : "json", 으로하면 밑에 처럼 var a = JSON.parse(a); 이렇게 파서 할필요없다.
			$.ajax({
				type : "POST",
				url : "/jsion3.do",
				async : true,
				dataType : "text", 
				timeout : 10000,
				cache : false,
				data : {
					USER_ID : $("#USER_ID").val(),
					USER_PW : $('#USER_PW').val()
				},

				success : jsion3_s,
				error : jsion3_e
			});
			
		});

		function jsion3_s(a) {
				alert(a);
				var a = JSON.parse(a);

				console.log(a);

				console.log(a.ENAME);
				console.log(a.EMPNO);
			}

			function jsion3_e(b) {
				alert("Ajax에러.");
				alert(b);
				console.log(b);
			}
			
			// db조회후 List를  JSION으로 변환하여 가져오기.
			$("input:button[name='jsion4']").click(function() {
				
				
				// dataType : "json", 으로하면 밑에 처럼 var a = JSON.parse(a); 이렇게 파서 할필요없다.
				$.ajax({
					type : "POST",
					url : "/jsion4.do",
					async : true,
					dataType : "text", 
					timeout : 10000,
					cache : false,
					data : {
						USER_ID : $("#USER_ID").val(),
						USER_PW : $('#USER_PW').val()
					},

					success : jsion4_s,
					error : jsion4_e
				});
				
			});

			function jsion4_s(a) {
					alert(a);
					var a = JSON.parse(a);

					console.log(a);

					$.each(a, function(i, n) {
						console.log(n.ENAME);
						console.log(n.EMPNO);
					});
				}

				function jsion4_e(b) {
					alert("Ajax에러.");
					alert(b);
					console.log(b);
				}


*/