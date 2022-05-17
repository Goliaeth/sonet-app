const SEND_MESSAGE = "SEND_MESSAGE"

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
  ],
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
  ],
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: 4,
        text: action.text,
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
      }

    default:
      return state
  }
}

export const sendMessageActionCreator = (text) => ({ type: SEND_MESSAGE, text })

export default dialogsReducer
