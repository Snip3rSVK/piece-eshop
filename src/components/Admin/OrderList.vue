<template>
  <div v-if="orders.length">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="admin-orders-table"
    />
    <b-table
      id="admin-orders-table"
      striped
      hover
      fixed
      :items="orders"
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
    Žiadna objednávka nebol nájdená
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

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
          key: 'firstName',
          sortable: true,
          label: 'Meno',
        },
        {
          key: 'lastName',
          label: 'Priezvisko',
          sortable: true,
        },
        {
          key: 'status',
          label: 'Status',
          sortable: true,
        },
      ],
    };
  },
  computed: {
    ...mapGetters('orders', [
      'getOrders',
    ]),
    orders() {
      return this.getOrders;
    },
    rows() {
      if (this.orders) {
        return this.orders.length;
      }

      return 0;
    },
  },
  created() {
    this.changeTitle();
    this.getAllOrders();
  },
  methods: {
    ...mapMutations('title', [
      'setTitle',
      'setSubtitle',
    ]),
    ...mapActions('orders', [
      'getAllOrders',
    ]),
    changeTitle() {
      this.setTitle('Objednávky');
      this.setSubtitle('Administrácia');
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
