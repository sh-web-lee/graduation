<!--
 * @Author: lee
 * @Date: 2021-04-17 03:19:05
 * @LastEditTime: 2021-04-17 21:21:02
 * @FilePath: \app\src\views\register\index.vue
-->
<template>
  <div class="register">
    <!-- <h1 class="title">注册</h1> -->
    <div class="reg_form">
      <van-form @submit="onSubmit">
          <van-field
              v-model="telephone"
              name="tel"
              type="tel"
              label="手机号"
              placeholder="请输入有效手机号"
              :rules="[{ required: true, message: '请输入有效手机号' }]"
          />
          <van-field
              v-model="password"
              type="password"
              name="pwd"
              label="密码"
              placeholder="密码不少于6位"
              :rules="[{ required: true, message: '请正确输入密码' }]"
          />
          <van-field
              v-model="password"
              type="password"
              name="rePwd"
              label="确认密码"
              placeholder="请再次输入密码"
              :rules="[{ required: true, message: '两次输入密码不一致' }]"
          />
          <div style="margin: 16px;">
              <van-button round block type="info" native-type="submit">
              注册
              </van-button>
          </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Todo, query } from '@/api/user/register'

import { Toast } from 'vant'
export default {
  name: 'Register',
  data () {
    return {
      telephone: '',
      password: '',
      sms: ''
    }
  },
  methods: {
    onSubmit (values) {
      // 构建对象
      const todo = new Todo()
      // 查询是否已存在该注册用户
      query.equalTo('user', values.tel)
      query.find().then((students) => {
        if (students.length > 0) {
          Toast('该用户已注册')
        } else {
          // 为属性赋值
          todo.set('user', values.tel)
          todo.set('password', values.pwd)

          // 将对象保存到云端
          todo.save().then(() => {
            // 成功保存之后，执行其他逻辑
            Toast('注册成功，即将跳转登录界面')
            setTimeout(() => {
              this.$router.push({ path: '/login' })
            }, 2000)
          }, (error) => {
            // 异常处理
            console.log('fail', error)
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.register{
  width: 100%;
  // padding: 10px 15px;
  margin-top: 46px;
  .reg_form {
    padding: 10px 15px;
  }
  .title{
      margin-top: 20px;
      text-align: center;
  }
  .forget{
      display: flex;
      justify-content: space-between;
  }
  .othersLogin{
      margin-top: 80px;
      text-align: center;
  }
}
</style>
