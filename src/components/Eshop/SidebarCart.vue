<template>
  <aside class="sidebar-cart">
    <a
      class="sidebar-cart-content"
      @click="showCart()"
    >
      <span
        class="sidebar-cart-text"
      >
        Košík
      </span>
      <span class="sidebar-cart-circle">{{ cartNumberOfProducts }}</span>
    </a>
  </aside>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters('shoppingCart', ['cartNumberOfProducts']),
  },
  methods: {
    ...mapMutations('shoppingCart', [
      'showCart',
    ]),
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: $dark-brown;
  transition: opacity 0.25s;
}

a:hover {
  opacity: 0.8;
}

.sidebar-cart {
  position: fixed;
  width: 9.375rem;
  height: 100vh;
  box-sizing: border-box;
  right: 0;
  top: 0;
  padding-top: 4.375rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.sidebar-cart-content {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.sidebar-cart-text {
  font-size: 0.9375rem;
  font-weight: bold;
}

.sidebar-cart-circle {
  color: #fff;
  background: $dark-brown;
  width: 1.625rem;
  height: 1.625rem;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100rem;
  margin-left: 0.75rem;
}
</style>
