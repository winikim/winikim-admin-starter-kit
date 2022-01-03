import { JsonObject, JsonProperty } from 'json2typescript'

@JsonObject('AdminSignIn')
export class AdminSignIn {
  @JsonProperty('username', String)
  private username = '';

  @JsonProperty('password', String)
  private password = '';

  /**
   * Getter $username
   * @return {string }
   */
  public get $username(): string {
    return this.username
  }

  public set $username(value: string) {
    this.username = value
  }

  /**
   * Getter $password
   * @return {string }
   */
  public get $password(): string {
    return this.password
  }

  public set $password(value: string) {
    this.password = value
  }
}
