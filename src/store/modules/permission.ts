import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import { RouteConfig } from 'vue-router'
import { adminRoutes, constantRoutes } from '@/router'
import store from '@/store'

const hasPermission = (roles: string[], route: RouteConfig) => {
  if (route.meta && route.meta.roles) {
    return roles.some(role => roles.includes(role))
  } else {
    return true
  }
}

export const filterAsyncRoutes = (routes: RouteConfig[], roles: string[]) => {
  const res: RouteConfig[] = []
  routes.forEach(route => {
    const r = { ...route }
    if (hasPermission(roles, r)) {
      if (r.children) {
        r.children = filterAsyncRoutes(r.children, roles)
      }
      res.push(r)
    }
  })
  return res
}

export interface IPermissionState {
  routes: RouteConfig[]
  dynamicRoutes: RouteConfig[]
}

/**
 * 권한에 따라 결정 된 Route 정보를 공유하기 위한 Store
 */
@Module({ dynamic: true, store, name: 'permission' })
class Permission extends VuexModule implements IPermissionState {
  public routes: RouteConfig[] = []
  public dynamicRoutes: RouteConfig[] = []

  @Mutation
  private SET_ROUTES(routes: RouteConfig[]) {
    this.routes = constantRoutes.concat(routes)
    this.dynamicRoutes = routes
  }

  /**
 * 권한에 따라서 접근 할 수 있는 route들을 생성 한다.
 * @param roles
 */
  @Action
  public GenerateRoutes(roles: string[]) {
    let accessedRoutes
    console.log(roles)
    if (roles.includes('ROLE_ADMIN')) {
      accessedRoutes = adminRoutes
    } else {
      accessedRoutes = filterAsyncRoutes(adminRoutes, roles)
    }
    this.SET_ROUTES(accessedRoutes)
  }
}

export const PermissionModule = getModule(Permission)
