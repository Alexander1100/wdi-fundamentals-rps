// ////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
//////////////////////////////////////////////////
'use strict';

rockPaperScissors();


function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var playerMove;
var computerMove;
var winner;

function getComputerMove() {
    var move = randomPlay();
    if (move === null || 0) {
        randomPlay();
    } else {
        console.log("The computer chose " + move);
        computerMove = move;
    }
}

function getPlayerMove() {
    // Write an expression that operates on a variable called `move`
    //////////////////// The PLAYER move is hard coded in the line below this one///////////////////////////
    var move = randomPlay();
        console.log("The player chose " + move);
        playerMove = move;
}



function rockPaperScissors() {
    console.log("Let's play Rock, Paper, Scissors.");
    getComputerMove();
    getPlayerMove();   
    getWinner();
}

function getWinner() {
    var winner;
  if ((computerMove === 'rock') && (playerMove === 'rock')) {
     winner = "It's a tie!";
 } else if ((computerMove === 'scissors') && (playerMove === 'rock')) {
    winner = "Player. Congratulations you Win!!!";
} else if ((computerMove === 'paper') && (playerMove === 'rock')) {
     winner = "The computer. You lose!";
  } else if ((computerMove === 'rock') && (playerMove === 'scissors')) {
     winner = "The computer. You lose!";
 } else if ((computerMove === 'scissors') && (playerMove === 'scissors')) {
    winner = "It's a tie!";
} else if ((computerMove === 'paper') && (playerMove === 'scissors')) {
     winner = "The player. You win!";
  }else if ((computerMove === 'rock') && (playerMove === 'paper')) {
     winner = "The player. You win!";
 } else if ((computerMove === 'scissors') && (playerMove === 'paper')) {
    winner = "The computer. You lose!";
} else if ((computerMove === 'paper') && (playerMove === 'paper')) {
     winner = "It's a tie!";
  }
console.log("The winner is: " + winner);
}