<template>
  <div class="home">
    <p v-if="error" class="error">{{ error }}</p>
    <h1>Каталог товаров</h1>
    <ul v-if="products.length">
      <li v-for="product in products" :key="product.id">
        <li v-for="product in products" :key="product.id" class="product-item">
          <img
              :src="product.image"
              :alt="product.name"
              width="100"
              height="100"
          />
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <p><strong>Цена:</strong> ${{ product.price.toFixed(2) }}</p>
            <button @click="addToCart(product)">Добавить в корзину</button>
          </div>
        </li>
      </li>
    </ul>
    <p v-else-if="!loading">Товары отсутствуют.</p>
    <div v-if="loading" class="loading">Загрузка...</div>
    <div class="goToCart">
      <button @click="goToCart" class="goToCart">Корзина</button>
      <button @click="goToOrders">Мои заказы</button>
    </div>
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
    },
    goToOrders() {
      this.$router.push('/orders');
    }
  },
  created() {
    this.$store.commit('SET_ERROR', null);
    this.$store.dispatch('fetchProducts');
  }
};
</script>

<style>
  .home > h1 {
    display: flex;
    justify-content: center;
  }

  .home > ul > li {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .home >ul > li > li {
    margin-left: 5%;
    margin-right: 3%;
  }

  .product-item {
    display: flex;
    align-items: center;
    border: 1px solid black;
    margin-bottom: 5%;
    background-color: rgba(0, 191, 255, 0.4);
    width: 40%;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .product-item > img {
    margin: 2%;
    border-radius: 10px;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: 5%;
  }

  .product-info > button {
    border: none;
    background-color: cornflowerblue;
    padding: 2%;
    margin-bottom: 2%;
    border-radius: 10px;
    transition: background-color 0.3s ease-out;
  }

  .product-info > button:hover {
    background-color: dodgerblue;
  }

  .product-info > button:active {
    background-color: steelblue;
  }

  .goToCart {
    display: flex;
    gap: 1%;
  }

  .goToCart > button {
    border: none;
    background-color: cornflowerblue;
    padding: 1%;
    margin-bottom: 2%;
    margin-top: 2%;
    margin-left: 20%;
    border-radius: 10px;
    transition: background-color 0.3s ease-out;
    width: 70px;
    height: 40px;
  }

  .goToCart > button:hover {
    background-color: dodgerblue;
  }

  .goToCart > button :active {
    background-color: dodgerblue;
  }

  .error {
    color: red;
    font-weight: bold;
  }
  .loading {
    font-style: italic;
    color: gray;
  }
</style>