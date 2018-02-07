
  if ($('body').width() <= 460){
      $('.sidenav').css('width', '100%');
      $(".recipeButton").css("margin-left","35%");
      $('#search').click(function() {
         $('#search').css('width', '300px');
      });
      $("#nav-overlay").click(function () {
        $("#title").css("font-size", "3vmax");
        $(".title-container").css("position", "fixed");
        $(".title-container").css("top", "0");
        $(".title-container").css("margin-top", "1%");
        $(".title-container").css("justify-content", "center");
        $(".search-box").css("display", "none");        
        
      
      });
      $(".menu li").click(function () {
        $(".sidenav").css("display", "none");
        $(".recipesShowModal").css("width", "100%");
        $(".recipesShowModal").css("margin-left", "0");
        
    
      });      
      $(document).on('click', '.recipeImageWindow', function (e) {
        var $currentClicked = this.childNodes[1];
        var $id = $currentClicked.alt;
        $('.recipesShowModal').css('display', 'none');
        $("#showRecipeCommentsBtn").css("display", "block");
        $("#meal-window").css("width", "100%");
        $("#meal-window").css("height", "100%");
        $('#ingrids').css('widht', "80%");
        $('#preparation').css('widht', "80%");
        $("#side-menu").css("display","none");
        $("#title").css("font-size", "3vmax");
        $(".title-container").css("position", "fixed");
        $(".title-container").css("top", "0");
        $(".title-container").css("margin-top", "1%");
        $(".title-container").css("justify-content", "center");
        $(".search-box").css("display", "none");
        $('body').css('width', '100%');
        $(".picture").removeClass( "col-xs-4" ).addClass( "col-xs-1" );
        $(".prepare").removeClass( "col-xs-6" ).addClass( "col-xs-1" );
        $(".ingredients").removeClass( "col-xs-6" ).addClass( "col-xs-1" );

      
    });
  }
  else if ($('body').width() >= 460 && $('body').width() <= 720){
    $('#search').click(function() {
      $('#search').css('width', '400px');
   });
    $("#nav-overlay").click(function () {
      
      $(".title-search").css("margin-left", "100px");
      $(".title-search").css("margin-top", "20%");

      $(".menu li").click(function () {
        $(".sidenav").css("display", "none");
        $(".recipesShowModal").css("width", "90%");
        $(".recipesShowModal").css("height", "90%");
        $(".recipesShowModal").css("margin-left", "0");
        $("#title").css("font-size", "3vmax");
        $(".title-container").css("position", "fixed");
        $(".title-container").css("top", "0");
        $(".title-container").css("margin-top", "1%");
        $(".title-container").css("justify-content", "center");
        $(".search-box").css("display", "none");
        $(".title-search").css("margin-left", "0");
        $(".recipesShowModal").css("right", "5%");
    
      });    
      
  
    });

       
}

else if ($('body').width() >= 720 && $('body').width() <= 860){ 
    
   

    $(".menu li").click(function () {
     
      $("#title").css("font-size", "3vmax");
      $(".title-container").css("position", "fixed");
      $(".title-container").css("top", "0");
      $(".title-container").css("margin-top", "1%");
      $(".title-container").css("justify-content", "center");
      $(".search-box").css("display", "none");
      $(".title-search").css("margin-left", "0");
      $(".recipesShowModal").css("right", "8%");
      $('.stats').css('font-size', '14px');
      $(".recipeMainWindow").removeClass( "col-sm-6" ).addClass( "col-sm-12" );
     
  
    });      


     
}

else if ($('body').width() >= 860 && $('body').width() <= 1024){ 
    
   

  $(".menu li").click(function () {  
    $(".picture").removeClass( "col-xs-4" ).addClass( "col-xs-6" );
    $(".prepare").removeClass( "col-xs-6" ).addClass( "col-xs-6" );
    $(".ingredients").removeClass( "col-xs-6" ).addClass( "col-xs-8" );
    $(".ingredients").css('font-size', '13px');
    $(".prepare").css('font-size', '13px');
    $(".prepare").css('margin-left', '-3px');

  });      


   
}