import { type } from "os"
import { authAPI, securityAPI } from "../api/api"

const SET_USER_DATA = "sonet-app/auth/SET_USER_DATA"
const GET_CAPTCHA_URL_SUCCESS = "sonet-app/auth/GET_CAPTCHA_URL_SUCCESS"

export type InitialStateType = {
  userId: number | null
  login: string | null
  email: string | null
  isAuth: boolean
  captchaUrl: string | null
}

const initialState: InitialStateType = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null, //if null then captcha is not required
}

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      }
    default:
      return state
  }
}

type SetUserDataActionPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}
type SetUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: SetUserDataActionPayloadType
}
export const setUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
})

export const getUserData = () => async (dispatch: any) => {
  const data = await authAPI.me()

  if (data.resultCode === 0) {
    const { id, email, login } = data.data
    dispatch(setUserData(id, email, login, true))
  }
}

export const login =
  (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: any) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {
      dispatch(getUserData())
      dispatch(getCaptchaUrlSuccess(null))
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl())
      }
      return response.data.messages[0]
    }
  }

export const logout = () => async (dispatch: any) => {
  const response = await authAPI.logout()

  if (response.data.resultCode === 0) {
    dispatch(dispatch(setUserData(null, null, null, false)))
  }
}

type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  captchaUrl: string | null
}
export const getCaptchaUrlSuccess = (captchaUrl: string | null): GetCaptchaUrlSuccessActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  captchaUrl,
})
export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer
