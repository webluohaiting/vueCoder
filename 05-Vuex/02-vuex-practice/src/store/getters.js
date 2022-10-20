export default {
  fullname(state) {
    return 'luo ' + state.name
  },
  say(state, getters) {
    return 'My name is ' + getters.fullname
  },
  othername(state) {
    return payload => {
      return payload + ' ' + state.name
    }
  }
}