// different cards in stack
var cards = ['queen', 'queen', 'king', 'king'];

// cards in play
var cardsInPlay = [];

// first card user flipped
var cardOne = cards[0];
console.log(`user flipped ${cardOne}`);

var cardTwo = cards[1];
console.log(`user flipped ${cardTwo}`);

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log(cardsInPlay);

// check if 2 cards have been played
if(cardsInPlay.length === 2){
  console.log("2 cards have been played");
  if(cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
  }
  else{
    alert("Sorry, try again.");
  }
}

// check for equality between 2 cards in cardsInPlay array
