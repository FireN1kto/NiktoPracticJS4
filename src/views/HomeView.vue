<template>
  <div class="home">
    <div class="menu">
      <button v-if="user" @click="logout">Выход</button>
      <button v-else @click="goToLogin">Войти</button>
      <button v-if="!user" @click="goToRegister">Регистрация</button>
      <button v-if="user" @click="goToOrders">Мои заказы</button>
    </div>
    <h1>Каталог товаров</h1>
    <p v-if="error" class="error">{{ error }}</p>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - ${{ product.price }}
        <button v-if="user" @click="addToCart(product)">Добавить в корзину</button>
      </li>
    </ul>
    <p v-if="!products.length && !loading">Товары отсутствуют.</p>
    <div v-if="loading" class="loading">Загрузка...</div>
    <button @click="goToCart">Перейти в корзину</button>
  </div>
</template>

<script>

export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
    products() {
      return this.$store.state.products;
    },
    data() {
      return {
        loading: true, // Флаг загрузки
        error: null    // Сообщение об ошибке
      };
    },
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('addToCart', product);
    },
    goToLogin() {
      this.$router.push('/login');
    },
    goToRegister() {
      this.$router.push('/register');
    },
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/');
    },
    goToCart() {
      this.$router.push('/cart');
    },
    goToOrders() {
      this.$router.push('/orders');
    }
  },
  created() {
    // Загрузка товаров из API
    this.$store
        .dispatch('fetchProducts')
        .then(() => {
          this.loading = false; // Завершаем загрузку
        })
        .catch((err) => {
          this.loading = false; // Завершаем загрузку
          this.error = 'Не удалось загрузить товары. Попробуйте позже.';
          console.error('Ошибка загрузки товаров:', err);
        });
  }
};
</script>

<style>
  .error {
    color: red;
    font-weight: bold;
  }
  .loading {
    font-style: italic;
    color: gray;
  }
</style>