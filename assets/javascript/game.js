// JS FOR OUR CRYSTAL GAME
// Initialize all variables that we will need
//crystals are randomly generated between 1 and 12
//number to guess is generated between 19 and 120
var number = 0; //holds random number to guess
var totalScore = 0; //users total score while guessing
var randomNumbers = [0, 0, 0, 0]; //crystal value
var wins = 0;
var losses = 0;

$("#totalScore").text(totalScore);

// first randomize crystal values & guessing number
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
randomize();//call so it runs initally

/*each crystal has its on click function. each click function will attach a unique random number to its crystal. once it has been clicked it will add that random number to the users total guess. It will then display that new number to the screen. after It will call on the funciton winLoss to see if the user has won or lost */

$("#crystal1").click(function() {
	//value is a local variable. just temporarily holds crystals current value.
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
/*function winLoss will check if the user has won or lost using an if statement. If they have either won or lost, it will alert to the screen and add 1 to wins or losses. then it calls on the clear function*/
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
//this function is used to reset our game
function clear() {
	//clear totalScore, users guess is back to 0
	totalScore = 0;
	$("#totalScore").text(totalScore);
	//re-reandomize numbers.
	randomize();
}