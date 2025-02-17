<template>
  <ul v-if="products.length" class="products">
    <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart"
    />
  </ul>
  <p v-else>Товары отсутствуют.</p>
</template>
<script>
import ProductItem from '@/components/ProductData.vue';
export default {
  components: { ProductItem },
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product);
    }
  }
};
</script>

<style>
.products {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>