import classes from "./Login.module.css"
import { Form, Field } from "react-final-form"
import { validators } from "../../utils/validators"
import { connect } from "react-redux"
import { login } from "../../redux/authReducer"
import { Navigate } from "react-router-dom"

const LoginForm = (props) => {
  const onSubmit = (values) => {
    let errors = props.login(values.email, values.password, values.rememberMe)
    return errors.then((res) => res)
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name='email' validate={validators.required}>
            {({ input, meta }) => (
              <div>
                <label>Your Email: </label>
                <input {...input} type='email' placeholder='Enter your Email' />
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
                  type='password'
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
        </form>
      )}
    />
  )
}

const Login = (props) => {
  if (props.isAuth) return <Navigate replace to={"/profile"} />

  return (
    <>
      <h1>LOGIN</h1>
      <LoginForm login={props.login} />
    </>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)
