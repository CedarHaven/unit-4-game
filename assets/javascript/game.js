var widowPower = 30;
var hawkeyePower = 20;
var capPower = 50;
var ironPower = 40;
var widowHealth = 200;
var hawkeyeHealth = 150;
var capHealth = 500;
var ironHealth = 400;

// so apparently the actual code has an 'image builder' function that just...creates the whole image on the fly. like, the border, the padding, the text above and below the image, all of it is made and placed in the div using the function right then.
// presumably, that function needs, like, the text that goes above and below the image, the border color and crap, the padding, the path to the image, and the div to append it to??
// I have no idea how to update fucking ANYTHING after that??????

// $("#widow-health").append(widowHealth);

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