//store rock, paper, and scissors in a variable
const choice = ["rock", "paper", "scissors"];
let playerSelection;
let computerSelection;

const buttons=document.querySelectorAll('button');
let playerScore=document.querySelector(".playerScore");
playerScore.textContent=0;
let computerScore=document.querySelector(".computerScore");
computerScore.textContent=0;
let roundWinner=document.querySelector(".roundWinner");
let gameWinner=document.querySelector(".gameWinner");


//create function to play 5 rounds of rock, paper, and scissors game
// function game(){
//    if(p1Score>p2Score){
//     console.log(`YOU WIN! CONGRATULATIONS!`)
//    } else if(p1Score<p2Score){
//     console.log(`YOU LOSE! TRY AGAIN!`)
//    } else {
//     console.log(`DRAW!`)
//    }

//    console.log(`Your Score: ${p1Score}`)
//    console.log(`YOur Opponent's Score: ${p2Score}`)
// }

function playRound(){  
    playerSelection=this.classList.value;
    computerSelection=choice[Math.floor(Math.random()*3)];

    logic();
    
    if (playerScore.textContent===5){
        gameWinner.textContent="YOU WIN THIS GAME!";
        
        playerScore.textContent=0;
        computerScore.textContent=0;
        roundWinner.textContent="";
    } else if(computerScore.textContent===5){
        gameWinner.textContent="YOU LOSE THIS GAME!";

        playerScore.textContent=0;
        computerScore.textContent=0;
        roundWinner.textContent="";
    };

}

function logic(){
    //if player & computer choose the same choice, output DRAW
    if (playerSelection===computerSelection){
        roundWinner.textContent="DRAW";
    //if player choose rock & computer choose paper, output LOSE
    } else if(playerSelection==="rock" && computerSelection==="paper"){
        computerScore.textContent++;
        roundWinner.textContent= `You LOSE! ${computerSelection} beats ${playerSelection}`;

    //if player choose rock & computer choose scissors, output WIN
    } else if(playerSelection==="rock" && computerSelection==="scissors"){
        playerScore.textContent++;
        roundWinner.textContent=  `You WIN! ${playerSelection} beats ${computerSelection}`;
    
    //if player choose paper & computer choose rock, output WIN
    } else if(playerSelection==="paper" && computerSelection==="rock"){
        playerScore.textContent++;
        roundWinner.textContent=  `You WIN! ${playerSelection} beats ${computerSelection}`;

    //if player choose paper & computer choose scissors, output LOSE
    } else if(playerSelection==="paper" && computerSelection==="scissors"){
        computerScore.textContent++;
        roundWinner.textContent=  `You LOSE! ${computerSelection} beats ${playerSelection}`;
    
    //if player choose scissors & computer choose rock, output LOSE
    } else if(playerSelection==="scissors" && computerSelection==="rock"){
        computerScore.textContent++;
        roundWinner.textContent=  `You LOSE! ${computerSelection} beats ${playerSelection}`;
    
    //if player choose scissors & computer choose paper, output WIN
    } else if(playerSelection==="scissors" && computerSelection==="paper"){
        playerScore.textContent++;
        roundWinner.textContent=  `You WIN! ${playerSelection} beats ${computerSelection}`;
    };  
}


for (const button of buttons) button.addEventListener('click', playRound);
 
