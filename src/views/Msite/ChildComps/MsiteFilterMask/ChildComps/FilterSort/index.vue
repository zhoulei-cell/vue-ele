<template>
  <div class="filter-sort">
    <ul class="filter-sort-list">
      <li class="filter-sort-list-item" :class="{checked: currentSelectSort === index}" v-for="(item, index) in sortBy" :key="index" @click="selectSort(index)">
        <span>{{item.name}}</span>
        <i class="iconfont icon-dui"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FilterSort',
  props: {
    sortBy: {
      type: Array,
      default() {
        return []
      }
    },
    currentSelectSort: {
      type: Number,
      default: 0
    }
  },
  methods: {
    selectSort(index) {
      this.$emit('selectSort', index)
    }
  }
}
</script>

<style lang="scss">
  .filter-sort{
    border-top: 1px solid #ccc;
    background-color: $color-white;
    .filter-sort-list{
      padding-left: 20px;
      padding-right: 15px;
      .filter-sort-list-item{
        display: flex;
        justify-content: space-between;
        height: 35px;
        color: $color-primary-light-1;
        font-size: 12px;
        line-height: 35px;
        &.checked{
          color: $color-primary;
        }
        .iconfont{
          font-size: 14px;
        }
      }
    }
  }
</style>
