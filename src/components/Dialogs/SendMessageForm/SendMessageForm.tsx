import React from "react"
import { Form, Field } from "react-final-form"
import { validators } from "../../../utils/validators"
import { Input } from "../../common/FormControls/FormControls"

type SendMessageFormPropsType = {
  sendMessage: (text: string) => void
}

const SendMessageForm: React.FC<SendMessageFormPropsType> = (props) => {
  const onSubmit = (values: any, action: any) => {
    props.sendMessage(values.newMessageText)
    action.reset()
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name='newMessageText'
            validate={validators.maxLength(15)}
            component={Input}
            type='text'
            placeholder='Enter your message here'
          />
          <div>
            <button type='submit' disabled={submitting || pristine}>
              Send message
            </button>
          </div>
        </form>
      )}
    />
  )
}

export default SendMessageForm
