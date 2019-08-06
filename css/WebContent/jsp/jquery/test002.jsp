<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<html>
<head>
<script src="http://code.jquery.com/jquery-1.9.0.js"></script>
<style type="text/css">
</style>
<script type="text/javascript">
           
$(function(){
	
	//$('.warp ul li:has("strong")').css('color','red');
	$('.warp ul li:has("#bb")').css('color','red');
	
});
</script>
</head>
<body>

	<div class="warp">
		<ul>
			<li>a1</li>
			<li> <strong id= "bb">b1 </strong></li>
			<li>C</li>
		</ul>
	</div>

</body>
</html>