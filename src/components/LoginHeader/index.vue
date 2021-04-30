<!--
 * @Author: lee
 * @Date: 2021-04-17 19:13:58
 * @LastEditTime: 2021-04-17 19:23:24
 * @FilePath: \app\src\components\LoginHeader\index.vue
-->
<template>
  <div class="loginHeader">
      <van-nav-bar
        left-arrow
        :title="$route.meta.title"
        :right-text="$route.meta.needReg? '注册':''"
        @click-left="$router.back()"
        @click-right="$router.push({path:'register'})"
      />
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant'

Vue.use(NavBar)
export default {
  name: 'LoginHeader'
}
</script>

<style>

</style>
