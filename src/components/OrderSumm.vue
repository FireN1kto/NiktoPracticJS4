<template>
  <div class="order-summary">
    <div v-if="orders.length" class="order-list">
      <OrderItem
          v-for="(order, index) in orders"
          :key="index"
          :order="order"
          :index="index"
      />
    </div>
    <p v-else class="empty-orders">У вас пока нет заказов.</p>
  </div>
</template>
<script>
import OrderItem from '@/components/OrderData.vue';
export default {
  components: { OrderItem },
  computed: {
    orders() {
      return this.$store.state.orders;
    }
  }
};
</script>
<style scoped>
.order-summary {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}
.order-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.empty-orders {
  text-align: center;
  font-size: 18px;
  color: gray;
}
</style>