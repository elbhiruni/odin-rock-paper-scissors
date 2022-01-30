let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll('button');
const score = document.querySelector('.score');
const result = document.querySelector('.result');
const winner = document.querySelector('.winner');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let playerSelection = button.className;
        let computerSelection = computerPlay();
        if (playerScore === 5 || computerScore === 5) {
            buttons[0].disabled = true;
            buttons[1].disabled = true;
            buttons[2].disabled = true;
        }
        playRound(playerSelection, computerSelection);
        score.textContent = `Player ${playerScore} Computer ${computerScore}`;
        if (playerScore === 5 && computerScore < 5) {
            winner.textContent = "PLAYER WINN!!!";
        }
        if (computerScore === 5 && playerScore < 5) {
            winner.textContent = "COMPUTER WINN!!!";
        }
    });
});

function computerPlay() {
    const randomNumber = Math.floor((Math.random() * 3) + 1);
    switch (randomNumber) {
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
        result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        return playerScore++;
    } else if (playerSelection === computerSelection) {
        result.textContent = `You Tide! ${computerSelection} and ${playerSelection}`;
        return playerScore += 0;
    } else {
        result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        return computerScore++;
    }
}
