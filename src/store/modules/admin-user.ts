import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { IUserState } from './user'
import { SignApi } from '@/api/sign-api'
import { getAccessToken, setAccessToken, removeAccessToken } from '../../utils/cookies'
import { AdminSignIn } from '../../api/type/sign/sign-in'

/**
 * component들과 ADMIN 정보를 공유해서 사용하기 위한 AdminStore
 */
@Module({ dynamic: true, store, name: 'adminUser' })
class AdminUserStore extends VuexModule implements IUserState {
    public id = 0
    public username = ''
    public accessToken = getAccessToken() || ''
    public roles: string[] = []

  private signApi = new SignApi()

  /**
   * accessToken 기반으로 admin 계정에 대한 정보를 조회 하여 adminStore에 저장 한다
   */
  @Action
  public async GetMeInfo() {
    await this.signApi.adminMeInfo().then((result) => {
      this.SET_ROLES(result.$authorities)
      this.SET_ID(result.$id)
      this.SET_USERNAME(result.$username)
    })
  }

  @Action
  public async Login(adminSignIn: AdminSignIn) {
    await this.signApi.adminLogin(adminSignIn).then((result) => {
      setAccessToken(result.$accessToken)
      this.SET_ACCESS_TOKEN(result.$accessToken)
    })
  }

  /**
   * MeModule에서 LogOut 시 같이 호출 되어 처리 됨.
   * 시스템 관리자의 정보를 초기화 시킴
   */
  @Action
  public async LogOut() {
    this.SET_USERNAME('')
    this.SET_ACCESS_TOKEN('')
    this.SET_ROLES([])
    removeAccessToken()
    this.SET_ID(0)
  }

  @Mutation
  private SET_USERNAME(username: string) {
    this.username = username
  }

  @Mutation
  private SET_ACCESS_TOKEN(accessToken: string) {
    this.accessToken = accessToken
  }

  @Mutation
  private SET_ID(id: number) {
    this.id = id
  }

  @Mutation
  private SET_ROLES(roles: string[]) {
    this.roles = roles
  }
}
export const AdminUserModule = getModule(AdminUserStore)
