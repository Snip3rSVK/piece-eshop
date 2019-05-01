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
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.product-list-item-title {
  margin-top: 0.75rem;
  font-weight: bold;
}
</style>
