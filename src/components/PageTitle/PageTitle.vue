<template>
  <div class="page-title">
    <h2 class="page-title-subtitle">
      {{ getSubtitle | shorten(24) }}
    </h2>
    <h1 class="page-title-title">
      {{ getTitle | shorten }}
    </h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  filters: {
    shorten(value, maxChar = 14) {
      if (!value) {
        return '';
      }
      if (value.length > maxChar) {
        return `${value.substring(0, maxChar - 3)}...`;
      }
      return value;
    },
  },
  computed: {
    ...mapGetters('title', [
      'getTitle',
      'getSubtitle',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  h1, h2 {
    margin: 0;
    padding: 0;
  }

  .page-title {
    height: 50vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .page-title-subtitle {
    text-transform: uppercase;
    font-size: calc(10px + 0.25vw);
  }

  .page-title-title {
    font-family: 'Pacifico', cursive;
    font-weight: normal;
    font-size: calc(40px + 2vw);
    margin-top: 0.25em;
  }
</style>
