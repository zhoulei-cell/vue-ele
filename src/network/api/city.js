import axios from '../axios'

export const getCities = () => {
  return new Promise((resolve, reject) => {
    axios.get('/data/cities').then(data => {
      resolve(data)
    }).catch(err => {
      reject(err)
    })
  })
}
