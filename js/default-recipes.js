(function () {
    var brusselsSprouts = {
        id: recipeControl.generateId(),
        category: 'Vegan',
        name: 'Roasted Brussels Sprouts',
        ingredients: [
            '1 1/2 pounds Brussels sprouts, ends trimmed and yellow leaves removed',
            '1 teaspoon kosher salt',
            '3 tablespoons olive oil',
            '1/2 teaspoon freshly ground black pepper'
        ],
        preparation: `Preheat oven to 400 degrees F (205 degrees C).
        Place trimmed Brussels sprouts, olive oil, kosher salt, and pepper in a large resealable plastic bag. Seal tightly, and shake to coat. Pour onto a baking sheet, and place on center oven rack.
        Roast in the preheated oven for 30 to 45 minutes, shaking pan every 5 to 7 minutes for even browning. Reduce heat when necessary to prevent burning. Brussels sprouts should be darkest brown, almost black, when done. Adjust seasoning with kosher salt, if necessary. Serve immediately.`,
        picture: 'http://images.media-allrecipes.com/userphotos/720x405/812447.jpg',
        nutrition: {
            totalCalories: "90 kCal",
            fat: "54.6",
            saturatedFat: "5.8",
            cholesterol: "79",
            sodium: "241",
            totalCarbs: "82",
            fibyr: "7.4",
            sugar: "0.5",
            protein: "19.6"
        },
        servings: 3,
        time: '55min',
        allRatings: [],
        totalRating: 0

    };

    var meatballsNirvana = {
        id: recipeControl.generateId(),
        category: 'Meat',
        name: 'Meatballs Nirvana',
        ingredients: [
            '1 pound extra lean ground beef',
            '1/2 teaspoon sea salt',
            '1 small onion - diced', '1/2 teaspoon garlic salt', '1 1/2 teaspoons Italian seasoning', '3/4 teaspoon dried oregano', '3/4 teaspoon crushed red pepper flakes',
            '1 dash hot pepper sauce or to taste', '1 1/2 tablespoons Worcestershire sauce', '1/3 cup skim milk', '1/4 cup grated Parmesan cheese', '1/2 cup seasoned bread crumbs'
        ],
        preparation: `Preheat an oven to 400 degrees F (200 degrees C).
        Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet.
        Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.`,
        picture: 'http://www.tastefulvoyages.com/uploads/8/1/9/8/81986800/24785610c75cdf1f5-62-1prince-meatballs-web-00010-edit_2_orig.jpg',
        nutrition: {
            totalCalories: "384 kCal",
            fat: "34.6",
            saturatedFat: "6.8",
            cholesterol: "99",
            sodium: "450",
            totalCarbs: "80.9",
            fibyr: "5.4",
            sugar: "1.5",
            protein: "27.6"
        },
        servings: 4,
        time: '1h 30min',
        allRatings: [],
        totalRating: 0
    };

    var tunaSteaks = {
        id: recipeControl.generateId(),
        category: 'Fish',
        name: 'Seared Ahi Tuna Steaks',
        ingredients: [
            '2 (5 ounce) ahi tuna steaks',
            '1 teaspoon kosher salt', '1/4 teaspoon cayenne pepper', '1/2 tablespoon butter',
            '2 tablespoons olive oil', '1 teaspoon whole peppercorns'
        ],
        preparation: `Season the tuna steaks with salt and cayenne pepper.
        Melt the butter with the olive oil in a skillet over medium-high heat.
        Cook the peppercorns in the mixture until they soften and pop, about 5 minutes.
        Gently place the seasoned tuna in the skillet and cook to desired doneness, 1 1/2 minutes per side for rare.`,
        picture: 'http://images.media-allrecipes.com/userphotos/720x405/762704.jpg',
        nutrition: {
            totalCalories: "190 kCal",
            fat: "24.6",
            saturatedFat: "5.8",
            cholesterol: "79",
            sodium: "350",
            totalCarbs: "80.9",
            fibyr: "3.4",
            sugar: "0.5",
            protein: "17.6"
        },
        servings: 6,
        time: '1h 20min',
        allRatings: [],
        totalRating: 0
    };

    var tooMuchChoco = {
        id: recipeControl.generateId(),
        category: 'Dessert',
        name: 'Too Much Chocolate Cake',
        ingredients: [
            "1 (18.25 ounce) package devil's food cake mix", "1 (5.9 ounce) package instant chocolate pudding mix",
            "1 cup sour cream", "1 cup vegetable oil", "4 eggs", "1/2 cup warm water", "2 cups semisweet chocolate chips"
        ],
        preparation: `Preheat oven to 350 degrees F (175 degrees C).
        In a large bowl, mix together the cake and pudding mixes, sour cream, oil, beaten eggs and water.
        Stir in the chocolate chips and pour batter into a well greased 12 cup bundt pan.
        Bake for 50 to 55 minutes, or until top is springy to the touch and a wooden toothpick inserted comes out clean.
        Cool cake thoroughly in pan at least an hour and a half before inverting onto a plate.
        If desired, dust the cake with powdered sugar.`,
        picture: 'http://images.media-allrecipes.com/userphotos/720x405/1130307.jpg',
        nutrition: {
            totalCalories: "690 kCal",
            fat: "38.6",
            saturatedFat: "12.8",
            cholesterol: "79",
            sodium: "550",
            totalCarbs: "60.9",
            fibyr: "2.4",
            sugar: "43.5",
            protein: "7.6"
        },
        servings: 4,
        time: '40min',
        allRatings: [],
        totalRating: 0
    };

    var $defaultRecipes = localStorage.getItem('allRecipes') ?
    localStorage.getItem('allRecipes') : [brusselsSprouts, meatballsNirvana, tunaSteaks, tooMuchChoco];
    
    if (typeof $defaultRecipes !== 'string') {
        localStorage.setItem('allRecipes', JSON.stringify($defaultRecipes));
    }
})();