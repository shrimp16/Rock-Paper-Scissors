import { getOpponentMove } from '../src/opponent.js'

let playerMove;
let botMove;
let bestOf;

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

    if(playerMove === botMove) {
        alert("draw");
        return;
    }

    if(playerMove === 'rock' && botMove === 'scissor' || 
    playerMove === 'paper' && botMove === 'rock' || 
    playerMove === 'scissor' && botMove === 'paper'){
        alert("player won")
    }else{
        alert("bot won");
    }
}
