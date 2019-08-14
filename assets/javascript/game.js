// this is an array of all the character objects.
// I know the instructions say 'give them all a different attack power.'
// but that seems very stupid to me, because it also says "there should be a way to win and lose with each character, it shouldn't just be about picking the strongest one!"
// ...and if one character has a base attack of 10 and another has 15, you're inherently more likely to win with the second one.
// which means that it is, then, just about picking the strongest character.
// basically: I recognize I was given a direction, but the direction was unclear to me and seems stupid, so I'm not doing that.
var characters = [ 
    {name: "Hawkeye",
    health: 200,
    playerAttack: 10,
    imgPath: "assets/images/hawkeye.jpg",
    enemyAttack: 30},

    {name: "Black Widow",
    health: 250,
    playerAttack: 10,
    imgPath: "assets/images/black-widow.jpg",
    enemyAttack: 20},

    {name: "Captain America",
    health: 500,
    playerAttack: 10,
    imgPath: "assets/images/cap.jpg",
    enemyAttack: 40},

    {name: "Iron Man",
    health: 400,
    playerAttack: 10,
    imgPath: "assets/images/iron-man.jpg",
    enemyAttack: 50}
]

// here is the array for the enemy characters, the object for the player character, and the object for the defender character.
// I also included a tracker of how many battles you've won, and when it hits 3, you win the game and are told you've won.
// defender is to check if you've already picked an enemy to fight, so that you can't keep picking enemies over and over, and also so you can't attack while there's no active enemy.
// youLive is to check if you're still alive, so that you can't attack after you die and lose the game.
var enemyChars = [];
var playerChar = {};
var defenderChar = {};
var win = 0;
var defender = false;
var youLive = true;

createCharacter();

function createCharacter() {
    for(var i = 0; i < characters.length; i++) {
        var charName = $("<div/>");
        var charImage = $("<img src = "+characters[i].imgPath+">");
        var charHealth = $("<div/>");
        charName.text(characters[i].name);
        charHealth.text(characters[i].health);

        // I had to do the data-name attribute stuff like this all the way through, because otherwise, any name other than Hawkeye's would only take the first part of the name. so you'd get stuff like data-name = "Captain", which...did not work.
        var charCard = $(`<div class = 'char-card' data-name = "${characters[i].name}">`);
        $(charCard).append(charName);
        $(charCard).append(charImage);
        $(charCard).append(charHealth);
        $(".character-selection").append(charCard);
    }
}

function appendEnemy() {
    for(var i = 0; i < enemyChars.length; i++){
        var charName = $("<div/>");
        var charImage = $("<img src = "+enemyChars[i].imgPath+">");
        var charHealth = $("<div/>");
        charName.text(enemyChars[i].name);
        charHealth.text(enemyChars[i].health);

        // I added the id to enemy character cards because I couldn't figure out how to remove them when they're selected as defenders without the id, and they do need to be removed from the enemy selection area when you choose them as a defender. I also removed the space from the name, because otherwise I couldn't select the id for things like "Black Widow".
        var id = enemyChars[i].name;
        id = id.replace(/\s/g, '');
        var charCard = $(`<div class = 'enemy-card' data-name = "${enemyChars[i].name}">`);
        charCard.attr("id", id);
        $(charCard).append(charName);
        $(charCard).append(charImage);
        $(charCard).append(charHealth);
        $(".enemy-characters").append(charCard);
    }
}

function appendPlayer(){
    var charName = $("<div/>");
    var charImage = $("<img src = "+playerChar.imgPath+">");
    var charHealth = $("<div class = 'player-health'/>");
    charName.text(playerChar.name);
    charHealth.text(playerChar.health);
    var charCard = $(`<div class = 'player-card' data-name = "${playerChar.name}">`);
    $(charCard).append(charName);
    $(charCard).append(charImage);
    $(charCard).append(charHealth);
    $(".player-character").append(charCard);
}

function appendDefender(){
    var charName = $("<div/>");
    var charImage = $("<img src = "+defenderChar.imgPath+">");
    var charHealth = $("<div class = 'defender-health'/>");
    charName.text(defenderChar.name);
    charHealth.text(defenderChar.health);
    var charCard = $(`<div class = 'defender-card' data-name = "${defenderChar.name}">`);
    $(charCard).append(charName);
    $(charCard).append(charImage);
    $(charCard).append(charHealth);
    $(".current-enemy").append(charCard);
}

function defHealthUpdate() {
    $(".defender-health").html(defenderChar.health);
}

function playerHealthUpdate() {
    $(".player-health").html(playerChar.health);
}

