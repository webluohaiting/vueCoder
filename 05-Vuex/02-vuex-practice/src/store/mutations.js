export default {
  changeAge(state, payload) {
    state.age = payload
  },
  addHeight(state, payload) {
    console.log(payload)
    Vue.set(state, payload.key, payload.value)
  },
  showScore(state, payload) {
    Vue.set(state, 'score', payload)
  }
}