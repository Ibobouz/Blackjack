<!-- src/components/Card.vue -->
<template>
  <img :src="img" :alt="alt" class="card" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { fullDeck, pickRandomCard } from '@/composables/useDeck';


export default defineComponent({
  name: 'Card',
  props: {
    img: { type: String, required: true },
    alt: { type: String, required: true }
  }
});
</script>

<style scoped>
.card {
  width: 80px;
  border-radius: 4px;
  margin-right: 0.5rem;
}
</style>
