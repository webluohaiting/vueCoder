export default {
  // context: 上下文
  aUpdateInfo(context, payload) {
    // 通过参数传递函数来回调成功执行的信息
    // setTimeout(() => {
    //   context.commit('updateInfo')
    //   console.log(payload.message)
    //   payload.success()
    // }, 1000)

    console.log('root', context)
    // 通过Promise回调成功执行的信息
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updateInfo')
        console.log(payload)
        resolve('成功执行')
      }, 1000)
    })
  }
}