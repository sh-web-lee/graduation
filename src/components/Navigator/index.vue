<template>
  <ul class="navigator">
      <li is="router-link" tag="li" v-for="nav in navs" :key="nav.path" :to="nav.path">
          <span></span>
          <span class="iconfont" :class="nav.meta.icon"></span>
          <span>{{ nav.meta.title }}</span>
      </li>
  </ul>
</template>

<script>
import routes from '@/router/routes'
export default {
  name: 'Navigator',
  computed: {
    navs () {
      return routes.filter(route => route.meta && route.meta.isNav)
    }
  }
}
</script>

<style lang="scss" scoped>
.navigator {
    display: flex;
    height: 54px;
    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      border-top: 1px solid #eaeaea;
      font-size: 12px;
      color: #c1bcbd;
    }
    .router-link-exact-active, .router-link-active {
      color: #feb044;
    }
  }
</style>
