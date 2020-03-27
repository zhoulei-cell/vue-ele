<template>
  <div class="msite-header">
    <div class="address-box" @click="$emit('click')">
      <i class="iconfont icon-weizhi"></i>
      <span>泸州市</span>
      <i class="iconfont icon-xiajiantou1"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MsiteHeader'
}
</script>

<style lang="scss">
  .msite-header{
    padding: 10px 0 0px 15px;
    background-image: linear-gradient(90deg, #0af, #0085ff);
    .address-box{
      padding-top: 5px;
      color: #fff;
      font-size: 15px;
      span{
        padding: 0 3px;
      }
    }
  }
</style>
