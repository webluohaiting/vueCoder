<template>
  <div>
    <h1>{{ msg }}</h1>
    <h4>名字：{{ $store.state.name }}</h4>
    <br>
    <h4>姓名：{{ $store.getters.fullname }}</h4>
    <h4>打招呼：{{ $store.getters.say }}</h4>
    <h4>其他人姓名：{{ $store.getters.othername('lin') }}</h4>
    <br>
    <input type="text" v-model="newAge">
    <button @click="changeAge">改变年龄</button>
    <h4>原30，现在{{ $store.state.age }}</h4>
    <br>
    <button @click="addHeight">新增身高</button>
    <button @click="getScore">获取成绩</button>
    <h4>{{ $store.state }}</h4>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: '-----Home内容测试-----',
      newAge: 30
    }
  },
  methods: {
    changeAge() {
      this.$store.commit('changeAge', this.newAge)
    },
    addHeight() {
      this.$store.commit('addHeight', { key: 'height', value: 180 })
    },
    getScore() {
      this.$store.dispatch('getScore', { score: 50 })
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.error(err)
      })
    }
  }
}
</script>
