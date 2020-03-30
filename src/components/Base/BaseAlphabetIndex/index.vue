<template>
  <div class="base-alphabet-index" v-show="isShow">
    <ul class="alphabet-index-list">
      <li class="alphabet-index-list-item" :class="{active: currentIndex === index}" v-for="(key, index) in alphabet" :key="key" @click.stop="alphabetClick(index)">{{key}}</li>
    </ul>
  </div>
</template>

<script>
import Events from 'utils/Events'
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
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  mounted() {
    this.listenSetIndex()
  },
  methods: {
    listenSetIndex() {
      this.clearListenSetIndex()
      Events.on('setIndex', index => {
        this.setIndex(index)
      })
    },
    clearListenSetIndex() {
      Events.off('setIndex')
    },
    alphabetClick(index) {
      this.setIndex(index)
      Events.emit('alphabet', index)
    },
    setIndex(index) {
      this.currentIndex = index
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
      &.active{
        background-color: $color-primary;
        color: $color-white;
      }
    }
  }
</style>
