(function (scope) {
  var $commentButton = $("#showRecipeCommentsBtn");
  var $commentWindow = $("#getRecipeComments");
  var $sideMenuWindow = $("#side-menu");

  var $mealDetailsWindow = $("#meal-window");
  $mealDetailsWindow.css("transition", "margin-left 0.5s");
  $mealDetailsWindow.css("padding", "16px");


  $commentButton.on("click", function () {
    hideShowMenus();
  });


  var hideShowMenus = function () {
    if ($commentWindow.css("display") === "block") {
      $commentWindow.css("display", "none");

    } else {
      $commentWindow.css("display", "block");
    }

    if ($commentWindow.css("display") === "block") {
      $(".commentSlide").css("left", "67%");
      $mealDetailsWindow.css("margin-left", "-16.5%");
      $sideMenuWindow.css("display", "none");

    } else {
      $(".commentSlide").css("left", "100%");
      $mealDetailsWindow.css("margin-left", "");
      $sideMenuWindow.css("display", "block");

    }
  };

  var hideShowMenusBack = function () {
    $commentButton.css("display", "none");
    $commentWindow.css("display", "none");
    $sideMenuWindow.css("display", "block");

  };

  scope.menu = {
    hideShowMenus,
    hideShowMenusBack,
  };


})(window);