import { Form, Field } from "react-final-form"
import { validators } from "../../../../utils/validators"
import { Input } from "../../../common/FormControls/FormControls"

const NewPostForm = (props) => {
  const onSubmit = (values, action) => {
    props.addPost(values.postText)
    action.reset()
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name='postText'
            validate={validators.maxLength(15)}
            component={Input}
            type='text'
            placeholder='Enter text of your post here'
          />
          <div>
            <button type='submit' disabled={submitting || pristine}>
              Add post
            </button>
          </div>
        </form>
      )}
    />
  )
}

export default NewPostForm
