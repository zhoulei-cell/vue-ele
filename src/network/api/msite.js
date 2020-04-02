
import axios from '../axios'
import Loading from 'plugins/Loading'

export const getShopping = () => {
  return new Promise((resolve, reject) => {
    axios.get('/data/shopping').then(data => resolve(data)).catch(err => reject(err))
  })
}

export const getFilter = () => {
  return new Promise((resolve, reject) => {
    axios.get('/data/filter').then(data => resolve(data)).catch(err => reject(err))
  })
}

export const getShopList = (page, size) => {
  Loading.show()
  return new Promise((resolve, reject) => {
    axios.post(`/api/profile/restaurants/${page}/${size}`).then(data => {
      Loading.hide()
      resolve(data)
    }).catch(err => {
      Loading.hide()
      reject(err)
    })
  })
}
