<template>
  <div>
    ss
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['products/getProductById']),
  },
  created() {
    console.log(this.getProductById(1));
    console.log('skfjksjfk');
  },
};
</script>

<style lang="scss" scoped></style>
