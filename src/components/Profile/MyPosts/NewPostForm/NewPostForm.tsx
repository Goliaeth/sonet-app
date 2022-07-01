import React from "react"
import { Form, Field } from "react-final-form"
import { validators } from "../../../../utils/validators"
import { Input } from "../../../common/FormControls/FormControls"

type NewPostFormPropsType = {
  addPost: (postText: string) => void
}

const NewPostForm: React.FC<NewPostFormPropsType> = (props) => {
  const onSubmit = (values: any, action: any) => {
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
