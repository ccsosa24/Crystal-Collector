

//crystal variables//
var crystal = {
    blue: {
        name: "Blue",
        value: 0
    },

    green: {
        name: "Green",
        value: 0
    },

    purple: {
        name: "Purple",
        value: 0
    },

    red: {
        name: "Red",
        value: 0
    }
};

//Scores//
var currentScore = 0;
var targetScore = 0;

//wins/loses//
var winCount = 0;
var lossCount = 0;



//Functions//

var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//starts and reset//
var startGame = function () {

    currentScore = 0;

    targetScore = getRandom(19, 120);

    crystal.blue.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.purple.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);

    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

    console.log("-----------")
    console.log("Target Score: " + targetScore);
    console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Purple: " + crystal.purple.value + " | Red: " + crystal.red.value);
    console.log("------------")

}

//responds to clicks//
var addValues = function(crystal) {

    currentScore = currentScore + crystal.value;

    $("#yourScore").html(currentScore);

    checkWin();


    console.log("Your Score: " + currentScore);
}

//Win or Lose or Reset Game
var checkWin = function() {

    if(currentScore > targetScore) {
        alert("Sorry! You Lose!");
        console.log("YOu Lost");

        lossCount++;

        $("#lossCount").html(lossCount);

        //reset Game//
         startGame();

    }

    else if (currentScore == targetScore) {
        alert("You Won!!!");
        console.log("You Won");

        winCount++;

        $("#winCount").html(winCount);

        //reset Game//
        startGame();

        
    }
}



startGame();

//click functions//
$("#blue").click(function () {
    addValues(crystal.blue);
});
$("#green").click(function () {
    addValues(crystal.green);
});
$("#purple").click(function () {
    addValues(crystal.purple);
});
$("#red").click(function () {
    addValues(crystal.red);
});