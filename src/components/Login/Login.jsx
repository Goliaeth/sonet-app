import classes from "./Login.module.css"
import { Form } from "react-final-form"
import { validators } from "../../utils/validators"
import { connect } from "react-redux"
import { login } from "../../redux/authReducer"
import { Navigate } from "react-router-dom"
import { FORM_ERROR } from "final-form"
import { createField, Input } from "../common/FormControls/FormControls"

const LoginForm = ({ login }) => {
  const onSubmit = (values) => {
    let errors = login(values.email, values.password, values.rememberMe)
    return errors.then((res) => ({ [FORM_ERROR]: res }))
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitError }) => (
        <form onSubmit={handleSubmit}>
          {createField({
            name: "email",
            validate: validators.required,
            component: Input,
            type: "email",
            placeholder: "Enter your Email",
            label: "Your Email:",
          })}
          {createField({
            name: "password",
            validate: validators.required,
            component: Input,
            type: "password",
            placeholder: "Enter your password",
            label: "Your password:",
          })}
          <div>
            {createField({
              name: "rememberMe",
              component: "input",
              type: "checkbox",
            })}{" "}
            remember me
          </div>
          {submitError && <div style={{ color: "red" }}>{submitError}</div>}
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
