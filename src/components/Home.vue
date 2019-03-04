<template>
  <div class="hello">
    <h2>Welcome</h2>
    <p>Hi here!</p>
  </div>
</template>

<script>
export default {
  name: 'Home',

  metaInfo: {
    title: 'App',
    titleTemplate: '%s | Home',
    meta: [
      {
        name: 'description',
        content: 'Home page description'
      },
      {
        property: 'og:title',
        content: 'Home',
        template: '%s - Home page',
        vmid: 'og:title'
      }
    ]
  }
}
</script>
