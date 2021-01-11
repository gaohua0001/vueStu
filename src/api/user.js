/**
 * 用户请求相关模块
 */
// 用户登录

import request from '@/utils/request.js'

export const login = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data: data
  })
}
