const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')


module.exports = webpackMerge(baseConfig, {
  devServer: {
    contentBase: './dist', // 为哪个文件夹提供本地服务，默认是根文件夹
    port: '8081', // 端口号，默认8080
    inline: true // 页面是否实时更新
  }
})