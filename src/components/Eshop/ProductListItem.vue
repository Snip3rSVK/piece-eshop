<template>
  <router-link
    :to="'/eshop/product/' + itemId"
    class="product-list-item"
    tag="li"
  >
    <div
      :style="`background-image: url(${ itemImg })`"
      class="product-list-item-img"
    />
    <span class="product-list-item-title">{{ itemTitle }}</span>
    <span class="product-list-item-price">{{ itemPrice }}</span>
  </router-link>
</template>

<script>
export default {
  props: ['itemId', 'itemImg', 'itemTitle', 'itemPrice'],
  mounted() {
    setTimeout(() => {
      console.log(this.itemId, this.itemImg, this.itemTitle, this.itemPrice);
    }, 5000);
  },
};
</script>

<style lang="scss" scoped>

</style>
