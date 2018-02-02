$(function () {
    var database = JSON.parse(localStorage.getItem('allRecipes'));
    var recipesNames = [];
    database.forEach(function (recipe) {
        recipesNames.push(recipe.name);
    })
    $(".search-box").autocomplete({
        source: recipesNames
    });
});