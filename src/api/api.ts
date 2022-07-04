import axios from "axios"
import { ProfileType } from "../types/types"

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "09e7b064-65c1-4104-9be1-9105f1fc7916",
    // "API-KEY": "09e7b064-65c1-4104-9be1-9105f1fc7915", // fake-code for error
  },
})

export const usersAPI = {
  async getUsers(currentPage = 1, pageSize = 10) {
    const response = await axiosInstance.get(
      `users?page=${currentPage}&count=${pageSize}`
    )
    return response.data
  },
  async followUser(userId: number) {
    const response = await axiosInstance.post(`follow/${userId}`)
    return response.data
  },
  async unfollowUser(userId: number) {
    const response = await axiosInstance.delete(`follow/${userId}`)
    return response.data
  },
}

export const profileAPI = {
  async getProfile(userId: number | null) {
    const response = await axiosInstance.get(`profile/${userId}`)
    return response.data
  },
  getStatus(userId: number) {
    return axiosInstance.get(`profile/status/${userId}`)
  },
  updateStatus(status: string) {
    return axiosInstance.put(`profile/status`, { status })
  },
  savePhoto(photo: any) {
    const formData = new FormData()
    formData.append("image", photo)
    return axiosInstance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  },
  updateProfile(profileData: ProfileType) {
    return axiosInstance.put(`profile`, profileData)
  },
}

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10,
}
type MeResponseType = {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: ResultCodesEnum
  messages: Array<string>
}
type LoginResponseType = {
  data: {
    userId: number
  }
  resultCode: ResultCodesEnum | ResultCodeForCaptcha
  messages: Array<string>
}
type LogoutResponseType = {
  resultCode: ResultCodesEnum
}
export const authAPI = {
  async me() {
    const response = await axiosInstance.get<MeResponseType>(`auth/me`)
    return response.data
  },
  async login(
    email: string,
    password: string,
    rememberMe = false,
    captcha: string | null = null
  ) {
    const response = await axiosInstance.post<LoginResponseType>(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    })
    return response.data
  },
  async logout() {
    const response = await axiosInstance.delete<LogoutResponseType>(
      `auth/login`
    )
    return response.data
  },
}

export const securityAPI = {
  getCaptchaUrl() {
    return axiosInstance.get(`security/get-captcha-url`)
  },
}
