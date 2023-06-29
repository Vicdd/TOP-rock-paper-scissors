function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    switch (index) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return "Tie!";
        } else if (computerSelection == 'paper') {
            return "Computer Wins!";
        } else {
            return "Player Wins!";
        }
    }
    
    if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return "Player Wins!";
        } else if (computerSelection == 'paper') {
            return "Tie!";
        } else {
            return "Computer Wins!";
        }
    }

    if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return "Computer Wins!";
        } else if (computerSelection == 'paper') {
            return "Player Wins!";
        } else {
            return "Tie!";
        }
    }
    return "None";
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    let winner;

    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();

        // Keep asking for user input until it's valid (rock, paper or scissors)
        do {
            playerSelection = prompt("Type your choice (Rock, Paper or Scissors)");
            if (playerSelection == null) {
                return;
            }
            playerSelection = playerSelection.trim().toLowerCase();
        } while (playerSelection != "rock" &&  playerSelection != "paper" && playerSelection != "scissors");

        winner = playRound(playerSelection, computerSelection);

        console.log("Round " + (i+1) + ": Player - " + playerSelection + " vs Computer - " + computerSelection);
        console.log(winner);

        if (winner == "Player Wins!") {
            playerPoints++;
        } else if (winner == "Computer Wins!") {
            computerPoints++;
        } else {
            playerPoints++;
            computerPoints++;
        }
    }
    
    console.log("----- End of Tournament -----");
    if (playerPoints > computerPoints) {
        console.log("Player wins!");
    } else if (playerPoints < computerPoints) {
        console.log("Computer wins!");
    } else {
        console.log("Tie!");
    }
    console.log("Score: Player: " + playerPoints + ", Computer:" + computerPoints);
}

game();