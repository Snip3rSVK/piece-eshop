<template>
  <b-form
    v-if="orderToSend"
    class="order-wrapper"
    @submit.prevent="orderCart()"
  >
    <div class="order">
      <div class="order-item">
        <b-form-group
          id="fieldset-firstName"
          :label="labels['firstName']"
          label-for="input-firstName"
          :invalid-feedback="stateFirstNameInvalid"
          :valid-feedback="validMsg"
          :state="stateFirstName"
        >
          <b-form-input
            id="input-firstName"
            v-model="orderToSend.firstName"
            trim
            autocomplete="new-password"
            :state="stateFirstName"
          />
        </b-form-group>
      </div>
      <div class="order-item">
        <b-form-group
          id="fieldset-lastName"
          :label="labels['lastName']"
          label-for="input-lastName"
          :invalid-feedback="stateLastNameInvalid"
          :valid-feedback="validMsg"
          :state="stateLastName"
        >
          <b-form-input
            id="input-lastName"
            v-model="orderToSend.lastName"
            trim
            autocomplete="new-password"
            :state="stateLastName"
          />
        </b-form-group>
      </div>
      <div class="order-item">
        <b-form-group
          id="fieldset-email"
          :label="labels['email']"
          label-for="input-email"
          :invalid-feedback="stateEmailInvalid"
          :valid-feedback="validMsg"
          :state="stateEmail"
        >
          <b-form-input
            id="input-email"
            v-model="orderToSend.email"
            trim
            autocomplete="new-password"
            type="email"
            :state="stateEmail"
          />
        </b-form-group>
      </div>
      <div class="order-item">
        <b-form-group
          id="fieldset-phone"
          :label="labels['phone']"
          label-for="input-phone"
          :invalid-feedback="statePhoneInvalid"
          :valid-feedback="validMsg"
          :state="statePhone"
        >
          <b-form-input
            id="input-phone"
            v-model="orderToSend.phone"
            type="tel"
            trim
            autocomplete="new-password"
            :state="statePhone"
          />
        </b-form-group>
      </div>
      <div class="order-item">
        <b-form-group
          id="fieldset-address"
          :label="labels['address']"
          label-for="input-address"
          :invalid-feedback="stateAddressInvalid"
          :valid-feedback="validMsg"
          :state="stateAddress"
        >
          <b-form-input
            id="input-address"
            v-model="orderToSend.address"
            trim
            autocomplete="new-password"
            :state="stateAddress"
          />
        </b-form-group>
      </div>
      <div class="order-item">
        <b-form-group
          id="fieldset-postalCode"
          :label="labels['postalCode']"
          label-for="input-postalCode"
          :invalid-feedback="statePostalCodeInvalid"
          :valid-feedback="validMsg"
          :state="statePostalCode"
        >
          <b-form-input
            id="input-postalCode"
            v-model="orderToSend.postalCode"
            trim
            autocomplete="new-password"
            :state="statePostalCode"
          />
        </b-form-group>
      </div>
      <div class="order-item">
        <b-form-group
          id="fieldset-city"
          :label="labels['city']"
          label-for="input-city"
          :invalid-feedback="stateCityInvalid"
          :valid-feedback="validMsg"
          :state="stateCity"
        >
          <b-form-input
            id="input-city"
            v-model="orderToSend.city"
            trim
            autocomplete="new-password"
            :state="stateCity"
          />
        </b-form-group>
      </div>
      <!-- <div class="order-item">
        <b-form-group
          id="fieldset-totalPrice"
          :label="labels['totalPrice']"
          label-for="input-totalPrice"
        >
          <b-form-input
            id="input-totalPrice"
            trim
            autocomplete="new-password"
          />
        </b-form-group>
      </div> -->
    </div>
    <b-button
      v-if="cartNumberOfProducts"
      type="submit"
      variant="primary"
      class="order-button"
      :disabled="!wholeFormValid"
    >
      Objednať
    </b-button>
    <b-button
      v-else
      type="submit"
      variant="primary"
      class="order-button"
      disabled
    >
      Prosím vložte produkty do košíka
    </b-button>
  </b-form>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';

// eslint-disable-next-line no-useless-escape, no-unused-vars
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// eslint-disable-next-line no-useless-escape
const phoneRegex = /^(\+\d{3}|0)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/;

// eslint-disable-next-line no-useless-escape
const addressRegex = /^[^\d\s]+.*[ ,]+\d+[ \/]?\d*$/;

const postalCodeRegex = /^\d{3} ?\d{2}$/;

export default {
  data() {
    return {
      validMsg: 'Ok.',
      orderToSend: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        postalCode: '',
        city: '',
        order: [],
      },
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
    ...mapGetters('shoppingCart', [
      'cartProductsOrderReady',
      'cartNumberOfProducts',
    ]),
    stateFirstName() {
      const { firstName } = this.orderToSend;
      if (firstName.length && !/\s/.test(firstName)) {
        return true;
      }

      return false;
    },
    stateFirstNameInvalid() {
      if (!this.orderToSend.firstName.length) {
        return 'Meno nesmie byť prázdne.';
      }

      return 'Meno nesmie obsahovať medzery.';
    },
    stateLastName() {
      const { lastName } = this.orderToSend;
      if (lastName.length) {
        return true;
      }

      return false;
    },
    stateLastNameInvalid() {
      return 'Priezvisko nesmie byť prázdne.';
    },
    stateEmail() {
      const { email } = this.orderToSend;
      if (emailRegex.test(email)) {
        return true;
      }

      return false;
    },
    stateEmailInvalid() {
      return 'Prosím zadajte platný email.';
    },
    statePhone() {
      const { phone } = this.orderToSend;
      if (phoneRegex.test(phone)) {
        return true;
      }

      return false;
    },
    statePhoneInvalid() {
      return 'Prosím zadajte platné telefónne číslo.';
    },
    stateAddress() {
      const { address } = this.orderToSend;
      if (addressRegex.test(address) && !address.endsWith('/')) {
        return true;
      }

      return false;
    },
    stateAddressInvalid() {
      return 'Prosím zadajte platnú adresu.';
    },
    statePostalCode() {
      const { postalCode } = this.orderToSend;
      if (postalCodeRegex.test(postalCode)) {
        return true;
      }

      return false;
    },
    statePostalCodeInvalid() {
      return 'Prosím zadajte platné PSČ.';
    },
    stateCity() {
      const { city } = this.orderToSend;
      if (city) {
        return true;
      }

      return false;
    },
    stateCityInvalid() {
      return 'Mesto nesmie byť prázdne.';
    },
    wholeFormValid() {
      if (
        this.stateFirstName
        && this.stateLastName
        && this.stateEmail
        && this.statePhone
        && this.stateAddress
        && this.statePostalCode
        && this.stateCity
      ) {
        return true;
      }

      return false;
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
    ...mapActions('shoppingCart', [
      'checkout',
    ]),
    changeTitle() {
      this.setTitle('Objednávky');
      this.setSubtitle('Vyplnenie');
    },
    orderCart() {
      this.orderToSend.order = this.cartProductsOrderReady;
      this.checkout(this.orderToSend);
    },
  },
};
</script>

<style lang="scss" scoped>
.order {
  display: block;
  width: 100%;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-bottom: 50px;
}

.order-button {
  margin-bottom: 50px;
}
</style>
