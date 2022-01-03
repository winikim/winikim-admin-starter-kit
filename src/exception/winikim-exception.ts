/**
 * Exception 메시지 객체
 */
 export class WinikimException {
    private code: number = 0
    private message: string = ''
  
    constructor(code: number, message: string) {
      this.code = code
      this.message = message
    }
  
    /**
       * Getter $code
       * @return {number }
       */
    public get $code(): number {
      return this.code
    }
  
    /**
       * Getter $message
       * @return {string }
       */
    public get $message(): string {
      return this.message
    }
  }