import { Field } from "react-final-form"

const FormControl = ({ input, meta: { touched, error }, children, label }) => {
  return (
    <div>
      {label ? (
        <label>
          <b>{label}</b>
        </label>
      ) : null}
      <div>{children}</div>
      {error && touched && <span>{error}</span>}
    </div>
  )
}

export const Input = (props) => {
  const { input, ...restProps } = props
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  )
}

export const createField = (props) => <Field {...props} />
