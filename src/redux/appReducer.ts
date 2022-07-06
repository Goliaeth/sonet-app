import { ThunkAction } from "redux-thunk"
import { getUserData } from "./authReducer"
import { AppStateType, InferActionsType } from "./store"


const initialState = {
  initialized: false,
}

type InitialStateType = typeof initialState

type ActionsTypes = InferActionsType<typeof actions>

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'sonet-app/app/INITIALIZED_SUCCESSFULLY':
      return {
        ...state,
        initialized: true,
      }
    default:
      return state
  }
}

export const actions = {
  initializedSuccessfully: () => ({ type: 'sonet-app/app/INITIALIZED_SUCCESSFULLY' } as const),
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>

export const initializeApp = (): ThunkType => (dispatch) => {
  const promise1 = dispatch(getUserData())
  Promise.all([promise1]).then(() => {
    dispatch(actions.initializedSuccessfully())
  })
}

export default appReducer
