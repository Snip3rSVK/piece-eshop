<template>
  <div class="login">
    <b-form @submit.prevent="loginSubmit">
      <b-form-input
        v-model="email"
        type="email"
        placeholder="Email"
      />
      <b-form-input
        v-model="password"
        type="password"
        placeholder="Heslo"
      />
      <b-button
        type="submit"
        variant="primary"
      >
        Prihlásiť sa
      </b-button>
    </b-form>
    <div>
      authenticating: {{ authenticating }}
    </div>
    <div>
      authenticationError: {{ authenticationError }}
    </div>
    <div>
      otherError: {{ Boolean(otherError) }}
    </div>
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

</style>
