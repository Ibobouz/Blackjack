// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import StartPage    from '../views/StartPage.vue';
import MoneyBetPage from '../views/MoneyBetPage.vue';
import GameStarted  from '../views/GameStarted.vue';

const routes = [
  { path: '/',         name: 'Start',    component: StartPage },
  { path: '/bet',      name: 'MoneyBet', component: MoneyBetPage },
  { path: '/play',     name: 'Game',     component: GameStarted },
  // optional: Catch-All → Redirect zurück zur Startseite
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
