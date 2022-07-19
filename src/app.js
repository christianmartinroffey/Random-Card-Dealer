/* eslint-disable */
import "bootstrap";
import "./style.css";


const newCard = () => {

const deckSuits = ["Hearts", "Diamonds", "Spades", "Clubs"];
const deckNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const cards = [];
for (let s = 0; s < deckSuits.length; s++) {
  for (let v = 0; v < deckNumbers.length; v++) {
    const value = deckNumbers[v];
    const suit = deckSuits[s];
    cards.push({ value, suit });
  }
}

return cards;
};

console.log(newCard());


const randomCard = () => {

  const random = Math.floor(Math.random() * 51);  
  const cardValue = cards[random].value;
  const cardSuit = cards[random].suit;

  let entity;
  cardSuit === "Diamonds" ? (entity = "&diams;") : (entity = "&" + cardSuit.toLowerCase() + ";");

  const card = document.createElement("div");
    card.classList.add("card", cardSuit.toLowerCase());
    card.innerHTML = 
    '<span class="card-value-suit top">' + cardValue + entity + '</span>' + 
    '<span class="card-suit">' + cardValue + '</span>' + 
    '<span class="card-value-suit bot">' + cardValue + entity + '</span>';
    document.body.appendChild(card);  

};

const cards = newCard();
randomCard(cards);



// onload needs to load a new card number and suit
//add in timer of 10s
// note: have to add the function for new card and then call that function in the onload and button eventlistner
// window.onload = function() {
  

// //reload automatically after 10s
// // setTimeout(function() {
// //   location.reload();
// // }, 10000);

// };


