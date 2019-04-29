<template>
  <ul
    v-if="products.length"
    class="product-list"
  >
    <product-list-item
      v-for="product in products"
      :key="product.id"
      :item-id="product.id"
      :item-title="product.title"
    />
  </ul>
  <div v-else>
    Žiaden produkt nebol nájdený
  </div>
</template>

<script>
import ProductListItem from '@/components/Admin/ProductListItem.vue';
import { mapMutations, mapGetters } from 'vuex';

export default {
  components: {
    ProductListItem,
  },
  computed: {
    ...mapGetters('products', [
      'getProducts',
      'getProductsByCategory',
    ]),
    products() {
      return this.getProducts;
    },
  },
  created() {
    this.changeTitle();
  },
  methods: {
    ...mapMutations('title', [
      'setTitle',
      'setSubtitle',
    ]),
    changeTitle() {
      this.setTitle('Produkty');
      this.setSubtitle('Administrácia');
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
