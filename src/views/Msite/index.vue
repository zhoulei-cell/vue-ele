<template>
  <div class="msite">
    <MsiteHeader
      @click="toggleAddrPage(true)"
      :formattedAddress="formattedAddress"
    />
    <MsiteSearch/>

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
import MsiteAddrMask from './ChildComps/MsiteAddrMask'
import MsiteCityMask from './ChildComps/MsiteCityMask'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Msite',
  data() {
    return {
      isShowAddr: false,
      isShowCity: false
    }
  },
  mounted() {
    this.getLocation()
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
    }
  },
  components: {
    MsiteHeader,
    MsiteSearch,
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
