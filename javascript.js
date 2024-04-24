

const div = document.querySelector("div");
div.setAttribute("style", "height:200px; margin:50px; width:800px;");
const rock = document.createElement("button");
div.appendChild(rock);
rock.setAttribute("style", "height:30px; margin:20px; width:70px;");
rock.textContent = "Rock";
const paper = document.createElement("button");
paper.setAttribute("style", "height:30px; margin:20px; width:70px;");
paper.textContent = "Paper";
div.appendChild(paper);
const scissors = document.createElement("button");
scissors.setAttribute("style", "height:30px; margin:20px; width:70px;");
scissors.textContent = "Scissors";
div.appendChild(scissors);



function getPlayerChoice() {
    let playerChoice = prompt('Rock,paper or scissors?').toUpperCase();
    if (playerChoice == 'ROCK')
        return 0;
    else if (playerChoice == 'PAPER')
        return 1;
    else if (playerChoice == 'SCISSORS')
        return 2;
    else
        return getPlayerChoice();

}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}



function playRound(playerSelection, computerSelection) {


    if (playerSelection == 0 && computerSelection == 2)
        return 'You win! rock beats scissors';

    else if (playerSelection == 1 && computerSelection == 0)
        return 'You win! paper beats rock';

    else if (playerSelection == 2 && computerSelection == 1)
        return 'You win! scissor beats paper';

    else if (playerSelection == computerSelection)
        return "It's a draw";

    else
        return "The computer wins! better luck next time";

}

/*function playGame() {

    let counterPlayerWin = 0;
    let counterCompWin = 0;


    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        playRound(playerSelection, computerSelection);
        if (result.includes("You"))
            counterPlayerWin++;
        else if (result.includes("The"))
            counterCompWin++;
    }

    if (counterPlayerWin > counterCompWin)
        alert("You win the game congrats");
    else if (counterCompWin > counterPlayerWin)
        alert("The computer wins better luck next time");
    else
        alert("It's a draw");
}
playGame();
*/