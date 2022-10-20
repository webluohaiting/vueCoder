import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 所有的组件都继承自Vue类的原型
Vue.prototype.test = function() {
  console.log('test')
}
Vue.prototype.name = 'haha'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
// console.log(router)
