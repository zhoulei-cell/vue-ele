<template>
  <div class="msite-search" @click="goSearch">
    <div class="search-box">
      <i class="iconfont icon-sousuo"></i>
      <span>搜素商家、商品名称</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MsiteSearch',
  methods: {
    goSearch() {
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="scss">
  .msite-search{
    padding: 10px 15px;
    background-image: $bg-img-primary;
    .search-box{
      height: 30px;
      background-color: $color-white;
      color: $color-primary-light-8;
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
