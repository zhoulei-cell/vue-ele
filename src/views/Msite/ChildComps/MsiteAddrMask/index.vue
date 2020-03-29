<template>
  <div class="address-mask">
    <AddrNavBar @leftClick="toggleAddrPage(false)"/>
    <AddrSearch @cityClick="toggleCityPage(true)" :city="city" v-model="searchVal" :value="searchVal"/>
    <AddrLocation :formattedAddress="formattedAddress"/>
    <AddrSearchList :tips="tips" :isNoSearch="isNoSearch"/>
  </div>
</template>

<script>
import AddrNavBar from './ChildComps/AddrNavBar'
import AddrSearch from './ChildComps/AddrSearch'
import AddrLocation from './ChildComps/AddrLocation'
import AddrSearchList from './ChildComps/AddrSearchList'
import amap from 'network/api/amap'
export default {
  name: 'MsiteAddrMask',
  props: {
    toggleAddrPage: Function,
    toggleCityPage: Function,
    city: String,
    formattedAddress: String
  },
  data() {
    return {
      searchVal: '',
      tips: [],
      isNoSearch: false
    }
  },
  watch: {
    searchVal(newVal, oldVal) {
      amap.placeSearch(newVal).then(data => {
        if (data === 'NO_PARAMS') {
          // console.log('文本框清空了')
          this.isNoSearch = false
          this.tips = []
        } else {
          if (data.tips) {
            this.tips = data.tips
          } else {
            this.tips = []
            this.isNoSearch = true
          }
        }
      })
    }
  },
  components: {
    AddrNavBar,
    AddrSearch,
    AddrLocation,
    AddrSearchList
  }
}
</script>

<style lang="scss">
  .address-mask{
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    background-color: $color-white-light-1;
  }
</style>
