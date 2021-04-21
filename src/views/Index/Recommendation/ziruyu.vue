<template>
  <div class="ziru-list">
      <ul class="house-lists-zyu">
          <li v-for="list in ziruList" :key="list.id">
            <a href="#">
                <img :src="list.ziruImg" alt="">
                <div class="zyu-desc">
                    <div>
                        <h3 class="house-lists-zyu-proName">{{ list.ziruproName }}</h3>
                        <h3 class="house-lists-zyu-price">
                            ￥{{ list.ziruPrice }}
                            <span></span>
                        </h3>
                    </div>
                    <p>{{ list.ziruTags }}</p>
                </div>
            </a>
          </li>
      </ul>
  </div>
</template>

<script>
import { getZiruList } from '@/api/Recommendation/zirulist'
export default {
  name: 'ZiruList',
  data () {
    return {
      ziruList: []
    }
  },
  async created () {
    try {
      const res = await getZiruList()
      this.ziruList = res.list
    } catch (error) {
      console.log('错误：', error)
    }
  }
}
</script>

<style lang="scss" scoped>
  .house-lists-zyu {
      margin-top: 5px;
    li {
        width: 100%;
        background-color: #fff;
        border: 1px solid rgba(0,0,0,.12);
        box-shadow: 0 0.053rem 0.267rem 0 rgba(0,0,0,.08);
        border-radius: .053rem;
        margin-bottom: 1.333rem;
        box-sizing: border-box;
        a {
            display: block;
            img {
                display: block;
                width: 100%;
            }
            .zyu-desc {
                padding: .4rem .4rem .533rem;
                div {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin: .6rem 0;
                    .house-lists-zyu-proName {
                        font-family: Arial, Helvetica, sans-serif;
                        font-size: 1.453rem;
                        color: rgba(0,0,0,.85);
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                    .house-lists-zyu-price {
                        font-family: PingFangSC-Semibold;
                        font-size: 1.1rem;
                        color: #ff961e;
                        letter-spacing: 0;
                        white-space: nowrap;
                        span {
                            font-size: .32rem;
                        }
                    }
                }
                p {
                    font-family: PingFangSC-Regular;
                    font-size: .9rem;
                    color: rgba(0,0,0,.6);
                    letter-spacing: 0;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    margin: .4rem 0;
                }
            }
        }
    }
  }
</style>
