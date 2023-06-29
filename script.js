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

