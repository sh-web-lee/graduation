<!--
 * @Author: lee
 * @Date: 2021-04-17 18:40:30
 * @LastEditTime: 2021-04-19 00:36:05
 * @FilePath: \app\src\components\Back\index.vue
-->
<template>
  <div class="back">
      <van-nav-bar
        :title="$route.meta.title"
        left-arrow
        fixed
        @click-left="$router.back()"
        />
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant'

Vue.use(NavBar)
export default {
  name: 'Back'
}
</script>

<style>
.back {
  position: fixed;
  background-color: #fff;
  width: 100%;
  z-index: 999;
  height: 46px;
  top: 0;
  color: #666;
}
</style>
