$(function () {

  $(document).mouseup(function(e) {  
  
    var container = $("#side-menu");   
    var rowWindow = $(".recipesShowModal");
    var win = $("#meal-window");
    $('#nav-overlay').click(function () {  
      $("#side-menu").toggle();
    });     
  
    if (!container.is(e.target) && container.has(e.target).length === 0 && win.has(e.target).length ===0 && rowWindow.has(e.target).length ===0)  {             
        
      $( "#side-menu" ).css( "display", "none" );  
      
    } 
  });
  
  var moveTitle = function () {
    $("#title").css("font-size", "3vmax");
    $(".title-anchor").css("position", "fixed");
    $(".title-anchor").css("top", "0");
    $(".title-anchor").css("right", "40%");
    $(".title-anchor").css("margin-top", "1%");
    $(".title-anchor").css("justify-content", "center");
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


