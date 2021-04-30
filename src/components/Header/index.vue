<template>
  <div class="index-head">
    <div class="city-name">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>
    </div>
    <div class="other-station">
      <ul class="check-identity">
        <li is="router-link" tag="li" v-for="identity in identities" :key="identity.id" :to="identity.path">
          <span>{{ identity.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { DropdownMenu, DropdownItem } from 'vant'

Vue.use(DropdownMenu)
Vue.use(DropdownItem)
export default {
  name: 'IndexHead',
  data () {
    return {
      identities: [
        {
          id: 1,
          name: '租客',
          path: '/index'
        },
        {
          id: 2,
          name: '房东',
          path: '/mine'
        }
      ],
      value1: 0,
      value2: 'a',
      option1: [
        { text: '成都', value: 0 },
        { text: '北京', value: 1 },
        { text: '上海', value: 2 }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.index-head {
    display: flex;
    line-height: 46px;
    .city-name {
      width: 20%;
      font-size: .347rem;
    }
    .other-station {
      width: 100%;
      .check-identity {
        margin-left: 20%;
        position: relative;
        z-index: 5;
        display: flex;
        li {
          margin-left: 10%;
          a {
            color: #333;
          }
          .router-link-exact-active, .router-link-active {
            color: #F37335;
            border-bottom-color: #F37335;
          }
        }
      }
    }
}
</style>
