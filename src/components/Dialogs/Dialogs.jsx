import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
  ));
  const messagesElements = props.dialogsPage.messages.map((message) => (
    <Message key={message.id} message={message.text} />
  ));

  const onSendMessage = () => {
    props.sendMessage();
  };
  const onNewMessageTextChange = (event) => {
    const text = event.target.value;
    props.updateNewMessageText(text);
  }
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogsElements}</div>
      <div>
        <div className={classes.messageItems}>{messagesElements}</div>
        <div>
          <textarea value={props.dialogsPage.newMessageText} onChange={onNewMessageTextChange} placeholder="Enter your message"></textarea>
        </div>
        <div>
          <button onClick={onSendMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;