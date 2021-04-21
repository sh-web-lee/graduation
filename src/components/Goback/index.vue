<!--
 * @Author: lee
 * @Date: 2021-03-22 17:38:13
 * @LastEditTime: 2021-03-25 11:29:36
 * @FilePath: \ziru-demo\src\components\Goback\index.vue
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
  <div class="goback">
      <div class="l_back_icon" @click="$router.back()">
        <van-icon name="arrow-left" class="l_icon_l" />
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon } from 'vant'

Vue.use(Icon)
export default {
  name: 'GoBack'
}
</script>

<style lang="scss" scoped>
    .goback {
        padding: 5px 0 0 10px;
        font-size: 22px;
        line-height: 35px;
        height: 30px;
        position: absolute;
        z-index: 999;
        // width: 100%;
        opacity: 0.2;
        .l_back_icon {
            height: 100%;
            width: 30px;
            background-color: grey;
            border-radius: 50%;
            .l_icon_l {
              margin-left: 1px;
            }
        }
    }
</style>
