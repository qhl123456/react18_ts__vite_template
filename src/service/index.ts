import axios from 'axios'
import qs from 'qs'
import { AXIOS_BASE_CONFIG } from './request/config'

import type {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosInstance,
  AxiosError
} from 'axios'

import { message } from 'antd'

// import useStorage from '@/hooks/useStorage'

// const { getStorage } = useStorage()

const handleError = (error: AxiosError<axiosResponse>) => {
  const { Message = '' } = error.response!.data
  message.destroy()
  message.error(Message ? Message : '请求失败,请重新刷新页面')
  return Promise.reject(error)
}

class Request {
  private instance: AxiosInstance
  constructor(config: AxiosRequestConfig = {}) {
    this.instance = axios.create({ ...AXIOS_BASE_CONFIG, ...config })
    this.initInstance()
  }

  /**
   * @method 初始化拦截器
   */
  private initInstance() {
    /**
     * @method 请求拦截器
     */
    this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
      // const _token = getStorage('session', TYPES.ASSESS_TOKEN)
      // if (_token) {
      //   config.headers!.common['Authorization'] = _token
      // }
      if (['GET', 'get'].includes(config.method!)) {
        config.url += '?' + qs.stringify(config.data ?? '')
      }
      return config
    }, handleError)

    /**
     * @method 响应拦截器
     */
    this.instance.interceptors.response.use(
      (response: AxiosResponse<axiosResponse>) => {
        if (!response.data.Success) {
          message.error(response.data.Message ?? '系统异常')
          if ([403, 505].includes(response.data.ResultCode)) {
            setTimeout(() => {
              window.location.replace(window.location.origin)
            }, 500)
          }
          return Promise.reject(response.data)
        }

        return Promise.resolve(response.data)
      },
      handleError
    )
  }

  /**
   * @method 请求
   * @param config 请求配置项
   */
  private request<D = any>(config: AxiosRequestConfig) {
    return new Promise<axiosResponse<D>>(async (resolve, reject) => {
      try {
        const res = await this.instance.request<
          axiosResponse<D>,
          axiosResponse<D>
        >(config)
        resolve(res)
      } catch (error) {
        console.log('error', error)
        reject(error)
      }
    })
  }

  /**
   * @method GET请求
   * @param config 请求配置项
   */
  public GET<R>(config: AxiosRequestConfig) {
    return this.request<R>({ ...config, method: 'GET' })
  }

  /**
   * @method POST请求
   * @param config 请求配置项
   */
  public POST<R>(config: AxiosRequestConfig) {
    return this.request<R>({ ...config, method: 'POST' })
  }

  /**
   * @method PUT请求
   * @param config 请求配置项
   */
  public PUT<R>(config: AxiosRequestConfig) {
    return this.request<R>({ ...config, method: 'PUT' })
  }

  /**
   * @method DELETE请求
   * @param config 请求配置项
   */
  public DELETE<R>(config: AxiosRequestConfig) {
    return this.request<R>({ ...config, method: 'DELETE' })
  }
}

export default new Request()
