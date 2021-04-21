import request from '@/utils/request'
import API from '../constant'

/**
 * 获取合租分类
 */
export const getHezuLists = () => request({
  method: 'GET',
  url: API.HezuList
})
