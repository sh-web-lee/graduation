<template>
  <div class="collect">
    <ul v-if="this.$store.state.collections.length > 0">
      <li v-for="item in myCollection" :key="item.id">
        <div class="image">
          <img :src="item.detail.houseImg" alt="">
        </div>
        <div class="desc">
          <h1>{{ item.detail.houseName }}<span>公寓</span></h1>
          <h3>{{ item.detail.districtName }}</h3>
          <h3>{{ item.detail.roomDesc }}</h3>
          <h2>{{ item.detail.housePrice }}</h2>
        </div>
      </li>
    </ul>
    <div v-else>暂无收藏</div>
  </div>
</template>

<script>
export default {
  name: 'Collect',
  data () {
    return {
      myCollection: []
    }
  },
  methods: {
    init () {
      this.myCollection = this.$store.state.collections
      console.log(this.myCollection)
    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.collect {
  width: 100%;
  ul {
    li {
      display: flex;
      padding: 5px;
      border-radius: 0 0 15px 15px;
      box-shadow: 0px 4px 18px 0px rgba(4, 0, 0, 0.47);
      .image {
        width: 90%;
        img {
          border-radius: 10px;
          width: 100%;
        }
      }
      .desc {
        margin-left: 5px;
        h1 {
          font-weight: bold;
          padding: 3px 5px 5px 0;
          span {
            color: brown;
          }
        }
        h3 {
          padding: 3px 0;
          color: #666;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        h2 {
          color: #fbbc17;
          margin-top: 5px;
          font-size: 18px;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
