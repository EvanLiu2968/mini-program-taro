/**
 * 接口列表
 */
import Taro from '@tarojs/taro'

const host = 'https://www.evanliu2968.com.cn';
//请求封装
function request(url, method, data, header = {}) {
  Taro.showLoading({ title: '加载中' })
  return new Promise((resolve, reject) => {
    Taro.request({
      url: host + url, //仅为示例，并非真实的接口地址
      method: method,
      data: data,
      header: {
        'content-type': 'application/json', // 默认值
        'source-from': 'app' // 默认值
      }
    }).then(res => {
      Taro.hideLoading()
      if (res.data.code ==='00') {
        resolve(res.data)
      } else {
        reject(res)
      }
    })
  })
}
function get(url, data) {
  return request(url, 'GET', data)
}
function post(url, data) {
  return request(url, 'POST', data)
}
export const getPhotos = () => post('/api/photos')
export const getArticles = () => post('/api/articles')
export const getArticleDetail = (category, id) => {
  let file = `${category}/${id}`
  return post('/api/articles', {
    file: file
  })
}
