<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<html>
<head>
<title>로그인</title>

<link rel="stylesheet" type="text/css" href="/sys/css/style.css" />

<script src="http://code.jquery.com/jquery-1.9.0.js"></script>

<script type="text/javascript">

	$(document).ready(function() {
		
		$("#USER_ID").focus();

		$(":button").click(function() {
			if ($("#USER_ID").val().length <= 0) {
				alert("사용자 ID를 입력하세요");
				$("#USER_ID").focus();
				return false;
			} else if ($("input[type=password]").val().length <= 0) {
				alert("비빌번호를 입력하세요");
				$("input[type=password]").focus();
				return false;
			}

			loginCk();
		})
	})

	function loginCk() {
		$.ajax({
			type : "POST",
			url : "/cklog.do",
			async : true,
			dataType : "text",
			timeout : 10000,
			cache : false,
			data : {
				USER_ID : $("#USER_ID").val(),
				USER_PW : $('#USER_PW').val()
			},

			success : s,
			error : e
		});
	}

	function s(a) {
		$("#t").html(a);
		
		if (jQuery.trim(a) == 'Y') {
			frm.action = "/cust/main.do";
			frm.submit();
		} else {
			alert("로그인 정보가 올바르지 않습니다");
			$("#USER_ID").focus();
			return false;
		}
	}

	function e(b) {
		alert("Ajax에러.");
		console.log(b);
	}

	function rgst() {
		location.href = "/jsp/regist.jsp";
	}

	function EnterDown() {
		var keyValue = event.keyCode;
		if (keyValue == '13') {
			if ($("#USER_ID").val().length <= 0) {
				alert("사용자 ID를 입력하세요");
				$("#USER_ID").focus();
				return false;
			} else if ($("input[type=password]").val().length <= 0) {
				alert("비빌번호를 입력하세요");
				$("input[type=password]").focus();
				return false;
			}

			loginCk();
		}
	}
</script>

</head>

<body>
	<form name="frm" method="post">
		<table align="center" border="1px" style="border-collapse: collapse; border: 1px solid #CCC;">
			<tr>
				<td width="80px">로그인ID</td>
				<td width="120px" align='center'>
					<input	type=text name="USER_ID" id="USER_ID" size=8 maxlength='' value= "7369"/>
				</td>
			</tr>
			<tr>
				<td >PW</td>
				<td align='center'><input type="password" name="USER_PW" id="USER_PW" value= "11" size=8 maxlength="100"
					onkeydown="EnterDown();" />
				</td>
			</tr>
			<tr>
				<td class="insert_Fg" colspan=2 align='center' height=50>
					<input type="button" value="확인" /> <input type="reset" value="취소" />
				</td>
			</tr>
			<tr>
				<td colspan='2' align='center'> <a href="javascript:rgst();">회원가입</a>
				</td>
			</tr>
			
		</table>
	</form>
	
	<div id="t" align='center'> </div>
	
	
</body>

</html>
