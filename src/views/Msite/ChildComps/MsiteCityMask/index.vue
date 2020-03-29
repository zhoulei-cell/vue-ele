<template>
  <div class="city-mask">
    <CityNavBar @leftClick="toggleCityPage(false)"/>
    <CitySearch v-model="searchVal" :value="searchVal"/>
    <CityList :cityList="cityList" :searchList="searchList" :isSearch="isSearch"/>
    <BaseAlphabetIndex :alphabet="alphabet" :isShow="!isSearch"/>
  </div>
</template>

<script>
import CityNavBar from './ChildComps/CityNavBar'
import CitySearch from './ChildComps/CitySearch'
import CityList from './ChildComps/CityList'
import { BaseAlphabetIndex } from 'components/Base'
import { getCities } from 'network/api/city'

export default {
  name: 'MsiteCityMask',
  props: {
    toggleCityPage: Function
  },
  data() {
    return {
      searchVal: '',
      cityList: [],
      alphabet: [],
      searchList: []
    }
  },
  mounted() {
    this.getCity()
  },
  methods: {
    getCity() {
      let cities = sessionStorage.getItem('ele_cities')
      if (cities) {
        cities = JSON.parse(cities)
        this.handleCity(cities)
      } else {
        getCities().then(data => {
          const cities = data.data
          sessionStorage.setItem('ele_cities', JSON.stringify(cities))
          this.handleCity(cities)
        })
      }
    },
    handleCity(cities) {
      const alphabet = Object.keys(cities)
      alphabet.pop()
      this.alphabet = alphabet.sort((a, b) => a.localeCompare(b))
      const cityList = []
      alphabet.forEach(key => {
        cityList.push({ key: key, list: cities[key] })
      })
      this.cityList = cityList
    }
  },
  computed: {
    isSearch() {
      return this.searchVal !== ''
    }
  },
  watch: {
    searchVal(newVal) {
      const arr = []
      if (newVal !== '') {
        this.cityList.forEach(item => {
          item.list.forEach(city => {
            if (city.pinyin.includes(newVal) || city.name.includes(newVal)) {
              arr.push(city)
            }
          })
        })
        this.searchList = arr
      } else {
        this.searchList = []
      }
    }
  },
  components: {
    CityNavBar,
    CitySearch,
    CityList,
    BaseAlphabetIndex
  }
}
</script>

<style>
  .city-mask{
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    background-color: #fff;
  }
</style>
