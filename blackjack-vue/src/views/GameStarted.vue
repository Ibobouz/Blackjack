<template>
  <div class="game-page">
    <p>
      Bet: <strong>{{ game.currentBet }}</strong> |
      Remaining Chips: <strong>{{ game.chips - game.currentBet }}$</strong>
    </p>

    <!-- Kartendarstellung -->
    <GameBoard />

    <!-- Kontroll-Buttons -->
    <div class="controls">
      <button @click="onDrawCards" :disabled="game.isAlive">Draw Cards</button>
      <button @click="onNewCard"   :disabled="!game.isAlive || game.hasBlackjack">New Card</button>
      <button @click="cashOut"    :disabled="!game.isAlive">Cash Out</button>
      <button @click="backToStart":disabled="game.isAlive">Return To Menu</button>
    </div>

    <!-- Statusmeldung -->
    <Message :text="game.message" />

    <!-- Zurück-Button -->
    <button class="back" @click="backToStart">Back</button>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useGameStore } from '@/store/game';
import GameBoard from '@/components/GameBoard.vue';
import Message   from '@/components/Message.vue';

const game   = useGameStore();
const router = useRouter();

// Bei erster Ansicht (falls noch nicht geschehen) Einsatz-Logik auslösen?
// Wir gehen davon aus, dass `currentBet` bereits gesetzt ist.

function onDrawCards() {
  game.startGame();          // Punkten, Summen, Flags initialisieren
}

function onNewCard() {
  game.drawCard();           // Eine Karte ziehen
}

function cashOut() {
 game.cashOut()
}

function backToStart() {
  router.push({ name: 'Start' });
}
</script>
<style scoped>
.game-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
}

.controls {
  display: flex;
  gap: 1rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.back {
  margin-top: 1.5rem;
}
</style>
