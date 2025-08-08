// 1) Importiere defineStore wie gehabt
import { defineStore } from 'pinia';
import type { Card } from '@/composables/useDeck';
import { pickRandomCard } from '@/composables/useDeck';

// 2) Erweitere das Interface um chips und currentBet
export interface GameState {
  cards: Card[];
  sum: number;
  isAlive: boolean;
  hasBlackjack: boolean;
  message: string;

  // neu:
  playerName: string;
  chips: number;        // aktueller Kontostand
  currentBet: number;   // gerade gesetzter Einsatz
}

export const useGameStore = defineStore('game', {
  // 3) Initial-State anpassen
  state: (): GameState => ({
    cards: [],
    sum: 0,
    isAlive: false,
    hasBlackjack: false,
    message: '',

    // neu initialisieren (z.B. aus localStorage oder Standard 100)
    playerName: '',
    chips: Number(localStorage.getItem('chips') ?? 200),
    currentBet: Number(localStorage.getItem('currentBet')) || 0,
  }),

  actions: {
        cardValue(card: Card): number {
      if (['J','Q','K'].includes(card.value)) return 10;
      if (card.value === 'A') return 11;
      return Number(card.value);
    },

    // 1) startGame: zwei Karten ziehen, Summe berechnen, Flags setzen
    startGame() {
      this.isAlive = true;
      this.hasBlackjack = false;
      // Ziehe zwei Karten
      this.cards = [ pickRandomCard(), pickRandomCard() ];
      // Berechne Summe
      this.sum = this.cards.reduce((total, c) => total + this.cardValue(c), 0);
      // Aktualisiere Meldung
      if (this.sum < 21) {
        this.message = 'Draw a new card?';
      } else if (this.sum === 21) {
        this.message = "You've got Blackjack!";
        this.hasBlackjack = true;
      } else {
        this.message = "You're out of the game!";
        this.isAlive = false;
      }
    },

    // 2) drawCard: eine Karte ziehen, Summe updaten, Flags prüfen
    drawCard() {
      if (!this.isAlive || this.hasBlackjack) return;
      const card = pickRandomCard();
      this.cards.push(card);
      this.sum += this.cardValue(card);

      if (this.sum < 21) {
        this.message = 'Draw a new card?';
      } else if (this.sum === 21) {
        this.message = "You've got Blackjack!";
        this.hasBlackjack = true;
      } else {
        this.message = "You're out of the game!";
        this.isAlive = false;
      }
    },
    

    // 4) Setter für den Einsatz
    setBet(amount: number) {
      this.currentBet = amount;
      localStorage.setItem('currentBet', String(amount));
    },

    // 5) Chips laden (falls Du es nicht schon in state() machst)
    loadChips() {
    const item = localStorage.getItem('chips');
    this.chips = item !== null 
    ? Number(item)
    : 200;              // Default, falls noch kein Eintrag da
}
,

    // 6) Chips speichern
    saveChips() {
      localStorage.setItem('chips', String(this.chips));
    },

    // 7) Beim Spielabschluss aufrufen  
    finalizeGame(win: boolean) {
      if (win) {
        this.chips += this.currentBet;
      } else {
        this.chips -= this.currentBet;
      }
      this.currentBet = 0;
      this.saveChips();
    },
    setPlayerName(Name: string) {
      this.playerName = Name
      localStorage.setItem("playerName", Name)
    },
    loadPlayerName() {
      const saved = localStorage.getItem('playerName') || ''
      this.playerName = saved;
    
  },
cashOut() {
      // Buttons ausblenden (View bindet später an isAlive)
      this.isAlive = false;

      let wins = 0;
      const b = this.currentBet;
      const s = this.sum;

      if (s < 10 || s > 21) {
        wins = 0;
      } else if (s > 10 && s < 15) {
        wins = b;
      } else if (s >= 15 && s < 20) {
        const multiplier = 1 + (s - 10) * 0.1;
        wins = Math.floor(b * multiplier);
      } else if (s === 20) {
        wins = Math.floor(b * 1.95);
      } else if (s === 21) {
        wins = b * 2;
      }

      // Auszahlung und Persistenz
      this.chips += wins;
      this.currentBet = 0;
      localStorage.setItem('chips', String(this.chips));
      localStorage.removeItem('currentBet');

      // Nachricht setzen
      this.message = `You've won $${wins}`;
    },
  
}});
