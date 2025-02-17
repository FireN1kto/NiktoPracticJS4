<template>
  <div class="cart-view">
    <CartSumm />
    <button @click="goBack" class="back-button">Назад</button>
  </div>
</template>

<script>
import CartSumm from '@/components/CartSumm.vue';
export default {
  components: { CartSumm },
  methods: {
    goBack() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.cart-view {
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
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.back-button:hover {
  background-color: #35495e;
}
</style>