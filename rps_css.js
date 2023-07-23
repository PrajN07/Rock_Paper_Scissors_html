let score = JSON.parse(localStorage.getItem('score')) || { 
  Wins: 0,
  Loses: 0,
  Ties: 0 
} ;

updateScoreElement();


function playGame(playerMove) {
const computerMove = pickComputerMove();

let result = '';

if (playerMove === 'scissors') {
  if (computerMove === 'rock') {
    result = 'You lose.';
    
  } else if (computerMove === 'paper') {
    result = 'You win.';
    
  } else if (computerMove === 'scissors') {
    result = 'Tie.';
    
  }

} else if (playerMove === 'paper') {
  if (computerMove === 'rock') {
    result = 'You win.';
  } else if (computerMove === 'paper') {
    result = 'Tie.';
  } else if (computerMove === 'scissors') {
    result = 'You lose.';
  }
  
} else if (playerMove === 'rock') {
  if (computerMove === 'rock') {
    result = 'Tie.';
  } else if (computerMove === 'paper') {
    result = 'You lose.';
  } else if (computerMove === 'scissors') {
    result = 'You win.';
  }
}

if(result === 'You win.'){
  score.Wins ++;
}else if(result==='Tie.'){
  score.Ties++;
}else if( result === 'You lose.'){
  score.Loses++;
}
localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();
document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-moves').innerHTML = `You 
<img src="rps images/${playerMove}-emoji.png" class="move-icon" > <img src="rps images/${computerMove}-emoji.png" class="move-icon" > Computer`;



}

function updateScoreElement(){
document.querySelector('.js-score').innerHTML = `Wins:${score.Wins}, Loses:${score.Loses}, Ties:${score.Ties}`;

}

function pickComputerMove() {
const randomNumber = Math.random();

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
  computerMove = 'rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = 'paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
  computerMove = 'scissors';
}

return computerMove;
}