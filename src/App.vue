<template>
  <div id="app">
    <nav class="navbar">
      <h1 @click="goToHome">Просто купить</h1>
      <div class="auth-actions">
        <button v-if="!user" @click="goToLogin">Войти</button>
        <button v-if="!user" @click="goToRegister">Регистрация</button>
        <button @click="goToCart" class="cart-button">Корзина</button>
        <button v-if="!user" @click="goToOrders" class="orders-button">Мои заказы</button>

        <span v-if="user">Добро пожаловать, {{ user.email }}!</span>
        <button v-if="user" @click="logout">Выход</button>
      </div>
    </nav>
  </div>
  <router-view/>
</template>

<style>
.navbar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 20px;
  background-color: #00bfff;
  color: white;
}

.navbar h1 {
  color: black;
  font-size: 25pt;
}

.auth-actions {
  display: flex;
  gap: 10px;
}

.auth-actions > button {
  border: none;
  background-color: cornflowerblue;
  padding: 4%;
  margin-bottom: 2%;
  border-radius: 10px;
  transition: background-color 0.3s ease-out;
}

.auth-actions > button:hover {
  background-color: dodgerblue;
}

.auth-actions > button:active {
  background-color: steelblue;
}

</style>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/');
    },
    goToLogin() {
      this.$router.push('/login');
    },
    goToRegister() {
      this.$router.push('/register');
    },
    goToCart() {
      this.$router.push('/cart');
    },
    goToOrders() {
      this.$router.push('/orders');
    },
    goToHome() {
      this.$router.push('/home');
    }
  }
};
</script>
