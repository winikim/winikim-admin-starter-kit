import router from './router'
import { Route } from 'vue-router'
import { AdminUserModule } from '@/store/modules/admin-user'
import { PermissionModule } from '@/store/modules/permission'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import i18n from '@/lang'
import settings from './settings'

const whiteList = ['/admin/login']
const getPageTitle = (key: string) => {
  const hasKey = i18n.te(`route.${key}`)
  if (hasKey) {
    const pageName = i18n.t(`route.${key}`)
    return `${pageName} - ${settings.title}`
  }
  return `${settings.title}`
}
router.beforeEach(async(to: Route, _: Route, next: any) => {
  NProgress.start()
  // 로그인 여부를 판단 (localStorage 또는 Vuex 저장 여부)
  if (AdminUserModule.accessToken) {
    if (to.path === '/admin/login') {
      // 로그인이 되어 있는 경우 '/'로 리다이렉트
      next({ path: '/' })
      NProgress.done()
    } else {
      // 로그인 된 사용자에 대한 권한 확인
      if (AdminUserModule.roles.length === 0) {
        try {
          await AdminUserModule.GetMeInfo()
          const roles = AdminUserModule.roles
          PermissionModule.GenerateRoutes(roles) // 권한에 따른 routes 생성
          // 만들어진 routes를 router에 추가
          PermissionModule.dynamicRoutes.forEach(route => {
            router.addRoute(route)
          })
          next({ ...to, replace: true })
        } catch (err) {
          // 토큰 제거
          AdminUserModule.LogOut()
          // 로그인 페이지로 이동
          next('/admin/login')
          NProgress.done()
        }
      } else {
        // 권한이 있는 경우 해당 페이지(to.path)로 이동
        next()
      }
    }
  } else {
    // 로그인 되지 않았을 경우
    if (whiteList.indexOf(to.path) !== -1) {
      // whiteList에 있는 페이지에 대해서는 바로 접근
      next()
    } else {
      // whiteList에 없는 페이지인 경우 로그인 페이지로 이동
      next('/admin/login')
      NProgress.done()
    }
  }
})

router.afterEach((to: Route) => {
  // 페이지 title 설정
  NProgress.done()
  document.title = getPageTitle(to.meta?.title)
})
