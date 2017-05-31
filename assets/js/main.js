(function(){
    function togglgbox(boxhide,boxshow){
        $(boxhide).addClass("hide");
        $(boxshow).removeClass("hide");
	  }
   $(".page1-pic").click(function(){
            /* $(".container1").addClass();
             $(".container2").removeClass("hide");*/
            togglgbox(".container1",".container2");
  });
       $(".page4-btn1").click(function(){
             togglgbox(".container4",".container1");
  });
  
    $(".page2-btn1").click(function(){
    	    strnum="";
            $("#txt").val("");
  });
    //手指1
   $(".page1-finger").on('click',function(){
               togglgbox(".container1",".container2");
   });
   //手指2
    $(".page3-finger").on('click',function(){
              alert("跳转领红包");
   })
   
      var strnum="",
       str=document.getElementsByTagName("li");
      function clrstrnum(){
       for(var i=0;i<str.length;i++){
        str[i].onclick=function(){
        	//h5的data属性
        	abc=this.dataset.num;
        	strnum=strnum+abc;
            //console.log(abc);
        	$("#txt").val(strnum);
        }
     }
     return strnum;
 }
    clrstrnum();
     $(".page2-pre").click(function(){1
        	 var   clrone=strnum.length-1;
		     	   strnum=strnum.substr(0,clrone);
		     	   //console.log(strnum);
		     	   $("#txt").val(strnum);
     });
   
//ajax提交
     $(".page2-btn2").click(function(){
     	 if(strnum==""||strnum.length!==11){
     	 	    alert("你的号码无效")
     	 	}else{
     	 		 submitAfter();
    /*           togglgbox(".container2",".container4");//测试*/
   	 	}   
     });

    submitAfter = function() {
    $.ajax({
      url: 'url',
      type: 'POST',
      data: {
           //json
           userNumber:userNumber
      },
      dataType:'json',
      success: function(data) {
        console.log(data);
          $(".inputNumber").val("");
            inputVal="";
        if(data.flag) {
            togglgbox(".container2",".container3");
        }else{
            togglgbox(".container2",".container4");
        }     
      }
    });
  }
//最后页注册
 $(".page4-btn2").click(function(){
            alert("跳转服务端注册页？？");//测试         
     });

}());