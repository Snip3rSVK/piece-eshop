<template>
  <ul
    v-if="products.length"
    class="product-list"
  >
    <product-list-item
      v-for="product in products"
      :key="product.id"
      :item-id="product.id"
      item-img="ssss"
      :item-title="product.title"
      :item-price="product.price"
    />
  </ul>
  <div v-else>
    Žiaden produkt nebol nájdený
  </div>
</template>

<script>
import ProductListItem from '@/components/Eshop/ProductListItem.vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  components: {
    ProductListItem,
  },
  props: {
    // this could be done because of added "props" in router.js
    category: {
      type: String,
      default: null,
    },
  },
  computed: {
    ...mapGetters('products', [
      'getProducts',
      'getProductsByCategory',
    ]),
    products() {
      if (this.category) {
        return this.getProductsByCategory(this.category);
      }

      return this.getProducts;
    },
  },
  watch: {
    category() {
      this.changeTitle();
    },
  },
  created() {
    this.changeTitle();
  },
  methods: {
    ...mapActions('shoppingCart', [
      'addProductToCart',
    ]),
    ...mapMutations('title', [
      'setTitle',
      'setSubtitle',
    ]),
    changeTitle() {
      if (this.category) {
        let translatedCategory = '';

        if (this.category === 'chocolate') {
          translatedCategory = 'Čokolády';
        }
        else if (this.category === 'praline') {
          translatedCategory = 'Pralinky';
        }
        else if (this.category === 'praline_set') {
          translatedCategory = 'Pralinky - set';
        }

        this.setTitle(translatedCategory || this.category);
        this.setSubtitle('Kategória');
      }
      else {
        this.setTitle('Piece');
        this.setSubtitle('Čokoládovňa');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  margin: 0;
}

.product-list {
  display: block;
  width: 100%;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>
