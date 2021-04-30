<!--
 * @Author: lee
 * @Date: 2021-04-17 19:58:49
 * @LastEditTime: 2021-04-17 20:02:11
 * @FilePath: \app\src\views\Login\forgetPwd.vue
-->
<template>
  <div class="forgetPassword">
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
            v-model="sms"
            name="code"
            center
            clearable
            label="验证码"
            placeholder="验证码"
            >
            <template #button>
                <van-button size="small" type="primary">获取验证码</van-button>
            </template>
        </van-field>
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
            重置密码
            </van-button>
        </div>
    </van-form>
  </div>
</template>

<script>
import Vue from 'vue'
import { Toast } from 'vant'

Vue.use(Toast)
export default {
  name: 'ForgetPassword',
  data () {
    return {
      telephone: '',
      sms: ''
    }
  },
  methods: {
    onSubmit () {}
  }
}
</script>

<style lang="scss" scoped>
.forgetPassword {
  width: 100%;
}
</style>
