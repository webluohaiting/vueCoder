const path = require('path') // node提供

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // resolve拼接路径，传入两个参数，当前文件所在路径（绝对路径）__dirname
    filename: 'bundle.js',
    publicPath: 'dist/',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // css-loader只负责将css文件进行加载
        // style-loader只负责将样式添加到DOM中
        // 使用多个loader时，是从右向左,需先加载css-loader,再加载style-loader，反过来会报错
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/i,
        // use: ["style-loader", "css-loader", "less-loader"],
        // less-loader负责将less文件进行加载,通过安装的less工具进行转化成css文件，
        // 再通过css-loader加载css文件，再通过style-loader将样式添加到DOM中
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: "url-loader",
          options: {
            // 当加载的图片，小于limit时，会将图片编译成base64字符串形式
            // 当加载的图片，大于limit时，需要使用file-loader模块进行加载
            limit: 8197,
            // 对图片进行命名, []为变量
            name: "img/[name].[hash:8].[ext]"
          }
        }]
      },
      {
        test: /\.js$/,
        // exclude排除:bower是管理前端的库的，jquery, bootstrap, angular这些，node_modules是放npm管理的后台用的一些库的
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // es2015包含了所有es6=>es5的插件，也可以按需引入
            presets: ['es2015']
          }
        }
      }
    ]
  }
}