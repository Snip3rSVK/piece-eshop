<template>
  <router-link :to="to" class="base-button">
    <slot></slot>
  </router-link>
</template>

<script>
  export default {
    name: 'BaseButton',
    props: {
      to: String
    }      
  }
</script>

<style lang="scss" scoped>
@import '~@/assets/sass/variables';

$transition-length: 0.25s;

.base-button {
  box-sizing: border-box;
  font-weight: 900;
  font-size: 1.25em;
  text-decoration: none;
  border-radius: 100rem;
  padding: 0.95em 2.05em;
  //border: 4px solid $dark-brown;
  box-shadow: 0 0 0 4px $dark-brown inset;
  color: $dark-brown;
  background: $golden-gradient;
  transition: box-shadow $transition-length $ease-out-cubic;
  outline: 0;
}

.base-button:hover, .base-button:focus {
  box-shadow: 0 0 0 6px $dark-brown inset;
  transition: box-shadow $transition-length $ease-out-cubic;
}
</style>