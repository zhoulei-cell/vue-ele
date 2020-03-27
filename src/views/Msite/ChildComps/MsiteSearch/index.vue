<template>
  <div class="msite-search">
    <div class="search-box">
      <i class="iconfont icon-sousuo"></i>
      <span>搜素商家、商品名称</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MsiteSearch'
}
</script>

<style lang="scss">
  .msite-search{
    padding: 10px 15px;
    background-image: linear-gradient(90deg, #0af, #0085ff);
    .search-box{
      height: 30px;
      background-color: #fff;
      color: #c0c4cc;
      font-size: 12px;
      text-align: center;
      line-height: 30px;
      .iconfont{
        font-size: 12px;
        margin-right: 3px;
      }
    }
  }
</style>
