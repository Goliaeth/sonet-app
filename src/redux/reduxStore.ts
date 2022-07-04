import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import authReducer from "./authReducer"
import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"
import usersReducer from "./usersReducer"
import thunkMiddleware from "redux-thunk"
import appReducer from "./appReducer"

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
})

type RootReducerType = typeof rootReducer // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

export default store
