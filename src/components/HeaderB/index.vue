<template>
  <div class="header-b">
      <div class="header_box">
          <div class="header_box_back" v-on:click="goback()">
            <van-icon name="arrow-left" />
          </div>
          <div class="header_box_title" v-html="$route.meta.title"></div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon } from 'vant'

Vue.use(Icon)
export default {
  name: 'HeaderB',
  data () {
    return {

    }
  },
  methods: {
    goback () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.header-b {
    height: 46px;
    width: 100%;
    line-height: 46px;
    border-bottom: 1px solid #f1f1f1;
    .header_box {
        display: flex;
        width: 100%;
        .header_box_back {
          width: 10%;
          margin-left: 3%;
        }
        .header_box_title {
            width: 74%;
            text-align: center;
        }
    }
}
</style>
