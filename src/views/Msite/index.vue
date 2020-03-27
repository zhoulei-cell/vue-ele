<template>
  <div class="msite">
    <MsiteHeader @click="showAddrPage"/>
    <MsiteSearch/>

    <transition name="fade">
      <MsiteAddrMask v-if="isShowAddr" :hideAddrPage="hideAddrPage"/>
    </transition>
    <MsiteCityMask v-if="isShowCity"/>
  </div>
</template>

<script>
import MsiteHeader from './ChildComps/MsiteHeader'
import MsiteSearch from './ChildComps/MsiteSearch'
import MsiteAddrMask from './ChildComps/MsiteAddrMask'
import MsiteCityMask from './ChildComps/MsiteCityMask'
export default {
  name: 'Msite',
  data() {
    return {
      isShowAddr: false,
      isShowCity: false
    }
  },
  methods: {
    showAddrPage() {
      this.isShowAddr = true
    },
    hideAddrPage() {
      this.isShowAddr = false
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
    transition: all 1s;
  }
  .fade-leave, .fade-enter-to{
    transform: translate(0);
  }
</style>
