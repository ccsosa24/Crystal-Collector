

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

    purple:{
        name: "Purple",
        value: 0
    },

    red:{
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



//start functions//
var startGame(){
    var currentScore = 0;

    targetScore = math.floor(Math.random() * (120 - 19 + 1)) + 19;


}







//click functions//
$("#blue").click(function() {
    alert("test");
});
$("#green").click(function() {
    alert("test");
});
$("#purple").click(function() {
    alert("test");
});
$("#red").click(function() {
    alert("test");
});