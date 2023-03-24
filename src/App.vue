<template>
  <el-container>
    <el-aside width="20%">Latereal</el-aside>
    <el-main><AboutVue /></el-main>
  </el-container>
</template>

<script setup lang="ts">
import PrincipalVue from "./components/PrincipalVue.vue";
import AboutVue from "./components/AboutVue.vue";

const route = {
  "/": PrincipalVue,
  "/about": AboutVue,
};
</script>

<style>
.el-container {
  height: 100%;
}

.el-main {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
