import {
  axiosInstance,
  ResultCodesEnum,
  ResultCodeForCaptchaEnum,
  APIResponseType,
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
    const response = await axiosInstance.get<APIResponseType<MeResponseDataType>>(
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
      APIResponseType<
        LoginResponseDataType,
        ResultCodesEnum | ResultCodeForCaptchaEnum
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
    const response = await axiosInstance.delete<APIResponseType>(`auth/login`)
    return response.data
  },
}
