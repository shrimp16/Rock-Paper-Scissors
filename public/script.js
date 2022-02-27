import { getOpponentMove } from '../src/opponent.js'

let playerMove;
let botMove;
let bestOf;

let playerPoints;
let botPoints;

$('#start').click(() => {
    bestOf = document.querySelector('#bestof').value;
    console.log(bestOf);
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
        document.getElementById("player1").style.border = "5px orange solid";
        document.getElementById("player2").style.border = "5px orange solid";
        return;
    }

    if(playerMove === 'rock' && botMove === 'scissor' || 
    playerMove === 'paper' && botMove === 'rock' || 
    playerMove === 'scissor' && botMove === 'paper'){
        document.getElementById("player1").style.border = "5px green solid";
        document.getElementById("player2").style.border = "5px red solid";
        playerPoints++;
    }else{
        document.getElementById("player2").style.border = "5px green solid";
        document.getElementById("player1").style.border = "5px red solid";
        botPoints++;
    }
    gameEnd();
}

function gameEnd() {
    if(playerPoints === Math.round(bestOf / 2)){
        alert("Player won the game");
        showMainMenu();
    }

    if(botPoints === Math.round(bestOf / 2)){
        alert("The bot won the game");
        showMainMenu();
    }

    return;
}

function showMoves() {
    document.getElementById("player1").src = `/images/${playerMove}.png`;
    document.getElementById("player2").src = `/images/${botMove}.png`;
}

function showMainMenu() {
    console.log("main menu");
}