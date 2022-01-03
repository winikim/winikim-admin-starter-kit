import { isValidPassword } from './validate'
import i18n from '@/lang/index'

/**
 * el-form에서 사용 되는 Validation Rule에 대한 class
 * 해당 class를 통하여 validation 코드 중복을 없앰
 */
export class ElFormRule {
    public validatePassword = (rule: any, value: string, callback: Function) => {
      if (!isValidPassword(value.trim())) {
        callback(new Error(i18n.t('error.validation.password').toString()))
      } else {
        callback()
      }
    }

    public validateEmpty = (rule: any, value: string, callback: Function) => {
      if (value.trim().length < 1) {
        callback(new Error(i18n.t('error.validation.require').toString()))
      } else {
        callback()
      }
    }

    public validateEmptyUsername = (rule: any, value: string, callback: Function) => {
      if (value.trim().length < 1) {
        callback(new Error(i18n.t('error.validation.emptyUsername').toString()))
      } else {
        callback()
      }
    }
}
