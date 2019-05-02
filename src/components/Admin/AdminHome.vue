<template>
  <router-link
    :to="'/eshop/product/' + itemId"
    class="product-list-item"
    tag="li"
  >
    <div
      :style="`background-image: url('http://bensvk.ddns.net/Piece/${ itemImg }/bg.jpg'), radial-gradient(circle, #260d0d, #220b0b, #1e0909, #190707, #140505)`"
      class="product-list-item-img"
    />
    <span class="product-list-item-title">{{ itemTitle }}</span>
    <span class="product-list-item-price">{{ itemPrice }} €</span>
  </router-link>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types

};
</script>

<style lang="scss" scoped>

</style>
