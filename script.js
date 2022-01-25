let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    const randomNumber = Math.floor((Math.random() * 3) + 1);
    switch(randomNumber) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
        default:
            return "Default";
            break;
    }
}

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);

    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return playerScore++;
    } else if (playerSelection === computerSelection) {
        console.log("You Tied");
        return playerScore += 0;
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return computerScore++;
    }
}

function game() {
    for (let index = 1; index <= 5; index++) {
        let playerSelection = prompt("Choose Rock, Paper or Scissors");
        let computerSelection = computerPlay();

        if (playerSelection === null) {
            return "exit";
        }

        console.log(`Round ${index}`);
        console.log(`Computer : ${computerSelection}, Player : ${playerSelection}`);
        playRound(playerSelection, computerSelection);
    }
    console.log(`Score: Computer ${computerScore}, Player ${playerScore}`);
    
    return (playerScore > computerScore) ? "Player WIN!"
            : (playerScore < computerScore) ? "Computer WIN!"
            : "Tide!!!";
}

console.log(game());
