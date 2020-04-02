import axios from 'axios'

const instance = axios.create()

// 添加请求拦截器
instance.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config
}, err => {
  // 对请求错误做些什么
  return Promise.reject(err)
})

instance.interceptors.response.use(response => {
  // 对响应数据做点什么
  return response
}, err => {
  // 对响应错误做点什么
  return Promise.reject(err)
})

export default instance
