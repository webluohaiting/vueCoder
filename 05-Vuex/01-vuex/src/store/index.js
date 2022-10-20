import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import moduleA from './modules/moduleA'

// 1.安装插件
Vue.use(Vuex)

const state = {
  counter: 1000,
  students: [
    { id: 110, name: 'haha', age: 18 },
    { id: 111, name: 'hehe', age: 30 },
    { id: 112, name: 'heihei', age: 10 },
    { id: 113, name: 'houhou', age: 40 }
  ],
  // 这些属性都会被加入到响应式系统中，而响应式系统会监听属性的变化，
  // 当属性发生变化时，会通知所有界面中用到该属性的地方，让界面发生刷新
  info: {
    name: 'kobe',
    age: 40,
    height: 1.98
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})

export default store
