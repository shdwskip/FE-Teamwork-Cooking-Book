$(function () {

  $("#ratingStar").click(function () {
    $("#stars").toggle();

  });
  $(document).mouseover(function (e) {
    var container = $("#stars");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $("#stars").css("display", "none");
    } else {
      $("#stars").css("display", "block");
    }
  });
  var sum = 0;
  var $totalRating = 0;


  $("#ratingCounter").text(0);

  $("#stars").rateYo({
    starWidth: "30px",
    precision: 0,
    spacing: "5px",
    multiColor: {
      "startColor": "#FF0000", //RED
      "endColor": "#9acd32" //GREEN
    }

  });

  $("#stars").on("rateyo.set", function (e, data) {
    var $recipesData = JSON.parse(localStorage.getItem('allRecipes'));
    var $currentId = $('.meal-basics').attr('id');
    var $currentRating = parseFloat(stars.getRating($currentId).rating);
    var $ratings = stars.getRating($currentId).allRatings;

    $ratings.push(data.rating);
    // localStorage.setItem('rating', JSON.stringify($ratings));


    alert("You vote with " + data.rating + "!");
    console.log($ratings);

    // var $total = 0;
    // var $counter = 0;
    // $.each($ratings, function () {
    //   // $total += parseFloat(this, 10);
    //   $counter++;
    // });
    var $totalRating = 0;

    //for (var i = 0; i < $ratings.length; i += 1) {
    //  $totalRating += $ratings[i];
    //}
$ratings.forEach(function(el) {
   $totalRating += el;
})

    $totalRating = ($totalRating / $ratings.length).toFixed(1);
    console.log('current rating' + $currentRating);
    // if($currentRating !== '0.00'){
    // $totalRating = ((parseFloat($currentRating) + $ratings[$ratings.length - 1]) / $counter).toFixed(2);
    // } else {
    //   $totalRating = $ratings[0];
    // }
    stars.setRating($currentId, $totalRating, $ratings);


    console.log($totalRating);


  });


  $("#stars").rateYo();

});


// $(document).ready(function () {
//   $(window).unload(saveSettings);
//   loadSettings();
// });

// function loadSettings() {

//   $('#ratingCounter').text(localStorage.totalRating);
// }

// function saveSettings() {

//   localStorage.totalRating = $('#ratingCounter').text();

// }