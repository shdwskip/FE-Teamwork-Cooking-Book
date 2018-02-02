$(function () {
    var database = JSON.parse(localStorage.getItem('allRecipes'));
    var recipesNames = [];
    database.forEach(function (recipe) {
        recipesNames.push(recipe.name);
    })

    $(".search-box").autocomplete({
        source: recipesNames,
        select: function (event, ui) {
            var $mealName = ui.item.value;
            var $mealId;
            var $mealCategory;
            database.forEach(function (recipe) {
                if (recipe.name === $mealName) {
                    $mealId = recipe.id;
                    $mealCategory = recipe.category;
                    return;
                }
            })
            meal.visualizeMeal($mealId);
            category.loadFromStorage($mealCategory);
        }
    });
});