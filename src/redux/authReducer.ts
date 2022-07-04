import { ThunkAction } from "redux-thunk"
import { ResultCodeForCaptcha, ResultCodesEnum } from "../api/api"
import { securityAPI } from "../api/securityAPI"
import { authAPI } from "../api/authAPI"
import { AppStateType } from "./reduxStore"

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

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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

type ActionsTypes = 
  | SetUserDataActionType
  | GetCaptchaUrlSuccessActionType

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

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>

export const getUserData = (): ThunkType => async (dispatch) => {
  const meData = await authAPI.me()

  if (meData.resultCode === ResultCodesEnum.Success) {
    const { id, email, login } = meData.data
    dispatch(setUserData(id, email, login, true))
  }
}

export const login =
  (email: string, password: string, rememberMe: boolean, captcha: any): ThunkType => async (dispatch) => {
    const loginData = await authAPI.login(email, password, rememberMe, captcha)

    if (loginData.resultCode === ResultCodesEnum.Success) {
      dispatch(getUserData())
      dispatch(getCaptchaUrlSuccess(null))
    } else {
      if (loginData.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
        dispatch(getCaptchaUrl())
      }
      return loginData.messages[0]
    }
  }

export const logout = (): ThunkType => async (dispatch) => {
  const logoutData = await authAPI.logout()

  if (logoutData.resultCode === ResultCodesEnum.Success) {
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
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer
