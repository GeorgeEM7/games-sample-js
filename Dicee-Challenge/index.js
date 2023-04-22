const image1element = document.querySelector(".img1");
const image2element = document.querySelector(".img2");

const h1Element = document.querySelector(".container h1");

const startBtnElement = document.getElementById("start");
const resetBtnElement = document.getElementById("reset");

function start() {
  var firstRandomNumber = Math.floor(Math.random() * 6) + 1;
  var secondRandomNumber = Math.floor(Math.random() * 6) + 1;

  var firstRandomImgPath = "images/dice" + firstRandomNumber + ".png";
  var secondRandomImgPath = "images/dice" + secondRandomNumber + ".png";

  image1element.setAttribute("src", firstRandomImgPath);
  image2element.setAttribute("src", secondRandomImgPath);

  if (firstRandomNumber > secondRandomNumber) {
    h1Element.textContent = "Player 1 win";
  } else if (secondRandomNumber > firstRandomNumber) {
    h1Element.textContent = "Player 2 win";
  } else {
    h1Element.textContent = "Draw";
  }
}

function reset() {
  image1element.setAttribute("src", "");
  image2element.setAttribute("src", "");

  h1Element.textContent = "Press start!";
}

startBtnElement.addEventListener("click", start);
resetBtnElement.addEventListener("click", reset);
