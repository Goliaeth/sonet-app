import { authAPI } from "../api/api"
import { FORM_ERROR } from "final-form"

const SET_USER_DATA = "SET_USER_DATA"

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export const setUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
})

export const getUserData = () => (dispatch) => {
  authAPI.me().then((data) => {
    if (data.resultCode === 0) {
      const { id, email, login } = data.data
      dispatch(setUserData(id, email, login, true))
    }
  })
}

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getUserData())
    } else if (response.data.resultCode === 1) {
      return { [FORM_ERROR]: response.data.messages[0] }
    }
  })
}

export const logout = () => (dispatch) => {
  authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(dispatch(setUserData(null, null, null, false)))
    }
  })
}

export default authReducer
