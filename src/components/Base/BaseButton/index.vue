<template>
  <button class="reset-btn btn" @click="$emit('btnClick')">{{text}}</button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      default: '登录'
    }
  }
}
</script>

<style>
  .btn.reset-btn{
    display: block;
    width: 100%;
    height: 44px;
    border-radius: 4px;
    font-size: 14px;
  }
</style>
