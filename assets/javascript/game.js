var widowPower = 30;
var hawkeyePower = 20;
var capPower = 50;
var ironPower = 40;
var widowHealth = 200;
var hawkeyeHealth = 150;
var capHealth = 500;
var ironHealth = 400;

var imgWidth = 180;
var imgHeight = 101;

// so apparently the actual code has an 'image builder' function that just...creates the whole image on the fly. like, the border, the padding, the text above and below the image, all of it is made and placed in the div using the function right then.
// presumably, that function needs, like, the text that goes above and below the image, the border color and crap, the padding, the path to the image, and the div to append it to??
// I have no idea how to update fucking ANYTHING after that??????

// $(".characters").click(function(e) {
//     var target = $(e.target);

//     if(target.is("#black-widow")){
//         $("#black-widow").animate({
//             top: "+=250px"
//         });
//         widowPower = 10;
//     }
//     else if(target.is("#cap")){
//         console.log("You have selected Captain America!");
//         capPower = 10;
//     }
//     else if(target.is("#iron-man")){
//         console.log("You have selected Iron Man!");
//         ironPower = 10;
//     }
//     else if(target.is("#hawkeye")){
//         console.log("You have selected Hawkeye!");
//         hawkeyePower = 10;
//     }
// })

imageBuilder(".character-selection", "#black-widow-img", "assets/images/black-widow.jpg", "Black Widow", widowHealth)
imageBuilder(".character-selection", "#hawkeye-img", "assets/images/hawkeye.jpg", "Hawkeye", hawkeyeHealth)
imageBuilder(".character-selection", "#cap-img", "assets/images/cap.jpg", "Captain America", capHealth)
imageBuilder(".character-selection", "#iron-img", "assets/images/iron-man.jpg", "Iron Man", ironHealth)

function imageBuilder(target, imgId, path, name, health) {
    var span = $("<span/>");
    $(span).addClass("border-class");
    $(target).append(span);

    // without the divs, I can't figure out how to get the text to sit above and below the image like in the thing. but with the divs, the images don't line up next to each other.
    var span1 = $("<span/>");
    $(span1).addClass("name-text")
    $(span).prepend(span1);
    $(span1).append(name);

    var img = $("<img>");
    img.attr("id", imgId);
    img.attr("src", path);
    img.appendTo(span);

    var span2 = $("<span/>");
    $(span2).addClass("health-text")
    $(span).append(span2);
    $(span2).append(health);
}

// this doesn't work anymore. I don't know why. it worked before. and the ids are definitely attached to the images correctly. but clicking on them does nothing.
$(".character-selection").click(function(e) {
    
    // it's definitely making it to here.
    console.log("click!");
    
    var target = $(e.target);

    console.log(target);

    // which means that for some reason, this just doesn't work now. given that it worked when I had the images set in the html, I think it must be something to do with the fact that I added the images with a function this time, but I have no fucking idea what to do about that, because Austin said that the way they did it in the actual solved code involved a builder function that set up the images and text and all literally as they became required.
    // okay. yeah. tried it. for some reason it's just...not registering clicks on these ids. I don't fucking get it.
    // the target variable definitely contains the ids I'm trying to target? ????????
    // confusion. much confusion. help. I suffer.
    if(target.is("#black-widow-img")){
        console.log("You have selected Black Widow!");
    }
    else if(target.is("#cap-img")){
        console.log("You have selected Captain America!");
    }
    else if(target.is("#iron-img")){
        console.log("You have selected Iron Man!");
    }
    else if(target.is("#hawkeye-img")){
        console.log("You have selected Hawkeye!");
    }
});