import classes from "./Login.module.css"
import { Form, Field } from "react-final-form"
import { validators } from "../../utils/validators"

const LoginForm = (props) => {
  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name='login' validate={validators.required}>
            {({ input, meta }) => (
              <div>
                <label>Your login: </label>
                <input {...input} type='text' placeholder='Enter your login' />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name='password' validate={validators.required}>
            {({ input, meta }) => (
              <div>
                <label>Your password: </label>
                <input
                  {...input}
                  type='text'
                  placeholder='Enter your password'
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div>
            <Field name='rememberMe' component='input' type='checkbox' />{" "}
            remember me
          </div>
          <div>
            <button type='submit'>Login</button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  )
}

const Login = () => {
  return (
    <>
      <h1>LOGIN</h1>
      <LoginForm />
    </>
  )
}

export default Login
