const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

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
  newMessageText: "",
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
        const newMessage = {
          id: 4,
          text: state.newMessageText,
        };
        return {
          ...state,
          messages: [...state.messages, newMessage],
          newMessageText: "",
        }
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      }
      
      
    default:
      return state;
  }
  
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE, })
export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  })

export default dialogsReducer