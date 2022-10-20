import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// httpbin.org
// 123.207.32.32:8000
// 1.axios基本使用
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// }).then(res => {
//   console.log('普通请求', res)
// })

// axios.get('http://123.207.32.32:8000/home/multidata', {})
// .then(res => {
//   console.log('.get请求', res)
// })

// axios({
//   url: 'http://123.207.32.32:8000/home/data?type=sell&page=1',
// }).then(res => {
//   console.log('直接拼接参数请求', res)
// })

// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log('传入参数请求', res)
// })

// 2.axios发送并发请求
// axios.all([
//   axios({
//     url: 'http://123.207.32.32:8000/home/multidata'
//   }),
//   axios({
//     url: 'http://123.207.32.32:8000/home/data',
//     params: {
//       type: 'sell',
//       page: 5
//     }
//   })
// ]).then(axios.spread((res1, res2) => {
//   console.log('并发请求', res1, res2) // 分离结果
// }))
// .then(results => {
//   console.log('并发请求', results) // results为数组
// })

// 3.使用全局的axios和对应的配置在进行网络请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
// axios.all([
//   axios({
//     url: '/home/multidata'
//   }),
//   axios({
//     url: '/home/data',
//     params: {
//       type: 'sell',
//       page: 5
//     }
//   })
// ]).then(axios.spread((res1, res2) => {
//   console.log('全局配置', res1, res2) // 分离结果
// }))

// 4.创建对应的axios的实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log('创建实例', res)
// })
// instance1({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// }).then(res => {
//   console.log('创建实例传参', res)
// })

// const instance2 = axios.create({
//   baseURL: 'http://test.com',
//   timeout: 5000,
//   headers: {}
// })

// 5.封装request模块
import { request } from './network/request'

// 1.传入多个回调函数
// request({
//   url: '/home/multidata'
// }, res => {
//   console.log('使用回调函数', res)
// }, err => {
//   console.log('使用回调函数', err)
// })

// 2.传入一个配置config:{baseConfig, success, failure}
// request({
//   baseConfig: {
//     url: '/home/multidata'
//   },
//   success: res => {
//     console.log('使用回调函数', res)
//   }, 
//   failure: err => {
//     console.log('使用回调函数', err)
//   }
// })

// 3.使用Promise和return
request({
  url: '/home/multidata'
}).then(res => {
  console.log('使用Promise和return', res)
}).catch(err => {
  console.log('使用Promise和return', err)
})