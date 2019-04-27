<template>
  <div v-if="product">
    <h1>Produkt detail</h1>
    <div>{{ product.title }} - {{ product.price }}</div>
    <div>K dispozícii: {{ product.inventory }}</div>
    <div>Kategória: {{ product.category }}</div>
    <div>Popis: {{ product.description }}</div>
    <div>
      <h2>Alergény</h2>
      <ul>
        <!-- eslint-disable-next-line vue/require-v-for-key -->
        <li v-for="alergen in product.alergens">
          {{ alergen }}
        </li>
      </ul>
    </div>
    <div>
      <h2>Nutričné hodnoty</h2>
      <!-- eslint-disable-next-line vue/require-v-for-key -->
      <div v-for="(value, key) in product.nutritionValues">
        <strong>{{ key }}:</strong> {{ value }}
      </div>
    </div>
    <button
      :disabled="!product.inventory"
      @click="addProductToCart(product)"
    >
      Pridať do košíka
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  props: {
    // this could be done because of added "props" in router.js
    id: {
      type: String,
      default: null,
    },
  },
  computed: {
    ...mapGetters('products', ['getProductById']),
    product() {
      return this.getProductById(Number(this.id));
    },
  },
  watch: {
    product() {
      this.changeTitle();
    },
  },
  created() {
    this.changeTitle();
  },
  methods: {
    ...mapActions('shoppingCart', ['addProductToCart']),
    ...mapMutations('title', [
      'setTitle',
      'setSubtitle',
    ]),
    changeTitle() {
      if (this.product) {
        this.setTitle(this.product.title);
        this.setSubtitle('Detail');
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
