<template>
  <section class="contact">
    <div class="title">
      <h1>Contact</h1>
    </div>

    <div class="border-contact1"></div>

    <div class="links">
      <div class="link github">
        <div class="logo">
          <img src="/images/gh_logo.png" alt="github logo" />
        </div>

        <p>
          If you want to see my projects and code base, click
          <a
            class="text-special"
            href="https://github.com/AyrtonDev"
            target="_blank"
            >here</a
          >
          to go my GitHub.
        </p>
      </div>

      <div class="link email">
        <div class="logo">
          <img src="/images/gmail_logo.png" alt="gmail logo" />
        </div>

        <p>
          Here is my E-mail:
          <a href="mailto:ayrtong.guerra@gmail.com" class="text-special"
            >ayrtong.guerra@<wbr />gmail.com</a
          >
        </p>
      </div>

      <div class="link linkedin">
        <div class="logo">
          <img src="/images/link_logo.png" alt="linkedin logo" />
        </div>

        <p>
          And if you click
          <a
            href="https://www.linkedin.com/in/ayrton-guerra-862202177/"
            target="_blank"
            class="text-special"
            >here</a
          >, will be redirect to my Linkedin
        </p>
      </div>
    </div>
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
  padding-left: 4rem;
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

.links {
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.link {
  display: flex;
  align-items: center;
}

.link .logo {
  width: 100px;
  margin-right: 20px;
}

.github .logo {
  animation: fade 700ms linear, scaleWide 2s ease-out 700ms;
}

.email .logo {
  animation: fade 1000ms linear, scaleWide 2s ease-out 1000ms;
}

.linkedin .logo {
  animation: fade 1400ms linear, scaleWide 2s ease-out 1400ms;
}

.logo img {
  width: 90%;
}

.github img {
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  background-color: #f9f9f9;
  border-radius: 50%;
}

.linkedin .logo img {
  background-color: #f9f9f9;
  border-radius: 10px;
}

.link p {
  font-size: 1.2rem;
}

.text-special {
  animation: color-change 3s ease-in-out infinite;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 0;
  }
}

@keyframes scaleWide {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

@keyframes color-change {
  0% {
    color: #74c5ff;
  }
  25% {
    color: white;
  }
  50% {
    color: #ffc36a;
  }
  75% {
    color: white;
  }
  100% {
    color: #74c5ff;
  }
}

@media (max-width: 1000px) {
  .contact {
    padding-left: 0;
  }

  .border-contact1 {
    left: 15%;
  }

  .links {
    width: 100%;
    justify-content: flex-start;
  }

  .link {
    margin-bottom: 5rem;
  }

  .link .logo {
    width: 200px;
  }

  .github .logo {
    width: 250px;
  }
}

@media (max-width: 1000px) and (max-height: 800px) {
  .border-contact1 {
    top: -12%;
  }

  .link .logo {
    width: 220px;
  }

  .github .logo {
    width: 270px;
  }
}
</style>
