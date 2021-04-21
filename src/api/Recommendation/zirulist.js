import request from '@/utils/request'
import API from '../constant'

/**
 * 获取自如寓分类
 */
export const getZiruList = () => request({
  method: 'GET',
  url: API.ZiruList
})
