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