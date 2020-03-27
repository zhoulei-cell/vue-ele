<template>
  <div class="address-mask" @click="hideAddrPage">

  </div>
</template>

<script>
export default {
  name: 'MsiteAddrMask',
  props: {
    hideAddrPage: {
      type: Function
    }
  }
}
</script>

<style lang="scss">
  .address-mask{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(0,0,0,.3);
  }
</style>
