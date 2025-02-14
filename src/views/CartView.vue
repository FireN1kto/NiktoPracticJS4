<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    total() {
      return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
  },
  methods: {
    increaseQuantity(id) {
      this.$store.dispatch('updateQuantity', { id, quantity: this.cart.find(item => item.id === id).quantity + 1 });
    },
    decreaseQuantity(id) {
      this.$store.dispatch('updateQuantity', { id, quantity: this.cart.find(item => item.id === id).quantity - 1 });
    },
    removeFromCart(id) {
      this.$store.dispatch('removeFromCart', id);
    },
    checkout() {
      this.$store
          .dispatch('checkout')
          .then(() => {
            this.$router.push('/orders');
          })
          .catch(err => {
            alert(err.message || 'Произошла ошибка при оформлении заказа.');
            console.error('Ошибка при оформлении заказа:', err);
          });
    },
    goBack() {
      this.$router.push('/');
    }
  }
};
</script>

<template>
  <div class="cart">
    <h1>Корзина</h1>
    <p v-if="!cart.length">Ваша корзина пуста.</p>
    <ul v-else>
      <li v-for="item in cart" :key="item.id" class="cart-item">
        <img :src="item.image" :alt="item.name" class="cart-img"/>
        <div class="cart-info">
          <h3>{{ item.name }}</h3>
          <p><strong>Цена:</strong> ${{ item.price.toFixed(2) }}</p>
          <p><strong>Количество:</strong></p>
          <div class="cart-count">
            <button @click="decreaseQuantity(item.id)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(item.id)">+</button>
            <button @click="removeFromCart(item.id)">Удалить</button>
          </div>
        </div>
      </li>
    </ul>
    <div v-if="cart.length" class="total">
      <h3>Итого: ${{ total.toFixed(2) }}</h3>
      <div class="navigation">
        <button @click="checkout" v-if="cart.length > 0">Оформить заказ</button>
        <button @click="goBack">Назад</button>
      </div>
    </div>
  </div>
</template>

<style>
.cart {
  padding: 20px;
}
.cart-item {
  display: flex;
  align-items: center;
  border: 1px solid black;
  margin-bottom: 5%;
  width: 80%;
  border: none;
  border-radius: 20px;
}
.cart-info {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 5%;
}
.total {
  margin-top: 20px;
  text-align: center;
}
.total button {
  margin-top: 10px;
}

.cart-count {
  display: flex;
  gap: 10px;
  align-items: center;
}

.cart-count > button {
  margin-bottom: 10%;
  border: none;
  background-color: cornflowerblue;
  padding: 10%;
  border-radius: 10px;
  transition: background-color 0.3s ease-out;
}

.cart-img {
  width: 20%;
  border-radius: 20px;
  margin-left: 5%;
  border: 1px solid black;
}

.navigation {
  display: flex;
  margin-top: 2%;
  justify-content: center;
  gap: 10px;
}

.navigation > button {
  margin-bottom: 10%;
  border: none;
  background-color: cornflowerblue;
  padding: 1%;
  border-radius: 10px;
  transition: background-color 0.3s ease-out;
}

.navigation > button:hover {
  background-color: dodgerblue;
}

.navigation > button:active {
  background-color: steelblue;
}

</style>