// 小红
// var name = '小红'
// var flag = false

// console.log(name)

// 闭包
;(function() {
  var name = '小红'
  var flag = false

  console.log(name)
})()

// 模块化
var moduleC = (function() {
  var name = '小红'
  var flag = false

  return {
    name,
    flag
  }
})()