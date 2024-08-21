import prompt from 'prompt-sync()';

const prompt = require('prompt-sync()');

let gActive = true;
let gBoard = ['', '', '', '', '', '','', '', ''];
let cPlayer = "❌";

function board(){
    console.log(`${gBoard[0]} | ${gBoard[1]} | ${gBoard[2]},
        ___________________________________
        ${gBoard[3]} |${gBoard[4]} | ${gBoard[5]},
       ___________________________________
        ${gBoard[6]} | ${gBoard[7]} | ${gBoard[8]}`)
}

function handleBoard(position){
    if (gBoard[position] === ""){
        gBoard[position] = cPlayer
    }
    else{
        console.log("Choose a different box!")

        return false;
    }

    if (checkWin()){
        gActive = false;
        board();
        console.log(` Game Ended : Player $[cPlayer] has won the game!`)
        return true;
    }

    if (gBoard.every(box => box !== "")){
        board();
        console.log(" Game Ended : It's a draw!");
    }

    cPlayer = cPlayer == "❌" ? "⭕" : "❌";

    return true;
}

function win(){
    const options = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [1,4,7]

    ]

    return (options.some(option =>{
        let [x,y,z] = option;

        return (
            gBoard[x] === cPlayer &&
            gBoard[y] === cPlayer &&
            gBoard[z] === cPlayer
        )
    }))

    while(gActive){
        board();
        const position = prompt(`Player ${cPlayer} it's your turn!`);

        if (position >= 0 && position <=8){
            handleMove(parseInt(position));
        } else{
            console.log("Invalid! Please try again and choose a number between 0 and 8!");
        }
    }


    
}