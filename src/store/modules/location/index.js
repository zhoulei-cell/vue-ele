import * as TYPES from '../../mutation-types'
import amap from 'network/api/amap'

const location = {
  namespaced: true,

  state: {
    city: '',
    address: '正在定位...'
  },

  mutations: {
    [TYPES.SET_CITY](state, payload) {
      state.city = payload
    },
    [TYPES.SET_ADDRESS](state, payload) {
      state.address = payload
    }
  },

  actions: {
    getLocation({ state, commit }) {
      if (state.address === '正在定位...') {
        amap.pinPoint().then(data => {
          commit(TYPES.SET_CITY, data.city)
          commit(TYPES.SET_ADDRESS, data.formattedAddress)
        }).catch(() => {
          commit(TYPES.SET_CITY, '未能获取地址')
          commit(TYPES.SET_ADDRESS, '定位失败，未能获取当前位置信息')
        })
      }
    }
  }
}

export default location
