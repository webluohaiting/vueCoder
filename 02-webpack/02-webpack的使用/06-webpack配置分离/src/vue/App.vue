<template>
  <div>
    <h2>{{ msg }}</h2>
    <button @click="btnClick">按钮App</button>
    <Cpn />
  </div>
</template>
<script>
import Cpn from './Cpn'
export default {
  data() {
    return {
      msg: 'hello App'
    }
  },
  components: {
    Cpn
  },
  methods: {
    btnClick() {
      console.log('点击按钮App')
    }
  }
}
</script>
