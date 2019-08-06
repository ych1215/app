<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.HashMap" %>

<html>
<head>

<!-- 초기화 -->
<style>
* {
	margin: 0;
	padding: 0;
}

li {
	list-style: none;
}
</style>

<!-- 해더 -->
<style>
#main_header {
	height: 60px;
	line-height: 60px;
	padding-left: 10px;
	background: #1D4088;;
	color: white;
}
</style>


<style type="text/css">
body {
	width: 1200px;
	margin: 5px auto;
}

/* overflow:hidden; 없으면 그린 색이 안보이는대 height를 줘도 되지만 
    자손이  float를 한경우 부모div는 자손 높이 많큼 꺼지지 위해서  overflow:hidden; 한다. 
   float를 해제 할때도 쓰이지만 이 같은 경우도 쓰인다.
*/
.div_menu {
	background-color: #32394A;;
	overflow: hidden;
	color: white;
}

.big_menu>li {
	display: inline;
	padding: 10px;
	border-right: 1px solid white;
	float: left;
}

.big_menu1>li {
	display: inline;
	padding: 10px;
	border-right: 1px solid white;
	float: right;
}

/* float를 해제 하기위해서 .put css에 clear: both; 해도 되고 여기처럼 float를 가지고 있는 자손이 있는경우 여기에 overflow:hidden;해도 된다. */
.wrap {
	overflow: hidden;
}

.menu {
	width: 150px;
	height: 700px;
	background: #71B1D1;;
	float: left;
}

.menu>.sub_title {
	padding: 10px;
	text-align: center;
}

.menu>#el>li {
	margin: 0px;
	border-bottom: 1px solid purple;
}


.put {
	height: 50px;
	border-top: 0px solid red;
	background-color: gray;
}

.content_inof {
	background-color: gray;
}

.cont_warp1 {
	text-align: left;
	background-color: yellow;
	width:  500px;
	height: 500px;
	display: inline-block;
	
	
}

.cust_rgst_warp {
	text-align: center;
	background-color: green;
}

.content {
	width: 1050px;
	background-color: purple;
	text-align: center;
	overflow: hidden;
}

</style>

<script src="http://code.jquery.com/jquery-1.9.0.js"></script>

<script type="text/javascript">

$(document).ready(function() {
	
	// 회원등록
	$("#cust_rgst").click(function() {
		location.href = "/cust/cust_rgst.do";			
    });
	
	// jsion 테스트
	$("#jsion").click(function() {
		location.href = "/jsion/jsion.do";			
    });
	
	// 메인이동
	$("#main_header").click(function() {
		location.href = "/cust/main.do";			
    });
	
	// 파일업로드
	$("#file").click(function() {
		location.href = "/file/fileup.do";			
    });
	
	// JSION1 문자열 가져오기.
	$("input:button[name='jsion1']").click(function() {
		
		$.ajax({
			type : "POST",
			url : "/jsion/jsion1.do",
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
			url : "/jsion/jsion2.do",
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
				url : "/jsion/jsion3.do",
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
					url : "/jsion/jsion4.do",
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
			url : "/jsion/jsion6.do",
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
				
				
				
	})
</script>


</head>
<body>

	<div id="main_header">해더</div>

	<div class="div_menu">
		<ul class="big_menu">
			<li>회원관리</li>
			<li>자료실</li>
			<li>공지사항</li>
			<li>연락처</li>
			<li>방명록</li>
			<li>게시판</li>
		</ul>
		<ul class="big_menu1">
			<li>관리자</li>
			<li>로그아웃</li>
		</ul>
	</div>

	<div class="wrap">
		<div class="menu">
			<div class="sub_title">[자료실]</div>
			<ul id="el">
				<li id="cust_rgst">회원등록</li>
				<li id="jsion">JSION_TEST</li>
				<li id="file">파일업로드</li>
				<li>자료4</li>
				<li>자료5</li>
				<li>자료6</li>
			</ul>
		</div>

		<form name="frm" method="post">
			<div class="content">
				<div class="content_inof">% jsion 화면 입니다.</div>
				<div class="cont_warp1">
				
					<input type="button" name="jsion1" value="문자,map 가져오기" />
					
					<input type="button" name="jsion2" value="Arry 가져오기" />
					
					<input type="button" name="jsion3" value="db 조회후 Map를 jsion으로 가져오기" />
					
					<input type="button" name="jsion4" value="db 조회후 List jsion으로 가져오기" /> <br>
					
					<input type="button" name="jsion5" value="자바스크립트 오브잭트를 json으로 변환" />
					
					<input type="button" name="jsion6" value="JS의 오브잭트, 어레이 를 자바에서 MAP List로 변환" />
					
				</div>
			</div>
		</form>

	</div>

	<div class="put">풋터</div>

</body>
</html>