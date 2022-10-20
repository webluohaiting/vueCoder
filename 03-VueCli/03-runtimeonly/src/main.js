import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
// runtime-only
// render -> vdom -> ui
// 1.性能更高
// 2.代码量更少（轻了6kb）
new Vue({
  el: '#app',
  render: h => h(App)
})
console.log(App) // 打印出来是一个解析过的对象
// 那么.vue文件的template是由谁处理的了?
// 是由vue-template-compiler
// render -> vdom -> ui