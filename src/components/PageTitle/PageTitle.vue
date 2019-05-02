<template>
  <div
    :class="getSideView ? 'side-view' : ''"
    class="page-title"
  >
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
  computed: {
    ...mapGetters('title', [
      'getTitle',
      'getSubtitle',
      'getSideView',
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
  font-weight: bold;
}

.page-title-title {
  font-family: 'Pacifico', cursive;
  font-weight: normal;
  font-size: calc(40px + 2vw);
  margin-top: 0.25em;
  margin-left: -3px;
}

.side-view.page-title {
  height: 100vh;
  position: fixed;
  width: calc(0.3 * (100vw - 150px - 250px) + 150px - 50px);
  top: 0;
  right: 0;
  display: block;
  padding-top: 5.5625rem;
}

.side-view .page-title-title {
  font-size: calc(10px + 2vw);
  margin-top: 0.75em;
}
</style>
