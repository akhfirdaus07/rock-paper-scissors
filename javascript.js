//store rock, paper, and scissor in a variable
const choice = ["rock", "paper", "scissor"];
let playerSelection;
let computerSelection;
let p1Score=0;
let p2Score=0;

//create function to play 5 rounds of rock, paper, and scissor game
function game(){
    for (let i=0;i<5;i++){
        // prompt input message to choose rock, paper, or scissor and store the player's choice in a variable
        playerSelection=prompt("Choose Rock, Paper, or Scissor?").toLowerCase();

        // Randomly return either rock, paper, or scissor for the computer's choice
        computerSelection=choice[Math.floor(Math.random()*3)];
        console.log(playRound(playerSelection,computerSelection));
    }
    
   if(p1Score>p2Score){
    console.log(`YOU WIN! CONGRATULATIONS!`)
   } else if(p1Score<p2Score){
    console.log(`YOU LOSE! TRY AGAIN!`)
   } else {
    console.log(`DRAW!`)
   }

   console.log(`Your Score: ${p1Score}`)
   console.log(`YOur Opponent's Score: ${p2Score}`)
}

function playRound(playerSelection, computerSelection){    
    //if player & computer choose the same choice, output DRAW
    if (playerSelection===computerSelection){
        return `DRAW!`;

    //if player choose rock & computer choose paper, output LOSE
    } else if(playerSelection==="rock" && computerSelection==="paper"){
        p2Score++;
        return `You LOSE! ${computerSelection} beats ${playerSelection}`;

    //if player choose rock & computer choose scissor, output WIN
    } else if(playerSelection==="rock" && computerSelection==="scissor"){
        p1Score++;
        return `You WIN! ${playerSelection} beats ${computerSelection}`;
    
    //if player choose paper & computer choose rock, output WIN
    } else if(playerSelection==="paper" && computerSelection==="rock"){
        p1Score++;
        return `You WIN! ${playerSelection} beats ${computerSelection}`;

    //if player choose paper & computer choose scissor, output LOSE
    } else if(playerSelection==="paper" && computerSelection==="scissor"){
        p2Score++;
        return `You LOSE! ${computerSelection} beats ${playerSelection}`;
    
    //if player choose scissor & computer choose rock, output LOSE
    } else if(playerSelection==="scissor" && computerSelection==="rock"){
        p2Score++;
        return `You LOSE! ${computerSelection} beats ${playerSelection}`;
    
    //if player choose scissor & computer choose paper, output WIN
    } else if(playerSelection==="scissor" && computerSelection==="paper"){
        p1Score++;
        return `You WIN! ${playerSelection} beats ${computerSelection}`;
    }
}