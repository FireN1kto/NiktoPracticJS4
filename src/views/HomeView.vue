<script>
export default {
  methods:{
    goToCatalog() {
      this.$router.push('/');
    }
  }
}

</script>

<template>
  <div class="home-view">
    <h1>Добро пожаловать!</h1>

    <div class="main-home">
      <h2>Мы всегда рады своим покупателям!</h2>
      <img src="../assets/main-image.png" alt="Welcome Home" @click="goToCatalog">
    </div>
  </div>
</template>

<style>
.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
}

.main-home > img {
  width: 60%;
  cursor: pointer;
}
</style>