
import { JsonObject, JsonProperty } from 'json2typescript'
import { AdminUser } from './admin-user'
import { Pagination } from '../list/pagination'

@JsonObject('AdminUsers')
export class AdminUsers extends Pagination {
  @JsonProperty('elements', [AdminUser])
  private adminUsers: AdminUser[] = []

  public get $adminUsers(): AdminUser[] {
    return this.adminUsers
  }

  public set $adminUsers(value: AdminUser[]) {
    this.adminUsers = value
  }
}
