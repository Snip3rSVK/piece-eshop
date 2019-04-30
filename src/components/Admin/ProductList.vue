<template>
  <div v-if="products.length">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="admin-products-table"
    />
    <b-table
      id="admin-products-table"
      striped
      hover
      fixed
      :items="products"
      :fields="fields"
      primary-key="id"
      responsive="true"
      :per-page="perPage"
      :current-page="currentPage"
      tbody-tr-class="admin-table-row"
      @row-clicked="redirectToDetail"
    />
  </div>
  <div v-else>
    Žiaden produkt nebol nájdený
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      fields: [
        {
          key: 'id',
          sortable: true,
        },
        {
          key: 'title',
          sortable: true,
          label: 'Názov',
        },
        {
          key: 'category',
          label: 'Kategória',
          sortable: true,
        },
        {
          key: 'stock',
          label: 'Na sklade',
          sortable: true,
        },
      ],
    };
  },
  computed: {
    ...mapGetters('products', [
      'getProducts',
      'getProductsByCategory',
    ]),
    products() {
      return this.getProducts;
    },
    rows() {
      if (this.products) {
        return this.products.length;
      }

      return 0;
    },
  },
  created() {
    this.changeTitle();
  },
  methods: {
    ...mapMutations('title', [
      'setTitle',
      'setSubtitle',
    ]),
    changeTitle() {
      this.setTitle('Produkty');
      this.setSubtitle('Administrácia');
    },
    redirectToDetail(item) {
      this.$router.push(`/admin/product/${item.id}`);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
