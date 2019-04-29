<template>
  <ul class="order-list">
    ooo
  </ul>
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
      this.setTitle('Objednávky');
      this.setSubtitle('Administrácia');
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
