<template>
  <router-link
    class="product-list-item"
    tag="li"
    :to="'/admin/product/' + itemId"
  >
    <span class="product-list-item-id">{{ itemId }}</span>
    <span class="product-list-item-title">{{ itemTitle }}</span>
  </router-link>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['itemId', 'itemTitle'],
};
</script>

<style lang="scss" scoped>
  li {
    cursor: pointer;
  }
</style>
