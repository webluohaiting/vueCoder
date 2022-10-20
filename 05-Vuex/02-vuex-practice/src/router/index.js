import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/components/Home')
const HomeChild = () => import('@/components/HomeChild')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'homeChild'
      },
      {
        path: 'homeChild',
        component: HomeChild
      }
    ]
  }
]

export default new VueRouter({
  routes
})
