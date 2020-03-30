<template>
  <Swiper v-if="swipeImgs.length > 0">
    <SwiperItem v-for="(item, index) in swipeImgs" :key="index">
      <img :src="item">
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/Base'
export default {
  name: 'MsiteSwiper',
  props: {
    swipeImgs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style>

</style>
