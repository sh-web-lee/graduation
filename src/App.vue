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
      <router-view name="header"/>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <router-view name="footer"/>
    </footer>
  </div>
</template>
<script>
export default {
}
</script>
<style>
html,body,#app {
  height: 100%;
  }
  .index-head {
    text-align: center;
    height: 44px;
    line-height: 50px;
    background-color: #eaeaea;
    /* color: #fff; */
  }
  #app {
    display: flex;
    flex-direction: column;
  }
  main {
    flex: 1;
    overflow: auto;
  }
</style>
