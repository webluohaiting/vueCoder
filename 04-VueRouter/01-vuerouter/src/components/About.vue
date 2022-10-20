<template>
  <div>
    <h2>我是关于</h2>
    <p>我是关于内容，呵呵呵</p>
  </div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      
    }
   },
  created() {
    console.log('About created')
    // document.title = '关于'
  },
  destoryed() {
    console.log('About destoryed')
  },
  methods: {
    
  }
}
</script>
<style scoped>
</style>