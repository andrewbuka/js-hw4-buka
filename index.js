let random;
let name;
let userChoice;
let compChoice;
let i = 0;
let j = 0;
let request = true;

while (request) {
  game();
}

function game() {
  name = prompt('Please, enter your name');
  if (name === '') {
    name = 'User';
  } else if (name === null) {
    alert('You aborted this game. To start new game just refresh the page.');
    request = false;
    i = 4;
    j = 4;
  }

  while (i < 3 && j < 3) {
    do {
      userChoice = prompt('Rock, Scissors, Paper... Please make your move');
    }
    while (userChoice?.toLowerCase() !== 'rock' && userChoice?.toLowerCase() !== 'scissors' && userChoice?.toLowerCase() !== 'paper' && userChoice !== null);

    if (userChoice === null) {
      alert('You aborted this game. To start new game just refresh the page.');
      request = false;
    } else {
      random = Math.random();

      if (random < 0.3) {
        alert('Computer move is: rock');
        compChoice = 'rock';
      } else if (random > 0.3 && random < 0.65) {
        alert('Computer move is: scissors');
        compChoice = 'scissors';
      } else {
        alert('Computer move is: paper');
        compChoice = 'paper';
      }
    }

    if (userChoice?.toLowerCase() === 'rock' && compChoice === 'scissors' || userChoice?.toLowerCase() === 'scissors' && compChoice === 'paper' || userChoice?.toLowerCase() === 'paper' && compChoice === 'rock') {
      i += 1;
      alert(`You won this round: Current count is ${name} ${i} : Computer ${j}`);
    } else if (userChoice === compChoice) {
      i += 0;
      j += 0;
    } else if (compChoice === 'rock' && userChoice?.toLowerCase() === 'scissors' || compChoice === 'scissors' && userChoice?.toLowerCase() === 'paper' || compChoice === 'paper' && userChoice?.toLowerCase() === 'rock') {
      j += 1;
      alert(`Computer won this round: Current count is ${name} ${i} : Computer ${j}`);
    } else if (userChoice === null) {
      i = 4;
      j = 4;
    }
  }

  if (i > j) {
    alert(`Congratulations. You won this game. Count - You ${i} : Computer ${j}`);
    request = confirm('Do you want to start new game?');
  } else if (i < j) {
    alert(`Sorry.You lost this game. Count - You ${i} : Computer ${j}`);
    request = confirm('Do you want to start new game?');
  }

  i = 0;
  j = 0;
}
