( function () {
    var $clearAllFields = function () {
        $( "select" ).val( $( "#default-category" ).val() );
        $( ".dialog" ).find( "input:text" ).val( "" );
        $( ".dialog" ).find( "textarea" ).val( "" );
        $( "#preview" ).attr( "src", "" );
    }

    $( "#add-recipe" ).on( "click", function () {
        $( ".dialog" ).css( "display", "block" );
    } );

    // var $select = $( "select" );
    // var $option = $ ( "#default-category" );
    
    $( "#close-add-recipe" ).on( "click", function () {
        $( ".dialog" ).css( "display", "none" );
        $clearAllFields();
    } );

    $( "#meal-img-url" ).on( "input", function () {
        $( "#preview" ).attr( "src", $(this).val());
    } );

    $( "#save-recipe" ).on( "click", function () {
        var $category = $('.category-select').find(":selected").html();
        var $recipeName = $('.recipe-name').find('input').val();
        var $ingredients = $('.ingredients-container').find('textarea').val().split(',');
        var $description = $('.description-container').find('textarea').val();
        var $imgURL = $('#meal-img-url').val();

        if ($category == 'Select Category' || $recipeName == '' || $ingredients == '' || $description == '' || $imgURL == '' ) {
            alert('Please, fill in all fields!');
            return false;
        }
        
        recipeControl.saveRecipe($category, $recipeName, $ingredients, $description, $imgURL);
        $clearAllFields();
        alert('Success!');
        $( ".dialog" ).css( "display", "none" );
    } );

} )();