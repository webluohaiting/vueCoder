const path = require('path') // node提供

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // resolve拼接路径，传入两个参数，当前文件所在路径（绝对路径）__dirname
    filename: 'bundle.js'
  }
}