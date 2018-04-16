let player1 = 0;
let player2 = 0;

let scorePlayer1 = document.getElementById("scorePlayer1");
let buttonPlayer1 = document.getElementById("buttonPlayer1");


buttonPlayer1.addEventListener("click", function(){
	player1++;
	scorePlayer1.innerHTML = player1;
});