<template>
  <div class="addr-search-list-wrapper">
    <ul class="search-list" v-show="tips.length > 0">
      <li class="search-list-item" v-for="(item, index) in tips" :key="index">
        <h5 class="location-info">{{item.name}}</h5>
        <p class="location-info-desc">{{item.district + item.address}}</p>
      </li>
    </ul>

    <div class="no-search" v-show="tips.length === 0 && isNoSearch">
      <p class="no-search-title">没有搜索结果</p>
      <p class="no-search-prompt">换个关键词试试</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddrSearchList',
  props: {
    tips: Array,
    isNoSearch: Boolean
  }
}
</script>

<style lang="scss">
  .addr-search-list-wrapper{
    flex: 1;
    overflow-y: auto;
    margin-top: 5px;
    .search-list{
      .search-list-item{
        margin-top: 1px;
        padding-left: 10px;
        background-color: $color-white;
        font-size: 12px;
        .location-info{
          padding-top: 10px;
          color: $color-primary-light-2;
          font-size: 13px;
          font-weight: bold;
        }
        .location-info-desc{
          padding: 5px 0 5px;
          color: $color-primary-light-4;
          font-size: 12px;
        }
      }
    }

    .no-search{
      margin-top: 100px;
      .no-search-title{
        color: $color-primary-light-2;
        font-size: 16px;
        text-align: center;
      }
      .no-search-prompt{
        margin-top: 10px;
        color: $color-primary-light-4;
        font-size: 12px;
        text-align: center;
      }
    }
  }
</style>
