<template>
  <div class="add-book">
      <van-cell-group>
        <van-cell title="阿权">
            <!-- 使用 right-icon 插槽来自定义右侧图标 -->
            <template #right-icon>
                <van-icon name="phone-o" class="phone-o" />
            </template>
        </van-cell>
        <van-cell title="浩浩">
            <template #right-icon>
                <van-icon name="phone-o" class="phone-o" />
            </template>
        </van-cell>
        <van-cell title="阿炮">
            <template #right-icon>
                <van-icon name="phone-o" class="phone-o" />
            </template>
        </van-cell>
        <van-cell title="风哥">
            <template #right-icon>
                <van-icon name="phone-o" class="phone-o" />
            </template>
        </van-cell>
        <van-cell title="酥酥">
            <template #right-icon>
                <van-icon name="phone-o" class="phone-o" />
            </template>
        </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import Vue from 'vue'
import { Cell, CellGroup } from 'vant'

Vue.use(Cell)
Vue.use(CellGroup)
export default {
  name: 'AddBook',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
