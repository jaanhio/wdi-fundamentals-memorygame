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
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];

let cardsInPlay = [];

const checkForMatch = () => {
  const resultMessage = document.getElementById('results');
  if (cardsInPlay[0].rank === cardsInPlay[1].rank){
    // alert("You found a match!");
    resultMessage.innerHTML = 'You found a match!';
    // resetBoard();
  }
  else {
    // alert("Sorry, try again");
    resultMessage.innerHTML = 'Sorry, try again';
    // resetBoard();
  }
}

const shuffleStack = (cardsArr) => {
  let currentIndex = cardsArr.length;
  let tempValue, randomIndex;

  // while there remain elements to shuffle
  while (0 !== currentIndex){

    // pick from any of the remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // swap with current element
    tempValue = cardsArr[currentIndex];
    cardsArr[currentIndex] = cardsArr[randomIndex];
    cardsArr[randomIndex] = tempValue;
  }

  return cardsArr;
}

const flipCard = (e) => {
  var el = e.target;
  var cardId = el.getAttribute('data-id');
  console.log(cardId);
  let cardFlipped = cards[cardId];
  let {rank, suit, cardImage} = cardFlipped;
  el.setAttribute('src', cardImage);
  console.log(`User flipped ${rank}`);
  console.log(`User flipped ${suit}`);
  console.log(`User flipped ${cardImage}`);

  // add the flipped card to cardsInPlay array
  cardsInPlay.push(cardFlipped);
  console.log(cardsInPlay);
  if (cardsInPlay.length === 2){
    checkForMatch();
  }
}

const createBoard = () => {
  cards.forEach(x => {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', cards.indexOf(x));
    // cardElement.setAttribute('onclick', flipCard(this));
    // console.log(cards.indexOf(x));
    // console.log(cardElement);
    cardElement.addEventListener('click', flipCard);
    // console.log(cardElement);
    let gameBoard = document.getElementById('game-board');
    gameBoard.appendChild(cardElement);
  });
}

const clearBoard = () => {
  let gameBoard = document.getElementById('game-board');
  cardsInPlay.length = 0;
  while(gameBoard.firstChild){
    gameBoard.removeChild(gameBoard.firstChild);
  }
}

const clearResultMessage = () => {
  const resultMessage = document.getElementById('results');
  resultMessage.innerHTML = '';
}

const resetBoard = () => {
  clearBoard();
  clearResultMessage();
  shuffleStack(cards);
  createBoard();
};

createBoard();

let resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', resetBoard);
