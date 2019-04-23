<template>
  <div id="app">
    <div id="nav">
      <b-alert show>Default Alert</b-alert>

      <b-navbar type="dark" variant="secondary">

        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>
          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
      <!--
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      -->
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import './assets/custom.scss';
#app {
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
  }
  a.router-link-exact-active {
    color: #42b983;
  }
  .bg-secondary {
    background-color: $secondary;
  }
}
</style>
