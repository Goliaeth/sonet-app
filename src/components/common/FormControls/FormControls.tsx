import React from "react"
import { Field, FieldRenderProps } from "react-final-form"

// type FormControlPropsType = {

// }
const FormControl: React.FC<FieldRenderProps<any>> = ({ input, meta: { touched, error }, children, label }) => {
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

export const Input: React.FC<FieldRenderProps<any>> = (props) => {
  const { input, ...restProps } = props
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  )
}

export const createField = (props: any) => <Field {...props} />
