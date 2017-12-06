


// Script for storing different DIV content in a variable and Showing/hiding accordingly
<script type="text/javascript">
 var menuID = document.getElementById("menuPage");
 var page1ID = document.getElementById("page1");
 var page2ID = document.getElementById("page2");
 var page3ID = document.getElementById("page3");
 var page4ID = document.getElementById("page4");
 var page5ID = document.getElementById("page5");
 var page6ID = document.getElementById("page6");

 var myScrollFunc = function() {
 var y = window.scrollY;
  
  
  // For MENU PAGE
  if (y>=0 && y<=200) {
    menuID.className = "bottomMenu show";
    } 
  else{
    menuID.className = "bottomMenu hide";
   } 
  // For PAGE-1
  if (y>=100 && y<=200) {
    page1ID.className = "bottomMenu show  animated slideInUp";
    } 
  else{
    page1ID.className = "bottomMenu hide";
   }  
  // For PAGE-2
  if (y>200 && y<=300){
	page2ID.className = "bottomMenu show  animated slideInUp";
    }
  else{
    page2ID.className = "bottomMenu hide";
    }
   // For PAGE-3 
  if (y>300 && y<=400){
    page3ID.className = "bottomMenu show  animated slideInUp";
    }
  else{
    page3ID.className = "bottomMenu hide";
    }
  // For PAGE-4
  if (y>400 && y<=500){
	page4ID.className = "bottomMenu show  animated slideInUp";
	}
  else{
	page4ID.className = "bottomMenu hide";
	}
	// For PAGE-5
  if (y>500 && y<= 600){
	page5ID.className = "bottomMenu show  animated slideInUp";
	}
  else{
	page5ID.className = "bottomMenu hide";
	}
	// For PAGE-6
  if (y>600 && y<=700){
	page6ID.className = "bottomMenu show  animated slideInUp";
	}
  else {
	page6ID.className = "bottomMenu hide";
	}
 };
window.addEventListener("scroll", myScrollFunc);
</script>