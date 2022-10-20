export default {
  state: {
    name: 'aa',
    age: 3
  },
  getters: {
    afullname(state, getters, rootState) {
      return state.name + rootState.name
    }
  },
  mutations: {
    changeName(state, payload) {
      state.name = payload
    },
    getWeight(state, payload) {
      Vue.set(state, 'weight', payload)
    }
  },
  actions: {
    getWeight(context) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const data = 10
          const isOk = true
          if (isOk) {
            resolve('获取成功')
            context.commit('getWeight', data)
          } else {
            reject('获取失败')
          }
        })
      })
    }
  }
}