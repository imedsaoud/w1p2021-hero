import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Characters from './components/Characters.vue';
import Game1 from './components/Game1.vue';
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
      path: '/characters',
      name: 'characters',
      component: Characters,
    },
    {
      path: '/game/1',
      name: '1',
      component: Game1
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
