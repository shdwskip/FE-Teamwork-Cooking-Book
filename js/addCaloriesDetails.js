

   (function () {
    $("#calories").css("cursor", "pointer");
    // debugger;
    // change this code to listen when title or picture of meal is clicked
    $("#calories").click(function(){
        var $id = $('.meal-basics').attr('id');
        visualizeCalories($id);
      });


    var visualizeCalories = function (id) {
        var $recipesData = JSON.parse(localStorage.getItem('allRecipes'));
    //   for (var i = 0; i < $recipesData.length; i += 1) {
    //      var recipe = $recipesData[i];
    //      if (recipe.id === id) {
            
    //        $('#tfat').text($recipesData[i].nutrition.fat);
    //        $('#sfat').text($recipesData[i].nutrition.saturatedFat);
    //        $('#chol').text($recipesData[i].nutrition.cholesterol);
    //        $('#sod').text($recipesData[i].nutrition.sodium);
    //        $('#tcarbs').text($recipesData[i].nutrition.totalCarbs);
    //        $('#fib').text($recipesData[i].nutrition.fibyr);
    //        $('#sug').text($recipesData[i].nutrition.sugar);
    //        $('#pro').text($recipesData[i].nutrition.protein);
          
    //          }      
          
    //      }
 
    $recipesData.forEach(function (element) {   
       
           
          $('#tfat').text(element.nutrition.fat);
          $('#sfat').text(element.nutrition.saturatedFat);
          $('#chol').text(element.nutrition.cholesterol);
          $('#sod').text(element.nutrition.sodium);
          $('#tcarbs').text(element.nutrition.totalCarbs);
          $('#fib').text(element.nutrition.fibyr);
          $('#sug').text(element.nutrition.sugar);
          $('#pro').text(element.nutrition.protein);
         
            
          
      });
        }
    

})();