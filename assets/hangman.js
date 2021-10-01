

let game = document.getElementById("game");
let enter = document.getElementById("enter");
let play = document.getElementById("play");
let field = document.getElementById("instruction");
let image = document.getElementById("state");
let lifeDisplay = document.getElementById("lifeDisplay");
let already = document.getElementById("Already");
let itsWin = false;
let itsGameOver = false;
let life = 7;
let randWord = "";
let masqued = "";

function gameStart(){
    let temp = "";
    game.value= "";
    life = 7;
    itsWin = false;
    itsGameOver = false;
    already.innerHTML = "";
    lifeDisplay.innerHTML = life + " lives left";
    randWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    console.log(randWord);
    for(let i = 0; i < randWord.length ; i++){
        temp += "_";
    }
    return temp;
}

function CheckLetter(){
    let value = "";
    let temp = "";
    let isValide = false;
    (game.value.length === 1) ? isValide = true : isValide = false;
    (isValide) ?  value = game.value : alert("Please enter a letter");
    for(let i = 0; i < randWord.length; i++){
        (value === randWord[i]) ? temp += value : (masqued[i] != "_") ? temp += masqued[i] : temp += "_";
    };

    ((temp === masqued)&&(isValide === true)) ? life-- : life = life;
    lifeDisplay.innerHTML = life + " lives left";
    already.innerHTML += value;
    game.value = "";
    return temp;
    
}

play.addEventListener('click', () => {

    masqued = gameStart();
    field.innerHTML = masqued;
    
});

enter.addEventListener('click', () => {

    masqued = CheckLetter();
    field.innerHTML = masqued;
    for(let i = 0 ; i < masqued.length; i++){

        if(masqued[i] === "_"){

            itsWin = false;
            i = masqued.length
        }
        else{

            itsWin = true;
        }
    }
    (life === 0) ? itsGameOver = true : itsGameOver = false;
    image.src = "assets/image/state"+life+".png";
    (itsGameOver) ? lifeDisplay.innerHTML = "Game Over !" : itsGameOver = false;
    if(itsWin){
        lifeDisplay.innerHTML = "You Win !";
        field.innerHTML = "If you want to plays again hit play!";
        enter.setAttribute('disabled','true');
    }

});
