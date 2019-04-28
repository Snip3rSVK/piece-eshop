<template>
  <div class="eshop">
    <sidebar-menu />
    <main>
      <page-title />
      <router-view />
      <hr>
      <base-button to="/admin">
        Administrácia
      </base-button>
    </main>
    <sidebar-cart />
    <shopping-cart />
  </div>
</template>

<script>
import BaseButton from '@/components/General/BaseButton.vue';
import SidebarMenu from '@/components/Eshop/SidebarMenu.vue';
import SidebarCart from '@/components/Eshop/SidebarCart.vue';
import PageTitle from '@/components/PageTitle/PageTitle.vue';
import ShoppingCart from '@/components/Eshop/ShoppingCart.vue';

export default {
  components: {
    BaseButton,
    SidebarMenu,
    SidebarCart,
    PageTitle,
    ShoppingCart,
  },
  created() {
    this.$store.dispatch('products/getAllProducts');
  },
};
</script>

<style lang="scss" scoped>
  .eshop {
    display: grid;
    grid-template-columns: 15.625rem auto 9.375rem;
  }

  .sidebar-menu {
    grid-column: 1;
  }

  main {
    grid-column: 2;
  }

  .sidebar-cart {
    grid-column: 3;
  }
</style>
