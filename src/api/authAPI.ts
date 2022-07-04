import {
  axiosInstance,
  ResultCodesEnum,
  ResultCodeForCaptcha,
  ResponseType,
} from "./api"

type MeResponseDataType = {
  id: number
  email: string
  login: string
}
type LoginResponseDataType = {
  userId: number
}

export const authAPI = {
  async me() {
    const response = await axiosInstance.get<ResponseType<MeResponseDataType>>(
      `auth/me`
    )
    return response.data
  },
  async login(
    email: string,
    password: string,
    rememberMe = false,
    captcha: string | null = null
  ) {
    const response = await axiosInstance.post<
      ResponseType<
        LoginResponseDataType,
        ResultCodesEnum | ResultCodeForCaptcha
      >
    >(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    })
    return response.data
  },
  async logout() {
    const response = await axiosInstance.delete<ResponseType>(`auth/login`)
    return response.data
  },
}
