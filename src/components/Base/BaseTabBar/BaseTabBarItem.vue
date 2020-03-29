<template>
  <router-link class="tab-bar-item" :to="path">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'BaseTabBarItem',
  props: {
    path: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .tab-bar-item{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: $color-primary-light-6;
    font-size: 12px;
    &.router-link-active{
      color: $color-primary;
    }
    .iconfont{
      font-size: 18px;
    }
  }
</style>
