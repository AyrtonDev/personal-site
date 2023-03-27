<template>
  <div class="container">
    <div class="list-link">
      <div>
        <div
          class="link-item"
          :class="$route.fullPath === '/' && 'anime-1'"
        ></div>
        <RouterLink to="/">Home</RouterLink>
      </div>
      <div>
        <div
          class="link-item"
          :class="$route.fullPath === '/about' && 'anime-2'"
        ></div>
        <RouterLink to="/about">About</RouterLink>
      </div>
      <div>
        <div
          class="link-item"
          :class="$route.fullPath === '/knowledge' && 'anime-1'"
        ></div>
        <RouterLink to="/knowledge">Knowledge</RouterLink>
      </div>
      <div>
        <div
          class="link-item"
          :class="$route.fullPath === '/contact' && 'anime-2'"
        ></div>
        <RouterLink to="/contact">Contact</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.container {
  height: 100%;
  width: 100%;
  display: flex;
}

.list-link {
  list-style: none;
}

.list-link > div:last-child {
  margin-bottom: 0px;
}

.list-link > div {
  display: flex;
  align-items: center;
  font-size: 26px;
  height: 80px;
  margin-bottom: 23px;
  box-sizing: border-box;
}

.link-item {
  background-color: transparent;
  width: 0;
  height: 70px;
  border-right: 5px solid #f9f9f9;
  margin-right: 12px;
  transition: 500ms;
}

.anime-1 {
  width: 50px;
  border-top: 5px solid #74c5ff;
  border-bottom: 5px solid #74c5ff;
  border-right-color: #74c5ff;
}

.anime-2 {
  width: 50px;
  border-top: 5px solid #ffc36a;
  border-bottom: 5px solid #ffc36a;
  border-right-color: #ffc36a;
}
</style>
