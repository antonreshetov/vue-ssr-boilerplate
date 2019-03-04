import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      users: []
    },

    mutations: {
      SET_USERS (state, data) {
        state.users = data
      }
    },

    actions: {
      async getUsers ({ commit }) {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        commit('SET_USERS', res.data)
      }
    }
  })
}
