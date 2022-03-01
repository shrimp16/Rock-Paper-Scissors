import { getOpponentMove } from '../src/opponent.js'

let playerOneMove = document.getElementById("player1");
let playerTwoMove = document.getElementById("player2");

let playerMove;
let botMove;
let bestOf;

let playerPoints;
let botPoints;

$('#start').click(() => {
    bestOf = document.querySelector('#bestof').value;
    document.querySelector('#bestof').value = "";
    showGame();
})

$('#rock').click(() => {
    playerMove = "rock";
    play();
})

$('#paper').click(() => {
    playerMove = "paper";
    play();
})

$('#scissor').click(() => {
    playerMove = "scissor";
    play();
})

function showGame(){
    playerPoints = 0;
    botPoints = 0;
    document.getElementById("main-menu").style.display = "none";
    document.getElementById("game").style.display = "block";
}

function play() {
    botMove = getOpponentMove();
    showMoves();

    console.log(Math.round(bestOf / 2));

    console.log(playerPoints)
    console.log(botPoints);

    if(playerMove === botMove) {
        playerOneMove.style.border = "5px orange solid";
        playerTwoMove.style.border = "5px orange solid";
        return;
    }

    if(playerMove === 'rock' && botMove === 'scissor' || 
    playerMove === 'paper' && botMove === 'rock' || 
    playerMove === 'scissor' && botMove === 'paper'){
        playerOneMove.style.border = "5px green solid";
        playerTwoMove.style.border = "5px red solid";
        playerPoints++;
    }else{
        playerTwoMove.style.border = "5px green solid";
        playerOneMove.style.border = "5px red solid";
        botPoints++;
    }
    gameEnd();
}

function gameEnd() {
    if(playerPoints === Math.round(bestOf / 2)){
        alert("Player won the game");
        //create a banner to show who won the game
        showMainMenu();
    }

    if(botPoints === Math.round(bestOf / 2)){
        alert("The bot won the game");
        //create a banner to show who won the game
        showMainMenu();
    }

    return;
}

function showMoves() {
    playerOneMove.src = `/images/${playerMove}.png`;
    playerTwoMove.src = `/images/${botMove}.png`;
}

function showMainMenu() {
    document.getElementById("main-menu").style.display = "flex";
    document.getElementById("game").style.display = "none";
    playerOneMove.src = `/images/white.jpg`;
    playerTwoMove.src = `/images/white.jpg`;
    playerOneMove.style.border = "";
    playerTwoMove.style.border = "";
}