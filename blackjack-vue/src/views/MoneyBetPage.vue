<template>
  <div class="bet-page">
    <h1>Blackjack</h1>
    <p>How much you want to bet?</p>

    <div class="button-row">
      <button class="CountButton" @click="decreaseBet" :disabled="betDisplay <= minBet">-</button>
      <span class="counter">{{ betDisplay }}</span>
      <button class="CountButton" @click="increaseBet" :disabled="betDisplay >= game.chips">+</button>
    </div>

    <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>

    <button id="startGame" @click="startGame" :disabled="betDisplay < minBet || betDisplay > game.chips">
      START GAME
    </button>

    <p id="player">
      Player: <strong>{{ game.playerName || '—' }}</strong>
      | Chips: <strong>{{ game.chips }}</strong>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useGameStore } from '@/store/game';

const game = useGameStore();
const router = useRouter();

// initiale Werte laden
onMounted(() => {
  game.loadChips();
  game.loadPlayerName();
});

// minimale und maximale Grenzen
const minBet = 5;
const maxBet = computed(() => game.chips);

// lokal reaktiver Einsatz-Zähler
const betDisplay = ref<number>(Math.min(game.currentBet || minBet, game.chips));
const errorMessage = ref<string>('');

// Einsatz erhöhen
function increaseBet() {
  errorMessage.value = '';
  if (betDisplay.value + minBet > game.chips) {
    errorMessage.value = "You've reached the maximum!";
    betDisplay.value = game.chips;
  } else {
    betDisplay.value += minBet;
  }
}

// Einsatz verringern
function decreaseBet() {
  errorMessage.value = '';
  if (betDisplay.value - minBet < minBet) {
    errorMessage.value = "You've reached the minimum!";
    betDisplay.value = minBet;
  } else {
    betDisplay.value -= minBet;
  }
}

// Spielstart und Persistenz
function startGame() {
  // in Store übernehmen & speichern
  game.setBet(betDisplay.value);
  // weiter zur Spielansicht
  router.push({ name: 'Game' });
}
</script>

<style scoped>
.bet-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
}

.button-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.CountButton {
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
}

.counter {
  min-width: 3rem;
  text-align: center;
  font-size: 1.2rem;
}

.error-message {
  color: red;
  font-weight: bold;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
