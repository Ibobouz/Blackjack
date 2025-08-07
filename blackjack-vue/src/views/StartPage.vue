<template>
  <div class="start-page">
    <h1>Blackjack</h1>
    <p id="message-el">Want to play a Round?</p>
    <button @click="goToBet">Play</button>
    <p id="player"></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter }      from 'vue-router';

export default defineComponent({
  name: 'StartPage',
  setup() {
    const router = useRouter();
    function goToBet() {
      router.push({ name: 'MoneyBet' });
    }
    return { goToBet };
  }
});
</script>

<style scoped>
.start-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
