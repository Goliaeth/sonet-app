import { InferActionsType } from "./store"

type FriendType = {
  id: number
  name: string
  avatar: string
}
const initialState = {
  friends: [
    {
      id: 1,
      name: "Ivan",
      avatar: "",
    },
    {
      id: 2,
      name: "Sasha",
      avatar: "",
    },
    {
      id: 3,
      name: "Michael",
      avatar: "",
    },
  ] as Array<FriendType>,
}
type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>

const sidebarReducer = (state = initialState, action: ActionsType): InitialStateType => {
  
  
  return state;
}

export const actions = {
  
}

export default sidebarReducer