
/**
 * LocalStorage를 사용하여 브라우저에 값을 저장
 */

// App
const sidebarStatusKey = 'sidebar_status'
export const getSidebarStatus = () => localStorage.getItem(sidebarStatusKey)
export const setSidebarStatus = (sidebarStatus: string) => localStorage.setItem(sidebarStatusKey, sidebarStatus)

// User
const tokenKey = 'access_token'
export const getAccessToken = () => localStorage.getItem(tokenKey)
export const setAccessToken = (accessToken: string) => localStorage.setItem(tokenKey, accessToken)
export const removeAccessToken = () => localStorage.removeItem(tokenKey)
const userInfoKey = 'site_id'
export const setUserName = (userName: string) => localStorage.setItem(userInfoKey, userName)
export const getUserName = () => localStorage.getItem(userInfoKey)
export const removeUserName = () => localStorage.removeItem(userInfoKey)
