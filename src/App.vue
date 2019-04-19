<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import '~normalize.css';
@import url('https://fonts.googleapis.com/css?family=Pacifico|Raleway:400,700,900&subset=latin-ext');
@import '~@/assets/sass/variables';

body {
  min-height: 100vh;
  overflow-x: hidden;
  font-family: 'Raleway', sans-serif;
  color: $dark-brown;
}

[v-cloak] {
  display: none !important;
}
</style>
