export default {
  getScore(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = 80
        const isOk = false
        if (isOk) {
          context.commit('showScore', data)
          resolve('获取成功')
        } else {
          reject('获取失败')
        }
      }, 1000)
    })
  }
}