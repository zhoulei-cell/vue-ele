<template>
  <div class="msite-food-category">
    <div class="miste-food-category-page" v-for="(item, index) in entries" :key="index">
      <ul class="page-list">
        <li class="page-list-item" v-for="food in item" :key="food.name">
          <img :src="food.image">
          <span>{{food.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MsiteFoodCategory',
  props: {
    entries: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss">
  /*
  .msite-food-category::-webkit-scrollbar {
    width:0px;
    height:0px;
  }
  */
  .msite-food-category{
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 15px;
    .miste-food-category-page{
      width: 100%;
      flex-shrink: 0;
      .page-list{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
      .page-list .page-list-item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 20%;
        height: 60px;
        color: $color-primary-light-2;
        font-size: 12px;
        img{
          width: 38px;
          height: 38px;
        }
      }
    }
  }
</style>
