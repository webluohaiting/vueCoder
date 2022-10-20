<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息，嘿嘿嘿</p>
    <h2>computed参数：{{ userId }}</h2>
    <h2>mustache参数：{{ $route.params.userId }}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{ message }}</h2>
  </div>
</template>
<script>
export default {
  name: 'User',
  data() {
    return {
      message: 'haha'
    }
  },
  computed: {
    userId() {
      return this.$route.params.userId
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // console.log('beforeRouteEnter', vm)
    })
  },
  beforeRouteUpdate(to, from) {
    console.log('准备更新')
  },
  // beforeRouteLeave(to, from, next) {
  //   const res = window.confirm('确定离开吗？')
  //   if (!res) return false
  //   else next()
  // },
  created() {
    console.log('User created')
    // document.title = '用户'
  },
  destoryed() {
    console.log('User destoryed')
  },
  methods: {
    btnClick() {
      // console.log(this.$router, this.$route)
      this.test()
      console.log(this.name)
      this.message = 'heihei'
    }
  }
}
</script>
<style scoped>
</style>