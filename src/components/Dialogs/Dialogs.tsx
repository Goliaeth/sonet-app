import React from "react"
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import SendMessageForm from "./SendMessageForm/SendMessageForm"
import { DialogType, MessageType } from "../../redux/dialogsReducer"

type DialogsProps = {
  dialogsPage: {
    dialogs: DialogType[]
    messages: MessageType[]
  }
  sendMessage: (text: string) => void
}

const Dialogs: React.FC<DialogsProps> = (props) => {
  const dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
  ))
  const messagesElements = props.dialogsPage.messages.map((message) => (
    <Message key={message.id} message={message.text} />
  ))

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogsElements}</div>
      <div>
        <div className={classes.messageItems}>{messagesElements}</div>
        <SendMessageForm sendMessage={props.sendMessage} />
      </div>
    </div>
  )
}

export default Dialogs
