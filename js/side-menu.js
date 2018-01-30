$(function () {

  $('#nav-overlay').click(function () {  
    var container = $("#side-menu");       
    if($('#side-menu').css('display') == 'block') {
    
      $(document).mouseup(function(e) {       
        if (!container.is(e.target) && container.has(e.target).length === 0)  {
          $( "#side-menu" ).css( "display", "none" );         
        }
          $("#nav-overlay").click(function(){
          $( "#side-menu" ).toggle();
          
        });
    });
    
    } else {
      $( "#side-menu" ).css( "display", "block" );
    }
  });
})();

//$(document).mouseup(function(e) {
//    var container = $("#side-menu");     
//    if (!container.is(e.target) && container.has(e.target).length === 0) 
//    {
//       container.hide();
//    }
//
//});

$( "#m" ).click(function() {
    $( ".title-anchor" ).css( "font-size", "18px" );
    $( ".title-search" ).css( "position", "relative" );
    $( ".title-search" ).css( "top", "1" );
   
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