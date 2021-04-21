import request from '@/utils/request'
import API from './constant'

/**
 * 获取所有分类
 */
export const getSwipers = () => request({
  method: 'GET',
  url: API.Swipe
})
