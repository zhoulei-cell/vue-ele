
import axios from '../axios'

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
