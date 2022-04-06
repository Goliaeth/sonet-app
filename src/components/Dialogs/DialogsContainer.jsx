import { updateNewMessageTextActionCreator, sendMessageActionCreator } from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  const state = props.store.getState();
  const sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator())
  };
  const updateNewMessageText = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text))
  }

  return (
    <Dialogs
      dialogs={state.dialogsPage.dialogs}
      messages={state.dialogsPage.messages}
      newMessageText={state.dialogsPage.newMessageText}
      sendMessage={sendMessage}
      updateNewMessageText={updateNewMessageText}
    />
  );
};

export default DialogsContainer;
