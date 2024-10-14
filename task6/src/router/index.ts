import { createRouter, createWebHistory, type RouteRecordRaw,  } from 'vue-router';
import Home from '../views/Home.vue';
import CompletedTasks from '../views/CompletedTasks.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/completed', component: CompletedTasks },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
