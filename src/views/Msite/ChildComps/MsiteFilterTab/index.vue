<template>
  <div class="msite-filter">
    <ul class="filter-list">
      <li class="filter-list-item" :class="{'filter-bold': currentFilter === index, first: index === 0}" v-for="(item, index) in navTab" :key="index" @click="filterSort(index)">
        <span>{{item.name}}</span>
        <i v-if="item.icon" :class="[item.icon]" class="iconfont"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MsiteFilterTab',
  props: {
    navTab: {
      type: Array,
      default() {
        return []
      }
    },
    currentFilter: {
      type: Number,
      default: 0
    }
  },
  methods: {
    filterSort(index) {
      this.$emit('filterSort', index)
    }
  }
}
</script>

<style lang="scss">
  .msite-filter{
    .filter-list{
      display: flex;
      flex-direction: row;
      height: 35px;
      padding-left: 10px;
      background-color: $color-white;
      .filter-list-item.first{
          display: flex;
          span{
            white-space: nowrap;
          }
          .iconfont{
            font-size: 12px;
          }
        }
      .filter-list-item{
        flex: 1;
        color: $color-primary-light-2;
        font-size: 12px;
        text-align: center;
        line-height: 35px;
        &.filter-bold{
          color: $color-primary-light-1;
          font-weight: bold;
        }
        .iconfont{
          vertical-align: middle;
        }
      }
    }
  }
</style>
