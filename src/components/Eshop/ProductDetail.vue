<template>
  <div v-if="product">
    <div
      :style="`background-image: url('http://bensvk.ddns.net/Piece/${ product.imageUrl }/bg.jpg'), url('${ product.imageUrl }'), radial-gradient(circle, #260d0d, #220b0b, #1e0909, #190707, #140505)`"
      class="product-detail-img"
    />
    <div
      :style="`background-image: url('http://bensvk.ddns.net/Piece/${ product.imageUrl }/no-bg.jpg'), radial-gradient(circle, #260d0d, #220b0b, #1e0909, #190707, #140505)`"
      class="product-detail-img"
    />
    <div class="product-detail-content">
      <div class="product-detail-content-price mb-4">
        {{ product.price }} €
      </div>
      <div>Skladom: {{ product.stock }}</div>
      <!-- <div>Kategória: {{ product.category }}</div> -->
      <div class="mt-4 mb-4">
        {{ product.description | shorten(160) }}
      </div>
      <b-tabs
        active-nav-item-class="font-weight-bold"
        class="mb-4"
      >
        <b-tab
          title="Alergény"
          active
          class="product-tab"
        >
          <b-list-group>
            <b-list-group-item
              v-for="(allergen, index) in product.allergens"
              :key="index"
              class="pt-2 pb-2 pl-3 product-list-group-item"
            >
              {{ allergen }}
            </b-list-group-item>
          </b-list-group>
        </b-tab>
        <b-tab
          title="Vitamíny"
          class="product-tab"
        >
          <b-list-group>
            <b-list-group-item
              v-for="(vitamin, index) in product.vitamins"
              :key="index"
              class="pt-2 pb-2 pl-3 product-list-group-item"
            >
              {{ vitamin }}
            </b-list-group-item>
          </b-list-group>
        </b-tab>
      </b-tabs>
      <b-button
        :disabled="!product.stock"
        variant="primary"
        @click="addProductToCart(product)"
      >
        Pridať do košíka
      </b-button>
    </div>
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
    this.setSideView();
  },
  beforeDestroy() {
    this.setNormalView();
  },
  methods: {
    ...mapActions('shoppingCart', ['addProductToCart']),
    ...mapMutations('title', [
      'setTitle',
      'setSubtitle',
      'setSideView',
      'setNormalView',
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

<style lang="scss" scoped>
.product-detail-img {
  margin-bottom: 50px;
  border-radius: 10px;
  // 171.428571429 / (100 / 70) = 120
  padding-top: 120%;
  width: 70%;
  height: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.product-detail-img:first-of-type {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.product-detail-content {
  height: 100vh;
  position: fixed;
  width: calc(0.3 * (100vw - 150px - 250px) + 150px - 50px);
  box-sizing: border-box;
  top: 0;
  right: 0;
  display: block;
  padding-top: 12rem;
  padding-right: 40px;
}

.product-detail-content-price {
  font-size: 1.25em;
}

.product-tab {
  line-height: 1.4;
  border-bottom: 0;
}

.nav-tabs {
  border-bottom: 0;
}
</style>
