<template>
  <div class="msite">
    <MsiteHeader
      @click="toggleAddrPage(true)"
      :formattedAddress="formattedAddress"
    />
    <MsiteSearch/>
    <MsiteSwiper :swipeImgs="swipeImgs"/>
    <MsiteFoodCategory :entries="entries"/>
    <MsiteRecomTitle/>

    <MsiteFilterTab
      :navTab="navTab"
      :currentFilter="currentFilter"
      @filterSort="filterSort"
    />
    <MsiteShopList/>
    <MsiteFilterMask
      v-show="isShowFilter"
      :navTab="navTab"
      :sortBy="sortBy"
      :screenBy="screenBy"
      :currentFilter="currentFilter"
      :currentSelectSort="currentSelectSort"
      @hideFilter="toggleFilterPage()"
      @filterSort="filterSort"
      @selectSort="selectSort"
      @filterSelect="filterSelect"
    />

    <transition name="fade">
      <MsiteAddrMask
        v-if="isShowAddr"
        :toggleAddrPage="toggleAddrPage"
        :toggleCityPage="toggleCityPage"
        :city="city"
        :formattedAddress="formattedAddress"
      />
    </transition>
    <MsiteCityMask
      v-if="isShowCity"
      :toggleCityPage="toggleCityPage"
    />
  </div>
</template>

<script>
import MsiteHeader from './ChildComps/MsiteHeader'
import MsiteSearch from './ChildComps/MsiteSearch'
import MsiteSwiper from './ChildComps/MsiteSwiper'
import MsiteFoodCategory from './ChildComps/MsiteFoodCategory'
import MsiteRecomTitle from './ChildComps/MsiteRecomTitle'
import MsiteFilterTab from './ChildComps/MsiteFilterTab'
import MsiteShopList from './ChildComps/MsiteShopList'
import MsiteFilterMask from './ChildComps/MsiteFilterMask'
import MsiteAddrMask from './ChildComps/MsiteAddrMask'
import MsiteCityMask from './ChildComps/MsiteCityMask'
import { mapActions, mapState } from 'vuex'

import { getShopping, getFilter } from 'network/api/msite'
export default {
  name: 'Msite',
  data() {
    return {
      isShowFilter: false,
      isShowAddr: false,
      isShowCity: false,
      currentFilter: 0,
      currentSelectSort: 0,
      swipeImgs: [],
      entries: [],
      navTab: [],
      sortBy: [],
      screenBy: []
    }
  },
  mounted() {
    this.getLocation()
    this.getShop()
    this.getFilter()
  },
  computed: {
    ...mapState('location', {
      city: 'city',
      formattedAddress: 'address'
    })
  },
  methods: {
    ...mapActions('location', ['getLocation']),
    toggleAddrPage(val) {
      this.isShowAddr = val
    },
    toggleCityPage(val) {
      this.isShowCity = val
    },
    toggleFilterPage() {
      this.isShowFilter = !this.isShowFilter
    },
    getShop() {
      getShopping().then(data => {
        data = data.data
        this.swipeImgs = data.swipeImgs
        this.entries = data.entries
      })
    },
    getFilter() {
      getFilter().then(data => {
        data = data.data
        this.navTab = data.navTab
        this.sortBy = data.sortBy
        this.screenBy = data.screenBy
        console.log(data)
      })
    },
    filterSort(index) {
      console.log(index)
      this.currentFilter = index
      switch (index) {
        case 0:
          this.isShowFilter = true
          break
        case 1:
          if (this.isShowFilter) {
            this.isShowFilter = false
          }
          this.updata({ condition: this.navTab[1].condition })
          break
        case 2:
          if (this.isShowFilter) {
            this.isShowFilter = false
          }
          this.updata({ condition: this.navTab[2].condition })
          break
        case 3:
          this.isShowFilter = true
          break
      }
    },
    selectSort(index) {
      const sort = this.sortBy[index]
      this.isShowFilter = false
      this.currentSelectSort = index
      this.navTab[0].name = sort.name
      this.updata({ condition: sort.code })
    },
    filterSelect(screenData) {
      this.isShowFilter = false
      console.log(screenData)
    },

    updata(rule) {
      console.log(rule)
    }
  },
  components: {
    MsiteHeader,
    MsiteSearch,
    MsiteSwiper,
    MsiteFoodCategory,
    MsiteRecomTitle,
    MsiteFilterTab,
    MsiteShopList,
    MsiteFilterMask,
    MsiteAddrMask,
    MsiteCityMask
  }
}
</script>

<style>
  .msite{
    position: relative;
    height: 100%;
  }
  .fade-enter, .fade-leave-to{
    transform: translate(100%, 0);
  }
  .fade-enter-active, .fade-leave-active{
    transition: all .3s;
  }
  .fade-leave, .fade-enter-to{
    transform: translate(0);
  }
</style>
