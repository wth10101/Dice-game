let r1 = Math.floor(Math.random()*6)+1;
let img1 = document.getElementById("img1");
img1.src = "./images/dice" + r1.toString() + ".png";

let r2 = Math.floor(Math.random()*6)+1;
let img2 = document.getElementById("img2");
img2.src = "./images/dice" + r2.toString() + ".png";

//If player 1 wins
if (r1 > r2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }
  else if (r2 > r1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