$(".character-selection").on("click", ".char-card", function(e) {
    
    // this goes looking for the customized data-name attribute of what you clicked on.
    var charSelect = $(this).attr("data-name");

    // this is the charSelect thing. it determines who you've chosen as your player, empties the selection div, sets your player charater object, sets your current attack power (which will later be incremented by playerAttack), sets the array of enemy characters, and then appends the enemy characters to the appropriate div and the player character to the appropriate div.
    if(charSelect === "Hawkeye") {
        console.log("You have selected Hawkeye!");
        $(".character-selection").empty();

        for(var i = 0; i < characters.length; i++){
            if(characters[i].name != "Hawkeye"){
                enemyChars.push(characters[i]);
            }
            else{
                playerChar = characters[i];
            }
        }

        appendPlayer();
        appendEnemy();
    }
    else if(charSelect === "Black Widow") {
        console.log("You have selected Black Widow!");
        $(".character-selection").empty();

        for(var i = 0; i < characters.length; i++){
            if(characters[i].name != "Black Widow"){
                enemyChars.push(characters[i]);
            }
            else{
                playerChar = characters[i];
            }
        }

        currentAttack = playerChar.playerAttack;
        appendPlayer();
        appendEnemy();
    }
    else if(charSelect === "Captain America") {
        console.log("You have selected Captain America!");
        $(".character-selection").empty();

        for(var i = 0; i < characters.length; i++){
            if(characters[i].name != "Captain America"){
                enemyChars.push(characters[i]);
            }
            else{
                playerChar = characters[i];
            }
        }

        appendPlayer();
        appendEnemy();
    }
    else if(charSelect === "Iron Man") {
        console.log("You have selected Iron Man!");
        $(".character-selection").empty();

        for(var i = 0; i < characters.length; i++){
            if(characters[i].name != "Iron Man"){
                enemyChars.push(characters[i]);
            }
            else{
                playerChar = characters[i];
            }
        }

        appendPlayer();
        appendEnemy();
    }
});

$(".enemy-characters").on("click", ".enemy-card", function(e) {
    if(!defender) {
        var defSelect = $(this).attr("data-name");
        console.log(defSelect);

        if(defSelect === "Hawkeye") {
            console.log("You have chosen to fight Hawkeye!");

            for(var i = 0; i < enemyChars.length; i++) {
                if(enemyChars[i].name === "Hawkeye") {
                    defenderChar = enemyChars[i];
                    defender = true;
                }
            }

            $("#Hawkeye").remove();
            appendDefender();
        }
        else if(defSelect === "Black Widow") {
            console.log("You have chosen to fight Black Widow!");

            for(var i = 0; i < enemyChars.length; i++) {
                if(enemyChars[i].name === "Black Widow") {
                    defenderChar = enemyChars[i];
                    defender = true;
                }
            }

            $("#BlackWidow").remove();
            appendDefender();
        }
        else if(defSelect === "Captain America") {
            console.log("You have chosen to fight Captain America!");

            for(var i = 0; i < enemyChars.length; i++) {
                if(enemyChars[i].name === "Captain America") {
                    defenderChar = enemyChars[i];
                    defender = true;
                }
            }

            $("#CaptainAmerica").remove();
            appendDefender();
        }
        else if(defSelect === "Iron Man") {
            console.log("You have chosen to fight Iron Man!");

            for(var i = 0; i < enemyChars.length; i++) {
                if(enemyChars[i].name === "Iron Man") {
                    defenderChar = enemyChars[i];
                    defender = true;
                }
            }

            $("#IronMan").remove();
            appendDefender();
        }
    }
});

$("button").click(function(){
    if(defender && youLive){
        // you always attack first.
        defenderChar.health = defenderChar.health-playerChar.playerAttack;
        defHealthUpdate();

        // if your enemy isn' dead, they go next.
        if(defenderChar.health > 0) {
            playerChar.health = playerChar.health-defenderChar.enemyAttack;
            playerHealthUpdate();

            // given that these sentences show up at the exact same time in the demo, I felt okay about putting them here, because it only goes if you and your enemy are able to attack. if they can't attack, they're dead, and you get told you won the fight.
            $(".attacks").html("You attacked "+defenderChar.name+" for "+playerChar.playerAttack+" damage.<br>"+defenderChar.name+" attacked you for "+defenderChar.enemyAttack+" damage.");
            playerChar.playerAttack = playerChar.playerAttack+10;
        }

        // if you're now dead as a result of enemy attack, you are informed you have lost.
        if(playerChar.health <= 0) {
            $(".attacks").html("You have been defeated.<br>Game Over.");
            youLive = false;

        }
        else if(defenderChar.health <= 0) {
            $(".defender-card").remove();
            $(".attacks").html("You have defeated "+defenderChar.name+"! You may now select another enemy to fight.");
            defender = false;
            win++;
        }
    }

    if(win==3) {
        $(".attacks").html("You have won!");
    }
});

// things to do now:
// make reset button appear when you win or lose
// make a click of reset button call the createCharacter() function
// reset wins to 0 somewhere in createCharacter or the reset button press or something