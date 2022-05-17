import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import { Form, Field } from "react-final-form"

const SendMessageForm = (props) => {
  const onSubmit = (values, action) => {
    props.sendMessage(values.newMessageText)
    action.reset()
  }

  return (
    <>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                placeholder='Enter your message'
                name='newMessageText'
                component='textarea'
              />
            </div>
            <div>
              <button type='submit' disabled={submitting || pristine}>
                Send message
              </button>
            </div>
          </form>
        )}
      />
    </>
  )
}

const Dialogs = (props) => {
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
