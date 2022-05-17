import { Form, Field } from "react-final-form"
import { validators } from "../../../utils/validators"

const SendMessageForm = (props) => {
  const onSubmit = (values, action) => {
    props.sendMessage(values.newMessageText)
    action.reset()
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name='newMessageText' validate={validators.maxLength(15)}>
            {({ input, meta }) => (
              <div>
                <input
                  {...input}
                  type='text'
                  placeholder='Enter your message here'
                />
                {meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div>
            <button type='submit' disabled={submitting || pristine}>
              Send message
            </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  )
}

export default SendMessageForm
