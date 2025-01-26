import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PedidosView from '@/views/PedidosView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // podemos chamar de 2 formas
  // chamando o import dentro da rota
  {
    path: '/about',
    name: 'about',
    // divisão de código em nível de rota
    // isso gera um pedaço separado (about.[hash].js) para esta rota
    // que é carregado lentamente quando a rota é visitada.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  // importando o componente
  {
    path: '/burgues',
    name: 'burgues',
    component: PedidosView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
