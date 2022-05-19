/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// onload needs to load a new card number and suit
//add in timer of 10s
window.onload = function() {
  //write your code here
  console.log();
};

// need to randomly generate a number 1-13
//optional is to add a joker
// random function for card number here
//math.floor(math.random)*13 (will generate a number 0-12)

//random function for suit here
// needs to be 1-4
//math.floor(math.random)*4 (will generate a number 0-3)

// here is where you can generate a new card on click
//needs updating to replace 'alert' with the generate function above

document.getElementById("new-card").addEventListener("click", function() {
  alert("Give me a new card");
});
