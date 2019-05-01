<template>
  <b-form
    v-if="order"
    class="order-detail-wrapper"
    @submit.prevent="save()"
  >
    <div class="order-detail">
      <div class="order-detail-item">
        <b-form-group
          id="fieldset-firstName"
          :label="labels['firstName']"
          label-for="input-firstName"
        >
          <b-form-input
            id="input-firstName"
            :value="order['firstName']"
            trim
            autocomplete="off"
            disabled
          />
        </b-form-group>
      </div>
      <div class="order-detail-item">
        <b-form-group
          id="fieldset-lastName"
          :label="labels['lastName']"
          label-for="input-lastName"
        >
          <b-form-input
            id="input-lastName"
            :value="order['lastName']"
            trim
            autocomplete="off"
            disabled
          />
        </b-form-group>
      </div>
      <div class="order-detail-item">
        <b-form-group
          id="fieldset-email"
          :label="labels['email']"
          label-for="input-email"
        >
          <b-form-input
            id="input-email"
            :value="order['email']"
            trim
            autocomplete="off"
            disabled
          />
        </b-form-group>
      </div>
      <div class="order-detail-item">
        <b-form-group
          id="fieldset-phone"
          :label="labels['phone']"
          label-for="input-phone"
        >
          <b-form-input
            id="input-phone"
            :value="order['phone']"
            trim
            autocomplete="off"
            disabled
          />
        </b-form-group>
      </div>
      <div class="order-detail-item">
        <b-form-group
          id="fieldset-address"
          :label="labels['address']"
          label-for="input-address"
        >
          <b-form-input
            id="input-address"
            :value="order['address']"
            trim
            autocomplete="off"
            disabled
          />
        </b-form-group>
      </div>
      <div class="order-detail-item">
        <b-form-group
          id="fieldset-postalCode"
          :label="labels['postalCode']"
          label-for="input-postalCode"
        >
          <b-form-input
            id="input-postalCode"
            :value="order['postalCode']"
            trim
            autocomplete="off"
            disabled
          />
        </b-form-group>
      </div>
      <div class="order-detail-item">
        <b-form-group
          id="fieldset-city"
          :label="labels['city']"
          label-for="input-city"
        >
          <b-form-input
            id="input-city"
            :value="order['city']"
            trim
            autocomplete="off"
            disabled
          />
        </b-form-group>
      </div>
      <div class="order-detail-item">
        <b-form-group
          id="fieldset-totalPrice"
          :label="labels['totalPrice']"
          label-for="input-totalPrice"
        >
          <b-form-input
            id="input-totalPrice"
            :value="order['totalPrice']"
            trim
            autocomplete="off"
            disabled
          />
        </b-form-group>
      </div>
    </div>
    <b-button
      v-if="!order.status"
      type="submit"
      variant="primary"
    >
      Vybaviť túto objednávku
    </b-button>
    <b-button
      v-else
      type="submit"
      variant="primary"
      disabled
    >
      Táto objednávka je už vybavená
    </b-button>
  </b-form>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';

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
      validMsg: 'Ok.',
      labels: {
        id: 'Id',
        firstName: 'Meno',
        lastName: 'Priezvisko',
        phone: 'Telefónne číslo',
        email: 'Email',
        status: 'Status',
        address: 'Adresa',
        postalCode: 'PSČ',
        city: 'Mesto',
        totalPrice: 'Celková cena',
        paid: 'Zaplatené',
        products: 'Produkty',
      },
    };
  },
  computed: {
    ...mapGetters('orders', [
      'getOrderById',
      'getOrders',
    ]),
    order() {
      return this.getOrderById(Number(this.id));
    },
  },
  watch: {
    order() {
      console.log('order changed');
      this.changeTitle();
    },
  },
  created() {
    this.changeTitle();

    if (!this.getOrders.length) {
      this.getAllOrders();
    }
  },
  methods: {
    ...mapMutations('title', [
      'setTitle',
      'setSubtitle',
    ]),
    ...mapActions('orders', [
      'setOrderStatusById',
      'getAllOrders',
    ]),
    changeTitle() {
      if (this.id) {
        this.setTitle(`Objednávka ${this.id}`);
        this.setSubtitle('Detail');
      }
    },
    save() {
      if (this.id >= 0 && this.order) {
        const payload = {
          id: Number(this.id),
          status: true,
        };

        this.setOrderStatusById(payload);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.order-detail-wrapper {
  margin-bottom: 50px;
}

.order-detail {
  display: block;
  width: 100%;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-bottom: 50px;
}
</style>
