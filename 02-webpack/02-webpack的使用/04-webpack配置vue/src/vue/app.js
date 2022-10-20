const App = {
  template: `
    <div>
      <h2>{{ message }}</h2>
      <button @click="btnClick">按钮</button>
    </div>
  `,
  data() {
    return {
      message: 'hello vue'
    }
  },
  methods: {
    btnClick() {
      console.log('点击按钮')
    }
  }
}
export default App