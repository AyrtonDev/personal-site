<template>
  <section class="knowledge">
    <div class="title">
      <h1>Knowledge</h1>
    </div>

    <div class="border-know1"></div>
  </section>
</template>

<script setup lang="ts"></script>

<style>
.knowledge {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.border-know1 {
  border: 5px solid #ffc36a;
  background-color: transparent;
  position: absolute;
  width: 1000px;
  height: 150px;
  left: 25%;
  top: -10%;
}
</style>
