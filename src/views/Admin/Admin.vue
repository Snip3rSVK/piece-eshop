<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  created() {
    this.changeTitle();
  },
  methods: {
    ...mapMutations('title', [
      'setTitle',
      'setSubtitle',
    ]),
    changeTitle() {
      this.setTitle('Administrácia');
      this.setSubtitle('Úvod');
    },
  },
};
</script>

<style lang="scss" scoped></style>
