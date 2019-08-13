var widowPower = 30;
var hawkeyePower = 20;
var capPower = 50;
var ironPower = 40;

// this is for keeping track of your current attack power, and it's the variable that will be incremented with the power of the character you're playing, which will be assigned the base attack power and keep the base attack power.
var currentAttack = 0;

// these health stats are maybe a little unfair with Cap and Iron Man. the reason for this is that Iron Man has armor and Cap's a super soldier, they probably would have ridiculous health stats in a game.
var widowHealth = 250;
var hawkeyeHealth = 200;
var capHealth = 500;
var ironHealth = 400;

var imgWidth = 180;
var imgHeight = 101;

// so apparently the actual code has an 'image builder' function that just...creates the whole image on the fly. like, the border, the padding, the text above and below the image, all of it is made and placed in the div using the function right then.
// presumably, that function needs, like, the text that goes above and below the image, the border color and crap, the padding, the path to the image, and the div to append it to??
// I have no idea how to update fucking ANYTHING after that??????

// things to do:
// on click of character, they are now your player character. update where this character appears to be in the 'your character' div, and move all the others to an enemy div.
// on click of character in enemy div, move them to 'the one you're actively fighting'--the defender div.
// on click of attack button, your character attacks the defender character. they lose health, your attack power increments (+10, unless I change the player attack power), and the defender's health is updated.
// after your power increments, the defender auto-attacks back.
// have a checker for if your health is less than or equal to 0 or if the defender's health is less than or equal to 0
// if the defender's health is less than or equal to 0, you win, and may then select a new enemy
// if your health is less than or equal to 0, you lose.
// this one says nothing about auto replay, so I'm going to say that if you lose, you have to reload the page to try again, and if you successfully beat all three enemies, you have to reload the page to play again.
// subsequently, I will not be keeping track of wins and losses.
// I know that the game wants me to give all the characters different attack power. but I think that's stupid, because that inherently means there's going to be a stronger character with whom you're inherently more likely to win as long as you aren't really dumb about it, and the instructions also say that "the challenge should come from picking the right enemies, not choosing the strongest player." which to me implies there shouldn't BE a strongest player.
// in other words: I acknowledge that I've been given a direction but given that it's a stupid-ass direction, I've elected to ignore it.
// movie references make me happy.

imageBuilder(".character-selection", "#black-widow-img", "assets/images/black-widow.jpg", "Black Widow", widowHealth)
imageBuilder(".character-selection", "#cap-img", "assets/images/cap.jpg", "Captain America", capHealth)
imageBuilder(".character-selection", "#iron-img", "assets/images/iron-man.jpg", "Iron Man", ironHealth)
imageBuilder(".character-selection", "#hawkeye-img", "assets/images/hawkeye.jpg", "Hawkeye", hawkeyeHealth)

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

$(".character-selection").click(function(e) {
    
    // it's definitely making it to here.
    console.log("click!");
    
    var id = e.target.id;

    // the target variable definitely contains the ids I'm trying to target, so...
    console.log(id);

    // which means that for some reason, this just doesn't work now. given that it worked when I had the images set in the html, I think it must be something to do with the fact that I added the images with a function this time, but I have no fucking idea what to do about that, because Austin said that the way they did it in the actual solved code involved a builder function that set up the images and text and all literally as they became required.
    // okay. yeah. tried it. for some reason it's just...not registering clicks on these ids. I don't fucking get it.
    // confusion. much confusion. help. I suffer.
    // OKAY I changed it from target.is("#id") to this, and now it works. why???? I DON'T KNOW. but I'm just going to ROLL WITH IT.
    if(id=="#black-widow-img"){
        console.log("You have selected Black Widow!");
        widowPower = 10;
        currentAttack = widowPower;
        $(".character-selection").empty();
        imageBuilder(".player-character", "#black-widow-img", "assets/images/black-widow.jpg", "Black Widow", widowHealth)
    }
    else if(id=="#cap-img"){
        console.log("You have selected Captain America!");
        capPower = 10;
        currentAttack = capPower;
        $(".character-selection").empty();
        imageBuilder(".player-character", "#cap-img", "assets/images/cap.jpg", "Captain America", capHealth)
    }
    else if(id=="#iron-img"){
        console.log("You have selected Iron Man!");
        ironPower = 10;
        currentAttack = ironPower;
        $(".character-selection").empty();
        imageBuilder(".player-character", "#iron-img", "assets/images/iron-man.jpg", "Iron Man", ironHealth)
    }
    else if(id=="#hawkeye-img"){
        console.log("You have selected Hawkeye!");
        hawkeyePower = 10;
        currentAttack = hawkeyePower;
        $(".character-selection").empty();
        imageBuilder(".player-character", "#hawkeye-img", "assets/images/hawkeye.jpg", "Hawkeye", hawkeyeHealth)
    }
});