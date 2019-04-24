<template>
  <div class="cart">
    <h2>Košík</h2>
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
import { mapGetters, mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      checkoutStatus: state => state.shoppingCart.checkoutStatus,
    }),
    ...mapGetters('shoppingCart', {
      products: 'cartProducts',
      total: 'cartTotalPrice',
    }),
  },
  methods: {
    checkout(products) {
      this.$store.dispatch('shoppingCart/checkout', products);
    },
  },
};
</script>

<style lang="scss" scoped></style>
