import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from "../../redux/store"

const Dialogs = (props) => {
  const dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
  ));
  const messagesElements = props.dialogsPage.messages.map((message) => (
    <Message key={message.id} message={message.text} />
  ));

  const newMessageElement = React.createRef();
  const sendMessage = () => {
    props.dispatch(sendMessageActionCreator())
  };
  const onNewMessageTextChange = () => {
    const text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text))
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogsElements}</div>
      <div>
        <div className={classes.messageItems}>{messagesElements}</div>
        <div>
          <textarea ref={newMessageElement} value={props.dialogsPage.newMessageText} onChange={onNewMessageTextChange}></textarea>
        </div>
        <div>
          <button onClick={sendMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
