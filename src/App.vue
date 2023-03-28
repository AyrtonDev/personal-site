<template>
  <main class="main">
    <aside class="aside"><Aside /></aside>
    <div class="main_container">
      <RouterView v-slot="{ Component }">
        <Transition name="slide" mode="out-in">
          <component :is="Component" :key="$route.path"></component>
        </Transition>
      </RouterView>
    </div>
  </main>
</template>

<script setup lang="ts">
import Aside from "./components/Aside.vue";
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

.slide-enter-active,
.slide-leave-active {
  transition: opacity 600ms, transform 600ms;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
