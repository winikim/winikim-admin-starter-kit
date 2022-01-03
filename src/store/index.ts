import Vue from 'vue'
import Vuex from 'vuex'
import { IUserState } from './modules/user'
import { IPermissionState } from './modules/permission'
import { IAppState } from './modules/app'
import { ITagsViewState } from './modules/tags-view'
import { ISettingsState } from './modules/settings'

Vue.use(Vuex)

export interface RootState {
  app: IAppState
  user: IUserState
  tagsView: ITagsViewState
  permission: IPermissionState
  settings: ISettingsState
}

export default new Vuex.Store<RootState>({})
