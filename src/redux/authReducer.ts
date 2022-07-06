import { ResultCodeForCaptchaEnum, ResultCodesEnum } from "../api/api"
import { securityAPI } from "../api/securityAPI"
import { authAPI } from "../api/authAPI"
import { BaseThunkType, InferActionsType } from "./store"

const initialState = {
  userId: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null, //if null then captcha is not required
}

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsType<typeof actions>

const authReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case "sonet-app/auth/SET_USER_DATA":
      return {
        ...state,
        ...action.payload,
      }
    case "sonet-app/auth/GET_CAPTCHA_URL_SUCCESS":
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      }
    default:
      return state
  }
}

export const actions = {
  setUserData: (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
  ) =>
    ({
      type: "sonet-app/auth/SET_USER_DATA",
      payload: { userId, email, login, isAuth },
    } as const),
  getCaptchaUrlSuccess: (captchaUrl: string | null) =>
    ({
      type: "sonet-app/auth/GET_CAPTCHA_URL_SUCCESS",
      captchaUrl,
    } as const),
}

export const getUserData =
  (): BaseThunkType<ActionsTypes> => async (dispatch) => {
    const meData = await authAPI.me()

    if (meData.resultCode === ResultCodesEnum.Success) {
      const { id, email, login } = meData.data
      dispatch(actions.setUserData(id, email, login, true))
    }
  }

export const login =
  (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
  ): BaseThunkType<ActionsTypes, Promise<string | undefined>> =>
  async (dispatch) => {
    const loginData = await authAPI.login(email, password, rememberMe, captcha)

    if (loginData.resultCode === ResultCodesEnum.Success) {
      dispatch(getUserData())
      dispatch(actions.getCaptchaUrlSuccess(null))
    } else {
      if (loginData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
        dispatch(getCaptchaUrl())
      }
      return loginData.messages[0]
    }
  }

export const logout = (): BaseThunkType<ActionsTypes> => async (dispatch) => {
  const logoutData = await authAPI.logout()

  if (logoutData.resultCode === ResultCodesEnum.Success) {
    dispatch(dispatch(actions.setUserData(null, null, null, false)))
  }
}

export const getCaptchaUrl =
  (): BaseThunkType<ActionsTypes> => async (dispatch) => {
    const captcha = await securityAPI.getCaptchaUrl()
    dispatch(actions.getCaptchaUrlSuccess(captcha.url))
  }

export default authReducer
