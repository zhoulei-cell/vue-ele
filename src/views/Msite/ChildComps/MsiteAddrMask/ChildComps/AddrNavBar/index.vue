<template>
  <BaseNavBar class="addr-nav-bar">
    <template #left>
      <i class="iconfont icon-fanhui" @click="$emit('leftClick')"></i>
    </template>
    <template #middle>
      <span>选择收货地址</span>
    </template>
    <template #right>
      <span>新增地址</span>
    </template>
  </BaseNavBar>
</template>

<script>
import { BaseNavBar } from 'components/Base'
export default {
  name: 'AddrNavBar',
  components: {
    BaseNavBar
  }
}
</script>

<style lang="scss">
  .addr-nav-bar{
    background-image: $bg-img-primary;
  }
</style>
