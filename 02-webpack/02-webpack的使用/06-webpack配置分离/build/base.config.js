const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
    // publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          { 
            loader: 'url-loader',
            options: {
              limit: 8197,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower-components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.css'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    // 添加版权信息（webpack内置的BannerPlugin，不用安装）
    new webpack.BannerPlugin('最终版权归haha所有'),
    // 需安装html-webpack-plugin，根据index.html生成打包文件的index.html
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    // 需安装uglifyjs-webpack-plugin，丑化js，会去掉注释
    // new UglifyjsWebpackPlugin()
  ],
  // devServer: {
  //   contentBase: './dist', // 为哪个文件夹提供本地服务，默认是根文件夹
  //   port: '8081', // 端口号，默认8080
  //   inline: true, // 页面是否实时更新
  //   // historyApiFallback // 在SPA页面中，依赖HTML5的history模式
  // }
}