<template>
  <div class="home">
    <h1>Каталог товаров</h1>
    <Product :products="products" @add-to-cart="addToCart" />
  </div>
</template>

<script>
import Product from '@/components/Product.vue';
export default {
  components: { Product },
  computed: {
    products() {
      return this.$store.state.products;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('addToCart', product);
    }
  },
  created() {
    this.$store.dispatch('fetchProducts');
  }
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>