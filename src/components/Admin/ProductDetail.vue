<template>
  <div
    v-if="product && originalProduct"
    class="product-detail"
  >
    <div
      v-for="(value, key) in product"
      :key="key"
      class="product-detail-item"
    >
      <div class="product-detail-item-title">
        {{ key }}
      </div>
      <textarea
        v-if="key === 'description'"
        v-model.lazy="product[key]"
        type="text"
      />
      <input
        v-else-if="typeof value === 'string'"
        v-model.lazy="product[key]"
        type="text"
      >
      <input
        v-else-if="typeof value === 'number'"
        v-model.lazy="product[key]"
        type="number"
      >
      <input
        v-else-if="typeof value === 'boolean'"
        v-model.lazy="product[key]"
        type="radio"
      >
      <div
        v-else-if="key === 'nutritionInfo'"
        class="nutrition-info"
      >
        <div
          v-for="(infoValue, infoKey) in product.nutritionInfo"
          :key="infoKey"
        >
          <strong>{{ infoKey }}:</strong><br>
          <input
            type="text"
          >
        </div>
      </div>
      <input
        v-else
        v-model.lazy="product[key]"
        type="text"
      >
    </div>
    <button @click="save()">
      Uložiť
    </button>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';
import { cloneDeep } from 'lodash-es';

export default {
  props: {
    // this could be done because of added "props" in router.js
    id: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      originalProduct: null,
      pushed: false,
    };
  },
  computed: {
    ...mapGetters('products', [
      'getProductById',
    ]),
    product() {
      return this.getProductById(Number(this.id));
    },
  },
  watch: {
    product() {
      this.changeTitle();
      this.deepCloneProduct();
    },
  },
  created() {
    this.changeTitle();
    this.deepCloneProduct();
  },
  beforeDestroy() {
    if (this.id >= 0 && this.originalProduct) {
      this.setProductById(this.originalProduct, this.id);
    }
  },
  methods: {
    ...mapMutations('title', [
      'setTitle',
      'setSubtitle',
    ]),
    ...mapActions('products', [
      'setProductById',
    ]),
    changeTitle() {
      if (this.product) {
        this.setTitle(this.product.title);
        this.setSubtitle('Detail');
      }
      else if (this.id === '-1') {
        this.setTitle('Pridať produkt');
        this.setSubtitle('Detail');
      }
    },
    deepCloneProduct() {
      if (this.product && !this.pushed) {
        this.originalProduct = cloneDeep(this.product);
        this.pushed = true;
      }
    },
    save() {
      this.originalProduct = this.product;
      // API VOLANIE ALE PREDTYM ZMENIT CISLA NA STRINGY!!!!
    },
  },
};
</script>

<style lang="scss" scoped>
.product-detail {
  display: block;
  width: 100%;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.product-detail-item {

}

.product-detail-item-title {
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  font-size: 0.9375rem;
}

input {
  border: none;
  background: none;
  color: #fff;
  padding: 10px 20px;
  outline: 0;
}

input, textarea, .nutrition-info {
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  background: $dark-gradient;
  color: #fff;
}

input:focus, textarea:focus, .nutrition-info:focus {

}

</style>
