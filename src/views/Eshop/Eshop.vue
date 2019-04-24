<template>
  <div class="eshop">
    <h1>Na eshope sa pracuje...</h1>
    <hr>
    <h2>Filter</h2>
    <ProductFilter />
    <hr>
    <nav>
      <ul style="display: flex">
        <li>
          <base-button to="/eshop/cart">
            Košík
          </base-button>
        </li>
        <li>
          <base-button to="/eshop">
            Produkty
          </base-button>
        </li>
      </ul>
    </nav>
    <hr>
    <router-view />
    <hr>
    <base-button to="/admin">
      Administrácia
    </base-button>
  </div>
</template>

<script>
import ProductFilter from '@/components/Eshop/ProductFilter.vue';
import BaseButton from '@/components/General/BaseButton.vue';

export default {
  components: {
    ProductFilter,
    BaseButton,
  },
  created() {
    this.$store.dispatch('products/getAllProducts');
  },
};
</script>

<style lang="scss" scoped>

</style>
