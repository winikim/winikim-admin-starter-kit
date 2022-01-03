import { JsonProperty, JsonObject } from 'json2typescript'
/**
 * 응답에 대한 Pagination
 */
@JsonObject('Pagination')
export class Pagination {
  @JsonProperty('page', Number)
  private page = 0;

  @JsonProperty('size', Number)
  private size = 0;

  @JsonProperty('totalElements', Number)
  private totalElements = 0;

  public get $page(): number {
    return this.page
  }

  public set $page(value: number) {
    this.page = value
  }

  public get $size(): number {
    return this.size
  }

  public set $size(value: number) {
    this.size = value
  }

  public get $totalElements(): number {
    return this.totalElements
  }

  public set $totalElements(value: number) {
    this.totalElements = value
  }
}
