<template>
  <div class="city-search">
    <div class="search-box">
      <i class="iconfont icon-sousuo"></i>
      <input class="search-input" type="text" placeholder="请输入城市名或者拼音" :value="value" @input="$emit('input', $event.target.value)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CitySearch',
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
  .city-search{
    padding: 10px 20px;
    border-top: 1px solid #ccc;
    background-image: $bg-img-primary;

    .search-box {
      display: flex;
      height: 28px;
      background-color: $color-white;
      line-height: 28px;
      .iconfont{
        padding: 0 10px;
        color: $color-primary-light-8;
      }
      .search-input{
        flex: 1;
        height: 100%;
        border: none;
        font-size: 12px;
      }
    }
  }
</style>
