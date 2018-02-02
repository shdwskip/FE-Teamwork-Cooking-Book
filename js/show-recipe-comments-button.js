(function (scope) {
  var $commentButtonClicked = $("#showRecipeComments");
  var $commentWindow = $("#getSpammedComments");
  var $menuWindow = $("#side-menu");

  var $mealInfoWindow = $("#meal-window");
  $mealInfoWindow.css("transition", "margin-left 0.5s");
  $mealInfoWindow.css("padding", "16px");


  $commentButtonClicked.on("click", function () {
    hideShowMenus();
  });

  var hideShowMenus = function () {
    var property = $commentWindow.css("display");
    if (property === "block") {
      $commentWindow.css("display", "none");

    } else {
      $commentWindow.css("display", "block");
    }

    if ($commentWindow.css("display") === "block") {
      $(".commentSlide").css("left", "67%");
      $mealInfoWindow.css("margin-left", "-16.5%");
      $menuWindow.css("display", "none");
    } else {
      $(".commentSlide").css("left", "100%");
      $mealInfoWindow.css("margin-left", "");
      $menuWindow.css("display", "block");
    }
  };

  scope.menu = {
    hideShowMenus
  };


})(window);