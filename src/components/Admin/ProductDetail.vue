<template>
  <b-form
    v-if="product && originalProduct"
    class="product-detail-wrapper"
    @submit.prevent="save()"
  >
    <div class="product-detail">
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
    
    	<div class="product-detail-item">
    	  <b-form-group
    	    id="fieldset-4"
    	    label="Cena"
    	    label-for="input-4"
    	    :invalid-feedback="statePriceInvalid"
    	    :valid-feedback="validMsg"
    	    :state="statePrice"
    	  >
    	    <b-form-input
    	      id="input-4"
    	      v-model="originalProduct.price"
    	      :state="statePrice"
    	      :formatter="formatterPrice"
    	      type="number"
    	      min="0"
    	      max="100000"
    	      step="0.01"
    	      trim
    	      autocomplete="off"
    	      number
    	      lazy-formatter
    	    />
    	  </b-form-group>
    	</div>
    
    	<div class="product-detail-item">
    	  <b-form-group
    	    id="fieldset-4"
    	    label="Na sklade"
    	    label-for="input-4"
    	    :invalid-feedback="stateStockInvalid"
    	    :valid-feedback="validMsg"
    	    :state="stateStock"
    	  >
    	    <b-form-input
    	      id="input-4"
    	      v-model="originalProduct.stock"
    	      :state="stateStock"
    	      :formatter="formatterStock"
    	      type="number"
    	      min="-100000"
    	      max="100000"
    	      step="1"
    	      trim
    	      autocomplete="off"
    	      number
    	      lazy-formatter
    	    />
    	  </b-form-group>
    	</div>
    </div>
    <b-form-group
      id="fieldset-4"
      label="Popis"
      label-for="input-4"
      :invalid-feedback="stateDescriptionInvalid"
      :valid-feedback="validMsg"
      :state="stateDescription"
    >
      <b-form-textarea
        id="textarea"
        v-model="originalProduct.description"
        rows="3"
        max-rows="6"
        :state="stateDescription"
      />
    </b-form-group>
    <b-table>
      <template
      slot="quantity" slot-scope="line">
        <input
          v-model="qvalue"
          v-on:input="handleQuantityChange($event,line.item)"/>
      </template>
    </b-table>
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
      return 'Vyberte si z jednej možnosti.';
    },
    statePrice() {
      const { price } = this.originalProduct;
      if (price >= 0.009 && price <= 100000.1) {
        return true;
      }

      return false;
    },
    statePriceInvalid() {
      return 'Cena musí byť v rozmedzí 0.01 € až 100000 €.';
    },
    stateStock() {
      const { stock } = this.originalProduct;
      if (stock >= -100000.1 && stock <= 100000.1) {
        return true;
      }

      return false;
    },
    stateStockInvalid() {
      return 'Slad musí byť v rozmedzí -100000 € až 100000 €.';
    },
    stateDescription() {
      const { description } = this.originalProduct;
      if (description.length >= 40) {
        return true;
      }

      return false;
    },
    stateDescriptionInvalid() {
      return 'Popis musí mať aspoň 40 znakov';
    },
    wholeFormValid() {
      if (
        this.stateTitle
        && this.stateUrl
        && this.stateCategory
        && this.statePrice
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
    formatterPrice(value) {
      const digits = 2;
      const multiplicator = 10 ** digits;
      const n = parseFloat((value * multiplicator).toFixed(11));
      const temp = (Math.round(n) / multiplicator);
      return +(temp.toFixed(digits));
    },
    formatterStock(value) {
      return Math.round(value);
    },
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
