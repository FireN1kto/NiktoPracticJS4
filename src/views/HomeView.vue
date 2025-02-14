<template>
  <div class="home">
    <h1>Каталог товаров</h1>
    <p v-if="error" class="error">{{ error }}</p>
    <ul v-if="products.length">
      <li v-for="product in products" :key="product.id">
        <img :src="product.image" :alt="product.name" width="50" height="50" />
        {{ product.name }} - ${{ product.price }}
        <button @click="addToCart(product)">Добавить в корзину</button>
      </li>
    </ul>
    <p v-else-if="!loading">Товары отсутствуют.</p>
    <div v-if="loading" class="loading">Загрузка...</div>
    <button @click="goToCart">Перейти в корзину</button>
  </div>
</template>

<script>

export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    error(){
      return this.$store.getters.error;
    },
    loading(){
      return this.$store.getters.loading;
    }
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('addToCart', product);
    },
    goToCart() {
      this.$router.push('/cart');
    }
  },
  created() {
    this.$store.commit('SET_ERROR', null);
    this.$store.dispatch('fetchProducts');
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