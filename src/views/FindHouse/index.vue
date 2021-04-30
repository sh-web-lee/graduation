<template>
  <div class="find-house">
    <div class="hou_f1">
      <van-button plain type="primary" to="/mapbaidu">地图找房</van-button>
      <van-button plain type="info">通勤找房</van-button>
    </div>
    <van-divider />
    <div class="hou_f2">
      <div class="dropmenu1">
        <van-dropdown-menu active-color="#fbbc17">
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
      </div>
      <div class="dropmenu2">
        <van-dropdown-menu active-color="#fbbc17">
          <van-dropdown-item v-model="value1" :options="option2" />
        </van-dropdown-menu>
      </div>
      <div class="dropmenu3">
        <van-dropdown-menu active-color="#fbbc17">
          <van-dropdown-item v-model="value1" :options="option3" />
        </van-dropdown-menu>
      </div>
      <div class="dropmenu4">
        <van-dropdown-menu active-color="#fbbc17">
          <van-dropdown-item v-model="value1" :options="option4" />
        </van-dropdown-menu>
      </div>
    </div>
    <div class="hou_f3">
      <van-tag round  size="medium" color="#ffe1e1" text-color="#ad0000"  type="primary">Hi 租房HOME</van-tag>
      <van-tag round  size="medium"  type="success">智能生活</van-tag>
      <van-tag round  size="medium"  type="danger">精选业主直租</van-tag>
      <van-tag round  size="medium"  color="#7232dd">非首次出租</van-tag>
    </div>
    <div class="hou_f4">
      <ul>
        <li v-for="item in houseResources" :key="item.id">
          <div class="f4_img">
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F91%2Fd9%2F26%2F91d92633e44f49e2ddf6041f393d04e9.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621936113&t=4edb33df8d21938c616a2149006bd9cb" alt="">
          </div>
          <div class="f4_desc">
            <div class="desc_title"><h1>{{ item.Communityname + '-' + item.type }}</h1></div>
            <div class="desc_label"><h3>{{ item.CommunityAdvantage }}</h3></div>
            <div class="desc_param"><h3>{{ item.City }}</h3></div>
            <div class="desc_price">{{ '￥' + item.Price + '/月'}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { query } from '@/api/House/release'
import Vue from 'vue'
import { Button, DropdownMenu, DropdownItem, Tag, Divider } from 'vant'

Vue.use(Button)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tag)
Vue.use(Divider)
export default {
  name: 'FindHouse',
  data () {
    return {
      mapfind: require('../../assets/img/findhouse/btnbgd (1).png'),
      timefind: require('../../assets/img/findhouse/btnbgd (2).png'),
      value1: 0,
      option1: [
        { text: '位置', value: 0 }
      ],
      option2: [
        { text: '户型', value: 0 }
      ],
      option3: [
        { text: '租金', value: 0 }
      ],
      option4: [
        { text: '筛选', value: 0 }
      ],
      houseResources: [
        {
          Communityname: '合租·蓝光锦绣城四期3居室-西南卧',
          CommunityImage: '',
          CommunityAdvantage: '16.3 | 23/32层 | 朝西南',
          Price: '1190元',
          City: '小区距成语李健站步行1462米',
          type: ''
        }
      ]
    }
  },
  methods: {
    load () {
      query.equalTo('isexist', true)
      query.find().then((students) => {
        // students 是包含满足条件的 Student 对象的数组
        students.forEach(item => {
          this.houseResources.push(item.attributes)
        })
      })
    }
  },
  created () {
    this.load()
  }
}
</script>

<style lang="scss" scoped>
.find-house {
  width: 100%;
  .hou_f1 {
    padding: 5vw 10vw 0;
    display: flex;
    justify-content: space-around;
  }
  .hou_f2 {
    display: flex;
    justify-content: space-around;
  }
  .hou_f3 {
    display: flex;
    justify-content: space-around;
    padding: 3vw 0;
  }
  .hou_f4 {
    ul {
      li {
        padding: 2vw;
        display: flex;
        justify-content: space-between;
        .f4_img {
          width: 30%;
          img {
            width: 100%;
          }
        }
        .f4_desc {
          display: flex;
          width: 65%;
          flex-direction: column;
          justify-content: space-around;
          .desc_title {
          }
          .desc_label {
            color: #666;
          }
          .desc_param {
            font-size: 2vw;
          }
          .desc_price {
            color: #fbbc17;
          }
        }
      }
    }
  }
}
</style>
