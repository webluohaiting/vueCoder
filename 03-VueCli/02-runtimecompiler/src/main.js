// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const cpn = {
  template: `<h2>{{msg}}</h2>`,
  data() {
    return {
      msg: '我是cpn组件'
    }
  }
}
console.log(App)
/* eslint-disable no-new */
// runtime-compiler
// template -> ast -> render -> vdom -> ui
// 1.性能较低
// 2.vue代码量更大
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
  // render: function(createElement) {
  //   // 1.普通用法：createElement('标签', {标签的属性}, [])
  //   // return createElement(
  //   //   'h2',
  //   //   { class: 'box' },
  //   //   ['hello world', createElement('button', ['按钮'])]
  //   // )

  //   // 2.传入一个组件对象
  //   // return createElement(cpn)
  //   return createElement(App)
  // }
})
