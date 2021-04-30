<!--
 * @Author: lee
 * @Date: 2021-04-17 03:19:33
 * @LastEditTime: 2021-04-21 12:27:38
 * @FilePath: \app\src\views\Mine\index.vue
-->
<template>
  <div class="mine">
    <!-- 头部 -->
    <div class="selfinfo" :class="isTenant">
      <div class="mi_head">
        <div class="mi_head_f1">
          <div @click="changeIdentify()" :class="{ 'active' : !this.$store.state.isLogin }">
            <img id="changelogo" src="../../assets/icon/qhht.png" alt="">
            切换身份
          </div>
        </div>
        <div class="mi_head_f2">
          <router-link to="/setting">
            设置
          </router-link>
          <!-- <router-link to="/chat">
            聊天
          </router-link> -->
        </div>
      </div>
      <div class="mi_info">

        <div class="mi_info_f1">
          <!-- 头像 -->
          <div class="info_f1_avatar">
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F91%2Fd9%2F26%2F91d92633e44f49e2ddf6041f393d04e9.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621936113&t=4edb33df8d21938c616a2149006bd9cb" alt="">
          </div>

          <!-- 昵称 -->
          <div class="userinfo">
            <router-link to="/login" class="name" >
              {{ this.$store.state.isLogin ? this.$store.state.userInfo.telephone + '，您好' : '登录/注册' }}
            </router-link>
            <div class="userinfo_tag">
              <span class="vip">{{ isVip ? 'VIP':'非会员'}}</span>
              <span v-if="this.$store.state.isLogin" class="identity">{{ this.$store.state.isTenant ? '租客':'房东'}}</span>
              <!-- <span class="identity">{{ isTenant ? '租客':'房东'}}</span> -->
            </div>
          </div>
        </div>
        <div class="mi_info_f2">
          <!-- 个人主页 -->
          <p @click="topersonhomepage()" :class="{ 'active' : !this.$store.state.isLogin }">
            个人主页
            <van-icon name="arrow" size="16"/>
          </p>
        </div>

      </div>
      <ul class="mi_nav">
        <li :class="{ 'active' : !this.$store.state.isLogin }">
          <router-link to="/collections">
            收藏
          </router-link>
        </li>
        <li @click="nowork()">足迹</li>
        <li @click="nowork()">约看</li>
        <li @click="nowork()">订单</li>
      </ul>
    </div>
    <!-- 上传 -->
    <template v-if="this.$store.state.isTenant === false">
      <div class="upload">
        <div class="up_head">
          <p>发布房源</p>
          <van-icon name="arrow" @click="toreleasehouse()"/>
        </div>
        <div class="up_btn">
          <van-uploader>
            <van-button icon="plus" color="grey" round type="info">上传照片</van-button>
          </van-uploader>
          <h2>快把您的房屋照片放在这里吧</h2>
        </div>
      </div>
    </template>
    <!-- <div class="upload">
      <div class="up_head">
        <p>发布房源</p>
        <van-icon name="arrow" @click="toreleasehouse()"/>
      </div>
      <div class="up_btn">
        <van-uploader>
          <van-button icon="plus" color="grey" round type="info">上传照片</van-button>
        </van-uploader>
        <h2>快把您的房屋照片放在这里吧</h2>
      </div>
    </div> -->

    <!-- 导航栏 -->
    <div class="set">
      <van-cell @click="nowork()" is-link title="消费记录"/>
      <van-cell is-link title="关于Hi 租房"  @click="nowork()"/>
      <router-link to="/help">
        <van-cell is-link title="帮助中心"/>
      </router-link>
      <van-cell is-link title="意见反馈" @click="nowork()"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Cell, CellGroup, Toast, Icon, Button, Uploader, Loading } from 'vant'

Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Uploader)
Vue.use(Loading)
export default {
  name: 'Mine',
  data () {
    return {
      isVip: false,
      isLogin: '',
      isTenant: true
    }
  },
  methods: {
    nowork () {
      Toast('功能正在开发中。。。')
    },
    toreleasehouse () {
      this.$router.push({ path: '/releasehouse' })
    },
    onload () {
      const res = this.$route.query
      if (res.isLogin === 'true') {
        this.isLogin = res.isLogin
      }
    },
    changeIdentify () {
      if (this.$store.state.isLogin === true) {
        let second = 3
        const toast = Toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true,
          message: '切换中...'
        })
        const timer = setInterval(() => {
          second--
          if (second) {
            toast.message = '切换中...'
          } else {
            clearInterval(timer)
            toast.message = '切换完成'
            // 手动清除 Toast
            Toast.clear()
            // this.isTenant = !this.isTenant
            this.$store.commit('judgeIdentify')
          }
        }, 1000)
      } else {
        Toast('请先登录')
      }
    },
    topersonhomepage () {
      if (this.$store.state.isLogin === true) {
        this.$router.push({ path: '/personhomepage' })
      } else {
        Toast('请先登录')
      }
    }
  },
  mounted () {
    this.onload()
  }
}
</script>

<style lang="scss" scoped>
.mine {
  // height: 100%;
  width: 100%;
  padding-bottom: 50px;
}
.selfinfo{
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #fae6cd, #f9f0e1);
  align-items: center;
  justify-content: space-around;
  padding: 0 20px 10px;
  .mi_head {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .mi_head_f1 {
      line-height: 46px;
      font-size: 14px;
      color: #333;
      a {
        color: #444;
      }
    }
    .mi_head_f2 {
      display: flex;
      justify-content: flex-end;
      a {
        display: block;
        background-color: #fff;
        margin: 15px  0 0 15px;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        font-size: 12px;
        text-align: center;
        line-height: 30px;
        color: #000;
      }
    }
  }
  .mi_info {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 0 20px;
    .mi_info_f1 {
      width: 65%;
      display: flex;
      justify-content: space-between;
      .info_f1_avatar {
        width: 80px;
        height: 80px;
        border: 2px solid #fff;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .userinfo {
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .name {
          font-size: 14px;
          color: #444;
        }
        .userinfo_tag {
          display: flex;
          span {
            display: block;
          }
          .vip {
            background-color: #95979c;
            text-align: center;
            border-radius: 15px;
            font-size: 12px;
            padding: 2px 5px;
          }
          .identity {
            background-color: #95979c;
            text-align: center;
            margin-left: 1vw;
            border-radius: 15px;
            font-size: 12px;
            padding: 2px 5px;
          }
        }
      }

    }
    .mi_info_f2 {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      a {
        display: block;
        color: #444;
      }
    }
  }
  .mi_nav {
    margin-top: 25px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 18px;
    text-align: center;
    li {
      width: 20%;
      padding: 5px 3px;
      border-radius: 15px;
      background: linear-gradient(to right, #feb870, #ff9d3f);
      font:18px/14px Georgia, "Times New Roman", Times, serif;
      box-shadow: 0px 4px 18px 0px rgba(4, 0, 0, 0.47);
      a {
        color: #000;
        font:18px/14px Georgia, "Times New Roman", Times, serif;
      }
    }
  }
}
.upload {
  width: 90%;
  height: 150px;
  margin: 20px auto 0;
  background-color: #c8cbd2;
  border-radius: 9px;
  box-shadow: 3px 3px 3px #f2f2f2;
  // padding: 15px 8px 0;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .up_head {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 600;
  }
  .up_btn {
    text-align: center;
    height: 52%;
    h2 {
      font-size: 12px;
      margin-top: 10px;
    }
  }
}
.active {
  opacity: 0.5;
}
</style>
