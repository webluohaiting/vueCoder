// 小明
// 命名冲突导致不能打印
if (flag) {
  console.log('小明是天才')
}

// 使用闭包不能访问其他文件的flag
;(function() {
  if (flag) {
    console.log('小明是天才')
  }
})()


// 需求：1.解决命名冲突
// 2.代码发方法可以复用
var moduleB = (function() {
  console.log(moduleA.flag, moduleA.sum(10, 20))
})()