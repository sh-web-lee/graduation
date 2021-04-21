<template>
  <div class="hezu-list">
      <ul class="house-lists">
          <li
            v-for="list in HezuLists"
            :key="list.id"
            tag="li"
            is="router-link"
            :to="{ path: '/details', query: { id: list.id, detail: list } }"
          >
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
          <a href="#">查看全部合租房源</a>
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
  name: 'HezuList',
  data () {
    return {
      HezuLists: []
    }
  },
  async created () {
    try {
      const res = await getHezuLists()
      // eslint-disable-next-line no-unused-vars
      // const url = this.$route
      this.HezuLists = res.result.slice(0, 8)
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
  justify-content: space-around;
  >a {
    display: block;
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
    border: 1px solid rgba(0,0,0,.12);
    color: rgba(0,0,0,.85);
    margin-bottom: .747rem;
  }
  li {
    // margin-bottom: .747rem;
    margin: 0 .1rem .747rem .1rem;
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
          background-color: rgba(0,0,0,.04);
          border-radius: .053rem;
          font-size: .32rem;
          color: rgba(0,0,0,.4);
          letter-spacing: 0;
          margin-right: .32rem;
          padding: .3rem .3rem;
        }
      }
      h3 {
        padding: .2rem 0 .2rem 0;
      }
    }
  }
}
</style>
