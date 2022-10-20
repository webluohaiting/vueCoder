<template>
  <div id="app">
    <!-- 1.通过tag属性，可以改变router-link的最终渲染标签属性 -->
    <!-- 2.通过replace属性，则使用replaceState进行跳转 -->
    <!-- 3.通过active-class属性，可以改变选中时的class名称(可以在routes中linkActiveClass统一改变) -->
    <!-- <router-link to="/home" tag="button" active-class="active">首页</router-link>
    <router-link to="/about" replace>关于</router-link>
    <router-link :to="'/user/' + userId" replace>用户</router-link>
    <router-link :to="{ path: '/profile', query: { name: 'haha', age: 18 } }">档案</router-link> -->

    <!-- 通过代码的方式修改路由vue-router -->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    <!-- include和exclude !!!不能加空格 -->
    <keep-alive exclude="Profile,User">
      <!-- 占位符 -->
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'haha'
    }
  },
  methods: {
    homeClick() {
      // this.$router.push('/home')
      this.$router.replace('/home')
    },
    aboutClick() {
      // this.$router.push('/about')
      this.$router.replace('/about')
    },
    userClick() {
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'haha',
          age: 20
        }
      })
    }
  }
}
</script>

<style>
/* 默认选中时的class */
.router-link-active {
  color: red;
}
.active {
  color: skyblue;
}
</style>
