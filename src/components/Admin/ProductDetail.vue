<template>
  <div
    v-if="product && originalProduct"
    class="product-detail"
  >
    <div
      v-for="(value, key) in product"
      :key="key"
    >
      <strong>{{ key }}:</strong><br>
      <textarea
        v-if="key === 'description'"
        v-model="product[key]"
        type="text"
      />
      <input
        v-else-if="typeof value === 'string'"
        v-model="product[key]"
        type="text"
      >
      <input
        v-else-if="typeof value === 'number'"
        v-model="product[key]"
        type="number"
      >
      <input
        v-else-if="typeof value === 'boolean'"
        v-model="product[key]"
        type="radio"
      >
      <input
        v-else
        :value="value"
        type="text"
        disabled
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

</style>
