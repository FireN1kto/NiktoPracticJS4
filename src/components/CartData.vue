<template>
    <div class="cart-item">
      <img :src="item.image" :alt="item.name" width="80" height="80" class="item-image" />
      <div class="item-info">
        <h3>{{ item.name }}</h3>
        <p><strong>Цена:</strong> ${{ item.price.toFixed(2) }}</p>
        <p><strong>Количество:</strong></p>
        <div class="quantity-controls">
          <button @click="decreaseQuantity" class="quantity-button">-</button>
          <span class="quantity">{{ item.quantity }}</span>
          <button @click="increaseQuantity" class="quantity-button">+</button>
        </div>
      </div>
      <button @click="removeFromCart" class="remove-button">Удалить</button>
    </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    increaseQuantity() {
      this.$emit('update-quantity', { id: this.item.id, quantity: this.item.quantity + 1 });
    },
    decreaseQuantity() {
      if (this.item.quantity > 1) {
        this.$emit('update-quantity', { id: this.item.id, quantity: this.item.quantity - 1 });
      } else {
        this.removeFromCart();
      }
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.item.id);
    }
  }
};
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.5s ease;
}
.cart-item:hover {
  box-shadow: 0 4px 10px black;
}
.item-image {
  border-radius: 5px;
  margin-right: 15px;
}
.item-info {
  flex-grow: 1;
}
.quantity-controls {
  display: flex;
  margin-left: 42%;
  margin-top: 10px;
}
.quantity-button {
  background-color: cornflowerblue;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
.quantity-button:hover {
  box-shadow: 0 0px 10px black;
}

.quantity-button:active {
  background-color: #35495e;
}

.quantity {
  margin: 0 10px;
  font-weight: bold;
}
.remove-button {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
.remove-button:hover {
  background-color: darkred;
}
</style>