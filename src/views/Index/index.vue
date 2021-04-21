<template>
  <div class="index">
    <div class="home-banner-wrapper" style="background-image:url(https://webimg.ziroom.com/020607f1-b1e4-47e7-b2f8-fc03a9d435c5.png);">
        <div class="slogan">
          <h1>品质租房选自如</h1>
          <h2>9年，10城，近45万业主、300万自如客的选择</h2>
        </div>
        <div class="search-box v-transfer-dom" id="l_query">
          <div class="search-home-icon"></div>
          <div class="search-box-placeholder">
            <input class="search-input" type="text" placeholder="请输入区域、地铁站、小区名开始找房"></div>
        </div>
      </div>
      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="banner in swipers" :key="banner.id">
          <van-image
            :src="banner.swipeImg"
            width="100vw"
            height="42.5vw"
            fit="cantain"
            lazy-load
            :alt="banner.title"
          >
            <template #loading>
              <van-loading type="spinner" size="20" />
            </template>
          </van-image>
        </van-swipe-item>
      </van-swipe>
      <!-- 分类导航 -->
      <van-grid :border="false" :column-num="4">
        <van-grid-item text="合租" v-for="oprationbar in oprationbars" :key="oprationbar.name">
          <van-image :src="oprationbar.src" />
          <span>{{ oprationbar.name }}</span>
        </van-grid-item>
      </van-grid>
      <!-- 分割线 -->
      <van-divider  :style="{ Bordercolor: '#eaeaea' }"/>
      <!-- 好房推荐 -->
      <div class="recommend-bar-wrapper">
        <div class="recommend-bar-title">好房推荐</div>
          <van-tabs
            v-model="activeName"
            animated
            sticky
            color="#F37335"
            title-active-color="#F37335"
            style="z-index: 999"
          >
            <van-tab title="合租" name="a"><HezuList /></van-tab>
            <van-tab title="整租" name="b"><ZhengzuList /></van-tab>
            <van-tab title="自如寓" name="c"><ZiruList /></van-tab>
          </van-tabs>
      </div>
      <!-- 搜索框 -->
  </div>
</template>

<script>
import Vue from 'vue'
import {
  Swipe,
  SwipeItem,
  Image as VanImage,
  Lazyload,
  Loading,
  Grid,
  GridItem,
  Tab,
  Tabs,
  Divider
} from 'vant'
import HezuList from './Recommendation/hezuList'
import ZhengzuList from './Recommendation/zhengzuList'
import ZiruList from './Recommendation/ziruyu'
import { getSwipers } from '@/api/swipe'

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(VanImage)
Vue.use(Lazyload)
Vue.use(Loading)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Divider)

export default {
  name: 'Index',
  components: {
    HezuList,
    ZhengzuList,
    ZiruList
  },
  data () {
    return {
      swipers: [],
      activeName: 'a',
      oprationbars: [
        {
          name: '合租',
          src: 'https://webimg.ziroom.com/ac4eeb2d-3103-489d-af60-3a7c6e295090.png'
        },
        {
          name: '整租',
          src: 'https://webimg.ziroom.com/d372ba0a-5e0f-4688-a759-5bad59c05f1f.png'
        },
        {
          name: '地铁沿线',
          src: 'https://webimg.ziroom.com/ba8f059c-2d8e-4b56-84b9-2563b65aa62f.png'
        },
        {
          name: '百元好房',
          src: 'https://webimg.ziroom.com/2452acbf-dc9f-4aa6-9166-bed12e9afc2b.png'
        },
        {
          name: '搬家',
          src: 'https://webimg.ziroom.com/b194cd9a-e15c-4cf9-b0ce-a139d533eb8a.png'
        },
        {
          name: '保洁',
          src: 'https://webimg.ziroom.com/0f183ba0-a1a6-47fe-b313-c6122bb8e928.png'
        },
        {
          name: '家修',
          src: 'https://webimg.ziroom.com/396ff9c3-6a69-4500-917a-0318648ba87f.png'
        },
        {
          name: '优品',
          src: 'https://webimg.ziroom.com/fa36eb17-6c0b-4225-9551-32230f7b8970.png'
        }
      ]
    }
  },
  async created () {
    try {
      const result = await getSwipers()
      this.swipers = result.lists
    } catch (error) {
      console.log(error)
    }
  },
  watch: {
    // 页面滚动搜索框变化
    changeSearch: function () {
      const query = document.getElementById('#l_query')
      const height = query.offsetTop()
      console.log(height)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-banner-wrapper {
  height: 6.717rem;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  position: relative;
  padding: .387rem 1.533rem 0;
  .slogan {
    color: #fff;
    h1 {
      font-family: PingFangSC-Medium;
      font-size: 1.64rem;
      letter-spacing: 0;
      line-height: .773rem;
    }
    h2 {
      font-size: .32rem;
      letter-spacing: 0;
      line-height: 2.373rem;
    }
  }
}
.van-grid, .van-hairline--top {
  .van-image {
    width: 48%;
  }
  span {
    margin-top: 5%;
    font-size: .347rem;
    pointer-events: none;
  }
}
.recommend-bar-wrapper {
  margin-top: .66rem;
  padding: 1rem;
}
.recommend-bar-wrapper .recommend-bar-title {
    font-size: 1.533rem;
    color: rgba(0,0,0,.75);
    letter-spacing: 0;
    line-height: 1.533rem;
    margin-bottom: .533rem;
}
.recommend-bar-wrapper .recommend-tab .van-tabs__wrap {
  width: 50%;
}
.search-box {
    position: absolute;
    top: 5.8rem;
    width: 90%;
    height: 48px;
    left: 0;
    right: 0;
    margin-right: auto;
    margin-left: auto;
    z-index: 666;
    background-color: #fff;
    border-radius: .307rem;
    display: flex;
    align-items: center;
    color: rgba(0,0,0,.6);
    padding: 0 .427rem;
    transition-duration: .1s;
    transition-timing-function: linear;
    .search-box-placeholder {
      width: 100%;
      .search-input {
        width: 100%;
        border: none;
      }
    }
}
</style>
