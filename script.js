function getComputerChoice(){
    const choice = Math.floor(Math.random()*3+1)

    switch (choice){
    case 1:
        return "rock";
        break;
    case 2:
        return "paper";
        break;
    case 3:
        return "scissors"
        break;
    }
}


function playRound(playerSelection, computerSelection){
    const playerChoice = playerSelection.toLowerCase()
    const playerScore = document.querySelector(".playerScore")
    const computerScore = document.querySelector(".computerScore")  
    
    
    
    if(playerChoice === 'paper' && computerSelection === 'paper')
        return "Draw"
   else if(playerChoice === 'scissors' && computerSelection === 'scissors')
        return "Draw"
   else if(playerChoice === 'rock' && computerSelection === 'rock')
        return "Draw"

    else if(playerChoice === 'paper' && computerSelection === 'rock'){
        playerScore.innerHTML = ++scorePlayer  
        return `You win! ${playerChoice} beats ${computerSelection}`
    }
    else if(playerChoice === 'rock' && computerSelection === 'scissors'){
        playerScore.innerHTML = ++scorePlayer        
        return `You win! ${playerChoice} beats ${computerSelection}`}
    else if(playerChoice === 'scissors' && computerSelection === 'paper'){
        playerScore.innerHTML = ++scorePlayer  
        return `You win! ${playerChoice} beats ${computerSelection}`
    }

    else if(playerChoice === 'rock' && computerSelection === 'paper'){
        computerScore.innerHTML = ++scoreComputer
        return `You lose! ${computerSelection} beats ${playerChoice}`}
    else if(playerChoice === 'paper' && computerSelection === 'scissors'){
        computerScore.innerHTML = ++scoreComputer
        return `You lose! ${computerSelection} beats ${playerChoice}`}
    else if(playerChoice === 'scissors' && computerSelection === 'rock'){
        computerScore.innerHTML = ++scoreComputer
        return `You lose! ${computerSelection} beats ${playerChoice}`}       
          
}

function checkScore(scorePlayer, scoreComputer){
    if(scoreComputer === 5 || scorePlayer === 5)
    {
       text_message.innerHTML = (scoreComputer > scorePlayer)? "Computer won!": "Player won!"
        rock.disabled = true
        paper.disabled = true
        scissors.disabled = true

        rock.style.cursor = "not-allowed";
        paper.style.cursor = "not-allowed";
        scissors.style.cursor = "not-allowed";
        
    }
}

const rock = document.querySelector(".Rock")
const paper = document.querySelector(".Paper")
const scissors = document.querySelector(".Scissors")
const text_message = document.querySelector(".text_message")
var scorePlayer = 0;
var scoreComputer = 0;


rock.addEventListener("click", () => {
    text_message.innerHTML = playRound("Rock", getComputerChoice())
    checkScore(scorePlayer, scoreComputer)
})

paper.addEventListener("click", () => {
    text_message.innerHTML = playRound("Paper", getComputerChoice())
    checkScore(scorePlayer, scoreComputer)
})

scissors.addEventListener("click", () => {
    text_message.innerHTML = playRound("Scissors", getComputerChoice())
    checkScore(scorePlayer, scoreComputer)
})
