// 小明
// var name = '小明'
// var age = 2

// function sum(num1, num2) {
//   return num1 + num2
// }

// var flag = true

// if (flag) {
//   console.log(sum( 10, 20))
// }

// 闭包：闭包解决了变量命名冲突的问题，但是导致代码不可复用
;(function() {
  // 导出的对象
  var name = '小明'
  var age = 2

  function sum(num1, num2) {
    return num1 + num2
  }

  var flag = true

  if (flag) {
    console.log(sum( 10, 20))
  }
})()

// 模块化
var moduleA = (function() {
  // 导出的对象
  var obj = {}
  var name = '小明'
  var age = 2

  function sum(num1, num2) {
    return num1 + num2
  }

  var flag = true

  if (flag) {
    console.log(sum( 10, 20))
  }

  obj.flag = flag
  obj.sum = sum
  return obj
})()
