import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/eduservice/user/login', //提交地址，和本地保持一致
    method: 'post',     //提交方式
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/eduservice/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/eduservice/user/logout',
    method: 'post'
  })
}
