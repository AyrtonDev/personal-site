<template>
  <section class="knowledge">
    <div class="title">
      <h1>Knowledge</h1>
    </div>

    <div class="border-know1"></div>

    <div class="container-k">
      <div class="group1">
        <h2>Languages</h2>
        <div class="item1">
          <img src="/images/js_logo.png" alt="JavaScript logo" />
        </div>
        <div class="item1">
          <img src="/images/ts_logo.png" alt="TypeScript logo" />
        </div>
        <div class="item1">
          <img src="/images/py_logo.png" alt="Python logo" />
        </div>
      </div>

      <div class="group2">
        <h2>Styles</h2>
        <div class="item2">
          <img src="/images/c-ui_logo.png" alt="Chakra-ui logo" />
        </div>
        <div class="item2">
          <img src="/images/sc_logo.png" alt="Style-Components logo" />
        </div>
        <div class="item2">
          <img src="/images/sass_logo.png" alt="Sass logo" />
        </div>
        <div class="item2">
          <img src="/images/css_logo.png" alt="CSS logo" />
        </div>
      </div>

      <div class="group1">
        <h2>Framwork</h2>
        <div class="item1">
          <img src="/images/react_logo.png" alt="React logo" />
        </div>
        <div class="item1">
          <img src="/images/next_logo.png" alt="Next logo" />
        </div>
        <div class="item1">
          <img src="/images/vue_logo.png" alt="Vue logo" />
        </div>
      </div>

      <div class="group2">
        <h2>Others</h2>
        <div class="item2">
          <img src="/images/node_logo.png" alt="Node logo" />
        </div>
        <div class="item2">
          <img src="/images/mdb_logo.png" alt="MongoDB logo" />
        </div>
        <div class="item2">
          <img src="/images/jest_logo.png" alt="Jest logo" />
        </div>
        <div class="item2">
          <img src="/images/sb_logo.png" alt="Storybook logo" />
        </div>
      </div>
    </div>
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

.container-k {
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 85%;
  justify-content: space-around;
}

.group1 {
  display: flex;
  width: 90%;
  align-items: center;
  border: 5px solid #74c5ff;
  padding: 20px;
  animation: fade 700ms linear, slideinLeft 2s ease-out 700ms;
}

.group1 .item1 {
  width: 70px;
  height: auto;
  margin-left: 5rem;
}

.group1 .item1 > img {
  width: 100%;
}

.group2 {
  display: flex;
  flex-direction: row-reverse;
  width: 90%;
  align-items: center;
  border: 5px solid #ffc36a;
  padding: 20px;
  animation-name: slideinRight;
  animation-duration: 2s;
  animation-delay: 600ms;
  animation: fade 700ms linear, slideinRight 2s ease-out 700ms;
}

.group2 .item2 {
  width: 70px;
  height: auto;
  margin-right: 5rem;
}

.group2 .item2 > img {
  width: 100%;
}

@keyframes slideinLeft {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
}

@keyframes slideinRight {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0%);
  }
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 0;
  }
}
</style>
