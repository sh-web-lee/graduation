<!--
 * @Author: lee
 * @Date: 2021-04-17 18:49:43
 * @LastEditTime: 2021-04-21 12:29:41
 * @FilePath: \app\src\views\Mine\help.vue
-->
<template>
  <div class="help">
      <van-cell title="用户服务协议" @click="nowork()"/>
      <van-cell title="隐私政策" @click="nowork()"/>
      <van-cell title="资质证照信息" @click="nowork()"/>
      <van-cell title="违法和不良信息举报" @click="nowork()"/>
  </div>
</template>

<script>
import Vue from 'vue'
import { Toast } from 'vant'

Vue.use(Toast)
export default {
  name: 'Help',
  methods: {
    nowork () {
      Toast('功能正在开发中。。。')
    }
  }
}
</script>

<style>
</style>
