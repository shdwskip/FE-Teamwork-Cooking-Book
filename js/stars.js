(function (scope) {


  $("#ratingStars").click(function () {
    var $id = $('.meal-basics').attr('id');
    setRating($id);
  });


  var setRating = function (recipeId, calculated, allRatings) {
  
    var $recipesData = JSON.parse(localStorage.getItem('allRecipes'));

  //  for (var i = 0; i < $recipesData.length; i += 1) {
  //    var recipe = $recipesData[i];
  //    if (recipe.id === recipeId) {
  //      recipe.totalRating = calculated;
  //      recipe.allRatings = allRatings;
  //      localStorage.setItem('allRecipes', JSON.stringify($recipesData));
  //      console.dir(localStorage.getItem("allRecies"))
  //      break;
  //    };
  //  }
  $recipesData.forEach(function (recipe) {
     
           recipe.totalRating = calculated;
           recipe.allRatings = allRatings;
           localStorage.setItem('allRecipes', JSON.stringify($recipesData));       
    
});
  
  }

  var getRating = function (recipeId) {
    var $recipesData = JSON.parse(localStorage.getItem('allRecipes'));
    var rating;
    // for (var i = 0; i < $recipesData.length; i += 1) {
    //   var recipe = $recipesData[i];
    //   if (recipe.id === recipeId) {
    //     rating = recipe.totalRating;
    //     allRatings = recipe.allRatings;
    //   };
    // }
    $recipesData.forEach(function (recipe) {      
      
      rating =recipe.totalRating;
      allRatings = recipe.allRatings;   

});
    return {
      rating,
      allRatings
    };
  }

  scope.stars = {
    setRating,
    getRating
  }
})(window);

