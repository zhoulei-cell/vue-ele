<template>
  <div class="base-nav-bar">
    <div class="left">
      <slot name="left"/>
    </div>
    <div class="middle">
      <slot name="middle"/>
    </div>
    <div class="right">
      <slot name="right"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseNavBar'
}
</script>

<style lang="scss">
  .base-nav-bar{
    position: relative;
    height: 44px;
    color: $color-white;
    .left{
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      padding: 0 10px;
      line-height: 44px;
    }
    .middle{
      height: 100%;
      font-size: 15px;
      text-align: center;
      line-height: 44px;
    }
    .right{
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      padding: 0 10px;
      line-height: 44px;
      font-size: 12px;
    }
  }
</style>
