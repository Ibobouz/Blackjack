<template>
  <div class="bet-page">
    <h2>Setze dein Geld</h2>
    <button @click="goToGame">Los!</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter }      from 'vue-router';

export default defineComponent({
  name: 'MoneyBetPage',
  setup() {
    const router = useRouter();
    function goToGame() {
      router.push({ name: 'Game' });
    }
    return { goToGame };
  }
});
</script>

<style scoped>
.bet-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
