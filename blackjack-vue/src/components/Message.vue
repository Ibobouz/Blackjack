<template>
  <p id="message">{{ game.message }}</p>
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
