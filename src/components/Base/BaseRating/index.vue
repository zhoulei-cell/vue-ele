<template>
  <div class="base-rating">
    <img class="rating-img" :src="img" v-for="(img, index) in star" :key="index">
    <span>{{rating}}</span>
  </div>
</template>

<script>
import STAR_ON from './images/star-on.png'
import STAR_HALF from './images/star-half.png'
import STAR_OFF from './images/star-off.png'

export default {
  name: 'BaseRating',
  props: {
    rating: Number
  },
  computed: {
    star() {
      const LENGTH = 5
      // 小数要达到0.5以上才会显示半星
      // 对分数进行处理, 向下取0.5的倍数
      const score = Math.floor(this.rating * 2) / 2
      // 是否有半星
      const hasDecimal = score % 1 !== 0
      // 全星
      const integer = Math.floor(score)
      const result = []

      for (var i = 0; i < integer; i++) {
        result.push(STAR_ON)
      }

      if (hasDecimal) {
        result.push(STAR_HALF)
      }

      while (result.length < LENGTH) {
        result.push(STAR_OFF)
      }

      return result
    }
  }
}
</script>

<style lang="scss">
  .base-rating{
    display: flex;
    .rating-img{
      display: block;
      width: 12px;
      height: 12px;
    }
    span{
      margin-left: 5px;
      color: $color-primary-light-2;
      font-size: 12px;
      line-height: 12px;
    }
  }
</style>
