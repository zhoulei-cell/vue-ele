<template>
  <div class="sign-input-wrapper">
    <div class="sign-input" :class="{focus: focus, error: error}">
      <BaseInput :value="value" @focus.native="focus = true" @blur.native="focus = false" :placeholder="placeholder" @input="input"/>
      <button v-if="isBtn" class="reset-btn" :class="{active: !disabled}" @click="$emit('btnClick')" :disabled="disabled">{{btnTitle}}</button>
    </div>
    <div v-show="error" class="error">{{error}}</div>
  </div>
</template>

<script>
import { BaseInput } from 'components/Base'
export default {
  name: 'SignInput',
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    isBtn: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: true
    },
    btnTitle: {
      type: String,
      default: '获取验证码'
    },
    error: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      focus: false
    }
  },
  methods: {
    input(value) {
      this.$emit('input', value)
    }
  },
  components: {
    BaseInput
  }
}
</script>

<style lang="scss">
.sign-input-wrapper{
  margin-bottom: 16px;
  .sign-input{
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    &.focus{
      border-color: $color-primary;
    }
    &.error{
      border-color: red;
    }
    .base-input{
      flex: 1;
      padding-right: 20px;
      border: none;
      font-size: 14px;
    }
    .reset-btn{
      border: none;
      font-size: 12px;
      &.active{
        color: $color-primary;
      }
    }
  }
  .error{
    color: red;
    font-size: 10px;
    line-height: 16px;
  }
}
</style>
