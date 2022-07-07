//NOTES



//change h1 color on h1 click
$("h1").click(function(){
    $("h1").css("color", "purple");
});

//log key strokes anywhere on dom
$(document).keydown(function(event){
    console.log(event.key);
});

//change h1 color on button click
$("button").click(function(){
    $("h1").css("color", "red");
});

//change h1 text to any key pressed on dom
$(document).keydown(function(event){
   $("h1").text(event.key);
});

//change h1 color on mouseover
$("h1").on("mouseover", function(){
    $("h1").css("color", "yellow");
});

//create new elements before/after, prepend/append
$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").append("<button>New</button>");
$("h1").prepend("<button>New</button>");

//remove elements
// $("button").remove();


// hide/show/toggle/fadeOut/fadeIn/slideUp/slideDown elements on click
// $("button").on("click", function(){
//     $("h1").toggle();
// });
// $("button").on("click", function(){
//     $("h1").hide();
// });
// $("button").on("click", function(){
//     $("h1").show();
// });
$("h1").on("click", function(){
    $("h1").fadeOut();
});
$("h1").on("click", function(){
    $("h1").fadeIn();
});
//can also slideToggle and fadeToggle



//animate (must use css with a numerical value, ie:cannot change color)
$("button").on("click", function(){
    // $("h1").animate({opacity: 0.5});
    $("h1").animate({margin: 20});
    // $("h1").animate({margin: "20%"});
});


//chaining methods
$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});