<template>
  <div class="home">
    <main class="home-content-wrapper">
      <div class="home-content">
        <div class="home-text-wrapper">
          <h2 class="home-subtitle">
            Čokoládovňa
          </h2>
          <h1 class="home-title">
            Piece
          </h1>
        </div>
        <base-button to="/eshop">
          Obchod
        </base-button>
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

.home {
  background-image: url('~@/assets/img/melting-chocolate.svg');
  background-repeat: no-repeat;
  background-position: top right;
  background-size: auto 95%;
  height: 100vh;
  overflow: hidden;
  user-select: none;
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

.home-text-wrapper {
  display: flex;
  align-items: center;
}

.home-title {
  font-size: 9.375em;
  font-family: 'Pacifico', cursive;
  font-weight: normal;
  margin: 0;
}

.home-subtitle {
  position: absolute;
  font-size: 0.875em;
  transform: translateX(-50%) rotate(-90deg);
  transform-origin: center;
  text-transform: uppercase;
  border-bottom: 4px solid $dark-brown;
  font-weight: 900;
  letter-spacing: 5px;
  padding: 0 0.71em 5px;
  margin: 0;
  //margin: 0 0 0 2rem;
  display: inline-block;
}

.home-logo {
  height: 4rem;
  margin-top: 2rem;
  align-self: flex-start;
}
</style>
