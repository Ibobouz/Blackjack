
import { defineStore } from 'pinia';
import type { Card } from '../composables/useDeck';
import { pickRandomCard } from '../composables/useDeck';


export interface GameState {
  cards: Card[];       
  sum: number;           
  isAlive: boolean;      
  hasBlackjack: boolean; 
  message: string;       
}


export const useGameStore = defineStore('game', {

  state: (): GameState => ({
    cards: [],       
    sum: 0,           
    isAlive: false,   
    hasBlackjack: false,
    message: ''       
  }),

  actions: {
  
    startGame() {
      this.isAlive = true;
      this.hasBlackjack = false;
      this.cards = [ pickRandomCard(), pickRandomCard() ];
      this.sum = this.cards.reduce((acc, c) => acc + this.cardValue(c), 0);
      this.updateMessage();
    },

 
    drawCard() {
      if (!this.isAlive || this.hasBlackjack) return;
      const card = pickRandomCard();
      this.cards.push(card);
      this.sum += this.cardValue(card);
      if (this.sum === 21) this.hasBlackjack = true;
      if (this.sum > 21) this.isAlive = false;
      this.updateMessage();
    },

    cashOut() {
      this.cards = [];
      this.sum = 0;
      this.isAlive = false;
      this.hasBlackjack = false;
      this.message = '';
    },

    cardValue(card: Card): number {
      if (['J','Q','K'].includes(card.value)) return 10;
      if (card.value === 'A') return 11;
      return Number(card.value);
    },

    updateMessage() {
      if (this.sum < 21) this.message = 'Draw a new card?';
      else if (this.sum === 21) this.message = "You've got Blackjack!";
      else this.message = "You're out of the game!";
    }
  }
});
