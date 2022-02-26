import { getOpponentMove } from '../src/opponent.js'

let playerMove;
let botMove;

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
