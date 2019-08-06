<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<html>
<head>
<script src="http://code.jquery.com/jquery-1.9.0.js"></script>
<style type="text/css">

.l {
	width:  250px;
	position: relative;
	height : 300px;
	left: 0px;
	overflow: scroll;
}

.r {
	width:  250px;
	position: absolute;
	left: 300px;
	height : 300px;
	top: 0px;
	overflow: scroll;
}

.l ul {
	background-color: pink;
	border: 2px solid gray;
}

.r ul {
	border: 2px solid gray;
	background-color: yellow;
}

.lightblue {background-color: green; }




.l2 {
	width:  250px;
	position: relative;
	height : 200px;
	left: 0px;
	overflow: scroll;
}

.r2 {
	width:  250px;
	position: absolute;
	left: 300px;
	height : 200px;
	top: 310px;
	overflow: scroll;
}

.l2 ul {
	background-color: pink;
	border: 2px solid gray;
}

.r2 ul {
	border: 2px solid gray;
	background-color: yellow;
}

.l2 ul {
	background-color: pink;
	border: 2px solid gray;
}

.r2 ul {
	border: 2px solid gray;
	background-color: yellow;
}


</style>
<script type="text/javascript">
           
$(function(){
	
	
	// 왼쪼에서 오른쪽으로 이동
	//$(".a .l ul li").click( function(e) { 
	$(".a .l ul").on("click" , "li"  ,function(e) { // 동적으로 생성된 것은 이벤트가 안먹으로 on 써야함, li 가 동적으로 추가되는 앨리먼트이므로 li를 적는다.
		
		console.log( $(this).html() );
		
		$(this).parent().children().removeClass("lightblue");
		
		if( $(this).hasClass("lightblue")== true) {
			$(this).removeClass("lightblue");
		} else {
			$(this).addClass("lightblue");
		}
		
		//$(this).parent().append("<li>fff</li>"); // 클릭한 div의 맨 밑에 추가됨.
		//$("<li> ssss </li>").appendTo(  $(".a .r ul") );  // 요렇게 하면 오른쪽으로 추가 만 됨.
		//$(".a .r ul").html("<li> ssss </li>"); // 추가되는게 아니고 다 기존거 지워지고 ssss 하나만 생성된다.
		
		
		
		// 화살표 방향 이다. 왼쪽에 있는것을 오른족으로 이동 ->
		//$(this).appendTo(  $(".a .r ul") );    // 왼쪽li가 오른쪽 ul 맨 밑으로 [이동] 된다.
		//$(this).prependTo(  $(".a .r ul") );   // 왼쪽li가 오른쪽 ul 맨 위로 [이동] 된다.
		
		// 화살표 반대 방향 이다. 오른쪽에 있는것을 왼쪽 이동 <-
		//$(".a .r ul").append($(this)); // 왼쪽li가 오른쪽 ul 맨 밑으로 [이동] 된다.
		//$(".a .r ul").append($(this).clone()); // 왼쪽li가 이동 없이 아래로 이동
		$(".a .r ul").prepend($(this).clone());  // 왼쪽li가 이동 없이 위로 추가된다.
		
        
    });
	
	// 오론쪽에서 왼쪽으로 이동.
	//$(".a .r ul li").click( function(e) {
	$(".a .r ul").on("click" , "li" ,function(e) {
		
		console.log( $(".a .r ul li").length );
		
		console.log( $(this).html() );
		
		$(this).parent().children().removeClass("lightblue");
		
		if( $(this).hasClass("lightblue")== true) {
			$(this).removeClass("lightblue");
		} else {
			$(this).addClass("lightblue");
		}
		
		
		$(".a .l ul").append($(this).clone()); // 이동 없이 하려면 clone 를 사용하면 된다.
		
		//$(this).appendTo(  $(".a .l ul") );
		
    });
	
	// 선택시 색칠
	$(".a2 .l2 ul").on("click" , "li"  ,function() { 
		if( $(this).hasClass("lightblue")== true) {
			$(this).removeClass("lightblue");
		} else {
			$(this).addClass("lightblue");
		}
		
	});
	
	// 선택시 색칠
	$(".a2 .r2 ul").on("click" , "li" ,function(e) {
		if( $(this).hasClass("lightblue")== true) {
			$(this).removeClass("lightblue");
		} else {
			$(this).addClass("lightblue");
		}
	});
	
	 // 오른쪽 이동 버튼 클릭시 
	 $("input:button[name='btn1']").click(function(){
		 
		 $(".a2 .l2 ul li").each(function(i,k){
			console.log(i);	
			
	     	if ( $(this).hasClass("lightblue")== true ) {
	     	
	     		console.log("lightblue!!!!!!!!!");
	     		
	     		$(this).appendTo(  $(".a2 .r2 ul") );
	     	}
	     });
		 
		 $(".a2 .r2 ul li").removeClass("lightblue");
 	 });
	
	 // 왼쪽 이동 버튼 클릭시.
	 $("input:button[name='btn2']").click(function(){
		 
		 $(".a2 .r2 ul li").each(function(i,k){
				console.log(i);	
				
		     	if ( $(this).hasClass("lightblue")== true ) {
		     		console.log("lightblue!!!!!!!!!");
		     		$(this).appendTo(  $(".a2 .l2 ul") );
		     	}
		  });
		 
		 // 클래스 초기화 
		 $(".a2 .l2 ul li").removeClass("lightblue");
	 });

	 // 올리기 버튼
	 $("input:button[name='btn3']").click(function(){
		 
	 	//$("<li>새 내용 추가1</li>").insertBefore("#myList");
	 	
	 	$(".a2 .l2 ul li").each(function(i,k){
	 		
	     	if ( $(this).hasClass("lightblue")== true ) {
	     		
	     		//$(this).before("<li>fff</li>"); // 선택한 곳 위에 추가하기.
	     		//$(".a2 .r2 ul li:eq("+1+")" ).before(  $(this)  ); // 왼쪽것을 오른쪽 2번째에 넣기.
	     		
	     		// 화살표 반대 방향 이다. 오른쪽에 있는것을 왼쪽 이동 <-
	     		$(this).prev().before(  $(this)  );
	     		
	     		alert( $(this).data("address") );
	     	}
	     });
	 });	
	 
	 // 내리기 버튼
	 $("input:button[name='btn4']").click(function(){
		 	$(".a2 .r2 ul li").each(function(i,k){
		 		
		 		if ( $(this).hasClass("lightblue")== true ) {
		     		$(this).next().after(  $(this)  );
		     	}
		     });
		 });
	 
});
</script>
</head>
 <body>
        <div class="a">
            <div class="l">
                <ul>
                    <li>
                        a1
                    </li>
                    <li>
                        b1
                    </li>
                    <li>
                       c1
                    </li>
                    <li>
                      d1
                    </li>
                    <li>
                        e1
                    </li>
 
                </ul>
            </div>
            
             <div class="r">
                <ul>
                    <li>
                        A2
                    </li>
                    <li>
                      B2
                    </li>
                    <li>
                       C2
                    </li>
                    <li>
                        D2
                    </li>
                    <li>
                        D2
                    </li>
 
                </ul>
            </div>
        </div>
        
        
        
        <div class="a2">
            <div class="l2">
                <ul>
                    <li data-address='1'>
                        a11
                    </li>
                    <li data-address='2'>
                        b11
                    </li>
                    <li data-address='3'>
                       c11
                    </li>
                    <li data-address='4'>
                      d11
                    </li>
                    <li data-address='5'>
                        e11
                    </li>
 
                </ul>
            </div>
            
             <div class="r2">
                <ul>
                    <li>
                        A22
                    </li>
                    <li>
                      B22
                    </li>
                    <li>
                       C22
                    </li>
                    <li>
                        D22
                    </li>
                    <li>
                        D22
                    </li>
 
                </ul>
            </div>
            
            <input type="button" name="btn1">==></button>
            <input type="button" name="btn2"><==</button>
            
              <input type="button" name="btn3">올리기</button>
              <input type="button" name="btn4">내리기</button>
            
        </div>
        
        
        
        
        
        
        
        
        
        
    </body>
    
</html>