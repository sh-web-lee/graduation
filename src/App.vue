<!--
 * @Author: lee
 * @Date: 2021-01-16 11:08:40
 * @LastEditTime: 2021-03-22 17:38:44
 * @FilePath: \ziru-demo\src\App.vue
-->
<!--
 *                        .::::.
 *                      .::::::::.
 *                     :::::::::::
 *                  ..:::::::::::'
 *               '::::::::::::'
 *                 .::::::::::
 *            '::::::::::::::..
 *                 ..::::::::::::.
 *               ``::::::::::::::::
 *                ::::``:::::::::'        .:::.
 *               ::::'   ':::::'       .::::::::.
 *             .::::'      ::::     .:::::::'::::.
 *            .:::'       :::::  .:::::::::' ':::::.
 *           .::'        :::::.:::::::::'      ':::::.
 *          .::'         ::::::::::::::'         ``::::.
 *      ...:::           ::::::::::::'              ``::.
 *     ````':.          ':::::::::'                  ::::..
 *                        '.:::::'                    ':'````..
 -->

<template>
  <div id="app">
    <header>
      <router-view name="header"></router-view>
    </header>
      <main>
        <transition :name="transitionName">
          <router-view></router-view>
        </transition>
      </main>
    <footer>
      <router-view name="footer"></router-view>
    </footer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      transitionName: ''
    }
  },
  watch: { // 使用watch 监听$router的变化
    $route (to, from) {
      // console.log(to.path, from.path)
      // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        // 设置动画名称
        this.transitionName = 'slideTo-left'
        // console.log(this.transitionName)
      } else {
        this.transitionName = 'slideTo-right'
        // console.log(this.transitionName)
      }
    }
  }
}
</script>
<style>
html,body,#app {
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;
  overflow: auto;
  /* width: 100%; */
}
footer {
  background-color: #fff;
}
  /* 页面跳转动画 */
.slideTo-right-enter-active, .slideTo-right-leave-active, .slideTo-left-enter-active, .slideTo-left-leave-active {
  will-change: transform;
  transition: all 400ms;
  position: absolute;
}
.slideTo-right-enter {
  opacity: 0;
  transform: translateX(-100%);
}
.slideTo-right-leave {
  opacity: 0;
  transform: translateX(-100%);
}
.slideTo-right-leave-active {
  opacity: 1;
  transform: translateX(100%);
}
.slideTo-left-enter {
  opacity: 0;
  transform: translateX(100%);
}
.slideTo-left-leave-active {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
