<template>
  <div class="users">
    <h2>Fetched data</h2>
    <ul>
      <li
        v-for="i in users"
        :key="i.name"
      >
        <span>{{ i.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Users',

  metaInfo: {
    title: 'App',
    titleTemplate: '%s | Users',
    meta: [
      {
        name: 'description',
        content: 'Users page description'
      },
      {
        'property': 'og:title',
        'content': 'Users',
        'template': '%s - Users list',
        'vmid': 'og:title'
      }
    ]
  },

  computed: {
    ...mapState(['users'])
  },

  async asyncData ({ store }) {
    await store.dispatch('getUsers')
  }

}
</script>
