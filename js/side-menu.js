$(function () {

  $(document).mouseup(function(e) {  
  
    var container = $("#side-menu");   
    var rowWindow = $(".recipesShowModal");
    var win = $("#meal-window");
    var recipes = $(".recipesShowModal"); 

    $('#nav-overlay').click(function () {  
      $("#side-menu").toggle();
    });     
  

    if (!container.is(e.target) && container.has(e.target).length === 0 && !win.is(e.target) && win.has(e.target).length ===0 && !recipes.is(e.target) && recipes.has(e.target).length ===0)  {             

        
      $( "#side-menu" ).css( "display", "none" );  
      
    } 
  });
  
  var moveTitle = function () {
    $("#title").css("font-size", "3vmax");
    $(".title-container").css("position", "fixed");
    $(".title-container").css("top", "0");
    $(".title-container").css("margin-top", "1%");
    $(".title-container").css("justify-content", "center");
    $(".search-box").css("display", "none");
  }
  $(".menu li").click(function () {
    moveTitle();


  });
  $(".addRecipeBtn").click(function () {
    moveTitle();

  });

  window.modifyTitle = {moveTitle};
});


