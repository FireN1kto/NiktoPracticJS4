import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/CatalogView.vue';
import CartView from '@/views/CartView.vue';
import OrdersView from '@/views/OrdersView.vue';
import CatalogView from "@/views/CatalogView.vue";


const routes = [
  { path: '/', name: 'catalog', component: CatalogView },
  { path: '/cart', name: 'cart', component: CartView },
  { path: '/orders', name: 'orders', component: OrdersView }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;