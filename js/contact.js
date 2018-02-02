$(function () {

  $(document).mouseup(function (e) {
    debugger;
    var container = $(".concactInfo");

    var win = $("#meal-window");


    if (!container.is(e.target) && container.has(e.target).length === 0 && win.has(e.target).length === 0) {

      $(".concactInfo").css("display", "none");

    }
  });
  
  $( "#contact" ).on( "click", function () {
    debugger;
    $( ".concactInfo" ).toggle();
  });       

});