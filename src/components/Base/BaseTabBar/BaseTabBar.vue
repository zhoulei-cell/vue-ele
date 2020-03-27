<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseTabBar'
}
</script>

<style lang="scss">
  .tab-bar{
    display: flex;
    flex-direction: row;
    height: 49px;
    border-top: 1px solid #ccc;
  }
</style>
