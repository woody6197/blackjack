let playerCurrentTotal = 0;
let dealerCurrentTotal = 0;
let playerWins = 0;
let dealerWins = 0;

const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

function createDeck() {
  let deck = [];
  for (let suit of suits) {
    for (let value of values) {
      let card = { suit: suit, value: value };
      deck.push(card);
    }
  }
  return deck;
}

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

export { createDeck, shuffleDeck, playerCurrentTotal, dealerCurrentTotal, playerWins, dealerWins };

