import { updateNewMessageTextActionCreator, sendMessageActionCreator } from "../../redux/dialogsReducer"
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  // const state = props.store.getState();


  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();
        const sendMessage = () => {
          store.dispatch(sendMessageActionCreator())
        };
        const updateNewMessageText = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text))
        }
        return (
          <Dialogs
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
            newMessageText={state.dialogsPage.newMessageText}
            sendMessage={sendMessage}
            updateNewMessageText={updateNewMessageText}
          />
        )
      }}
    </StoreContext.Consumer>

  );
};

export default DialogsContainer;
