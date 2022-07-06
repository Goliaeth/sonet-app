import { InferActionsType } from "./store"


export type DialogType = {
  id: number
  name: string
}
export type MessageType = {
  id: number
  text: string
}
const initialState = {
  dialogs: [
    {
      id: 1,
      name: "Ivan",
    },
    {
      id: 2,
      name: "Sasha",
    },
    {
      id: 3,
      name: "Valera",
    },
    {
      id: 4,
      name: "Viktor",
    },
    {
      id: 5,
      name: "Michael",
    },
    {
      id: 6,
      name: "Viktoria",
    },
  ] as Array<DialogType>,
  messages: [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    },
  ] as Array<MessageType>,
}
type InitialStateType = typeof initialState
type ActionsTypes = InferActionsType<typeof actions>

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case "sonet-app/dialogs/SEND_MESSAGE": {
      const newMessage = {
        id: 4,
        text: action.text,
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
      }
    }

    default:
      return state
  }
}

export const actions = {
  sendMessageActionCreator: (text: string) => ({ type: 'sonet-app/dialogs/SEND_MESSAGE', text } as const),
}

export default dialogsReducer
