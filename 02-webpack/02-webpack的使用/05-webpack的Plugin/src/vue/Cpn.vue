<template>
  <div>
    <h2 class="title">{{ msg }}</h2>
    <button @click="btnClick">Cpn按钮</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'hello Cpn'
    }
  },
  methods: {
    btnClick() {
      console.log('点击按钮Cpn')
    }
  }
}
</script>
<style scoped>
.title {
  color: green;
}
</style>