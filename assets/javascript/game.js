var wins = 0;
var losses = 0;
var dog1 = 0;
var dog2 = 0;
var dog3 = 0;
var dog4 = 0;
var targetScore = 0;
var currentScore = 0;

function generateTargetScore() {
    targetScore = Math.floor(Math.random() * 120);
    console.log(targetScore);
}

function dogValues() {
    dog1 = Math.ceil(Math.random() * 12);
    dog2 = Math.ceil(Math.random() * 12);
    dog3 = Math.ceil(Math.random() * 12);
    dog4 = Math.ceil(Math.random() * 12);
    console.log(dog1+" "+dog2+" "+dog3+" "+dog4);
}

$("#dog1").on("click", function(){
    console.log("dog1 was clicked!");
    currentScore = currentScore+dog1;
    console.log(currentScore);
});

generateTargetScore();

dogValues();