<template>
  <div
    :class="isOpened ? 'opened' : ''"
    class="shopping-cart"
  >
    <h2 class="shopping-cart-title">
      Košík
    </h2>
    <button
      class="shopping-cart-close-button"
      @click="hideCart()"
    >
      Close
    </button>
    <p v-show="!products.length">
      <i>Pridajte pordukty do košíka</i>
    </p>
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
      >
        <!-- {{ product.title }} - {{ product.price | currency }} x {{ product.quantity }} -->
        {{ product.title }} - {{ product.price }} x {{ product.quantity }}
      </li>
    </ul>
    <!-- <p>Total: {{ total | currency }}</p> -->
    <p>Spolu: {{ total }}</p>
    <p>
      <button
        :disabled="!products.length"
        @click="checkout(products)"
      >
        Objednať
      </button>
    </p>
    <p v-show="checkoutStatus">
      Objednávka úspešná: {{ checkoutStatus }}.
    </p>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      checkoutStatus: state => state.shoppingCart.checkoutStatus,
    }),
    ...mapGetters('shoppingCart', {
      products: 'cartProducts',
      total: 'cartTotalPrice',
      isOpened: 'isOpened',
    }),
  },
  methods: {
    checkout(products) {
      this.$store.dispatch('shoppingCart/checkout', products);
    },
    ...mapMutations('shoppingCart', [
      'hideCart',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.shopping-cart {
  position: fixed;
  top: 0;
  right: 0;
  background-image: radial-gradient(circle, #260d0d, #220b0b, #1e0909, #190707, #140505);
  height: 100vh;
  z-index: 20;
  color: #fff;
  width: 650px;
  padding: 50px;
  box-sizing: border-box;
  max-width: 100%;
  transition: transform 0.5s $ease-in-out-circ;
  transform: translateX(100.1%);
}

.shopping-cart.opened {
  transform: translateX(0);
}

.shopping-cart-close-button {
/*   width: 30px;
  height: 30px;
  background: url('~@/assets/img/close.svg');
  outline: 0;
  border: 0; */
}
</style>
