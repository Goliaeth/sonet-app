import { axiosInstance } from "./api"

type CaptchaUrlType = {
  url: string
}

export const securityAPI = {
  async getCaptchaUrl() {
    const response = await axiosInstance.get<CaptchaUrlType>(`security/get-captcha-url`)
    return response.data
  },
}
