<template>
  <div id="main-tab-bar">
    <tab-bar>
      <tab-bar-item v-for="item in tabBarList" :key="item.text" :path="item.path" active-color="#ffa500">
        <img slot="item-icon" :src="item.icon">
        <img slot="item-icon-active" :src="item.activeIcon">
        <div slot="item-text">{{ item.text }}</div>
      </tab-bar-item>
      <!-- <tab-bar-item path="/home" active-color="#ffa500">
        <img slot="item-icon" src="@/assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/home-active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" active-color="#ffa500">
        <img slot="item-icon" src="@/assets/img/tabbar/sort.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/sort-active.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" active-color="#ffa500">
        <img slot="item-icon" src="@/assets/img/tabbar/bookshelf.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/bookshelf-active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" active-color="#ffa500">
        <img slot="item-icon" src="@/assets/img/tabbar/user.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/user-active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item> -->
    </tab-bar>
  </div>
</template>
<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  },
  data() {
    return {
      tabBarList: [
        {
          path: '/home',
          text: '首页',
          icon: require('@/assets/img/tabbar/home.png'),
          activeIcon: require('@/assets/img/tabbar/home-active.png')
        },
        {
          path: '/category',
          text: '分类',
          icon: require('@/assets/img/tabbar/sort.png'),
          activeIcon: require('@/assets/img/tabbar/sort-active.png')
        },
        {
          path: '/cart',
          text: '购物车',
          icon: require('@/assets/img/tabbar/bookshelf.png'),
          activeIcon: require('@/assets/img/tabbar/bookshelf-active.png')
        },
        {
          path: '/profile',
          text: '我的',
          icon: require('@/assets/img/tabbar/user.png'),
          activeIcon: require('@/assets/img/tabbar/user-active.png')
        }
      ]
    }
  }
}
</script>
<style scoped>
</style>
