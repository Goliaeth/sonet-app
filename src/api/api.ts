import axios from "axios"
import { UserType } from "../types/types"

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "09e7b064-65c1-4104-9be1-9105f1fc7916",
    // "API-KEY": "09e7b064-65c1-4104-9be1-9105f1fc7915", // fake-code for error
  },
})


export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10,
}
export type GetItemsType = {
  items: Array<UserType>
  totalUsersCount: number
  error: string | null
}
export type ResponseType<D = Record<string, unknown>, RC = ResultCodesEnum> = {
  data: D
  messages: Array<string>
  resultCode: RC
}