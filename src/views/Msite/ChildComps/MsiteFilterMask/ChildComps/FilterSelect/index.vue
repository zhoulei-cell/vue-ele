<template>
  <div class="filter-select">
    <dl class="filter-select-group" v-for="(item, index) in screenBy" :key="index">
      <dt class="filter-select-group-title">{{item.title}}</dt>
      <dd class="filter-select-group-item">
        <ul class="filter-select-list">
          <li class="filter-select-list-item" :class="{select: data.select}" v-for="(data, index) in item.data" :key="index" @click="filterSelect(data, item)">
            <img v-if="data.icon" :src="data.icon">
            <span>{{data.name}}</span>
          </li>
        </ul>
      </dd>
    </dl>
    <div class="filter-btn-box">
      <span class="clear btn" :class="{isClear: edit}" @click="filterSelectClear">清空</span>
      <span class="ok btn" @click="filterSelectOk">确定</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterSelect',
  props: {
    screenBy: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    edit() {
      let bool = false
      this.screenBy.forEach(item => {
        item.data.forEach(data => {
          if (data.select) {
            bool = true
          }
        })
      })
      return bool
    }
  },
  methods: {
    filterSelect(item, screen) {
      if (screen.id !== 'MPI') { // 如果不是MPI就是单选
        screen.data.forEach(data => {
          if (data !== item) {
            data.select = false
          }
        })
      }
      item.select = !item.select
    },
    filterSelectClear() {
      this.screenBy.forEach(item => {
        item.data.forEach(data => {
          data.select = false
        })
      })
    },
    filterSelectOk() {
      const screenData = {
        MPI: [],
        offer: '',
        per: ''
      }
      this.screenBy.forEach(item => {
        item.data.forEach(data => {
          if (data.select) {
            if (item.id === 'MPI') {
              screenData[item.id].push(data.code)
            } else {
              screenData[item.id] = data.code
            }
          }
        })
      })
      this.$emit('filterSelect', { condition: screenData })
    }
  }
}
</script>

<style lang="scss">
  .filter-select{
    background-color: $color-white;
    color: $color-primary-light-2;
    .filter-select-group{
      padding: 10px 10px 0;

      .filter-select-group-title{
        padding-bottom: 10px;
        font-size: 13px;
      }

      .filter-select-group-item{
        .filter-select-list{
          display: flex;
          flex-wrap: wrap;
          /*justify-content: space-between;*/
          .filter-select-list-item{
            width: 31.33%;
            height: 30px;
            margin-bottom: 5px;
            margin-right: 2%;
            background-color: $color-white-light-1;
            font-size: 12px;
            text-align: center;
            line-height: 30px;
            vertical-align: middle;
            &.select{
              color: #409eff;
              background-color: #edf5ff;
            }
            &:last-child{
              justify-self: flex-start;
            }
            img{
              width: 11px;
              height: 11px;
              margin-right: 5px;
            }
          }
        }
      }
    }

    .filter-btn-box{
      display: flex;
      margin-top: 10px;
      box-shadow: 0 -2px 2px 0 $color-primary-light-10;
      span.btn{
        width: 50%;
        height: 44px;
        font-size: 14px;
        text-align: center;
        line-height: 44px;
        &.clear{
          color: $color-primary-light-9;
          background-color: $color-white;
        }
        &.isClear{
          color: $color-primary-light-1;
        }
        &.ok{
          color: $color-white;
          background-color: $color-success;
        }
      }
    }
  }
</style>
