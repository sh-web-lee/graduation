<!--
 * @Author: lee
 * @Date: 2021-04-17 23:37:03
 * @LastEditTime: 2021-04-17 23:44:02
 * @FilePath: \app\src\views\Mine\editInfo.vue
-->
<template>
  <div class="editInfo">
      <van-cell title="头像" :style="{'line-height':'50px'}">
        <template #right-icon>
          <van-image round width="50" height="50" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F91%2Fd9%2F26%2F91d92633e44f49e2ddf6041f393d04e9.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621936113&t=4edb33df8d21938c616a2149006bd9cb" />
        </template>
      </van-cell>
      <van-field
        :value="username"
        label="昵称"
        input-align="right"
        @change="changeName"
      />
      <van-cell title="ID" value="218634" readonly/>
      <van-cell title="手机号" is-link value="未绑定" @click="nowork()"/>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'EditInfo',
  data () {
    return {
      username: this.$store.state.userInfo.telephone,
      pwd: this.$store.state.userInfo.password
    }
  },
  methods: {
    changeName (e) {
      console.log(e.target.value)
      this.$store.commit('modifyUsername', e.target.value)
    },
    nowork () {
      Toast('暂时不能绑定手机号哦 ^_^')
    }
  }
}
</script>

<style>
.editInfo {
  width: 100%;
}
</style>
