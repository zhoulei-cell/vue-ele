<template>
  <div class="addr-search">
    <div class="city-box" @click.stop="$emit('cityClick')">
      <span>{{computedCity}}</span>
      <i class="iconfont icon-xiajiantou1"></i>
    </div>
    <div class="search-box">
      <i class="iconfont icon-sousuo"></i>
      <input class="search-input" type="text" placeholder="请输入地址" :value="value" @input="$emit('input', $event.target.value)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddrSearch',
  props: {
    city: String,
    value: String
  },
  computed: {
    computedCity() {
      if (this.city === '未能获取地址') {
        return '选择城市'
      }
      return this.city
    }
  }
}
</script>

<style lang="scss">
  .addr-search{
    display: flex;
    flex-direction: row;
    padding: 10px 15px 10px 10px;
    height: 30px;
    background-color: $color-white;
    color: $color-black-light-2;
    font-size: 12px;
    line-height: 30px;
    .city-box{
      display: flex;
    }
    .city-box span{
      overflow: hidden;
      width: 40px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .city-box i{
      vertical-align: top;
      font-size: 12px;
    }

    .search-box{
      flex: 1;
      display: flex;
      padding-left: 10px;
      margin-left: 5px;
      background-color: $color-white-light-1;
      color: $color-primary-light-7;
      .iconfont{
        font-size: 12px;
        vertical-align: bottom;
      }

      .search-input{
        flex: 1;
        height: 100%;
        margin-left: 5px;
        border: none;
        background-color: $color-white-light-1;
        color: $color-primary-light-7;
      }
    }
  }
</style>
