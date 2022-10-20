import axios from 'axios'

// 1.传入多个回调函数
// export function request(config, success, failure) {
//   // 1.创建对应的axios的实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//   instance(config)
//     .then(res => {
//       success(res)
//     })
//     .catch(err=> {
//       failure(err)
//     })
// }

// 2.传入一个配置config:{baseConfig, success, failure}
// export function request(config) {
//   // 1.创建对应的axios的实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//   instance(config.baseConfig)
//     .then(res => {
//       config.success(res)
//     })
//     .catch(err=> {
//       config.failure(err)
//     })
// }

// 3.使用Promise
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

// 4.直接return(因为instance本身就是Promise对象，可以直接return)
export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.axios拦截器
  // 2.1 请求拦截的作用
  instance.interceptors.request.use(
    config => {
      console.log(config)
      // 1.比如config中的一些信息不符合服务器的需求
      // 2.比如每次发送网络请求时，都希望在页面上显示一个请求的图标
      // 3.某些网络请求（比如登录token），必须携带一些特殊信息
      return config
    }, err => {
      console.log(err)
    }
  )

  // 2.1 响应拦截的作用
  instance.interceptors.response.use(
    res => {
      console.log(res)
      return res.data
    },
    err => {
      console.log(err)
    }
  )

  // 3.发送真正的请求
  return instance(config)
}
