// different cards in stack
const cards = ['queen', 'queen', 'king', 'king'];

// cards in play
let cardsInPlay = [];

const checkForMatch = () => {
  if (cardsInPlay[0] === cardsInPlay[1]){
    console.log("You found a match!");
  }
  else {
    console.log("Sorry, try again");
  }
}

const flipCard = (cardId) => {

  let cardFlipped = cards[cardId];
  console.log(`User flipped ${cardFlipped}`);

  // add the flipped card to cardsInPlay array
  cardsInPlay.push(cardFlipped);
  console.log(cardsInPlay);
  // check if 2 cards have been played
  // if (cardsInPlay.length === 2){
  //   console.log('2 cards have been played');
  //   if (cardsInPlay[0] === cardsInPlay[1]){
  //     alert("You found a match!");
  //   }
  //   else{
  //     alert("Sorry, try again.");
  //   }
  // }
}

flipCard(0);
flipCard(1);
checkForMatch();
