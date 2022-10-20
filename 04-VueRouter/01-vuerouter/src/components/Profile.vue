<template>
  <div>
    <h2>我是profile</h2>
    <p>参数名字：{{ $route.query.name }}</p>
    <p>参数年龄：{{ $route.query.age }}</p>
  </div>
</template>
<script>
export default {
  name: 'Profile',
  data() {
    return {
      
    }
  },
  created() {
    console.log('Profile created')
  },
  destoryed() {
    console.log('Profile destoryed')
  },
  methods: {
    
  }
}
</script>
<style scoped>
</style>