import { JsonObject, JsonProperty } from 'json2typescript'
/**
 * 요청에 대한 공통 QueryParameter 정의
 */
@JsonObject('ParameterOfPagination')
export class ParameterOfPagination {
  @JsonProperty('page', Number)
  private page= 0;

  @JsonProperty('size', Number)
  private size= 8;

  public get $page(): number {
    return this.page
  }

  public set $page(value: number) {
    this.page = value - 1 // page는 0부터 시작함.
  }

  public get $size(): number {
    return this.size
  }

  public set $size(value: number) {
    this.size = value
  }
}
