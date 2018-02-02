$(function () {

  $(document).mouseup(function(e) {  
  
    var container = $("#side-menu");   
    var win = $("#meal-window");
    var recipes = $(".recipesShowModal"); 

    $('#nav-overlay').click(function () {  
      
      $( "#side-menu" ).toggle();
    });
  
    if (!container.is(e.target) && container.has(e.target).length === 0 && !win.is(e.target) && win.has(e.target).length ===0 && !recipes.is(e.target) && recipes.has(e.target).length ===0)  {             
        
      $( "#side-menu" ).css( "display", "none" );  
      
    } 
  });

  $( ".menu li" ).click(function() {
     $( "#title" ).css( "font-size", "50px" );
     $(".title-search").css("position", "fixed");
     $(".title-search").css("top", "0");
     $(".title-search").css("left", "42%");
     $(".search-box").css("display","none");
     
    
  });
  $( ".addRecipeBtn" ).click(function() {
    $( "#title" ).css( "font-size", "50px" );
    $(".title-search").css("position", "fixed");
    $(".title-search").css("top", "0");
    $(".title-search").css("left", "42%");
    $(".search-box").css("display","none");
   
 });
   $( "#contact" ).click(function() {
  $( "#title" ).css( "font-size", "50px" );
  $(".title-search").css("position", "fixed");
  $(".title-search").css("top", "0");
  $(".title-search").css("left", "42%");
  $(".search-box").css("display","none");
 
});

 
 $( "#contact" ).on( "click", function () {
  $( ".concactInfo" ).css( "display", "block" );
} );
  
  });

  
  //function toggle_visibility(id) {
  //  var menu = document.getElementById(id);
  //  if (menu.style.display == 'block') {
  //      menu.style.display = 'none';
  //  } else {
  //      menu.style.display = 'block';
  //  }
  //}
  //