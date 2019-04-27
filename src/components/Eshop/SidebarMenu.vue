<template>
  <aside class="sidebar-menu">
    <img
      class="sidebar-menu-melting-chocolate"
      src="@/assets/img/melting-chocolate.svg"
      alt="Tečúca čokoláda"
    >
    <div class="sidebar-menu-content">
      <img
        class="sidebar-menu-logo"
        src="@/assets/img/logo.svg"
        alt="PIECE logo"
      >
      <nav class="main-navigation">
        <ul>
          <li><a href="">Čokolády</a></li>
          <li><a href="">Pralinky</a></li>
        </ul>
      </nav>
      <nav class="social-links">
        <ul>
          <li><a href="">O nás</a></li>
          <li><a href="">Instagram</a></li>
          <li><a href="">Facebook</a></li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  a {
    display: inline-block;
    text-decoration: none;
    color: $dark-brown;
    width: 100%;
  }

  ul {
    list-style: none;
    line-height: 160%;
  }

  .sidebar-menu {
    height: 100vh;
    position: fixed;
    width: 15.625rem;
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
    width: 6.25rem;
    margin: 0 auto;
    margin-top: 10rem;
    transform: translateX(-40px)
  }

  .sidebar-menu-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
