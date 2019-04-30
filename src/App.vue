
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import 'assets/sass/custom.scss';
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import '~normalize.css';
@import url('https://fonts.googleapis.com/css?family=Pacifico|Raleway:400,700,900&subset=latin-ext');

.page-item.active .page-link {
  background: $dark-gradient;
  border-color: $dark-brown;
}

.page-item.active {
  outline: 0;
  border: 0;
}

.admin-table-row {
  cursor: pointer;
}

#admin-products-table, #admin-orderss-table {
  font-size: 0.875rem;
}

body {
  min-height: 100vh;
  overflow-x: hidden;
  font-family: 'Raleway', sans-serif;
  color: $dark-brown;
  font-size: 1rem;
  line-height: initial;
}

[v-cloak] {
  display: none !important;
}

</style>
