<template>
  <div class="addr-location">
    <h3 class="addr-info-title">当前定位</h3>
    <div class="addr-info-desc">
      <i class="iconfont icon-dingwei3"></i>
      <span>{{formattedAddress}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddrLocation',
  props: {
    formattedAddress: String
  }
}
</script>

<style lang="scss">
  .addr-location{
    background-color: $color-white;
    padding-left: 10px;
    font-size: 12px;

    .addr-info-title{
      color: $color-primary-light-8;
    }
    .addr-info-desc{
      height: 35px;
      line-height: 35px;
      font-weight: bold;
      i{
        margin-right: 5px;
        color: $color-primary;
        font-size: 12px;
      }
    }
  }
</style>
