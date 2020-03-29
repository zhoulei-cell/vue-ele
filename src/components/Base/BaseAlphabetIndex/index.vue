<template>
  <div class="base-alphabet-index" v-show="isShow">
    <ul class="alphabet-index-list">
      <li class="alphabet-index-list-item" v-for="key in alphabet" :key="key">{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BaseAlphabetIndex',
  props: {
    alphabet: {
      type: Array,
      default() {
        return []
      }
    },
    isShow: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
  .base-alphabet-index{
    position: fixed;
    top: 50%;
    right: 0px;
    transform: translateY(-45%);

    .alphabet-index-list .alphabet-index-list-item{
      width: 25px;
      height: 16px;
      color: $color-primary-light-8;
      font-size: 12px;
      text-align: center;
      line-height: 16px;
    }
  }
</style>
