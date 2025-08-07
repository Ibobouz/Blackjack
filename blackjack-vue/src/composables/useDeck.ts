export interface Card {
  suit: string;
  value: string;
  img: string;
}

export const fullDeck: Card[] = [

  { suit: "clubs",    value: "A", img: "../assets/cards/clubs_A.png" },
  { suit: "clubs",    value: "2", img: "../assets/cards/clubs_2.png" },
  { suit: "clubs",    value: "3", img: "../assets/cards/clubs_3.png" },
  { suit: "clubs",    value: "4", img: "../assets/cards/clubs_4.png" },
  { suit: "clubs",    value: "5", img: "../assets/cards/clubs_5.png" },
  { suit: "clubs",    value: "6", img: "../assets/cards/clubs_6.png" },
  { suit: "clubs",    value: "7", img: "../assets/cards/clubs_7.png" },
  { suit: "clubs",    value: "8", img: "../assets/cards/clubs_8.png" },
  { suit: "clubs",    value: "9", img: "../assets/cards/clubs_9.png" },
  { suit: "clubs",    value: "10",img: "../assets/cards/clubs_10.png"},
  { suit: "clubs",    value: "J", img: "../assets/cards/clubs_J.png" },
  { suit: "clubs",    value: "Q", img: "../assets/cards/clubs_Q.png" },
  { suit: "clubs",    value: "K", img: "../assets/cards/clubs_K.png" },

 
  { suit: "diamonds", value: "A", img: "../assets/cards/diamonds_A.png" },
  { suit: "diamonds", value: "2", img: "../assets/cards/diamonds_2.png" },
  { suit: "diamonds", value: "3", img: "../assets/cards/diamonds_3.png" },
  { suit: "diamonds", value: "4", img: "../assets/cards/diamonds_4.png" },
  { suit: "diamonds", value: "5", img: "../assets/cards/diamonds_5.png" },
  { suit: "diamonds", value: "6", img: "../assets/cards/diamonds_6.png" },
  { suit: "diamonds", value: "7", img: "../assets/cards/diamonds_7.png" },
  { suit: "diamonds", value: "8", img: "../assets/cards/diamonds_8.png" },
  { suit: "diamonds", value: "9", img: "../assets/cards/diamonds_9.png" },
  { suit: "diamonds", value: "10",img: "../assets/cards/diamonds_10.png"},
  { suit: "diamonds", value: "J", img: "../assets/cards/diamonds_J.png" },
  { suit: "diamonds", value: "Q", img: "../assets/cards/diamonds_Q.png" },
  { suit: "diamonds", value: "K", img: "../assets/cards/diamonds_K.png" },


  { suit: "hearts",   value: "A", img: "../assets/cards/hearts_A.png" },
  { suit: "hearts",   value: "2", img: "../assets/cards/hearts_2.png" },
  { suit: "hearts",   value: "3", img: "../assets/cards/hearts_3.png" },
  { suit: "hearts",   value: "4", img: "../assets/cards/hearts_4.png" },
  { suit: "hearts",   value: "5", img: "../assets/cards/hearts_5.png" },
  { suit: "hearts",   value: "6", img: "../assets/cards/hearts_6.png" },
  { suit: "hearts",   value: "7", img: "../assets/cards/hearts_7.png" },
  { suit: "hearts",   value: "8", img: "../assets/cards/hearts_8.png" },
  { suit: "hearts",   value: "9", img: "../assets/cards/hearts_9.png" },
  { suit: "hearts",   value: "10",img: "../assets/cards/hearts_10.png"},
  { suit: "hearts",   value: "J", img: "../assets/cards/hearts_J.png" },
  { suit: "hearts",   value: "Q", img: "../assets/cards/hearts_Q.png" },
  { suit: "hearts",   value: "K", img: "../assets/cards/hearts_K.png" },


  { suit: "spades",   value: "A", img: "../assets/cards/spades_A.png" },
  { suit: "spades",   value: "2", img: "../assets/cards/spades_2.png" },
  { suit: "spades",   value: "3", img: "../assets/cards/spades_3.png" },
  { suit: "spades",   value: "4", img: "../assets/cards/spades_4.png" },
  { suit: "spades",   value: "5", img: "../assets/cards/spades_5.png" },
  { suit: "spades",   value: "6", img: "../assets/cards/spades_6.png" },
  { suit: "spades",   value: "7", img: "../assets/cards/spades_7.png" },
  { suit: "spades",   value: "8", img: "../assets/cards/spades_8.png" },
  { suit: "spades",   value: "9", img: "../assets/cards/spades_9.png" },
  { suit: "spades",   value: "10",img: "../assets/cards/spades_10.png"},
  { suit: "spades",   value: "J", img: "../assets/cards/spades_J.png" },
  { suit: "spades",   value: "Q", img: "../assets/cards/spades_Q.png" },
  { suit: "spades",   value: "K", img: "../assets/cards/spades_K.png" },
];

export function pickRandomCard(): Card {
  const idx = Math.floor(Math.random() * fullDeck.length);
  return fullDeck[idx];
}
