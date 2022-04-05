import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
  ));
  const messagesElements = props.state.messages.map((message) => (
    <Message key={message.id} message={message.text} />
  ));

  const newMessageElement = React.createRef();
  const sendMessage = () => {
    const text = newMessageElement.current.value;
    alert(text);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogsElements}</div>
      <div>
        <div className={classes.messageItems}>{messagesElements}</div>
        <div>
          <textarea ref={newMessageElement}></textarea>
        </div>
        <div>
          <button onClick={sendMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
