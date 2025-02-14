<script>
export default {
  computed: {
    orders() {
      return this.$store.state.orders;
    }
  },
  methods: {
    goBack() {
      this.$router.push('/');
    }
  }
};
</script>

<template>
  <div class="orders">
    <h1>Мои заказы</h1>
    <ul v-if="orders.length">
      <li v-for="(order, index) in orders" :key="index" class="order-item">
        <h3>Заказ #{{ index + 1 }}</h3>
        <p><strong>Дата:</strong> {{ order.date }}</p>
        <ul>
          <li v-for="item in order.items" :key="item.id" class="order-product">
            <img :src="item.image" :alt="item.name" width="50" height="50" />
            <div class="product-info">
              <p>{{ item.name }} x {{ item.quantity }} = ${{ (item.price * item.quantity).toFixed(2) }}</p>
            </div>
          </li>
        </ul>
        <p><strong>Состояние:</strong> В пути</p>
      </li>
    </ul>
    <p v-else>У вас пока нет заказов.</p>
    <button @click="goBack" class="back">Назад</button>
  </div>
</template>

<style>
.orders {
  padding: 20px;
}

.orders > ul {
  list-style: none;
}

.order-product {
  display: flex;
}

.order-item {
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
}

.back {
  border: none;
  background-color: cornflowerblue;
  padding: 1%;
  margin-bottom: 2%;
  border-radius: 10px;
  transition: background-color 0.3s ease-out;
}

.back:hover {
  background-color: dodgerblue;
}

.back:active {
  background-color: steelblue;
}

</style>