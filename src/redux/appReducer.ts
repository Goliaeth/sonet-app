// import { kill } from "process"
import { ThunkAction } from "redux-thunk"
import { getUserData } from "./authReducer"
import { AppStateType } from "./reduxStore"

const INITIALIZED_SUCCESSFULLY = "INITIALIZED_SUCCESSFULLY"

export type InitialStateType = {
  initialized: boolean
}

const initialState: InitialStateType = {
  initialized: false,
}

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESSFULLY:
      return {
        ...state,
        initialized: true,
      }
    default:
      return state
  }
}

type ActionsTypes = InitializedSuccessfullyActionType

type InitializedSuccessfullyActionType = {
  type: typeof INITIALIZED_SUCCESSFULLY,
}

export const initializedSuccessfully = (): InitializedSuccessfullyActionType => ({
  type: INITIALIZED_SUCCESSFULLY,
})

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>

export const initializeApp = (): ThunkType => (dispatch) => {
  const promise1 = dispatch(getUserData())
  //dispatch(something else)
  //dispatch(something else)
  Promise.all([promise1]).then(() => {
    dispatch(initializedSuccessfully())
  })
}

export default appReducer
