<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <button @click="btnClick">按钮</button>
    <Cpn />
  </div>
</template>
<script>
import Cpn from './Cpn'
export default {
  name: 'app',
  data() {
    return {
      message: 'hello vue'
    }
  },
  components: {
    Cpn
  },
  methods: {
    btnClick() {
      console.log('点击按钮')
    }
  }
}
</script>
<style scoped>
.title {
  color: green;
}
</style>