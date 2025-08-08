export interface Card {
  suit: string;
  value: string;
  img: string;
}

// src/composables/useDeck.ts
import hearts_A   from '@/assets/cards/hearts_A.png';
import hearts_2   from '@/assets/cards/hearts_2.png';
import hearts_3   from '@/assets/cards/hearts_3.png';
import hearts_4   from '@/assets/cards/hearts_4.png';
import hearts_5   from '@/assets/cards/hearts_5.png';
import hearts_6   from '@/assets/cards/hearts_6.png';
import hearts_7   from '@/assets/cards/hearts_7.png';
import hearts_8   from '@/assets/cards/hearts_8.png';
import hearts_9   from '@/assets/cards/hearts_9.png';
import hearts_10  from '@/assets/cards/hearts_10.png';
import hearts_J   from '@/assets/cards/hearts_J.png';
import hearts_Q   from '@/assets/cards/hearts_Q.png';
import hearts_K   from '@/assets/cards/hearts_K.png';

import diamonds_A   from '@/assets/cards/diamonds_A.png';
import diamonds_2   from '@/assets/cards/diamonds_2.png';
import diamonds_3   from '@/assets/cards/diamonds_3.png';
import diamonds_4   from '@/assets/cards/diamonds_4.png';
import diamonds_5   from '@/assets/cards/diamonds_5.png';
import diamonds_6   from '@/assets/cards/diamonds_6.png';
import diamonds_7   from '@/assets/cards/diamonds_7.png';
import diamonds_8   from '@/assets/cards/diamonds_8.png';
import diamonds_9   from '@/assets/cards/diamonds_9.png';
import diamonds_10  from '@/assets/cards/diamonds_10.png';
import diamonds_J   from '@/assets/cards/diamonds_J.png';
import diamonds_Q   from '@/assets/cards/diamonds_Q.png';
import diamonds_K   from '@/assets/cards/diamonds_K.png';

import clubs_A   from '@/assets/cards/clubs_A.png';
import clubs_2   from '@/assets/cards/clubs_2.png';
import clubs_3   from '@/assets/cards/clubs_3.png';
import clubs_4   from '@/assets/cards/clubs_4.png';
import clubs_5   from '@/assets/cards/clubs_5.png';
import clubs_6   from '@/assets/cards/clubs_6.png';
import clubs_7   from '@/assets/cards/clubs_7.png';
import clubs_8   from '@/assets/cards/clubs_8.png';
import clubs_9   from '@/assets/cards/clubs_9.png';
import clubs_10  from '@/assets/cards/clubs_10.png';
import clubs_J   from '@/assets/cards/clubs_J.png';
import clubs_Q   from '@/assets/cards/clubs_Q.png';
import clubs_K   from '@/assets/cards/clubs_K.png';

import spades_A   from '@/assets/cards/spades_A.png';
import spades_2   from '@/assets/cards/spades_2.png';
import spades_3   from '@/assets/cards/spades_3.png';
import spades_4   from '@/assets/cards/spades_4.png';
import spades_5   from '@/assets/cards/spades_5.png';
import spades_6   from '@/assets/cards/spades_6.png';
import spades_7   from '@/assets/cards/spades_7.png';
import spades_8   from '@/assets/cards/spades_8.png';
import spades_9   from '@/assets/cards/spades_9.png';
import spades_10  from '@/assets/cards/spades_10.png';
import spades_J   from '@/assets/cards/spades_J.png';
import spades_Q   from '@/assets/cards/spades_Q.png';
import spades_K   from '@/assets/cards/spades_K.png';


export const fullDeck: Card[] = [

  { suit: "clubs",    value: "A", img: clubs_A },
  { suit: "clubs",    value: "2", img: clubs_2 },
  { suit: "clubs",    value: "3", img: clubs_3 },
  { suit: "clubs",    value: "4", img: clubs_4 },
  { suit: "clubs",    value: "5", img: clubs_5 },
  { suit: "clubs",    value: "6", img: clubs_6 },
  { suit: "clubs",    value: "7", img: clubs_7 },
  { suit: "clubs",    value: "8", img: clubs_8 },
  { suit: "clubs",    value: "9", img: clubs_9 },
  { suit: "clubs",    value: "10",img: clubs_10},
  { suit: "clubs",    value: "J", img: clubs_J },
  { suit: "clubs",    value: "Q", img: clubs_Q },
  { suit: "clubs",    value: "K", img: clubs_K },

 
  { suit: "diamonds", value: "A", img: diamonds_A },
  { suit: "diamonds", value: "2", img: diamonds_2 },
  { suit: "diamonds", value: "3", img: diamonds_3 },
  { suit: "diamonds", value: "4", img: diamonds_4 },
  { suit: "diamonds", value: "5", img: diamonds_5 },
  { suit: "diamonds", value: "6", img: diamonds_6 },
  { suit: "diamonds", value: "7", img: diamonds_7 },
  { suit: "diamonds", value: "8", img: diamonds_8 },
  { suit: "diamonds", value: "9", img: diamonds_9 },
  { suit: "diamonds", value: "10",img: diamonds_10},
  { suit: "diamonds", value: "J", img: diamonds_J },
  { suit: "diamonds", value: "Q", img: diamonds_Q },
  { suit: "diamonds", value: "K", img: diamonds_K },


  { suit: "hearts",   value: "A", img: hearts_A },
  { suit: "hearts",   value: "2", img: hearts_2 },
  { suit: "hearts",   value: "3", img: hearts_3 },
  { suit: "hearts",   value: "4", img: hearts_4 },
  { suit: "hearts",   value: "5", img: hearts_5 },
  { suit: "hearts",   value: "6", img: hearts_6 },
  { suit: "hearts",   value: "7", img: hearts_7 },
  { suit: "hearts",   value: "8", img: hearts_8 },
  { suit: "hearts",   value: "9", img: hearts_9 },
  { suit: "hearts",   value: "10",img: hearts_10},
  { suit: "hearts",   value: "J", img: hearts_J },
  { suit: "hearts",   value: "Q", img: hearts_Q },
  { suit: "hearts",   value: "K", img: hearts_K },


  { suit: "spades",   value: "A", img: spades_A },
  { suit: "spades",   value: "2", img: spades_2 },
  { suit: "spades",   value: "3", img: spades_3 },
  { suit: "spades",   value: "4", img: spades_4 },
  { suit: "spades",   value: "5", img: spades_5 },
  { suit: "spades",   value: "6", img: spades_6 },
  { suit: "spades",   value: "7", img: spades_7 },
  { suit: "spades",   value: "8", img: spades_8 },
  { suit: "spades",   value: "9", img: spades_9 },
  { suit: "spades",   value: "10",img: spades_10},
  { suit: "spades",   value: "J", img: spades_J },
  { suit: "spades",   value: "Q", img: spades_Q },
  { suit: "spades",   value: "K", img: spades_K },
];


export function pickRandomCard(): Card {
  return fullDeck[Math.floor(Math.random() * fullDeck.length)];
}
