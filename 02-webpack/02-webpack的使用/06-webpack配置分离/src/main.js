import { increment, decrement } from './js/haha.js'
console.log('哈哈的文件', increment(10, 20), decrement(20, 10))

const xixi = require('./js/xixi.js')
console.log('嘻嘻的文件', xixi.name, xixi.age)

require('./css/common.css')
require('./css/font.less')
document.writeln('测试')

import Vue from 'vue'
import App from './vue/App.vue'
new Vue({
  el: '#app',
  template: '<App />',
  components: {
    App
  }
})
