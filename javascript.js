
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

const log = document.createElement("div");
div.appendChild(log);

const resPl = document.createElement("div");
div.appendChild(resPl);


const resComp = document.createElement("div");
div.appendChild(resComp);

let gameEnded = false;


div.addEventListener('click', (event) =>{
    if(gameEnded)
      return;
      
    let computerSelection;
    computerSelection = Math.floor(Math.random() * 3);

    let playerSelection;
    let target = event.target;
      switch(target)
      {
        case rock:
           playerSelection = 0;
           log.textContent = "Rock clicked";
           playRound(playerSelection,computerSelection);
           break;

        case paper:
            playerSelection = 1;
            log.textContent = "Paper clicked";
            playRound(playerSelection,computerSelection);
            break;
        
        case scissors:
            playerSelection = 2;
            log.textContent = "Scissors clicked";
            playRound(playerSelection,computerSelection);
            break;
      }
});


let scorePlayer = 0;
let scoreComp = 0;

function playRound(playerSelection, computerSelection){

    if(scoreComp == 5){
       res.textContent = `Game over the computer wins better luck next time`;
       scoreComp = 0;
       scorePlayer = 0;
    }
       
    else if(playerSelection == 0 && computerSelection == 2)
    {
        ++scorePlayer;
        if(scorePlayer == 5){
           gameEnded = true;
           resPl.textContent = `Game over player wins!!`
        }
        else{
           resPl.textContent = `Player score: ${scorePlayer}`;
           resComp.textContent = `Computer score: ${scoreComp}`;
        }
    }

    else if(playerSelection == 1 && computerSelection == 0){
        ++scorePlayer;
        if(scorePlayer == 5){
            gameEnded = true;
            resPl.textContent = `Game over player wins!!`
         }
         else{
            resPl.textContent = `Player score: ${scorePlayer}`;
            resComp.textContent = `Computer score: ${scoreComp}`;
         }
    }
    else if (playerSelection == 2 && computerSelection == 1){
        ++scorePlayer;
        if(scorePlayer == 5){
            gameEnded = true;
            resPl.textContent = `Game over player wins!!`
         }
         else{
            resPl.textContent = `Player score: ${scorePlayer}`;
            resComp.textContent = `Computer score: ${scoreComp}`;
         }
    }

    else{
        ++scoreComp;
        if(scoreComp == 5){
            gameEnded = true;
            resPl.textContent = `Game over computer wins!!`
         }
         else{
            resPl.textContent = `Player score: ${scorePlayer}`;
            resComp.textContent = `Computer score: ${scoreComp}`;
         }
    }

}


