<template>
  <div class="msite-shop-wrapper">
    <ul class="msite-shop-list">
      <li class="msite-shop-list-item" v-for="item in restaurant" :key="item.id">
        <div class="shop-img">
          <img :src="item.restaurant.image_path">
        </div>
        <div class="shop-info">
          <h3 class="shop-name">{{ item.restaurant.name }}</h3>
          <div class="shop-rate">
            <BaseRating :rating="item.restaurant.rating"/>
            <span>月售{{ item.restaurant.recent_order_num }}单</span>
          </div>
          <div class="shop-money">
            <div class="money">
              <span>${{ item.restaurant.float_minimum_order_amount }}元起送</span>
              |
              <span>配送费${{ item.restaurant.float_delivery_fee }}</span>
            </div>
            <div class="distance">
              <span>{{ (item.restaurant.distance / 1000).toFixed(2) }}km</span>
              |
              <span>{{ item.restaurant.order_lead_time }}分钟</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { BaseRating } from 'components/Base'
export default {
  name: 'MsiteShopList',
  props: {
    restaurant: {
      type: Array,
      default() {
        return []
      }
    }
  },
  watch: {
    restaurant() {
      console.log(this.restaurant)
    }
  },
  components: {
    BaseRating
  }
}
</script>

<style lang="scss">
  .msite-shop-wrapper{
    .msite-shop-list{
      .msite-shop-list-item{
        display: flex;
        align-items: center;
        padding: 12px 10px;
        border-top: 1px solid #ccc;
        .shop-img img{
          width: 55px;
          height: 55px;
        }

        .shop-info{
          flex: 1;
          padding-left: 8px;
          color: $color-primary-light-2;
          font-size: 12px;
          .shop-name{
            overflow: hidden;
            margin-bottom: 5px;
            color: $color-primary-light-1;
            font-size: 14px;
            font-weight: bold;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .shop-rate{
            display: flex;
            margin-bottom: 5px;
            span{
              margin-left: 5px;
            }
          }
          .shop-money{
            display: flex;
            justify-content: space-between;

            .distance{
              color: $color-primary-light-7;
            }
          }
        }
      }

    }

  }
</style>
