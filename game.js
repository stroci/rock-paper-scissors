let userSelection;
let computerSelection;

const options = ["rock","scissors","paper"];
const resultMatrix = [["0","U","C"],["C","0","U"],["U","C","0"]];
let userScore = 0;
let computerScore = 0;

function playRound(player, computer) {
    let result = resultMatrix[options.indexOf(player)][options.indexOf(computer)];
    switch (result) {
        case "0":
            return "Round even! Nobody wins this round.";
            break;
        case "C":
            ++computerScore;
            return "Computer wins this round!"
            break;
        case "U":
            ++userScore;
            return "User wins this round!"
            break;
        default:
            break;
    }
}

function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];
}

function getUserChoice() {
    let input;
    while (true) {
        input = prompt("Choose your weapon (Rock / Paper / Scissors)!").trim().toLowerCase();
        if (options.includes(input)) {
            return input; console.log("NO");
        } else {
            alert("Invalid input! Please try again.");
        }
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        userSelection = getUserChoice();
        computerSelection = getComputerChoice();
        console.log(playRound(userSelection, computerSelection));
    }

    if (userScore === computerScore) {
        console.log("Game result is even, no winner!")
    } else if (userScore > computerScore) {
        console.log("User wins the game!")
    } else {
        console.log("computer wins the game!")
    }
}

game();
