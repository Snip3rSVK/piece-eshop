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
      <button
        :disabled="!product.inventory"
        @click="addProductToCart(product)"
      >
        Pridať do košíka
      </button>
      <base-button :to="'eshop/product/' + product.id">
        Detail
      </base-button>
    </li>
  </ul>
</template>

<script>
import BaseButton from '@/components/General/BaseButton.vue';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    'base-button': BaseButton,
  },
  computed: mapState({
    products: state => state.products.all,
  }),
  methods: mapActions('shoppingCart', ['addProductToCart']),
};
</script>

<style lang="scss" scoped>
li {
  margin-bottom: 0.5em;
}
</style>
