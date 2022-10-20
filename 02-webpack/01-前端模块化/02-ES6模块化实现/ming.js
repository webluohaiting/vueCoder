// 小明
var name = '小明'
var age = 2
var flag = true

function sum(num1, num2) {
  return num1 + num2
}

if (flag) {
  console.log(sum(20, 30))
}

// 1.导出已有变量
export {
  flag,
  sum
}

// 2.直接导出变量
export var str = ''

// 3.导出函数
export function func() {}

// 4.导出类
export class Person {
  run() {
    console.log('奔跑。。。')
  }
}

// 5.export default(只允许导出一个default)
const obj = {
  name: 'haha',
  age: 20
}
export default obj