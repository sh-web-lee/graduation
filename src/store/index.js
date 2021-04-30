import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 登录状态
    isLogin: false,
    // 租客 / 房东
    isTenant: true,
    // 我的收藏
    collections: [],
    // 登录用户信息
    userInfo: []
  },
  mutations: {
    // 判断登录状态
    judgeLogState (state) {
      state.isLogin = !state.isLogin
    },
    // 判断身份：租客 OR 房东
    judgeIdentify (state) {
      state.isTenant = !state.isTenant
    },
    // 收藏方法
    handlersave (state, detail) {
      state.collections.push(detail)
    },
    // 保存用户信息
    saveUserinfo (state, mes) {
      state.userInfo = mes
    },
    // 修改用户名
    modifyUsername (state, mes) {
      state.userInfo.telephone = mes
    }
  },
  actions: {
  },
  modules: {
  }
})
