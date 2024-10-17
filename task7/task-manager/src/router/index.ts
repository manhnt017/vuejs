import { createRouter, createWebHistory } from 'vue-router';
import TaskList from '../components/TaskList.vue';
import Completed from '@/components/Completed.vue';

const routes = [
  {
    path: '/',
    name: 'TaskList',
    component: TaskList,
  },{
    path: '/completed',
    name: 'CompletedTasks',
    component: Completed
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
