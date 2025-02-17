<template>
  <li class="product-item">
    <img :src="product.image" :alt="product.name" width="100" height="100" />
    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p><strong>Цена:</strong> ${{ product.price.toFixed(2) }}</p>
      <button @click="addToCart" class="addToCart">Добавить в корзину</button>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product);
    }
  }
};
</script>
<style>
.product-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  width: 30%;
  transition: box-shadow 0.2s;
}
.product-item img {
  margin-right: 15px;
  border-radius: 5px;
}
.product-info {
  flex-grow: 1;
}

.product-item:hover {
  box-shadow: 0 0 20px black;
}

.addToCart {
  border: none;
  background-color: cornflowerblue;
  padding: 2%;
  border-radius: 5px;
  transition: box-shadow 0.5s;
  transition: background-color 0.2s;
}

.addToCart:hover {
  box-shadow: 0 0 5px black;
}

.addToCart:active {
  background-color: steelblue;
}

</style>