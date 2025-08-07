<template>
  <div id="cardsEl">
    <Card 
      v-for="(card, i) in game.cards"
      :key="i"
      :img="card.img"
      :alt="`${card.value} of ${card.suit}`" />
  </div>
  <p id="sumEl">Sum: {{ game.sum }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useGameStore } from '../store/game';
import Card from './Card.vue';

export default defineComponent({
  components: { Card },
  setup() {
    const game = useGameStore();
    return { game };
  }
});
</script>
