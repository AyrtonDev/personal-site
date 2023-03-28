<template>
  <section class="about">
    <div class="title">
      <h1>About me</h1>
    </div>

    <div class="border-about1"></div>

    <div class="text">
      <p>
        <span class="primary">I</span>'ve been studying programming since 2017,
        in 2018 <span class="secondary">I</span> decided to build my skills in
        the <span class="primary">J</span>ava<span class="secondary">S</span
        >cript language learn alone, with videos, documents, reading codes and
        trying again.
      </p>
      <p>
        <span class="primary">B</span>ut in
        <span class="secondary">J</span>anuary 1 2021,
        <span class="primary">I</span> started my journey in the state of
        <span class="secondary">P</span>arana
        <span class="primary">B</span>razil, search something better, in
        <span class="secondary">J</span>anuary 21
        <span class="primary">I</span> started to work like web programmer at
        the <span class="secondary">A</span>lper
        <span class="primary">A</span>gency, 6 months later
        <span class="secondary">I</span> changed job and jumped to system
        analyst, 3 months later, before a piece of time of hard work,
        <span class="primary">I</span> was promoted to
        <span class="secondary">F</span>ront <span class="primary">E</span>nd
        <span class="secondary">D</span>eveloper.
      </p>
      <p>
        <span class="primary">I</span> felt so happy, but
        <span class="secondary">I</span> do not satisfied yet and searching new
        challengers, 4 months passed, <span class="primary">I</span> get in the
        <span class="secondary">C</span>liqx
        <span class="primary">C</span>ompany as
        <span class="secondary">F</span>ront <span class="primary">E</span>nd
        <span class="secondary">J</span>r. and continue work there had many
        different tasks and projects, make me a better professional, going to
        <span class="primary">F</span>ull <span class="secondary">S</span>tack
        <span class="primary">D</span>eveloper.
      </p>
    </div>

    <div class="border-about2"></div>
  </section>
</template>

<script setup lang="ts"></script>

<style>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.about div p {
  text-align: justify;
  font-size: 24px;
}

.text {
  width: 80%;
  margin-bottom: 24px;
  animation: fade 700ms linear, uptext 2s ease-out 700ms;
}

.primary {
  color: #74c5ff;
}

.secondary {
  color: #ffc36a;
}

.border-about1 {
  border: 5px solid #74c5ff;
  background-color: transparent;
  position: absolute;
  width: 1000px;
  height: 150px;
  left: 25%;
  top: -10%;
}

.border-about2 {
  border: 5px solid #ffc36a;
  background-color: transparent;
  position: absolute;
  width: 900px;
  height: 500px;
  left: 6%;
  bottom: -5%;
  animation: fade 700ms linear, uptext 2s ease-out 700ms;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 0;
  }
}

@keyframes uptext {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
}

@media (max-width: 1000px) {
  .text {
    width: 90%;
    height: 80%;
  }

  .about div p {
    text-align: justify;
    font-size: 1.2rem;
  }

  .border-about1 {
    left: 15%;
  }

  .border-about2 {
    left: 0;
    bottom: -20%;
    height: 800px;
  }
}
</style>
