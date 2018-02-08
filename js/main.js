// different cards in stack
const cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];

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
  let {rank, suit, cardImage} = cardFlipped;

  console.log(`User flipped ${rank}`);
  console.log(`User flipped ${suit}`);
  console.log(`User flipped ${cardImage}`);

  // add the flipped card to cardsInPlay array
  cardsInPlay.push(cardFlipped);
  console.log(cardsInPlay);

}

flipCard(0);
flipCard(1);
checkForMatch();
