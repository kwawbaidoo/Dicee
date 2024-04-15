var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImageSource1 = "images/" + randomDiceImage1;
console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomDiceImageSource2 = "images/" + randomDiceImage2;



function play(){
    player1();
    player2();

    if(randomNumber1 > randomNumber2){
        var PlayerOneWins =document.querySelector("h1").innerHTML = "Player one wins!!";
        PlayerOneWins.style.color = "green";
    }
    else if(randomNumber2 > randomNumber1){
       var playerTwoWins= document.querySelector("h1").innerHTML = "Player two wins!!";
       playerTwoWins.style.color = "blue";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw game!!"
    }
}


function player1(){
    var image1 = document.querySelectorAll('img')[0];
    image1.setAttribute("src", randomDiceImageSource1);
}

function player2(){
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomDiceImageSource2)
}

function refresh(){
    window.location.reload();
}