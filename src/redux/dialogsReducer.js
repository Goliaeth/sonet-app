const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

const dialogsReducer = (state, action) => {
  
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: 4,
        text: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;

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