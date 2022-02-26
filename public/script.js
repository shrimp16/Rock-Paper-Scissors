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
    console.log(playerMove);
}

if(playerMove === botMove){
    //it's a draw
}