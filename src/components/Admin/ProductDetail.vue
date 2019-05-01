<template>
  <b-form
    v-if="product && originalProduct"
    class="product-detail"
    @submit.prevent="save()"
  >
    <div class="product-detail-item">
      <b-form-group
        id="fieldset-1"
        label="Názov"
        label-for="input-1"
        :invalid-feedback="stateTitleInvalid"
        :valid-feedback="validMsg"
        :state="stateTitle"
      >
        <b-form-input
          id="input-1"
          v-model="originalProduct.title"
          :state="stateTitle"
          trim
          autocomplete="off"
        />
      </b-form-group>
    </div>

    <div class="product-detail-item">
      <b-form-group
        id="fieldset-2"
        label="Adresa obrázka"
        label-for="input-2"
        :invalid-feedback="stateUrlInvalid"
        :valid-feedback="validMsg"
        :state="stateUrl"
      >
        <b-form-input
          id="input-2"
          v-model="originalProduct.imageUrl"
          :state="stateUrl"
          trim
          autocomplete="off"
        />
      </b-form-group>
    </div>

    <div class="product-detail-item">
      <b-form-group
        id="fieldset-3"
        label="Kategória"
        label-for="input-3"
        :invalid-feedback="stateCategoryInvalid"
        :valid-feedback="validMsg"
        :state="stateCategory"
      >
        <b-form-select
          v-model="originalProduct.category"
          :options="categories"
          :state="true"
        />
      </b-form-group>
    </div>
    <div
      v-for="(value, key) in originalProduct"
      :key="key"
      class="product-detail-item"
    >
      {{ key }} : {{ value }}
    </div>
    <b-button
      type="submit"
      variant="primary"
      :disabled="!wholeFormValid"
    >
      Uložiť
    </b-button>
  </b-form>
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
      validMsg: 'Ok.',
      categories: [
        {
          value: 'chocolate',
          text: 'Čokolády',
        },
        {
          value: 'praline',
          text: 'Pralinky',
        },
        {
          value: 'praline_set',
          text: 'Pralinky - set',
        },
      ],
    };
  },
  computed: {
    ...mapGetters('products', [
      'getProductById',
    ]),
    product() {
      return this.getProductById(Number(this.id));
    },
    stateTitle() {
      const titleLength = this.originalProduct.title.length;
      if (titleLength >= 2 && titleLength <= 30) {
        return true;
      }

      return false;
    },
    stateTitleInvalid() {
      if (this.originalProduct.title.length < 2) {
        return 'Názov musí obsahovať aspoň 2 znaky.';
      }

      return 'Názov musí obsahovať menej ako 31 znakov.';
    },
    stateUrl() {
      const url = this.originalProduct.imageUrl || '';
      const regexes = [/\.png$/i, /\.jpg$/i, /\.svg$/i, /\.jpeg$/i, /img\/products\/\d+\/$/i];

      for (let i = 0; i < regexes.length; ++i) {
        if (regexes[i].test(url)) {
          return true;
        }
      }

      return false;
    },
    stateUrlInvalid() {
      return 'Povolené sú len prípony obrázkov.';
    },
    stateCategory() {
      return Boolean(this.originalProduct.category.length);
    },
    stateCategoryInvalid() {
      return 'Vyber si z jednej možnosti';
    },
    wholeFormValid() {
      if (
        this.stateTitle
        && this.stateUrl
        && this.stateCategory
      ) {
        return true;
      }

      return false;
    },
  },
  watch: {
    product() {
      console.log('product changed');
      this.changeTitle();
      this.deepCloneProduct();
    },
  },
  created() {
    this.changeTitle();
    this.deepCloneProduct();
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
      if (this.id >= 0 && this.originalProduct) {
        const payload = {
          id: Number(this.id),
          product: this.originalProduct,
        };

        this.setProductById(payload);
      }
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
</style>
