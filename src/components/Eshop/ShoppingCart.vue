<template>
  <div
    :class="isOpened ? 'opened' : ''"
    class="shopping-cart"
  >
    <div class="shopping-cart-title-wrapper">
      <h2 class="shopping-cart-title">
        Košík
      </h2>
      <div
        class="shopping-cart-close-button"
        variant="light"
        @click="hideCart()"
      />
    </div>
    <p v-show="!products.length">
      <i>Pridajte produkty do košíka</i>
    </p>
    <div class="shopping-cart-product-wrapper">
      <div
        v-for="product in products"
        class="shopping-cart-product"
      >
        <div
          :style="`background-image: url('http://bensvk.ddns.net/Piece/${ product.imageUrl }/bg.jpg'), url('${ product.imageUrl }'), radial-gradient(circle, #260d0d, #220b0b, #1e0909, #190707, #140505)`"
          class="shopping-cart-product-img"
        />
        <div class="shopping-cart-product-title pt-3 pl-4 pr-4 font-weight-bold">
          {{ product.title }}
        </div>
        <div class="shopping-cart-product-price pt-3 pr-2 font-weight-bold">
          {{ product.price.toFixed(2) }} €
        </div>
        <div class="shopping-cart-product-quantity pl-4 pb-4">
          Množstvo: {{ product.quantity }}
        </div>
      </div>
    </div>
    <!-- <p>Total: {{ total | currency }}</p> -->
    <div class="total-wrapper">
      <div class="total-text font-weight-bold">Spolu</div>
      <div class="total-price font-weight-bold">{{ total.toFixed(2) }} €</div>
    </div>
    <p>
      <b-button
        :disabled="!products.length"
        variant="light"
        @click="goToOrder"
      >
        Objednať
      </b-button>
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
    goToOrder() {
      this.$router.push('/eshop/order');
      this.hideCart();
    },
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

.shopping-cart-title-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
}

.shopping-cart-title {
  font-family: 'Pacifico';
  margin: 0;
}

.shopping-cart-close-button {
  width: 20px;
  height: 20px;
  background: url('~@/assets/img/close.svg');
  background-size: cover;
  outline: 0;
  border: 0;
  margin-top: 5px;
  cursor: pointer;
}

.shopping-cart-product-wrapper {
  overflow-y: scroll;
  margin-right: -20px;
  max-height: calc(100vh - 300px);
}

.shopping-cart-product {
  display: grid;
  grid-template-columns: 80px auto 100px;
  grid-template-rows: 74px 74px;
  margin-bottom: 10px;
  margin-top: 10px;
  border-bottom: 1px rgba(255, 255, 255, .1) solid;
}

.shopping-cart-product-img {
  border-radius: 5px;
  height: 137.142857143px;
  width: 80px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  grid-column: 1;
  grid-row: 1 / -1;
}

.shopping-cart-product-title {
  grid-column: 2;
  grid-row: 1;
}

.shopping-cart-product-price {
  grid-column: 3;
  grid-row: 1;
  text-align: right;
}

.shopping-cart-product-quantity {
  grid-column: 2;
  grid-row: 2;
  margin-top: auto;
}

.total-wrapper {
  display: flex;
  justify-content: space-between;
  font-size: 1.25em;
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>
