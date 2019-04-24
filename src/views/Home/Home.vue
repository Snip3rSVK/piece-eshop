<template>
  <div
    class="home"
    @mousemove="parallaxMove"
    @touchmove="parallaxMove"
  >
    <!-- eslint-disable-next-line vue/no-unused-vars -->
    <template v-for="i in 1">
      <!-- eslint-disable-next-line vue/require-v-for-key -->
      <div
        ref="chocolatePieces"
        class="home-chocolate-pieces-landscape"
      />
      <!-- eslint-disable-next-line vue/require-v-for-key -->
      <div
        ref="chocolatePieces"
        class="home-chocolate-pieces-portrait"
      />
    </template>
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
</template>

<script>
import BaseButton from '@/components/General/BaseButton.vue';

export default {
  name: 'Home',
  components: {
    'base-button': BaseButton,
  },
  data() {
    return {
      centerWidth: null,
      centerHeight: null,
      needForRAF: true,
    };
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    parallaxMove({ clientX, clientY }) {
      if (this.needForRAF) {
        this.needForRAF = false;
        window.requestAnimationFrame(() => {
          this.translateIt(clientX, clientY);
        });
      }
    },
    translateIt(clientX, clientY) {
      this.needForRAF = true;
      this.$refs.chocolatePieces.forEach((elem) => {
        if (this.centerWidth && this.centerHeight) {
          const translateX = Math.round((this.centerWidth - clientX) / 200);
          const translateY = Math.round((this.centerHeight - clientY) / 200);
          // eslint-disable-next-line no-param-reassign
          elem.style.transform = `translate(${translateX}px, ${translateY}px)`;
        }
      });
    },
    onResize() {
      this.centerWidth = Math.round(window.innerWidth / 2);
      this.centerHeight = Math.round(window.innerHeight / 2);
    },
  },
};
</script>

<style scoped lang="scss">
@import 'Home.scss';
</style>
