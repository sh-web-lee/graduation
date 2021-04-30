<!--
 * @Author: lee
 * @Date: 2021-04-17 18:53:39
 * @LastEditTime: 2021-04-21 12:31:32
 * @FilePath: \app\src\views\Mine\setting.vue
-->
<template>
  <div class="setting">
    <div class="switchTeam">
        <van-cell center title="护眼模式">
            <template #right-icon>
            <van-switch v-model="eyes" size="24" />
            </template>
        </van-cell>
        <van-cell center title="阅读时不自动锁屏">
            <template #right-icon>
            <van-switch v-model="read" size="24" />
            </template>
        </van-cell>
        <van-cell center title="Wi-Fi下自动下载更新">
            <template #right-icon>
            <van-switch v-model="wifi" size="24" />
            </template>
        </van-cell>
    </div>
    <div class="mesSet">
      <van-cell is-link title="消息通知" @click="nowork()"/>
      <van-cell is-link title="隐私设置" @click="nowork()"/>
    </div>
    <div class="aboutTeam">
        <van-cell is-link @click="isclearPopup" title="清除缓存" value="当前缓存:34.6M"></van-cell>
        <van-cell is-link title="给我们评分" @click="nowork()"/>
        <van-cell is-link title="关于Hi 租房" @click="nowork()"/>
        <div class="logout_btn" v-if="this.$store.state.isLogin === true">
            <van-button plain hairline type="info" :style="{margin:'0 auto'}"  @click="isloginPopup">退出登录</van-button>
        </div>
        <van-popup v-model="isclear" :style="{width: '100%'}" position="bottom">
          <h2 class="clearTitle">清除缓存</h2>
          <p  class="clearBtns">
            <span @click="isclear=false">取消</span>
            <span @click="isclear=false">确定</span>
          </p>
        </van-popup>
        <van-popup v-model="islogin"  :style="{width: '100%'}"  position="bottom">
          <h2 class="clearTitle">退出登录</h2>
          <p  class="clearBtns">
            <span @click="islogin=false">取消</span>
            <span @click="outLogin">确定</span>
          </p>
        </van-popup>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }" />
  </div>
</template>

<script>
import Vue from 'vue'
import { Switch, Cell, ActionSheet, Button, Popup, Toast } from 'vant'

Vue.use(Popup)
Vue.use(Button)
Vue.use(ActionSheet)
Vue.use(Switch)
Vue.use(Cell)
export default {
  name: 'Setting',
  data () {
    return {
      eyes: false,
      read: false,
      wifi: false,
      isclear: false,
      islogin: false,
      show: false
    }
  },
  methods: {
    showPopup () {
      this.show = true
    },
    isclearPopup () {
      this.isclear = true
    },
    isloginPopup () {
      // console.log('show')
      this.islogin = true
    },
    outLogin () {
      this.$store.commit('judgeLogState')
      this.$router.push({ path: '/login' })
    },
    nowork () {
      Toast('功能正在开发中。。。')
    }
  }
}
</script>

<style lang="scss" scoped>
.setting{
  background: #d7d7d7;
  width: 100%;
  .switchTeam{
    margin-bottom: 10px;
  }
  .mesSet{
    margin-bottom: 10px;
  }
  .aboutTeam{
    background: white;
    .logout_btn {
        width: 86px;
        margin: 0 auto;
    }
  }
  .clearTitle{
    // height: 90px;
    text-align: center;
    font-size: 20px;
    line-height: 90px;
    font-weight: bold;
  }
  .clearBtns{
    display: flex;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
    span{
      flex: 1;
      text-align: center;
      cursor: pointer;
    }
  }
}

</style>
