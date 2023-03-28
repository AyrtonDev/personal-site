<template>
  <section class="introduce">
    <div class="photo">
      <img src="/images/Ayrton.jpeg" alt="Ayrton photo" />
    </div>

    <div class="border-home1"></div>

    <div class="name">
      <div class="given-name">
        <p>Ayrton</p>
      </div>
      <div class="sub-name">
        <p>Guerra</p>
      </div>
    </div>

    <div class="border-home2"></div>

    <div class="job">
      <p>Front End Developer</p>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style>
.introduce {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: inherit;
  position: relative;
}

.photo {
  width: 400px;
  height: auto;
  position: absolute;
  top: 5%;
  right: 25%;
  z-index: 1;
}

.photo img {
  width: 100%;
  border-radius: 50% 2% 50% 50%;
}

.name {
  display: flex;
  flex-direction: column;
  width: 270px;
  height: auto;

  position: absolute;
  top: 30%;
  bottom: 0;
  left: 5%;
}

.name .given-name p {
  color: #74c5ff;
}

.name .sub-name p {
  color: #ffc36a;
}

.name .sub-name {
  display: flex;
  align-self: flex-end;
}

.name div p {
  font-size: 60px;
  margin: 0;
}

.border-home1 {
  background-color: transparent;
  border: 5px solid #f9f9f9;

  position: absolute;
  width: 1000px;
  height: 200px;

  top: 25%;
  bottom: 0;
  left: 0;
}

.job {
  position: absolute;
  font-size: 36px;

  bottom: 10%;
  left: 5%;
}

.border-home2 {
  background-color: transparent;
  border: 5px solid #f9f9f9;

  position: absolute;
  width: 1000px;
  height: 100px;

  bottom: 11%;
  left: 0;
}

@media (max-width: 1000px) {
  .photo {
    width: 20rem;
    align-self: flex-end;
    top: 30%;
    right: 0;
  }

  .border-home1 {
    top: 2rem;
  }

  .name {
    top: 4.5rem;
  }
  .border-home2 {
    height: 70px;
  }

  .job {
    font-size: 2rem;
  }
}
</style>
