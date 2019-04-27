<template>
  <div class="eshop">
    <sidebar-menu />
    <main>
      <h1>Na eshope sa pracuje...</h1>
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
    </main>
  </div>
</template>

<script>
import BaseButton from '@/components/General/BaseButton.vue';
import SidebarMenu from '@/components/Eshop/SidebarMenu.vue';

export default {
  components: {
    BaseButton,
    SidebarMenu,
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
</style>
