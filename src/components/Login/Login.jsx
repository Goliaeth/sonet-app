import classes from "./Login.module.css"
import { Form, Field } from "react-final-form"

const LoginForm = (props) => {
  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={(props) => (
        <form onSubmit={props.handleSubmit}>
          <div>
            <label>Your login:</label>
            <Field placeholder='Login' name='login' component='input' />
          </div>
          <div>
            <label>Your password:</label>
            <Field
              placeholder='Password'
              name={"password"}
              component={"input"}
            />
          </div>
          <div>
            <Field name='rememberMe' component='input' type='checkbox' />{" "}
            remember me
          </div>
          <div>
            <button type='submit'>Login</button>
          </div>
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
