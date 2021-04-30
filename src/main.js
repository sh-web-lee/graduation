/*
 * @Author: lee
 * @Date: 2021-01-16 11:08:40
 * @LastEditTime: 2021-03-24 16:48:26
 * @FilePath: \ziru-demo\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/reset.scss'
import './assets/common.scss'
import './assets/iconfont/iconfont.css'

// 高德地图
import AMap from 'vue-amap'
Vue.use(AMap)

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德key
  key: '9fd014bd3d0447cbf516b0e8c0712f5a',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geolocation']
})

// 百度地图API
// import 'http://api.map.baidu.com/api?v=3.0&ak=WlrHwZlDnKQXvGUZ9XeN7BX5TC8BELTW"'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
