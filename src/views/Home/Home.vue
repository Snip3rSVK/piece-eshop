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
import BaseButton from '@/components/General/BaseButton.vue';
import Parallax from 'parallax-js';

export default {
  name: 'Home',
  components: {
    'base-button': BaseButton,
  },
  mounted() {
    const scene = this.$refs.homeChocolatePiecesLandscape;
    // eslint-disable-next-line no-unused-vars
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true,
    });
  },
};
</script>

<style scoped lang="scss">
@import 'Home.scss';
</style>
