//store rock, paper, and scissor in a variable
const choice = ["rock", "paper", "scissor"];
let playerSelection;
let computerSelection;

//create function to play 5 rounds of rock, paper, and scissor game
function game(){
    for (let i=0;i<1;i++){
        // prompt input message to choose rock, paper, or scissor and store the player's choice in a variable
        playerSelection=prompt("Choose Rock, Paper, or Scissor?").toLowerCase();

        // Randomly return either rock, paper, or scissor for the computer's choice
        computerSelection=choice[Math.floor(Math.random()*3)];
        return playRound(playerSelection,computerSelection);
    }
}

function playRound(playerSelection, computerSelection){    
    

    //if player & computer choose the same choice, output DRAW
    if (playerSelection===computerSelection){
        return `DRAW!`;

    //if player choose rock & computer choose paper, output LOSE
    } else if(playerSelection==="rock" && computerSelection==="paper"){
        return `You LOSE! ${computerSelection} beats ${playerSelection}`;

    //if player choose rock & computer choose scissor, output WIN
    } else if(playerSelection==="rock" && computerSelection==="scissor"){
        return `You WIN! ${playerSelection} beats ${computerSelection}`;
    
    //if player choose paper & computer choose rock, output WIN
    } else if(playerSelection==="paper" && computerSelection==="rock"){
        return `You WIN! ${playerSelection} beats ${computerSelection}`;

    //if player choose paper & computer choose scissor, output LOSE
    } else if(playerSelection==="paper" && computerSelection==="scissor"){
        return `You LOSE! ${computerSelection} beats ${playerSelection}`;
    
    //if player choose scissor & computer choose rock, output LOSE
    } else if(playerSelection==="scissor" && computerSelection==="rock"){
        return `You LOSE! ${computerSelection} beats ${playerSelection}`;
    
    //if player choose scissor & computer choose paper, output WIN
    } else if(playerSelection==="scissor" && computerSelection==="paper"){
        return `You WIN! ${playerSelection} beats ${computerSelection}`;
    }
}