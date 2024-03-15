import request from '@/service'

enum homeApiEnum {
  accountSignIn = 'auth/user/account/signIn'
}

/**登录 */
export const accountSignIn = (data: any) =>
  request.POST<{ token: string }>({ url: homeApiEnum.accountSignIn, data })
