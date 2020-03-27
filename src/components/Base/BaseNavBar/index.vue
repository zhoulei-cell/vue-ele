<template>
  <div class="base-nav-bar">
    <div class="left"></div>
    <div class="middle">
      <slot/>
    </div>
    <div class="right"></div>
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
    .left{
      position: absolute;
      left: 10px;
      height: 100%;
    }
    .middle{
      height: 100%;
      font-size: 15px;
      line-height: 44px;
    }
    .right{
      position: absolute;
      right: 10px;
      height: 100%;
    }
  }
</style>
