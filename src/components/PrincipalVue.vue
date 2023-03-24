<template>
  <el-container>
    <div class="photo">
      <img
        src="https://media.licdn.com/dms/image/C4D03AQFPFPIuaeq4RA/profile-displayphoto-shrink_400_400/0/1636979826156?e=1684972800&v=beta&t=m28uXWNIvre5p_3E1YHztqMQVeDBZg8kZO62Jip9B2E"
      />
    </div>

    <div class="border-1"></div>

    <div class="name">
      <div class="given-name">
        <p>Ayrton</p>
      </div>
      <div class="sub-name">
        <p>Guerra</p>
      </div>
    </div>

    <div class="border-2"></div>

    <div class="job">
      <p>Front End Developer</p>
    </div>
  </el-container>
</template>

<script setup lang="ts"></script>

<style>
.el-container {
  width: inherit;
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

.border-1 {
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

.border-2 {
  background-color: transparent;
  border: 5px solid #f9f9f9;

  position: absolute;
  width: 1000px;
  height: 100px;

  bottom: 11%;
  left: 0;
}
</style>
