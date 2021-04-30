<!--
 * @Author: lee
 * @Date: 2021-03-22 17:38:13
 * @LastEditTime: 2021-03-25 11:29:36
 * @FilePath: \ziru-demo\src\components\Goback\index.vue
-->
<!--
 *                        .::::.
 *                      .::::::::.
 *                     :::::::::::
 *                  ..:::::::::::'
 *               '::::::::::::'
 *                 .::::::::::
 *            '::::::::::::::..
 *                 ..::::::::::::.
 *               ``::::::::::::::::
 *                ::::``:::::::::'        .:::.
 *               ::::'   ':::::'       .::::::::.
 *             .::::'      ::::     .:::::::'::::.
 *            .:::'       :::::  .:::::::::' ':::::.
 *           .::'        :::::.:::::::::'      ':::::.
 *          .::'         ::::::::::::::'         ``::::.
 *      ...:::           ::::::::::::'              ``::.
 *     ````':.          ':::::::::'                  ::::..
 *                        '.:::::'                    ':'````..
 -->

<template>
  <div class="goback">
      <div class="l_back_icon" @click="$router.back()">
        <van-icon name="arrow-left" class="l_icon_l" />
      </div>
      <div class="store-icon">
        <div class="store" @click="save()">
          <van-icon name="star-o" v-if="!showStar"  class="l_icon_save"/>
          <van-icon name="star" v-if="showStar" />
        </div>
        <div class="share" @click="showShare = true">
          <van-icon name="share-o"/>
        </div>
      </div>
      <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
        @select="onSelect"
      />
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon, ShareSheet, Toast } from 'vant'

Vue.use(Icon)
Vue.use(ShareSheet)
export default {
  name: 'GoBack',
  data () {
    return {
      showShare: false,
      showStar: false,
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' }
      ]
    }
  },
  methods: {
    save () {
      if (this.$store.state.isLogin === true) {
        this.showStar = !this.showStar
        console.log(this.$route)
        if (this.showStar) {
          setTimeout(() => {
            this.$store.commit('handlersave', this.$route.query)
          }, 2000)
          Toast.success('收藏成功,可进入我的收藏页面查看')
        } else {
          Toast.fail('取消收藏')
        }
      } else {
        Toast('请先登录')
        const toast = Toast({
          duration: 0, // 持续展示 toast
          forbidClick: true,
          message: '请先登录'
        })

        let second = 3
        const timer = setInterval(() => {
          second--
          if (second) {
            toast.message = '请先登录'
          } else {
            clearInterval(timer)
            // 手动清除 Toast
            Toast.clear()
            this.$router.push({ path: '/login' })
          }
        }, 1000)
      }
    },
    onSelect (option) {
      Toast(option.name)
      this.showShare = false
    }
  }
}
</script>

<style lang="scss" scoped>
.goback {
    padding: 5px 0 0 10px;
    font-size: 22px;
    line-height: 35px;
    height: 30px;
    position: absolute;
    z-index: 999;
    width: 94%;
    display: flex;
    justify-content: space-between;
    // opacity: 0.2;
    .l_back_icon {
        height: 100%;
        width: 30px;
        background-color: grey;
        border-radius: 50%;
        .l_icon_l {
          margin-left: 1px;
        }
    }
    .store-icon {
      display: flex;
    }
}
.store {
  margin-right: 8px;
}
</style>
