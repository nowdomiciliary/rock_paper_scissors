var botScore=0;
var	playerScore=0;
document.getElementById("rock").onclick=playerThrowsRock;
function playerThrowsRock(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
	displayPlayedMessage("You played Rock, Bot Played " + botsWeapon);
}
document.getElementById("scissors").onclick=playerThrowsScissors;
function playerThrowsScissors(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
	displayPlayedMessage("You played Paper, Bot Played " + botsWeapon);
}
document.getElementById("paper").onclick=playerThrowsPaper;
function playerThrowsPaper(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
	displayPlayedMessage("You played Paper, Bot Played" + botsWeapon);
}
function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
	}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("You Win!");
}
function displayPlayedMessage(msg){
	document.getElementById("played").innerHTML=msg;
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}

// function displayBotChoice(botsWeapon){
// 	document.getElementById("botChoice").innerHTML="Bot Played" + " " + botsWeapon;
// }