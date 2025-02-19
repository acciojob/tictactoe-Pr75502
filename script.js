//your JS code here. If required.
function showBoard(){
	   let player1 = document.getElementById("player-1").value.trim();
    let player2 = document.getElementById("player-2").value.trim();
    let turnMessage = document.getElementById("name");
	  if (player1 === "" || player2 === "") {
        alert("Please enter both player names!");
        return;
	  }
	document.getElementById("board").style.display  ="grid";
		currentPlayer = "X"; 
    turnMessage.innerText = `Player ${player1}'s turn (${currentPlayer})`;
	
}
let player1=document.getElementById("player-1")
let player2=document.getElementById("player-2")
let turnMsg=document.getElementById("name")
