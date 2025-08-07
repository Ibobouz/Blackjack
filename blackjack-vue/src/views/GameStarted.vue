<template>
  <div class="game-page">
    <GameBoard />
    <Controls />
    <Message />
    <button @click="backToStart">Zurück</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter }      from 'vue-router';
import GameBoard          from '@/components/GameBoard.vue';
import Controls           from '@/components/Controls.vue';
import Message            from '@/components/Message.vue';

export default defineComponent({
  name: 'GameStarted',
  components: { GameBoard, Controls, Message },
  setup() {
    const router = useRouter();
    function backToStart() {
      router.push({ name: 'Start' });
    }
    return { backToStart };
  }
});
</script>
 
<style scoped>
.game-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
