// JS FOR OUR CRYSTAL GAME
// Initialize all variables that we will need
//crystals are randomly generated between 1 and 12
//number to guess is generated between 19 and 120
var number = 0; //holds random number to guess
var totalScore = 0; //users total score while guessing
var randomNumbers = [0, 0, 0, 0]; //crystal value
var wins = 0;
var losses = 0;
var gameEnd = false;

function randomize() {
	//Display random number to be guessed to screen
	number = Math.floor((Math.random() * 101) + 19);
	$("#randomNumber").text(number);
	//set a four loop to randomly choose numbers for crystals
	for (var i = 0; i < randomNumbers.length; i++) {
		randomNumbers[i] = Math.floor((Math.random() * 12) + 1);
		console.log(randomNumbers);
	}
}
randomize();
//we now have the crystals values
//next we add the vaule to the individual crystals
$("#crystal1").click(function() {
	var value = randomNumbers[0];
	totalScore += value;
	$("#totalScore").text(totalScore);
	winLoss();
});
$("#crystal2").click(function() {
	var value = randomNumbers[1];
	totalScore += value;
	$("#totalScore").text(totalScore);
	winLoss();
});
$("#crystal3").click(function() {
	var value = randomNumbers[2];
	totalScore += value;
	$("#totalScore").text(totalScore);
	winLoss();
});
$("#crystal4").click(function() {
	var value = randomNumbers[3];
	totalScore += value;
	$("#totalScore").text(totalScore);
	winLoss();
});

function winLoss() {
	if (totalScore === number) {
		alert("you win!");
		wins += 1;
		$("#wins").text("WINS: " + wins);
		clear();
	} else if (totalScore > number) {
		alert("you lose");
		losses += 1;
		$("#losses").text("LOSSES: " + losses);
		clear();
	}
}

function clear() {
	totalScore = 0;
	$("#totalScore").text(totalScore);
	randomize();
}