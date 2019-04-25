<template>
  <div class="login">
    <!-- <div
      v-if="loggingIn"
      class="container-loading"
    >
      <img
        src="/loading.gif"
        alt="Loading Icon"
      >
    </div>
    <p v-if="loginError">
      {{ loginError }}
    </p> -->
    <form @submit.prevent="loginSubmit">
      <input
        v-model="email"
        type="email"
        placeholder="Email"
      >
      <input
        v-model="password"
        type="password"
        placeholder="Heslo"
      >
      <button
        type="submit"
      >
        Prihlásiť sa
      </button>
    </form>
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
import { mapGetters, mapActions } from 'vuex';

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
  methods: {
    ...mapActions('auth', [
      'login',
    ]),
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
