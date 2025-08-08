<template>
  <div class="start-page">
    <h1>Blackjack</h1>
    <p id="message-el">Want to play a Round?</p>


    <label>
      Name:
      <input v-model="nameInput" placeholder="Dein Name" />
    </label>


    <p id="player">
      Last Player: <strong>{{ game.playerName || '—' }}</strong>
      | Chips: <strong>{{ game.chips }}</strong>
    </p>

    <button @click="goToBet" :disabled="!nameInput">
      Play
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useGameStore } from '@/store/game';

export default defineComponent({
  setup() {
    const router = useRouter();
    const game   = useGameStore();
    let nameInput = ref(game.playerName);   // vorbefüllen, falls schon gesetzt

    // Beim Mount den gespeicherten Namen laden (falls nicht schon in main.ts passiert)
    onMounted(() => {
      game.loadPlayerName();
      nameInput.value = game.playerName;
    });

    function goToBet() {
      // Namen ins Store schreiben
      game.setPlayerName(nameInput.value);
      router.push({ name: 'MoneyBet' });
    };

    function Newname() {
     const NewName = document.getElementById("newName")
     const newnamehtml = ``
    }

    return { game, nameInput, goToBet };
  }
});
</script>
