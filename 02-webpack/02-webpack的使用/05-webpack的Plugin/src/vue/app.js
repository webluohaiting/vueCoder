const App = {
  template: `
    <div>
      <h2>{{ msg }}</h2>
      <button @click="btnClick">按钮</button>
    </div>
  `,
  data() {
    return {
      msg: 'hello vue'
    }
  },
  methods: {
    btnClick() {
      console.log('点击按钮123')
    }
  }
}
export default App