//create localStorage item
if (!localStorage.getItem("_lequanghuylc_recipes_jquery")) {
    localStorage.setItem("_lequanghuylc_recipes_jquery", "");
}
//set data to localStorage function
function saveData() {
    localStorage.setItem("_lequanghuylc_recipes_jquery", $("#content").html());
}

// click add recipe button
debugger;

$("#container > button").on("click", function () {
    $(".dialog").toggle();
});
// click row
$("#content").on("click", ".row", function () {
    var thisElement = $(this);
    $(this).next().slideToggle(function () {
        $(".row").each(function () {
            if (!$(this).is(thisElement)) {
                $(this).next().css("display", "none");
            }
        });
    });
});
//click delete button
$("#content").on("click", ".hiddenrow button:first-of-type", function () {
    $(this).parent().prev().remove();
    $(this).parent().remove();
    saveData();
});
//click edit button to open dialogEdit
$("#content").on("click", ".hiddenrow button:last-of-type", function () {
    var ingreText = '';
    var ingreContent = $(this).parent().find("li");
    ingreContent.each(function () {
        ingreText += $(this).text() + ",";
    });
    ingreText = ingreText.substring(ingreText.length - 1, -1);
    $(".dialogEdit .board textarea").val(ingreText);
    $(".dialogEdit .board input").val($(this).parent().prev().text());
    $(".dialogEdit").toggle();
});
//click add recipe in dialog
$(".dialog .board button:first-of-type").click(function () {
    $("#content").append('<div class="row">' + $(".board input").val() + '</div>');
    var ingreArr = $(".dialog .board textarea").val().split(",");
    var ingreContent = '';
    if (ingreArr[0]) {
        for (var i = 0; i < ingreArr.length; i++) {
            ingreContent += "<li>" + ingreArr[i] + "</li>";
        }
    } else {
        ingreContent = "<li>Click edit to add ingredients</li>";
    }
    $("#content").append('<div class="hiddenrow"><h2>Ingredients</h2><hr><ul>' + ingreContent + ' </ul><hr><button>Delete</button><button>Edit</button></div>');
    $(".dialog .board input").val("");
    $(".dialog .board textarea").val("");
    $(".dialog").toggle();
    saveData();
});

//click close in dialog
$(".dialog .board button:last-of-type").click(function () {
    $(".dialog .board textarea").val("");
    $(".dialog .board input").val("");
    $(".dialog").toggle();
});

//click edit in dialogEdit
$(".dialogEdit .board button:first-of-type").click(function () {
    var ingreArr = $(".dialogEdit .board textarea").val().split(",");
    var ingreContent = '';
    if (ingreArr[0]) {
        for (var i = 0; i < ingreArr.length; i++) {
            ingreContent += "<li>" + ingreArr[i] + "</li>";
        }
    } else {
        ingreContent = "<li>Click edit to add ingredients</li>";
    }
    $(".hiddenrow").each(function () {
        if ($(this).css("display") != "none") {
            $(this).html('<h2>Ingredients</h2><hr><ul>' + ingreContent + ' </ul><hr><button>Delete</button><button>Edit</button>');
        }
    });
    $(".dialogEdit .board textarea").val("");
    $(".dialogEdit .board input").val("");
    $(".dialogEdit").toggle();
    saveData();
});

//click close in dialogEdit
$(".dialogEdit .board button:last-of-type").click(function () {
    $(".dialogEdit .board textarea").val("");
    $(".dialogEdit .board input").val("");
    $(".dialogEdit").toggle();
});
$(function () {
    if (localStorage.getItem("_lequanghuylc_recipes_jquery")) {
        $("#content").html(localStorage.getItem("_lequanghuylc_recipes_jquery"));
    }
});