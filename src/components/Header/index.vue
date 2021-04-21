<template>
  <div class="index-head">
    <div class="city-name">
      成都
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.index-head {
    display: flex;
    .city-name {
      width: 20%;
      font-size: .347rem;
    }
    .other-station {
      width: 100%;
      .check-identity {
        margin-left: 20%;
        position: relative;
        z-index: 999;
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
