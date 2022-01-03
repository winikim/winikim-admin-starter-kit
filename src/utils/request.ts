import axios from 'axios'
import { AdminUserModule } from '../store/modules/admin-user'
import { WinikimException } from '../exception/winikim-exception'

/**
 * Axios 설정
 */
const service = axios.create({
  baseURL: 'http://127.0.0.1:8080',
  timeout: 10000
})

/**
 * 요청 전에 토큰이 있는 경우 토큰을 추가하여 요청함.
 */
service.interceptors.request.use(
  (config: any) => {
    if (AdminUserModule.accessToken) {
      config.headers['X-ADMIN-TOKEN'] = 'Bearer ' + AdminUserModule.accessToken
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)
/**
 * 에러 응답에 대하여 공통Exception 객체로 리턴
 */
service.interceptors.response.use(response => {
  return response
}, error => {
  throw new WinikimException(error.response.data.code, error.response.data.message)
})

export default service
