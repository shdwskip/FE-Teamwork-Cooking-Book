( function (scope) {
    var $allRecipes = localStorage.getItem('allRecipes') ? localStorage.getItem('allRecipes') : [];

    var saveRecipe = function ($category, $recipeName, $ingredients, $description, $imgURL) {
        var $recipe = {
            id: generateId(),
            category: $category,
            name: $recipeName,
            ingredients: $ingredients,
            preparation: $description,
            picture: $imgURL
        }

        if (!Array.isArray($allRecipes)) {
            $allRecipes = JSON.parse($allRecipes);
        }

        $allRecipes.push($recipe);
        localStorage.setItem('allRecipes', JSON.stringify($allRecipes));
    }

    var generateId = function () {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
    
    scope.saveRecipe = saveRecipe;
    //  scope.data = {
    //      saveRecipe: saveRecipe
    //  }
} )(window);