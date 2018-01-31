(function (scope) {
    // debugger;
    // change this code to listen when title or picture of meal is clicked
    $('#meat-button').on('click', function () {
        $id = '_g1cb8y5n5';
        visualizeMeal($id);
    });
    //========================

    var visualizeMeal = function (id) {
        var $recipesData = JSON.parse(localStorage.getItem('allRecipes'));
        if ($('.meal-window').css('display') === 'none') {
            for (var i = 0; i < $recipesData.length; i += 1) {
                var recipe = $recipesData[i];
                if (recipe.id === id) {
                    $('#meal-name').html(recipe.name);
                    if (recipe.servings) {
                        $('#svg-serv').after(recipe.servings + ' servings');
                    }
                    if (recipe.time) {
                        $('#svg-time').after(recipe.time);
                    }
                    if (recipe.nutrition) {
                        $('#svg-cals').after(recipe.nutrition.totalCalories);
                    }
                    $('#ingrids').html(recipe.ingredients.join(', '));
                    $('#preparation').html(recipe.preparation);
                    $('#meal-pic').attr('src', recipe.picture);
                    $('.meal-window').css('display', 'block');
                    break;
                }
            }
        }
    }

    scope.mealControl = {
        visualizeMeal
    }

})(window);