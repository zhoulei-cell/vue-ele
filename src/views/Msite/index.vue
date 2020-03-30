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
    <MsiteFilter/>
    <MsiteShopList/>

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
import MsiteFilter from './ChildComps/MsiteFilter'
import MsiteShopList from './ChildComps/MsiteShopList'
import MsiteAddrMask from './ChildComps/MsiteAddrMask'
import MsiteCityMask from './ChildComps/MsiteCityMask'
import { mapActions, mapState } from 'vuex'

import { getShopping, getFilter } from 'network/api/msite'
export default {
  name: 'Msite',
  data() {
    return {
      isShowAddr: false,
      isShowCity: false,
      swipeImgs: [],
      entries: []
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
    getShop() {
      getShopping().then(data => {
        data = data.data
        this.swipeImgs = data.swipeImgs
        this.entries = data.entries
      })
    },
    getFilter() {
      getFilter().then(data => {
        console.log(data)
      })
    }
  },
  components: {
    MsiteHeader,
    MsiteSearch,
    MsiteSwiper,
    MsiteFoodCategory,
    MsiteRecomTitle,
    MsiteFilter,
    MsiteShopList,
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
