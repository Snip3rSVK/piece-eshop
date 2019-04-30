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
  // eslint-disable-next-line vue/require-prop-types
  props: ['itemId', 'itemImg', 'itemTitle', 'itemPrice'],
};
</script>

<style lang="scss" scoped>
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

.product-list-item {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9375rem;
  line-height: 1.4;
  //background: red;
}

// 460 / 280
.product-list-item-img {
  border-radius: 10px;
  padding-top: 171.428571429%;
  width: 100%;
  background-image: $dark-gradient !important;
}

.product-list-item-title {
  margin-top: 0.75rem;
  font-weight: bold;
}
</style>
