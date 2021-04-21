/*
 * @Author: lee
 * @Date: 2021-01-16 11:18:19
 * @LastEditTime: 2021-03-25 10:48:22
 * @FilePath: \ziru-demo\src\router\routes.js
 */
import IndexHead from '@/components/Header'
import Navigator from '@/components/Navigator'
import Index from '@/views/Index'
import Mine from '@/views/Mine'
import Details from '@/views/Details'
import PayStyle from '@/views/Paystyle'
import GoBack from '@/components/Goback'

export default [
  // 路由重定向
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index', // 路径
    name: 'index', // 命名路由
    components: {
      header: IndexHead,
      footer: Navigator,
      default: Index
    }, // 渲染组件
    meta: {
      isNav: true,
      title: 'Index'
    }
  },
  {
    path: '/mine', // 路径
    name: 'mine', // 命名路由
    components: {
      footer: Navigator,
      default: Mine
    }, // 渲染组件
    meta: {
      isNav: true,
      title: 'Mine'
    }
  },
  {
    path: '/details',
    name: 'details',
    component: Details
  },
  {
    path: '/paystyle',
    name: 'paystyle',
    components: {
      header: GoBack,
      default: PayStyle
    }
    // component: PayStyle
  }
]
