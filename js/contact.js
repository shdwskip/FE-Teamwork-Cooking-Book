$(function () {

  $(document).mouseup(function (e) {

    var $container = $(".concactInfo");

    if (!$container.is(e.target) && $container.has(e.target).length === 0) {

      $(".concactInfo").css("display", "none");

    }
  });

  $("#contact").on("click", function () {
    $(".concactInfo").toggle();
    modifyTitle.moveTitle();
  });

});