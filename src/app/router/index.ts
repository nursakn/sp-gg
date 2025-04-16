import { createRouter, createWebHistory } from 'vue-router';
import { HomePage, ConvertPage } from '@/pages';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/convert',
      name: 'convert',
      component: ConvertPage,
    },
  ],
});

export default router;
