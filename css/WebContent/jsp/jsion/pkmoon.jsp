<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>


<html>
<head>

<!-- 초기화 -->
<style>
* {
	margin: 0;
	padding: 0;
}


.warp {
	text-align: center;
}

.boll {
	top: 200px;
	position: relative;
}

.btn {
top: 300px;
position: relative; 
text-align: center;
}

.big_menu>li {
	display: inline;
	padding: 10px;
	border-right: 1px solid white;
	text-align: center;
}

.mtype .big_menu {
	overflow: hidden; /* 칸이 넘치면 자동으로 스크롤생긴다. */
}


.count {
	height: 100px;
    width: 200px;
    background: pink;
    float: left;
    position: absolute;
}


</style>

<script src="http://code.jquery.com/jquery-1.9.0.js"></script>

<script type="text/javascript">

var tab_id = "";
var cnt = 0;

$(document).ready(function() { 
	
	
	
	
	
	
	
	$(".jsion5").click(function() { 
		
		cnt++;
		$(".count").html("<font size='100px'>"+cnt+"</font>");
		
		if (tab_id == "" ) {
			alert("때려 잡을 몬스터를 선택 하세요!!!!!");
			hi = 0;
			cnt = 0;
			return false;
		}
		
		var het2 = Math.floor(Math.random() * 10) + 1;
		
		console.log(het2);
		
		var het = 20 - het2 ;
		
		if (tab_id == "a1") {
			//het = 20 + het2;
		} else if (tab_id == "a2") {
			//het = 20 + het2;
		} else if (tab_id == "a3") {
			//het = 20 + het2;
		} else if (tab_id == "a4") {
			//het = 20 + het2;
		} else if (tab_id == "a5") {
			//het = 20 + het2;
		} else if (tab_id == "a6") {
			//het = 20 + het2;
		}		
		
		
		var top  = $('.boll');
		var tops = top.offset().top;
		top.offset( {top: tops - het });
		
	//	console.log( tops - het);
		
	    var hi = tops - het;
		
		if (146 > hi) {
			$('.a').hide();
			
			alert("미션 성공 ~~~~~~~~~~~~~~~~~~~~");
			hi = 0;
			cnt = 0;
			location.reload();
		}
	})
	
	$("input:button[name='jsion6']").click(function() { 
			location.reload();
	})
	
	
	$("#a1").click(function() {
		tab_id = "a1"
		$(".g").prop("src", "/jsp/jsion/a1.png");
	})
	
	$("#a2").click(function() {
		tab_id = "a2"
		$(".g").prop("src", "/jsp/jsion/a2.png");
	})
	
	$("#a3").click(function() {
		tab_id = "a3"
		$(".g").prop("src", "/jsp/jsion/a3.png");
	})
	
	$("#a4").click(function() {
		tab_id = "a4"
		$(".g").prop("src", "/jsp/jsion/a4.png");
	})
	
	$("#a5").click(function() {
		tab_id = "a5"
		$(".g").prop("src", "/jsp/jsion/a5.png");
	})
	
	$("#a6").click(function() {
		tab_id = "a6"
		$(".g").prop("src", "/jsp/jsion/a6.png");
	})
	
		$("#a7").click(function() {
		tab_id = "a7"
		$(".g").prop("src", "/jsp/jsion/a7.png");
	})
	
	$("#a8").click(function() {
		tab_id = "a7"
		$(".g").prop("src", "/jsp/jsion/a8.png");
	})
	
	
})




</script>


</head>
<body>

<div class = "count">
	<font size="100px">0</font>
</div>

<div class="warp">

<div class="mtype">
<ul class="big_menu">
			<li id = "a1">오랑우탄</li>
			<li id = "a2">어스타이거</li>
			<li id = "a3">바다악어</li>
			<li id = "a4">로키</li>
			<li id = "a5">실반</li>
			<li id = "a6">케이브레이서스네이크</li>
			<li id = "a7">패어리나비</li>
			<li id = "a8">말레이맥</li>
		</ul>
</div>

<div class="a">
<img class = "g" src="/jsp/jsion/a0.png">
</div>


<div class="boll">
<img src="/jsp/jsion/boll.png">
</div>


<div class="btn">
<img .class= "tt"  src="/jsp/jsion/hnd2.png" class = "jsion5"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="button" name="jsion6" value="다시 시작1111" />
</div>
</div>
</body>
</html>