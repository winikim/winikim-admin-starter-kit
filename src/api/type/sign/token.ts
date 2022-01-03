import { JsonObject, JsonProperty } from 'json2typescript'

@JsonObject('Token')
export class Token {
  @JsonProperty('accessToken', String)
  private accessToken = '';

  /**
   * Getter $access_token
   * @return {string }
   */
  public get $accessToken(): string {
    return this.accessToken
  }

  /**
   * Setter $access_token
   * @param {string } value
   */
  public set $accessToken(value: string) {
    this.accessToken = value
  }
}
