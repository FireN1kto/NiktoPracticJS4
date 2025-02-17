<script>
import OrderSummary from '@/components/OrderSumm.vue';
export default {
  components: {OrderSummary},
  methods: {
    goBack() {
      this.$router.push('/');
    }
  }
};
</script>

<template>
  <div class="orders-view">
    <h1>Мои заказы</h1>
    <OrderSummary />
    <button @click="goBack" class="back-button">Назад</button>
  </div>
</template>

<style>
.orders-view {
  padding: 20px;
  text-align: center;
}

.back-button {
  background-color: rgba(0, 0, 0, 0.20);
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  width: 10%;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.back-button:hover {
  transform: scaleX(0.9);
  background-color: #35495e;
}

</style>