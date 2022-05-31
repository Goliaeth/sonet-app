import { authAPI, securityAPI } from "../api/api"

const SET_USER_DATA = "sonet-app/auth/SET_USER_DATA"
const GET_CAPTCHA_URL_SUCCESS = "sonet-app/auth/GET_CAPTCHA_URL_SUCCESS"

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null, //if null then captcha is not required
}

const authReducer = (state = initialState, action) => {
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

export const setUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
})

export const getUserData = () => async (dispatch) => {
  const data = await authAPI.me()

  if (data.resultCode === 0) {
    const { id, email, login } = data.data
    dispatch(setUserData(id, email, login, true))
  }
}

export const login =
  (email, password, rememberMe, captcha) => async (dispatch) => {
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

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout()

  if (response.data.resultCode === 0) {
    dispatch(dispatch(setUserData(null, null, null, false)))
  }
}

export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  captchaUrl,
})
export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer
