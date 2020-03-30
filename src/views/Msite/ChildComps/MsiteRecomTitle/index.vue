<template>
  <div class="msite-recom-title">推荐商家</div>
</template>

<script>
export default {
  name: 'MsiteRecomTitle'
}
</script>

<style lang="scss">
  .msite-recom-title{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    font-size: 13px;
    text-align: center;
    line-height: 32px;
  }
  .msite-recom-title::before, .msite-recom-title::after{
    content: '';
    display: block;
    width: 30px;
    height: 1px;
    margin-right: 15px;
    background-color: $color-primary-light-5;
  }
  .msite-recom-title::after{
    margin-left: 15px;
    margin-right: 0;
  }
</style>
