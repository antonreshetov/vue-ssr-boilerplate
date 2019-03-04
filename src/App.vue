<template>
  <div id="app">
    <div class="hero">
      <img
        src="./assets/logo.png"
        alt="logo"
      >
      SSR Boilerplate
    </div>
    <br>
    <nav>
      <router-link to="/">
        Home
      </router-link>
      <router-link to="/users">
        Users
      </router-link>
    </nav>
    <router-view class="view" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    img {
      width: 100px;
    }
  }
  nav {
    a {
      display: inline-block;
      + a {
        margin-left: 10px;
      }
    }
  }
  h3 {
  margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .router-link-exact-active {
    font-weight: 600;
  }
}
</style>
