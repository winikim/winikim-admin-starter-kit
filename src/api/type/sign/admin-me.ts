import { JsonObject, JsonProperty } from 'json2typescript'

@JsonObject('AdminMe')
export class AdminMe {
  @JsonProperty('id', Number)
  private id = 0;

  @JsonProperty('authorities', [])
  private authorities: string[] = [];

  @JsonProperty('username', String)
  private username = '';

  public get $authorities(): string[] {
    return this.authorities
  }

  public set $authorities(value: string[]) {
    this.authorities = value
  }

  public get $id(): number {
    return this.id
  }

  public set $id(value: number) {
    this.id = value
  }

  public get $username(): string {
    return this.username
  }

  public set $username(value: string) {
    this.username = value
  }
}
