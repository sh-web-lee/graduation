<template>
  <div class="chat">
      <van-cell-group>
        <van-cell title="酥酥" value="未读"  to="chatting" />
        <van-cell title="昊昊" value="" label="***************" />
        <van-cell title="阿权" value="未读" label="***************" />
        <van-cell title="风哥" value="" label="***************" />
        <van-cell title="诗han" value="未读" label="***************" />
        <van-cell title="阿炮" value="" label="***************" />
    </van-cell-group>
  </div>
</template>

<script>
import Vue from 'vue'
import { Cell, CellGroup } from 'vant'

Vue.use(Cell)
Vue.use(CellGroup)
export default {
  name: 'Chat',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
