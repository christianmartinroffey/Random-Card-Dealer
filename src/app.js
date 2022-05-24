/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//suits in text 
const spades = "&#9824;";
const clubs = "&#9827;";
let hearts = "&#9829";
// hearts.style.color = "red";
let diamonds = "&#9830";
// diamonds.style.color = "red";
const deckSuit = [0, 1, 2, 3];
const deckNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let newCard = () => {
 
//Ids
//note for future, can use the class but need add all of the classes to be able to use both in the same variable
let suitIDTop = document.getElementById("top-suit");
let numberID = document.getElementById("card-number");
let suitIDBottom = document.getElementById("bottom-suit");

//cardnumber generation
let cardNumber = Math.floor(Math.random() * deckNumbers.length + 1); //+1 ensures that it starts at 1
//suit generation
let suitNumber = Math.floor(Math.random() * deckSuit.length);

numberID.innerHTML = cardNumber;
suitIDTop.innerHTML = suitNumber;
suitIDBottom.innerHTML = suitNumber;

  //ifs for top suits
  let SuitFunction = () => {
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
   //ifs for bottom suits
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

SuitFunction();
//ifs for suit colour
  if(suitNumber === 2 ){
    document.getElementById("top-suit").style.color = "red";
  }
  if(suitNumber === 3 ){
    document.getElementById("top-suit").style.color = "red";
  }
  if(suitNumber === 2 ){
    document.getElementById("bottom-suit").style.color = "red";
  }
  if(suitNumber === 3 ){
    document.getElementById("bottom-suit").style.color = "red";
  }

//ifs to change 1,11,12,13 to A, J,Q,K
//note - could have added these directly into the array and saved the ifs
let numbersToSigns = () => {
  if(cardNumber === 1){
    cardNumber = "A";
  }

  if(cardNumber === 11){
  cardNumber = "J";
}

if(cardNumber === 12){
  cardNumber = "Q";
}

if(cardNumber === 13){
  cardNumber = "K";
}


};

numbersToSigns();
};

// onload needs to load a new card number and suit
//add in timer of 10s
// note: have to add the function for new card and then call that function in the onload and button eventlistner
window.onload = function() {
  newCard();

//reload automatically after 10s
setTimeout(function() {
  location.reload();
}, 10000);

document.getElementById("new-card").addEventListener("click", (newCard));
};


