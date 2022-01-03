import Vue from 'vue'
import VueI18n from 'vue-i18n'

// element-ui의 한국어
import elementKoLocale from 'element-ui/lib/locale/lang/ko'
// lite-console에서 사용할 한국어
import koLocale from './ko'

Vue.use(VueI18n)

const messages = {
  ko: {
    ...koLocale,
    ...elementKoLocale
  }
}

export const getLocale = () => {
  const language = navigator.language.toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }

  // default
  return 'ko'
}

const i18n = new VueI18n({
  locale: getLocale(),
  messages
})

export default i18n
