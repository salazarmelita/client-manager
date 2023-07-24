import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/ClientesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // arr5eglo para multiples páginas
  routes: [
    {
      path: '/',
      name: 'home',
      component: Inicio
    }
  ]
})

export default router
