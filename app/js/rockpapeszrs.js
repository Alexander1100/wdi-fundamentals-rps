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
var TIE;
var COMPWIN;
var PLAYERWIN;


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
    var results = [];
    var i = 0;
    TIE = 0;
    COMPWIN = 1;
    PLAYERWIN = 2;
    while(!hasEitherReachedLimit(results)){
        console.log("Let's play Rock, Paper, Scissors.");
        getComputerMove();
        getPlayerMove(); 
        results[i] = getWinner();
        printWinResult(results[i]);
        i++;
    }
    console.log("computer won " + getWinCounts(COMPWIN, results));
    console.log("player won " + getWinCounts(PLAYERWIN, results));
    console.log("TIE COUNT " + getWinCounts(TIE, results));
}

//debug up here!!

function getWinCounts(player_type, results){
    var wincount = 0;
    for(var i = 0; i < results.length; i++){
        if(results[i] == player_type){
            wincount++;
        }
    }
    return wincount;
}

function hasEitherReachedLimit(results){
    var playerwins = 0;
    var compwins = 0;
    for(var i = 0; i < results.length; i++){
        if(results[i] == COMPWIN){
            compwins++;
        }
        else if(results[i] == PLAYERWIN){
            playerwins++;
        }
    }
    if(playerwins == 5 || compwins == 5){
        return true;
    }
    else return false;
}

//case statements play with it
function printWinResult(win){
    switch(win) {
    case TIE:
        console.log("TIE");
        break;
    case PLAYERWIN:
        console.log("PLAYER");
        break;
    case COMPWIN:
        console.log("COMPUTER");
        break;
    default:
     console.log("Error" + win);
    }
}


//


//Figure out how to set up session count in javascript\\
function getWinner() {
    var player_win = 0;
    var computer_win = 0;

    //change to case statement!!
    console.log("computerMove: " + computerMove + " Player Move:" + playerMove);
      if ((computerMove == 'rock') && (playerMove == 'rock')) {
         winner = "It's a tie!";
         return TIE;
     } else if ((computerMove == 'scissors') && (playerMove == 'rock')) {
        winner = "Player. Congratulations you Win!!!";
        return PLAYERWIN;
    } else if ((computerMove == 'paper') && (playerMove == 'rock')) {
         winner = "The computer. You lose!";
         return COMPWIN;
      } else if ((computerMove == 'rock') && (playerMove == 'scissors')) {
         winner = "The computer. You lose!";
         return COMPWIN;
     } else if ((computerMove == 'scissors') && (playerMove == 'scissors')) {
        winner = "It's a tie!";
          return TIE;
    } else if ((computerMove == 'paper') && (playerMove == 'scissors')) {
         winner = "The player. You win!";
         return PLAYERWIN;
      }else if ((computerMove == 'rock') && (playerMove == 'paper')) {
         winner = "The player. You win!";
         return PLAYERWIN;
     } else if ((computerMove == 'scissors') && (playerMove == 'paper')) {
        winner = "The computer. You lose!";
        return COMPWIN;
    } else if ((computerMove == 'paper') && (playerMove == 'paper')) {
         winner = "It's a tie!";
           return TIE;
      }
      
    }