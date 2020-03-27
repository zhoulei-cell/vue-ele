import * as TYPES from '../../mutation-types'

const login = {
  namespaced: true,
  state: {
    isLogin: false
  },
  mutations: {
    [TYPES.SET_IS_LOGIN](state, payload) {
      state.isLogin = payload
    }
  }
}

export default login
