

let game = document.getElementById("game");

let randWord = wordsList[Math.floor(Math.random()*wordsList.length)];

function CheckLetter(){
    let value = "";
    (game.value.length > 1) ? alert("Please enter only one letter") : value = game.value;
}

console.log(randWord);