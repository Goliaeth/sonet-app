// import { kill } from "process"
import { getUserData } from "./authReducer"

const INITIALIZED_SUCCESSFULLY = "INITIALIZED_SUCCESSFULLY"

export type InitialStateType = {
  initialized: boolean
}

const initialState: InitialStateType = {
  initialized: false,
}

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type InitializedSuccessfullyActionType = {
  type: typeof INITIALIZED_SUCCESSFULLY,
}

export const initializedSuccessfully = (): InitializedSuccessfullyActionType => ({
  type: INITIALIZED_SUCCESSFULLY,
})

export const initializeApp = () => (dispatch: any) => {
  const promise1 = dispatch(getUserData())
  //dispatch(something else)
  //dispatch(something else)
  Promise.all([promise1]).then(() => {
    dispatch(initializedSuccessfully())
  })
}

export default appReducer
