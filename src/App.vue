<template>
  <div id="app">
    <HelloWorld msg="Hello, World!" />
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    HelloWorld : () => import('./components/HelloWorld.vue'),
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
