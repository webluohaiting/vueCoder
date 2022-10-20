import { INCREMENT } from './mutations-types'

export default {
  // 定义方法
  [INCREMENT](state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  // 参数被称为mutation的载荷(payload)
  incrementCount(state, count) {
    state.counter += count
  },
  // 多个参数时，可以包成一个对象传递
  // 普通提交风格
  // addStudent(state, stu) {
  //   state.students.push(stu)
  // }
  // 特殊提交风格
  addStudent(state, payload) {
    state.students.push(payload.stu)
  },
  updateInfo(state) {
    // 原来有的属性的基础上修改（响应式）
    state.info.name = 'haha'

    // 新增一个属性（非响应式）
    // state.info['address'] = '洛杉矶'

    // 新增一个属性（响应式）
    // Vue.set(state.info, 'address', '洛杉矶')

    // 删除一个属性（非响应式）
    // delete state.info.age

    // 删除一个属性（响应式）
    // Vue.delete(state.info, 'age')

    // 错误代码，异步操作时，页面会响应式改变，
    // 但是devtools不会改变，所以在mutations不能使用异步操作
    // setTimeout(() => {
    //   state.info.name = 'haha'
    // }, 1000)
  }
}