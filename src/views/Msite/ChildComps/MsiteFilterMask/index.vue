<template>
  <div class="msite-filter-mask" @click.self="$emit('hideFilter')">
    <MsiteSearch/>
    <MsiteFilterTab
      :navTab="navTab"
      :currentFilter="currentFilter"
      @filterSort="filterSort"
    />
    <FilterSort
      v-show="currentFilter === 0"
      :sortBy="sortBy"
      :currentSelectSort="currentSelectSort"
      @selectSort="selectSort"
    />
    <FilterSelect
      v-show="currentFilter === 3"
      :screenBy="screenBy"
      @filterSelect="filterSelect"
    />
  </div>
</template>

<script>
import MsiteSearch from '../MsiteSearch'
import MsiteFilterTab from '../MsiteFilterTab'
import FilterSort from './ChildComps/FilterSort'
import FilterSelect from './ChildComps/FilterSelect'
export default {
  name: 'MsiteFilterMask',
  props: {
    navTab: {
      type: Array,
      default() {
        return []
      }
    },
    sortBy: {
      type: Array,
      default() {
        return []
      }
    },
    screenBy: {
      type: Array,
      default() {
        return []
      }
    },
    currentFilter: {
      type: Number,
      default: 0
    },
    currentSelectSort: {
      type: Number,
      default: 0
    }
  },
  methods: {
    filterSort(index) {
      this.$emit('filterSort', index)
    },
    selectSort(index) {
      this.$emit('selectSort', index)
    },
    filterSelect(screenData) {
      this.$emit('filterSelect', screenData)
    }
  },
  components: {
    MsiteSearch,
    MsiteFilterTab,
    FilterSort,
    FilterSelect
  }
}
</script>

<style>
  .msite-filter-mask{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
  }
</style>
