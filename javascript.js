

const div = document.querySelector("#container");
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


div.addEventListener('click', (event) =>{
      let target = event.target;
      switch(target)
      {
        case rock:
           playerSelection = 0;
           playRound(playerSelection,computerSelection)
           console.log("Rock clicked");
           break;

        case paper:
            playerSelection = 1;
            playRound(playerSelection,computerSelection)
            console.log("Paper clicked");
            break;
        
        case scissors:
            playerSelection = 2;
            playRound(playerSelection,computerSelection)
            console.log("Scissors clicked");
            break;
      }
});


function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}


function playRound(playerSelection, computerSelection) {

   
    let scorePlayer = 0;
    let scoreComp = 0;
    
    if (playerSelection == 0 && computerSelection == 2)
        scorePlayer++;

    else if (playerSelection == 1 && computerSelection == 0)
        scorePlayer++;

    else if (playerSelection == 2 && computerSelection == 1)
        scorePlayer++;

    else if (playerSelection == computerSelection)
         ;

    else
        scoreComp++;
        
    
    if(playerSelection == 5)
       

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