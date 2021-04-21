<template>
  <div class="zhengzu-list">
      <ul class="house-lists">
          <li v-for="list in HezuLists" :key="list.id">
              <a href="#">
                  <img :src="list.houseImg" alt="">
                  <h3 class="house-lists-name">{{ list.houseName }}</h3>
                  <h3 class="house-lists-districtname">{{ list.districtName }}</h3>
                  <h3 class="house-lists-price">{{ list.housePrice }}</h3>
                  <div class="house-tags">
                      <div>{{ list.houseTags.tagsA }}</div>
                      <div>{{ list.houseTags.tagsB }}</div>
                  </div>
              </a>
          </li>
      </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { Card, Tag } from 'vant'
import { getHezuLists } from '@/api/Recommendation/hezulist'

Vue.use(Card)
Vue.use(Tag)
export default {
  name: 'ZhengzuList',
  data () {
    return {
      HezuLists: []
    }
  },
  async created () {
    try {
      const res = await getHezuLists()
      this.HezuLists = res.result.slice(0, 13)
    } catch (error) {
      console.log('错误:', error)
    }
  }
}
</script>

<style lang="scss" scoped>
.house-lists {
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
  justify-content: space-between;
  li {
    margin: 0 .3rem .747rem .3rem;
    overflow: hidden;
    white-space: nowrap;
    a {
      display: block;
      img {
        width: 100%;
        display: block;
        box-sizing: border-box;
      }
      .house-lists-name {
        font-family: PingFangSC-Medium;
        color: rgba(0,0,0,.85);
        letter-spacing: 0;
        margin-top: .32rem;
        margin-bottom: .16rem;
        overflow: hidden;
        text-overflow: ellipsis
      }
      .house-lists-districtname {
        font-size: .32rem;
        color: rgba(0,0,0,.6);
        letter-spacing: 0;
        margin-bottom: .213rem;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .house-lists-price {
        font-family: PingFangSC-Medium;
        font-size: .8rem;
        color: #ff961e;
        letter-spacing: 0;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .house-tags {
        display: flex;
        margin-top: .16rem;
        div {
          flex: 0 0 1.6rem;
          line-height: 1;
          text-align: center;
          background-color: rgba(0,0,0,.03);
          border-radius: .053rem;
          font-size: .32rem;
          color: rgba(0,0,0,.4);
          letter-spacing: 0;
          margin-right: .32rem;
          padding: .133rem .16rem;
        }
      }
      h3 {
        padding: .2rem 0 .2rem 0;
      }
    }
  }
}
</style>
