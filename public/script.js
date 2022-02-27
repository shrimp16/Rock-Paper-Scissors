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
    document.getElementById("main-menu").style.display = "none";
    document.getElementById("game").style.display = "block";
}

function play() {
    botMove = getOpponentMove();
    showMoves();

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
}

function showMoves() {
    document.getElementById("player1").src = `/images/${playerMove}.png`;
    document.getElementById("player2").src = `/images/${botMove}.png`;
}