<template>
  <div id="app">
    <h2>----App内容: modules相关信息----</h2>
    <h4>{{ $store.state.a.name }}</h4>
    <button @click="updateName">修改名字</button>
    <h4>{{ $store.getters.fullname}}</h4>
    <h4>{{ $store.getters.fullname2}}</h4>
    <h4>{{ $store.getters.fullname3}}</h4>
    <button @click="asyncUpdateName">异步修改名字</button>

    <h2>----App内容: info对象的内容是否是响应式的----</h2>
    <h4>{{ $store.state.info }}</h4>
    <button @click="updateInfo">修改信息</button>

    <h2>----App内容----</h2>
    <h4>counter：{{ $store.state.counter }}</h4>
    <button @click="addition">+</button>
    <button @click="substraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>----App内容: getters相关信息----</h2>
    <h4>counter的平方：{{ $store.getters.powerCounter }}</h4>
    <h4>大于20岁的学生：{{ $store.getters.more20Stu }}</h4>
    <h4>大于20岁的学生人数：{{ $store.getters.more20StuLength }}</h4>
    <h4>大于n岁的学生人数：{{ $store.getters.moreAgeStu(15) }}</h4>

    <h2>----Hello vuex内容----</h2>
    <hello-vuex />
  </div>
</template>

<script>
import HelloVuex from '@/components/HelloVuex'
import { INCREMENT } from './store/mutations-types'
export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
      message: '我是APP组件'
    }
  },
  methods: {
    addition() {
      this.$store.commit(INCREMENT)
    },
    substraction() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      // 普通提交风格
      this.$store.commit('incrementCount', count)
    },
    addStudent() {
      // 特殊的提交风格
      const stu = { id: 114, name: 'aiai', age: 45 }
      // this.$store.commit('addStudent', count)
      this.$store.commit({
        type: 'addStudent',
        stu
      })
    },
    updateInfo() {
      // 使用mutations
      // this.$store.commit('updateInfo')

      // 使用actions
      // 通过参数传递函数来回调成功执行的信息
      // this.$store.dispatch('aUpdateInfo', {
      //   message: '我是携带的信息',
      //   success: () => {
      //     console.log('成功执行')
      //   }
      // })
      
      this.$store
        .dispatch('aUpdateInfo', '我是携带的信息')
        .then(res => {
          console.log(res)
        })
    },
    updateName() {
      this.$store.commit('updateName', 'lisi')
    },
    asyncUpdateName() {
      this.$store.dispatch('aUpdateName', 'lisi')
    }
  }
}
</script>

<style>
</style>
