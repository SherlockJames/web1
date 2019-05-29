var bangong_left_li=document.querySelectorAll(".bangong_left li")
		var bangong_right_iframe=document.querySelector(".bangong_right_iframe")
		   for(var i=0;i<bangong_left_li.length;i++){
		   	      bangong_left_li[i].onmousedown=function(){
//		   	      	$("bangong_right_iframe").load(url,"index.html")
bangong_right_iframe.setAttribute("src",this.getAttribute("data_add"));
		   	      	for(var j=0;j<bangong_left_li.length;j++){
		   	      		bangong_left_li[j].removeAttribute("class")
		   	      	}
		   	      	this.setAttribute("class","bangone_left_fox")
		   	      }
		   	
		   }
