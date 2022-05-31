import { Form } from "react-final-form"
import { createField, Input } from "../../common/FormControls/FormControls"
import { FORM_ERROR } from "final-form"

const ProfileDataForm = ({ profile, deactivateEditMode, saveProfile }) => {
  const onSubmit = (values) => {
    const errors = saveProfile(values)
    return errors.then((res) => {
      if (!res) {
        deactivateEditMode()
      } else {
        return errors.then((res) => ({ [FORM_ERROR]: res }))
      }
    })
  }

  const initialValues = {
    fullName: profile.fullName,
    lookingForAJob: profile.lookingForAJob,
    lookingForAJobDescription: profile.lookingForAJobDescription,
    aboutMe: profile.aboutMe,
    contacts: profile.contacts,
  }

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, submitError }) => (
        <form onSubmit={handleSubmit}>
          {createField({
            name: "fullName",
            component: Input,
            type: "text",
            label: "Full Name:",
          })}
          <div>
            <b>Looking for a job: </b>
            {createField({
              name: "lookingForAJob",
              component: "input",
              type: "checkbox",
            })}
          </div>
          {createField({
            name: "lookingForAJobDescription",
            component: Input,
            type: "text",
            label: "Looking for a job description:",
          })}
          {createField({
            name: "aboutMe",
            component: Input,
            type: "text",
            label: "About me:",
          })}
          <div>
            <b>Contacts:</b>
            {Object.keys(profile.contacts).map((key) =>
              createField({
                key: key,
                name: `contacts.${key}`,
                component: Input,
                type: "text",
                label: `${key}:`,
              })
            )}
          </div>
          {submitError && <div style={{ color: "red" }}>{submitError}</div>}
          <div>
            <button type='submit'>Save</button>
          </div>
        </form>
      )}
    />
  )
}

export default ProfileDataForm
