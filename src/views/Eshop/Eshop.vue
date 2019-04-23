<template>
  <div class="eshop">
    <h1>Na eshope sa pracuje...</h1>
    <h2>Produkty</h2>
    <ProductList />
    <hr>
    <ShoppingCart />
    <hr>
    <base-button to="/admin">
      Administrácia
    </base-button>
  </div>
</template>

<script>
import ProductList from '@/components/Eshop/ProductList.vue';
import ShoppingCart from '@/components/Eshop/ShoppingCart.vue';
import BaseButton from '@/components/General/BaseButton.vue';

export default {
  components: { ProductList, ShoppingCart, BaseButton },
};
</script>

<style lang="scss" scoped>
.base-button {
  display: inline-block;
}
</style>
