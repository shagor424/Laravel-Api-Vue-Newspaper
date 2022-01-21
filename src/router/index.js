import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/MainHome.vue'
import Contact from '@/views/pages/single/Contact'
import SinglePost from '@/views/pages/single/SinglePost'
import CategoryBy from '@/views/pages/single/CategoryBy'
import SubCategoryBy from '@/views/pages/single/SubCategoryBy'
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
    path: '/catgory/:category_id',
    name: 'CategoryBy',
    component:CategoryBy,
  },
  {
    path: '/subcatgory/:subcategory_id',
    name: 'SubCategoryBy',
    component:SubCategoryBy,
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
