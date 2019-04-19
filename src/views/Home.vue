<template>
  <div class="home">
    <main class="home-content-wrapper">
      <div class="home-content">
        <div class="home-title-wrapper">
          <transition
            appear=""
            appear-class="home-title-from"
            appear-active-class="home-title-active"
            appear-to-class="home-title-to"
          >
            <h1 class="home-title">
              Piece
            </h1>
          </transition>
        </div>
        <div class="home-subtitle-wrapper">
          <transition
            appear=""
            appear-class="home-subtitle-from"
            appear-active-class="home-subtitle-active"
            appear-to-class="home-subtitle-to"
          >
            <h2 class="home-subtitle">
              Čokoládovňa
            </h2>
          </transition>
          <transition
            appear=""
            appear-class="home-subtitle-line-from"
            appear-active-class="home-subtitle-line-active"
            appear-to-class="home-subtitle-line-to"
          >
            <div class="home-subtitle-line" />
          </transition>
        </div>
        <transition
          appear
          appear-class="home-base-button-from"
          appear-active-class="home-base-button-active"
          appear-to-class="home-base-button-to"
        >
          <base-button to="/eshop">
            Obchod
          </base-button>
        </transition>
      </div>
      <img
        class="home-logo"
        src="@/assets/img/logo.svg"
        alt="Logo Čokoládovňa Piece"
      >
    </main>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'Home',
  components: {
    'base-button': BaseButton,
  },
};
</script>

<style scoped lang="scss">
@import '~@/assets/sass/variables';
@import '~@/assets/sass/mixins';

.home {
  background-image: url('~@/assets/img/melting-chocolate.svg');
  background-repeat: no-repeat;
  background-position: top right;
  background-size: auto 95%;
  height: 100vh;
  overflow: hidden;
  user-select: none;
}

.home-logo {
  height: 5em;
  margin-top: 2rem;
  align-self: flex-start;
}

.home-content-wrapper {
  position: relative;
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.home-content {
  display: grid;
  grid-template-columns: 2em auto;
  grid-template-rows: auto auto;
  grid-gap: 0em;
  align-items: center;
  justify-items: center;
  margin-left: em(-73px, 16px);
}

.home-title-wrapper {
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  grid-column: 2;
  grid-row: 1;
}

.home-title {
  font-size: 9.375em;
  font-family: 'Pacifico', cursive;
  font-weight: normal;
  margin: 0;
  margin-left: em(-8px, 150px);
  padding-bottom: em(12px, 150px);
  padding-right: em(6px, 150px);
  padding-left: em(45px, 150px);
}

.home-title-from {
  transform: translateX(-100%);
}

.home-title-active {
  transition: transform 800ms $ease-out-quint;
  transition-delay: 500ms;
}

.home-title-to {
  transform: translateX(0%);
}

.home-subtitle-wrapper {
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.home-subtitle-line {
  position: absolute;
  height: 100%;
  width: 0.25em;
  background: $dark-brown;
  right: 0;
  top: 0;
}

.home-subtitle-line-from {
  height: 0%;
}

.home-subtitle-line-active {
  transition-delay: 800ms;
  transition: 850ms height $ease-in-out-quint;
}

.home-subtitle-line-to {
  height: 100%;
}

.home-subtitle {
  font-size: 0.875em;
  transform: rotate(-90deg);
  transform-origin: center;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: em(5px, 14px);
  margin: 0;
}

.home-subtitle-from {
  transform: rotate(-90deg) translateY(2em);
}

.home-subtitle-active {
  transition: transform 350ms;
  transition-delay: 650ms;
}

.home-subtitle-to {
  transform: rotate(-90deg) translateY(0%);
}

.base-button {
  grid-column: 2;
  grid-row: 2;
  justify-self: start;
  margin-left: em(45px, 20px);
  margin-top: em(31px, 20px);
}

.home-base-button-from {
  opacity: 0;
}

.home-base-button-active {
  transition: opacity 1s;
}

.home-base-button-to {
  opacity: 1;
}

/* .home-button-enter {
  opacity: 0;
}

.home-button-enter-active {
  transition: opacity 0.5s;
}

.home-button-enter-to {
  opacity: 1;
} */
/*
.home-button-enter-active, .home-button-leave-active {
  transition: opacity 5s;
}

.home-button-enter,  .home-button-leave-to {
  opacity: 0;
} */
</style>
