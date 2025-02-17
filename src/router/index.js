import { createRouter, createWebHistory } from 'vue-router';
import CartView from '@/views/CartView.vue';
import OrdersView from '@/views/OrdersView.vue';
import CatalogView from "@/views/CatalogView.vue";
import HomeView from '@/views/HomeView.vue'


const routes = [
  { path: '/', name: 'catalog', component: CatalogView },
  { path: '/home', name: 'home', component: HomeView },
  { path: '/cart', name: 'cart', component: CartView },
  { path: '/orders', name: 'orders', component: OrdersView }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;