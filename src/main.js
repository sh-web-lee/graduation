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
// import './assets/iconfont/iconfont.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
