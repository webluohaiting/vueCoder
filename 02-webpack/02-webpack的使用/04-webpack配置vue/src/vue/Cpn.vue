<template>
  <div>
    <h2>我是cpn组件的标题</h2>
    <p>我是cpn组件的内容，哈哈哈</p>
    <h2>{{ name }}</h2>
    <button @click="btnClick">cpn按钮</button>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      name: 'CPN组件的name'
    }
  },
  methods: {
    btnClick() {
      console.log('点击按钮')
    }
  }
}
</script>
<style scoped>

</style>