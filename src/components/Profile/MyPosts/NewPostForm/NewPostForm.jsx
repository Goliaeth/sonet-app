import { Form, Field } from "react-final-form"
import { validators } from "../../../../utils/validators"

const NewPostForm = (props) => {
  const onSubmit = (values, action) => {
    props.addPost(values.postText)
    action.reset()
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name='postText' validate={validators.maxLength(15)}>
            {({ input, meta }) => (
              <div>
                <input
                  {...input}
                  type='text'
                  placeholder='Enter text of your post here'
                />
                {meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div>
            <button type='submit' disabled={submitting || pristine}>
              Add post
            </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  )
}

export default NewPostForm
