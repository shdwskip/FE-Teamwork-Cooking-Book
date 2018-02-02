$(function () {

  $(document).mouseup(function (e) {

    var container = $("#side-menu");
    var win = $("#meal-window");
    $('#nav-overlay').click(function () {

      $("#side-menu").toggle();
    });

    if (!container.is(e.target) && container.has(e.target).length === 0 && win.has(e.target).length === 0) {

      $("#side-menu").css("display", "none");

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
  $("#contact").click(function () {
    moveTitle();
  });


  $("#contact").on("click", function () {
    $(".concactInfo").css("display", "block");
  });

  window.modifyTitle = {moveTitle};
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