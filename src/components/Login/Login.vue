<template>
  <div class="login-wrapper">
    <b-form @submit.prevent="loginSubmit">
      <div class="login">
        <b-form-group
          id="login-email"
          label="Email"
          label-for="input-email"
          :invalid-feedback="stateInvalid"
          :state="stateLogin"
        >
          <b-form-input
            id="input-email"
            v-model="email"
            type="email"
            :state="stateLogin"
          />
        </b-form-group>
        <b-form-group
          id="login-password"
          label="Heslo"
          label-for="input-password"
          :invalid-feedback="stateInvalid"
          :state="stateLogin"
        >
          <b-form-input
            id="input-password"
            v-model="password"
            type="password"
            :state="stateLogin"
          />
        </b-form-group>
      </div>
      <b-button
        type="submit"
        variant="primary"
        class="login-button"
      >
        Prihlásiť sa
      </b-button>
    </b-form>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    /*     ...mapState('auth', [
      'loggingIn',
      'loginError',
    ]), */
    ...mapGetters('auth', [
      'authenticating',
      'authenticationError',
      'otherError',
    ]),
    stateLogin() {
      if (this.authenticationError) {
        return false;
      }

      return null;
    },
    stateInvalid() {
      return this.authenticationError;
    },
  },
  created() {
    this.changeTitle();
  },
  methods: {
    ...mapActions('auth', [
      'login',
    ]),
    ...mapMutations('title', [
      'setTitle',
      'setSubtitle',
    ]),
    changeTitle() {
      this.setTitle('Prihlásenie');
      this.setSubtitle('Používateľ');
    },
    loginSubmit() {
      this.login({
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: block;
  width: 100%;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.login-button {
  margin-top: 30px;
}
</style>
