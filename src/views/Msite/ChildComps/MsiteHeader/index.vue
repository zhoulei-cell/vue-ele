<template>
  <div class="msite-header">
    <div class="address-box" @click="$emit('click')">
      <i class="iconfont icon-weizhi"></i>
      <span>{{formattedAddress}}</span>
      <i class="iconfont icon-xiajiantou1"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MsiteHeader',
  props: {
    formattedAddress: String
  }
}
</script>

<style lang="scss">
  .msite-header{
    padding: 10px 0 0px 15px;
    background-image: $bg-img-primary;
    .address-box{
      padding-top: 5px;
      color: $color-white;
      font-size: 15px;
      span{
        padding: 0 3px;
      }
    }
  }
</style>
