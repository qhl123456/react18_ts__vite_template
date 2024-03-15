
type axiosResponse<T = any> = {
  Message: string
  ResultCode: number
  Success: boolean
  Tag: T
  TotalRecord: string | number
}


declare type Fn<T = any, R = void> = (...arg: T[]) => R

declare type anyObject<K extends string | number | symbol = string, V = any> = Record<K, V>

declare type PromiseFN<T = any, R = void> = (...args: T[]) => Promise<R>

declare type PromiseFetchFN<T = any, R = any> = (...args: T[]) => Promise<axiosResponse<R>>

declare type fetchResponseType<T = any> = Promise<axiosResponse<T>>