<template>
  <div id="app">
    <nav class="navbar">
      <h1>Просто купить</h1>
      <div v-if="user" class="auth-actions">
        <span>Добро пожаловать, {{ user.username }}!</span>
        <button @click="basket">Корзина</button>
        <button @click="logout">Выход</button>
      </div>
      <div v-else class="auth-actions">
        <button @click="goToLogin">Войти</button>
        <button @click="goToRegister">Регистрация</button>
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
  padding: 8%;
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
    }
  }
};
</script>
