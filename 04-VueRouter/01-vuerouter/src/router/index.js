// 配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// 普通导入不是懒加载
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// 路由懒加载
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

// 1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 2.创建路由对象
const routes = [
  {
    path: '/', // 加/或者不加都可以
    // 重定向路径
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      // {
      //   path: '/', // 加/或者不加都可以
      //   redirect: 'news' // 不需要加/
      // },
      {
        path: 'news', // 不需要加/
        component: HomeNews
      },
      {
        path: 'message', // 不需要加/
        component: HomeMessage
      },
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      // console.log('about beforeEnter')
      next()
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
]
const router = new VueRouter({
  // 配置路由和组件之间的映射关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

// 全局路由导航守卫
// 前置钩子（hook）
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  // console.log('+++++beforeEach')
  document.title = to.matched[0].meta.title
  next()
})

router.afterEach((to, from) => {
  // console.log('----afterEach')
})

// 3.将router对象传入vue实例中
export default router