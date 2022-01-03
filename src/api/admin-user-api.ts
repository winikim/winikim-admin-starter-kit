import request from '@/utils/request'
import { AddAdminUser } from './type/admin-user/admin-user'
import { ParameterOfPagination } from './type/parameter/parameter'
import { JsonConvert } from 'json2typescript'
import { AdminUsers } from './type/admin-user/admin-users'
export class AdminUserApi {
  public addAdminUser(addAdminUser: AddAdminUser) {
    return request({
      url: '/admin/users',
      method: 'post',
      data: addAdminUser
    })
  }

  public fetchAdminUserList(parameter: ParameterOfPagination): Promise<AdminUsers> {
    const jsonConvert = new JsonConvert()
    return request({
      url: '/admin/users',
      method: 'get',
      params: jsonConvert.serializeObject(parameter)
    }).then((result) => {
      return new Promise<AdminUsers>(function(resolve) {
        const jsonConvert = new JsonConvert()
        resolve(jsonConvert.deserializeObject(result.data, AdminUsers))
      })
    }).catch((error) => {
      return error
    })
  }

  public deleteAdminUser(id: number) {
    return request({
      url: '/admin/users/' + id,
      method: 'delete'
    })
  }
}
