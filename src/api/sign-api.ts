import request from '@/utils/request'
import { JsonConvert } from 'json2typescript'
import i18n from '@/lang/index'
import { AdminMe } from './type/sign/admin-me'
import { Token } from './type/sign/token'
import { AdminSignIn } from './type/sign/sign-in'

export class SignApi {
  public adminLogin(data: AdminSignIn): Promise<Token> {
    return request({
      url: '/admin/sign-in',
      method: 'post',
      data
    }).then((result) => {
      return new Promise<Token>((resolve, reject) => {
        try {
          const jsonConvert = new JsonConvert()
          resolve(jsonConvert.deserializeObject(result.data, Token))
        } catch (e) {
          reject(i18n.t('error.api.format').toString())
        }
      })
    })
  }

  public adminMeInfo(): Promise<AdminMe> {
    return request({
      url: '/admin/user/me',
      method: 'get'
    }).then((result) => {
      return new Promise<AdminMe>((resolve, reject) => {
        try {
          const jsonConvert = new JsonConvert()
          resolve(jsonConvert.deserializeObject(result.data, AdminMe))
        } catch (e) {
          reject(i18n.t('error.api.format').toString())
        }
      })
    })
  }
}
