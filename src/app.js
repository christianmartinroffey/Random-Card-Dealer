/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const deckNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const deckSuit =
  ("https://media.istockphoto.com/vectors/heart-symbol-of-love-and-valentines-day-flat-red-icon-isolated-on-vector-id1128400054?b=1&k=20&m=1128400054&s=612x612&w=0&h=TeuKynPXDifmp5MUm1MsnM4wpmInK80tVBSlv3z3dtc=",
  "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Card_diamond.svg/1200px-Card_diamond.svg.png",
  "https://cdn.pixabay.com/photo/2012/05/07/18/37/spade-48943_960_720.png",
  "https://cdn.pixabay.com/photo/2012/04/13/20/38/clubs-33561_960_720.png");
// onload needs to load a new card number and suit
//add in timer of 10s
window.onload = function() {
  //write your code here
  console.log();
};

// need to randomly generate a number 1-13
//optional is to add a joker
// random function for card number here
//math.floor(math.random)*deckNumbers.length (will generate a number 0-12)

//random function for suit here
// needs to be 1-4
//math.floor(math.random)*deckSuit.length (will generate a number 0-3)

// here is where you can generate a new card on click
//needs updating to replace 'alert' with the generate function above

document.getElementById("new-card").addEventListener("click", function() {
  alert("Give me a new card");
});
