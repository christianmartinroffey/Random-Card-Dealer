/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//suits in text +
const spades = "&#9824;";
const clubs = "&#9827;";
let hearts = "&#9829";
let diamonds = "&#9830";
const deckSuit = [0, 1, 2, 3];
const deckNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// onload needs to load a new card number and suit
//add in timer of 10s
window.onload = function() {
  numberID.innerHTML = cardNumber;
  suitIDTop.innerHTML = suitNumber;
  suitIDBottom.innerHTML = suitNumber;
  console.log(numberID);

  //ifs for top suits
  if (suitNumber === 0) {
    suitIDTop.innerHTML = spades;
  }
  if (suitNumber === 1) {
    suitIDTop.innerHTML = clubs;
  }
  if (suitNumber === 2) {
    suitIDTop.innerHTML = hearts;
  }
  if (suitNumber === 3) {
    suitIDTop.innerHTML = diamonds;
  }

  //ifs for top suits
  if (suitNumber === 0) {
    suitIDBottom.innerHTML = spades;
  }
  if (suitNumber === 1) {
    suitIDBottom.innerHTML = clubs;
  }
  if (suitNumber === 2) {
    suitIDBottom.innerHTML = hearts;
  }
  if (suitNumber === 3) {
    suitIDBottom.innerHTML = diamonds;
  }
};

//Ids
let suitIDTop = document.getElementById("top-suit");
let numberID = document.getElementById("card-number");
let suitIDBottom = document.getElementById("bottom-suit");

//cardnumber generation
let cardNumber = Math.floor(Math.random() * deckNumbers.length + 1);
//suit generation
let suitNumber = Math.floor(Math.random() * deckSuit.length);
console.log(suitNumber);

// console.log(cardNumber);
// console.log(suitNumber);

// here is where you can generate a new card on click
//needs updating to replace 'alert' with the generate function above

document.getElementById("new-card").addEventListener("click", function() {
  alert(String(suitNumber) + String(cardNumber));

  //add .value(two functions)
});
