let userSelection;
let computerSelection;

const weapon = ["rock","scissors","paper"];
const resultMatrix = [["even","user","computer"],["computer","even","user"],["user","computer","even"]];
let userScore = 0;
let computerScore = 0;
let evenScore = 0;

const userResult = document.querySelector("#result #user span");
const computerResult = document.querySelector("#result #computer span");
const evenResult = document.querySelector("#result #even span");

// function playRound(player, computer) {
//     let result = resultMatrix[weapon.indexOf(player)][weapon.indexOf(computer)];
//     switch (result) {
//         case "0":
//             return "Round even! Nobody wins this round.";
//             break;
//         case "C":
//             ++computerScore;
//             return "Computer wins this round!"
//             break;
//         case "U":
//             ++userScore;
//             return "User wins this round!"
//             break;
//         default:
//             break;
//     }
// }

function getComputerChoice() {
    return weapon[Math.floor(Math.random() * 3)];
}

function playRound(e) {
    userSelection =  this.getAttribute("data-weapon");
    computerSelection = getComputerChoice();
    updateScore(userSelection,computerSelection);    
    checkGame();
}

function checkGame() {
    if (computerScore !== 5 && userScore !== 5) return;
    (computerScore === 5) ? declareWinner("Computer") : declareWinner("User");
    restart();
}

function updateScore() {
    let result = resultMatrix[weapon.indexOf(userSelection)][weapon.indexOf(computerSelection)];
    switch (result) {
        case "even":
            console.log("Round even! Nobody wins this round.");
            evenResult.textContent = ++evenScore;
            break;
        case "computer":
            console.log("Computer wins this round!");
            computerResult.textContent = ++computerScore;
            break;
        case "user":
            userResult.textContent = ++userScore;
            console.log("User wins this round!");
            break;
        default:
            break;
    }
}

function declareWinner(winner) {
    alert(winner + " Wins!");
}

function restart() {
    userScore = 0;
    computerScore = 0;
    evenScore = 0;
    userResult.textContent = 0;
    computerResult.textContent = 0;
    evenResult.textContent = 0;
}

buttons = document.querySelectorAll(".weapon");
buttons.forEach(button => {
    button.addEventListener('click', playRound)
})

restart();