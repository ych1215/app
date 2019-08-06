<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.HashMap" %>

<%
	ArrayList userList = (ArrayList) request.getAttribute("userList");
	HashMap userMap    = (HashMap)   request.getAttribute("userMap");
%>

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

.content {
	width: 1050px;
	color: yellow;
	background-color: purple;
	float: left;
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
	text-align: center;
}

.cont_warp2 {
	text-align: center;
}

.cont_warp1>* {
	text-align: left;
	color: blue;
}

.cont_warp2>* {
	text-align: left;
	color: blue;
}

.cont1 {
	width: 450px;
	height: 250px;
	background-color: yellow;
	position: relative;
	top: 30px;
	display: inline-block;
	overflow: auto; /* 칸이 넘치면 자동으로 스크롤생긴다. */
}

.cont2 {
	width: 450px;
	height: 250px;
	background-color: yellow;
	position: relative;
	top: 30px;
	display: inline-block;
	overflow: auto; 
}

.cont3 {
	width: 300px;
	height: 250px;
	background-color: yellow;
	position: relative;
	top: 60px;
	display: inline-block;
	overflow: hidden;
}

.cont4 {
	width: 300px;
	height: 250px;
	background-color: yellow;
	position: relative;
	top: 60px;
	display: inline-block;
	overflow: hidden;
}

.cont5 {
	width: 300px;
	height: 250px;
	background-color: yellow;
	position: relative;
	top: 60px;
	display: inline-block;
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

		<div class="content">
			<div class="content_inof">% 메인화면 입니다.</div>
			<div class="cont_warp1">
				<div class="cont1">
					공지사항1
					<ul>
						<%
							HashMap member = new HashMap();
						
						    if (userList != null) {
								for (int i = 0; i < userList.size(); i++) {
									member = (HashMap) userList.get(i);
						%>
						<li><%=member.get("ENAME")%></li>
						<%
								}
					    	}
						%>
						
					</ul>
				</div>
				<div class="cont2">
					공지사항2
					<ul>
						<%
						    if (userMap != null) {
						%>
						<li><%=userMap.get("ENAME")%></li>
						<%
					    	}
						%>
					</ul>
					</div>
			</div>

			<div class="cont_warp2">
				<div class="cont3">공지사항3
				<ul>
						<li>TEST입니다1</li>
						<li>TEST입니다2</li>
						<li>TEST입니다3</li>
					</ul>
				</div>
				<div class="cont4">공지사항4
				<ul>
						<li>TEST1</li>
						<li>TEST1</li>
						<li>TEST1</li>
						<li>TEST1</li>
					</ul>
				</div>
				<div class="cont5">공지사항5
				
				</div>
			</div>
		</div>

	</div>

	<div class="put">풋터</div>

</body>
</html>