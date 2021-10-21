import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/MainHome.vue'
import Contact from '@/views/pages/single/Contact'
import SinglePost from '@/views/pages/single/SinglePost'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/contact-us',
    name: 'Contact',
    component:Contact
  },

  {
    path: '/news-details/:post_id',
    name: 'SinglePost',
    component:SinglePost,
  },

  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/pages/single/About')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
