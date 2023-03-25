<template>
  <main class="main">
    <aside class="aside"><AsideVue /></aside>
    <div class="main_container"><AboutVue /></div>
  </main>
</template>

<script setup lang="ts">
import AboutVue from "./components/AboutVue.vue";
import AsideVue from "./components/AsideVue.vue";
</script>

<style>
.main {
  max-width: 1300px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.aside {
  width: 20%;
}

.main_container {
  display: flex;
  width: 80%;
  height: inherit;
}
</style>
