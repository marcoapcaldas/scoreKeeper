let player1 = 0;
let player2 = 0;
let numberOfPlays = 5;
let isThereWinner = false;

let scorePlayer1 = document.getElementById("scorePlayer1");
let scorePlayer2 = document.getElementById("scorePlayer2");
let buttonPlayer1 = document.getElementById("buttonPlayer1");
let buttonPlayer2 = document.getElementById("buttonPlayer2");
let buttonReset = document.getElementById("buttonReset");
let inputNumberOfPlays = document.getElementById("numberOfPlays");
let playNumber = document.getElementById("playNumber");

inputNumberOfPlays.addEventListener("change", function(){
	numberOfPlays = parseInt(inputNumberOfPlays.value);
	playNumber.innerHTML = numberOfPlays;
})

buttonPlayer1.addEventListener("click", function(){
	if (isThereWinner === false){
		player1++;
		scorePlayer1.innerHTML = player1;
		checkWinner();
	}
});

buttonPlayer2.addEventListener("click", function(){
	if (isThereWinner === false){
	player2++;
	scorePlayer2.innerHTML = player2;
	checkWinner();		
	}
});

buttonReset.addEventListener("click", function(){
	player2 = 0;
	player1 = 0;
	scorePlayer1.innerHTML = player1;
	scorePlayer2.innerHTML = player2;
	scorePlayer1.style.color = "black";
	scorePlayer2.style.color = "black";
	isThereWinner = false;
});

function checkWinner(){
	if (player1 === numberOfPlays){
		scorePlayer1.style.color = "green";
		isThereWinner = true;
	} else if (player2 === numberOfPlays) {
		scorePlayer2.style.color = "green";
		isThereWinner = true;
	}
};