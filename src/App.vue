<template>
  <div id="app">
    <div class="main">
      <router-view/>
    </div>
    <TabBar v-if="isShowTabBar"/>
  </div>
</template>

<script>
import { TabBar } from 'components/Demand'
export default {
  name: 'App',
  computed: {
    isShowTabBar() {
      const path = this.$route.path
      return !!(path === '/msite' || path === '/order' || path === '/mine')
    }
  },
  components: {
    TabBar
  }
}
</script>

<style lang="scss">
  html,body,#app{
    overflow: hidden;
    height: 100%;
  }
  #app{
    display: flex;
    flex-direction: column;
    .main{
      flex: 1;
      overflow: hidden;
    }
  }
</style>
