import { Form } from "react-final-form"
import { createField, Input } from "../../common/FormControls/FormControls"

const ProfileDataForm = ({ profile, deactivateEditMode }) => {
  const onSubmit = (values) => {
    deactivateEditMode()
  }

  const initialValues = {
    fullName: profile.fullName,
    lookingForAJob: profile.lookingForAJob,
    lookingForAJobDescription: profile.lookingForAJobDescription,
    aboutMe: profile.aboutMe,
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
            Looking for a job:{" "}
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
            Contacts:
            {Object.keys(profile.contacts).map((key) =>
              createField({
                key: key,
                name: key,
                component: Input,
                type: "text",
                label: `${key}:`,
              })
            )}
          </div>
          <div>
            <button type='submit'>Save</button>
          </div>
        </form>
      )}
    />
  )
}

export default ProfileDataForm
