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
export type InitialStateType = typeof initialState

const sidebarReducer = (state = initialState, action: any): InitialStateType => {
  
  
  return state;
}

export default sidebarReducer