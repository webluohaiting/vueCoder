import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import moduleA from './modules/moduleA'

Vue.use(Vuex)

const state = {
  name: 'haha',
  age: 30
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    demoA: moduleA
  }
})
