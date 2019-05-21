import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Game from './components/Game.vue';
import Win from './components/Win.vue';
import Lost from './components/Lost.vue';



Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/game/:id',
      name: 'game',
      component: Game
    },
    {
      path: '/win',
      name: 'win',
      component: Win
    },
    {
      path: '/lost',
      name: 'lost',
      component: Lost
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
