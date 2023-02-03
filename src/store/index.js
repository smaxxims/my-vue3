import { createStore } from 'vuex'

export default createStore({
  state: {
    user: [
      {
        id: 1,
        firstname: 'Maxim',
        name: 'smaxxims',
        pass: 'smaxxims'
      },
      {
        id: 2,
        firstname: 'Kathi',
        name: 'kathi',
        pass: 'kathi'
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
