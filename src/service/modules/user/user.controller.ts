import type { AxiosRequestConfig } from 'axios'
import { Controller, Post } from '@/support/core'
import RequestService from '@/service/providers/request.service'
import UserService from './user.service'
import { LoginDto } from './user.dto'

@Controller('user')
export default class UserController {
  constructor (private readonly requestService: RequestService, private readonly userService: UserService) { }

  @Post('login')
  public async Login<T extends Service.LoginReq, U extends Service.LoginRes> (configure: LoginDto): ServerRes<U> {
    this.userService.Log()
    return await this.requestService.request<T, U>(<AxiosRequestConfig>configure)
  }
}
