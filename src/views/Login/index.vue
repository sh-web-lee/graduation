<template>
  <div class="login">
    <div class="log_box">
      <div class="login_logo">
        <van-image
          width="100"
          height="100"
          :src="logo"
        />
      </div>
        <van-form @submit="onSubmit">
            <van-field
                v-model="telephone"
                name="telephone"
                type="tel"
                label="手机号"
                placeholder="手机号"
                :rules="[{ required: true, message: '请正确输入手机号' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="password"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请正确输入密码' }]"
            />
            <div class="forget">
              <!-- <router-link to="register">注册</router-link> -->
              <div></div>
              <router-link to="forgetPassword">忘记密码</router-link>
          </div>
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit" @click="show = true">
                登录
                </van-button>
                <van-overlay :show="show" @click="show = false">
                  <div class="wrapper" @click.stop>
                    <van-loading size="24px">登录中...</van-loading>
                  </div>
                </van-overlay>
            </div>
        </van-form>
      <div class="register">
        <span>还没有密码吗？</span>
        <span class="reslink">
          <router-link to="register">立即注册</router-link>
        </span>
      </div>
      <div class="othersLogin">
          <van-divider>第三方平台登录</van-divider>
          <ul class="otherLog-link">
            <li @click="nowork()">
              <van-image
                round
                width="2rem"
                height="2rem"
                src="https://img01.yzcdn.cn/vant/share-sheet-wechat.png"
              />
              <h5>微信</h5>
            </li>
            <li @click="nowork()">
              <van-image
                round
                width="2rem"
                height="2rem"
                src="https://img01.yzcdn.cn/vant/share-sheet-weibo.png"
              />
              <h5>微博</h5>
            </li>
            <li @click="nowork()">
              <van-image
                round
                width="2rem"
                height="2rem"
                src="https://img01.yzcdn.cn/vant/share-sheet-qq.png"
              />
              <h5 style="margin-top: 2px;">QQ</h5>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { query } from '@/api/user/login'
import { Form, Field, Toast, Image as VanImage, Button, Overlay, Loading } from 'vant'

Vue.use(Form)
Vue.use(Field)
Vue.use(Toast)
Vue.use(VanImage)
Vue.use(Button)
Vue.use(Overlay)
Vue.use(Loading)
export default {
  name: 'Login',
  data () {
    return {
      telephone: '',
      password: '',
      user: [],
      show: false,
      isLogin: 'false',
      logo: require('@/assets/img/login/logo.jpg')
    }
  },
  methods: {
    onSubmit (values) {
      // 根据输入的手机号在leancloud中查询是否存在
      query.equalTo('user', values.telephone)
      query.find().then((students) => {
        if (values.telephone === students[0].attributes.user && values.password === students[0].attributes.password) {
          // store 中修改为登录状态
          this.$store.commit('judgeLogState')
          // 将登录信息储存在 store 中
          this.$store.commit('saveUserinfo', values)
          // Toast.success('登录成功，即将跳转首页')
          setTimeout(() => {
            this.show = false
            this.isLogin = true
            this.$router.push({ path: '/mine', query: { isLogin: this.isLogin } })
          }, 2000)
        } else {
          setTimeout(() => {
            this.show = false
            Toast('用户名或密码错误,请重新输入')
          }, 2000)
        }
        // students 是包含满足条件的 Student 对象的数组
      })
    },
    nowork () {
      Toast('内部升级中...别再点了 ^_^')
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  width: 100%;
    .log_box {
      padding: 0 15px;
    }
    .title{
        margin-top: 20px;
        text-align: center;
    }
    .forget{
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        font-size: 14px;
    }
    .othersLogin{
        margin-top: 30px;
        text-align: center;
        .otherLog-link {
          width: 80%;
          margin: 0 auto;
          display: flex;
          justify-content: space-around;
          font-size: 12px;
        }
    }
}
.register {
  text-align: center;
  font-size: 12px;
  .reslink a {
    color: red;
  }
}
.login_logo {
  width: 100px;
  margin: 20% auto;
}

// 登录加载
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
