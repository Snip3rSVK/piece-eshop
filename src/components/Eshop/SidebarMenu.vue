<template>
  <aside class="sidebar-menu">
    <!-- <img
      class="sidebar-menu-melting-chocolate"
      src="@/assets/img/melting-chocolate.svg"
      alt="Tečúca čokoláda"
    > -->
    <div class="sidebar-menu-content">
      <img
        class="sidebar-menu-logo"
        src="@/assets/img/logo.svg"
        alt="PIECE logo"
        @click="goToHomePage"
      >
      <nav class="sidebar-menu-main-navigation">
        <ul>
          <li>
            <router-link
              class="sidebar-menu-main-navigation-main-link"
              tag="div"
              to="/eshop"
            >
              Domov
            </router-link>
          </li>
          <li>
            <div
              class="sidebar-menu-main-navigation-main-link"
              @click="showCategories = !showCategories"
            >
              Kategórie
            </div>
            <transition name="show-sub">
              <ul
                v-show="showCategories"
                class="sidebar-menu-content-sub"
              >
                <li class="sidebar-menu-main-navigation-sub-link">
                  <router-link to="/eshop/category/chocolate">
                    Čokolády
                  </router-link>
                </li>
                <li class="sidebar-menu-main-navigation-sub-link">
                  <router-link to="/eshop/category/praline">
                    Pralinky
                  </router-link>
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </nav>
      <nav class="sidebar-menu-social-links">
        <ul>
          <li><a href="#">O nás</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Facebook</a></li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      showCategories: false,
    };
  },
  methods: {
    goToHomePage() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  display: inline-block;
  text-decoration: none;
  color: $dark-brown;
  width: 100%;
  transition: opacity 0.25s;
}

a:hover {
  opacity: 0.8;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar-menu {
  height: 100vh;
  position: fixed;
  width: 15.625rem;
  box-sizing: border-box;
  padding: 3.125rem 0 3.125rem 3.125rem;
  overflow: hidden;
  font-size: 0.9375rem;
  top: 0;
  left: 0;
}

.sidebar-menu-melting-chocolate {
  width: 13.125rem;
  transform: scaleX(-1);
  top: -5px;
  left: 0;
  position: fixed;
  z-index: 10;
}

.sidebar-menu-logo {
  cursor: pointer;
  width: 8.125rem;
  margin-left: -0.75rem;
}

.sidebar-menu-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sidebar-menu-main-navigation-main-link {
  font-weight: bold;
  padding: 5px 0;
  cursor: pointer;
  transition: opacity 0.25s;
}

.sidebar-menu-main-navigation-main-link:hover {
  opacity: 0.8;
}

.sidebar-menu-content-sub {
  box-sizing: border-box;
  overflow: hidden;
  line-height: 1.7;
  max-height: 85px;
}

.show-sub-enter-active {
  transition: max-height 0.75s $ease-in-out-cubic;
}

.show-sub-leave-active {
  transition: max-height 0.75s $ease-in-out-cubic;
}

.show-sub-enter, .show-sub-leave-to {
  max-height: 0;
}

.sidebar-menu-main-navigation-sub-link:first-of-type {
  padding-top: 1rem;
}

.sidebar-menu-main-navigation-sub-link:last-of-type {
  padding-bottom: 1rem;
}

.sidebar-menu-main-navigation-sub-link {
  font-weight: normal;
  padding-left: 1rem;
}

.sidebar-menu-social-links {
  line-height: 1.7;
}
</style>
