<template>
  <div class="sidebar-cart">
    <router-link
      to="/eshop/cart"
      class="sidebar-cart-content"
    >
      <span class="sidebar-cart-text">Košík</span>
      <span class="sidebar-cart-circle">{{ cartNumberOfProducts }}</span>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('shoppingCart', ['cartNumberOfProducts']),
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
