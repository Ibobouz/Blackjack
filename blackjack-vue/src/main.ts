import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { useGameStore } from '@/store/game';
import { router } from './router';
import "@/assets/style.css"

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.mount('#app');

// Direkt nach Mounting Chips laden
useGameStore().loadChips();
