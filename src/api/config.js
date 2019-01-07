import axios from 'axios'

const http = axios.create()

// 请求头
http.defaults.baseURL = process.env.BASE_URL

/**
 * get请求
 * @param url
 * @returns {AxiosPromise}
 */
export const getRequest = (url, params) => {
  return http({
    method: 'get',
    url: url,
    params
  })
}

/**
 * post请求
 * @param url
 * @param params
 * @returns {AxiosPromise}
 */
export const postRequest = (url, params) => {
  return http({
    method: 'post',
    url: url,
    data: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

/**
 * delete请求
 * @param url
 * @returns {AxiosPromise}
 */
export const deleteRequest = (url, params) => {
  return http({
    method: 'delete',
    url: url,
    data: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}

/**
 * put请求(分片)
 * @param url
 * @param params
 * @returns {AxiosPromise}
 */
export const putRequest = (url, params) => {
  return http({
    method: 'put',
    url: url,
    data: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
}
