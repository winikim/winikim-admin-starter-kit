import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

/* Layout */
import Layout from '@/layout/index.vue'

Vue.use(Router)

/*
  Note: 하위 메뉴는 childern.length>=1 일때만 나타난다.
  하위 메뉴가 하나만(children.length==1) 있을 경우 상위 메뉴는 노출되지 않는다. => children이 곧 메뉴가 된다.
*/

/*
  name:'router-name'             name은 <kepp-alive> 사용 시 필수로 입력해야한다. kepp-alive에서 match 하는 값임.
                                 detail see : https://vuejs.org/v2/guide/components-dynamic-async.html#keep-alive-with-Dynamic-Components
  root 또는 title의 값이 있을 때만 breadcrumb에 값이 나타남.
  meta: {
    title: 'title'               타이틀 이름은 sidebarMenu와 breadcrumb에 나타남. (추천)
    icon: 'svg-name'             해당이름을 가진 아이콘이 sidebarMenu에 나타남.
    hidden: true                 if true, this route will not show in the sidebar (default is false)
    breadcrumb: false            if false, the item will be hidden in breadcrumb (default is true)
    noCache: true                if true, the page will not be cached (default is false)
    affix: true                  if true, the tag will affix in the tags-view
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
*/

/**
  ConstantRoutes - 권한에 상관 없이 모두 접근 가능한 기본 페이지
  adminRoutes - 시스템 관리자 권한
*/

export const constantRoutes: RouteConfig[] = [
  {
    path: '/admin/login',
    component: () => import('@/views/admin/login/index.vue'),
    meta: {
      title: '관리자 로그인',
      hidden: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/error/404.vue'),
    meta: {
      title: 'undefined',
      hidden: true
    }
  }
]

export const adminRoutes: RouteConfig[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: 'dashboard',
          icon: 'dashboard',
          affix: true
        }
      }
    ]
  },
  {
    path: '/admin/users',
    component: Layout,
    redirect: '/admin/users/index',
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/admin/user/index.vue'),
        name: 'AdminUser',
        meta: {
          title: 'adminUser',
          icon: 'peoples'
        }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    meta: {
      hidden: true
    }
  }
]

// const router = new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: constantRoutes
// });

const createRouter = () =>
  new Router({
    base: process.env.BASE_URL,
    routes: constantRoutes,
    mode: 'history'
  })

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter();
  (router as any).matcher = (newRouter as any).matcher // reset router
}

export default router
