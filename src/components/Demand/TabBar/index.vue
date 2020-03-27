<template>
  <BaseTabBar>
    <BaseTabBarItem v-for="item in tagArr" :key="item.id" :path="item.path">
      <i :class="['iconfont', item.icon]"></i>
      <span>{{item.text}}</span>
    </BaseTabBarItem>
  </BaseTabBar>
</template>

<script>
import { BaseTabBar, BaseTabBarItem } from 'components/Base'
export default {
  name: 'TabBar',
  components: {
    BaseTabBar,
    BaseTabBarItem
  },
  data: function() {
    return {
      tagArr: [
        {
          id: 1,
          path: '/msite',
          text: '首页',
          icon: 'icon-index-copy'
        },
        {
          id: 2,
          path: '/order',
          text: '订单',
          icon: 'icon-dingdan'
        },
        {
          id: 3,
          path: '/mine',
          text: '我的',
          icon: 'icon-wode'
        }
      ]
    }
  }
}
</script>

<style>

</style>
