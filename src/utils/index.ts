export default {
  /**
   * @method 设置网站title
   * @param title:标题
   */
  setDocumentTitle(title: string) {
    document.title = title
    const ua = navigator.userAgent
    // eslint-disable-next-line
    const regex = /\bMicroMessenger\/([\d\.]+)/
    if (regex.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
      const i = document.createElement('iframe')
      i.src = '/favicon.ico'
      i.style.display = 'none'
      i.onload = function () {
        setTimeout(function () {
          i.remove()
        }, 9)
      }
      document.body.appendChild(i)
    }
  },

  /**
   * @method 设置网站icon
   * @param icon icon
   */
  setDocumentIcon(icon: string) {
    const link: any = document.querySelector("link[rel*='icon']") || document.createElement('link')
    link.type = 'image/x-icon'
    link.rel = 'shortcut icon'
    link.href = icon
    document.getElementsByTagName('head')[0].appendChild(link)
  },

  /**
   * @method 生成唯一uuid
   * @param len 长度
   * @param radix 基数
   * @desc uuid(8,10)
   */
  uuid(len: number, radix: number): string {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
    const uuid = []
    let i: number
    radix = radix || chars.length
    if (len) {
      // Compact form
      for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)]
    } else {
      let r
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
      uuid[14] = '4'
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | (Math.random() * 16)
          uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r]
        }
      }
    }
    return uuid.join('')
  },

  /**
   * @method 下载文件 word/excel等浏览器可以识别的文件，不识别直接在新页面打开
   * @param fileUrl 文件url
   */
  uploadFile(fileUrl: string) {
    window.open(encodeURI(fileUrl), fileUrl, 'noopener=yes,noreferrer=yes')
  },

  /**
   * @method 根据某个字段给数组去重
   * @param arr 需要去重的数组
   * @param field 字段名 例如id，name等
   * @returns 返回去重后的数组
   */
  unique<T = Record<string, any>>(arr: Array<T>, field: keyof T): Array<T> {
    const map = new Map()
    return arr.filter((item) => !map.has(item[field]) && map.set(item[field], 1))
  },

  /**
   * @method 给指定字符串的指定位置插入指定字符串
   * @param source 要插入的字符串
   * @param start 开始位置
   * @param newStr 插入的字符串
   * @returns 返回插入后的源字符串
   */
  insertStr(source: string, start: number, newStr: string): string {
    return source.slice(0, start) + newStr + source.slice(start)
  },

  /**
   * @method 根据ASCII码给数组排序
   * @param recordA 每一项a
   * @param recordB 每一项b
   * @param field 排序字段
   * @returns 1: 升序 -1:降序 0:平序
   */
  sortByAscII(recordA: Record<string, any>, recordB: Record<string, any>, field: string) {
    if (recordA[field] > recordB[field]) {
      return 1
    } else if (recordA[field] < recordB[field]) {
      return -1
    } else {
      return 0
    }
  },

  /**
   * @method 保留X位小数并四舍五入
   * @param num 需要保留的数字
   * @param decimalPlaces 精度
   * @returns 格式化后的数字
   * @description toFixed在数字特别小的时候会出现精度丢失无法四舍五入
   */
  roundNumber(num: number, decimalPlaces: number) {
    const factor = Math.pow(10, decimalPlaces)
    return Math.round(num * factor) / factor
  },
}