<template>
  <ul>
    <li
      v-for="product in products"
      :key="product.id"
    >
      <!-- {{ product.title }} - {{ product.price | currency }} -->
      <div>{{ product.title }} - {{ product.price }}</div>
      <div>K dispozícii: {{ product.inventory }}</div>
      <div>Kategória: {{ product.category }}</div>
      <div>{{ product.description.substring(0, 100) }}...</div>
      <button
        :disabled="!product.inventory"
        @click="addProductToCart(product)"
      >
        Pridať do košíka
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: mapState({
    products: state => state.products.all,
  }),
  created() {
    this.$store.dispatch('products/getAllProducts');
  },
  methods: mapActions('shoppingCart', ['addProductToCart']),
};
</script>

<style lang="scss" scoped>
li {
  margin-bottom: 0.5em;
}
</style>
