   
   
   
   
   var scflzhutitop_li=document.querySelectorAll(".scflzhutitop_li")
   var scflzhutidown_li=document.querySelectorAll(".scflzhutidown_li")
   
   
           for(var i=0;i<scflzhutitop_li.length;i++){
           	scflzhutitop_li[i].index=i
           	scflzhutitop_li[i].onmousedown=function(){
           		
           		 for(var j=0;j<scflzhutitop_li.length;j++){
           		 	scflzhutitop_li[j].classList.remove("active")
           		 	scflzhutidown_li[j].classList.remove("active")
           		 }
           		 
           		  scflzhutitop_li[this.index].classList.add("active")
           		  scflzhutidown_li[this.index].classList.add("active")
           		
           		
           	}
           	
           	
           	
           }
