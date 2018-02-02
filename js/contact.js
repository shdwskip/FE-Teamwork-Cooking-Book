$(function () {

    $(document).mouseup(function(e) {  
    
      var container = $(".concactInfo");   
      
      var win = $("#meal-window");
        
    $( "#contact" ).on( "click", function () {
        $( ".concactInfo" ).toggle();
      });       
      
    
      if (!container.is(e.target) && container.has(e.target).length === 0 && win.has(e.target).length ===0)  {             
          
        $( ".concactInfo" ).css( "display", "none" );   
        
      } 
    });
  
  
  
    });
  