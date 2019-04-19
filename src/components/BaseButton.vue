<template>
  <router-link
    v-cloak
    :to="to"
    class="base-button"
  >
    <slot />
  </router-link>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    to: {
      type: String,
      default: '/',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/sass/variables';
@import '~@/assets/sass/mixins';

$transition-length: 0.25s;
$font-size: 20px; // 1.25em

.base-button {
  box-sizing: border-box;
  font-weight: 900;
  font-size: 1.25em;
  text-decoration: none;
  border-radius: 100rem;
  padding: 0.95em 2.05em;
  //border: 4px solid $dark-brown;
  box-shadow: 0 0 0 em(4px, $font-size) $dark-brown inset;
  color: $dark-brown;
  background: $golden-gradient;
  transition: box-shadow $transition-length $ease-out-cubic;
  outline: 0;
  overflow: hidden;
}

.base-button:hover, .base-button:focus {
  box-shadow: 0 0 0 em(6px, $font-size) $dark-brown inset;
  transition: box-shadow $transition-length $ease-out-cubic;
}
</style>
