/*
 * @Author: lee
 * @Date: 2021-01-16 11:18:19
 * @LastEditTime: 2021-03-25 10:48:22
 * @FilePath: \ziru-demo\src\router\routes.js
 */
import IndexHead from '@/components/Header'
import Navigator from '@/components/Navigator'
import GoBack from '@/components/Goback'
import Back from '@/components/Back'
import HeaderB from '@/components/HeaderB'
// import LoginHeader from '@/components/LoginHeader'

import Login from '@/views/Login'
import ForgetPwd from '@/views/Login/forgetPwd'
import Register from '@/views/Register'
import Index from '@/views/Index'
import MapBaidu from '@/views/MapBaidu'
import ReleaseHouse from '@/views/FabuFZ'
// import Demo from '@/views/Index/demo'
import Mine from '@/views/Mine'
import Setting from '@/views/Mine/setting'
import PersonHomePage from '@/views/Mine/personpage'
import Help from '@/views/Mine/help'
// import Demom from '@/views/Mine/demo'
import Details from '@/views/Details'
import PayStyle from '@/views/Paystyle'
import FindHouse from '@/views/FindHouse'
import FindLife from '@/views/Life'
import Collect from '@/views/Collect'
import OwnerEntrusment from '@/views/OwnerEntrusment'
import Chatting from '@/views/OwnerEntrusment/chatting'

export default [
  // 路由重定向
  {
    path: '/',
    redirect: '/index'
  },
  // 首页
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
      title: '首页',
      icon: 'icon-index-copy',
      index: 1.1
    }
  },
  // 找房
  {
    path: '/findhouse',
    name: 'findhouse',
    components: {
      default: FindHouse,
      footer: Navigator
    },
    meta: {
      isNav: true,
      title: '找房',
      icon: 'icon-faxian',
      index: 1.2
    }
  },
  // 发现生活
  {
    path: '/findlife',
    name: 'findlife',
    components: {
      default: FindLife,
      footer: Navigator
    },
    meta: {
      isNav: true,
      title: '发现生活',
      icon: 'icon-huabankaobei-',
      index: 1.3
    }
  },
  // 聊天
  {
    path: '/ownerentrusment',
    name: 'ownerentrusment',
    components: {
      default: OwnerEntrusment,
      footer: Navigator
    },
    meta: {
      isNav: true,
      title: '聊天',
      icon: 'icon-06',
      index: 1.4
    }
  },
  // 我的
  {
    path: '/mine', // 路径
    name: 'mine', // 命名路由
    components: {
      footer: Navigator,
      default: Mine
    }, // 渲染组件
    meta: {
      isNav: true,
      title: '我的',
      icon: 'icon-wode-copy',
      index: 1.5
    }
  },
  // 设置
  {
    path: '/setting',
    name: 'setting',
    components: {
      header: HeaderB,
      default: Setting
    },
    meta: {
      title: '设置',
      index: 1.6
    }
  },
  // 个人主页
  {
    path: '/personhomepage',
    name: 'personhomepage',
    components: {
      header: HeaderB,
      default: PersonHomePage
    },
    meta: {
      title: '个人主页',
      index: 1.6
    }
  },
  // 帮助中心
  {
    path: '/help',
    name: 'help',
    components: {
      header: HeaderB,
      default: Help
    },
    meta: {
      title: '帮助中心',
      index: 1.6
    }
  },
  // 详情
  {
    path: '/details',
    name: 'details',
    component: Details,
    meta: {
      index: 2
    }
  },
  // 支付方式
  {
    path: '/paystyle',
    name: 'paystyle',
    components: {
      header: GoBack,
      default: PayStyle
    }
    // component: PayStyle
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    components: {
      // header: LoginHeader,
      default: Login
    },
    meta: {
      needReg: true,
      isBack: false,
      index: 1
    }
  },
  // 注册
  {
    path: '/register',
    name: 'register',
    components: {
      header: Back,
      default: Register
    },
    meta: {
      title: '注册',
      index: 2
    }
  },
  // 忘记密码
  {
    path: '/forgetpassword',
    name: 'forgetpassword',
    components: {
      header: HeaderB,
      default: ForgetPwd
    },
    meta: {
      title: '重置密码',
      index: 2
    }
  },
  // 发布房源
  {
    path: '/releasehouse',
    name: 'releasehouse',
    components: {
      header: HeaderB,
      default: ReleaseHouse
    },
    meta: {
      title: '我要出租',
      index: 2
    }
  },
  // 高德地图
  {
    path: '/mapbaidu',
    name: 'mapbaidu',
    components: {
      header: HeaderB,
      default: MapBaidu
    },
    meta: {
      title: '地图',
      index: 2
    }
  },
  {
    path: '/chatting',
    name: 'chatting',
    components: {
      header: HeaderB,
      default: Chatting
    },
    meta: {
      title: '聊天',
      index: '3'
    }
  },
  // 查看收藏
  {
    path: '/collections',
    name: 'collections',
    components: {
      header: HeaderB,
      default: Collect
    },
    meta: {
      title: '我的收藏',
      index: 3
    }
  }
]
