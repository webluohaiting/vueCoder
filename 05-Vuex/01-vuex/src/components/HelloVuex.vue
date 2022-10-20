<template>
  <div>
    <h4>counter: {{ $store.state.counter }}</h4>
    <h4>大于20岁的学生：{{ $store.getters.more20Stu }}</h4>
  </div>
</template>
<script>
export default {
  name: 'HelloVuex',
  // props: {
  //   counter: Number
  // },
  data() {
    return {
      
    }
  },
  created() {
    
  },
  methods: {
    
  }
}
</script>
<style scoped>
</style>
