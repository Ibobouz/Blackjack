<template>
  <button @click="game.startGame()">Draw Cards</button>
  <button @click="game.drawCard()">New Card</button>
  <button @click="game.cashOut()">Cash Out</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useGameStore } from '../store/game';

export default defineComponent({
  setup() {
    const game = useGameStore();
    return { game };
  }
});
</script>
