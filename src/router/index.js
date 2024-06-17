import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Category from '@/views/Category/index.vue'
import Home from '@/views/Home/index.vue'
import SubCate from '@/views/SubCate/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import CheckOut from '@/views/checkOut/index.vue'
import Member from '@/views/Member/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: Layout,
      children: [
        {
          path:'',
          component:Home
        },
        {
          path:'category/:id',
          component:Category
        },
        {
          path:'category/sub/:id',
          component:SubCate
        },
        {
          path:'/detail/:id',
          component:Detail
        },
        {
          path:'cart',
          component:CartList
        },
        {
          path:'checkout',
          component:CheckOut
        },
        {
          path:'pay',
          component:()=>import('@/views/Pay/index.vue')
        },
        {
          path:'paycallback',
          component:()=>import('@/views/Pay/PayBack.vue')
        },
        {
          path:'member',
          component:Member,
          //三级路由
           children: [
            {
              path:'',
              component:()=>import('@/views/Member/components/UserInfo.vue')
            },
            {
              path:'order',
              component:()=>import('@/views/Member/components/UserPay.vue')
            },
           ]
        }
      ]
      //   {
      //     path:'/about',
      //     name:'About',
      //     component: () => import('@/views/About.vue')
      //   },
      //   {
      //     path:'/contact',
      //     name:'Contact',
      //     component: () => import('@/views/Contact.vue')
      //   },
      // ]
    },
    {
      path:'/login',
      component: Login,
    }

  ],
  scrollBehavior(){
    return { top: 0}
  }
})

export default router
