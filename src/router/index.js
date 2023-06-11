import { createRouter, createWebHistory } from 'vue-router';
import AcessorioView from '../views/AcessorioView.vue';
import HomeView from '../views/HomeView.vue';
import CategoriaView from '../views/CategoriaView.vue';
import MarcaView from '../views/MarcaView.vue';
import ModeloView from '../views/ModeloView.vue';
import CorView from '../views/CorView.vue';
import VeiculoView from '../views/VeiculoView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: CategoriaView,
    },
    {
      path: '/marcas',
      name: 'marcas',
      component: MarcaView,
    },
    {
      path: '/cores',
      name: 'cores',
      component: CorView,
    },
    {
      path: '/acessorios',
      name: 'acessorios',
      component: AcessorioView,
    },
    {
      path: '/modelos',
      name: 'modelos',
      component: ModeloView,
    },
    {
      path: '/veiculos',
      name: 'veiculos',
      component: VeiculoView,
    },
  ],
});

export default router;
