import axios from "axios"
import { UserType } from "../types/types"

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_API_URL,
  headers: {
    "API-KEY": process.env.REACT_APP_API_KEY || "",
  },
})

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodeForCaptchaEnum {
  CaptchaIsRequired = 10,
}
export type GetItemsType = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}
export type APIResponseType<D = Record<string, unknown>, RC = ResultCodesEnum> = {
  data: D
  messages: Array<string>
  resultCode: RC
}
