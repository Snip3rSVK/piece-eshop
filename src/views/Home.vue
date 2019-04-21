<template>
  <div
    ref="homeChocolatePiecesLandscape"
    class="home-scene-landscape"
  >
    <div class="home">
      <div class="home-landscape" />
      <div class="home-portrait" />
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
        <div class="home-logo-wrapper">
          <transition
            appear=""
            appear-class="home-logo-from"
            appear-active-class="home-logo-active"
            appear-to-class="home-logo-to"
          >
            <img
              class="home-logo"
              src="@/assets/img/logo.svg"
              alt="Logo Čokoládovňa Piece"
            >
          </transition>
        </div>
      </main>
    </div>
    <div
      data-depth="0.05"
      class="home-chocolate-pieces-landscape-wrapper"
    >
      <div class="home-chocolate-pieces-landscape" />
    </div>
    <div
      data-depth="0.05"
      class="home-chocolate-pieces-portrait-wrapper"
    >
      <div class="home-chocolate-pieces-portrait" />
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
import Parallax from 'parallax-js';

export default {
  name: 'Home',
  components: {
    'base-button': BaseButton,
  },
  mounted() {
    const scene = this.$refs.homeChocolatePiecesLandscape;
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true,
    });
  },
};
</script>

<style scoped lang="scss">
@import '~@/assets/sass/variables';
@import '~@/assets/sass/mixins';

.home-scene-landscape {
  height: 100%;
  overflow: hidden;
}

.home {
  height: 100vh;
  overflow: hidden;
  user-select: none;
}

.home-landscape {
  position: absolute;
  width: 56%;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 10;
  background-image: url('~@/assets/img/melting-chocolate.svg');
  background-repeat: no-repeat;
  background-position: top -5vh left;
  background-size: cover;
}

.home-chocolate-pieces-landscape-wrapper {
  width: 50%;
  height: 102vh;
  margin-left: -2%;
  margin-top: -1vh;
}

.home-chocolate-pieces-landscape {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-image: url('~@/assets/img/chocolate-pieces.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right center;
  z-index: 9;
  //animation: wave 4.88889s 0.1s infinite linear;
}

.home-portrait {
  width: 100%;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  z-index: 10;
}

.home-chocolate-pieces-portrait-wrapper {
  position: absolute;
  width: 104vw;
  height: 60vh;
  top: initial !important;
  left: -2% !important;
  right: -2% !important;
  bottom: -2% !important;
  display: none !important;
}

.home-chocolate-pieces-portrait {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  background-image: url('~@/assets/img/chocolate-pieces-portrait.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 9;
  //animation: wave 4.88889s 0.1s infinite linear;
}

.home-logo-wrapper {
  margin-top: calc(0.5rem + 5vh);
  align-self: flex-start;
  margin-right: em(-6px, 16px);
  overflow: hidden;
  z-index: 11;
}

.home-logo {
  height: 5em;
}

.home-logo-from {
  transform: translateX(100%);
}

.home-logo-active {
  transition: transform 400ms $ease-out-quint;
  transition-delay: 400ms;
}

.home-logo-to {
  transform: translateX(0);
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
  font-size: calc(6px + 10 / 1920 * 100vw);
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
  z-index: 11;
  pointer-events: all;
}

.home-base-button-from {
  opacity: 0;
}

.home-base-button-active {
  transition: opacity 800ms $ease-out-quint;
  transition-delay: 500ms;
}

.home-base-button-to {
  opacity: 1;
}

@media (max-aspect-ratio: 12/8) {
  .home-landscape {
    background-image: none;
  }

  .home-portrait {
    background-image: url('~@/assets/img/melting-chocolate-horizontal-2x-length.svg');
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    display: block;
  }

  .home-chocolate-pieces-landscape-wrapper {
    display: none !important;
  }

  .home-chocolate-pieces-portrait-wrapper {
    display: block !important;
  }

  .home-logo-wrapper {
    order: 1;
    align-self: center;
    margin-right: 0;
    margin-top: 4vh;
  }

  .home-logo-from {
    transform: translateY(-100%);
  }

  .home-logo-to {
    transform: translateY(0);
  }

  .home-content-wrapper {
    flex-direction: column;
  }

  .home-content {
    order: 2;
    grid-template-columns: auto;
    grid-template-rows: auto 2.25em auto;
    margin: 0;
    margin-bottom: 12vh;
    //padding-top: 20vh;
    font-size: calc(8px + 10 / 1920 * 100vmin);
  }

  .home-title-wrapper {
    grid-column: 1;
    grid-row: 1;
  }

  .home-title {
    //font-size: 8.75em;
    padding-left: em(4px, 150px);
    padding-bottom: em(32px, 150px);
  }

  .home-title-from {
    transform: translateY(100%);
  }

  .home-title-to {
    transform: translateX(0%);
  }

  .home-subtitle-wrapper {
    grid-column: 1;
    grid-row: 2;
  }

  .home-subtitle {
    transform: none;
  }

  .home-subtitle-from {
    transform: translateY(-2.25em);
  }

  .home-subtitle-active {
    transition: transform 350ms;
    transition-delay: 650ms;
  }

  .home-subtitle-to {
    transform: translateY(0);
  }

  .home-subtitle-line {
    top: 0;
    left: 0;
    right: auto;
    width: 100%;
    height: 0.25em;
  }

  .home-subtitle-line-from {
    width: 0;
  }

  .home-subtitle-line-active {
    transition: 850ms width $ease-in-out-quint;
  }

  .home-subtitle-line-to {
    width: 100%;
  }

  .base-button {
    margin-left: 0;
    grid-column: 1;
    grid-row: 3;
    justify-self: center;
  }
}

@media (max-aspect-ratio: 10/8) {

}

@media (max-width: 15rem) {
  .home-title {
    font-size: 6em;
    padding-bottom: em(32px, 96px);
  }
}

@media (max-height: 23.75rem) {
  .home-logo {
    height: 4em;
  }
}

@media (max-height: 20.625rem) {
  .home-logo {
    height: 3em;
  }
}

@media (max-aspect-ratio: 12/8) and (max-height: 32.5rem) {
  .home-logo {
    height: 4em;
  }
}

@media (max-aspect-ratio: 12/8) and (max-height: 28.75rem) {
  .home-logo {
    height: 3em;
  }
}

@keyframes wave {
  from {
    transform: rotateZ(0deg) translate3d(0, 0.5%, 0) rotateZ(0deg);
  }

  to {
    transform: rotateZ(360deg) translate3d(0, 0.5%, 0) rotateZ(-360deg);
  }
}
</style>
