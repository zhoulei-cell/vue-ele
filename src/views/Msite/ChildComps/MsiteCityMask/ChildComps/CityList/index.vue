<template>
  <div class="city-list-wrapper" ref="city">
    <ul class="city-group-list" v-if="!isSearch">
      <li class="city-group-list-item" v-for="(item, index) in cityList" :key="index">
        <h3 class="city-index">{{item.key}}</h3>
        <ul class="city-list">
          <li class="city-list-item" v-for="city in item.list" :key="city.id">{{city.name}}</li>
        </ul>
      </li>
    </ul>

    <ul class="search-list" v-show="searchList.length > 0 && isSearch">
      <li class="search-list-item" v-for="item in searchList" :key="item.id">{{item.name}}</li>
    </ul>

    <div class="no-search" v-show="searchList.length === 0 && isSearch">
      <p class="no-search-title">没有搜索结果</p>
      <p class="no-search-prompt">换个关键词试试</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityList',
  mounted() {
    this.$nextTick(() => {
      console.log(this.$refs.city)
      this.$refs.city.addEventListener('scroll', () => {
        console.log(this.$refs.city.scrollTop)
      })
    })
  },
  props: {
    cityList: {
      type: Array,
      default() {
        return []
      }
    },
    searchList: {
      type: Array,
      default() {
        return []
      }
    },
    isSearch: Boolean
  }
}
</script>

<style lang="scss">
  .city-list-wrapper{
    flex: 1;
    overflow-y: auto;
    color: $color-primary-light-2;
    font-size: 13px;
    .city-group-list{

      .city-group-list-item{

        .city-index{
          height: 32px;
          padding-left: 10px;
          background-color: $color-white-light-1;
          font-size: 14px;
          line-height: 32px;
          font-weight: bold;
        }

        .city-list .city-list-item{
          height: 40px;
          padding-left: 10px;
          border-bottom: 1px solid $color-white-light-1;
          line-height: 40px;
        }
      }
    }

    .search-list{
      padding-left: 10px;
      .search-list-item{
        height: 40px;
        border-bottom: 1px solid $color-white-light-1;
        line-height: 40px;
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
