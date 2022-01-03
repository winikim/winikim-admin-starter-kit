import { JsonObject, JsonProperty } from 'json2typescript'

/**
 * 시스템 관리자
 */
 @JsonObject('AddAdminUser')
export class AddAdminUser {
   @JsonProperty('username', String)
   private username = '';

   @JsonProperty('password', String)
   private password = '';

   public get $username(): string {
     return this.username
   }

   public set $username(value: string) {
     this.username = value
   }

   public set $password(value: string) {
     this.password = value
   }

   public get $password(): string {
     return this.password
   }
}

@JsonObject('AdminUser')
export class AdminUser {
  @JsonProperty('username', String)
  private username = '';

  @JsonProperty('id', Number)
  private id = 0;
}
