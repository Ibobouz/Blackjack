<!-- src/App.vue -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({ name: 'App' });
</script>


<style>
/* optional: globale Styles */
#app {
  max-width: 400px;
  margin: 2rem auto;
  text-align: center;
}
</style>
