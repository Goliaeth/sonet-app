import { getUserData } from "../redux/authReducer"

const INITIALIZED_SUCCESSFULLY = "INITIALIZED_SUCCESSFULLY"

const initialState = {
  initialized: false,
}

const appReducer = (state = initialState, action) => {
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

export const initializedSuccessfully = () => ({
  type: INITIALIZED_SUCCESSFULLY,
})

export const initializeApp = () => (dispatch) => {
  const promise1 = dispatch(getUserData())
  //dispatch(something else)
  //dispatch(something else)
  Promise.all([promise1]).then(() => {
    dispatch(initializedSuccessfully())
  })
}

export default appReducer
