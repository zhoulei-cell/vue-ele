<template>
  <input class="base-input" :type="type" :value="value" @input="$emit('input', $event.target.value)" :placeholder="placeholder">
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
  .base-input{
    display: block;
    width: 100%;
    height: 44px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }
</style>
