<template>
  <div class="owner-entrusment">
    <div class="head">
      <div class="head_box">
        <van-tabs v-model="active" color="#fbbc17" animated>
          <van-tab title="通讯录"><AddBook /></van-tab>
          <van-tab title="聊天"><Chat /></van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="main"></div>
  </div>
</template>

<script>
import Chat from './chat'
import AddBook from './addbook'
import Vue from 'vue'
import { Tab, Tabs } from 'vant'

Vue.use(Tab)
Vue.use(Tabs)
export default {
  name: 'OwnerEntrusment',
  components: {
    Chat,
    AddBook
  },
  data () {
    return {
      active: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.owner-entrusment {
  width: 100%;
  .head {
    height: 46px;
    border-bottom: 3px solid #f1f1f1;
    position: fixed;
    width: 100%;
  }
}
</style>
