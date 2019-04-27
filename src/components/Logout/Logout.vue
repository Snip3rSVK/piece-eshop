<template>
  <div>
    <button @click="logout()">
      Logout
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('auth', [
      'logout',
    ]),
  },
};
</script>

<style lang="scss" scoped>

</style>
