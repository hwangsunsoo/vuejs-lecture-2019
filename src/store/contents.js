import axios from 'axios'
export default {

  state: {
    contents: []
  },

  getters: {
    contents (state) {
      return state.contents
    },
  },

  mutations: {
    setContents (state, contents) {
      if (contents) {
        state.contents = contents
      }
    },
  },

  actions: {
    async getContents ({ commit }) {
      await axios.get('https://jsonplaceholder.typicode.com/posts', {})
        .then((response) => {
          if (response) {
            commit('setContents', response.data)
          }
        })
        .catch(() => {
          //console.error(response)
        })
        .finally(() => {
        })
    },
  },
}
