<template>
  <div class="game-page">
    <p>
      Bet: <strong>{{ game.currentBet }}$</strong> |
      Remaining Chips: <strong>{{ game.chips - game.currentBet }}$</strong>
    </p>

    <!-- Kartendarstellung -->
    <GameBoard />

    <!-- Kontroll-Buttons -->
    <div class="controls">
      <button @click="onDrawCards" :disabled="game.isAlive || game.roundFinished">Draw Cards</button>
      <button @click="onNewCard"   :disabled="!game.isAlive || game.hasBlackjack">New Card</button>
      <button @click="cashOut"    :disabled="game.roundSettled || (!game.isAlive && !game.roundFinished)">Cash Out</button>
      <button @click="backToStart":disabled="game.isAlive">Return To Menu</button>
    </div>

    <!-- Statusmeldung -->
    <Message :text="game.message" />
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useGameStore } from '@/store/game';
import GameBoard from '@/components/GameBoard.vue';
import Message   from '@/components/Message.vue';

const game   = useGameStore();
const router = useRouter();

onMounted (() => {
  game.resetRound({keepBet: true})
})

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
  // Safety net: if the user bails early, make sure we settle & persist once.
  if (!game.roundSettled && (game.isAlive || game.roundFinished)) {
    game.cashOut(); // this will settle once and persist chips
  }
  game.resetRound({keepBet: false})
  game.saveChips()
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
