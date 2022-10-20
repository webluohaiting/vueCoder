<template>
  <div>
    <h1>{{ msg }}</h1>
    <h4>{{ $store.state.demoA.name }}</h4>
    <h4>{{ $store.getters.afullname }}</h4>
    <button @click="changeName">改变名字</button>
    <button @click="getWeight">获取体重</button>
    <h4>{{ $store.state.demoA }}</h4>
  </div>
</template>

<script>
export default {
  name: 'HomeChild',
  data () {
    return {
      msg: '-----HomeChild内容测试-----'
    }
  },
  methods: {
    changeName() {
      this.$store.commit('changeName', '花花')
    },
    getWeight() {
      this.$store.dispatch('getWeight')
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.error(err)
      })
    }
  }
}
</script>