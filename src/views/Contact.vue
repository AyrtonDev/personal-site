<template>
  <section class="contact">
    <div class="title">
      <h1>Contact</h1>
    </div>

    <div class="border-contact1"></div>
  </section>
</template>

<script setup lang="ts"></script>

<style>
.contact {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.border-contact1 {
  border: 5px solid #74c5ff;
  background-color: transparent;
  position: absolute;
  width: 1000px;
  height: 150px;
  left: 25%;
  top: -10%;
}
</style>
