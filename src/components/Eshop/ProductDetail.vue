<template>
  <div v-if="product">
    <div
      :style="`background-image: url('http://bensvk.ddns.net/Piece/${ product.imageUrl }/bg.jpg'), radial-gradient(circle, #260d0d, #220b0b, #1e0909, #190707, #140505)`"
      class="product-detail-img"
    />
    <div
      :style="`background-image: url('http://bensvk.ddns.net/Piece/${ product.imageUrl }/no-bg.jpg'), radial-gradient(circle, #260d0d, #220b0b, #1e0909, #190707, #140505)`"
      class="product-detail-img"
    />
    <div class="product-detail-content">
      <div class="product-detail-content-price">
        {{ product.price }}
      </div>
      <div>K dispozícii: {{ product.stock }}</div>
      <div>Kategória: {{ product.category }}</div>
      <div>Popis: {{ product.description | shorten(100) }}</div>
      <div>
        <h2>Alergény</h2>
        <ul>
          <!-- eslint-disable-next-line vue/require-v-for-key -->
          <li v-for="allergen in product.allergens">
            {{ allergen }}
          </li>
        </ul>
      </div>
      <div>
        <h2>Nutričné hodnoty</h2>
        <div
          v-for="(value, key) in product.nutritionInfo"
          :key="key"
        >
          <strong>{{ key }}:</strong> {{ value }}
        </div>
      </div>
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
  padding-top: 11rem;
  padding-right: 40px;
}
</style>
