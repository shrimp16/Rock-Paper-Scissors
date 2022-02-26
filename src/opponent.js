export function getOpponentMove() {
    let selectMove = Math.floor(Math.random() * 3);
    switch (selectMove) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
    }
}