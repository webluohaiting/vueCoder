export default {
  powerCounter(state) {
    return state.counter * state.counter 
  },
  more20Stu(state) {
    return state.students.filter(s => s.age > 20)
  },
  more20StuLength(state, getters) {
    return getters.more20Stu.length
  },
  moreAgeStu(state) {
    // $store.getters.moreAgeStu返回一个函数, $store.getters.moreAgeStu(15)则调用函数，并传入参数15
    return age => {
      return state.students.filter(s => s.age > age)
    }
  }
}