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
  // eslint-disable-next-line vue/require-prop-types
  props: ['to'],
};
</script>

<style lang="scss" scoped>
$transition-length: 0.25s;
$font-size: 20px; // 1.25em
$button-move-length: 3px;

.base-button {
  box-sizing: border-box;
  font-weight: 900;
  font-size: 1.25em;
  text-decoration: none;
  border-radius: 100rem;
  padding: 0.9em 2.05em 0.85em 2.05em;
  //border: 4px solid $dark-brown;
  box-shadow: 0 0 0 em(4px, $font-size) $dark-brown inset;
  color: $dark-brown;
  background: $golden-gradient;
  transition: all $transition-length $ease-out-cubic;
  outline: 0;
  //overflow: hidden;
  position: relative;
  display: inline-block;
}

.base-button:hover,
.base-button:focus {
  //box-shadow: 0 0 0 em(6px, $font-size) $dark-brown inset;
  transition: all $transition-length $ease-out-cubic;
  box-shadow: 0 0 0 em(4px, $font-size) $dark-brown inset, 0px 7px 25px 0px rgba(0, 0, 0, 0.1);
  transform: translateY(-$button-move-length);
}

.base-button:hover::after,
.base-button:focus::after {
  content: '';
  width: 100%;
  height: 100%;
  border-radius: 100rem;
  position: absolute;
  background: transparent;
  left: 0;
  bottom: -$button-move-length + 1;
}
</style>
