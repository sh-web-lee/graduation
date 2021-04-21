/* axios二次封装 */

import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'developmen' ? 'http://rap2api.taobao.org/app/mock/275587' : 'http://rap2api.taobao.org/app/mock/275587'

// 创建axios实例
const service = axios.create({
  baseURL
})

// 请求拦截
service.interceptors.request.use(config => {
  return config
})

// 相应拦截
service.interceptors.response.use(config => {
  if (config.status === 200) {
    if (config.data.code === 200) {
      return config.data.data
    }
    return Promise.reject(config.data)
  }
  return Promise.reject(config.data)
})
export default service
