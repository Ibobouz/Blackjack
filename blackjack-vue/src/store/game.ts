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
  roundFinished: boolean;
  roundSettled: boolean
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
    roundFinished: false,
    roundSettled: false
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
      this.roundFinished = false;
      this.roundSettled = false; 
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
        this.isAlive = false
        this.roundFinished = true
      } else {
        this.message = "You're out of the game!";
        this.isAlive = false;
        this.roundFinished = true
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
        this.isAlive = false;
        this.roundFinished = true
      } else {
        this.message = "You're out of the game!";
        this.isAlive = false;
        this.roundFinished = true
      
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
  privatePayout(sum: number, bet: number): number {
    if (sum < 10 || sum > 21) return 0;
    if (sum > 10 && sum < 15) return bet;
    if (sum >= 15 && sum < 20) return Math.floor(bet * (1 + (sum - 10) * 0.1));
    if (sum === 20) return Math.floor(bet * 1.95);
    if (sum === 21) return Math.floor(bet * 2.5);
    return 0;
  },

settleRound() {
  if (!this.roundFinished || this.roundSettled) return;

  let delta = 0;

  if (this.sum > 21) {
    // Bust loses the bet
    delta = -this.currentBet;
    this.message = `Busted! You lost $${this.currentBet}.`;
  } else {
    // Your payout rule (e.g., 21 pays differently if you want)
    const wins = this.privatePayout(this.sum, this.currentBet);
    delta = wins;
    this.message = `You've won $${wins}.`;
  }

  this.chips += delta;
  this.saveChips(); // <- ALWAYS persist here

  this.currentBet = 0;
  localStorage.removeItem('currentBet');

  this.roundSettled = true;
  this.isAlive = false;
},


  /** Cash-Out Button → sofort auszahlen */
cashOut() {
  if (this.roundSettled) return;

  // Freeze the round if it wasn't marked finished yet
  if (!this.roundFinished) {
    this.roundFinished = true;
    this.isAlive = false; // player stands / stops drawing
  }

  this.settleRound();
},

  /** Runde für neues Spiel/Route säubern */
  resetRound({ keepBet = true }: { keepBet?: boolean } = {}) {
    this.cards = [];
    this.sum = 0;
    this.isAlive = false;
    this.hasBlackjack = false;
    this.message = '';
    this.roundFinished = false;
    this.roundSettled = false;
    if (!keepBet) {
      this.currentBet = 0;
      localStorage.removeItem('currentBet');
    }
  },
}});
