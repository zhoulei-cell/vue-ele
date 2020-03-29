<template>
  <BaseNavBar class="city-nav-bar">
    <template #left>
      <i class="iconfont icon-fanhui" @click="$emit('leftClick')"></i>
    </template>
    <template #middle>
      <span>城市选择</span>
    </template>
  </BaseNavBar>
</template>

<script>
import { BaseNavBar } from 'components/Base'
export default {
  name: 'CityNavBar',
  components: {
    BaseNavBar
  }
}
</script>

<style lang="scss">
  .city-nav-bar{
    background-image: $bg-img-primary;
  }
</style>
